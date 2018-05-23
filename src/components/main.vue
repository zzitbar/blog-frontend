<template>
    <div>
        <div>
            <el-button @click="startHacking">Start</el-button>
        </div>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>数据统计</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>文章</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>数据统计</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
            <el-col :span="12">
                <el-card>
                    <div slot="header" class="clearfix">
                        <span>文章</span>
                        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
                    </div>
                    <div v-for="o in 4" :key="o" class="text item">
                        {{'列表内容 ' + o }}
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Main.vue",
        data() {
            return {
                msg: 'Use Element-Start Now!'
            }
        },
        methods: {
            startHacking() {
                this.$notify({
                    title: 'It works!',
                    type: 'success',
                    message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
                    duration: 5000
                })
            }
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 20px;
        &:last-child {
             margin-bottom: 0;
         }
    }
</style>