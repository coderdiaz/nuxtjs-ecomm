<template>
  <div>
    <div class="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div v-for="product in products" :key="product.id" v-bind:product="product" class="border rounded-lg bg-gray-100 hover:shadow-lg">
        <product-widget :product="product"></product-widget>
      </div>
    </div>
  </div>
</template>

<script>
// Importing product widget
import ProductWidget from '~/components/ProductWidget.vue'
import ResponsiveImg from '~/components/ProductGallery.vue'
import ProductImg from '~/components/ProductImage.vue'

export default {
  name: 'Home',
  components: {
    ProductWidget,
    ProductGallery,
    ProductImg
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Snipcart eComm Site',
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      // Query to get blog home content
      const homepageContent = (await $prismic.api.getSingle('layout')).data

      // Query to get posts content to preview
      const productItems = await $prismic.api.query(
        $prismic.predicates.at("document.type", "product"),
        { orderings : '[my.product.date desc]' }
      )

      // Returns data to be used in template
      return {
        homepageContent,
        products: productItems.results,
        hero: homepageContent.logo.url,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
