<template>
  <div class="block">
    <div class="innerblock">
      <el-form label-width="80px" :model="User">
        <!--<el-form :label-position="labelPosition" label-width="80px" :model="User">-->
        <div class="title-container">
          <h3 class="title">LOGIN</h3>
        </div>
        <el-form-item label="UserName">
          <!--<i class=" el-icon-user-solid"></i>-->

          <el-input v-model="User.name" class="inputframe"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="User.password" class="inputframe"></el-input>
        </el-form-item>
        <el-button type="submit" @click="handlelogIn">Login</el-button>
      </el-form>
    </div>
    <!--<div>{{ data1 }}</div>-->
    <div>{{ data2 }}</div>
  </div>
</template>

<script>
import store from "@/store";
import { login, healthcheck } from "@/service/User.js";
export default {
  name: "AdminPage",
  store,
  data() {
    return {
      User: {
        name: "",
        password: "",
        token:""
      },
      //  data1: "www",
      data2: "",
    };
  },
  props: {},

  methods: {
    async handlelogIn() {
      let res = (await login("430022F00")).data;
      if (res.status == 200) {
        this.User.token=res.userAuth.usertoken
        this.$store.dispatch("login", this.User);
        this.$router.push("/");
      } else if (res.status == 40401) {
        alert("no this account");
      } else if (res.status == 40323) {
        alert("password is wrong");
      } else {
        alert("fails");
      }
    },
  },
  async mounted() {
    this.data1 = (await login("430022F00")).data;
    this.data2 = (await healthcheck()).data.status;
    console.log(this.data2);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
$dark: #404040;
$bg: #0047b3;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;
$font: Georgia, "Times New Roman", Times, serif;
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
h3 {
  display: flex;
  justify-content: center;
}
.block {
  background: url("@/assets/backgroundweb.jpeg") no-repeat center center fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
}
.el-form-item {
  line-height: 40px;
  position: relative;
  font-size: medium;
  display: flex;
  color: $bg;
  margin-bottom: 20px;
  font-family: $font;
  font-weight: bold;
  height: 4%;
  border: 2px solid $bg;
  align-items: center;
  padding-left: 20px;
}

.el-form-item__label{
     margin-left: 20px;
   
}
.inputframe {
  :deep(.el-input__inner) {
    border: 0 !important;
    width:90%;
    background-color: unset;
    border:  2px solid $bg;

  }
}
.el-button {
  color: white;
  font-family: $font;
  border: 2px solid white;
  background-color: $bg;
  font-weight: bold;
  border-radius: 4px;
  height: 4%;
  min-height: 44px;
  width: 100%;
  min-width: 400px;
}

.el-input {
  color: white;
  font-family: $font;
  border: none;
  width: 100%;
}
.title {
  color: $bg;
  font-family: $font;
  font-weight: bold;
  margin-bottom: 20px;
}
.title2 {
  display: flex;
  direction: row;
}

.innerblock {
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 38px;
}

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
</style>
