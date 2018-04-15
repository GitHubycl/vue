<template>
  <div id="app" style="height: 100%;position: relative">
    <myheader message="this is a header"></myheader>
    <myaside></myaside>
    <myfooter message="this is a footer" ></myfooter>
  </div>

</template>

<script>
    import myheader from "./components/Header";
    import myfooter from "./components/Footer.vue";
    import myaside  from "./components/Aside.vue";
export default {
    components: {myheader,myfooter,myaside},
    name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
