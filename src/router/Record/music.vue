<template>
  <gsr-layout class="gsr-record-music">
    <!--<gsr-search />-->

    <div v-for="(version, index) in music.versionGroup">
      <h3>{{ version }}</h3>
      <router-link 
        v-for="item in music.dataSource[index === 0 ? 'new' : 'old']"
        :to="$route.fullPath + '/' + item._id"
      >
        <gsr-card>
          {{ item.title }}
        </gsr-card>
      </router-link>
    </div>
  </gsr-layout>
</template>
<script>
  import { Message } from 'svelte-flat'

  import Layout from '../Layout'
  import { Card, Search } from 'root/components'
  import { getMusic } from 'root/lib/action'

  export default {
    data () {
      return {
        music: {}
      }
    },
    created () {
      const { version } = this.$route.params

      getMusic(version).then((resp) => {
        const { data, msg, status } = resp.data

        if (status === 1) {
          console.log(data)
          this.music = data
        } else if (status === 0) {
          Message({ content: msg, status: 'danger' })
        } else if (status === -1) {
          this.$router.push('/')
        }
      })
    },
    components: {
      GsrCard: Card,
      GsrLayout: Layout,
      GsrSearch: Search
    }
  }
</script>
