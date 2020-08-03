<template>
  <div class="">
    <div v-if="page" class="payment">
      <div class="breadcrumbs">
        <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
        <nuxt-link v-if="page" to>{{ page.title[currentLang] }}</nuxt-link>
      </div>
      <div class="layout-container">
          <!-- >> <pre>{{ page }}</pre> -->
        <h1 class="page-title">{{ page.title[currentLang] }}</h1>
        <div class="payment-container">
          <div class="payment-block" v-html="page.extras[currentLang].custom_block"></div>
        </div>
      </div>
    </div>

    <div v-else class="error-page">
      <div class="layout-container">
        <!-- page: {{ page }} -->
        <div class="error-page-block" v-if="!page || error.statusCode === 404">
          <img src="/icons/404.svg" alt="CashU image" class="error-page-image" />
          <h4 class="error-page-title">Извините. Страница, которую вы ищете, не найдена</h4>
          <nuxt-link class="button" to="/">Вернуться на главную</nuxt-link>
        </div>
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
