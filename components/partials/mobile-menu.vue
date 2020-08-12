<template>
    <transition name="modal-fade" @before-enter="isInnerOpen = true">
        <div v-if="isOpen" class="mob-menu">
            <div class="mob-menu-overlay" @click="closeMenu"></div>
            <transition name="slide-left">
                <div class="mob-menu-inner" v-if="isInnerOpen">
                    <div class="mob-menu-close">
                        <button @click="closeMenu">
                            <close-icon />
                        </button>
                    </div>
                    <div class="mob-menu-lang-wrp">
                        <div class="mob-menu-current-lang">
                            <div class="mob-menu-lang" :class="{'--active' : currentLang == 'ru'}" @click="setLang('ru')">
                              <ru-icon />
                              Русский
                            </div>
                            <div class="mob-menu-lang" :class="{'--active' : currentLang == 'kk'}" @click="setLang('kk')">
                              <kz-icon />
                              Қазақша
                            </div>
                        </div>
                        <!-- <button @click="showModal">{{ langs[currentLang]['body.change'] }}</button> -->
                    </div>
                    <button class="mob-menu-profile" @click="loginLink">
                        <profile-icon />
                        {{ langs[currentLang]['header.lc'] }}
                    </button>
                    <nav class="mob-menu-nav">
                      <nuxt-link
                        @click.native="closeMenu"
                        v-for="item in headerMenu"
                        :key="item.id"
                        class="mob-menu-link"
                        :to="item.page.slug === 'home' ? '/' : `/${item.page.slug}`"
                        >{{ item.name[currentLang] }}
                      </nuxt-link>
                    </nav>
                    <a :href="`tel:${settings.phone.value[currentLang]}`" class="mob-menu-phone">
                        <phone-icon />
                        {{ settings.phone.value[currentLang] }}
                    </a>
                    <div class="mob-menu-schedule">
                        <schedule-icon />
                        <div v-html="langs[currentLang]['header.schedule']"></div>
                    </div>
                    <div class="mob-menu-heading" v-html="langs[currentLang]['header.fast_microcredits']"></div>
                </div>
            </transition>
        </div>
    </transition>
</template>

<script>
import profileIcon from '@/static/icons/user.svg'
import phoneIcon from '@/static/icons/phone-filled.svg'
import scheduleIcon from '@/static/icons/clock.svg'
import closeIcon from '@/static/icons/close.svg'
import ruIcon from '@/static/icons/ru.svg'
import kzIcon from '@/static/icons/kz.svg'
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            isInnerOpen: false
        }
    },
    components: {
      ruIcon,
      kzIcon,
      profileIcon,
      phoneIcon,
      scheduleIcon,
      closeIcon
    },
    computed: {
      ...mapGetters({
        headerMenu: 'menu/GET_MENU',
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
        settings: 'settings/GET_SETTINGS',
        isOpen: 'menu/GET_MENU_MODAL'
      })
    },
    methods: {
        closeMenu() {
            this.isInnerOpen = false
            this.$store.commit('menu/SET_MENU_MODAL', false)
        },
        loginLink() {
          // console.log('dsd')
          window.location.assign("https://my.cashu.kz/auth/login");
        },
        setLang(lang) {
          this.$store.commit('lang/SET_CURRENT_LANG', lang)
          // if (process.browser) {
          //   localStorage.setItem('lang', this.currentLang)
          // }
          this.$cookiz.set('lang', lang);
        }
    }
}
</script>
