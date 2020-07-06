<template>
    <div class="reviews-modal">
        <div class="reviews-modal-overlay" @click="closeModal"></div>
        <div class="reviews-modal-inner">
            <button class="reviews-modal-close" @click="closeModal">
                <close />
            </button>
            <h3 class="section-title">Отзыв</h3>
            <div class="reviews-modal-rating-wrp">
                <p>Оценка:</p>
                <client-only>
                    <star-rating
                        :increment="0.5"
                        :rating="4"
                        :star-size="28" 
                        :show-rating="false" 
                        :rounded-corners="true" 
                        :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" />
                </client-only>
            </div>
            <input type="text" placeholder="Ваше имя" class="reviews-modal-input">
            <input type="text" placeholder="Город" class="reviews-modal-input">
            <textarea class="reviews-modal-input" placeholder="Ваш отзыв"></textarea>
            <label class="reviews-modal-file-wrp">
                <input type="file">
                Прикрепить файл
                <file-icon />
            </label>
            <button class="button" @click="sendReview">Отправить</button>
        </div>
    </div>
</template>

<script>
import close from '@/static/icons/close.svg'
import fileIcon from '@/static/icons/attach.svg'
export default {
    methods: {
        sendReview() {
            this.$emit('sendReview')
        },
        closeModal() {
            this.$emit('closeModal')
        }
    },
    components: {
        close,
        fileIcon
    }
}
</script>