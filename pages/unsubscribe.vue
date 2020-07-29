<template>
  <div class="unsubscribe">
    <div class="unsubscribe-inner">
      <icon class="unsubscribe-icon" />
      <h4 class="unsubscribe-title">Отписка от рассылки</h4>
      <p class="unsubscribe-text">Вы больше не будете получать сообщений от CashU</p>
      <nuxt-link class="button" to="/">Вернуться на главную</nuxt-link>
    </div>
  </div>
</template>

<script>
import icon from "@/static/icons/unsub-icon.svg";
export default {
  components: {
    icon,
  },
};
</script>