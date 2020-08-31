<template>
  <ix-img
    :src="imageSrc()"
    width="380"
    height="380"
    :imgixParams="{fit:'fill', fill:'solid', fillcolor:'f7fafc', auto:'format'}"
    :alt="imgobject.alt"
    loading="lazy"
    fixed
    
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
    imgixParams: {
      type: String,
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
