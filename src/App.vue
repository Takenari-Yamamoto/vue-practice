<template>
  <div>
    <nav>
      <router-link to="/users" active-class="link-active" class="link" exact>Users</router-link>
      <router-link to="/" active-class="link-active" class="link" exact>Home</router-link>
    </nav>
    <Home></Home>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./pages/Home";
export default {
  components: {
    Home
  }
};
</script>

<style scoped>
.link {
  margin-right: 10px;
}

.link-active {
  font-size: 20px;
}
</style>