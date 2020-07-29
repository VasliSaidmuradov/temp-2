<template>
    <transition name="modal-fade">
        <div class="notification" v-if="isModalOpen">

            <div class="notification-overlay" @click="closeModal"></div>
            <div v-if="banners.length" class="notification-inner">
                <button class="notification-close" @click="closeModal">
                    <close />
                </button>
                <h3 class="notification-title">{{ banners[0].title[currentLang] }}</h3>
                <div class="notification-text" v-html="banners[0].name[currentLang]"></div>
                <img :src="'https://admin.cashu.kz/uploads/' + banners[0].image[currentLang]" alt="CashU image" class="notification-image">
            </div>
        </div>
    </transition>
</template>

<script>
import close from '@/static/icons/close.svg'
import { mapGetters } from 'vuex'

export default {
    components: {
        close
    },
    data() {
        return {
            isModalOpen: false
        }
    },
    mounted() {
        if (this.banners.length) {
          const ms = 1000;

          setTimeout(() => {
              this.openModal()
          }, this.banners[0].timer * ms)
        }
    },
    computed: {
      ...mapGetters({
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
        banners: 'banners/GET_BANNERS',
      }),
    },
    methods: {
        openModal() {
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
        }
    },
}
</script>
