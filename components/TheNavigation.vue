<template>
  <div class="overflow-x-auto">
    <nav class="flex" :class="{ 'flex-col': vertical }">
      <NLink
        v-for="item in items"
        v-slot="{ href, isExactActive, navigate }"
        :key="item.text"
        :to="item.link"
        class="group relative mx-4 py-2 flex-none"
      >
        <a
          :href="href"
          class="text-inactive hover:text-normal"
          @click="navigate"
        >
          <div class="flex items-center">
            <img :src="item.icon" alt="Icon" class="w-4 h-4 mr-3" />
            <span
              class="font-bold text-sm"
              :class="{ 'text-normal': isExactActive }"
              >{{ item.text }}</span
            >
          </div>
          <div class="absolute inset-x-0 bottom-0">
            <div
              class="group-hover:opacity-100 group-hover:w-full transition-all duration-200 h-1 bg-normal rounded m-auto"
              :class="{ 'w-0 opacity-0 ': !isExactActive }"
            />
          </div>
        </a>
      </NLink>
    </nav>
  </div>
</template>

<script>
export default {
  props: {
    vertical: Boolean
  },
  data() {
    return {
      items: getItems()
    }
  }
}

function getItems() {
  const base = '/images/topbar/navigation/'
  return [
    {
      icon: base + 'home.svg',
      text: 'Home',
      link: '/'
    },
    {
      icon: base + 'tags.svg',
      text: 'Promotions',
      link: '/promotions'
    },
    {
      icon: base + 'address-book.svg',
      text: 'Activations',
      link: '/activations'
    },
    {
      icon: base + 'award.svg',
      text: 'Clubs',
      link: '/clubs'
    },
    {
      icon: base + 'location.svg',
      text: 'Locations',
      link: '/locations'
    },
    {
      icon: base + 'calendar-check.svg',
      text: 'Events',
      link: '/events'
    },
    {
      icon: base + 'pay.svg',
      text: 'Pay',
      link: '/pay'
    }
  ]
}
</script>

<style scoped>
.overflow-x-auto::-webkit-scrollbar {
  display: none;
}
</style>
