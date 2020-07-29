export default async function ({ store, route }) {
	const queue = [];

	// console.log('middleware contacts::', route.name);
	queue.push(store.dispatch('pages/fetchPage', route.path));

	await Promise.all(queue);
}
