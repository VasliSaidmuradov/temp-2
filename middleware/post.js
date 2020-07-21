export default async function({ store, route }) {
  console.log('mid post: ', route)
  await store.dispatch('posts/fetchPost', route.params.id);
}
