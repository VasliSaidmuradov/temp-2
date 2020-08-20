<template>
  <div v-if="1" class="post-inner" ref="animationBlock">
    <div v-if="false" class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link v-if="page" to="/articles">{{ page.title[currentLang] }}</nuxt-link>
      <nuxt-link :to="post.slug">{{ post.name[currentLang] }}</nuxt-link>
    </div>
    <!-- :: <pre>{{ page }}</pre> -->
    <!-- >>> <pre>{{ post }}</pre> -->
    <div v-if="post" class="post-inner-container">
      <h1 class="page-title animation-item">{{ post.name[currentLang] }}</h1>
      <div class="post-inner-image">
        <img
          v-if="post.image"
          :src="post.image ? post.image : require('@/static/img/news.png')"
          alt="CashU image"
          class="animation-item"
        />
      </div>
      <div
        class="post-inner-content"
        v-html="post.content[currentLang] ? post.content[currentLang] : ''"
      ></div>
    </div>
    <div v-else class="error-page">
      <div class="layout-container">
        <!-- page: {{ page }} -->
        <div class="error-page-block">
          <img src="/icons/404.svg" alt="CashU image" class="error-page-image" />
          <h4 class="error-page-title">{{ langs[currentLang]['body.not_found'] }}</h4>
          <nuxt-link class="button" to="/">{{ langs[currentLang]['body.back_to_main'] }}</nuxt-link>
        </div>
      </div>
    </div>
    <get-money />
  </div>
</template>

<script>
import getMoney from "@/components/partials/get-money";
import animation from "@/mixins/animation";

import { mapGetters } from "vuex";

export default {
  mixins: [animation],
  components: {
    getMoney,
  },
  computed: {
    ...mapGetters({
      post: "posts/GET_POST",
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
      page: "pages/GET_PAGE",
    }),
  },
};
</script>
