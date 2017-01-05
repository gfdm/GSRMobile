<template>
  <gsr-layout class="gsr-record-edit">
    <!-- 难易度 -->
    <mt-cell title="难易度" is-link v-model="result.difficulty" 
      @click.native="openPicker('difficulty')"
    />
    <!-- 达成率 -->
    <mt-field label="达成率" type="number" v-model="result.rating" />
    <!-- FULL COMBO -->
    <mt-cell title="FULL COMBO">
      <mt-switch v-model="result.fc" />
    </mt-cell>
    <!-- STYLE -->
    <mt-cell v-if="cell.style" title="STYLE" is-link v-model="result.style"
      @click.native="openPicker('style')"
    />
    <!-- 备注 -->
    <mt-field label="备注" v-model="result.comment" />

    <div class="gsr-record-edit--button">
      <mt-button type="primary" size="large" @click.native="handleSubmit">
        保存
      </mt-button>
    </div>

    <!-- 难易度选择 -->
    <mt-popup v-model="popup.difficulty" position="bottom">
      <mt-picker :slots="picker.difficulty" @change="onDifficultyChange">
    </mt-popup>
    <!-- STYLE选择 -->
    <mt-popup v-model="popup.style" position="bottom">
      <mt-picker :slots="picker.style" @change="onStyleChange">
    </mt-popup>
  </gsr-layout>
</template>

<script>
  import { Message } from 'svelte-flat'
  import { Button, Cell, Field, Picker, Popup, Switch } from 'mint-ui'

  import Layout from '../Layout'
  import { getSingleMusic, getRecord } from 'root/lib/action'

  export default {
    data () {
      return {
        music: {},
        record: [],
        result: {
          difficulty: '',
          rating: '',
          fc: false,
          style: '',
          comment: ''
        },
        cell: {
          style: false
        },
        popup: {
          difficulty: false,
          style: false
        },
        picker: {
          difficulty: [{
            flex: 1,
            values: ['']
          }],
          style: [{
            flex: 1,
            values: ['NONE', 'RANDOM', 'SUPER RANDOM']
          }]
        }
      }
    },
    created () {
      const { version, id } = this.$route.params
      this.handleRecord(version, id)
    },
    methods: {
      handleRecord (version, id) {
        getSingleMusic(version, id).then((resp) => {
          const { data, msg, status } = resp.data

          if (status === 1) {
            this.handleDifficulty(data)
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
              this.record = data
            } else if (status === 0) {
              Message({ content: msg, status: 'danger' })
            } else if (status === -1) {
              this.$router.push('/')
            }
          })
        })
      },

      handleSubmit () {
        console.log(this.result)
      },

      openPicker (attr) {
        this.popup[attr] = true
      },

      handleDifficulty (record) {
        for (let key in record) {
          if (/-\w$/.test(key)) {
            this.picker.difficulty[0].values.push(`${key.toUpperCase()} - ${record[key]}`)
          }
        }
      },

      onDifficultyChange (picker, value) {
        this.cell.style = /-(G|B)\s/.test(value[0])
        this.result.difficulty = value[0].substring(0, 5)

        const difficulty = value[0].substring(0, 5).toLowerCase()
        for (let i = 0; i < this.record.length; i++) {
          const record = this.record[i]
          if (record.level === difficulty) {
            this.result.comment = record.comment
            this.result.rating = Number(record.rating.replace('%', ''))
            this.result.fc = /(FC|EXC)$/.test(record.rank)
            switch (record.style) {
              case '10': this.result.style = 'RANDOM'
                break
              case '20': this.result.style = 'SUPER RANDOM'
                break
              default: this.result.style = 'NONE'
                break
            }
            break
          } else {
            this.result.comment = ''
            this.result.rating = ''
            this.result.fc = false
            this.result.style = 'NONE'
          }
        }
      },

      onStyleChange (picker, value) {
        this.result.style = value[0]
      }
    },
    components: {
      GsrLayout: Layout,
      MtButton: Button,
      MtCell: Cell,
      MtField: Field,
      MtPicker: Picker,
      MtPopup: Popup,
      MtSwitch: Switch
    }
  }
</script>