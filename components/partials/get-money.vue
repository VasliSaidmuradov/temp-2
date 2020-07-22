<template>
    <div class="get-money" ref="animationBlock">
        <div class="layout-container">
          <!-- <pre>{{ langs[currentLang] }}</pre> -->
            <h3 class="get-money-title animation-item">{{ langs[currentLang]['body.much_easier'] }}</h3>
            <nuxt-link class="button animation-item" to>{{ langs[currentLang]['body.get_money'] }}</nuxt-link>
        </div>
    </div>
</template>

<script>
import animation from '@/mixins/animation'
import {
    mapGetters
} from 'vuex'

export default {
    mixins: [animation],
    computed: {
      ...mapGetters({
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
      })
    }
}
</script>
