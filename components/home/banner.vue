<template>
  <div class="home-banner" ref="animationBlock">
    <!-- <pre>{{ langs[currentLang] }}</pre> -->
    <!-- <pre>{{ slides }}</pre> -->
    <div v-swiper:banner="options">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in slides" :key="slide.id">
          <div class="home-banner-inner">
            <!-- {{ slide }} -->
            <h2 class="home-banner-title animation-item" v-html="slide.name"></h2>
            <ul v-if="slide.options" class="home-banner-list">
              <li v-for="option in slide.options">
                <check />
                <p class="home-banner-text animation-item">
                  {{ option.name }}
                  <b v-if="option.next_text" >{{ option.next_text }}</b>
                </p>
              </li>
            </ul>
            <nuxt-link
              v-if="slide.file"
              class="button animation-item"
              to
              >
              {{ langs[currentLang]['body.details'] }}
            </nuxt-link>
          </div>
          <div class="home-banner-img-wrp">
            <img
              :src="slide.image
                ? $imageLink(slide.image)
                : require('@/static/img/banner.png')" alt="CashU image">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import check from '@/static/icons/check.svg'
import animation from '@/mixins/animation'
import { mapGetters } from 'vuex'

export default {
  mixins: [animation],
  data() {
    return {
      options: {
        spaceBetween: 20
      }
    }
  },
  components: {
    check
  },
  computed: {
    ...mapGetters({
      page: 'pages/GET_PAGE',
      currentLang: 'lang/GET_CURRENT_LANG',
      slides: 'pages/GET_SLIDES',
      langs: 'lang/GET_LANGS',
    })
  }
}
</script>
