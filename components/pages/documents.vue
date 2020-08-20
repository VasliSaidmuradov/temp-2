<template>
  <div class="documentation">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>
    <!-- <pre>{{ documents }}</pre> -->
    <!-- <pre>{{ page }}</pre> -->

    <h1 class="page-title">{{ page.title[currentLang] }}</h1>
    <div class="layout-container">
      <div class="documentation-row">
        <a :href="$imageLink(doc.file)" target="_blank" class="documentation-item" v-for="(doc, index) in documents" :key="index">
          <!-- <iframe :src="'https://docs.google.com/gview?url=https://cashu.kz/' + $imageLink(doc.file)"></iframe> -->
          {{ doc.name }}
          <download-icon />
        </a>
      </div>
    </div>
    <get-money />
  </div>
</template>

<script>
import downloadIcon from "@/static/icons/open.svg";
import getMoney from "@/components/partials/get-money";
import { mapGetters } from "vuex";

export default {
  middleware: ["page"],
  components: {
    downloadIcon,
    getMoney,
  },
  computed: {
    ...mapGetters({
      page: "pages/GET_PAGE",
      documents: "pages/GET_DOCS",
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
  },
};
</script>
