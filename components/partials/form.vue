<template>
  <div class="form">
    <p class="form-label animation-item">{{ langs[currentLang]['contacts.your_name'] }}</p>
    <input
      v-model="data.name"
      type="text"
      name="name"
      class="form-input animation-item"
      :placeholder="langs[currentLang]['contacts.input_name']"
      autocomplete="off"
      @focus="hideCalc"
      @blur="showCalc"
    />
    <p class="form-label animation-item">{{ langs[currentLang]['contacts.email'] }}</p>
    <input
      v-model="data.email"
      type="email"
      name="mail"
      class="form-input animation-item"
      :placeholder="langs[currentLang]['contacts.input_email']"
      autocomplete="off"
      @focus="hideCalc"
      @blur="showCalc"
    />
    <button
      :disabled="!isSending && !isFormValidate"
      class="button animation-item"
      :class="{ '--disabled-button': !isSending && !isFormValidate }"
      @click.prevent="send"
    >{{ langs[currentLang]['body.subscribe'] }}</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      data: {
        name: null,
        email: null,
      },
      isSending: false,
    };
  },
  computed: {
    ...mapGetters({
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
    isFormValidate() {
      const regexp = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
      return this.data.name && this.data.email && regexp.test(this.data.email);
    },
  },
  methods: {
    hideCalc() {
        document.querySelector('.floating-btn').classList.add('--hidden')
    },
    showCalc() {
        document.querySelector('.floating-btn').classList.remove('--hidden')
    },
    async send() {
      try {
        this.isSending = true;
        const resp = await this.$axios.post(
          "https://admin.cashu.kz/api/subscribe",
          this.data
        );
      } catch (error) {
        console.log(error);
      } finally {
        this.isSending = false;
        this.data.name = null;
        this.data.email = null;
      }
    },
  },
};
</script>
