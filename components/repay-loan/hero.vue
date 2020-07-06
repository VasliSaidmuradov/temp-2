<template>
    <div class="loan-hero --yellow" ref="animationBlock">
        <div class="layout-container">
            <div class="loan-hero-row">
                <p class="loan-hero-title animation-item --black">Как погасить займ?</p>
                <img src="/img/repay-loan-hero.png" alt="CashU image" class="animation-item">
            </div>
        </div>
    </div>
</template>

<script>
import animation from '@/mixins/animation'
export default {
    mixins: [animation]
}
</script>