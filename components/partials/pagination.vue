<template>
<div class="pagination" ref="pagination">
  <nuxt-link
    v-if="paginator.current_page > 1"
    class="pagination-prev"
    :to="paginator.current_page > 1
      ? {path: $route.path, query: Object.assign({}, $route.query, { page: `${paginator.current_page - 1}` })}
      : {path: $route.path, query: Object.assign({}, $route.query, { page: `${paginator.current_page}` })} "
  >
    <arrow /> {{ langs[currentLang]['body.back'] }}
  </nuxt-link>
  <div class="pagination-item-wrp">
    <nuxt-link
      v-if="Math.abs(paginator.current_page - page) <= 1 || page == paginator.last_page || page == 1"
      v-for="page in Math.ceil(paginator.total / paginator.per_page)" :key="page.id"
      class="pagination-item"
      :class="{ '--active': paginator.current_page == page }"
      :to="{path: $route.path, query: Object.assign({}, $route.query, {page: `${page}`})}"
    >
      <!-- v-for="page in Math.ceil(paginator.total / paginator.per_page)" :key="page.id" -->
      <!-- v-for="index in Math.ceil(paginator.total / paginator.per_page)" -->
      {{ page }}
    </nuxt-link>
    <span v-else-if="Math.abs(paginator.current_page - page) == 2"> . . . </span>
  </div>
  <nuxt-link
    v-if="paginator.current_page < paginator.last_page"
    class="pagination-next"
    :to="paginator.current_page < paginator.last_page
      ? {path: $route.path, query: Object.assign({}, $route.query, {page: `${paginator.current_page + 1}`})}
      : {path: $route.path, query: Object.assign({}, $route.query, {page: `${paginator.current_page}`})}"
  >
    {{ langs[currentLang]['body.next'] }}
    <arrow />
  </nuxt-link>
</div>

</template>

<script>

import {
  mapActions,
  mapGetters
}
from 'vuex'
import arrow from '@/static/icons/arrow.svg'

export default {
  props: {
    paginator: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      isBusy: false,
    }
  },
  components: {
    arrow,
  },
  computed: {
    ...mapGetters({
      currentLang: 'lang/GET_CURRENT_LANG',
      langs: 'lang/GET_LANGS',
    }),
  },
  methods: {
    ...mapActions({
      paginate: 'pagination/paginate',
    }),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    async changePage() {
      // console.log('change page')
      try {
        this.isBusy = true;
        // await this.paginate(this.paginator);
      } catch(error) {
        console.log(error)
      } finally {
        this.isBusy = false;
      }
    }
  },
}

</script>
