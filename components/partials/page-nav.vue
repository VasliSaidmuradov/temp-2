<template>
    <nav class="page-nav" ref="animationBlock">
        <nuxt-link class="page-nav-link animation-item" to="/get-loan">Как получить микрокредит</nuxt-link>
        <nuxt-link class="page-nav-link animation-item" to="/repay-loan">Как погасить микрокредит</nuxt-link>
        <nuxt-link class="page-nav-link animation-item" to="/posts">Акции и новости</nuxt-link>
        <nuxt-link class="page-nav-link animation-item" to="/reviews">Отзывы</nuxt-link>
        <nuxt-link class="page-nav-link animation-item" to="/about">О нас</nuxt-link>
        <nuxt-link class="page-nav-link animation-item" to="/faq">Вопрос-ответ</nuxt-link>
        <nuxt-link class="page-nav-link animation-item" to="/contacts">Контакты</nuxt-link>
    </nav>
</template>

<script>
import animation from '@/mixins/animation'
export default {
    mixins: [animation]
}
</script>