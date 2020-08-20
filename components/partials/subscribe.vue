<template>
    <div class="subscribe layout-container" ref="animationBlock">
        <div class="subscribe-inner">
            <h3 class="subscribe-title animation-item">{{ langs[currentLang]['body.want_to_take'] }}</h3>
            <h5 class="subscribe-subtitle animation-item">{{ langs[currentLang]['body.fill_out'] }}</h5>
            <app-form />
        </div>
    </div>
</template>

<script>
import appForm from '@/components/partials/form'
import animation from '@/mixins/animation'
import { mapGetters } from 'vuex'

export default {
    mixins: [animation],
    components: {
        appForm
    },
    computed: {
      ...mapGetters({
        langs: 'lang/GET_LANGS',
        currentLang: 'lang/GET_CURRENT_LANG',
      }),
    }
}
</script>
