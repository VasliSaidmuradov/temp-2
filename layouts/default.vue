<template>
  <div class="layout">
    <transition name="modal-fade">
      <calc-modal v-if="isCalcModalOpen" @closeModal="closeCalcModal" />
    </transition>
    <notification />
    <lang-modal />
    <mob-menu />
    <app-header />
    <app-nav />
    <div class="layout-content">
      <transition name="fade">
        <nuxt />
      </transition>
    </div>
    <app-footer />
    <button
      ref="floatingBtn"
      class="floating-btn"
      v-if="$route.name != 'index'"
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
    // scroll() {
    //   let lastScrollTop = 0;
    //   let st = window.pageYOffset || document.documentElement.scrollTop;
    //   let windowHeight = window.innerWidth < 1025 ? window.innerHeight * 2 : window.innerHeight;
    //   // if (window.innerWidth < 1025) return windowHeight * 2
    //   if (st > windowHeight) {
    //     document.querySelector(".floating-btn").classList.remove("--hidden");
    //   } else {
    //     document.querySelector(".floating-btn").classList.add("--hidden");
    //   }
    //   lastScrollTop = st <= 0 ? 0 : st;
    // },
  },
  watch: {
    "$route.fullPath": function () {
      window.scrollTo(0, 0);
    },
    // "$route.name": function (val) {
    //   if (val != "index") {
    //     document.querySelector(".floating-btn").classList.remove("--hidden");
    //     window.removeEventListener("scroll", this.scroll);
    //   } else {
    //     window.addEventListener("scroll", this.scroll, false);
    //   }
    // },
  },
  mounted() {
    if (localStorage.getItem("lang")) {
      const lang = localStorage.getItem("lang");
      if (lang !== "ru" && lang !== "kk") return;
      if (lang !== this.currentLang)
        this.$store.commit("lang/SET_CURRENT_LANG", lang);
      if (
        this.$route.query &&
        this.$route.query.lang &&
        (this.$route.query.lang === "ru" || this.$route.query.lang === "kk")
      ) {
        this.$store.commit("lang/SET_CURRENT_LANG", this.$route.query.lang);
      }
    }
    // if (process.client) {
    //   if (this.$route.name == "index") {
    //     window.addEventListener("scroll", this.scroll, false);
    //   }
    // }
  },
};
</script>
