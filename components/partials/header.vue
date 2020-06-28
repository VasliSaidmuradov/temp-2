<template>
    <header class="header" :class="{'--open' : isOpen}">
        <div class="layout-container">
            <nuxt-link to="/" class="header-logo">
                <img src="/icons/logo.svg" alt="CashU logo">
            </nuxt-link>
            <h4 class="header-title">Быстрые <br> микрокредиты онлайн</h4>
            <a href="" class="header-phone">
                <phone-icon />
                +7 (701) 885-80-80
            </a>
            <p class="header-text">
                <schedule-icon />
                <span>
                    Прием заявок круглосуточно, без выходных. <br>
                    Рассмотрение и отправка денег без выходных с 9:00 до 21:00.
                </span>
            </p>
            <nuxt-link class="header-profile" to>
                <profile-icon />
                Личный кабинет
            </nuxt-link>
            <div class="header-langs">
                <div class="header-current-lang">
                    <ru-icon />
                    <span>RU</span>
                    <arrow />
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
import arrow from '@/static/icons/arrow.svg'
import mobMenu from '@/components/partials/mobile-menu'
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            document.body.classList.toggle('--hidden')
            this.isOpen = !this.isOpen
        }
    },
    components: {
        mobMenu,
        phoneIcon,
        scheduleIcon,
        profileIcon,
        ruIcon,
        arrow
    }
}
</script>