<template>
    <div class="home-news layout-container">
        <div class="home-slider-title">
            <h3>Акции и новости</h3>
            <div class="home-slider-nav">
                <button class="home-slider-prev home-news-prev"><slider-arrow /></button>
                <button class="home-slider-next home-news-next"><slider-arrow /></button>
            </div>
        </div>
        <div v-swiper:homeNews="options">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in 6" :key="index">
                    <nuxt-link to>
                        <div class="home-news-img-wrp">
                            <img src="/img/news.png" alt="CashU image">
                        </div>
                        <p class="home-news-date">5 июня 2020</p>
                        <p class="home-news-text">
                            Обязательное страхование имущества – быть или не быть?
                        </p>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import sliderArrow from '@/static/icons/slider-arrow.svg'
export default {
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
    }
}
</script>