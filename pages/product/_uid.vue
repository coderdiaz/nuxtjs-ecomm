<template>
  <div class="flex justify-center m-6">
    <div v-if="this.document !== null">
      <div class="flex flex-col items-center border rounded-lg bg-blue-100">
        <ProductImg :imgobject="document.image" />
      </div>
      <div class="w-full p-5 flex flex-col justify-between">
        <div>
          <h4 class="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
            {{ $prismic.asText(document.title) }}
          </h4>
          <div class="mt-2 text-gray-600">
            {{ $prismic.asText(document.description) }}
          </div>
          <button
            class="snipcart-add-item mt-4 bg-white border border-gray-200 d hover:shadow-lg text-gray-700 font-semibold py-2 px-4 rounded shadow"
            :data-item-name="$prismic.asText(document.title)"
            :data-item-price="document.price"
            :data-item-id="document"
            :data-item-url="$route.Path"
            :data-item-description="$prismic.asText(document.description)"
            :data-item-image="document.image.url"
            :data-item-snipcartDescription="document.snipcartDescription"
            :data-item-snipcartWeight="document.snipcartWeight"
            :data-item-snipcartMaxQuantity="document.snipcartMaxQuantity">
            ${{ document.price }}.00
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ResponsiveImg from '~/components/ResponsiveImage.vue'

export default {
  name: 'product',
  data() {
    return {
      product: null,
      storeUrl: process.env.storeUrl
    }
  },
  components: {
    ResponsiveImg
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Snipcart eComm Site'
    }
  },
  async asyncData({ $prismic, params, error }) {
    try{
      // Query to get post content
      const product = (await $prismic.api.getByUID('product', params.uid)).data

      // Returns data to be used in template
      return {
        document: product,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  }
}
</script>

<style scoped>
.snipcart-add-item {
  border: none;
  color: #000;
  background-color: #fff;
  border: 2px solid #000;
  padding: 1em;
  font-size: 1.2em;
  margin-right: 1em;
  outline: none;
}
.snipcart-add-item:active {
  background-color: #000;
  color: #fff;
}
</style>
