<template>
  <main class="gsr-layout">
    <div class="gsr-layout--body">
      <slot></slot>
    </div>
    <gsr-navbar />
  </main>
</template>

<script>
  import { Navbar } from 'root/components'

  export default {
    components: {
      GsrNavbar: Navbar
    }
  }
</script>
