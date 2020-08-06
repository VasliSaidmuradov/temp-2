<template>
  <div class="loan-hero" ref="animationBlock">
    <!-- <pre>{{ page }}</pre> -->
    <p class="breadcrumbs loan-hero-title animation-item">{{ page.extras[currentLang].title_take }}</p>
    <div class="loan-hero-image">
      <img :src="page.extras[currentLang].image
              ? $imageLink(page.extras[currentLang].image)
              : $imageLink(page.extras[currentLang].mob_image)"
        alt="CashU image">
    </div>
    <div class="loan-hero-image-mob">
      <img :src="page.extras[currentLang].mob_image
                ? $imageLink(page.extras[currentLang].mob_image)
                : $imageLink(page.extras[currentLang].image)"
        alt="CashU image">
    </div>
    <!-- <div class="layout-container">
      <div class="loan-hero-row">
        <p class="loan-hero-title animation-item">{{ page.extras[currentLang].name_in_first }}</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import animation from '@/mixins/animation'
import { mapGetters } from 'vuex'

export default {
  mixins: [animation],
  props: {
    page: Object,
  },
  computed: {
    ...mapGetters({
      currentLang: 'lang/GET_CURRENT_LANG',
      langs: 'lang/GET_LANGS',
    }),
  },
}
</script>
