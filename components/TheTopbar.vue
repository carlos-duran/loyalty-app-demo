<template>
  <div class="flex items-center py-2 md:mt-3 md:mb-1">
    <TheTopbarLogo class="flex-none" />
    <TheNavigation class="hidden md:block mr-6" />
    <div class="flex flex-none ml-auto md:px-6">
      <TheTopbarCoupons class="flex-none mr-6" />
      <TheTopbarUser class="flex-none" />
    </div>
  </div>
</template>

<script>
import TheNavigation from './TheNavigation'
import TheTopbarLogo from './TheTopbarLogo'
import TheTopbarCoupons from './TheTopbarCoupons'
import TheTopbarUser from './TheTopbarUser'

export default {
  components: {
    TheNavigation,
    TheTopbarLogo,
    TheTopbarCoupons,
    TheTopbarUser
  }
}
</script>
