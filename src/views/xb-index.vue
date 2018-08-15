<template>
    <div>
    <div id="caro-box">
        <el-carousel id="index-carousel" height="460px">
            <el-carousel-item class="carouselitem" v-for="(item,index) in imgsrc" :key="index" name="index" :style="{'background-image':'url('+item+')'}">
            </el-carousel-item>
        </el-carousel>
    </div>
        <el-menu
        id="el-menu-1"
        :default-active= 'asd'
        class="container"
        mode="horizontal"
        background-color="#fff"
        text-color="#666"
        active-text-color="red"
        router>
            <el-menu-item router index="/">推荐课程</el-menu-item>
            <el-menu-item  index="/allcourses" @click="change">全部课程</el-menu-item>
        </el-menu>
        <div class="clear"></div>
        <div>
            <el-container id="index-list" class="container">
                <coursebox id="nomargin"></coursebox>
                <coursebox></coursebox>
                <coursebox></coursebox>
                <coursebox></coursebox>
            </el-container>
        </div>
        <el-container id="float-box">
          <el-aside width="226px" v-show="codepic">
              <img src="https://cdn.xueyuan.xiaobao100.com/shield/image/pc/wxerweima.png" alt="" class="fixed-modal" style="">
          </el-aside>
          <el-container>
            <el-header height="60px">Header</el-header>
            <el-footer height="60px"><div @click="show">Footer</div></el-footer>
          </el-container>
        </el-container>
        <div v-show="codepic" class="fixed-overlay" @click="show"></div>

    </div>
</template>

<script>
import coursebox from '@/components/xb/courses-box'
export default {
  computed: { // here ↓
    asd () {
      return this.$store.getters.getTabpage
    }
  },
  components: {
    coursebox
  },
  data () {
    return {
      imgsrc: ['https://cdn.xueyuan.xiaobao100.com/course/d0505070-6245-11e8-83bd-35d038aa443e.png', 'https://cdn.xueyuan.xiaobao100.com/course/24878770-5ce8-11e8-85da-6d25be2e07b6.jpg'],
      codepic: false,
      list: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    change () {
      this.$store.dispatch('setTabpage', '/allcourses')
    },
    show: function () {
      this.codepic = !this.codepic
    },
    getData () {
      this.$api.get('topics', null, r => {
        console.log(r)
        this.list = r.data
      })
    }
  }
}
</script>

<style lang="scss">
    #index-carousel{
        min-width:1303px;
        height: 460px;
    }
    #index-carousel .carouselitem{
        background-size: 1920px 460px;
        background-position: 50%;
    }
    #nomargin{
        margin-left: 0;
    }
    #float-box{
        z-index: 999;
        position: fixed;
        top: 50%;
        right: 2%;
    }
    .el-header, .el-footer {
        background-color: blueviolet;
        color: blue;
        text-align: center;
        line-height: 60px;
        padding: 5px;
    }
    #float-box .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: 255px;
        overflow: hidden;
        background: transparent;
        position: relative;
    }
    .fixed-overlay{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 1002;
    }
    #el-menu-1{
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

</style>
