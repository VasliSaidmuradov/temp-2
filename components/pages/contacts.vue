

<template>
  <div class="contacts" ref="animationBlock">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>
    <div class="layout-container">
      <div class="contacts-left">
        <h1 class="section-title animation-item">{{ langs[currentLang]['contacts.feedback'] }}</h1>
        <p class="contacts-text animation-item">{{ langs[currentLang]['contacts.want_to_take'] }}</p>
        <app-form />
      </div>
      <div class="contacts-right">
        <p class="contacts-label animation-item">{{ langs[currentLang]['contacts.phone'] }}</p>
        <a
          :href="`tel:${settings.phone.value[currentLang]}`"
          class="contacts-text --icon animation-item"
        >
          <phone />
          {{ settings.phone.value[currentLang] }}
        </a>
        <a
          v-if="settings.whatsapp_phone"
          :href="`https://wa.me/${$getNumbers(settings.whatsapp_phone.value[currentLang])}`"
          class="contacts-text --icon animation-item"
        >
          <whatsapp-icon />
          {{ settings.whatsapp_phone.value[currentLang] }}
        </a>
        <p class="contacts-label animation-item">{{ langs[currentLang]['contacts.email'] }}</p>
        <a
          :href="`mailto:${settings.email.value[currentLang]}`"
          class="contacts-text --icon animation-item"
        >
          <email />
          {{ settings.email.value[currentLang] }}
        </a>
        <p class="contacts-label animation-item">{{ langs[currentLang]['contacts.address'] }}</p>
        <p class="contacts-text --icon animation-item">
          <pin />
          {{ settings.adress.value[currentLang] }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import appForm from "@/components/partials/form";
import phone from "@/static/icons/phone-filled.svg";
import whatsappIcon from '@/static/icons/whatsapp.svg';
import email from "@/static/icons/mail.svg";
import pin from "@/static/icons/pin.svg";
import animation from "@/mixins/animation";
import { mapGetters } from "vuex";

export default {
  mixins: [animation],
  middleware: ["page"],
  components: {
    appForm,
    phone,
    whatsappIcon,
    email,
    pin,
  },
  computed: {
    ...mapGetters({
      settings: "settings/GET_SETTINGS",
      page: "pages/GET_PAGE",
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
  },
};
</script>
