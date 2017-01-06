<template>
  <gsr-layout class="gsr-dashboard">
    <gsr-card v-for="item in notice">
      <header>
        <h2>{{ item.title }}</h2>
        <time>{{ item.date }}</time>
      </header>
      <section>{{ item.content }}</section>
    </gsr-card>
  </gsr-layout>
</template>

<script>
  import Layout from '../Layout'
  import { Card } from 'root/components'

  export default {
    data () {
      return {
        notice: [
          {
            title: 'Hello GSRM',
            date: '2017-01-06',
            content: '基本功能已经可以使用，相关功能正在开发m(_ _)m!'
          }
        ]
      }
    },
    components: {
      GsrCard: Card,
      GsrLayout: Layout
    }
  }
</script>
