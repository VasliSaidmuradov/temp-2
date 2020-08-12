<template>
    <div class="stub">
        <img src="/icons/logo.svg" alt="Cashu logo" class="stub-logo">
        <h1 class="stub-title">Скоро открытие...</h1>
        <img src="/img/stub.png" alt="Cashu image" class="stub-img">
    </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
    .stub
        display: flex
        width: 100%
        height: 100vh
        flex-direction: column
        align-items: center
        padding-top: 100px
        &-title
            margin-top: 170px
            margin-bottom: 40px
            font-size: em(36)
            color: var(--text-color)
</style>
