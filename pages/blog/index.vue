<template lang='pug'>
article
  BlogList(:articles='articles')
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
