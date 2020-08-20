<template>
  <div class="repay-loan">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>

    <hero :page="page" />
    <type :page="page" />
    <easy :page="page" />
    <get-money />
  </div>
</template>

<script>
import hero from "@/components/repay-loan/hero";
import easy from "@/components/repay-loan/easy";
import type from "@/components/repay-loan/type";
import getMoney from "@/components/partials/get-money";
import { mapGetters } from "vuex";

export default {
  // middleware: ["page"],
  components: {
    hero,
    type,
    easy,
    getMoney,
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
