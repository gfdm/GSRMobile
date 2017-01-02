<template>
  <gsr-layout class="gsr-record">
    <template v-for="item in version">
      <router-link :to="'record/' + item.link">
        <gsr-card>
          <h2>{{ item.title }}</h2>
          <h3>{{ item.link.toUpperCase() }}</h3>
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
