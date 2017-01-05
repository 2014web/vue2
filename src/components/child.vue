<template>
  <div>
    <button @click='add'>add</button>
    
    <p>-----------------------bus-----------------------</p>
    <p>{{bus}}</p>
  </div>
</template>
<script>
import bus from '../assets/bus'
  export default {
    name: 'child',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        bus: 0
      }
    },
    methods: {
      add () {
        this.$emit('addCount',1)
      },
      busFn (num) {
        this.bus += num
      }
    },
    created () {
      bus.$on('busCont',this.busFn)
    }
  }
</script>

<style scope>
  
</style>