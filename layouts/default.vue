<template>
    <div class="layout">
        <app-header />
        <app-nav />
        <div class="layout-content">
            <nuxt />
        </div>
        <app-footer />
    </div>
</template>

<script>
import appHeader from '@/components/partials/header'
import appNav from '@/components/partials/page-nav'
import appFooter from '@/components/partials/footer'
export default {
    components: {
        appHeader,
        appNav,
        appFooter
    }
}
</script>
