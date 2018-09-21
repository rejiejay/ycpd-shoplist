<!-- 门店详情 -->
<template>
<div class="detail"></div>
</template>

<script>

export default {
    name: 'list-detail',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
        }
    },

    mounted: function () {
    },

    methods: { },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.detail {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}


</style>
