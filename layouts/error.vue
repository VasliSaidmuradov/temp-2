<template>
  <div class="error-page">
    <div class="layout-container">
      <div class="error-page-block" v-if="error.statusCode === 404">
        <img src="/icons/404.svg" alt="CashU image" class="error-page-image" />
        <h4 class="error-page-title">Извините. Страница, которую вы ищете, не найдена</h4>
        <nuxt-link class="button" to="/">Вернуться на главную</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
};
</script>
