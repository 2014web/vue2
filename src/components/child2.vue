<template>
    <button @click='bus'>bus</button>
  </div>
</template>
<script>
import bus from '../assets/bus'

  export default {
    name: 'child',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      bus () {
        bus.$emit('busCont',5)
      }
    }
  }
</script>

<style scope>
  
</style>