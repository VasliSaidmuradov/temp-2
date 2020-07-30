<template>
  <div class="calculator">
    <!-- <pre>{{ $roundMoney(5002.9) }}</pre> -->
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
          <p class="--error-text">{{ errorMsg }}</p>

          <input
            type="number"
            :min="minMaxTerm[0]"
            :max="minMaxTerm[1]"
            v-model="dateVal"
            @change="onDateChange"
            @input="clearErrorMsg"
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
            <div class="--web"  v-for="(mark) in marks" :key="mark.id">{{ mark[currentLang] }}</div>
            <div class="--mobile" v-for="(markMobile) in marksMobile" :key="markMobile.id">{{ markMobile[currentLang] }}</div>
          </div>
        </div>
        <!-- Mobile calc start -->
        <div class="calculator-mobile">
          <div class="calculator-promo-wrp">
            <input v-model="promoCode" type="text" class="calculator-input" placeholder="Промокод" />
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
      // term: { val: 5, text: { ru: "5 дней", kk: "5 күн" } },
      marks: [
        { ru: "5 дней", kk: "5 күн" },
        { ru: "10 дней", kk: "10 күн" },
        { ru: "15 дней", kk: "15 күн" },
        { ru: "20 дней", kk: "20 күн" },
        { ru: "25 дней", kk: "25 күн" },
        { ru: "30 дней", kk: "30 күн" },
      ],
      marksMobile: [
        { ru: "5 дней", kk: "5 күн" },
        { ru: "30 дней", kk: "30 күн" },
      ],
      minMaxTerm: [5, 30],
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
  },
  watch: {
    currentTab(val) {
      if (val === "first") {
      }
    },
    sliderValue: function () {
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
        setTimeout(() => (this.loading = false), 200);
      }
    },
    "dateVal": function (val) {
      try {
        if (val < 5 || val > 30) return
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
        setTimeout(() => (this.loading = false), 200);
      }
    },
  },
  computed: {
    ...mapGetters({
      paymentShedule: "calculator/GET_PAYMENT_SHEDULE",
      langs: "lang/GET_LANGS",
      currentLang: "lang/GET_CURRENT_LANG",
    }),
    days() {
      return this.dateVal < this.minMaxTerm[0] || this.dateVal > this.minMaxTerm[1] ? this.minMaxTerm[0] : this.dateVal
    }
  },
  methods: {
    ...mapActions({
      fetchPaymentShedule: "calculator/fetchPaymentShedule",
    }),
    formattedTooltip(arg) {
      return arg.value + "₸";
    },
    increase() {
      if (this.sliderValue >= 130000) return;
      this.sliderValue += this.step;
    },
    decrease() {
      if (this.sliderValue <= 5000) return;
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
        this.loading = true;
        await this.calculate();
      } catch (e) {
        console.log(e);
      } finally {
        setTimeout(() => (this.loading = false), 200);
      }
    },
    async calculate() {
      const requestData = {
        amount: this.sliderValue,
        term: this.dateVal,
        promoCode: this.promoCode,
        group: this.currentGroup,
      };
      this.isSendingRequest = true;
      try {
        await this.fetchPaymentShedule(requestData);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => (this.isSendingRequest = false), 200);
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
        "_blank"
      );
    },
  },
};
</script>
