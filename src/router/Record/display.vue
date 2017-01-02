<template>
  <gsr-layout class="gsr-record">
    <gsr-tab-panel :tab="tab">
      <section slot="dm">
        {{ result.title }}<br />
        {{ result.versionGroup }}<br />
        {{ result.colmuns }}<br />
        {{ result.dataSource.new }}<br />
        {{ result.dataSource.old }}
      </section>
      <section slot="gf">
        {{ result }}
      </section>
    </gsr-tab-panel>
  </gsr-layout>
</template>

<script>
  import { Message } from 'svelte-flat'

  import Layout from '../Layout'
  import { Card, TabPanel } from 'root/components'
  import { getResult } from 'root/lib/action'

  export default {
    data () {
      return {
        tab: { name: 'dm' },
        result: {}
      }
    },
    created () {
      const { version } = this.$route.params
      const { name } = this.tab
      this.handlerResult(version, name)
    },
    watch: {
      tab: {
        handler (value) {
          const { version } = this.$route.params
          this.handlerResult(version, value.name)
        },
        deep: true
      }
    },
    methods: {
      handlerResult (version, gd) {
        gd = gd === 'dm' ? 1 : 2

        getResult(version, gd).then((resp) => {
          const { data, msg, status } = resp.data
          if (status === 0) {
            Message({ content: msg, status: 'danger' })
          } else {
            console.log(data)
            this.result = data
          }
        })
      }
    },
    components: {
      GsrCard: Card,
      GsrLayout: Layout,
      GsrTabPanel: TabPanel
    }
  }
</script>
