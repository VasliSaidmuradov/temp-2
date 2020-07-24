<template>
    <div class="layout">
        <transition name="modal-fade">
            <calc-modal v-if="isCalcModalOpen" @closeModal="closeCalcModal"/>
        </transition>
        <notification />
        <lang-modal />
        <app-header />
        <app-nav />
        <div class="layout-content">
            <transition name="fade">
                <nuxt />
            </transition>
        </div>
        <app-footer />
        <button class="floating-btn" v-if="$route.name != 'index'" @click="openCalcModal">
            <icon />
            Калькулятор
        </button>
    </div>
</template>

<script>
import notification from '@/components/partials/notification'
import appHeader from '@/components/partials/header'
import appNav from '@/components/partials/page-nav'
import appFooter from '@/components/partials/footer'
import langModal from '@/components/partials/lang-modal'
import calcModal from '@/components/partials/calc-modal'
import icon from '@/static/icons/calculator.svg'
import { mapGetters } from 'vuex'

export default {
    components: {
        notification,
        icon,
        langModal,
        appHeader,
        appNav,
        appFooter,
        calcModal
    },
    data() {
        return {
            isCalcModalOpen: false
        }
    },
    compured: {
      ...mapGetters({
        currentang: 'lang/GET_CURRENT_LANG',
      }),
    },
    methods: {
        openCalcModal() {
            document.body.classList.add('--hidden')
            this.isCalcModalOpen = true
        },
        closeCalcModal() {
            document.body.classList.remove('--hidden')
            this.isCalcModalOpen = false
        }
    },
    watch: {
        '$route.fullPath': function () {
            window.scrollTo(0, 0)
        }
    },
    mounted() {
      if (localStorage.getItem('lang')) {
        const lang = localStorage.getItem('lang')
        if (lang !== 'ru' && lang !== 'kk') return
        if (lang !== this.currentLang) this.$store.commit('lang/SET_CURRENT_LANG', lang)
      }
    }
}
</script>
