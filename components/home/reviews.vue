<template>
    <div class="home-reviews layout-container" ref="animationBlock">
        <div class="home-slider-title">
            <h3 class="animation-item">Отзывы</h3>
            <!-- {{ reviews }} -->
            <div class="home-slider-nav">
                <button class="home-slider-prev animation-item home-reviews-prev"><slider-arrow /></button>
                <button class="home-slider-next animation-item home-reviews-next"><slider-arrow /></button>
            </div>
        </div>
        <div v-swiper:homeReviews="options">
            <div class="swiper-wrapper">
                <div class="swiper-slide animation-item" v-for="review in reviews.data" :key="reviews.id">
                    <div class="home-reviews-item">
                        <div class="home-reviews-name-wrp">
                            <img
                            :src="review.image ? review.image : require('@/static/icons/avatar-placeholder.png')"
                            :alt="review.name">
                            <div class="home-reviews-name">
                                <h4>{{ review.name }}</h4>
                                <p>{{ review.city }}</p>
                            </div>
                        </div>
                        <p class="home-reviews-text">{{ review.review }}</p>
                    </div>
                </div>
            </div>
        </div>
         <div class="home-reviews-mob-nav animation-item">
            <button class="home-slider-prev home-reviews-prev"><slider-arrow /></button>
            <button class="home-slider-next home-reviews-next"><slider-arrow /></button>
        </div>
    </div>
</template>

<script>
import sliderArrow from '@/static/icons/slider-arrow.svg'
import animation from '@/mixins/animation'
import { mapGetters } from 'vuex'

export default {
  mixins: [animation],
  data() {
    return {
      options: {
        slidesPerView: 3,
        navigation: {
          nextEl: '.home-reviews-next',
          prevEl: '.home-reviews-prev'
        },
        breakpoints: {
          1025: {
            slidesPerView: 3
          },
          768: {
            slidesPerView: 2
          },
          320: {
            slidesPerView: 1
          }
        }
      }
    }
  },
  components: {
    sliderArrow
  },
  computed: {
    ...mapGetters({
      reviews: 'reviews/GET_REVIEWS',
    }),
  }
}
</script>
