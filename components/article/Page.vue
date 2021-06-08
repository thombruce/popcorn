<template lang='pug'>
article
  ArticleHeader(:article='article')
  aside
    h2.mb-2 Table of Contents
    TntUITableOfContents(:toc='article.toc')
  div
    hr.my-3
    NuxtContent(:document='article')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>
