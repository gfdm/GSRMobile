<template>
  <main class="gsr-home">
    <section class="gsr-home--login">
      <h1>GITADORA SKILL RECORDER</h1>
      <div class="gsr-home--input">
        <div>
          <i class="fa fa-user text-gradient" aria-hidden="true"></i>
          <input type="text" />
        </div>
        <div>
          <i class="fa fa-key text-gradient" aria-hidden="true"></i>
          <input type="password" />
        </div>
      </div>
      <div class="gsr-home--button">
        <button>
          <span class="text-gradient">LOGIN</span>
        </button>
      </div>
    </section>

    <footer class="gsr-home--info">
      Powered by Vue.js. Version: {{ APP_VERSION }}
    </footer>
  </main>
</template>

<script>
  import { APP_VERSION } from 'root/lib/config'

  export default {
    data () {
      return {
        APP_VERSION
      }
    },
    components: {
    },
    methods: {
    }
  }
</script>