<template>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="container">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <router-link class="nav-link" to="/">Calandar</router-link>
          
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Meetings">Meetings</router-link>
        
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Teams">Teams</router-link>
          
        </li>
      </ul>
    </div>
    
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  float: right;
}
</style>
