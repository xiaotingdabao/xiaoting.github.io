<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  data() {
    return {
      test: "hhh"
    };
  },
  name: "app",
  components: {}
};
</script>