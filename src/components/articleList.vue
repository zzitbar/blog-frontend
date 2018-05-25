<template>
    <el-card>
        <div slot="header" class="clearfix">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{path:'/article'}">文章列表</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-table
                v-loading="loading"
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    type="index"
                    width="50">
            </el-table-column>
            <el-table-column
                    width="60"
                    prop="id"
                    label="ID">
            </el-table-column>
            <el-table-column
                    label="标题">
                <template slot-scope="scope">
                    <a :href="articleUrl+scope.row.id" class="link-plain" target="_blank">{{ scope.row.articleTitle }}</a>
                </template>
            </el-table-column>
            <el-table-column
                    prop="articleCategoryName"
                    label="分类">
            </el-table-column>
            <el-table-column
                    prop="articleTags"
                    label="标签">
            </el-table-column>
            <el-table-column
                    width="80"
                    prop="articleCommentCount"
                    label="回复数">
            </el-table-column>
            <el-table-column
                    width="80"
                    prop="articleViewCount"
                    label="阅读数">
            </el-table-column>
            <el-table-column
                    prop="articleCreateDate"
                    label="创建时间">
            </el-table-column>
            <el-table-column label="操作" class-name="text-nowrap">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-row type="flex" class="row-bg" justify="end">
            <el-col :span="24">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30, 40]"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </el-col>
        </el-row>
    </el-card>
</template>
<script>
    // import axios from 'axios'
    import {aiticleList, stringify, aiticleDelete} from '../api/api';
    export default {
        name: "article-list",
        data() {
            return {
                loading: false,
                currentPage: 1,
                articleUrl : "http://localhost:8080/article/",
                getTopicListUrl: 'http://localhost:8080/admin/article/page',
                tableData: [],
                total:0,
                pageSize:10
            }
        },
        methods: {
            handleEdit(index, row) {
                this.$router.push('/aitlcleEdit/'+row.id)  //将你的跳转写在这里。
            },
            handleDelete(index, row) {
                this.loading = true;
                aiticleDelete(row.id).then(res =>{
                    this.loading = false;
                    this.getTopic();
                });
            },
            handleSizeChange(val) {
                this.pageSize = val;
                this.getTopic();
            },
            handleCurrentChange(val) {
                this.currentPage = val;
                this.getTopic();
            },
            getTopic: function () {
                this.loading = true;
                var that = this;
                var params = { rows: this.pageSize, page: this.currentPage };
                aiticleList(stringify(params)).then(res =>{
                    this.loading = false;
                    that.tableData = res.data.rows;
                    that.total = res.data.total;
                    that.currentPage = res.data.currentPage;
                    that.pageSize = res.data.pageSize;
                });
                // axios.post(that.getTopicListUrl + "?accesstoken=33771e44-2688-4e8c-b5a1-822026574be5").then(res => {
                //     console.log(res);
                //     that.tableData = res.data.rows;
                //     that.total = res.data.total;
                //     that.currentPage = res.data.currentPage;
                //     that.pageSize = res.data.pageSize;
                // })
            }
        },
        created: function () {
            this.getTopic();
        }
    }
</script>

<style scoped>

</style>