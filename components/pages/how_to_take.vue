<template>
  <div class="get-loan">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>

    <!-- <pre>{{ page }}</pre> -->
    <!-- <pre>{{ langs[currentLang] ]}}</pre>
    <pre>{{ page ]}}</pre>-->

    <hero :page="page" />
    <easy :page="page" />
    <steps :page="page" />

    <get-money />
  </div>
</template>

<script>
import hero from "@/components/get-loan/hero";
import getMoney from "@/components/partials/get-money";
import easy from "@/components/get-loan/easy";
import steps from "@/components/get-loan/steps";
import { mapGetters } from "vuex";

export default {
  // middleware: ["page"],
  components: {
    hero,
    getMoney,
    steps,
    easy,
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
