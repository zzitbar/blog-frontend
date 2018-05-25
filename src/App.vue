<template>
  <div id="app">
    <el-container>
      <el-aside :width="aside">
        <div>
          <el-row>
            <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
            <!--使用组件-->
            <elnav v-on:collapseListener="collapseListener"></elnav>
          </el-row>
        </div>
      </el-aside>
      <el-container>
        <el-header height="50px">
          <el-dropdown>
                    <span class="el-dropdown-link">
                       zzitbar<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
          <div style="margin-bottom: 20px;">
            <!--嵌套路由-->
            <router-view></router-view>
          </div>
        </el-main>
        <el-footer height="50px" style="border-top: 1px solid #e3e3e3;">Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    // 引入elmenetui的导航组件
    import elnav from "./components/el-nav.vue";
    export default {
        //加载组件
        components:{elnav},
        data () {
            return {
                isCollapse: false
            }
        },
        computed: {
            aside: function () {
                return this.isCollapse?"":"200px"
            }
        },
        methods: {
            collapseListener:function (data) {
                console.log("collapseListener", data);
                this.isCollapse=data
            }
        },
        created: function () {
            console.log(this)

        }
    }
</script>

<style>
  html, body {
    margin: 0;
    height: 100%;
  }
  p {
    margin: 0;
  }
  #app {
    font-family: Helvetica, sans-serif;
    height: 100%;
  }
  .el-container{
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-header {
    text-align: right; font-size: 12px; height: 50px!important; line-height: 50px; background: #3c8dbc;
    color: #FFF;
  }
  .el-dropdown {
    color: #FFF;
  }

  .el-aside {
    background-color: #222d32;
    color: #333;
    /*text-align: center;*/
    /*line-height: 200px;*/
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
    /*line-height: 160px;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-menu {
    border-right: none;
  }
  .aside-header{
    line-height: 50px; height: 50px; background: #3c8dbc;
    color: #FFF;
  }
  a.link-plain{
    color: #3f58ff;
    text-decoration: none;
  }
  a.link-sm{
    font-size: 12px;
  }
  a.link-plain:hover{
    color: #909eff;
  }
  .text-nowrap {
      white-space: nowrap;
  }
  .el-pagination{
    margin-top: 10px;
  }
</style>


