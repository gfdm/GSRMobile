<template>
  <gsr-layout>
    <template v-for="item in version">
      <router-link :to="item.link">
        <gsr-card>
          <h2>{{ item.title }}</h2>
        </gsr-card>
      </router-link>
    </template
  </gsr-layout>
</template>

<script>
  import Layout from '../Layout'
  import { Card } from 'root/components'

  import { version } from 'root/lib/config'

  export default {
    data () {
      return {
        version
      }
    },
    components: {
      GsrCard: Card,
      GsrLayout: Layout
    }
  }
</script>
