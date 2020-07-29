<template>
    <header class="header" :class="{'--open' : isOpen}" ref="animationBlock">
        <div class="layout-container">
            <nuxt-link to="/" class="header-logo animation-item">
                <img src="/icons/logo.svg" alt="CashU logo">
            </nuxt-link>
            <h4 class="header-title animation-item" v-html="langs[currentLang]['header.fast_microcredits']"></h4>
            <a v-if="settings.phone" :href="`tel:${settings.phone.value[currentLang]}`" class="header-phone animation-item">
                <phone-icon />
                {{ settings.phone.value[currentLang] }}
            </a>
            <p class="header-text animation-item">
                <schedule-icon />
                <span v-html="langs[currentLang]['header.schedule']"></span>
            </p>
            <a class="header-profile animation-item" href="https://my.cashu.kz/auth/login" target="_blank">
                <profile-icon />
                {{ langs[currentLang]['header.lc'] }}
            </a>
            <div class="header-langs animation-item">
                <div class="header-current-lang" @click="toggleLang">
                  <ru-icon v-show="currentLang === 'ru'" />
                  <kz-icon v-show="currentLang === 'kk'" />
                    <span>{{ currentLang.toUpperCase() }}</span>
                    <arrow />
                </div>
                <div class="header-lang-dropdown" v-if="isLangOpen">
                    <nuxt-link to class="header-lang-link" @click.native="changeLang('ru')">
                        <ru-icon />
                        Русский
                    </nuxt-link>
                    <nuxt-link to class="header-lang-link" @click.native="changeLang('kk')">
                        <kz-icon />
                        Қазақша
                    </nuxt-link>
                </div>
            </div>
            <button class="hamburger hamburger--3dy"
                :class="{'is-active' : isOpen}"
                @click="openMenu"
                type="button"
                aria-label="Menu"
                aria-controls="navigation">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </header>
</template>

<script>
import phoneIcon from '@/static/icons/phone-filled.svg'
import scheduleIcon from '@/static/icons/clock.svg'
import profileIcon from '@/static/icons/user.svg'
import ruIcon from '@/static/icons/ru.svg'
import kzIcon from '@/static/icons/kz.svg'
import arrow from '@/static/icons/arrow.svg'
import animation from '@/mixins/animation'

import { mapGetters } from 'vuex'

export default {
    components: {
        phoneIcon,
        scheduleIcon,
        profileIcon,
        ruIcon,
        arrow,
        kzIcon
    },
    mixins: [animation],
    data() {
        return {
            isLangOpen: false,
            isOpen: false,
        }
    },
    computed: {
        ...mapGetters({
            settings: 'settings/GET_SETTINGS',
            langs: 'lang/GET_LANGS',
            currentLang: 'lang/GET_CURRENT_LANG',
            settings: 'settings/GET_SETTINGS',
        })
    },
    methods: {
        toggleLang() {
            this.isLangOpen = !this.isLangOpen
        },
        openMenu() {
            this.$store.commit('menu/SET_MENU_MODAL', true)
        },
        changeLang(lang) {
          this.$store.commit('lang/SET_CURRENT_LANG', lang)
          this.toggleLang()
          if (process.browser) {
            localStorage.setItem('lang', this.currentLang)
          }
        }
    },
}
</script>
