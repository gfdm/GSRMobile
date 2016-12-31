<template>
  <main class="gsr-home">
    <section class="gsr-home--login">
      <h1>GITADORA SKILL RECORDER</h1>
      <div class="gsr-home--input">
        <div>
          <i class="fa fa-user text-gradient" aria-hidden="true"></i>
          <input type="text" v-model="user.username" />
        </div>
        <div>
          <i class="fa fa-key text-gradient" aria-hidden="true"></i>
          <input type="password" v-model="user.password" />
        </div>
      </div>
      <div class="gsr-home--button">
        <button @click="handleLogin">
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
        APP_VERSION,
        user: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      handleLogin () {
        console.log(this.user)
        this.$router.push('/dashboard')
      }
    }
  }
</script>