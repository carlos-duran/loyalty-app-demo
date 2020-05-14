<template>
  <div>
    <p class="font-nunito font-semibold mb-3">{{ items.length }} results</p>

    <div class="flex flex-wrap justify-between -mx-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="item w-full px-4 mb-4 md:mb-12"
      >
        <article
          class="flex md:flex-col md:h-full bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            :src="item.image"
            :alt="item.title"
            class="flex-none object-cover w-2/5 h-24 md:w-full md:h-32 m-2 md:m-0 rounded-lg md:rounded-none"
          />
          <div class="item-body p-2 md:py-3 md:px-5 min-w-0">
            <h3 class="font-bold md:text-xl mb-1 md:mb-2">
              {{ item.title }}
            </h3>
            <h4 class="hidden md:block font-nunito mb-2">
              {{ item.shop }}
            </h4>
            <p class="md:hidden font-nunito mb-2 text-sm">
              Expires: <span class="font-bold">{{ item.expiration }}</span>
            </p>
            <div
              v-if="item.label"
              class="w-32 max-w-full inline-block text-center text-white text-xs font-nunito font-semibold rounded p-1"
              :style="{
                backgroundColor:
                  item.label.type === 'coupon' ? '#007481' : '#813200'
              }"
            >
              {{ item.label.text }}
            </div>
          </div>
        </article>
      </div>
      <div v-for="i in [-1, -2]" :key="i" class="item w-full" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="postcss" scoped>
@screen md {
  .item {
    max-width: 344px;
  }
  .item-body {
    min-height: 116px;
  }
}
</style>
