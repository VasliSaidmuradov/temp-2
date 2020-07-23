<template>
    <div class="calculator">
        <!-- <pre>{{ langs[currentLang] }}</pre> -->
        <div class="calculator-nav">
            <button class="calculator-btn"
                :class="{'--active' : currentTab === 'first'}"
                @click="currentTab = 'first', currentGroup = 'BASIC'">{{ langs[currentLang]['calculator.first_loan'] }}</button>
            <button class="calculator-btn"
                :class="{'--active' : currentTab === 'repeated'}"
                @click="currentTab = 'repeated', currentGroup = 'REGULAR'">{{ langs[currentLang]['calculator.repeated_loan'] }}</button>
        </div>
        <div class="calculator-row"> <!-- v-if="currentTab === 'first'" -->
            <div class="calculator-left">
                <div class="calculator-slider-wrp">
                    <button class="calculator-decrease" @click="decrease">
                        <range-arrow />
                    </button>
                    <div class="calculator-tooltip-wrp">
                        <p class="calculator-label">5 000</p>
                        <p class="calculator-label">30 000</p>
                        <p class="calculator-label">55 000</p>
                        <p class="calculator-label">80 000</p>
                        <p class="calculator-label">105 000</p>
                        <p class="calculator-label">130 000</p>
                    </div>
                    <client-only>
                        <round-slider
                            class="calculator-curved-slider"
                            editable-tooltip="false"
                            handle-size="68"
                            line-cap="round"
                            width="8"
                            :radius="radius"
                            max="5000"
                            min="130000"
                            startAngle="-120"
                            endAngle="+60"
                            start-value="0"
                            range-color="#5AE0B6"
                            path-color="#DEE1E5"
                            v-model="sliderValue"
                            :tooltip-format="formattedTooltip"
                            tooltip-color="#132333"
                            step="1000"
                        />
                    </client-only>
                    <button class="calculator-increase" @click="increase">
                        <range-arrow />
                    </button>
                </div>
                <div class="calculator-date-wrp">
                    <!-- <pre>{{ sliderValue }}</pre> -->
                    <div class="calculator-date-tooltip"> {{ term.text[currentLang] }} </div>
                    <client-only>
                        <vue-slider
                            :tooltip="'none'"
                            :contained="true"
                            :dotSize="60"
                            :min="5"
                            :max="30"
                            :data="data"
                            :marks="false"
                            v-model="term" />
                    </client-only>
                    <div class="calculator-date-marks">
                      <span v-for="(mark, index) in marks" :key="index">{{ mark[currentLang] }}</span>
                    </div>
                </div>
                <div class="calculator-mobile">
                    <div class="calculator-promo-wrp">
                        <input v-model="promoCode" type="text" class="calculator-input" placeholder="Промокод">
                        <button class="button" :disabled="!promoCode" @click="applyPromoCode">
                          {{ langs[currentLang]['calculator.apply'] }}
                        </button>
                    </div>
                    <div class="calculator-list-wrp">
                        <transition v-if="loading" name="modal-fade">
                            <div class="calculator-preloader">
                                <img src="/icons/preloader.png" alt="CashU icon">
                                <p>{{ langs[currentLang]['body.aaccounting'] }}</p>
                            </div>
                        </transition>
                        <ul class="calculator-list">
                            <li>
                                <p class="calculator-list-text">{{ langs[currentLang]['calculator.refund_date'] }}</p>
                                <p class="calculator-list-text --large">{{ paymentShedule ? $formatDate(paymentShedule.dueDate) : '-' }}</p>
                            </li>
                            <li v-if="paymentShedule && paymentShedule.promoCodeStatus === 'ok'">
                                <p class="calculator-list-text">{{ langs[currentLang]['calculator.reward'] }}</p>
                                <p class="calculator-list-text --large --gray">{{ paymentShedule ? $formatMoney(paymentShedule.interestWithoutDiscount) : 0 }} ₸</p>
                            </li>
                            <li v-if="paymentShedule && paymentShedule.promoCodeStatus === 'ok'">
                                <p class="calculator-list-text --red">Со скидкой {{ paymentShedule.interestDiscountPercent }}%</p>
                                <p class="calculator-list-text --large --red">{{ paymentShedule ? $formatMoney(paymentShedule.interestWithDiscount) : 0 }} ₸</p>
                            </li>
                            <li v-if="paymentShedule && paymentShedule.promoCodeStatus !== 'ok'">
                                <p class="calculator-list-text">{{ langs[currentLang]['calculator.reward'] }}</p>
                                <p class="calculator-list-text --large">{{ paymentShedule ? $formatMoney(paymentShedule.interestWithoutDiscount) : 0 }} ₸</p>
                            </li>
                            <li>
                                <p class="calculator-list-text">{{ langs[currentLang]['calculator.refund_amount'] }}</p>
                                <p class="calculator-list-text --large">{{ paymentShedule ? paymentShedule.totalReturnAmount : 0 }} ₸</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="calculator-btn-wrp">
                    <button class="button" @click="sendMoney">
                      {{ langs[currentLang]['calculator.get_money'] }}
                      <span style="font-size: 1.2em; padding-left: 0.5em;">{{ paymentShedule ? paymentShedule.totalReturnAmount : 0 }} ₸</span>
                    </button>
                </div>
            </div>
            <div class="calculator-right">
                <transition v-if="loading" name="modal-fade">
                    <div class="calculator-preloader">
                        <img src="/icons/preloader.png" alt="CashU icon">
                        <p>{{ langs[currentLang]['body.aaccounting'] }}</p>
                    </div>
                </transition>
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <bag />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">{{ langs[currentLang]['calculator.you_take'] }}</p>
                            <p class="calculator-text">{{ paymentShedule ? paymentShedule.principal : 0 }} ₸</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">{{ langs[currentLang]['calculator.refund_amount'] }}</p>
                            <p class="calculator-text">{{ paymentShedule ? paymentShedule.totalReturnAmount : 0 }} ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <calender />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">{{ langs[currentLang]['calculator.refund_date'] }}</p>
                            <p class="calculator-text">{{ paymentShedule ? $formatDate(paymentShedule.dueDate) : '-' }}</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">{{ langs[currentLang]['calculator.for_period'] }}</p>
                            <p class="calculator-text">{{ term.val }} {{ langs[currentLang]['calculator.days'] }}</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-divider"></div>
                <div class="calculator-reward">
                    <div v-if="paymentShedule && paymentShedule.promoCodeStatus === 'ok'">
                      <div class="calculator-reward-wrap">
                        <span class="calculator-reward-label">{{ langs[currentLang]['calculator.reward'] }}</span>
                        <span class="calculator-reward-sum --old-price">
                          {{ paymentShedule ? $formatMoney(paymentShedule.interestWithoutDiscount) : 0 }} ₸
                        </span>
                      </div>
                      <div class="calculator-reward-wrap --sale">
                        <span class="calculator-reward-label">Со скидкой {{ paymentShedule.interestDiscountPercent }}%</span>
                        <span class="calculator-reward-sum">
                          {{ paymentShedule ? $formatMoney(paymentShedule.interestWithDiscount) : 0 }} ₸
                        </span>
                      </div>
                    </div>
                    <div v-else class="calculator-reward-row">
                        <success />
                        <div>
                            <p class="calculator-label">{{ langs[currentLang]['calculator.reward'] }}</p>
                            <p class="calculator-text">{{ paymentShedule ? $formatMoney(paymentShedule.interestWithoutDiscount) : 0 }} ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-promo-wrp">
                    <input v-model="promoCode" type="text" class="calculator-input" placeholder="Промокод">
                    <button class="button" :disabled="!promoCode" @click="applyPromoCode">
                      {{ langs[currentLang]['calculator.apply'] }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import rangeArrow from '@/static/icons/range-arrow.svg'
import bag from '@/static/icons/bag.svg'
import calender from '@/static/icons/calender.svg'
import success from '@/static/icons/success.svg'

import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        rangeArrow,
        bag,
        calender,
        success,
    },
    data() {
        return {
            sliderValue: 5000,
            step: 25000,
            radius: 450,
            term: { val: 5, text: { ru: '5 дней', kk: '5 күн'} },
            marks: [
                { ru: '5 дней', kk: '5 күн'},
                { ru: '10 дней', kk: '10 күн'},
                { ru: '15 дней', kk: '15 күн'},
                { ru: '20 дней', kk: '20 күн'},
                { ru: '25 дней', kk: '25 күн'},
                { ru: '30 дней', kk: '30 күн'}
            ],
            data: [
              {
                val: 5,
                text: { ru: '5 дней', kk: '5 күн'}
              },{
                val: 6,
                text: { ru: '6 дней', kk: '6 күн'}
              },{
                val: 7,
                text: { ru: '7 дней', kk: '7 күн'}
              },{
                val: 8,
                text: { ru: '8 дней', kk: '8 күн'}
              },{
                val: 9,
                text: { ru: '9 дней', kk: '9 күн'}
              },{
                val: 10,
                text: { ru: '10 дней', kk: '10 күн'}
              },{
                val: 11,
                text: { ru: '11 дней', kk: '11 күн'}
              },{
                val: 12,
                text: { ru: '12 дней', kk: '12 күн'}
              },{
                val: 13,
                text: { ru: '13 дней', kk: '13 күн'}
              },{
                val: 14,
                text: { ru: '14 дней', kk: '14 күн'}
              },{
                val: 15,
                text: { ru: '15 дней', kk: '15 күн'}
              },{
                val: 16,
                text: { ru: '16 дней', kk: '16 күн'}
              },{
                val: 17,
                text: { ru: '17 дней', kk: '17 күн'}
              },{
                val: 18,
                text: { ru: '18 дней', kk: '18 күн'}
              },{
                val: 19,
                text: { ru: '19 дней', kk: '19 күн'}
              },{
                val: 20,
                text: { ru: '20 дней', kk: '20 күн'}
              },{
                val: 21,
                text: { ru: '21 дней', kk: '21 күн'}
              },{
                val: 22,
                text: { ru: '22 дней', kk: '22 күн'}
              },{
                val: 23,
                text: { ru: '23 дней', kk: '23 күн'}
              },{
                val: 24,
                text: { ru: '24 дней', kk: '24 күн'}
              },{
                val: 25,
                text: { ru: '25 дней', kk: '25 күн'}
              },{
                val: 26,
                text: { ru: '26 дней', kk: '26 күн'}
              },{
                val: 27,
                text: { ru: '27 дней', kk: '27 күн'}
              },{
                val: 28,
                text: { ru: '28 дней', kk: '28 күн'}
              },{
                val: 29,
                text: { ru: '29 дней', kk: '29 күн'}
              },{
                val: 30,
                text: { ru: '30 дней', kk: '30 күн'}
              }
            ],
            currentTab: 'first',
            promoCode: null,
            currentGroup: 'BASIC',
            isSendingRequest: false,
            isCodeApplied: false,
            timeoutId: null,
            loading: false,
        }
    },
    mounted() {
        if (document.body.clientWidth <= 480) {
            this.radius = 350
        }
        if (document.body.clientWidth <= 376) {
            this.radius = 300
        }
        if (document.body.clientWidth <= 321) {
            this.radius = 270
        }
    },
    watch: {
      currentTab(val) {
        if (val === 'first') {
        }
      },
      sliderValue: function() {
        try {
          this.loading = true;
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
          }

          this.timeoutId = setTimeout(async () => {
            await this.calculate();
          }, 500);
        } catch(e) {
          console.log(e);
        } finally {
          setTimeout(() => this.loading = false, 200);
        }
      },
      "term.val": function() {
        try {
          this.loading = true;
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
          }

          this.timeoutId = setTimeout(async () => {
            await this.calculate();
          }, 500);
        } catch (e) {
          console.log(e);
        } finally {
          setTimeout(() => this.loading = false, 200);
        }
      }
    },
    computed: {
        ...mapGetters({
            paymentShedule: 'calculator/GET_PAYMENT_SHEDULE',
            langs: 'lang/GET_LANGS',
            currentLang: 'lang/GET_CURRENT_LANG',
        }),
    },
    methods: {
        ...mapActions({
            fetchPaymentShedule: 'calculator/fetchPaymentShedule',
        }),
        formattedTooltip(arg) {
            return arg.value + '₸'
        },
        increase() {
            if (this.sliderValue >= 130000) return
            this.sliderValue += this.step
        },
        decrease() {
            if (this.sliderValue <= 5000) return
            this.sliderValue -= this.step
        },
        async applyPromoCode() {
            this.code = this.promoCode;
            this.isCodeApplied = true;
            try {
              this.loading = true;
              await this.calculate();
            } catch (e) {
              console.log(e);
            } finally {
              setTimeout(() => this.loading = false, 200);
            }
        },
        async calculate() {
            const requestData = {
              amount: this.sliderValue,
              term: this.term.val,
              promoCode: this.promoCode,
              group: this.currentGroup,
            }
            this.isSendingRequest = true;
            try {
              await this.fetchPaymentShedule(requestData);
            } catch(error) {
              console.log(error);
              } finally {
              setTimeout(() => this.isSendingRequest = false, 200);
            }
        },
        reCalc(e) {
          if (this.timeoutId) {
            clearTimeout(this.timeoutId);
          }

          this.timeoutId = setTimeout(this.calculate(), 800);
        },
        sendMoney() {
          let url = 'https://my.cashu.kz/auth/registration';
          window.open(`${url}?loanAmount=${this.sliderValue}&period=${this.term.val}`, '_blank');
        },
    },
}
</script>
