<!-- 门店详情 -->
<template>
<div class="map">
    <!-- 搜索栏 -->
    <div class="searchBar flex-start-center">
        <div class="searchBar-back flex-center" @click="jumpToList">
            <svg width="14" height="14" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="门店列表" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="商家列表-地图" transform="translate(-30.000000, -162.000000)" fill="#333333" fill-rule="nonzero"><g id="search" transform="translate(0.000000, 128.000000)"><g id="icon" transform="translate(30.000000, 34.000000)">
                <path d="M10.4142136,16 L23.7071068,29.2928932 C24.0976311,29.6834175 24.0976311,30.3165825 23.7071068,30.7071068 C23.3165825,31.0976311 22.6834175,31.0976311 22.2928932,30.7071068 L8.29289322,16.7071068 C7.90236893,16.3165825 7.90236893,15.6834175 8.29289322,15.2928932 L22.2928932,1.29289322 C22.6834175,0.902368927 23.3165825,0.902368927 23.7071068,1.29289322 C24.0976311,1.68341751 24.0976311,2.31658249 23.7071068,2.70710678 L10.4142136,16 Z" id="icon_back"></path></g></g></g></g>
            </svg>
        </div>
        <div class="searchBar-input flex-rest">
            <div class="searchBar-input-content flex-start">
                <!-- 搜索ICON -->
                <div class="input-content-icon flex-center">
                    <svg t="1531378867937" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13263" xmlns:xlink="http://www.w3.org/1999/xlink" 
                            width="18" height="18">
                        <path d="M894.503448 842.469471 751.960028 701.767962c21.181973-25.889078 38.373139-54.438693 51.47117-85.444189 18.316778-43.387229 25.582093-89.537324 25.582093-137.017688s-8.288598-93.630459-26.605376-137.017688c-17.702808-41.954632-42.05696-79.611472-74.392725-111.844909-32.335765-32.335765-69.992605-57.713201-111.844909-75.416009-43.387229-18.316778-89.537324-27.62866-137.017688-27.62866s-93.630459 9.311882-137.017688 27.62866c-41.954632 17.702808-79.611472 43.080244-111.844909 75.416009-32.335765 32.335765-57.713201 69.992605-75.416009 111.844909-18.316778 43.387229-27.62866 89.537324-27.62866 137.017688s9.311882 93.630459 27.62866 137.017688c17.702808 41.954632 43.080244 79.611472 75.416009 111.844909 32.335765 32.335765 69.992605 57.713201 111.844909 75.416009 43.387229 18.316778 89.537324 25.582093 137.017688 25.582093s93.630459-7.265314 137.017688-25.582093c33.563705-14.223643 64.466873-33.359049 91.993205-56.996902l142.338763 140.496852c6.139702 6.037374 14.121315 9.004897 22.0006 9.004897 8.083941 0 16.167882-3.069851 22.307585-9.311882C906.987509 874.498251 906.88518 854.646547 894.503448 842.469471zM479.152593 766.541821c-77.257919 0-149.911062-28.037973-204.554412-82.681323-54.64335-54.64335-84.72789-127.296492-84.72789-204.554412s30.084541-149.911062 84.72789-204.554412c54.64335-54.64335 127.296492-84.72789 204.554412-84.72789 77.257919 0 149.911062 30.084541 204.554412 84.72789s82.681323 127.296492 82.681323 204.554412S738.350355 629.217148 683.707005 683.860498 556.410513 766.541821 479.152593 766.541821z" 
                            p-id="13264" fill="#606266">
                        </path>
                    </svg>
                </div>
                
                <input class="flex-rest" type="text" v-model="searchInput" placeholder="输入关键字搜索"  />
                
                <!-- 清空ICON -->
                <div class="input-content-icon flex-center" v-if="searchInput !== ''" @click="searchInput = ''">
                    <svg width="18" height="18" class="icon" t="1536542733266" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2141" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#CCC" d="M516.707105 66.513441c-243.848506 0-441.546917 197.698411-441.546917 441.546917s197.698411 441.546917 441.546917 441.546917 441.546917-197.698411 441.546917-441.546917S760.555611 66.513441 516.707105 66.513441z m227.066653 601.690816c18.419107 18.419107 18.419107 48.503647 0 66.922754s-48.503647 18.419107-66.922754 0L516.707105 574.983112 356.563206 735.127011c-18.419107 18.419107-48.503647 18.419107-66.922754 0s-18.419107-48.503647 0-66.922754l160.143899-160.143899L289.640452 347.916458c-18.419107-18.419107-18.419107-48.503647 0-66.922754 18.419107-18.419107 48.503647-18.419107 66.922754 0l160.143899 160.1439 160.143899-160.1439c18.419107-18.419107 48.503647-18.419107 66.922754 0 18.419107 18.419107 18.419107 48.503647 0 66.922754L583.629859 508.060358l160.143899 160.143899z" p-id="2142"></path>
                    </svg>
                </div>
            </div>
        </div>
        <div class="searchBar-icon flex-center" @click="jumpToList">
            <svg width="22" height="22" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="门店列表" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="商家列表-地图" transform="translate(-688.000000, -162.000000)" fill="#333333"><g id="search" transform="translate(0.000000, 128.000000)"><g id="icon" transform="translate(30.000000, 34.000000)">
                <path d="M660,4 C661.104569,4 662,4.8954305 662,6 C662,7.1045695 661.104569,8 660,8 C658.895431,8 658,7.1045695 658,6 C658,4.8954305 658.895431,4 660,4 Z M660,14 C661.104569,14 662,14.8954305 662,16 C662,17.1045695 661.104569,18 660,18 C658.895431,18 658,17.1045695 658,16 C658,14.8954305 658.895431,14 660,14 Z M660,24 C661.104569,24 662,24.8954305 662,26 C662,27.1045695 661.104569,28 660,28 C658.895431,28 658,27.1045695 658,26 C658,24.8954305 658.895431,24 660,24 Z M665,5 L689,5 C689.552285,5 690,5.44771525 690,6 C690,6.55228475 689.552285,7 689,7 L665,7 C664.447715,7 664,6.55228475 664,6 C664,5.44771525 664.447715,5 665,5 Z M665,15 L689,15 C689.552285,15 690,15.4477153 690,16 C690,16.5522847 689.552285,17 689,17 L665,17 C664.447715,17 664,16.5522847 664,16 C664,15.4477153 664.447715,15 665,15 Z M665,25 L689,25 C689.552285,25 690,25.4477153 690,26 C690,26.5522847 689.552285,27 689,27 L665,27 C664.447715,27 664,26.5522847 664,26 C664,25.4477153 664.447715,25 665,25 Z" id="icon_list"></path></g></g></g></g>
            </svg>
        </div>
    </div>

    <!-- 地图区域 -->
    <div class="map-main" :style="'height: ' + (clientHeight - 56) + 'px;'">
    </div>

    <!-- 底部标签 -->
    <div class="bottom-tag" v-if="isBottomTagShow">
        <div class="bottom-tag-title">尊驾汇</div>

        <!-- 星星评价 -->
        <div class="bottom-tag-star flex-start-center">
            <div class="flex-start">
                <svg v-for="(empty, key) in new Array(score)" :key="key" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#e7380c" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                </svg>
                <svg v-for="(empty, reskey) in new Array(5 - score)" :key="reskey + 5" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#dddddd" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                </svg>
            </div>
            <span>{{score}}.0</span>
        </div>
        
        <div class="bottom-tag-label flex-start-center">
            <div class="tag-label-left">距离100米</div>
            <div>红盒子创意园A2栋101-104号</div>
        </div>
        
        <div class="bottom-tag-operation flex-start-center">
            <div class="tag-operation-left flex-start flex-rest">
                <div class="operation-left-content flex-start-center">
                    <span>查看详情</span>

                    <svg width="16" height="16" t="1537846098176" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1858" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#5594FF" d="M325.399273 235.124364L600.157091 488.727273 325.399273 742.353455a34.909091 34.909091 0 1 0 47.36 51.316363l302.545454-279.272727a34.909091 34.909091 0 0 0 0-51.316364l-302.545454-279.272727a34.909091 34.909091 0 1 0-47.36 51.316364" p-id="1859"></path>
                    </svg>
                </div>
            </div>
            <div class="tag-operation-right">
                <div class="operation-right-content flex-start-center">
                    <svg width="16" height="16" viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="门店列表" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="商家列表-地图" transform="translate(-586.000000, -1248.000000)" stroke="#FFFFFF" stroke-width="2"><g id="门店" transform="translate(0.000000, 1034.000000)"><g id="导航btn" transform="translate(540.000000, 196.000000)"><g id="Group-3" transform="translate(46.000000, 18.000000)">
                        <path d="M14,2.73483799 L4.93696282,25.8043872 L14,20.8609124 L23.0630372,25.8043872 L14,2.73483799 Z" id="Triangle-3"></path></g></g></g></g></g>
                    </svg>
                    <span>导航</span>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'list-map',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
			clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 搜索框输入
             */
            searchInput: '',
            
            isBottomTagShow: true, // 是否显示 底部标签

            score: 4, // 门店评分
        }
    },

    mounted: function () {
    },

    methods: { 
        /**
         * 返回到商品列表
         */
		jumpToList: function jumpToList() {
			this.$router.back(-1);
		},
    },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

