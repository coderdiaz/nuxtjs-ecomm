<template>
  <div class="flex justify-center">
    <div class="max-w-screen-lg flex flex-col min-h-screen w-full">
      <NavBar />
      <nuxt />
      <footer-prismic/>
    </div>
    <div hidden id="snipcart" data-api-key="ZGU1MWUxMjYtY2RmYi00MGUxLWE5NTQtMWM1NzFhODhhYzhhNjM3MzQxNzE1NzE3NTg5NDg4"></div>
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
