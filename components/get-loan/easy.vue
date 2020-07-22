<template>
    <div class="loan-steps" ref="animationBlock">
        <!-- <pre>{{ page.extras[currentLang] }}</pre> -->
        <!-- <pre>{{ steps }}</pre> -->

        <div class="loan-steps-container">
            <h3
              v-if="page.extras[currentLang] && page.extras[currentLang]['name_in_second']"
              class="section-title animation-item"
              >
              {{ page.extras[currentLang]['name_in_second'] }}
            </h3>
            <h4
              v-if="page.extras[currentLang] && page.extras[currentLang]['description_in_second']"
              class="loan-steps-subtitle animation-item"
              >
              {{ page.extras[currentLang]['description_in_second'] }}
            </h4>

            <div v-for="(step, i) in steps" :key='i' class="loan-steps-row">
                <div class="loan-steps-left animation-item">
                    <span class="loan-steps-count">{{ i + 1 }}</span>
                    <p class="loan-steps-text">
                        {{ step.name }}
                    </p>
                </div>
                <div class="loan-steps-right animation-item">
                    <img :src="step.image ? $imageLink(step.image) : require('@/static/img/loan-steps1.png')" alt="CashU image">
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import animation from '@/mixins/animation'
import {
  mapGetters
}
from 'vuex'

export default {
  props: {
    page: Object,
  },
  mixins: [animation],
  components: {},
  computed: {
    ...mapGetters({
      currentLang: 'lang/GET_CURRENT_LANG',
      langs: 'lang/GET_LANGS',
    }),
    steps() {
      const block = this.page.extras ? this.page.extras[this.currentLang].block_in_second : '';
      if (!block) return '';
      return this.$parseString(block);
    },
  }
}
</script>
