<template>
  <div class="layout">
    <div style="display: none;">
        <div itemprop="aggregateRating" itemscope itemtype="http://schema.org/AggregateRating" class="rating-container d-md-inline-flex mr-md-8" data-rating="4,8">

        <div itemprop="itemReviewed" itemscope itemtype="http://schema.org/Thing">
            <span class="sr-only">
                <meta itemprop="name" content="CASHU"/>
                <a itemprop="url" href="https://cashu.kz">CASHU</a>
            </span>
        </div>
        <meta itemprop="worstRating" content="1"/>
        <meta itemprop="bestRating" content="5"/>
        <meta itemprop="ratingValue" content="4.8">
        <meta itemprop="reviewCount" content="4">

        <select class="rating rating-star">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </div>
        <a class="scroll-link" href="https://cashu.kz/">4 отзыва</a>
    </div>
    <transition name="modal-fade">
      <calc-modal v-if="isCalcModalOpen" @closeModal="closeCalcModal" />
    </transition>
    <notification />
    <lang-modal v-if="$route.name != 'stub'" />
    <mob-menu />
    <app-header v-if="$route.name != 'stub'" />
    <app-nav v-if="$route.name != 'stub'" />
    <div class="layout-content">
      <transition name="fade">
        <nuxt />
      </transition>
    </div>
    <app-footer v-if="$route.name != 'stub'" />
    <button
      class="floating-btn"
      v-if="$route.name != 'index' && $route.name != 'stub'"
      @click="openCalcModal"
    >
      <icon />Калькулятор
    </button>
  </div>
</template>

<script>
import mobMenu from "@/components/partials/mobile-menu";
import notification from "@/components/partials/notification";
import appHeader from "@/components/partials/header";
import appNav from "@/components/partials/page-nav";
import appFooter from "@/components/partials/footer";
import langModal from "@/components/partials/lang-modal";
import calcModal from "@/components/partials/calc-modal";
import icon from "@/static/icons/calculator.svg";
import { mapGetters } from "vuex";

export default {
  components: {
    notification,
    icon,
    langModal,
    appHeader,
    appNav,
    appFooter,
    calcModal,
    mobMenu,
  },
  data() {
    return {
      isCalcModalOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      currentang: "lang/GET_CURRENT_LANG",
    }),
  },
  methods: {
    openCalcModal() {
      document.body.classList.add("--hidden");
      this.isCalcModalOpen = true;
    },
    closeCalcModal() {
      document.body.classList.remove("--hidden");
      this.isCalcModalOpen = false;
    },
  },
  watch: {
    "$route.fullPath": function () {
      window.scrollTo(0, 0);
    },
  },
  beforeMount() {
    // if (localStorage.getItem("lang")) {
    //   const lang = localStorage.getItem("lang");
    //   if (lang !== "ru" && lang !== "kk") return;
    //   // if (lang !== this.currentLang)
    //   //   this.$store.commit("lang/SET_CURRENT_LANG", lang);
    // }
    // if (
    //   this.$route.query &&
    //   this.$route.query.lang &&
    //   (this.$route.query.lang === "ru" || this.$route.query.lang === "kk")
    // ) {
    //   this.$store.commit("lang/SET_CURRENT_LANG", this.$route.query.lang);
    //   this.$cookiz.set()
    // }
    // if (this.$cookiz.get('lang') == 'ru' || this.$cookiz.get('lang') == 'kk') {
    //
    // }
  },
};
</script>
