<template>
  <div class="flex justify-between ml-6 mr-6 mt-4">
    <nuxt-link to="/">
      {{ $prismic.asText(headerData.data.title) }}
      <img :src="headerData.data.hero.url" width="100" />
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
    data: function() {
    return {
      headerData: {}
    };
    },
    async fetch() {
    this.headerData = await this.$prismic.api.getSingle('layout')
  },
}
</script>

<style>
</style>
