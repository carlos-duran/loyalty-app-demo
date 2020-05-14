<template>
  <div
    class="relative flex items-center cursor-pointer"
    @click="showSignal = !showSignal"
  >
    <img
      src="/images/topbar/coupons/coupons-icon.svg"
      alt="Coupons"
      class="w-8 h-6"
    />
    <div
      v-if="showSignal"
      class="signal w-3 h-3 border-2 border-black absolute rounded-full"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSignal: true
    }
  }
}
</script>

<style scoped>
.signal {
  background-color: #00d97e;
  top: 12px;
  left: 20px;
}
</style>
