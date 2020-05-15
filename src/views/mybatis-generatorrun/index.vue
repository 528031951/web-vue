<template>
    <div>
        <fieldset>
            <legend  class="warranty_center_head">mybatis-plus代码生成器</legend>
        <el-form ref="form" :model="form" style="margin-top: 30px" label-width="180px" :rules="rules" >
            <el-row :gutter="24">
                <el-col :span="11">
                    <el-form-item label="生成文件地址路径："  prop="outputDir" label-width="280px" style="margin-left: 30%">
                        <el-input v-model="form.outputDir"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="创建人：" prop="author" label-width="280px">
                        <el-input v-model="form.author"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="11">
                    <el-form-item label="数据库名称：" prop="url" label-width="280px" style="margin-left: 30%">
                        <el-input v-model="form.url"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="生成实体表名称：" prop="include" label-width="280px">
                        <el-input v-model="form.include"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="24">
                <el-col :span="11">
                    <el-form-item label="数据库账号：" prop="username" label-width="280px" style="margin-left: 30%">
                        <el-input type="username" autocomplete="new-username" v-model="form.username"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="数据库密码：" prop="password" label-width="280px">
                        <el-input type="password"  autocomplete="new-password" v-model="form.password"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        </fieldset>
        <div>
            <el-form   size="medium" class="button_add" style="z-index: 999">
                <el-footer class="vue_submit">
                    <el-button type="primary" @click="onSubmit('form')" style="position: fixed;right: 85px;bottom: 7px;" size="mini">立即创建</el-button>
                </el-footer>
            </el-form>
        </div>

    </div>
</template>

<script>
    import {saveMpGenerator} from "../../services/mybatis-generatorrun"
    export default {
        name: 'MyBatisGeneratorRun',
        data() {
            return {
                form: {
                    outputDir: '',
                    author: '',
                    url: '',
                    include: '',
                    username: '',
                    password: '',
                },
                rules:{
                    outputDir:[{required: true, message: '请填写生成文件路径', trigger: 'blur'}],
                    author:[{required: true, message: '请填写创建人名称', trigger: 'blur'}],
                    url:[{required: true, message: '请填写数据库名称', trigger: 'blur'}],
                    include:[{required: true, message: '请填写数据库表名称', trigger: 'blur'}],
                    username:[{required: true, message: '请填写账号', trigger: 'blur'}],
                    password:[{required: true, message: '请填写密码', trigger: 'blur'}],
                }
            }
        },
        methods:{
            onSubmit(form){
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        saveMpGenerator(this.form).then(res=>{
                            if(res.data.code===0){
                                this.$notify({
                                    title: '成功',
                                    message: '生成成功',
                                    type: 'success'
                                });
                            }else {
                                this.$notify.error({
                                    title: '生成失败',
                                    message: '数据库名称或账号密码错误！'
                                });
                            }
                        }).catch(err=>{
                            this.$notify.error({
                                title: '生成失败',
                                message: '网络错误,请联系相关管理员！'
                            });
                        })
                    } else {
                        return false;
                    }
                });
            },
        }
    }
</script>

<style scoped>
    .el-form-item__label{
        color: red;
    }
    .vue_submit{
        width:100%;
        max-height:50px;
        position: fixed;
        bottom: 0px;
        right: 0px;
        border-top: 1px #DCDFE6 solid;
        background-color: white;
        z-index: 555
    }
    fieldset{
        padding: 0.35em 0.625em 0.75em;
        margin: 0 2px;
        border: 1px solid #e8e8e8;
        /*border-radius: 8px;*/
        width: 100%;
        height: 80%;
        margin-left: -5px;
    }
    legend {
        padding: 0.5em;
        border: 0;
        width: auto;
        font-size: 14px;
        font-weight: bold;
    }
    .warranty_center_head{
        font-size: 14px;
        font-weight:bold;
    }
</style>