<template>
  <div>
    <!-- <pre>{{ page }}</pre> -->
    <keep-alive v-if="page">
      <component :is="componentId"></component>
    </keep-alive>
    <div v-else class="error-page">
      <div class="layout-container">
        <div class="error-page-block" v-if="!page || error.statusCode === 404">
          <img src="/icons/404.svg" alt="CashU image" class="error-page-image" />
          <h4 class="error-page-title">{{ langs[currentLang]['body.not_found'] }}</h4>
          <nuxt-link class="button" to="/">{{ langs[currentLang]['body.back_to_main'] }}</nuxt-link>
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
  beforeCreate() {
    this.componentId = () => import(`@/components/pages/${this.page.template}`)
  },
  head() {
    const page = this.page ? this.page.extras[this.currentLang] : {}
    let metas = []
    if (page.meta_description) {
      metas.push({
        hid: 'description',
        name: 'description',
        content: page.meta_description
      })
    }
    if (page.meta_keywords) {
      metas.push({
        hid: 'keywords',
        name: 'keywords',
        content: page.meta_keywords
      })
    }
    return {
      title: page.meta_title,
      meta: metas
    }
  },
  async fetch({ store, params, route }) {
    if (params.page === 'faq') await store.dispatch('faq/fetchFaq')
    if (params.page === 'reviews') await store.dispatch('reviews/fetchReviews', { per_page: 4 })
    if (params.page === 'articles') await await store.dispatch('posts/fetchPosts', route.fullPath)
  }
}
</script>
