<template>
  <div class="hello">
    <p>{{msg}}</p>
    <p>---------------vuex---------------------------</p>
    <h1>{{ totalTime }}</h1>
    <h2 v-for='item in list'>{{item}}</h2>
    <button @click='add'>add</button>
    <p>--------------异步操作-------------------------</p>
    <p v-for='i in ajax'>{{i}}</p>
    <button @click='goPromise'>Promise</button>
    <p>--------------axios-------------------------</p>
    <pre>
      // axios.request(config)
      // axios.get(url[, config])
      // axios.delete(url[, config])
      // axios.head(url[, config])
      // axios.post(url[, data[, config]])
      // axios.put(url[, data[, config]])
      // axios.patch(url[, data[, config]])
    </pre>
    <p>--------------$on、$emit-------------------------</p>
    <p>{{count}}</p>
    <child v-on:addCount='addFn'></child>
    
    <child2></child2>
  </div>
</template>

<script>
import {mapState , mapActions , mapGetters} from 'vuex'
import child from './child'
import child2 from './child2'
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      ajax: [],
      count: 0
    }
  },
  computed: {
    ...mapState([
      'totalTime'
    ]),
    ...mapGetters([
      'list'
      ])
  },
  methods: {
    ...mapActions([
      'addTotalTime',
      'decTotalTime'
    ]),
    add () {
      this.addTotalTime(10)
    },
    // promise
    goPromise () {
      var that = this
      new Promise(function(resolve,reject){
        resolve('步骤一：执行')
      })
      .then(function(val){
        return new Promise(function(resolve,reject){
          that.ajax.push(val)
          resolve('步骤二：执行')
        })
      })
      .then(function(val){
        return new Promise(function(resolve,reject){
          that.ajax.push(val)
          resolve('步骤三：执行')
        })
      })
      .then(function(val){
        that.ajax.push(val)
      })
    },
    // axios
    axios () {
      // get
      axios.get('/user', {
        params: {
          ID: 12345
        }
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      // post
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
      // axios.request(config)
      // axios.get(url[, config])
      // axios.delete(url[, config])
      // axios.head(url[, config])
      // axios.post(url[, data[, config]])
      // axios.put(url[, data[, config]])
      // axios.patch(url[, data[, config]])
    },
    // $on和$emit
    addFn (num) {
      this.count += num 
    }
   
  },
  components: {
    child,
    child2
  },
  beforeRouteEnter (to, from, next) {
    next()
    // getPost(to.params.id, (err, post) => 
    //   if (err) {
    //     // display some global error message
    //     next(false)
    //   } else {
    //     next(vm => {
    //       vm.post = post
    //     })
    //   }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
