<template>
    <div class="mob-menu">
        <div class="mob-menu-lang-wrp">
            <div class="mob-menu-current-lang">
                <ru-icon />
                RU
            </div>
            <button @click="showModal">Изменить</button>
        </div>
        <nuxt-link to class="mob-menu-profile" @click.native="closeMenu">
            <profile-icon />
            Личный кабинет
        </nuxt-link>
        <nav class="mob-menu-nav">
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/get-loan">Как получить микрокредит</nuxt-link>
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/repay-loan">Как погасить микрокредит</nuxt-link>
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/posts">Акции и новости</nuxt-link>
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/reviews">Отзывы</nuxt-link>
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/about">О нас</nuxt-link>
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/faq">Вопрос-ответ</nuxt-link>
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/documentation">Документация</nuxt-link>
            <nuxt-link class="mob-menu-link" @click.native="closeMenu" to="/contacts">Контакты</nuxt-link>
        </nav>
        <a href="" class="mob-menu-phone">
            <phone-icon />
            +7 (701) 885-80-80
        </a>
        <p class="mob-menu-schedule">
            <schedule-icon />
            Прием заявок круглосуточно, без выходных. 
            Рассмотрение и отправка денег без выходных с 9:00 до 21:00;
        </p>
        <h3 class="mob-menu-heading">Быстрые микрокредиты онлайн</h3>
    </div>
</template>

<script>
import profileIcon from '@/static/icons/user.svg'
import phoneIcon from '@/static/icons/phone-filled.svg'
import scheduleIcon from '@/static/icons/clock.svg'
import ruIcon from '@/static/icons/ru.svg'
export default {
    components: {
        ruIcon,
        profileIcon,
        phoneIcon,
        scheduleIcon
    },
    methods: {
        closeMenu() {
            this.$emit('closeMenu')
        },
        showModal() {
            this.$store.commit('lang/setModal', true)
        }
    }
}
</script>