<template lang='pug'>
header
  span.py-24
    NuxtLink(to='/') Popcorn
  .navbar
    nav
      NuxtLink.btn.btn-ghost(v-for='(item, i) in items' :key='i' :to='item.to')
        span {{ item.title }}
    TntUIThemeToggle
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Blog',
          to: '/blog'
        },
        {
          title: 'Reviews',
          to: '/reviews'
        },
        {
          title: 'Upcoming',
          to: '/releases'
        },
        {
          title: 'Credits',
          to: '/credits'
        }
      ]
    }
  }
}
</script>

<style lang='postcss' scoped>
header {
  @apply flex flex-col justify-center py-5 px-4;
  & > span:first-of-type {
    @apply block w-min m-auto text-7xl sm:text-9xl text-base-content font-poster text-chromatic-aberration;
  }
  & > div {
    @apply flex justify-center;
  }
}
</style>