<template>
    <div class="mob-menu">
        <div class="mob-menu-lang-wrp">
            <div class="mob-menu-current-lang">
                <div v-show="currentLang === 'ru'">
                  <ru-icon />
                  Русский
                </div>
                <div v-show="currentLang === 'kk'">
                  <kz-icon />
                  Қазақша
                </div>
            </div>
            <button @click="showModal">{{ langs[currentLang]['body.change'] }}</button>
        </div>
        <button class="mob-menu-profile" @click="loginLink">
            <profile-icon />
            {{ langs[currentLang]['header.lc'] }}
        </button>
        <nav class="mob-menu-nav">
          <nuxt-link
            v-for="item in headerMenu"
            :key="item.id"
            class="mob-menu-link"
            :to="`/${item.page.slug}`"
            >{{ item.name[currentLang] }}
          </nuxt-link>
        </nav>
        <a href="" class="mob-menu-phone">
            <phone-icon />
            {{ settings.phone.value[currentLang] }}
        </a>
        <p class="mob-menu-schedule">
            <schedule-icon />
            <span v-html="langs[currentLang]['header.schedule']"></span>
        </p>
        <h3 class="mob-menu-heading" v-html="langs[currentLang]['header.fast_microcredits']"></h3>
    </div>
</template>

<script>
import profileIcon from '@/static/icons/user.svg'
import phoneIcon from '@/static/icons/phone-filled.svg'
import scheduleIcon from '@/static/icons/clock.svg'
import ruIcon from '@/static/icons/ru.svg'
import kzIcon from '@/static/icons/kz.svg'
import { mapGetters } from 'vuex'

export default {
    components: {
        ruIcon,
        kzIcon,
        profileIcon,
        phoneIcon,
        scheduleIcon
    },
    computed: {
      ...mapGetters({
        headerMenu: 'menu/GET_MENU',
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
        settings: 'settings/GET_SETTINGS',
      })
    },
    methods: {
        closeMenu() {
            this.$emit('closeMenu')
        },
        showModal() {
            this.$store.commit('lang/setModal', true)
        },
        loginLink() {
          console.log('dsd')
            window.location.assign("https://my.cashu.kz/auth/login");
        }
    }
}
</script>
