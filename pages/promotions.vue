<template>
  <div>
    <SearchControls class="mb-4" @search="search" />
    <SearchResults v-if="items" :items="items" />
  </div>
</template>

<script>
import SearchControls from '~/components/promotions/SearchControls'
import SearchResults from '~/components/promotions/SearchResults'

export default {
  components: {
    SearchControls,
    SearchResults
  },
  async asyncData() {
    return {
      items: await getItemsMock()
    }
  },
  data() {
    return {
      loading: false,
      items: null
    }
  },
  methods: {
    async search(query) {
      this.loading = true
      try {
        this.items = await getItemsMock(query)
      } catch (error) {
        // Show error alert
      }
      this.loading = false
    }
  }
}

function getItemsMock(query) {
  const base = '/images/promotions/mock/'
  const items = [
    {
      id: 1,
      image: base + 'pio-hops.png',
      title: '15% off in PioHops',
      shop: 'Juice Shop',
      expiration: '11/21/2020'
    },
    {
      id: 2,
      image: base + 'drinks.png',
      title: '85% off in drinks',
      shop: 'Drink Shop',
      expiration: '11/21/2020',
      label: {
        type: 'coupon',
        text: 'Coupon'
      }
    },
    {
      id: 3,
      image: base + 'juices.png',
      title: '35% off in juices',
      shop: 'Juice Shop',
      expiration: '11/21/2020',
      label: {
        type: 'points',
        text: '250 Points'
      }
    },
    {
      id: 4,
      image: base + 'smoothie.png',
      title: 'Free Smoothie',
      shop: 'Juice Shop',
      expiration: '11/21/2020'
    },
    {
      id: 5,
      image: base + 'soda.png',
      title: 'Free Cold Soda',
      shop: 'Drink Shop',
      expiration: '11/21/2020',
      label: {
        type: 'coupon',
        text: 'Coupon'
      }
    }
  ]
  const results = query
    ? items.filter((item) => item.title.search(new RegExp(query, 'i')) > -1)
    : items

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(results)
    }, 200)
  })
}
</script>
