<template>
    <div class="reviews" ref="animationBlock">
        <transition name="modal-fade">
            <reviews-modal v-if="isModalOpen" @closeModal="closeModal" @sendReview="sendReview" />
        </transition>
        <transition name="modal-fade">
            <reviews-success v-if="isSuccessOpen" @closeModal="closeSuccess" />
        </transition>
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Отзывы</nuxt-link>
        </div>
        <div class="layout-container">
            <h1 class="page-title animation-item">
                Отзывы
                <button class="button" @click="openModal">Оставить отзыв</button>
            </h1>
            <div class="reviews-row">
                <div class="reviews-col">
                    <div class="reviews-item animation-item">
                        <div class="reviews-name-wrp">
                            <div class="reviews-avatar">
                                <img src="/icons/avatar-placeholder.png" alt="CashU icon">
                            </div>
                            <div>
                                <p class="reviews-name">Арсен Арсенов</p>
                                <div class="reviews-rating">
                                    <client-only>
                                        <star-rating
                                            :rating="5"
                                            :read-only="true"
                                            :star-size="16" 
                                            :show-rating="false" 
                                            :rounded-corners="true" 
                                            :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" />
                                    </client-only>
                                </div>
                            </div>
                            <p class="reviews-city">Алматы</p>
                        </div>
                        <p class="reviews-text">
                            What I wanted, excellent service, and fast delivery! HIGHLY RECOMMENDED to anyone! By far the best daily contact lenses available and so affordable. Love the vitamin lenses they’re so comfortable. I thought I’d never find contacts for sensitive eyes.
                        </p>
                        <vue-plyr>
                            <div data-plyr-provider="youtube" data-plyr-embed-id="gysSvbIxB4Q"></div>
                        </vue-plyr>
                    </div>
                </div>
                <div class="reviews-col">
                    <div class="reviews-item animation-item">
                        <div class="reviews-name-wrp">
                            <div class="reviews-avatar">
                                <img src="/icons/avatar-placeholder.png" alt="CashU icon">
                            </div>
                            <div>
                                <p class="reviews-name">Арсен Арсенов</p>
                                <div class="reviews-rating">
                                    <client-only>
                                        <star-rating
                                            :rating="5"
                                            :read-only="true"
                                            :star-size="16" 
                                            :show-rating="false" 
                                            :rounded-corners="true" 
                                            :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" />
                                    </client-only>
                                </div>
                            </div>
                            <p class="reviews-city">Алматы</p>
                        </div>
                        <p class="reviews-text">
                            What I wanted, excellent service, and fast delivery! HIGHLY RECOMMENDED to anyone! By far the best daily contact lenses available and so affordable. Love the vitamin lenses they’re so comfortable. I thought I’d never find contacts for sensitive eyes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import animation from '@/mixins/animation'
import reviewsModal from '@/components/partials/reviews-modal'
import reviewsSuccess from '@/components/partials/reviews-success'
export default {
    mixins: [animation],
    data() {
        return {
            isModalOpen: false,
            isSuccessOpen: false
        }
    },
    methods: {
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        },
        closeSuccess() {
            this.isSuccessOpen = false
        },
        sendReview() {
            this.closeModal()
            this.isSuccessOpen = true
        }
    },
    components: {
        reviewsModal,
        reviewsSuccess
    }
}
</script>