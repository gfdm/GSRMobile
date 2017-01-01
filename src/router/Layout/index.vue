<template>
  <main class="gsr-layout">
    <slot></slot>
    <gsr-navbar />
  </main>
</template>

<script>
  import Navbar from 'root/components/navbar'

  export default {
    components: {
      GsrNavbar: Navbar
    }
  }
</script>
