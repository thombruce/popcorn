<template lang='pug'>
article
  BlogList(:articles='articles')
  footer.hidden
    NuxtLink(v-for='page in pages' :key='page.slug' :to='page') {{ page.title }}
</template>

<script>
export default {
  async asyncData({ $content }) {
    const pages = await $content()
      .fetch()

    const articles = await $content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    return { pages, articles }
  }
}
</script>
