<template>
    <div class="home-page">
        <!-- <pre>
          {{ currentLang }}: {{ langs[currentLang] }}
        </pre> -->
        <banner />
        <calculator />
        <pros />
        <news />
        <reviews />
        <subscribe />
    </div>
</template>

<script>
import banner from '@/components/home/banner'
import calculator from '@/components/home/calculator'
import pros from '@/components/home/pros'
import news from '@/components/home/news'
import reviews from '@/components/home/reviews'
import subscribe from '@/components/partials/subscribe'

import { mapGetters } from 'vuex'

export default {
    components: {
        banner,
        calculator,
        pros,
        news,
        reviews,
        subscribe
    },
    computed: {
      ...mapGetters({
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
      }),
    }
}
</script>
