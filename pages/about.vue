

<template>
  <div class="about-page">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>
    <!-- :: <pre>{{ extras }}</pre> -->
    <div v-for="(blocks, index) in $chunk(extras, 2)" :key="index">
      <div v-if="blocks[0]" class="about-page-inner --white">
        <div class="about-page-row">
          <div class="about-page-txt-wrp">
            <h3 class="section-title animation-item">{{ blocks[0].name }}</h3>
            <p class="about-page-txt animation-item">{{ blocks[0].description }}</p>
          </div>
          <div class="about-page-img-wrp">
            <img
              :src="blocks[0].image ? $imageLink(blocks[0].image) : require('@/static/img/about1.png')"
              alt="CashU image"
              class="animation-item"
            />
          </div>
        </div>
      </div>
      <div v-if="blocks[1]" class="about-page-inner --black">
        <div class="about-page-row">
          <div class="about-page-img-wrp">
            <img
              :src="blocks[1].image ? $imageLink(blocks[1].image) : require('@/static/img/about2.png')"
              alt="CashU image"
              class="animation-item"
            />
          </div>
          <div class="about-page-txt-wrp">
            <h3 class="section-title animation-item">{{ blocks[1].name }}</h3>
            <p class="about-page-txt animation-item">{{ blocks[1].description }}</p>
          </div>
        </div>
      </div>
    </div>
    <subscribe />
  </div>
</template>

<script>
import subscribe from "@/components/partials/subscribe";
import { mapGetters } from "vuex";

export default {
  middleware: ["page"],
  mounted() {
    let block = document.querySelectorAll(".about-page-row");
    block.forEach((b) => {
      let item = b.querySelectorAll(".animation-item");
      let aboutScene = this.$scrollmagic
        .scene({
          triggerElement: b,
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
      this.$scrollmagic.addScene(aboutScene);
    });
  },
  components: {
    subscribe,
  },
  computed: {
    ...mapGetters({
      page: "pages/GET_PAGE",
      extras: "pages/GET_EXTRAS",
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
  },
};
</script>
