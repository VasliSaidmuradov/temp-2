<template>
  <div class="home-banner" ref="animationBlock">
    <!-- <pre>{{ langs[currentLang] }}</pre> -->
    <!-- <pre>{{ page }}</pre> -->
    <div v-swiper:banner="options">
      <div class="home-banner-pagination"></div>
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="slide in 1" :key="slide.id">
          <div class="home-banner-inner">
            <!-- {{ slide }} -->
            <!-- <h2 class="home-banner-title animation-item" v-html="slide.name"></h2> -->
            <!-- <ul v-if="slide.options" class="home-banner-list">
              <li v-for="option in slide.options">
                <check />
                <p class="home-banner-text animation-item">
                  {{ option.name }}
                  <b v-if="option.next_text" >{{ option.next_text }}</b>
                </p>
              </li>
            </ul>-->
            <!-- <a
              v-if="slide.link"
              class="button animation-item"
              :href="slide.link"
              >
              {{ langs[currentLang]['body.details'] }}
            </a>-->
          </div>
          <div class="home-banner-img">
            <img
              v-if="page.extras[currentLang].image"
              :src="page.extras[currentLang].image ? $imageLink(page.extras[currentLang].image) : ''"
              alt="CashU image"
            />
          </div>
          <div class="home-banner-img-mob">
            <img
              v-if="page.extras[currentLang].mob_image"
              :src="page.extras[currentLang].mob_image ? $imageLink(page.extras[currentLang].mob_image) : ''"
              alt="CashU image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import check from "@/static/icons/check.svg";
import animation from "@/mixins/animation";
import { mapGetters } from "vuex";

export default {
  mixins: [animation],
  data() {
    return {
      options: {
        spaceBetween: 20,
        pagination: {
          el: ".home-banner-pagination",
          type: "bullets",
          clickable: true,
        },
      },
    };
  },
  components: {
    check,
  },
  computed: {
    ...mapGetters({
      page: "pages/GET_PAGE",
      currentLang: "lang/GET_CURRENT_LANG",
      slides: "pages/GET_SLIDES",
      langs: "lang/GET_LANGS",
    }),
  },
};
</script>
