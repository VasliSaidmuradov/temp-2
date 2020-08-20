<template>
  <div class="reviews" ref="animationBlock">
    <transition name="modal-fade">
      <reviews-modal v-if="isModalOpen" @closeModal="closeModal" @sendReview="sendReview" />
    </transition>
    <transition name="modal-fade">
      <reviews-success v-if="isSuccessOpen" @closeModal="closeSuccess" />
    </transition>
    <transition name="modal-fade">
      <reviews-video v-if="isVideoOpen" @closeModal="closeVideo" :review="clickedReview[0]" />
    </transition>
    <div class="breadcrumbs">
      <nuxt-link to="/">{{ langs[currentLang]['body.main_page'] }}</nuxt-link>
      <nuxt-link to>{{ page.title[currentLang] }}</nuxt-link>
    </div>

    <!-- <pre>{{ page }}</pre> -->
    <!-- <pre>{{ langs[currentLang] }}</pre> -->

    <div class="layout-container">
      <h1 class="page-title animation-item">
        {{ page.title[currentLang] }}
        <button
          class="button"
          @click="openModal"
        >{{ langs[currentLang]['body.leave_feeback'] }}</button>
      </h1>
      <div
        v-if="reviews.data.length"
        class="reviews-row"
        v-for="(reviewList, index) in $chunk(reviews.data, 2)"
        :key="index"
      >
        <div class="reviews-col" v-for="review in reviewList" :key="review.id">
          <div class="reviews-item animation-item">
            <div class="reviews-name-wrp">
              <div class="reviews-avatar">
                <img
                  :src="review.image ? review.image : require('@/static/icons/avatar-placeholder.png')"
                  alt="CashU icon"
                />
              </div>
              <div>
                <p class="reviews-name">{{ review.name }}</p>
                <div class="reviews-rating">
                  <client-only>
                    <star-rating
                      :rating="review.rating"
                      :read-only="true"
                      :star-size="16"
                      :show-rating="false"
                      :rounded-corners="true"
                      :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
                    />
                  </client-only>
                </div>
              </div>
              <p class="reviews-city">{{ review.city }}</p>
            </div>
            <p class="reviews-text">{{ review.review }}</p>
            <div class="reviews-video-wrp" v-if="review.file" @click="openVideo(review.id)">
              <img v-if="/((.jp[e]*g)|(.png)|(.webp))$/gi.test(review.file)" :src="'https://admin.cashu.kz/uploads/' + review.file" alt="CashU image">
              <div v-if="/(.mp4)$/gi.test(review.file)" class="reviews-video-overlay">
                <play-icon />
              </div>
              <video
                v-if="/(.mp4)$/gi.test(review.file)"
                class="reviews-video"
                :src="'https://admin.cashu.kz/uploads/' + review.file"
              ></video>
            </div>
          </div>
        </div>
      </div>
      <div ref="pagination"></div>
    </div>
  </div>
</template>

<script>
import animation from "@/mixins/animation";
import playIcon from '@/static/icons/play.svg';
import reviewsModal from "@/components/partials/reviews-modal";
import reviewsSuccess from "@/components/partials/reviews-success";
import reviewsVideo from "@/components/partials/reviews-video";
import { mapGetters, mapActions } from "vuex";

export default {
  mixins: [animation],
  // middleware: ["reviews", "page"],
  data() {
    return {
      isModalOpen: false,
      isSuccessOpen: false,
      isVideoOpen: false,
      clickedReviewId: null,
      review: null,
      isBust: false,
    };
  },
  methods: {
    ...mapActions({
      paginate: 'pagination/paginate'
    }),
    openModal() {
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    closeSuccess() {
      this.isSuccessOpen = false;
    },
    openVideo(id) {
      this.clickedReviewId = id
      this.isVideoOpen = true
    },
    closeVideo() {
      this.isVideoOpen = false;
    },
    sendReview() {
      this.closeModal();
      this.isSuccessOpen = true;
    },
  },
  components: {
    reviewsModal,
    reviewsSuccess,
    reviewsVideo,
    playIcon
  },
  computed: {
    ...mapGetters({
      reviews: "reviews/GET_REVIEWS",
      page: "pages/GET_PAGE",
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
    clickedReview() {
      return this.reviews.data.filter(review => review.id === this.clickedReviewId)
    },
  },
  mounted() {
    if (process.client) {
      document.addEventListener("scroll", async () => {
        if (this.isBusy) {
          return;
        }

        if (
          this.$refs.pagination &&
          this.$refs.pagination.getBoundingClientRect().bottom - 100 <
            window.innerHeight
        ) {
          this.isBusy = true;
          await this.paginate(this.reviews);
          this.isBusy = false;
        }
      });
    }
  }
};
</script>
