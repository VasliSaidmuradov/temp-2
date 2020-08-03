

<template>
  <div class="posts" ref="animationBlock">
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>
    <h1 class="page-title animation-item">{{ page.title[currentLang] }}</h1>
    <div class="layout-container">
      <div class="posts-row" v-for="(articles, i) in $chunk(posts.data, 3)" :key="i">
        <nuxt-link
          class="posts-item animation-item"
          v-for="article in articles"
          :key="article.id"
          :to="`/articles/${article.slug}`"
        >
          <div class="posts-img">
            <img v-if="article.image" :src="article.image" :alt="article.name[currentLang]" />
          </div>
          <p class="posts-date">{{ $formatDate(article.updated_at) }}</p>
          <h4 class="posts-heading">{{ article.name[currentLang] }}</h4>
          <p
            class="posts-text"
          >{{ article.description[currentLang] && article.description[currentLang].length > 150 ? article.description[currentLang].slice(0, 150) + '...' : article.description[currentLang] }}</p>
        </nuxt-link>
      </div>
      <Pagination :paginator="posts" />
    </div>
  </div>
</template>

<script>
import animation from "@/mixins/animation";
import Pagination from "@/components/partials/pagination.vue";

import { mapGetters } from "vuex";

export default {
  middleware: ["posts", "page"],
  mixins: [animation],
  components: {
    Pagination,
  },
  computed: {
    ...mapGetters({
      posts: "posts/GET_POSTS",
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
      page: "pages/GET_PAGE",
    }),
  },
};
</script>
