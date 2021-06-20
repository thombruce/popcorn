<template lang='pug'>
article
  TntBlogList(v-if='articles' :articles='articles')
  footer.hidden(v-if='pages')
    NuxtLink(v-for='page in pages' :key='page.slug' :to='page') {{ page.title }}
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const pages = await $content()
      .fetch()
      .catch(() => {})

    let articles = await $content('', { deep: true })
      .where({ $and: [{ draft: { $ne: true } }, { dir: { $ne: '/' } }] })
      .sortBy('createdAt', 'desc')
      .fetch()
      .catch(() => {})

    articles = articles.filter(article => article.redirect === undefined)
    
    return { pages, articles }
  },

  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>
