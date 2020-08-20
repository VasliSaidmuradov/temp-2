<template>
    <div class="get-money" ref="animationBlock">
        <div class="layout-container">
          <!-- <pre>{{ langs[currentLang] }}</pre> -->
            <h3 class="get-money-title animation-item">{{ langs[currentLang]['body.much_easier'] }}</h3>
            <a class="button animation-item" href="https://my.cashu.kz/auth/registration">{{ langs[currentLang]['body.get_money'] }}</a>
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
    },
    // methods: {
    //   sendMoney() {
    //     let url = 'https://my.cashu.kz/auth/registration';
    //     window.open(`${url}?loanAmount=5000&period=5`, '_blank');
    //   },
    // }
}
</script>
