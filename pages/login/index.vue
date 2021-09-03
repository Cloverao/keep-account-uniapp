<template>
  <view class="content">
    <van-form @submit="onSubmit">
      <van-field
        v-model="form.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit"
          >提交</van-button
        >
      </div>
    </van-form>
  </view>
</template>

<script>
import { userLogin } from "@/api/api.js";
export default {
  data() {
    return {
      title: "Hello",
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async onSubmit() {
      let data = await userLogin(Object.assign({}, this.form));
      console.log(data);
    },
  },
  onLoad() {},
};
</script>

<style></style>
