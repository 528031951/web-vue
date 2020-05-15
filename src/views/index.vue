<template>
    <div class="index">
        <div id="index_pc_bj">
            <div class="login_index">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                    <el-col>统一登录入口</el-col>
                    <el-col>
                    <el-form-item label="账号：" prop="userName" style="width: 320px;">
                        <el-input type="username" v-model="ruleForm.userName" autocomplete="off"> <i slot="prefix" class="el-icon-user-solid"></i> </el-input>
                    </el-form-item>
                    <el-form-item label="密码：" prop="password" style="width: 320px;">
                        <el-input type="password" v-model="ruleForm.password" autocomplete="off" utocomplete="new-password"> <i slot="prefix" class="el-icon-unlock"></i></el-input>
                    </el-form-item>
                    <el-form-item style="width: 300px;">
                        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                        <el-button type="text" @click="submitForm('ruleForm')">忘记密码</el-button>
                    </el-form-item>
                    </el-col>
                </el-form>
                </div>
        </div>
    </div>
</template>
<script>
    import {loginUser} from "../services/loginUser";

    export default {
        data() {
            return {
                ruleForm: {
                    userName: '',
                    password: '',
                },
                rules: {
                    userName: [
                        { required: true, message: '请填写用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        var user={userName:this.ruleForm.userName,password:this.ruleForm.password};
                        loginUser(user).then(res=>{
                            if(res.data.code===0){
                                localStorage['userTypeSelect']=JSON.stringify("admin");
                                this.$router.push({path: "/",});
                                this.$notify({
                                    title: '成功',
                                    message: '登录成功，欢迎回来',
                                    type: 'success'
                                });
                            }else {
                                this.$notify.error({
                                    title: '账号或密码错误',
                                    message: '账号或密码错误,请确认后在登录或联系相关管理员！'
                                });
                                this.ruleForm={};
                            }
                        })
                    } else {
                        return false;
                    }
                });
            },

        }
    }
</script>

<style scoped >
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;
    }

    #index_pc_bj{
        width:100%;
        height:100%;
        background-size:cover;
        overflow: hidden;
        background-image: url(../assets/login.jpg);
        background-position:center center;
        box-shadow: 0 0px 3px rgba(0,0,0,.5);
        text-align: center;
    }
    .login_index{
        text-align:center;
        color:#fff;
        line-height: 50px;
        margin-top: 10%;
    }
    .el-form-item {
        margin-left: 37%;
    }

    .el-form-item__label{
        color: #fff;
    }

</style>
