<template lang='pug'>
article
  div(v-if='articles')
    article(v-for='article in articles')
      header
        h2
          NuxtLink(:to='article') {{ article.title }}
        time(:datetime='article.createdAt') {{ article.createdAt }}
      div
        p {{ article.description }}
  div.text-center(v-else)
    span.text-2xl.text-secondary There's nothing to see yet.
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('blog')
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    return { articles }
  }
}
</script>
