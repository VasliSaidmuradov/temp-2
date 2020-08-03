export default async function ({ store }) {
	const queue = [];
	const reviews = store.getters['reviews/GET_REVIEWS'];
	if (!reviews) {
		queue.push(store.dispatch('reviews/fetchReviews', { per_page: 4 }));
	}
	await Promise.all(queue);
}
