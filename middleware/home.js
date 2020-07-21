export default async function({ store }) {
  const queue = []
  const posts = store.getters['posts/GET_POSTS'];
  const pages = store.getters['pages/GET_PAGES'];
  const reviews = store.getters['reviews/GET_REVIEWS'];

  if (!posts || posts.data.length <=2) {
    queue.push(store.dispatch('posts/fetchPosts', {
      per_page: 4,
    }))
  }

  queue.push(store.dispatch('pages/fetchPage', '/home' ));

  if (!reviews) {
    queue.push(store.dispatch('reviews/fetchReviews', { per_page: 6 }));
  }

  await Promise.all(queue);
}
