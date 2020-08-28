<template>
  <nuxt-link :to="link">
    <div class="rounded-t-lg bg-white pt-2 pb-2" v-if="product.data.image.url !== undefined">
      <ResponsiveImg :imgobject="product.data.image" :sizes="imgsize" class="crop mx-auto"/> 
    </div>
    <div class="pl-4 pr-4 pb-4 pt-4 rounded-lg">
      <h4 class="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
        {{ $prismic.asText(product.data.title) }}
      </h4>
      <div class="mt-1 text-sm text-gray-700">{{ $prismic.asText(product.data.description) }}</div>
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from "~/plugins/link-resolver.js"
import ResponsiveImg from '~/components/ResponsiveImage.vue'

export default {
  props: {
    product: {
      type: Object,
      default: null
    },
    imgsize: {
      type: String,
      default: '100vw'
    }
  },
  data: function() {
    return {
      link: '',
      formattedDate: '',
    }
  },
  name: 'product-widget',
  components:{
    ResponsiveImg
  },
  created () {
    this.link = LinkResolver(this.product),
    this.formattedDate = Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(this.product.data.date))
  },
}
</script>

<style scoped>
.crop {
  width: 240px;
  height: auto;
}
</style>
