<template>
    <div class="loan-hero" ref="animationBlock">
        <div class="layout-container">
            <div class="loan-hero-row">
                <p class="loan-hero-title animation-item">Как получить займ?</p>
                <img src="/img/get-loan-hero.png" alt="CashU image" class="animation-item">
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