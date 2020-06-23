<template>
    <div class="get-loan">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Как получить займ?</nuxt-link>
        </div>
        <hero />
        <easy />
        <steps />
        <get-money />
    </div>
</template>

<script>
import hero from '@/components/get-loan/hero'
import getMoney from '@/components/partials/get-money'
import easy from '@/components/get-loan/easy'
import steps from '@/components/get-loan/steps'
export default {
    components: {
        hero,
        getMoney,
        steps,
        easy
    }
}
</script>