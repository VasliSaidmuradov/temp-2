<template>
  <div class="reviews-modal">
    <div class="reviews-modal-overlay" @click="closeModal"></div>
    <form class="reviews-modal-inner">
      <button class="reviews-modal-close" @click="closeModal">
        <close />
      </button>
      <h3 class="section-title">{{ currentLang === 'ru' ? 'Отзыв' : 'Пікір' }}</h3>
      <div class="reviews-modal-rating-wrp">
        <p>{{ langs[currentLang]['body.rating'] }}:</p>
        <client-only>
          <star-rating
            v-model="review.rating"
            :increment="0.5"
            :rating="review.rating"
            :star-size="28"
            :show-rating="false"
            :rounded-corners="true"
            :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"
          />
        </client-only>
      </div>
      <input v-model="review.name" type="text" :placeholder="langs[currentLang]['body.your_name']" class="reviews-modal-input" required />
      <input v-model="review.city" type="text" :placeholder="langs[currentLang]['body.your_city']" class="reviews-modal-input" required />
      <textarea v-model="review.review" class="reviews-modal-input" :placeholder="langs[currentLang]['body.your_review']" required></textarea>
      <label class="reviews-modal-file-wrp">
        <input @change="addFile" type="file" />
        <p v-if="!file">{{ langs[currentLang]['body.put_file'] }}</p>
        <file-icon v-if="!file" />
        <p v-if="file">{{ file[0].name }}</p>
      </label>
      <button
        :disabled="!isSending && !isFormValidate"
        @click.prevent="send"
        class="button"
        :class="{ '--disabled-button': !isSending && !isFormValidate }"
        >{{ langs[currentLang]['body.submit'] }}</button>
    </form>
  </div>
</template>

<script>
import close from "@/static/icons/close.svg";
import fileIcon from "@/static/icons/attach.svg";
import { mapGetters } from "vuex";

export default {
  components: {
    close,
    fileIcon,
  },
  data() {
    return {
      review: {
        rating: 5,
        name: null,
        city: null,
        review: null,
      },
			file: null,
      isSending: false,
    };
  },
  computed: {
    ...mapGetters({
      currentLang: "lang/GET_CURRENT_LANG",
      langs: "lang/GET_LANGS",
    }),
    isFormValidate() {
      return this.review.name && this.review.city && this.review.review
    },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    async send() {
      const form = document.forms.reviewForm;
      let data = { ...this.review };
			let formData = new FormData();

      if (this.file) formData.append("file", this.file[0], this.file[0].name);
      Object.keys(data).map((el) => {
      	formData.append(el, data[el]);
      });

      try {
				this.isSending = true;
        const header = {
          headers: {
            "Content-Type":
              "multipart/form-data; boundary=" + formData._boundary,
          },
        };
        const resp = await this.$axios.post('https://admin.cashu.kz/api/feedback', formData, header);
				// console.log(resp);
        this.$emit("sendReview");
      } catch (error) {
        console.log(error);
      } finally {
				this.isSending = false;
      }
    },
    addFile(e) {
      this.file = e.target.files;
    },
  },
};
</script>
