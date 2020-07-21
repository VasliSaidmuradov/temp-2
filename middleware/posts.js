export default async function({ store, route }) {
  await store.dispatch('posts/fetchPosts', route.fullPath);
}
