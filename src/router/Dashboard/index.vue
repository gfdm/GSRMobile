<template>
  <gsr-layout>
    <gsr-card>
      hello world
    </gsr-card>
  </gsr-layout>
</template>

<script>
  import Layout from '../Layout'
  import { Card } from 'root/components'

  export default {
    components: {
      GsrCard: Card,
      GsrLayout: Layout
    }
  }
</script>
