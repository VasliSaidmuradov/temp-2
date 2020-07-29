<template>
  <div class="get-steps">
    <!-- >> <pre>{{ page }}</pre> -->
    <!-- >> <pre>{{ steps }}</pre> -->

    <div v-for="(stepList, i) in $chunk(steps, 4)">
      <div v-if="stepList[0]" class="get-steps-block --black --circle">
        <div class="layout-container">
          <div class="get-steps-row">
            <div class="get-steps-left">
              <h3 class="section-title animation-item">{{ stepList[0].name }}</h3>
              <div class="get-steps-text animation-item" v-html="stepList[0].desription"></div>
              <h4 class="get-steps-heading animation-item --block">
                {{ stepList[0].footer_word }}
                <b>{{ stepList[0].footer_word_b }}</b>
              </h4>
            </div>
            <div class="get-steps-right">
              <img
								v-if="stepList[0].image"
                class="animation-item"
                :src="stepList[0].image ? $imageLink(stepList[0].image) : ''"
                alt="CashU image"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="stepList[1]" class="get-steps-block --z2">
        <div class="layout-container">
          <div class="get-steps-row">
            <div class="get-steps-left">
              <h3 class="section-title animation-item">{{ stepList[1].name }}</h3>
              <div class="get-steps-text animation-item" v-html="stepList[1].desription"></div>
              <h4 class="get-steps-heading animation-item --block">
                {{ stepList[1].footer_word }}
                <b>{{ stepList[1].footer_word_b }}</b>
              </h4>
            </div>
            <div class="get-steps-right">
              <img
								v-if="stepList[1].image"
                class="animation-item"
                :src="stepList[1].image ? $imageLink(stepList[1].image) : ''"
                alt="CashU image"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="stepList[2]" class="get-steps-block --black --z3">
        <div class="layout-container">
          <div class="get-steps-row">
            <div class="get-steps-left">
              <h3 class="section-title animation-item">{{ stepList[2].name }}</h3>
              <div class="get-steps-text animation-item" v-html="stepList[2].desription"></div>
              <h4 class="get-steps-heading animation-item">
                {{ stepList[2].footer_word }}
                <b>{{ stepList[2].footer_word_b }}</b>
              </h4>
            </div>
            <div class="get-steps-right">
              <img
								v-if="stepList[2].image"
                :src="stepList[2].image ? $imageLink(stepList[2].image) : ''"
                alt="CashU image"
                class="animation-item"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-if="stepList[3]" class="get-steps-block --z4 --padding-bottom">
        <div class="layout-container">
          <div class="get-steps-row">
            <div class="get-steps-left">
              <h3 class="section-title animation-item">{{ stepList[3].name }}</h3>
              <div class="get-steps-text animation-item" v-html="stepList[3].desription"></div>
              <p class="get-steps-text animation-item">
                {{ stepList[3].footer_word }}
                <b>{{ stepList[3].footer_word_b }}</b>
              </p>
            </div>
            <div class="get-steps-right">
              <img
								v-if="stepList[3].image"
                :src="stepList[3].image ? $imageLink(stepList[3].image) : ''"
                alt="CashU image"
                class="animation-item"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    page: Object,
  },
  computed: {
    ...mapGetters({
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
    steps() {
      const block = this.page.extras
        ? this.page.extras[this.currentLang].block_in_third
        : "";
      // console.log('>>> ', block)
      if (!block) return [];
      return this.$parseString(block);
    },
  },
  mounted() {
    let block = document.querySelectorAll(".get-steps-block");
    block.forEach((b) => {
      let item = b.querySelectorAll(".animation-item");
      let stepsScene = this.$scrollmagic
        .scene({
          triggerElement: b,
        })
        .setTween(
          gsap.from(item, {
            opacity: 0,
            y: 15,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(3)",
          })
        );
      this.$scrollmagic.addScene(stepsScene);
    });
  },
};
</script>
