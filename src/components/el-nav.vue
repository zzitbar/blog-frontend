<template>
    <div>
        <div class="aside-header" style="">
            <p>CBlog <i :class="iconArrow" v-on:click="collapse"></i></p>
        </div>
        <!-- :default-openeds="['1', '3']"-->
        <el-menu router :default-active="this.$route.path"
                 class="el-menu-vertical-demo"
                 :collapse="childCollapse" background-color="#222d32"
                 text-color="#fff"
                 active-text-color="#ffd04b">
            <el-menu-item index="/">
                <i class="el-icon-document"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-message"></i> <span v-if="!childCollapse">文章管理</span></template>
                <el-menu-item index="/form">表单</el-menu-item>
                <el-menu-item index="/aitlcle">文章列表</el-menu-item>
                <el-menu-item index="/user/password">分类管理</el-menu-item>
                <el-menu-item index="/user/password">标签管理</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i><span v-if="!childCollapse">用户管理</span></template>
                <el-menu-item-group>
                    <template slot="title">用户</template>
                    <el-menu-item index="/user/account">用户管理</el-menu-item>
                    <el-menu-item index="/user/password">修改密码</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "el-nav",
        data () {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                childCollapse: false
            }
        },
        props: ['isCollapse'],
        computed: {
            // 计算属性的 getter
            iconArrow: function () {
                // `this` 指向 vm 实例
                return this.childCollapse?"el-icon-d-arrow-left":"el-icon-d-arrow-right"
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            collapse(event) {
                console.log(this)
                this.childCollapse = !this.childCollapse;
                this.$emit("collapseListener", this.childCollapse);
            }
        }
    }
</script>

<style scoped>

</style>