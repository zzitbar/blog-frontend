<template>
    <div>
        <el-card>
            <div slot="header" class="clearfix">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{path:'/articleCategory'}">分类管理</el-breadcrumb-item>
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
                        prop="categoryName"
                        label="分类名">
                </el-table-column>
                <el-table-column
                        prop="createTime"
                        label="创建时间">
                </el-table-column>
                <el-table-column
                        width="80"
                        prop="articleCount"
                        label="文章数">
                </el-table-column>
                <el-table-column label="操作" class-name="text-nowrap">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <!--<el-button-->
                                <!--size="mini"-->
                                <!--type="danger"-->
                                <!--@click="handleDelete(scope.$index, scope.row)">删除</el-button>-->
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

        <el-dialog title="编辑分类" :visible.sync="dialogFormVisible" v-loading="editLoading">
            <el-form :model="form">
                <el-input v-model="form.id" type="hidden"></el-input>
                <el-form-item label="分类名" :label-width="formLabelWidth">
                    <el-input v-model="form.categoryName" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="onSubmit">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>
    // import axios from 'axios'
    import {aiticleCategoryPage, stringify, aiticleCategorySave, aiticleDelete} from '../api/api';
    import {showSuccess, showError, showNetError} from '../static/js/base.js'
    export default {
        name: "articleCategory-list",
        data() {
            return {
                form: {
                    id: '',
                    categoryName: ''
                },
                dialogFormVisible: false,
                loading: false,
                currentPage: 1,
                tableData: [],
                total:0,
                pageSize:10,
                formLabelWidth: '120px',
                editLoading: false
            }
        },
        methods: {
            onSubmit() {
                this.editLoading = true;
                aiticleCategorySave(stringify(this.form)).then(res =>{
                    this.editLoading = false;
                    if (res.data.status=='success') {
                        showSuccess("保存成功");
                        this.getTopic();
                        this.dialogFormVisible = false;
                    } else {
                        showNetError(res)
                    }
                }).catch(function (error) {
                    showNetError(error)
                })
            },
            handleEdit(index, row) {
                this.form.categoryName = row.categoryName;
                this.form.id = row.id;
                this.dialogFormVisible = true;
            },
            handleDelete(index, row) {
                this.loading = true;
                aiticleDelete(row.id).then(res =>{
                    this.loading = false;
                    this.getTopic();
                    this.dialogFormVisible = false;
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
                aiticleCategoryPage(stringify(params)).then(res =>{
                    this.loading = false;
                    that.tableData = res.data.rows;
                    that.total = res.data.total;
                    that.currentPage = res.data.currentPage;
                    that.pageSize = res.data.pageSize;
                });
            }
        },
        created: function () {
            this.getTopic();
        }
    }
</script>

<style scoped>

</style>