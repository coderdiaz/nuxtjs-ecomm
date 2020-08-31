<template>
  <ix-img
    :src="imageSrc()"
    :sizes="sizes"
    :imgixParams="{auto: 'format'}"
    :alt="imgobject.alt"
  />
</template>

<script>
import VueImgix from '~/plugins/vue-imgix.js'

export default {
  props: {
    imgobject: {
      type: Object,
      default: null
    },
    sizes: {
      type: String,
      default: null
    }
  },
  name: 'ResponsiveImg',
  methods: {
    imageSrc() {
      return (new URL(this.imgobject.url)).pathname
    }
  }
}
</script>
