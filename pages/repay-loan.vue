<template>
    <div class="repay-loan">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Как погасить займ?</nuxt-link>
        </div>
        <hero />
        <type />
        <easy />
        <get-money />
    </div>
</template>

<script>
import hero from '@/components/repay-loan/hero'
import easy from '@/components/repay-loan/easy'
import type from '@/components/repay-loan/type'
import getMoney from '@/components/partials/get-money'
export default {
    components: {
        hero,
        type,
        easy,
        getMoney
    }
}
</script>