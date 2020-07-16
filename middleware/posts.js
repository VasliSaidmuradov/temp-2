export default async function({ store }) {
  await store.dispatch('posts/fetchPosts', { per_page: 12 })
}
