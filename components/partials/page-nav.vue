<template>
    <nav class="page-nav" ref="animationBlock">
        <nuxt-link
          v-for="item in headerMenu"
          :key="item.id"
          class="page-nav-link animation-item"
          :to="item.page.slug === 'home' ? '/' : `/${item.page.slug}`"
          >{{ item.name[currentLang] }}
        </nuxt-link>
    </nav>
</template>

<script>
import animation from '@/mixins/animation'
import { mapGetters } from 'vuex'

export default {
    mixins: [animation],
    computed: {
      ...mapGetters({
        headerMenu: 'menu/GET_MENU',
        currentLang: 'lang/GET_CURRENT_LANG',
      }),
    }
}
</script>
