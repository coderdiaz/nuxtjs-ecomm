<template>
  <div class="flex justify-center">
    <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
      <NavBar />
      <nuxt />
      <footer-prismic/>
    </div><div hidden id="snipcart" data-api-key="{your-api-key}"></div>
    
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'
import FooterPrismic from '~/components/FooterPrismic.vue'

export default {
  components: {
    FooterPrismic,
    NavBar
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Snipcart eComm Site',
    }
  }
}
</script>
