<template lang='pug'>
span.py-24
  NuxtLink(to='/') {{ title }}
</template>

<script>
export default {
  data () {
    return {
      title: this.$nuxt.$options.head.title
    }
  }
}
</script>

<style lang='postcss' scoped>
span {
  @apply block w-min m-auto text-7xl sm:text-9xl text-base-content font-poster text-chromatic-aberration;
}
</style>
