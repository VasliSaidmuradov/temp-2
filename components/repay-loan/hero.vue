<template>
  <div class="loan-hero --yellow" ref="animationBlock">
    <div class="loan-hero-image">
      <img
        v-if="page.extras[currentLang].image"
        :src="page.extras[currentLang].image
                ? $imageLink(page.extras[currentLang].image)
                : require('@/static/img/repay-loan-hero.png')"
        alt="CashU image"
      />
    </div>
    <div class="loan-hero-image-mob" v-if="page.extras[currentLang].mob_image">
      <img
        v-if="page.extras[currentLang].mob_image"
        :src="page.extras[currentLang].mob_image
                ? $imageLink(page.extras[currentLang].mob_image)
                : require('@/static/img/repay-loan-hero.png')"
        alt="CashU image"
      />
    </div>
    <!-- <div class="layout-container">
      <div class="loan-hero-row">
        <p v-if="page.extras" class="loan-hero-title animation-item --black">{{ page.extras[currentLang].name_in_first }}</p>
      </div>
    </div>-->
  </div>
</template>

<script>
import animation from "@/mixins/animation";
import { mapGetters } from "vuex";

export default {
  mixins: [animation],
  props: {
    page: Object,
  },
  computed: {
    ...mapGetters({
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
  },
};
</script>