@bottom-tag-z-index: 2;

.map {
    width: 100%;
    height: 100%;
    background: #f5f5f5;
    overflow: hidden;
}

// 搜索栏
.searchBar {
    width: 100%;
    height: 55px;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .searchBar-input {

        .searchBar-input-content {
            height: 35px;
            background: #f1f1f2;
            border-radius: 5px;
        }

        .input-content-icon {
            height: 35px;
            width: 35px;
        }

        input {
            height: 35px;
            line-height: 35px;
            border: none;
            outline: none;
            font-size: 16px;
            color: #909399;
            background-color: transparent;
        }
        input::-webkit-input-placeholder{
            color: #909399;
        }
        input::-moz-placeholder{   /* Mozilla Firefox 19+ */
            color: #909399;
        }
        input:-moz-placeholder{    /* Mozilla Firefox 4 to 18 */
            color: #909399;
        }
        input:-ms-input-placeholder{  /* Internet Explorer 10-11 */ 
            color: #909399;
        }

    }

    .searchBar-back {
        width: 45px;
        height: 35px;
    }

    .searchBar-icon {
        width: 55px;
        height: 55px;
    }
}

// 底部标签
.bottom-tag {
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: @bottom-tag-z-index;
    border-radius: 10px 10px 0px 0px;
    background: #fff;
    -webkit-box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05), 0 0 10px rgba(0, 0, 0, 0.16);

    .bottom-tag-title {
        padding-top: 15px;
        padding-left: 15px;
        font-size: 16px;
        font-weight: bold;
        color: @black1;
    }
    
    // 星星
    .bottom-tag-star {
        padding-top: 2.5px;
        padding-bottom: 2.5px;
        padding-left: 15px;
        height: 30px;
        line-height: 30px;

        span {
            padding-left: 7px;
            font-size: 18px;
            color: #e7380c;
        }
    }

    .bottom-tag-label {
        font-size: 14px;
        padding-left: 15px;
        padding-bottom: 15px;
        color: @black2;

        .tag-label-left {
            padding-right: 15px;    
        }
    }

    // 底部按钮部分
    .bottom-tag-operation {
        padding-bottom: 25px;
        padding-left: 15px;
        padding-right: 15px;
        
        .operation-left-content {
            padding-left: 10px;
            padding-right: 7.5px;
            height: 24px;
            font-size: 12px;
            line-height: 24px;
            border-radius: 24px;
            text-align: center;
            border: 1px solid #5594FF;
            color: #5594FF;
        }
        
        .operation-right-content {
            padding-left: 15px;
            padding-right: 15px;
            height: 32px;
            font-size: 12px;
            line-height: 32px;
            border-radius: 32px;
            text-align: center;
            background-color: #5594FF;
            color: #fff;

            span {
                padding-left: 5px;
            }
        }
    }
}


</style>
