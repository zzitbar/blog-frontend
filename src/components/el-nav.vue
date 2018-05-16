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
                <template slot="title"><i class="el-icon-message"></i> <span v-if="!childCollapse">导航一</span></template>
                <el-menu-item-group>
                    <template slot="title">用户</template>
                    <el-menu-item index="/user/account">用户管理</el-menu-item>
                    <el-menu-item index="/user/password">修改密码</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="表单">
                    <el-menu-item index="/form">表单</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i><span v-if="!childCollapse">导航二</span></template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title"><i class="el-icon-setting"></i><span v-if="!childCollapse">导航三</span></template>
                <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                </el-submenu>
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