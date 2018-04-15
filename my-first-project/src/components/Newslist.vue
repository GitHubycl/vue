<template>
    <div class="newslist" style="text-align: center; color: #EEEEEE;line-height: 64px">
        <el-row :gutter="120" v-for="item in items" :key="item.id" type="flex" align="middle" @click.native="goto(item.desturl)">
            <el-col :span="2">
                <div class="grid-content leftimg" style="text-align: left;height: 100px;width: 100px"><img
                        :src="item.imageurl" style="height: 100px;width: 100px"/></div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content righttitle" style="text-align: left;width: 400px;line-height: 26px"><span
                        style="color: #232323">{{ item.title }}</span></div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'
    export default {
        name: 'Newslist',
        props: ['message'],
        data () {
            return {
                items: {}
            }
        },
        filters: {
            timeStyle(createTime) {
                return String(createTime).match(/.{10}/)[0];
            }
        },
        methods: {
            getData(){
                //请求数据
                console.log("getdata")
                axios.post('http://www.test.com/index.php/user/App/getNews', {
                    "type": 2,
                    "page": 1
                }).then((response) => {
                    console.log(response);
                    console.log(response.data.data);
                    this.items = response.data.data;
                }).catch((error) => {
                        console.log(error);
                });
            },
            goto(url){
                console.log("goto....")
                window.location.href = url
            }
        },
        //在挂载开始之前被调用：相关的 render 函数首次被调用
        beforeMount() {
            console.log("newslist beforeMount")
            this.getData();
        }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .el-row {
        margin-bottom: 20px;
    }
    .el-row:last-child {
        margin-bottom: 0px;
    }
</style>
