<template>
    <div class="myfooter" style="text-align: center; background-color: #42b983; color: #EEEEEE;line-height: 64px">
        <el-footer>{{ message }}</el-footer>
    </div>
</template>

<script>
    export default {
        name: 'Footer',
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

</style>
