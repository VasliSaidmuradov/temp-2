<template>
    <transition name="modal-fade">
        <div class="lang-modal" v-if="isOpen">
            <div class="lang-modal-overlay" @click="closeModal"></div>
            <div class="layout-container">
                <div class="lang-modal-inner">
                    <button class="lang-modal-close" @click="closeModal"><close-icon /></button>
                    <p class="lang-modal-txt">Выберите язык сайта:</p>
                    <p class="lang-modal-txt">Сайт тілін таңдаңыз:</p>
                    <nuxt-link class="lang-modal-item" to @click.native="changeLang('ru')">
                        <ru-icon />
                        Русский
                    </nuxt-link>
                    <nuxt-link class="lang-modal-item" to @click.native="changeLang('kk')">
                        <kz-icon />
                        Қазақша
                    </nuxt-link>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
import ruIcon from '@/static/icons/ru.svg'
import kzIcon from '@/static/icons/kz.svg'
import closeIcon from '@/static/icons/close.svg'
import {mapGetters} from 'vuex'
export default {
    components: {
        ruIcon,
        kzIcon,
        closeIcon
    },
    computed: {
        ...mapGetters({
            isOpen: 'lang/getModal',
            currentLang: 'lang/GET_CURRENT_LANG',
        })
    },
    mounted() {
        if (!localStorage.getItem('lang')) {
          setTimeout(() => {
            this.$store.commit('lang/setModal', true)
          }, 1000)
        }
    },
    methods: {
        closeModal() {
            this.$store.commit('lang/setModal', false)
        },
        changeLang(lang) {
            this.$store.commit('lang/SET_CURRENT_LANG', lang)
            this.closeModal()
            if (process.browser) {
              localStorage.setItem('lang', this.currentLang)
            }
        }
    },
}
</script>
