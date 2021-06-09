<template lang='pug'>
header.py-4
  dl.inline-block.mr-1(v-if='article.categories')
    dt.sr-only Categories
    dd.inline-block.mr-2(v-for='category in article.categories')
      NuxtLink(:to='`/blog/categories/${parameterize(category)}`') {{ category }}

  dl.inline-block.mr-1(v-if='article.series')
    dt.sr-only Series
    dd.inline-block.mr-2(v-for='series in article.series')
      NuxtLink(:to='`/blog/series/${parameterize(series)}`') {{ series }}

  h1 {{ article.title }}

  dl.inline-block.mr-1(v-if='article.tags')
    dt.sr-only Tags
    dd.inline-block.mr-2(v-for='tag in article.tags')
      NuxtLink(:to='`/blog/tags/${parameterize(tag)}`') {{ tag }}

  time.block(:datetime='article.createdAt') {{ article.createdAt }}

  NuxtImg(v-if='article.image' :src='article.image' sizes='xs:320px sm:640px md:768px')
</template>

<script>
import { kebabCase } from 'lodash'

export default {
  props: ['article'],

  methods: {
    parameterize (term) {
      return kebabCase(term)
    }
  }
}
</script>
