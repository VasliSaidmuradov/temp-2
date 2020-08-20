export default async function ({ store }) {
	const queue = [];
	const faq = store.getters['faq/GET_FAQ'];
	if (!faq) {
		queue.push(store.dispatch('faq/fetchFaq'));
	}
	await Promise.all(queue);
}
