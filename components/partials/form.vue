<template>
    <div class="form">
        <p class="form-label animation-item">{{ langs[currentLang]['contacts.your_name'] }}</p>
        <input type="text" name="name" class="form-input animation-item" :placeholder="langs[currentLang]['contacts.input_name']">
        <p class="form-label animation-item">{{ langs[currentLang]['contacts.email'] }}</p>
        <input type="email" name="mail" class="form-input animation-item" :placeholder="langs[currentLang]['contacts.input_email']">
        <button class="button animation-item">{{ langs[currentLang]['body.subscribe'] }}</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentLang: 'lang/GET_CURRENT_LANG',
      langs: 'lang/GET_LANGS',
    }),
  }
}
</script>
