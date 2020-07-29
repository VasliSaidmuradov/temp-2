<template>
    <div class="home-pros" ref="animationBlock">
        <h3 class="section-title animation-item">{{ langs[currentLang]['body.why_profitable'] }}</h3>
        <div class="home-pros-row">
            <div class="home-pros-col animation-item" v-for="(item, i) in extras" :key="i">
                <div class="home-pros-img-wrp">
                    <img :src="item.image ? $imageLink(item.image) : ''" alt="CashU image">
                </div>
                <h4 class="home-pros-title">{{ item.name }}</h4>
                <p class="home-pros-text">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import animation from '@/mixins/animation'
import { mapGetters } from 'vuex'

export default {
    mixins: [animation],
    computed: {
      ...mapGetters({
        extras: 'pages/GET_EXTRAS',
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
      }),
    }
}
</script>
