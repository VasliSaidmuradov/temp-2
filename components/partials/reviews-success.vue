<template>
    <div class="reviews-modal">
        <div class="reviews-modal-overlay" @click="closeModal"></div>
        <div class="reviews-modal-inner">
            <button class="reviews-modal-close" @click="closeModal">
                <close />
            </button>
            <img src="/icons/send.svg" alt="CashU icon" class="reviews-modal-img">
            <h3 class="reviews-modal-title">Отзыв успешно отправлен</h3>
            <button class="reviews-modal-btn" @click="closeModal">Вернуться</button>
        </div>
    </div>
</template>

<script>
import close from '@/static/icons/close.svg'
export default {
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    },
    components: {
        close,
    }
}
</script>