<template>
    <div class="layout">
        <lang-modal />
        <app-header />
        <app-nav />
        <div class="layout-content">
            <transition name="fade">
                <nuxt />
            </transition>
        </div>
        <app-footer />
    </div>
</template>

<script>
import appHeader from '@/components/partials/header'
import appNav from '@/components/partials/page-nav'
import appFooter from '@/components/partials/footer'
import langModal from '@/components/partials/lang-modal'
export default {
    components: {
        langModal,
        appHeader,
        appNav,
        appFooter
    }
}
</script>
