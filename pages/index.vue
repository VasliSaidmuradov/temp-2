<template>
  <div class="home-page">
    <banner />
    <calculator />
    <pros />
    <Posts />
    <reviews />
    <subscribe />
  </div>
</template>

<script>
import banner from "@/components/home/banner";
import calculator from "@/components/home/calculator";
import pros from "@/components/home/pros";
import Posts from "@/components/home/news";
import reviews from "@/components/home/reviews";
import subscribe from "@/components/partials/subscribe";

import { mapGetters } from "vuex";

export default {
  components: {
    banner,
    calculator,
    pros,
    Posts,
    reviews,
    subscribe,
  },
  middleware: ["home"],
  head() {
    const page = this.page ? this.page.extras[this.currentLang] : {}
    let metas = []
    if (page.meta_description) {
      metas.push({
        hid: 'description',
        name: 'description',
        content: page.meta_description
      })
    }
    if (page.meta_keywords) {
      metas.push({
        hid: 'keywords',
        name: 'keywords',
        content: page.meta_keywords
      })
    }
    return {
      title: page.meta_title,
      meta: metas
    }
  },
  computed: {
    ...mapGetters({
      langs: "lang/GET_LANGS",
      currentLang: "lang/GET_CURRENT_LANG",
      page: "pages/GET_PAGE",
      slides: "pages/GET_SLIDES",
      extras: "pages/GET_EXTRAS",
    }),
  },
};
</script>
