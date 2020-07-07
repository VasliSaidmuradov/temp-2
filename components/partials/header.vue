<template>
    <header class="header" :class="{'--open' : isOpen}" ref="animationBlock">
        <div class="layout-container">
            <nuxt-link to="/" class="header-logo animation-item">
                <img src="/icons/logo.svg" alt="CashU logo">
            </nuxt-link>
            <h4 class="header-title animation-item">Быстрые <br> микрокредиты онлайн</h4>
            <a href="" class="header-phone animation-item">
                <phone-icon />
                +7 (701) 885-80-80
            </a>
            <p class="header-text animation-item">
                <schedule-icon />
                <span>
                    Прием заявок круглосуточно, без выходных. <br>
                    Рассмотрение и отправка денег без выходных с 9:00 до 21:00.
                </span>
            </p>
            <nuxt-link class="header-profile animation-item" to>
                <profile-icon />
                Личный кабинет
            </nuxt-link>
            <div class="header-langs animation-item">
                <div class="header-current-lang" @click="toggleLang">
                    <ru-icon />
                    <span>RU</span>
                    <arrow />
                </div>
                <div class="header-lang-dropdown" v-if="isLangOpen">
                    <nuxt-link to class="header-lang-link" @click.native="toggleLang">
                        <ru-icon />
                        Русский
                    </nuxt-link>
                    <nuxt-link to class="header-lang-link" @click.native="toggleLang">
                        <kz-icon />
                        Казахский
                    </nuxt-link>
                </div>
            </div>
            <button class="hamburger hamburger--3dy" 
                :class="{'is-active' : isOpen}"
                @click="toggleMenu"
                type="button" 
                aria-label="Menu" 
                aria-controls="navigation">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
        <mob-menu @closeMenu="toggleMenu"/>
    </header>
</template>

<script>
import phoneIcon from '@/static/icons/phone-filled.svg'
import scheduleIcon from '@/static/icons/clock.svg'
import profileIcon from '@/static/icons/user.svg'
import ruIcon from '@/static/icons/ru.svg'
import kzIcon from '@/static/icons/kz.svg'
import arrow from '@/static/icons/arrow.svg'
import mobMenu from '@/components/partials/mobile-menu'
import animation from '@/mixins/animation'
export default {
    mixins: [animation],
    data() {
        return {
            isLangOpen: false,
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            document.body.classList.toggle('--hidden')
            this.isOpen = !this.isOpen
        },
        toggleLang() {
            this.isLangOpen = !this.isLangOpen
        }
    },
    components: {
        mobMenu,
        phoneIcon,
        scheduleIcon,
        profileIcon,
        ruIcon,
        arrow,
        kzIcon
    }
}
</script>