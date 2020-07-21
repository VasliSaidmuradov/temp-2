<template>
  <div class="home-banner" ref="animationBlock">
    <div v-swiper:banner="options">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in 3" :key="slide.id">
          <div class="home-banner-inner">
            <!-- >>> {{ slide }} -->
            <h2 class="home-banner-title animation-item" v-html="slide"></h2>
            <ul class="home-banner-list">
              <li>
                <check />
                <p class="home-banner-text animation-item">Моментальное решение по микрокредиту – 7 секунд</p>
              </li>
              <li>
                <check />
                <p class="home-banner-text animation-item">Отправка денег 24 часа 7 дней в неделю – без выходных*</p>
              </li>
              <li>
                <check />
                <p class="home-banner-text animation-item">Простая и удобная регистрация за 5 минут</p>
              </li>
              <li>
                <check />
                <p class="home-banner-text animation-item">
                  Для лояльных клиентов – бесплатные микрокредиты
                  <b>*при условии привязки банковской карты</b>
                </p>
              </li>
            </ul>
            <nuxt-link class="button animation-item" to>Подробнее</nuxt-link>
          </div>
          <div class="home-banner-img-wrp">
            <img
              :src="slide.image
                ? slide.image
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
      extras: 'pages/GET_EXTRAS',
      currentLang: 'lang/GET_CURRENT_LANG',
    })
  }
}
</script>
