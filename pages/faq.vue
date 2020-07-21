<template>
  <div class="faq" ref="animationBlock">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>
    <!-- <pre>{{ faqList.data }}</pre> -->
    <div class="layout-container">
      <h1 class="section-title animation-item">{{ page.title[currentLang] }}</h1>
      <div class="faq-text animation-item" v-html="langs[currentLang]['body.security_ur_money']"></div>
      <div class="faq-container">
        <div
          v-for="(faq, index) in faqList.data" :key="index"
          class="faq-dropdown animation-item"
          @click="toggleDropdown(index)"
          >
          <div class="faq-question">{{ faq.name[currentLang] }}</div>
          <transition name="dropdown-fade">
            <div class="faq-answer" v-if="index === activeDropdownIndex">
              <p>{{ faq.description[currentLang] }}</p>
              <img :src="faq.image ? faq.image : require('@/static/img/faq.png')" alt="CashU image">
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import animation from '@/mixins/animation'
import { mapGetters } from 'vuex'

export default {
  mixins: [animation],
  middleware: ['page', 'faq'],
  data() {
    return {
      activeDropdownIndex: null
    }
  },
  computed: {
    ...mapGetters({
      page: 'pages/GET_PAGE',
      currentLang: 'lang/GET_CURRENT_LANG',
      langs: 'lang/GET_LANGS',
      faqList: 'faq/GET_FAQ',
    }),
  },
  methods: {
    toggleDropdown(i) {
      if (i === this.activeDropdownIndex) {
        this.activeDropdownIndex = null
      } else {
        this.activeDropdownIndex = i
      }
    }
  }
}
</script>
