<template>
  <gsr-layout class="gsr-record-music">
    <gsr-search v-model="searchText" />

    <scroller class="gsr-record-music-scroller" :height="height">
      <div v-for="(version, index) in list.versionGroup">
        <h3>{{ version }}</h3>
        <router-link 
          v-for="item in list.dataSource[index === 0 ? 'new' : 'old']"
          :to="$route.fullPath + '/' + item._id"
        >
          <gsr-card>
            {{ item.title }}
          </gsr-card>
        </router-link>
      </div>
    </scroller>
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
        searchText: '',
        height: '',
        music: {},
        list: {}
      }
    },
    watch: {
      searchText () {
        const list = JSON.parse(JSON.stringify(this.music))

        if (this.searchText) {
          for (let key in list.dataSource) {
            list.dataSource[key] = list.dataSource[key].filter((item) => {
              return ~item.title.toLowerCase().indexOf(this.searchText.toLowerCase())
            })
          }
        }

        this.list = list
      }
    },
    created () {
      const { version } = this.$route.params

      getMusic(version).then((resp) => {
        const { data, msg, status } = resp.data

        if (status === 1) {
          this.music = data
          this.list = data
        } else if (status === 0) {
          Message({ content: msg, status: 'danger' })
        } else if (status === -1) {
          this.$router.push('/')
        }
      })

      this.height = (document.body.clientHeight - 110).toString()
    },
    components: {
      GsrCard: Card,
      GsrLayout: Layout,
      GsrSearch: Search
    }
  }
</script>
