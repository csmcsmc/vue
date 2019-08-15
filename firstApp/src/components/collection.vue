<template>
  <!--End Menu End-->
  <div class="i_bg">
    <div class="content mar_20">
      <img src="/static/images/img1.jpg" />
    </div>

    <!--Begin 第一步：查看购物车 Begin -->
    <div class="content mar_20">
      <table border="0" class="car_tab" style="width:1200px; margin-bottom:50px;" cellspacing="0" cellpadding="0">
        <tr>
          <td class="car_th" width="50">选择</td>
          <td class="car_th" width="350">商品名称</td>
          <td class="car_th" width="140">属性</td>
          <td class="car_th" width="150">购买数量</td>
          <td class="car_th" width="80">单价</td>
          <td class="car_th" width="80">总价</td>
          <td class="car_th" width="140">返还积分</td>
          <td class="car_th" width="150">操作</td>
        </tr>

        <tr v-for="(v,k) in arr">
<!--          checked="checked"-->
          <td><input type="checkbox" name="clear" v-on:click="xj(v)" /></td>
          <td>
            <div class="c_s_img"><img src="/static/images/c_1.jpg" width="73" height="73" /></div>
            {{v.name}}
          </td>
          <td align="center">{{v.ganame}}</td>
          <td align="center">
            <div class="c_num">
              <input type="button"   v-on:click="reduce(v);" class="car_btn_1" />
              <input type="text" v-bind:value="v.sum"  class="car_ipt" />
              <input type="button"   v-on:click="plus(v)" class="car_btn_2" />
            </div>
          </td>
          <td align="center"  style="color:#ff4e00;">￥{{v.price}}</td>
          <td align="center"  style="color:#ff4e00;">￥{{v.price*v.sum}}</td>
          <td align="center">26R</td>
          <td align="center"><a onclick="ShowDiv('MyDiv','fade')">删除</a>&nbsp; &nbsp;<a href="#">加入收藏</a></td>
        </tr>


        <tr height="70">
          <td colspan="8" style="font-family:'Microsoft YaHei'; border-bottom:0;">
            <span class="fr">商品总价：<b style="font-size:22px; color:#ff4e00;">￥{{mon}}</b></span>
          </td>
        </tr>
        <tr valign="top" height="150">
          <td colspan="8" align="right">
            <router-link  :to="{path:'/'}" ><img src="/static/images/buy1.gif" /></router-link> &nbsp;
            <a v-on:click="order()"><img src="/static/images/buy2.gif" /></a>
          </td>
        </tr>

      </table>

    </div>
    <!--End 第一步：查看购物车 End-->


    <!--Begin 弹出层-删除商品 Begin-->
    <div id="fade" class="black_overlay"></div>
    <div id="MyDiv" class="white_content">
      <div class="white_d">
        <div class="notice_t">
          <span class="fr" style="margin-top:10px; cursor:pointer;" onclick="CloseDiv('MyDiv','fade')"><img src="/static/images/close.gif" /></span>
        </div>
        <div class="notice_c">

          <table border="0" align="center" style="font-size:16px;" cellspacing="0" cellpadding="0">
            <tr valign="top">
              <td>您确定要把该商品移除购物车吗？</td>
            </tr>
            <tr height="50" valign="bottom">
              <td><a href="#" class="b_sure">确定</a><a href="#" class="b_buy">取消</a></td>
            </tr>
          </table>

        </div>
      </div>
    </div>
    <!--End 弹出层-删除商品 End-->


    <!--Begin Footer Begin -->
    <div class="b_btm_bg bg_color">
      <div class="b_btm">
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="/static/images/b1.png" width="62" height="62" /></td>
            <td><h2>正品保障</h2>正品行货  放心购买</td>
          </tr>
        </table>
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="/static/images/b2.png" width="62" height="62" /></td>
            <td><h2>满38包邮</h2>满38包邮 免运费</td>
          </tr>
        </table>
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="/static/images/b3.png" width="62" height="62" /></td>
            <td><h2>天天低价</h2>天天低价 畅选无忧</td>
          </tr>
        </table>
        <table border="0" style="width:210px; height:62px; float:left; margin-left:75px; margin-top:30px;" cellspacing="0" cellpadding="0">
          <tr>
            <td width="72"><img src="/static/images/b4.png" width="62" height="62" /></td>
            <td><h2>准时送达</h2>收货时间由你做主</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="b_nav">
      <dl>
        <dt><a href="#">新手上路</a></dt>
        <dd><a href="#">售后流程</a></dd>
        <dd><a href="#">购物流程</a></dd>
        <dd><a href="#">订购方式</a></dd>
        <dd><a href="#">隐私声明</a></dd>
        <dd><a href="#">推荐分享说明</a></dd>
      </dl>
      <dl>
        <dt><a href="#">配送与支付</a></dt>
        <dd><a href="#">货到付款区域</a></dd>
        <dd><a href="#">配送支付查询</a></dd>
        <dd><a href="#">支付方式说明</a></dd>
      </dl>
      <dl>
        <dt><a href="#">会员中心</a></dt>
        <dd><a href="#">资金管理</a></dd>
        <dd><a href="#">我的收藏</a></dd>
        <dd><a href="#">我的订单</a></dd>
      </dl>
      <dl>
        <dt><a href="#">服务保证</a></dt>
        <dd><a href="#">退换货原则</a></dd>
        <dd><a href="#">售后服务保证</a></dd>
        <dd><a href="#">产品质量保证</a></dd>
      </dl>
      <dl>
        <dt><a href="#">联系我们</a></dt>
        <dd><a href="#">网站故障报告</a></dd>
        <dd><a href="#">购物咨询</a></dd>
        <dd><a href="#">投诉与建议</a></dd>
      </dl>
      <div class="b_tel_bg">
        <a href="#" class="b_sh1">新浪微博</a>
        <a href="#" class="b_sh2">腾讯微博</a>
        <p>
          服务热线：<br />
          <span>400-123-4567</span>
        </p>
      </div>
      <div class="b_er">
        <div class="b_er_c"><img src="/static/images/er.gif" width="118" height="118" /></div>
        <img src="/static/images/ss.png" />
      </div>
    </div>
    <div class="btmbg">
      <div class="btm">
        备案/许可证编号：蜀ICP备12009302号-1-www.dingguagua.com   Copyright © 2015-2018 尤洪商城网 All Rights Reserved. 复制必究 , Technical Support: Dgg Group <br />
        <img src="/static/images/b_1.gif" width="98" height="33" /><img src="/static/images/b_2.gif" width="98" height="33" /><img src="/static/images/b_3.gif" width="98" height="33" /><img src="/static/images/b_4.gif" width="98" height="33" /><img src="/static/images/b_5.gif" width="98" height="33" /><img src="/static/images/b_6.gif" width="98" height="33" />
      </div>
    </div>
    <!--End Footer End -->
  </div>

