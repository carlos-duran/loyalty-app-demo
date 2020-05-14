<template>
  <div class="flex items-center w-full max-w-lg mb-4">
    <input
      v-model="query"
      placeholder="Search by title"
      class="min-w-0 flex-1 border-2 rounded-full h-10 px-4 text-sm italic mr-4 focus:outline-none"
      @keyup.enter="$emit('search', query)"
    />
    <a class="flex-none flex items-center cursor-pointer">
      <span class="mr-2 font-nunito font-semibold text-inactive">Filter</span>
      <img src="/images/promotions/filters.svg" alt="Filter" />
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  }
}
</script>

<style scoped>
input {
  border-color: #e7e7e7;
}
</style>
