<template lang='pug'>
div
  TntContent(v-if='!Array.isArray(article)' :article='article')
  article(v-else)
    header
      h1 {{ slug | titleize }}
    div
      article(v-for='term in article')
        header
          h2
            NuxtLink(:to='{ name: `blog-taxonomy-term`, params: { taxonomy: slug, term: term.slug } }') {{ term.title }}
</template>

<script>
export default {
  async asyncData({ $content, $taxonomies, params }) {
    const slug = params.slug

    const article = await $content('blog', slug)
      .fetch()
      .catch(async () => {
        const terms = await $taxonomies(slug, 'blog').all()
        return terms
      })

    return { slug, article }
  },
  head () {
    return {
      title: this.article.title ? this.article.title : this.slug,
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
