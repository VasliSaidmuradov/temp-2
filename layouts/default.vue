<template>
    <div class="layout">
        <transition name="modal-fade">
            <calc-modal v-if="isCalcModalOpen" @closeModal="closeCalcModal"/>
        </transition>
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
import appHeader from '@/components/partials/header'
import appNav from '@/components/partials/page-nav'
import appFooter from '@/components/partials/footer'
import langModal from '@/components/partials/lang-modal'
import calcModal from '@/components/partials/calc-modal'
import icon from '@/static/icons/calculator.svg'
export default {
    data() {
        return {
            isCalcModalOpen: false
        }
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
    components: {
        icon,
        langModal,
        appHeader,
        appNav,
        appFooter,
        calcModal
    }
}
</script>