</template>

<script>
    export default {
        data() {
            return {
                arr: "",
                mon: 0,
                token: localStorage.getItem("token"),
                sumon: [],
                s_id:'',

            }
        },

        mounted() {   //钩子
            axios.post(this.url + 'api/Collshow', {
                token: this.token,
            })
                .then(response => {
                    this.arr = response.data;
                })
        },
        methods: {
            plus(sum) {
                axios.post(this.url + "api/Plus", {
                    token: this.token,
                    sell_id: sum.sell_id,
                })
                return sum.sum++;
            },
            reduce(sum) {
                if (sum.sum != 1) {
                    axios.post(this.url + "api/Reduce", {
                        token: this.token,
                        sell_id: sum.sell_id,
                    })
                }
                return sum.sum <= 1 ? sum.sum = 1 : sum.sum--;
            },

            xj(val) {
                var sell_id = val.sell_id;
                if (this.sumon[sell_id] == undefined || this.sumon[sell_id] == '') {
                    this.sumon[sell_id] = val;
                } else {
                    this.sumon[sell_id] = '';
                }
                var zosum = 0;
                var s_id = '';
                this.sumon.forEach(function (v, k) {
                    if (v != '') {
                        zosum += v.price * v.sum;
                        s_id+=v.sell_id+",";
                    }
                })
                this.s_id=s_id;
                this.mon = zosum;
            },
            order() {
                this.$router.push({
                    path: '/Order',
                    query: {
                        sell_id: this.s_id,
                    }
                })
            },
        }
    }
</script>

<style scoped>

</style>
