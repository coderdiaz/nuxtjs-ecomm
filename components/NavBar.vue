<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      <p>{{ $prismic.asText(headerData.data.title) }}</p>
    </nuxt-link>

    <button class="snipcart-checkout flex items-center">
        <Cart />
        <span class="snipcart-total-price ml-3 font-semibold text-sm text-indigo-500"></span>
    </button>
  </div>
</template>
<script>
import Cart from "./icons/cart.vue"
export default {
    name:'NavBar',
    components: {
        Cart
    },
    async fetch() {
    this.headerData = await this.$prismic.api.getSingle('layout')
  },
    /*async asyncData({ $prismic, error }) {
    try{
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle('layout')).data
      // Returns data to be used in template
      return {
        homepageContent,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }*/
}
</script>

<style>
</style>
