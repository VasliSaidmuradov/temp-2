export default async function ({ store, route }) {
	const queue = [];

	queue.push(store.dispatch('pages/fetchPage', route.path));

	await Promise.all(queue);
}
