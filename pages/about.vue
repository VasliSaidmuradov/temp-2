<template>
    <div class="about-page">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>О Нас</nuxt-link>
        </div>
        <div class="about-page-inner --white">
            <div class="about-page-row">
                <div class="about-page-txt-wrp">
                    <h3 class="section-title animation-item">Почему CashU?</h3>
                    <p class="about-page-txt animation-item">
                        Каждый из нас, хоть раз в жизни, сталкивался с проблемой нехватки денежных средств. В таких случаях, как правило, мы обращаемся за помощью к родственникам, друзьям, или знакомым, но зачастую и они не могут нам помочь.
                    </p>
                </div>
                <div class="about-page-img-wrp">
                    <img src="/img/about1.png" alt="CashU image" class="animation-item">
                </div>
            </div>
        </div>
        <div class="about-page-inner --black">
            <div class="about-page-row">
                <div class="about-page-img-wrp">
                    <img src="/img/about2.png" alt="CashU image" class="animation-item">
                </div>
                <div class="about-page-txt-wrp">
                    <h3 class="section-title animation-item">Что же делать? Выход есть!</h3>
                    <p class="about-page-txt animation-item">
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
    mounted() {
        let block = document.querySelectorAll('.about-page-row')
        block.forEach((b) => {
            let item = b.querySelectorAll('.animation-item')
            let aboutScene = this.$scrollmagic.scene({
                triggerElement: b
            })
            .setTween(
                gsap.from(item, {opacity: 0, y: 15, duration: 0.4, stagger: 0.1, ease: 'back.out(3)'})
            )
            this.$scrollmagic.addScene(aboutScene)
        })
    },
    components: {
        subscribe
    }
}
</script>