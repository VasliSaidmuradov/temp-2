<template>
    <div class="calculator">
        <!-- <pre>{{ currentGroup }}</pre> -->
        <div class="calculator-nav">
            <button class="calculator-btn"
                :class="{'--active' : currentTab === 'first'}"
                @click="currentTab = 'first', currentGroup = 'BASIC'">Первый микрокредит</button>
            <button class="calculator-btn"
                :class="{'--active' : currentTab === 'repeated'}"
                @click="currentTab = 'repeated', currentGroup = 'REGULAR'">Повторный микрокредит</button>
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
                            step="500"
                        />
                    </client-only>
                    <button class="calculator-increase" @click="increase">
                        <range-arrow />
                    </button>
                </div>
                <div class="calculator-date-wrp">
                    <!-- <pre>{{ term }}</pre> -->
                    <div class="calculator-date-tooltip"> {{ term.text }} </div>
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
                      <span v-for="(mark, index) in marks" :key="index">{{ mark }}</span>
                    </div>
                </div>
                <div class="calculator-btn-wrp">
                    <button :disabled="isSendingRequest" class="button" @click="calculate">Получить деньги</button>
                </div>
            </div>
            <div class="calculator-right">
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <bag />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Вы берете</p>
                            <p class="calculator-text">{{ paymentShedule ? paymentShedule.principal : 0 }} ₸</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Сумма к возврату</p>
                            <p class="calculator-text">{{ paymentShedule ? paymentShedule.interest : 0 }} ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <calender />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Дата возврата</p>
                            <p class="calculator-text">{{ paymentShedule ? $formatDate(paymentShedule.dueDate) : '-' }}</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">На срок</p>
                            <p class="calculator-text">{{ term.val }} дней</p>
                        </div>
                    </div>
                    <!-- {{ (new Date("2020-07-20") - new Date()) }} -->
                </div>
                <div class="calculator-divider"></div>
                <div class="calculator-reward">
                    <div class="calculator-reward-row">
                        <success />
                        <div>
                            <p class="calculator-label">Вознаграждение</p>
                            <p class="calculator-text">{{ paymentShedule ? $formatMoney(paymentShedule.interest) : 0 }} ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-promo-wrp">
                    <input v-model="promoCode" type="text" class="calculator-input" placeholder="Промокод">
                    <button class="button" :disabled="!promoCode" @click="applyPromoCode">Применить</button>
                </div>
            </div>
        </div>
        <!-- <div class="calculator-row" v-if="currentTab === 'repeated'">
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
                            step="500"
                        />
                    </client-only>
                    <button class="calculator-increase" @click="increase">
                        <range-arrow />
                    </button>
                </div>
                <div class="calculator-date-wrp">
                  <div class="calculator-date-tooltip"> {{ term.text }} </div>
                    <client-only>
                        <vue-slider
                            :tooltip="'none'"
                            :contained="true"
                            :dotSize="60"
                            :min="5"
                            :max="30"
                            :data="data"
                            :marks="true"
                            v-model="term" />
                    </client-only>
                </div>
                <div class="calculator-btn-wrp">
                    <button :disabled="isSendingRequest" class="button" @click="calculate">Получить деньги</button>
                </div>
            </div>
            <div class="calculator-right">
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <bag />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Вы берете</p>
                            <p class="calculator-text">70 000 ₸</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Сумма к возврату</p>
                            <p class="calculator-text">75 000 ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-row">
                    <div class="calculator-col">
                        <div class="calculator-icon">
                            <calender />
                        </div>
                        <div class="calculator-col-inner">
                            <p class="calculator-label">Дата возврата</p>
                            <p class="calculator-text">10 июня 2020</p>
                        </div>
                    </div>
                    <div class="calculator-col">
                        <div class="calculator-col-inner">
                            <p class="calculator-label">На срок</p>
                            <p class="calculator-text">10 дней</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-divider"></div>
                <div class="calculator-reward">
                    <div class="calculator-reward-row">
                        <success />
                        <div>
                            <p class="calculator-label">Вознаграждение</p>
                            <p class="calculator-text">4 500 ₸</p>
                        </div>
                    </div>
                </div>
                <div class="calculator-promo-wrp">
                    <input v-model="promoCode" type="text" class="calculator-input" placeholder="Промокод">
                    <button class="button" disabled>Применить</button>
                </div>
            </div>
        </div> -->
        <!-- <pre>{{ isSendingRequest }}</pre> -->
        <!-- <pre>{{ promoCode }}</pre> -->
        <pre>{{ paymentShedule }}</pre>
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
            term: { val: 5, text: '5 дней' },
            marks: ['5 дней', '10 дней', '15 дней', '20 дней', '25 дней', '30 дней'],
            data: [
              {
                val: 5,
                text: '5 дней'
              },{
                val: 6,
                text: '6 дней'
              },{
                val: 7,
                text: '7 дней'
              },{
                val: 8,
                text: '8 дней'
              },{
                val: 9,
                text: '9 дней'
              },{
                val: 10,
                text: '10 дней'
              },{
                val: 11,
                text: '11 дней'
              },{
                val: 12,
                text: '12 дней'
              },{
                val: 13,
                text: '13 дней'
              },{
                val: 14,
                text: '14 дней'
              },{
                val: 15,
                text: '15 дней'
              },{
                val: 16,
                text: '16 дней'
              },{
                val: 17,
                text: '17 дней'
              },{
                val: 18,
                text: '18 дней'
              },{
                val: 19,
                text: '19 дней'
              },{
                val: 20,
                text: '20 дней'
              },{
                val: 21,
                text: '21 дней'
              },{
                val: 22,
                text: '22 дней'
              },{
                val: 23,
                text: '23 дней'
              },{
                val: 24,
                text: '24 дней'
              },{
                val: 25,
                text: '25 дней'
              },{
                val: 26,
                text: '26 дней'
              },{
                val: 27,
                text: '27 дней'
              },{
                val: 28,
                text: '28 дней'
              },{
                val: 29,
                text: '29 дней'
              },{
                val: 30,
                text: '30 дней'
              }
            ],
            currentTab: 'first',
            promoCode: null,
            currentGroup: 'BASIC',
            isSendingRequest: false,
            isCodeApplied: false,
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
      }
    },
    computed: {
        ...mapGetters({
            paymentShedule: 'calculator/GET_PAYMENT_SHEDULE',
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
        applyPromoCode() {
            this.code = this.promoCode
            this.isCodeApplied = true
        },
        async calculate() {
            const requestData = {
              amount: this.sliderValue,
              term: this.term.val,
              promoCode: this.promoCode,
              group: this.currentGroup,
            }
            this.isSendingRequest = true;
            console.log('req data: ', requestData)
            try {
              await this.fetchPaymentShedule(requestData);
            } catch(error) {
              console.log(error);
              } finally {
              setTimeout(() => this.isSendingRequest = false, 200);
            }
        }
    },
}
</script>
