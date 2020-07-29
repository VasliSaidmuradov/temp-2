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

<style lang="sass">
.error-page
	height: calc(100vh - 150px)
	.layout-container
		height: 100%
		display: flex
		align-items: center
		justify-content: center
		text-align: center
		&-image
			margin: auto
		&-title
			font-size: 20px
			font-weight: 600
			color: var(--text-color)
			margin-top: 40px
			margin-bottom: 40px
</style>
