<template>
    <el-card shadow="never">
        <el-form ref="form" :model="form" :loading="loading"
                 label-width="80px" label-position="top">
            <el-form-item label="内容">
                <div class="editormd" id="editormd">
                    <textarea class="editormd-markdown-textarea" name="test-editormd-markdown-doc"></textarea>
                    <!-- 第二个隐藏文本域，用来构造生成的HTML代码，方便表单POST提交，这里的name可以任意取，后台接受时以这个name键为准 -->
                    <textarea class="editormd-html-textarea" name="text"></textarea>
                </div>
                <!--<el-input type="textarea" v-model="form.articleContent"></el-input>-->
            </el-form-item>
        </el-form>
    </el-card>

</template>

<script>
    // let $ = require('../static/js/jquery-2.2.3.min.js');
    import $scriptjs from 'scriptjs'
    export default {
        name: "thirdparty-js",
        data() {
            return {
                form: {
                    articleTitle: '',
                    articleAbstract: '',
                    articleContent: '',
                    articleCategoryId: '',
                    articleTags: '',
                    articleCreateDate: ''
                },
                loading: false,
                articleTagsOptions: [],
                articleTagsOptionsBackup: [],
                articleCategoryOptions: []
            }
        },
        mounted:function(){
        },
        created() {
            $scriptjs('src/static/js/jquery-2.2.3.min.js', function () {
                $scriptjs('src/static/js/plugins/editormd/js/editormd.js', function () {
                    var editor = window.editormd("editormd", {
                        width   : "100%",
                        height  : 640,
                        syncScrolling : "single",
                        path: "src/static/js/plugins/editormd/js/lib/",
                        saveHTMLToTextarea : true,
                        /**上传图片相关配置如下*/
                        imageUpload : true,
                        imageFormats : ["jpg", "jpeg", "gif", "png", "bmp", "webp"],
                        imageUploadURL : "/file/upload",//注意你后端的上传图片服务地址
                        onload : function() {
                            // this.setMarkdown("### onloaded");
                            // console.log("onload =>", this, this.id, this.settings);
                        }
                    });
                })
            })
        }
    }
</script>

<style scoped>
    @import '../static/js/plugins/editormd/css/editormd.css';
</style>