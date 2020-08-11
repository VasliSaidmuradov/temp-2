

<template>

<div class="home-news layout-container" ref="animationBlock">
    <div class="home-slider-title">
        <h3 class="animation-item">{{ langs[currentLang]['body.articles'] }}</h3>
        <!-- {{ currentLang }} -->
        <div class="home-slider-nav">
            <button class="home-slider-prev animation-item home-news-prev">
                <slider-arrow />
            </button>
            <button class="home-slider-next animation-item home-news-next">
                <slider-arrow />
            </button>
        </div>
    </div>
    <div v-swiper:homeNews="options">
        <div class="swiper-wrapper">
          <!-- {{ posts }} -->
            <div class="swiper-slide animation-item" v-for="post in posts.data" :key="post.id">
                <nuxt-link :to="`/articles/${post.slug}`">
                    <div class="home-news-img-wrp">
                        <img :src="post.image ? post.image : require('@/static/img/news.png')" alt="CashU image">
                    </div>
                    <p class="home-news-date">{{ $formatDate(post.updated_at) }}</p>
                    <p class="home-news-text">
                        {{ post.name[currentLang].length > 40 ? post.name[currentLang].slice(0, 35) + '...' : post.name[currentLang] }}
                    </p>
                </nuxt-link>
            </div>
        </div>
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
                slidesPerView: 4,
                spaceBetween: 24,
                navigation: {
                    nextEl: '.home-news-next',
                    prevEl: '.home-news-prev'
                },
                breakpoints: {
                    1025: {
                        freeMode: false
                    },
                    320: {
                        slidesPerView: 'auto',
                        freeMode: true
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
        posts: 'posts/GET_POSTS',
        currentLang: 'lang/GET_CURRENT_LANG',
        langs: 'lang/GET_LANGS',
      }),
    }
}

</script>
