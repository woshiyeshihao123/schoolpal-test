<template>
    <div class="container">
        <div id="link-box">
            <div class="link link-mission">
                <a @click="sortGoods()" href="javascript:void(0)" class="button">
                    <span class="line line-top"></span>
                    <span class="line line-right"></span>
                    <span class="line line-bottom"></span>
                    <span class="line line-left"></span>
                    正反排序
                </a>
            </div>

            <div class="link link-mission">
                <a href="javascript:void(0)" class="button" data="mission">
                    <span class="line line-top"></span>
                    <span class="line line-right"></span>
                    <span class="line line-bottom"></span>
                    <span class="line line-left"></span>
                    上一页
                </a>
            </div>

            <div class="link link-mission">
                <a href="javascript:void(0)" class="button" data="mission">
                    <span class="line line-top"></span>
                    <span class="line line-right"></span>
                    <span class="line line-bottom"></span>
                    <span class="line line-left"></span>
                    下一页
                </a>
            </div>
            <div class="clear"></div>
        </div>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="20">
            <el-table
              :data="goodsList"
              style="width: 100%">
              <el-table-column
                prop="productId"
                label="商品ID"
                width="180">
              </el-table-column>
              <el-table-column
                prop="productName"
                label="商品名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="salePrice"
                label="售价">
              </el-table-column>
              <el-table-column
                prop="productImage"
                label="图片地址">
              </el-table-column>
            </el-table>

        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mission: 'cm',
      goodsList: [],
      sortFlag: true,
      page: 1,
      pageSize: 2,
      busy: true
    }
  },

  created () {
    this.getgoods()
  },
  methods: {
    getgoods (flag) {
      this.$myServe.get('/', {
        page: this.page,
        pageSize: this.pageSize,
        sort: this.sortFlag ? 1 : -1,
        priceLevel: this.priceChecked
      }, r => {
        console.log(r)
        if (flag) {
          this.goodsList = this.goodsList.concat(r.result.list)
          if (r.result.count === 0) {
            this.busy = true
          } else {
            this.busy = false
          }
        } else {
          this.goodsList = r.result.list
          this.busy = false
        }
      })
    },

    sortGoods: function () {
      this.sortFlag = !this.sortFlag
      this.page = 1
      this.getgoods()
    },

    setPriceFilter (index) {
      this.priceChecked = index
      this.page = 1
      this.getgoods()
    },

    loadMore: function () {
      this.busy = true
      setTimeout(() => {
        this.page++
        this.getgoods(true)
      }, 1000)
    }
  }
}
</script>

<style lang="scss">
    #link-box{
        padding: 100px 50px;
    }
    .link{
        width: 205px;
        height: 280px;
        float:left;
        margin:0 30px;
    }
    .button{
        display: block;
        width: 180px;
        height: 50px;
        line-height: 50px;
        text-decoration: none;
        color: aqua;
        font-weight: bolder;
        border: 2px solid rgba(226, 7, 215, 0.2);
        text-align: center;
        margin: 0 auto;
        position: relative;
        transition:0.4s ease;
        -webkit-transition:0.4s ease;
        -moz-transition:0.4s ease;
        -o-transition:0.4s ease;
    }
    .button:hover{
        border: 2px solid rgba(226, 7, 215, 1)
    }
    .button .line {
        display: block;
        position: absolute;
        background: none;
        transition: 0.4s ease;
        -webkit-transition: 0.4s ease;
        -moz-transition: 0.4s ease;
        -o-transition: 0.4s ease;
    }
    .button:hover .line{
        background: rgb(226, 7, 215);
    }
    // 初始位置
    .button .line-top{
        height: 2px;
        width: 0;
        left: -110%;
        top: -2px;
    }
    /* 最终位置, 只写有变化的属性 */
    .button:hover .line-top{
        width: 180px;
        left: -2px;
    }

    /* 初始位置 */
    .button .line-right{
        height: 0px;
        width: 2px;
        top:-110%;
        right:-2px;

    }
  /* 最终位置, 只写有变化的属性 */
    .button:hover .line-right{
        height: 50px;
        top: -2px;
    }

    .button .line-bottom{
        height: 2px;
        width: 0;
        right:-110%;
        bottom:-2px;

    }
  /* 最终位置, 只写有变化的属性 */
    .button:hover .line-bottom{
        width: 180px;
        right: -2px;
    }

    .button .line-left{
        height: 0px;
        width: 2px;
        bottom:-110%;
        left:-2px;
    }
  /* 最终位置, 只写有变化的属性 */
    .button:hover .line-left{
        height: 50px;
        bottom: -2px;
    }
</style>
