<template>
  <div>
    Users page
    <ul>
      <li>
        <NuxtLink to="/users">Users</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users/20">User Detail</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/users/20/settings">User Settings</NuxtLink>
      </li>
    </ul>
    <hr />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  layout(context) {
    return context.isMobile ? "mobile" : "red";
  },
  middleware: "logined"
};
</script>

<style>
</style>
