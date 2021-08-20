<template>
  <div>
    <h1>Users</h1>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr />
    <p>User NO. {{ id }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["id"],
  watch: {
    $route() {
      console.log("routeが変わった");
    }
  }
};
</script>