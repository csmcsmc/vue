<template>
  <!--Begin 用户中心 Begin -->
  <div class="m_content">
    <div class="m_left">
      <div class="left_n">管理中心</div>
      <div class="left_m">
        <div class="left_m_t t_bg1">订单中心</div>
        <ul>
          <li><a href="Member_Order.html">我的订单</a></li>
          <li><router-link  :to="{path:'/Ads'}" >收货地址</router-link></li>
          <li><a href="#">缺货登记</a></li>
          <li><a href="#">跟踪订单</a></li>
        </ul>
      </div>
      <div class="left_m">
        <div class="left_m_t t_bg2">会员中心</div>
        <ul>
          <li><a href="Member_User.html" class="now">用户信息</a></li>
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
      <div class="m_des">
        <table border="0" style="width:870px; line-height:22px;" cellspacing="0" cellpadding="0">
          <tr valign="top">
            <td width="115"><img src="/static/images/user.jpg" width="90" height="90" /></td>
            <td>
              <div class="m_user">{{name}}</div>
              <p>
                等级：注册用户 <br />
                <font color="#ff4e00">您还差 270 积分达到 分红100</font><br />
                上一次登录时间: 2015-09-28 18:19:47<br />
                您还没有通过邮件认证 <a href="#" style="color:#ff4e00;">点此发送认证邮件</a>
              </p>
              <div class="m_notice">
                用户中心公告！
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div class="mem_t">账号信息</div>
      <table border="0" class="mon_tab" style="width:870px; margin-bottom:20px;" cellspacing="0" cellpadding="0">
        <tr>
          <td width="40%">用户ID：<span style="color:#555555;">{{id}}</span></td>
          <td width="60%">邀请人：<span style="color:#555555;">{{y_name}}</span></td>
        </tr>
        <tr>
          <td>电&nbsp; &nbsp; 话：<span style="color:#555555;">{{phone}}</span></td>
          <td>邮&nbsp; &nbsp; 箱：<span style="color:#555555;">{{email}}</span></td>
        </tr>
        <tr>
          <td>身份证号：<span style="color:#555555;">{{sf}}</span></td>
          <td>注册时间：<span style="color:#555555;">{{time}}</span></td>
        </tr>
      </table>

      <div class="mem_t">资产信息</div>
      <table border="0" class="mon_tab" style="width:870px; margin-bottom:20px;" cellspacing="0" cellpadding="0">
        <tr>
          <td width="33%">用户等级：<span style="color:#555555;">普通会员</span></td>
          <td width="33%">消费金额：<span>￥200元</span></td>
          <td width="33%">返还积分：<span>99R</span></td>
        </tr>
        <tr>
          <td>账户余额：<span>￥200元</span></td></td>
          <td>红包个数：<span style="color:#555555;">3个</span></td></td>
          <td>红包价值：<span>￥50元</span></td></td>
        </tr>
        <tr>
          <td colspan="3">订单提醒：
            <font style="font-family:'宋体';">待付款(<span>0</span>) &nbsp; &nbsp; &nbsp; &nbsp; 待收货(<span>2</span>) &nbsp; &nbsp; &nbsp; &nbsp; 待评论(<span>1</span>)</font>
          </td>
        </tr>
      </table>




    </div>
  </div>
  <!--End 用户中心 End-->

</template>

<script>
    export default {
        data () {
            return {
                info:123,
                id:"",
                name:"",
                phone:"",
                email:"",
                sf:"",
                time:"",
                y_name:"",
                token:localStorage.getItem("token"),

            }
        },
        mounted () {
            axios.post(this.url+'api/auth/me',{
                token: this.token,
            })
                .then(response => {
                    this.id=response.data.id
                    this.name=response.data.name
                    this.phone=response.data.phone
                    this.sf=response.data.sf
                    this.time=response.data.time
                    this.y_name=response.data.y_name
                    this.email=response.data.email
                    console.log(response);
                })
                .catch(function (error) { // 请求失败处理
                    console.log(error);
                });
        },

    }
</script>


