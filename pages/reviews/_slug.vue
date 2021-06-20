<template lang='pug'>
div(v-if='article')
  TntContent(:article='article')
</template>

<script>
export default {
  async asyncData ({ $content, redirect, query, params }) {
    const slug = params.slug

    const article = await $content('reviews', slug)
      .where({ draft: { $ne: true } })
      .fetch()

    if (article.redirect) {
      redirect({ path: article.redirect, query: query })
    } else {
      return { slug, article }
    }
  },

  head () {
    return {
      title: this.article.title,
      meta: [
        { hid: 'og:title', property: 'og:title', content: `${this.article.title} | Popcorn` },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.article.description ? this.article.description : 'Yet another culture blog.'}`
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        { hid: 'og:url', property: 'og:url', content: `https://popcorn.thombruce.com${this.$route.fullPath}/` },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `https://popcorn.thombruce.com${this.article.image ? this.$img(this.article.image, { width: '1200px', height: '627px' }) : '/popcorn.jpg'}`
        }
      ]
    }
  }
}
</script>
