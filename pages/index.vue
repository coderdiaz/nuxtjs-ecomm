<template>
  <div>
    <div class="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
      <div v-for="product in products" :key="product.id" v-bind:product="product" class="border rounded-lg bg-gray-100 hover:shadow-lg">
        <product-widget :product="product" :imgsize="'(min-width: 768px) 240px, 50vw'"></product-widget>
      </div>
    </div>
<!-- Old styling
  <section class="home">
    <article>
      <div class="hero" :style="{ backgroundImage: 'url(' + hero + ')' }" ></div>
      <h1 class="blog-title">
        {{ $prismic.asText(homepageContent.title) }}
      </h1>
      <div v-if="products.length !== 0" class="blog-main">
        <section v-for="product in products" :key="product.id" v-bind:product="product" class="blog-post">
          <product-widget :product="product" :imgsize="'(min-width: 768px) 700px, 90vw'"></product-widget>
        </section>
      </div>
      <div v-else class="blog-main">
        <p>No Products available at this time.</p>
      </div>
    </article>
  </section> -->
  </div>
</template>

<script>
// Importing product widget
import ProductWidget from '~/components/ProductWidget.vue'
import ResponsiveImg from '~/components/ResponsiveImage.vue'

export default {
  name: 'Home',
  components: {
    ProductWidget,
    ResponsiveImg
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
        hero: homepageContent.hero.url,
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
