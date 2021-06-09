<template lang='pug'>
.alert(role='alert')
  span.alert-context Spoiler warning!
  span.alert-message
    slot
</template>

<style lang='postcss'>
.alert {
  @apply my-5 p-2 bg-danger-800 items-center text-danger-100 leading-none flex rounded-full;
  & span.alert-context {
    @apply flex rounded-full bg-danger-500 uppercase px-2 py-1 text-xs font-bold mr-3;
  }
  & span.alert-message {
    @apply font-semibold mr-2 text-left flex-auto;
  }
}
</style>
