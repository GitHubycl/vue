<template>
    <div class="myaside" style="text-align: center; background-color: #ffffff;line-height: 64px">
        <el-container>
            <el-aside  style="background-color: #545c64;">
                <!--开启路由，有item index对应路由path -->
                <el-menu
                        router="true"
                        unique-opened
                        default-active="/"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        @select="selectMenu"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        style="border: 1px solid #545c64;min-height: 850px">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-location"></i>
                            <span>导航一</span>
                        </template>
                        <el-menu-item index="/"><!--  / 对应的路由path-->
                            <span>Go to Newslist</span>
                        </el-menu-item>
                        <el-menu-item index="1-2">
                            <span>Bar</span>
                        </el-menu-item>
                        <el-menu-item index="1-3">选项3</el-menu-item>
                        <el-menu-item index="1-4">选项4</el-menu-item>
                    </el-submenu>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-menu"></i>
                            <span>导航二</span>
                        </template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-document"></i>
                            <span>导航三</span>
                        </template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-setting"></i>
                            <span>导航四</span>
                        </template>
                        <el-menu-item index="4-1">选项1</el-menu-item>
                        <el-menu-item index="4-2">选项2</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-container>
                <el-main>
                    <router-view ></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'Aside',
        data () {
            return {
                msg: 'This is aside!'
            }
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, 'open'+keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key,'close'+ keyPath);
            },
            selectMenu(index, indexPath){
                console.log(index,'selectMenu'+ indexPath);
            },
            greet: function (event) {
                router.push({ path: '/bar' });
            },
            dopost:function () {
                // 发送 POST 请求
                axios({
                    method: 'post',
                    url: '../../user/App/getNews',
                    data: {
                        "type":2,
                        "page":1
                    }
                }).then(function (response) {
                    console.log(response.valueOf().data.data.length);

                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    span {
        height: 50px;
        line-height: 50px;
    }

</style>
