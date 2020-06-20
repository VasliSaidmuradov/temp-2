<template>
    <div class="subscribe layout-container">
        <div class="subscribe-inner">
            <h3 class="subscribe-title">Хотите получать специально подобранные для Вас предложения, быть в курсе новостей и участвовать в акциях?</h3>
            <h5 class="subscribe-subtitle">Тогда заполняйте форму и будьте в команде CashU!</h5>
            <app-form />
        </div>
    </div>
</template>

<script>
import appForm from '@/components/partials/form'
export default {
    components: {
        appForm
    }
}
</script>