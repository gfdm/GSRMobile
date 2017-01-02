<template>
  <gsr-layout class="gsr-record">
    123
  </gsr-layout>
</template>

<script>
  import Layout from '../Layout'
  import { Card } from 'root/components'

  export default {
    created () {
      const { version } = this.$route.params
      console.log(version)
    },
    components: {
      GsrCard: Card,
      GsrLayout: Layout
    }
  }
</script>
