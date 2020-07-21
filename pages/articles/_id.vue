<template>
    <div v-if="post" class="post-inner" ref="animationBlock">
        <div class="breadcrumbs">
            <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
            <nuxt-link v-if="page" to="/articles">{{ page.title[currentLang] }}</nuxt-link>
            <nuxt-link :to='post.slug'>{{ post.name[currentLang] }}</nuxt-link>
        </div>
        <div class="post-inner-container">
            <h1 class="page-title animation-item">{{ post.name[currentLang] }}</h1>
            <div class="post-inner-image">
                <img :src="post.image ? post.image : require('@/static/img/news.png')" alt="CashU image" class="animation-item">
            </div>
            <div class="post-inner-content" v-html="post.content[currentLang] ? post.content[currentLang] : ''"></div>
        </div>
        <get-money />
    </div>
</template>

<script>
import getMoney from '@/components/partials/get-money'
import animation from '@/mixins/animation'

import { mapGetters } from 'vuex'

export default {
    middleware: ['post'],
    mixins: [animation],
    components: {
        getMoney
    },
    computed: {
      ...mapGetters({
        post: 'posts/GET_POST',
        currentLang: 'lang/GET_CURRENT_LANG',
        langs: 'lang/GET_LANGS',
        page: 'pages/GET_PAGE',
      }),
    },
    async fetch() {
      await this.$store.dispatch('pages/fetchPage', '/articles');
    }
}
</script>
