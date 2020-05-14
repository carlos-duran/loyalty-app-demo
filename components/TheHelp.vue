<template>
  <div class="fixed left-0 bottom-0 ml-12 mb-12">
    <div class="relative cursor-pointer">
      <div class="circle absolute bg-white w-12 h-12 p-2 -ml-3 -mt-2 shadow-lg">
        <div class="circle flex-none w-8 h-8 border-4 border-black">
          <span class="font-bold text-xl">?</span>
        </div>
      </div>
      <div class="bg-white py-1 pl-10 pr-4 rounded-full shadow-lg">
        <span class="font-bold text-sm">Help</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="postcss" scoped>
.circle {
  @apply flex items-center justify-center rounded-full;
}
</style>
