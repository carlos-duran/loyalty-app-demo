<template>
  <svg
    class="fill-current"
    :width="width"
    :height="height"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
  >
    <path :d="icons[name]" />
  </svg>
</template>

<script>
import mdi from './icons'

const icons = Object.keys(mdi).reduce((all, key) => {
  const name = camelToKebab(key).slice(4)
  all[name] = mdi[key]
  return all
}, {})

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: Number,
      default: 24
    },
    height: {
      type: Number,
      default: 24
    }
  },
  data() {
    return {
      icons
    }
  }
}

function camelToKebab(string) {
  return string.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()
}
</script>
