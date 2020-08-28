<template>
  <ix-img
    :src="imageSrc()"
    width="380"
    height="380"
    :alt="imgobject.alt"
    loading="lazy"
    fixed
  />
  <!-- imgixParams="{ fit: 'fill', fill: 'solid', fill-color: 'white'}" -->
</template>

<script>
import VueImgix from '~/plugins/vue-imgix.js'

export default {
  props: {
    imgobject: {
      type: Object,
      default: null
    }
  },
  name: 'ProductImg',
  methods: {
    imageSrc() {
      return (new URL(this.imgobject.url)).pathname
    }
  }
}
</script>
