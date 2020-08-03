<template>
  <div class="reviews-modal">
    <div class="reviews-modal-overlay" @click="closeModal"></div>
    <video
      class="reviews-modal-video"
      autoplay
      loop
      preload
      playsinline
      muted
      autobuffer
      controls
      :src="'https://admin.cashu.kz/uploads/' + review.file"
    ></video>
    <!-- <img :src="'https://admin.cashu.kz/uploads/' + review.file" alt="" class="reviews-modal-img"> -->
  </div>
</template>

<script>
import close from "@/static/icons/close.svg";
import { mapGetters } from "vuex";

export default {
  props: {
    review: Object
  },
  components: {
    close,
  },
  data() {
    return {
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  }
};
</script>
