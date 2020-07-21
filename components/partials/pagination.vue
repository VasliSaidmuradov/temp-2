<template>
<div class="pagination" ref="pagination">
  <nuxt-link
    class="pagination-prev"
    :to="paginator.current_page > 1
      ? {path: $route.path, query: Object.assign({}, $route.query, { page: `${paginator.current_page - 1}` })}
      : {path: $route.path, query: Object.assign({}, $route.query, { page: `${paginator.current_page}` })} "
  >
    <arrow /> Назад
  </nuxt-link>
  <div class="pagination-item-wrp">
    <nuxt-link
      v-for="page in Math.ceil(paginator.total / paginator.per_page)" :key="page.id"
      class="pagination-item"
      :class="{ '--active': paginator.current_page == page }"
      :to="{path: $route.path, query: Object.assign({}, $route.query, {page: `${page}`})}"
    >
      {{ page }}
    </nuxt-link>
  </div>
  <nuxt-link
    :disabled="paginator.current_page >= paginator.last_page"
    class="pagination-next"
    :to="paginator.current_page < paginator.last_page
      ? {path: $route.path, query: Object.assign({}, $route.query, {page: `${paginator.current_page + 1}`})}
      : {path: $route.path, query: Object.assign({}, $route.query, {page: `${paginator.current_page}`})}"
  >
    Вперед
    <arrow />
  </nuxt-link>
</div>

</template>

<script>

import {
  mapActions
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
  methods: {
    ...mapActions({
      paginate: 'pagination/paginate',
    }),
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    async changePage() {
      console.log('change page')
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
  mounted() {
    if (process.client) {
      // document.addEventListener("scroll", async () => {
      //   if (this.isBusy) {
      //     return;
      //   }
      //   await this.changePage()
        // if (
        //   this.$refs.pagination &&
        //   this.$refs.pagination.getBoundingClientRect().bottom - 300 <
        //     window.innerHeight
        // ) {
          // this.isBusy = true;
          // await this.paginate(this.paginator);
          // this.isBusy = false;
        // }
      // });
    }
  }
}

</script>
