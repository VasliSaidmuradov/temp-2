<template>
    <div class="posts" ref="animationBlock">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Акции и новости</nuxt-link>
        </div>
        <h1 class="page-title animation-item">Акции и новости</h1>
        <div class="layout-container">
            <div class="posts-row" v-for="(row, i) in 4" :key="i">
                <nuxt-link class="posts-item animation-item" :to="`/posts/${index}`" v-for="(item, index) in 3" :key="index">
                    <div class="posts-img">
                        <img src="/img/news.png" alt="CashU image">
                    </div>
                    <p class="posts-date">5 июня 2020</p>
                    <h4 class="posts-heading">Нюансы монетизации субсидий</h4>
                    <p class="posts-text">В данном материале представлены основные правила по выбору надёжного банка. Узнайте, по каким критериям лучше всего выбирать банк, чтобы не потерять капитал.</p>
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
export default {
    mixins: [animation],
    components: {
        arrow
    }
}
</script>