<template>
  <div class="calculator">
    <!-- <pre>{{ minMax }}</pre> -->
    <div class="calculator-nav">
      <button
        class="calculator-btn"
        :class="{'--active' : currentTab === 'first'}"
        @click="currentTab = 'first', currentGroup = 'BASIC'"
      >{{ langs[currentLang]['calculator.first_loan'] }}</button>
      <button
        class="calculator-btn"
        :class="{'--active' : currentTab === 'repeated'}"
        @click="currentTab = 'repeated', currentGroup = 'REGULAR'"
      >{{ langs[currentLang]['calculator.repeated_loan'] }}</button>
    </div>
    <div class="calculator-row">
      <div class="calculator-left">
        <div class="calculator-slider-wrp">
          <span class="calculator-slider-tooltip" @click="sliderTooltipShow = true">
            <input
              v-show="!sliderTooltipShow"
              type="text"
              class="calculator-slider-tooltip-text"
              :value="sliderValue + '₸'"
              >
            <input
              v-show="sliderTooltipShow"
              type="number"
              :min="5000"
              :max="130000"
              v-model="sliderValue"
              step="1000"
              class="calculator-slider-tooltip-input"
            >
          </span>
          <button class="calculator-decrease" @click="decrease">
            <range-arrow />
          </button>
          <div class="calculator-tooltip-wrp">
            <p class="calculator-label">{{ minMaxLoan[0] }}</p>
            <!-- <p class="calculator-label">30 000</p>
            <p class="calculator-label">55 000</p>
            <p class="calculator-label">80 000</p>
            <p class="calculator-label">105 000</p> -->
            <p class="calculator-label">{{ minMaxLoan[1] }}</p>
          </div>
          <client-only>
            <round-slider
              class="calculator-curved-slider"
              showTooltip="false"
              editable-tooltip="true"
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
          <!-- <p class="--error-text">{{ errorMsg }}</p> -->

          <input
            type="number"
            :min="minMaxTerm[0]"
            :max="minMaxTerm[1]"
            v-model="dateVal"
            step="1"
            @change="onDateChange"
            @input="clearErrorMsg"
            @focus="hideCalc"
            @blur="showCalc"
            class="calculator-date-tooltip"
          />
          <client-only>
            <vue-slider
              :tooltip="'none'"
              :contained="true"
              :dotSize="60"
              :min="minMaxTerm[0]"
              :max="minMaxTerm[1]"
              :marks="false"
              v-model="dateVal"
              @error="error"
              @change="clearErrorMsg"
              class="calculator-date-slider"
            />
          </client-only>

          <div class="calculator-date-marks">
            <div class="" v-for="(mark) in minMaxTerm" :key="mark.id">{{ mark }} {{ daysLang[currentLang] }}</div>
            <!-- <div class="--mobile" v-for="(markMobile) in marksMobile" :key="markMobile.id">{{ markMobile }} {{ daysLang[currentLang] }}</div> -->
          </div>
        </div>
        <!-- Mobile calc start -->
        <div class="calculator-mobile">
          <div class="calculator-promo-wrp">
            <input v-model="promoCode" @focus="hideCalc" @blur="showCalc" type="text" class="calculator-input" placeholder="Промокод" />
            <button
              class="button"
              :disabled="!promoCode"
              @click="applyPromoCode"
            >{{ langs[currentLang]['calculator.apply'] }}</button>
          </div>
          <div class="calculator-list-wrp">
            <transition v-if="loading" name="modal-fade">
              <div class="calculator-preloader">
                <img src="/icons/preloader.png" alt="CashU icon" />
                <p>{{ langs[currentLang]['body.aaccounting'] }}</p>
              </div>
            </transition>
            <ul class="calculator-list">
              <li>
                <p class="calculator-list-text">{{ langs[currentLang]['calculator.refund_date'] }}</p>
                <p
                  class="calculator-list-text --large"
                >{{ paymentShedule ? $formatDate(paymentShedule.dueDate) : '-' }}</p>
              </li>
              <li v-if="paymentShedule && paymentShedule.promoCodeStatus === 'ok'">
                <p class="calculator-list-text">{{ langs[currentLang]['calculator.reward'] }}</p>
                <p
                  class="calculator-list-text --large --gray"
                >
                  <span class="--red">{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestWithDiscount)) : 0 }} ₸</span>
                  <span class="--gray">{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestWithoutDiscount)) : 0 }} ₸</span>
                </p>
              </li>
              <li v-if="paymentShedule && paymentShedule.promoCodeStatus === 'ok'">
                <p class="calculator-list-text --red">{{ langs[currentLang]['body.discount'] }}</p>
                <p
                  class="calculator-list-text --large --red"
                >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestDiscountPercent)) : 0 }} %</p>
              </li>
              <li v-if="paymentShedule && paymentShedule.promoCodeStatus !== 'ok'">
                <p class="calculator-list-text">{{ langs[currentLang]['calculator.reward'] }}</p>
                <p class="calculator-list-text --large">{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestWithoutDiscount)) : 0 }} ₸</p>
              </li>
              <li>
                <p class="calculator-list-text">{{ langs[currentLang]['calculator.refund_amount'] }}</p>
                <p
                  class="calculator-list-text --large"
                >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.totalReturnAmount)) : 0 }} ₸</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- Mobile calc end -->
        <div class="calculator-btn-wrp">
          <button class="button" @click="sendMoney">
            {{ langs[currentLang]['calculator.get_money'] }}
            <span
              class="calculator-btn-amount"
            >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.principal)) : 0 }} ₸</span>
          </button>
        </div>
      </div>
      <div class="calculator-right">
        <transition v-if="loading" name="modal-fade">
          <div class="calculator-preloader">
            <img src="/icons/preloader.png" alt="CashU icon" />
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
              <p
                class="calculator-text"
              >{{ paymentShedule ? $formatMoney(paymentShedule.principal) : 0 }} ₸</p>
            </div>
          </div>
          <div class="calculator-col">
            <div class="calculator-col-inner">
              <p class="calculator-label">{{ langs[currentLang]['calculator.refund_amount'] }}</p>
              <p
                class="calculator-text"
              >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.totalReturnAmount)) : 0 }} ₸</p>
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
              <p
                class="calculator-text"
              >{{ paymentShedule ? $formatDate(paymentShedule.dueDate) : '-' }}</p>
            </div>
          </div>
          <div class="calculator-col">
            <div class="calculator-col-inner">
              <p class="calculator-label">{{ langs[currentLang]['calculator.for_period'] }}</p>
              <p class="calculator-text">{{ days }} {{ langs[currentLang]['calculator.days'] }}</p>
            </div>
          </div>
        </div>
        <div class="calculator-divider"></div>
        <div class="calculator-reward">
          <div v-if="paymentShedule && paymentShedule.promoCodeStatus === 'ok'">
            <div class="calculator-reward-wrap">
              <span class="calculator-reward-label">{{ langs[currentLang]['calculator.reward'] }}</span>
              <span
                class="calculator-reward-sum --sale"
              >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestWithDiscount)) : 0 }} ₸</span>
              <span
                class="calculator-reward-sum --old-price"
              >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestWithoutDiscount)) : 0 }} ₸</span>
            </div>
            <div class="calculator-reward-wrap --sale">
              <span class="calculator-reward-label">{{ langs[currentLang]['body.discount'] }}</span>
              <span
                class="calculator-reward-sum"
              >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestDiscountPercent)) : 0 }}%</span>
            </div>
          </div>
          <div v-else class="calculator-reward-row">
            <success />
            <div>
              <p class="calculator-label">{{ langs[currentLang]['calculator.reward'] }}</p>
              <p
                class="calculator-text"
              >{{ paymentShedule ? $formatMoney($roundMoney(paymentShedule.interestWithoutDiscount)) : 0 }} ₸</p>
            </div>
          </div>
        </div>
        <div class="calculator-promo-wrp">
          <input v-model="promoCode" type="text" class="calculator-input" placeholder="Промокод" />
          <button
            class="button"
            :disabled="!promoCode"
            @click="applyPromoCode"
          >{{ langs[currentLang]['calculator.apply'] }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const ERROR_TYPE = {
  VALUE: 1,
  INTERVAL: 2,
  MIN: 3,
  MAX: 4,
  ORDER: 5,
};

import rangeArrow from "@/static/icons/range-arrow.svg";
import bag from "@/static/icons/bag.svg";
import calender from "@/static/icons/calender.svg";
import success from "@/static/icons/success.svg";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    rangeArrow,
    bag,
    calender,
    success,
  },
  data() {
    return {
      dateVal: 5,
      sliderValue: 5000,
      step: 25000,
      radius: 450,
      daysLang: { ru: "дней", kk: "күн" },
      marks: [
        5,
        30,
      ],
      marksMobile: [
        5,
        30,
      ],
      minMaxTerm: [5, 30],
      minMaxLoan: [5000, 130000],
      sliderTooltipShow: false,
      currentTab: "first",
      promoCode: null,
      currentGroup: "BASIC",
      isSendingRequest: false,
      isCodeApplied: false,
      timeoutId: null,
      loading: false,
      errorMsg: "",
    };
  },
  mounted() {
    if (document.body.clientWidth <= 480) {
      this.radius = 350;
    }
    if (document.body.clientWidth <= 376) {
      this.radius = 300;
    }
    if (document.body.clientWidth <= 321) {
      this.radius = 270;
    }
    // this.applyMinMaxTerm(this.sliderValue);
  },
  watch: {
    currentTab(val) {
      if (val === "first") {
      }
    },
    currentGroup(val) {
      try {
        this.applyMinMaxTerm(this.sliderValue);
        if (this.timeoutId) clearTimeout(this.timeoutId);

        this.timeoutId = setTimeout(async () => {
          await this.calculate();
        }, 300);
      } catch (e) {
        console.log(e);
      } finally {}
    },
    sliderValue: function (val) {

      try {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(async () => {
          if (val < this.minMaxLoan[0]) this.sliderValue = this.minMaxLoan[0];
          else if (val > this.minMaxLoan[1]) this.sliderValue = this.minMaxLoan[1];
          else if (val % 1000 !== 0) {
            this.sliderValue = (val / 1000).toFixed() * 1000;
          }
          this.applyMinMaxTerm(this.sliderValue);
          this.sliderTooltipShow = false;

          await this.calculate();
        }, 1000);
      } catch (e) {
        console.log(e);
      } finally {}
    },
    "dateVal": function (val) {
      try {
        if (this.timeoutId) {
          clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(async () => {
          if(val < this.minMaxTerm[0]) this.dateVal = this.minMaxTerm[0];
          if(val > this.minMaxTerm[1]) this.dateVal = this.minMaxTerm[1];

          await this.calculate();
        }, 1000);
      } catch (e) {
        console.log(e);
      } finally {}
    },
  },
  computed: {
    ...mapGetters({
      paymentShedule: "calculator/GET_PAYMENT_SHEDULE",
      langs: "lang/GET_LANGS",
      currentLang: "lang/GET_CURRENT_LANG",
      minMax: "calculator/GET_MIN_MAX",
    }),
    days() {
      return this.dateVal < this.minMaxTerm[0] || this.dateVal > this.minMaxTerm[1] ? this.minMaxTerm[0] : this.dateVal;
    }
  },
  methods: {
    ...mapActions({
      fetchPaymentShedule: "calculator/fetchPaymentShedule",
    }),
    applyMinMaxTerm(val) {
      const _minMaxBasic = this.minMax.filter(el => el.group === 'BASIC');
      const _minMaxRegular = this.minMax.filter(el => el.group === 'REGULAR');
      let _minMax = null;

      if (this.currentGroup === 'BASIC') {
        // console.log(_minMaxBasic);
        _minMax = _minMaxBasic.find(el => val >= el.minAmount && val <= el.maxAmount);
      }
      if (this.currentGroup === 'REGULAR') {
        // console.log(_minMaxRegular);
        _minMax = _minMaxRegular.find(el => val >= el.minAmount && val <= el.maxAmount);
      }
      // console.log('_minMax: ', _minMax);
      // console.log('minMaxTerm: ', this.minMaxTerm);
      this.minMaxTerm[0] = _minMax.minTerm;
      this.minMaxTerm[1] = _minMax.maxTerm;

      if (this.dateVal > this.minMaxTerm[1]) this.dateVal = this.minMaxTerm[1];
      // console.log('minMaxTerm: ', this.minMaxTerm);
    },
    formattedTooltip(arg) {
      return arg.value + "₸";
    },
    displayInput() {
      this.sliderTooltipShow = true;
    },
    increase() {
      if (this.sliderValue >= this.minMaxLoan[1]) return;
      this.sliderValue += this.step;
    },
    decrease() {
      if (this.sliderValue <= this.minMaxLoan[0]) return;
      this.sliderValue -= this.step;
    },
    error(type, msg) {
      switch (type) {
        case ERROR_TYPE.MIN:
          this.errorMsg = "Минимальный срок 5 дней";
          break;
        case ERROR_TYPE.MAX:
          this.errorMsg = "Максимальный срок 30 дней";
          break;
        case ERROR_TYPE.VALUE:
          this.errorMsg = "";
          break;
      }
      // this.errorMsg = msg;
    },
    clearErrorMsg() {
      this.errorMsg = "";
    },
    onDateInput(e) {
      return;
    },
    onDateChange(value) {
      return;
    },
    async applyPromoCode() {
      this.code = this.promoCode;
      this.isCodeApplied = true;
      try {
        await this.calculate();
      } catch (e) {
        console.log(e);
      } finally {
      }
    },
    async calculate() {
      this.loading = true;

      const requestData = {
        amount: this.sliderValue,
        term: this.dateVal,
        promoCode: this.promoCode,
        group: this.currentGroup,
      };

      try {
        await this.fetchPaymentShedule(requestData);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => (this.loading = false), 200);
      }
    },
    reCalc(e) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(this.calculate(), 800);
    },
    sendMoney() {
      let url =
        this.currentGroup === "BASIC"
          ? "https://my.cashu.kz/auth/registration"
          : "https://my.cashu.kz/auth/login";
      window.open(
        `${url}?loanAmount=${this.sliderValue}&period=${this.dateVal}&group=${this.currentGroup}&lang=${this.currentLang}`,
        "_self"
      );
    },
    hideCalc() {
      document.querySelector('.floating-btn').classList.add('--hidden');
    },
    showCalc() {
      document.querySelector('.floating-btn').classList.remove('--hidden');
    },
  },
};
</script>
