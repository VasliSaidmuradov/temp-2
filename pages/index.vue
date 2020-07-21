<template>
    <div class="home-page">
        <pre>{{ slides }}</pre>
        <banner />
        <calculator />
        <pros />
        <Posts />
        <reviews />
        <subscribe />
    </div>
</template>

<script>
import banner from '@/components/home/banner'
import calculator from '@/components/home/calculator'
import pros from '@/components/home/pros'
import Posts from '@/components/home/news'
import reviews from '@/components/home/reviews'
import subscribe from '@/components/partials/subscribe'

import { mapGetters } from 'vuex'

export default {
    components: {
        banner,
        calculator,
        pros,
        Posts,
        reviews,
        subscribe
    },
    middleware: ['home'],
    computed: {
      ...mapGetters({
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
        page: 'pages/GET_PAGE',
        slides: 'pages/GET_SLIDES',
      }),
    }
}
</script>
