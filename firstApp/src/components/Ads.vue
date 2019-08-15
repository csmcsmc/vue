<template>
<div>


  <div class="m_top_bg">
    <div class="top">
      <div class="m_logo"><a href="Index.html"><img src="/static/images/logo1.png" /></a></div>
      <div class="m_search">
        <form>
          <input type="text" value="" class="m_ipt" />
          <input type="submit" value="搜索" class="m_btn" />
        </form>
        <span class="fl"><a href="#">咖啡</a><a href="#">iphone 6S</a><a href="#">新鲜美食</a><a href="#">蛋糕</a><a href="#">日用品</a><a href="#">连衣裙</a></span>
      </div>
      <div class="i_car">
        <div class="car_t">购物车 [ <span>3</span> ]</div>
        <div class="car_bg">
          <!--Begin 购物车未登录 Begin-->
          <div class="un_login">还未登录！<a href="Login.html" style="color:#ff4e00;">马上登录</a> 查看购物车！</div>
          <!--End 购物车未登录 End-->
          <!--Begin 购物车已登录 Begin-->
          <ul class="cars">
            <li>
              <div class="img"><a href="#"><img src="/static/images/car1.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">法颂浪漫梦境50ML 香水女士持久清新淡香 送2ML小样3只</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/static/images/car2.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
            <li>
              <div class="img"><a href="#"><img src="/static/images/car2.jpg" width="58" height="58" /></a></div>
              <div class="name"><a href="#">香奈儿（Chanel）邂逅活力淡香水50ml</a></div>
              <div class="price"><font color="#ff4e00">￥399</font> X1</div>
            </li>
          </ul>
          <div class="price_sum">共计&nbsp; <font color="#ff4e00">￥</font><span>1058</span></div>
          <div class="price_a"><a href="#">去购物车结算</a></div>
          <!--End 购物车已登录 End-->
        </div>
      </div>
    </div>
  </div>



  <!--End Header End-->
  <div class="i_bg bg_color">
    <!--Begin 用户中心 Begin -->
    <div class="m_content">
      <div class="m_left">
        <div class="left_n">管理中心</div>
        <div class="left_m">
          <div class="left_m_t t_bg1">订单中心</div>
          <ul>
            <li><a href="Member_Order.html">我的订单</a></li>
            <li><a href="Member_Address.html" class="now">收货地址</a></li>
            <li><a href="#">缺货登记</a></li>
            <li><a href="#">跟踪订单</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg2">会员中心</div>
          <ul>
            <li><a href="Member_User.html">用户信息</a></li>
            <li><a href="Member_Collect.html">我的收藏</a></li>
            <li><a href="Member_Msg.html">我的留言</a></li>
            <li><a href="Member_Links.html">推广链接</a></li>
            <li><a href="#">我的评论</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg3">账户中心</div>
          <ul>
            <li><a href="Member_Safe.html">账户安全</a></li>
            <li><a href="Member_Packet.html">我的红包</a></li>
            <li><a href="Member_Money.html">资金管理</a></li>
          </ul>
        </div>
        <div class="left_m">
          <div class="left_m_t t_bg4">分销中心</div>
          <ul>
            <li><a href="Member_Member.html">我的会员</a></li>
            <li><a href="Member_Results.html">我的业绩</a></li>
            <li><a href="Member_Commission.html">我的佣金</a></li>
            <li><a href="Member_Cash.html">申请提现</a></li>
          </ul>
        </div>
      </div>
      <div class="m_right">
        <p></p>
        <div class="mem_tit">收货地址</div>
        <div class="address">
          <div class="a_close"><a href="#"><img src="/static/images/a_close.png" /></a></div>

          <table border="0" v-for=" (v,k) in adshow" class="add_t" align="center" style="width:98%; margin:10px auto;" cellspacing="0" cellpadding="0">
            <tr v-if="v.default=='1'">
              <td colspan="2" style="font-size:14px; color:#ff4e00;">默认地址</td>
            </tr>
            <tr>
              <td align="right" width="80">收货人姓名：</td>
              <td>{{v.ads_name}}</td>
            </tr>
            <tr>
              <td align="right">配送区域：</td>
              <td>{{v.address}}</td>
            </tr>
            <tr>
              <td align="right">详细地址：</td>
              <td>{{v.xix}}</td>
            </tr>
            <tr>
              <td align="right">手机：</td>
              <td>{{v.phone}}</td>
            </tr>
                  <p  align="right" style="color:#ff4e00;" @click="mren(v.ads_id)">设为默认</p>

          </table>



        </div>

        <div class="mem_tit">
          <a href="#"><img src="/static/images/add_ad.gif" /></a>
        </div>
        <table border="0" class="add_tab" style="width:930px;"  cellspacing="0" cellpadding="0">
          <tr>
            <td width="135" align="right">配送地区</td>
            <td colspan="3" style="font-family:'宋体';">

        <select class="jj" name="province" v-on:change="shi($event)">
          <option v-bind:id="'a'+v.area_id" v-bind:value="v.area_id" v-for=" (v,k) in sheng" >{{v.area_name}}</option>
        </select>

        <select class="jj" name="city" v-on:change="qu($event)">
          <option v-bind:id="'a'+v.area_id" v-bind:value="v.area_id" v-for=" (v,k) in city" >{{v.area_name}}</option>
        </select>

        <select class="jj" name="area" v-on:change="xian($event)">
          <option v-bind:id="'a'+v.area_id" v-bind:value="v.area_id" v-for="(v,k) in area">{{v.area_name}}</option>
        </select>
              （必填）
            </td>
          </tr>
          <tr>
            <td align="right">收货人姓名</td>
            <td style="font-family:'宋体';">
              <input type="text" value="姓名" id="ads_name" class="add_ipt" />
              （必填）</td>

          </tr>
          <tr>
            <td align="right">详细地址</td>
            <td style="font-family:'宋体';">
              <input type="text" value="世外桃源" id="xix" class="add_ipt" />
              （必填）</td>

          </tr>
          <tr>
            <td align="right">电话</td>
            <td style="font-family:'宋体';">
              <input type="text" id="phone" value="028-12345678" class="add_ipt" />
            </td>
          </tr>


        </table>
        <p align="right">
          <a href="#">删除</a>&nbsp; &nbsp; <a @click="add()" class="add_b">确认修改</a>
        </p>
      </div>
    </div>
    <!--End 用户中心 End-->
    <!--Begin Footer Begin -->
  </div>
  <div class="b_btm_bg b_btm_c">
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
        data () {
            return {
                sheng:"",
                city:"",
                area:"",
                token:localStorage.getItem("token"),
                arr:[],
                san:"",
                ads_name:"",
                xix:"",
                phone:"",
                adshow:"",

            }
        },
        mounted() {
            axios.post(this.url+'api/ads',{
                pid:1,
            })
                .then(res => {
                    this.sheng=res.data;
                    //console.log(res.data);
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });

            axios.post(this.url+'api/adshow',{
                token:this.token,
            })
                .then(res => {
                    this.adshow=res.data;
                    //console.log(res.data);
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        },
        methods:{
            shi(ev){
                var id=ev.target.value
                var name=document.getElementById("a"+id).innerText;
                this.arr['a']=name,
                axios.post(this.url+'api/ads',{
                    pid:id,
                })
                    .then(res => {
                        this.city=res.data;
                        //console.log(res.data);
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            },
            qu(eva){
                var id=eva.target.value
                var name=document.getElementById("a"+id).innerText;
                this.arr['b']=name,
                axios.post(this.url+'api/ads',{
                    pid:id,
                })
                    .then(res => {
                        this.area=res.data;
                        //console.log(res.data);
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            },
            xian(ev){
                var id=ev.target.value
                var name=document.getElementById("a"+id).innerText;
                this.arr['c']=name;
            },
            add(){

                this.san=(this.arr.a+this.arr.b+this.arr.c);
                this.ads_name=$("#ads_name").val();
                this.xix=$("#xix").val();
                 this.phone=$("#phone").val();
                axios.post(this.url+'api/ads_add',{
                    token:this.token,
                    address:this.san,
                    ads_name:this.ads_name,
                    xix:this.xix,
                    phone:this.phone,
                })
                    .then(res => {
                        this.area=res.data;
                        if (res.status='ok'){
                            alert("添加成功！")
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            },
            mren(id){
                axios.post(this.url+'api/default',{
                    id:id,
                    token:this.token,
                })
                    .then(res => {
                        //console.log(res);
                        if (res.status='ok'){
                            alert("已设为默认收货地址！")
                        }
                    })
                    .catch(function (error) { // 请求失败处理
                        console.log(error);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
