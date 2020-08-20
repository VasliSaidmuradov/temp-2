<template>
  <div class="reviews-modal">
    <!-- v: {{ isVideo }} <br>
    i: {{ isImage }} -->
    <div class="reviews-modal-overlay" @click="closeModal"></div>
    <video
      v-if="isVideo"
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
    <img v-if="isImage" :src="'https://admin.cashu.kz/uploads/' + review.file" alt="" class="reviews-modal-img">
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
  computed: {
    isVideo() {
      const re = /(.mp4)$/gi;
      return this.review.file && re.test(this.review.file);
    },
    isImage() {
      const re = /((.jp[e]*g)|(.png)|(.webp))$/gi;
      return this.review.file &&re.test(this.review.file);
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  }
};
</script>
