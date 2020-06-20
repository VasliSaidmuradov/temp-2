<template>
    <div class="documentation">
        <div class="breadcrumbs">
            <nuxt-link to="/">Главная</nuxt-link>
            <nuxt-link to>Документация</nuxt-link>
        </div>
        <h1 class="page-title">Документация</h1>
        <div class="layout-container">
            <div class="documentation-row">
                <a href="" download class="documentation-item" v-for="(item, index) in 5" :key="index">
                    Договор о предоставлении микрокредита
                    <download-icon />
                </a>
            </div>
            <div class="documentation-row">
                <a href="" download class="documentation-item" v-for="(item, index) in 5" :key="index">
                    Договор о предоставлении микрокредита
                    <download-icon />
                </a>
            </div>
        </div>
        <get-money />
    </div>
</template>

<script>
import downloadIcon from '@/static/icons/open.svg'
import getMoney from '@/components/partials/get-money'
export default {
    components: {
        downloadIcon,
        getMoney
    }
}
</script>