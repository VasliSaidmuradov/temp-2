<template>
    <div class="get-money" ref="animationBlock">
        <div class="layout-container">
            <h3 class="get-money-title animation-item">С CashU все гараздо проще</h3>
            <nuxt-link class="button animation-item" to>Получить деньги</nuxt-link>
        </div>
    </div>
</template>

<script>
import animation from '@/mixins/animation'
export default {
    mixins: [animation]
}
</script>