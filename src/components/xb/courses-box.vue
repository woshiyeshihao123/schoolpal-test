<template>
    <div class="courses-box">
        <el-container>
            <el-header height="163.3px">Header</el-header>
            <el-main>main</el-main>
            <el-footer height="62.7px">Footer</el-footer>
        </el-container>
    </div>
</template>

<style lang="scss" scoped>
    .courses-box{
        position: relative;
        bottom: 0;
        height: 280px;
        border: 1px solid #ddd;
        margin-left: 19.2px;
        transition: all 0.5s;
    }

    .courses-box:hover{
        position: relative;
        bottom: 5px;
        box-shadow: #333 -2px 4px 20px;
    }

    .courses-box .el-header{
        width: 309.3px;
    }

    .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }

</style>
