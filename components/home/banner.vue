<template>
    <div class="home-banner" ref="animationBlock">
        <div v-swiper:banner="options">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(slide, index) in 3" :key="index">
                    <div class="home-banner-inner">
                        <h2 class="home-banner-title animation-item">Микрокредит за 5 минут на вкусных условиях</h2>
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
                        <img src="/img/banner.png" alt="CashU image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import check from '@/static/icons/check.svg'
import animation from '@/mixins/animation'
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
    }
}
</script>