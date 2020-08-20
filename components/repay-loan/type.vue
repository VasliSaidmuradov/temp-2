<template>
  <div class="repay-type" ref="animationBlock">
    <!-- <pre>{{ page }}</pre> -->
    <!-- <pre>{{ blockOne }}</pre> -->
    <!-- <pre>{{ blockTwo }}</pre> -->

    <div class="layout-container">
      <h3
        v-if="page.extras[currentLang] && page.extras[currentLang]['name_in_second']"
        class="section-title animation-item"
      >{{ page.extras[currentLang]['name_in_second'] }}</h3>
      <p
        v-if="page.extras[currentLang] && page.extras[currentLang]['description_in_second']"
        class="repay-type-text animation-item"
      >{{ page.extras[currentLang]['description_in_second'] }}</p>

      <div class="repay-type-wrap">
        <div class="repay-type-row" v-for="items in $chunk(blockOne, 2)">
          <nuxt-link
            v-for="(item, index) in items"
            :key="index"
            :to="item.link ? item.link : ''"
            class="repay-type-col animation-item"
          >
            <p class="repay-type-text">{{ item.name }}</p>
            <img
              v-if="item.image"
              :src="item.image ? $imageLink(item.image) : ''"
              alt="CashU image"
            />
          </nuxt-link>
        </div>
      </div>
      <div v-for="(item, index) in blockTwo" :key="index">
        <h4 class="repay-type-subtitle animation-item">{{ item.name }}</h4>
        <div class="repay-type-list" v-html="item.description"></div>
      </div>
    </div>
  </div>
</template>

<script>
import animation from "@/mixins/animation";
import { mapGetters } from "vuex";

export default {
  mixins: [animation],
  props: {
    page: Object,
  },
  computed: {
    ...mapGetters({
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
    blockOne() {
      const block = this.page.extras
        ? this.page.extras[this.currentLang].block_in_second
        : "";
      if (!block) return {};
      // console.log(block);
      return this.$parseString(block);
    },
    blockTwo() {
      const block = this.page.extras
        ? this.page.extras[this.currentLang].second_block_in_second
        : "";
      if (!block) return {};
      return this.$parseString(block);
    },
  },
};
</script>
