<template>
  <gsr-layout class="gsr-record-display">
    <gsr-tab-panel :tab="tab">
      <gsr-card>
        <section class="gsr-record-skill">
          <span>{{ result.skill.username }}</span>
          <span>{{ result.skill.skill }}</span>
          <span>{{ result.skill.old }}</span>
          <span>{{ result.skill.new }}</span>
        </section>
      </gsr-card>
      
      <div class="gsr-record-list" v-for="(version, index) in result.versionGroup">
        <h3 :id="version">{{ version }}</h3>
        <div>
          <gsr-card v-for="item in result.dataSource[index === 0 ? 'new' : 'old']">
            <section class="gsr-record-single" :class="item.class">
              <template 
                v-for="columns in result.columns" 
                v-if="!~['update', 'comment'].indexOf(columns.dataIndex)"
              >
                <div :class="columns.dataIndex">
                  {{ item[columns.dataIndex] || '-' }}
                </div>
              </template>
            </section>
          </gsr-card>
        </div>
      </div>
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
        result: { dataSource: {}, skill: {} }
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
