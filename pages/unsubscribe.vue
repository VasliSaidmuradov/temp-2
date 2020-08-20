<template>
  <div class="unsubscribe">
    <!-- <pre>{{ currentLang }}</pre> -->
    <div class="unsubscribe-inner">
      <icon class="unsubscribe-icon" />
      <h4 class="unsubscribe-title">{{ langs[currentLang]['body.unsubscribe'] }}</h4>
      <p class="unsubscribe-text">{{ langs[currentLang]['body.unsubscribe_message'] }}</p>
      <nuxt-link class="button" to="/">{{ langs[currentLang]['body.back_to_main'] }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import icon from "@/static/icons/unsub-icon.svg";
import { mapGetters } from 'vuex'

export default {
  components: {
    icon,
  },
  computed: {
    ...mapGetters({
      langs: 'lang/GET_LANGS',
      currentLang: 'lang/GET_CURRENT_LANG',
    })
  }
};
</script>
