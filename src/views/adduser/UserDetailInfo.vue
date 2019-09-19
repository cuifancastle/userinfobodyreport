<template>
    <div>
        <div class="title">基础信息</div>
        <div>
            <div>会员ID</div>
            <div>{{id}}</div>
        </div>
        <mt-field label="称呼"></mt-field>
        <mt-checklist
                title="性别"
                :max="1"
                :value.sync="sex"
                :options="['男', '女']">
        </mt-checklist>
        <div class="title">身材管理</div>
    </div>
</template>
<script>
    export default {
        data (){
            return {
                id: 2019082908733,
                sex: [],
            }
        }
    }
</script>