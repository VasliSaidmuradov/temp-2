<template>
    <div class="posts" ref="animationBlock">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Акции и новости</nuxt-link>
        </div>
        <h1 class="page-title animation-item">Акции и новости</h1>
        <div class="layout-container">
            <pre>
              <!-- {{ posts }} -->
            </pre>
            <div class="posts-row" v-for="(articles, i) in $chunk(posts.data)" :key="i">
                <nuxt-link class="posts-item animation-item" :to="`/posts/${article.slug}`" v-for="article in articles" :key="article.id">
                    <div class="posts-img">
                        <img :src="article.image" :alt="article.name.ru">
                    </div>
                    <p class="posts-date">{{ $formatDate(article.created_at) }}</p>
                    <h4 class="posts-heading">{{ article.name.ru }}</h4>
                    <p class="posts-text">{{ article.description.ru }}</p>
                </nuxt-link>
            </div>
            <div class="pagination">
                <button class="pagination-prev">
                    <arrow />
                    Назад
                </button>
                <div class="pagination-item-wrp">
                    <button class="pagination-item --active">1</button>
                    <button class="pagination-item">2</button>
                    <button class="pagination-item">3</button>
                    <button class="pagination-item">4</button>
                </div>
                <button class="pagination-next">
                    Вперед
                    <arrow />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import arrow from '@/static/icons/arrow.svg'
import animation from '@/mixins/animation'

import { mapGetters } from 'vuex'

export default {
    middleware: ['posts'],
    mixins: [animation],
    components: {
        arrow
    },
    computed: {
      ...mapGetters({
        posts: 'posts/GET_POSTS',
      })
    }
}
</script>
