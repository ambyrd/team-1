<template>
  <div class="hello">
    <b-jumbotron header="GDrive"
                 lead="A micro file management app" >
     <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Email address:</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password:</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <router-link to="/upload"><button name="btn1"href="#">Go!</button></router-link>
      </form>
        
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
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

.form-group{
  width: 45%;
}

a {
  color: #42b983;
}
</style>
