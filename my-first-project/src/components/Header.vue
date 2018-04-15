<template>
    <div class="myheader" style="background-color: aquamarine">
<!--        <h1>{{ message }}</h1> -->
        <el-header style="text-align: center; background-color: #232323; color: #EEEEEE;line-height: 64px">{{ message }}
        </el-header>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        props: ['message'],
        data () {
            return {
                msg: 'This is header!'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1 {
        color: red;
    }

    div {
        background-color: aqua;
    }
</style>
