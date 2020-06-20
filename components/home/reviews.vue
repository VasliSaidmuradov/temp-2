<template>
    <div class="home-reviews layout-container">
        <div class="home-slider-title">
            <h3>Отзывы</h3>
            <div class="home-slider-nav">
                <button class="home-slider-prev home-reviews-prev"><slider-arrow /></button>
                <button class="home-slider-next home-reviews-next"><slider-arrow /></button>
            </div>
        </div>
        <div v-swiper:homeReviews="options">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in 5" :key="index">
                    <div class="home-reviews-item">
                        <div class="home-reviews-name-wrp">
                            <img src="/icons/avatar-placeholder.svg" alt="CashU image">
                            <div class="home-reviews-name">
                                <h4>Арсен Арсенов</h4>
                                <p>Алматы</p>
                            </div>
                        </div>
                        <p class="home-reviews-text">What I wanted, excellent service, and fast delivery! HIGHLY RECOMMENDED to anyone!</p>
                    </div>
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
                slidesPerView: 3,
                navigation: {
                    nextEl: '.home-reviews-next',
                    prevEl: '.home-reviews-prev'
                }
            }
        }
    },
    components: {
        sliderArrow
    }
}
</script>