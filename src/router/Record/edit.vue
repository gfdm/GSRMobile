<template>
  <gsr-layout class="gsr-record-edit">
    {{ music }}
    {{ record }}
  </gsr-layout>
</template>

<script>
  import { Message } from 'svelte-flat'

  import Layout from '../Layout'
  import { getSingleMusic, getRecord } from 'root/lib/action'

  export default {
    data () {
      return {
        music: {},
        record: []
      }
    },
    created () {
      const { version, id } = this.$route.params
      this.handlerRecord(version, id)
    },
    methods: {
      handlerRecord (version, id) {
        getSingleMusic(version, id).then((resp) => {
          const { data, msg, status } = resp.data

          if (status === 1) {
            this.music = data
            return data
          } else if (status === 0) {
            Message({ content: msg, status: 'danger' })
          } else if (status === -1) {
            this.$router.push('/')
          }
        }).then((data) => {
          const { version } = this.$route.params
          const mid = data.id
          const no = data.type === 'new' ? '1' : '2'

          return getRecord(version, mid, no).then((resp) => {
            const { data, msg, status } = resp.data

            if (status === 1) {
              console.log('record:', data)
              this.record = data
            } else if (status === 0) {
              Message({ content: msg, status: 'danger' })
            } else if (status === -1) {
              this.$router.push('/')
            }
          })
        })
      }
    },
    components: {
      GsrLayout: Layout
    }
  }
</script>