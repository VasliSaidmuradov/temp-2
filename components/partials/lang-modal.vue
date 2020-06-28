<template>
    <transition name="modal-fade">
        <div class="lang-modal" v-if="isOpen">
            <div class="lang-modal-overlay" @click="closeModal"></div>
            <div class="lang-modal-inner">
                <nuxt-link class="lang-modal-item" to @click.native="closeModal">
                    <ru-icon />
                    Русский
                </nuxt-link>
                <nuxt-link class="lang-modal-item" to @click.native="closeModal">
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
    computed: {
        ...mapGetters({
            isOpen: 'lang/getModal'           
        })
    },
    methods: {
        closeModal() {
            this.$store.commit('lang/setModal', false)
        }
    },
    components: {
        ruIcon,
        kzIcon
    }
}
</script>