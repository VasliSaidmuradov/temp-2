<template>
    <div class="subscribe layout-container" ref="animationBlock">
        <div class="subscribe-inner">
            <h3 class="subscribe-title animation-item">Хотите получать специально подобранные для Вас предложения, быть в курсе новостей и участвовать в акциях?</h3>
            <h5 class="subscribe-subtitle animation-item">Тогда заполняйте форму и будьте в команде CashU!</h5>
            <app-form />
        </div>
    </div>
</template>

<script>
import appForm from '@/components/partials/form'
import animation from '@/mixins/animation'
export default {
    mixins: [animation],
    components: {
        appForm
    }
}
</script>