<template>
  <footer class="footer">
    <div class="layout-container">
			<!-- <pre>{{ settings }}</pre> -->
      <div class="footer-row">
        <div class="footer-col">
          <nuxt-link class="footer-logo animation-item" to="/">
            <img src="/icons/logo.svg" alt="CashU logo" />
          </nuxt-link>
        </div>
        <div class="footer-col">
          <div
            class="footer-subtitle animation-item"
            v-html="langs[currentLang]['footer.on_social_media']"
          ></div>
          <div class="footer-socials">
            <a :href="settings.instagram.value[currentLang]" class="animation-item" target="_blank">
              <insta />
            </a>
            <a :href="settings.vk.value[currentLang]" class="animation-item" target="_blank">
              <vk />
            </a>
            <a :href="settings.facebook.value[currentLang]" class="animation-item" target="_blank">
              <facebook />
            </a>
          </div>
        </div>
        <div v-for="(menuItems, index) in $chunk(footerMenu, 4)" :key="index" class="footer-col">
          <nuxt-link
            v-for="item in menuItems"
            :key="item.id"
            class="footer-link animation-item"
            :to="item.page.slug"
          >
            <span>{{ item.name[currentLang] }}</span>
          </nuxt-link>
        </div>
        <div class="footer-col">
          <p class="footer-subtitle animation-item">{{ langs[currentLang]['footer.phone'] }}</p>
          <a
            v-if="settings.phone"
            :href="`tel:${settings.phone.value[currentLang]}`"
            class="footer-link animation-item --icon"
          >
            <phone />
            <span>{{ settings.phone.value[currentLang] }}</span>
          </a>
          <p class="footer-subtitle animation-item">{{ langs[currentLang]['footer.email'] }}</p>
          <a
            v-if="settings.email"
            :href="`mailto:${settings.email.value[currentLang]}`"
            class="footer-link animation-item --icon"
          >
            <email />
            <span>{{ settings.email.value[currentLang] }}</span>
          </a>
        </div>
      </div>
      <div class="footer-copyright">
        <p
          class="footer-subtitle animation-item"
        >{{ langs[currentLang]['footer.service_fast_loans'] }}</p>
        <p class="footer-subtitle animation-item">
          Разработано в
          <a href="https://brandstudio.kz" target="_blank">
            <b>BRAND</b>STUDIO
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import insta from "@/static/icons/insta.svg";
import vk from "@/static/icons/vk.svg";
import facebook from "@/static/icons/facebook.svg";
import phone from "@/static/icons/phone-filled.svg";
import email from "@/static/icons/mail.svg";
import { mapGetters } from "vuex";

export default {
  mounted() {
    let block = document.querySelector(".footer");
    let item = block.querySelectorAll(".animation-item");
    let footerScene = this.$scrollmagic
      .scene({
        triggerElement: block,
        triggerHook: 0.8,
      })
      .setTween(
        gsap.from(item, {
          opacity: 0,
          y: 15,
          duration: 0.4,
          stagger: 0.1,
          ease: "back.out(3)",
        })
      );
    this.$scrollmagic.addScene(footerScene);
  },
  components: {
    insta,
    vk,
    facebook,
    phone,
    email,
  },
  computed: {
    ...mapGetters({
      langs: "lang/GET_LANGS",
      footerMenu: "menu/GET_FOOTER_MENU",
      currentLang: "lang/GET_CURRENT_LANG",
      settings: "settings/GET_SETTINGS",
    }),
  },
};
</script>
