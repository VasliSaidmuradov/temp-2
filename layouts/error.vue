<template>
  <div class="error-page">
    <div class="layout-container">
      <!-- page: {{ page }} -->
      <div class="error-page-block" v-if="!page || error.statusCode === 404">
        <img src="/icons/404.svg" alt="CashU image" class="error-page-image" />
        <h4 class="error-page-title">{{ langs[currentLang]['body.not_found'] }}</h4>
        <nuxt-link class="button" to="/">{{ langs[currentLang]['body.back_to_main'] }}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ["error"],
  computed: {
    ...mapGetters({
      page: "pages/GET_PAGE",
    })
  }
};
</script>
