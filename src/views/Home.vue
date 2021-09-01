<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloPWA msg="Hellou PWA" />
    <Footer />
  </div>
</template>

<script>
import HelloPWA from '@/components/HelloPWA.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    HelloPWA,
    Footer,
  },
}
</script>
