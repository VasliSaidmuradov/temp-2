<template>
    <transition name="modal-fade">
        <div class="lang-modal" v-if="isOpen">
            <div class="lang-modal-overlay" @click="closeModal"></div>
            <div class="lang-modal-inner">
                <nuxt-link class="lang-modal-item" to @click.native="changeLang('ru')">
                    <ru-icon />
                    Русский
                </nuxt-link>
                <nuxt-link class="lang-modal-item" to @click.native="changeLang('kk')">
                    <kz-icon />
                    Казахский
                </nuxt-link>
            </div>
        </div>
    </transition>
</template>

<script>
import ruIcon from '@/static/icons/ru.svg'
import kzIcon from '@/static/icons/kz.svg'
import {mapGetters} from 'vuex'
export default {
    components: {
        ruIcon,
        kzIcon
    },
    computed: {
        ...mapGetters({
            isOpen: 'lang/getModal'
        })
    },
    methods: {
        closeModal() {
            this.$store.commit('lang/setModal', false)
        },
        changeLang(lang) {
            this.$store.commit('lang/SET_CURRENT_LANG', lang)
            this.closeModal()
        }
    },
}
</script>
