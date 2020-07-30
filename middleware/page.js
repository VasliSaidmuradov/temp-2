export default async function ({ store, route }) {
	const queue = [];

	// console.log('middleware page', route);
	queue.push(store.dispatch('pages/fetchPage', route.path));

	await Promise.all(queue);
}
