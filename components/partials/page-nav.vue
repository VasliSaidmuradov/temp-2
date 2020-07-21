<template>
    <nav class="page-nav" ref="animationBlock">
        <nuxt-link
          v-for="item in headerMenu"
          :key="item.id"
          class="page-nav-link animation-item"
          :to="`/${item.page.slug}`"
          >{{ item.name }}
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
        footerMenu: 'menu/GET_FOOTER_MENU',
      }),
    }
}
</script>
