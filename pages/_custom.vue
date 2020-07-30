<template>
  <div class="payment">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>
    <div class="layout-container">
        <!-- >> <pre>{{ page }}</pre> -->
      <h1 class="page-title">{{ page.title[currentLang] }}</h1>
      <div class="payment-container">
        <div class="payment-block" v-html="page.extras[currentLang].custom_block"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  middleware: ["page"],
  computed: {
    ...mapGetters({
      page: "pages/GET_PAGE",
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
  },
}
</script>
