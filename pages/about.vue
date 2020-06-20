<template>
    <div class="about-page">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>О Нас</nuxt-link>
        </div>
        <div class="about-page-inner --white">
            <div class="about-page-row">
                <div class="about-page-txt-wrp">
                    <h3 class="section-title">Почему CashU?</h3>
                    <p class="about-page-txt">
                        Каждый из нас, хоть раз в жизни, сталкивался с проблемой нехватки денежных средств. В таких случаях, как правило, мы обращаемся за помощью к родственникам, друзьям, или знакомым, но зачастую и они не могут нам помочь.
                    </p>
                </div>
                <div class="about-page-img-wrp">
                    <img src="/img/about1.png" alt="CashU image">
                </div>
            </div>
        </div>
        <div class="about-page-inner --black">
            <div class="about-page-row">
                <div class="about-page-img-wrp">
                    <img src="/img/about2.png" alt="CashU image">
                </div>
                <div class="about-page-txt-wrp">
                    <h3 class="section-title">Что же делать? Выход есть!</h3>
                    <p class="about-page-txt">
                        Каждый из нас, хоть раз в жизни, сталкивался с проблемой нехватки денежных средств. В таких случаях, как правило, мы обращаемся за помощью к родственникам, друзьям, или знакомым, но зачастую и они не могут нам помочь.
                    </p>
                </div>
            </div>
        </div>
        <subscribe />
    </div>
</template>

<script>
import subscribe from '@/components/partials/subscribe'
export default {
    components: {
        subscribe
    }
}
</script>