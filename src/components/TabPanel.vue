<template>
  <div class="gsr-panel">
    <header class="gsr-panel--header">
      <ul>
        <li 
          :class="{ active: tab.name === 'dm' }"
          @click="handleSwitch('dm')"
        >
          DM
        </li>
        <li 
          :class="{ active: tab.name === 'gf' }"
          @click="handleSwitch('gf')"
        >
          GF
        </li>
      </ul>
    </header>

    <div class="gsr-panel--body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['tab'],
    methods: {
      handleSwitch (gd) {
        this.tab.name = gd
      }
    }
  }
</script>

<style>
  .gsr-panel {
    height: 100%;
    overflow: hidden;
    & .gsr-panel--header {
      background: #FFF;
      & ul {
        display: flex;
        & li {
          height: 3rem;
          line-height: 3rem;
          flex: 1;
          text-align: center;
          &.active {
            background: #F6F8FB;
          }
        }
      }
    }
    & .gsr-panel--body {
      max-height: calc(100% - 3rem);
      flex: 1;
      overflow: auto;
    }
  }
</style>