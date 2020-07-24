<template>
    <div class="reviews-modal">
        <div class="reviews-modal-overlay" @click="closeModal"></div>
        <div class="reviews-modal-inner">
            <button class="reviews-modal-close" @click="closeModal">
                <close />
            </button>
            <img src="/icons/send.svg" alt="CashU icon" class="reviews-modal-img">
            <h3 class="reviews-modal-title">{{ langs[currentLang]['body.review_send'] }}</h3>
            <button class="reviews-modal-btn" @click="closeModal">{{ langs[currentLang]['body.come_back'] }}</button>
        </div>
    </div>
</template>

<script>
import close from '@/static/icons/close.svg'
import { mapGetters } from 'vuex'

export default {
    methods: {
        closeModal() {
            this.$emit('closeModal')
        }
    },
    components: {
        close,
    },
    computed: {
      ...mapGetters({
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
      })
    }
}
</script>
