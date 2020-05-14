<template>
  <div class="layout">
    <TheTopbar class="md:mt-3 md:mb-1" />
    <div class="content">
      <div class="w-full max-w-6xl m-auto">
        <transition name="layout" mode="out-in">
          <nuxt />
        </transition>
      </div>
      <TheHelp />
    </div>
  </div>
</template>

<script>
import TheTopbar from '../components/TheTopbar.vue'
import TheHelp from '../components/TheHelp.vue'

export default {
  components: {
    TheTopbar,
    TheHelp
  }
}
</script>

<style lang="postcss" scoped>
.layout {
  @apply font-roboto text-base text-normal leading-normal min-h-screen flex flex-col px-4 pb-4;
  background: linear-gradient(135deg, #faf7f7 0%, #cbcbcb 100%);
}

.content {
  @apply flex-1 relative rounded-lg p-6;
  background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%);
  box-shadow: inset 0 0 4px 0 rgba(255, 255, 255, 0.4);
}
</style>
