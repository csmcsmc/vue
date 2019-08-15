<template>
  <div>
    <h1>{{ sum }}</h1>
    <input type="text" v-model="a">+
    <input type="text" v-model="b">
    <div>
      <p>{{mes}}</p>
    </div>
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                a:'4',
                b:'4',
                mes:"8",
                message:"1230",
            }
        },
        //computed 为计算属性
        //Number()为相加
        computed:{
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            },
            sum:function(){
                return Number(this.a) + Number(this.b)
            },
        },
    }


</script>

