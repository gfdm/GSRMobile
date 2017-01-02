<template>
  <gsr-layout>
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
            date: '2017-01-02',
            content: 'hello world!'
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
