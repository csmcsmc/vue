<template>
  <div>
    <div class="log_bg">
      <div class="top">
        <div class="logo"><a href="Index.html"><img src="/static/images/logo.png" /></a></div>
      </div>
      <div class="login">
        <div class="log_img"><img src="/static/images/l_img.png" width="611" height="425" /></div>
        <div class="log_c">
          <div>
            <table border="0" style="width:370px; font-size:14px; margin-top:30px;" cellspacing="0" cellpadding="0">
              <tr height="50" valign="top">
                <td width="55">&nbsp;</td>
                <td>
                  <span class="fl" style="font-size:24px;">登录</span>
                  <span class="fr">还没有商城账号，<a href="Regist.html" style="color:#ff4e00;">立即注册</a></span>
                </td>
              </tr>
              <tr height="70">
                <td>用户名</td>
                <td><input type="text" v-model="name" class="l_user" /></td>
              </tr>
              <tr height="70">
                <td>密&nbsp; &nbsp; 码</td>
                <td><input type="password" v-model="password" class="l_pwd" /></td>
              </tr>
              <tr>
                <td>&nbsp;</td>
                <td style="font-size:12px; padding-top:20px;">
                	<span style="font-family:'宋体';" class="fl">
                    	<label class="r_rad"><input type="checkbox" /></label><label class="r_txt">请保存我这次的登录信息</label>
                    </span>
                  <span class="fr"><a href="#" style="color:#ff4e00;">忘记密码</a></span>
                </td>
              </tr>
              <tr height="60">
                <td>&nbsp;</td>
                <td><input @click="onAdd" value="登录" class="log_btn" /></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
    export default {
        data() {
            return {
                name: '',
                password: '',
                id:'',
            }
        },
        methods: {
            onAdd() {
                axios.post(this.url+'api/auth/login', {
                    name: this.name,
                    password: this.password,
                    id:this.id,
                })
                    .then(res => {
                        if (res.data.token_type == 'error') {
                            alert('账号或密码错误')
                        } else {
                            // console.log(res.data.access_token);
                            // console.log(this.name);
                            this.$router.push({name: 'HelloWorld'});
                            localStorage.setItem("token", res.data.access_token);
                            localStorage.setItem("name", this.name);
                            localStorage.setItem("id", res.data.id);

                        }

                    })
            }
        }
    }
</script>


