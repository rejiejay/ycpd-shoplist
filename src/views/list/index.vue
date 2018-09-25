<!-- 商家列表 -->
<template>
<div class="list">
    
    <!-- 搜索栏 -->
    <div class="searchBar flex-start-center">
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
        <div class="searchBar-icon flex-center" @click="jumpToMap">
            <svg t="1531378365756" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12342" xmlns:xlink="http://www.w3.org/1999/xlink" 
                width="22" height="22">
                <path d="M497.21169 93.412506c-102.080933 0-184.846962 82.766029-184.846962 184.849008 0 102.094236 82.766029 184.846962 184.846962 184.846962 102.085026 0 184.850032-82.752726 184.850032-184.846962C682.059676 176.178535 599.293647 93.412506 497.21169 93.412506zM496.47798 709.681268c0 0-265.75876-296.161187-265.75876-442.931948 0-146.759505 118.987998-265.759783 265.75876-265.759783s265.759783 119.000278 265.759783 265.759783C762.237763 413.520081 496.47798 709.681268 496.47798 709.681268zM496.47798 355.335914c-48.927339 0-88.585571-39.659255-88.585571-88.584548 0-48.927339 39.662325-88.586594 88.585571-88.586594 48.927339 0 88.587618 39.659255 88.587618 88.586594C585.065598 315.675636 545.405319 355.335914 496.47798 355.335914zM864.804766 403.889747l92.213191-32.961716 0 491.182882c0 0-189.033307 56.122205-291.429419 84.908832l-357.856317-100.402711L68.615239 927.986249 68.615239 438.928774l88.572268-24.172539c-2.543939-14.811334-3.580548-52.470025-3.580548-68.242244L0.020978 381.994064l0 640.690988 51.200102-16.726963 256.265548-83.228563 358.102934 100.280938 358.38946-100.335173L1023.979022 281.933137l-154.314575 42.860157C868.663654 342.073866 868.233865 377.566218 864.804766 403.889747L864.804766 403.889747 864.804766 403.889747z" p-id="12343" 
                    fill="#1890ff">
                </path>
            </svg>
        </div>
    </div>

    <!-- 排序 and 筛选栏 -->
    <div class="filter flex-start">
        <div class="filter-item flex-center"
            v-bind:class="{'filter-activate-item' : (sortSelect === 'distance')}"
            @click="filterHandle('distance')"
        >
            <div class="filter-item-content">
                <span>距离优先</span>
            </div>

            <div class="filter-item-line flex-center"><span></span></div>
        </div>
        
        <div class="filter-item flex-center"
            v-bind:class="{'filter-activate-item' : (sortSelect === 'good')}"
            @click="filterHandle('good')"
        >
            <div class="filter-item-content">
                <span>好评优先</span>
            </div>

            <div class="filter-item-line flex-center"><span></span></div>
        </div>
        
        <div class="filter-item flex-center"
            v-bind:class="{'filter-activate-item' : (shopTypeSelect !== '')}"
            @click="shopTypeMenuVisible = !shopTypeMenuVisible"
        >
            <div class="filter-item-content">
                <span>门店类型</span>
                <svg width="10" height="10" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#606266" d="M6.84542978,14.5264945 L0.288775776,7.69230265 C-0.0935724214,7.29376997 -0.0804523013,6.66074094 0.318080384,6.27839274 C0.50428598,6.09974899 0.752340184,6 1.01038304,6 L14.9896198,6 C15.5419045,6 15.9896198,6.44771525 15.9896198,7 C15.9896198,7.25804285 15.8898708,7.50609706 15.711227,7.69230265 L9.15457301,14.5264945 C8.5428159,15.1641468 7.52996945,15.185139 6.89231715,14.5733819 C6.87636581,14.5580783 6.86073333,14.5424458 6.84542978,14.5264945 Z"></path>
                </svg>
            </div>

            <div class="filter-item-line flex-center"><span></span></div>
        </div>
        
        <div class="filter-item flex-center"  
            v-bind:class="{'filter-activate-item' : (filterSelectList.length !== 0)}"
            @click="isSidebarShow = true"
        >
            <div class="filter-item-content">
                <span>服务项目</span>
                <svg width="14" height="14" t="1536202186757" class="filter-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3758" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path d="M272.2 63.6c-114.9 0-208 93.1-208 208s93.1 208 208 208h208v-208c0-114.9-93.1-208-208-208z m144 352h-144c-79.4 0-144-64.6-144-144s64.6-144 144-144 144 64.6 144 144v144z m544-144c0-114.9-93.1-208-208-208s-208 93.1-208 208v208h208c114.9 0 208-93.2 208-208z m-352 0c0-79.4 64.6-144 144-144s144 64.6 144 144-64.6 144-144 144h-144v-144z m-544 480c0 114.9 93.1 208 208 208s208-93.1 208-208v-208h-208c-114.9 0-208 93.1-208 208z m352 0c0 79.4-64.6 144-144 144s-144-64.6-144-144 64.6-144 144-144h144v144z m336-208h-208v208c0 114.9 93.1 208 208 208s208-93.1 208-208-93.1-208-208-208z m0 352c-79.4 0-144-64.6-144-144v-144h144c79.4 0 144 64.6 144 144s-64.6 144-144 144z" p-id="3759"></path>
                </svg>
            </div>
        </div>
    </div>
    
    <!-- 门店类型 下拉 -->
    <div class="shop-type-shade" @click="shopTypeMenuVisible = false" v-bind:style="{ height: (clientHeight - 96) + 'px' }" v-if="shopTypeMenuVisible"></div>
    <div class="shop-type" 
        v-bind:class="{'shop-type-show' : shopTypeMenuVisible}"
    >
        <div class="shop-type-content"> 
            <div class="type-item type-item-line" @click="shopTypeHandle('')" v-bind:class="{'type-item-selected' : (shopTypeSelect === '')}">
                <div>所有门店</div>
            </div>
            <div
                class="type-item"
                v-for="(item, key) in shopTypeList"
                :key="key"
                v-bind:class="{'type-item-selected' : (item === shopTypeSelect),'type-item-line' : (key !== (shopTypeList.length - 1))}"    
                @click="shopTypeHandle(item)"
            >
                <div>{{item}}</div>
            </div>
        </div>
    </div>

    <!-- 侧边栏 筛选 -->
    <div class="sidebar-shade" v-if="isSidebarShow" @click="isSidebarShow = false"></div>
    <div class="sidebar" v-bind:class="{'sidebar-show' : isSidebarShow}">
        <div class="sidebar-content">
            <div class="sidebar-content-main">
                <!-- 一个块部分 -->
                <div 
                    class="sidebar-main-block"
                    v-for="(group, groupKey) in sidebarGroup" 
                    :key="groupKey"
                >
                    <div class="sidebar-block-title">{{group.title}}</div>
                    <!-- 模块下的列表 -->
                    <div class="sidebar-block-list">
                        <div 
                            class="sidebar-block-item"
                            :class="{'sidebar-item-selected': verifySidebarSelected(item.isSelected, listKey, group.isMultiple, group.selectedIndex)}"
                            v-for="(item, listKey) in group.list" 
                            :key="listKey"
                            @click="sidebarHandle(groupKey, listKey)"
                        >{{item.name}}</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 底部按钮 -->
        <div class="sidebar-bottom flex-start">
            <div class="sidebar-bottom-left" @click="sidebarReset">清除筛选条件</div>
            <div class="sidebar-bottom-right" @click="sidebarAffirm">确定</div>
        </div>
    </div>

    <!-- 产品列表 -->
    <div class="products">

        <div class="products-item"
            v-for="(item, itemKey) in products"
            :key="itemKey"
        >
            <div class="products-item-content flex-start-center">
                <div class="products-item-img">
                    <img :src="item.picUrl" alt="item" />
                </div>
                <div class="products-item-main flex-rest">

                    <div class="item-main-title">{{item.title}}</div>
                    
                    <!-- 星星评分 -->
                    <div class="main-describe-score flex-start-center">
                        <div class="describe-score-ratingStar flex-start">
                            <svg v-for="(empty, key) in new Array(item.score)" :key="key" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill="#e7380c" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                            </svg>
                            <svg v-for="(empty, reskey) in new Array(5 - item.score)" :key="reskey + 5" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path fill="#dddddd" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                            </svg>
                        </div>
                        <span>{{item.score}}.0</span>
                    </div>
                    
                    <div class="item-main-bottom flex-start-center">
                        <div class="main-bottom-address flex-rest">
                            <svg t="1531473080947" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2026" xmlns:xlink="http://www.w3.org/1999/xlink" width="16" height="16">
                                <path d="M512 884.6848c-34.05312 0-65.50016-20.92032-86.272-57.3952l-105.89184-185.89696c-13.78304-24.20736-30.35136-52.43392-43.65824-75.12064-16.91648-28.83072-25.17504-42.94144-28.04736-48.72192-6.6816-13.41952-14.99648-36.96128-19.4304-52.3008a3026.47296 3026.47296 0 0 0-7.86432-26.92608l0.13824-0.04096c-0.89088-2.7648-1.5872-5.78048-2.048-9.05728l-0.86016-6.30272c-0.70144-5.18656-1.64864-12.3392-2.68288-20.20864A41.00608 41.00608 0 0 1 215.04 397.39392v-14.69952C215.04 219.66848 348.25728 87.04 512 87.04s296.96 132.62848 296.96 295.6544v14.69952c0 1.78176-0.11264 3.56352-0.34816 5.32992-1.02912 7.86432-1.98144 15.01696-2.67776 20.1984l-0.86016 6.30272c-0.4608 3.28192-1.15712 6.2976-2.048 9.06752l0.13312 0.04096c-0.67584 2.17088-3.968 13.44512-7.86944 26.92608-6.12864 21.248-28.42112 64.93696-31.38048 70.40512-5.0432 9.3184-31.84128 56.7296-59.74016 105.70752L598.272 827.2896c-20.77184 36.47488-52.21888 57.3952-86.272 57.3952zM299.97568 417.29024c0.67072 2.00704 1.19808 3.79392 1.62304 5.248 1.50016 5.12512 3.5584 12.19584 5.80608 19.97312 4.05504 14.03392 10.77248 31.9232 14.06464 38.53824 2.06336 4.04992 14.44352 25.14944 25.3696 43.76576 13.42976 22.89152 30.14144 51.37408 44.1856 76.03712l105.89184 185.89696c7.53664 13.2352 14.1056 16.02048 15.08864 16.02048 0.97792 0 7.54688-2.78528 15.08352-16.01536l105.90208-185.91744c29.55776-51.90144 54.75328-96.54272 58.87488-104.15104 5.48864-10.15296 21.82656-44.10368 24.72448-54.15936 2.25792-7.80288 4.31616-14.8736 5.82144-19.99872 0.42496-1.45408 0.95232-3.24096 1.61792-5.24288 0.54784-3.9424 1.6896-12.48256 3.01568-22.56384v-12.02176C727.04 264.84224 630.57408 168.96 512 168.96S296.96 264.84224 296.96 382.6944v12.02176c1.32608 10.09152 2.46784 18.6368 3.01568 22.57408z" p-id="2027" fill="#909399"></path>
                                <path d="M512 393.45152m-76.8 0a76.8 76.8 0 1 0 153.6 0 76.8 76.8 0 1 0-153.6 0Z" p-id="2028" fill="#909399"></path>
                            </svg>
                            <span>{{item.address}}</span>
                        </div>
                        <div class="main-bottom-distance">{{item.distance}}</div>
                    </div>
                </div>
            </div>

			<!-- 中间门服务 -->
            <!-- <div class="content-item-label">
                <div class="item-label-integral flex-start-center">

                    <div class="label-integral-picture"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(2).jpg" /></div>
                    
                    <div class="label-integral-describe flex-rest">
                        <div class="integral-describe-title">普通洗车普通洗车普通洗车普通洗车普通洗车普通洗车</div>
                        <div class="integral-describe-other flex-start">
                            <div class="describe-other-main  flex-start-center">
                                <svg t="1531475694807" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2162" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                    width="16" height="16">
                                    <path d="M1003.23456 324.032c-22.72-26.048-164.032-192.768-217.92-250.944-16.64-17.984-28.928-30.4-54.464-31.36-25.408-1.024-435.776 0-435.776 0-14.08 0-32.064 3.2-55.296 30.4-54.08 63.36-176 203.008-217.152 251.968-27.904 32.256-31.36 78.144 0 125.44 66.88 77.824 250.944 289.024 435.904 501.824 26.176 30.336 42.752 31.424 54.464 31.424 11.456 0 27.712-0.576 54.528-31.424 183.104-210.816 358.848-412.288 435.712-501.824 25.92-31.424 30.784-88.32 0-125.504z m-54.528 94.08c-61.376 71.552-245.888 276.608-392 445.504-21.376 24.704-34.304 25.024-43.456 25.024-9.28 0-22.464-0.896-43.456-25.024-147.584-170.432-339.328-383.168-392.64-445.504-14.848-15.232-14.528-40.832 0-62.72 32.768-39.168 147.328-169.088 190.592-219.52 32.128-37.504 60.288-31.424 71.552-31.424h347.776c41.728 0 51.648 9.216 70.912 31.424 41.728 47.936 172.608 198.656 190.656 219.52 16.192 22.912 11.328 44.608 0.064 62.72z m-435.648 346.368c-47.68-64-216.704-269.312-259.84-328l-3.328-4.16c-7.424-9.92-14.08-14.592-32.192-14.592h-2.304v-44.224h95.744c2.816 0 3.456 0 5.376 3.136l196.032 252.096 196.352-251.456c2.496-3.84 3.392-3.84 6.016-3.84h95.296v44.288h-2.176c-17.92 0-24.704 4.672-32.128 14.656-0.768 0.96-1.536 2.112-2.688 3.392-43.584 59.2-212.544 264.704-260.16 328.704z m0 0" 
                                        fill="#e7380c" p-id="2163">
                                    </path>
                                </svg>
                                <span>6666积分</span>
                            </div>
                            <div class="describe-other-lable">
                                已售 2222
                            </div>
                        </div>
                    </div>
                    <div class="label-integral-submit">兑换</div>
                </div>
            </div> -->

            <div class="content-item-operation" @click="jumpToDetail">查看本店全部商品 ></div>
        </div>
    </div>

    <!-- 返回顶部 -->
    <div class="backTop flex-center">
        <svg t="1531555503711" class="icon" style="" viewBox="0 0 1040 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20584" xmlns:xlink="http://www.w3.org/1999/xlink" 
            width="16" height="16">
            <path d="M974.721667 146.068773 48.986691 146.068773c-27.055193 0-48.986691-21.931498-48.986691-48.986691 0-27.056216 21.931498-48.987714 48.986691-48.987714l925.734976 0c27.054169 0 48.986691 21.930475 48.986691 48.987714C1023.708358 124.138298 1001.774813 146.068773 974.721667 146.068773z" p-id="20585" ></path>
            <path d="M920.54579 535.681352 546.500768 161.638377c-1.144056-1.146103-2.349511-2.229784-3.603061-3.257184-0.547469-0.450255-1.124614-0.838088-1.684362-1.25969-0.716314-0.539282-1.419326-1.092891-2.164293-1.592264-0.684592-0.456395-1.394766-0.853437-2.096754-1.272993-0.668219-0.402159-1.325182-0.820692-2.01489-1.189082-0.719384-0.385786-1.461281-0.713244-2.196015-1.060145-0.712221-0.338714-1.414209-0.691755-2.145873-0.995677-0.716314-0.295735-1.450025-0.534166-2.176572-0.795109-0.780783-0.282433-1.552356-0.582261-2.349511-0.824785-0.728594-0.217964-1.469468-0.379647-2.204202-0.563842-0.812505-0.206708-1.613754-0.433882-2.442632-0.597611-0.852414-0.167822-1.713015-0.26913-2.573615-0.39295-0.721431-0.103354-1.432629-0.2415-2.164293-0.312108-3.214205-0.318248-6.450922-0.318248-9.66308 0-0.732687 0.070608-1.443885 0.209778-2.165316 0.312108-0.860601 0.12382-1.721201 0.225127-2.575662 0.39295-0.826831 0.163729-1.62808 0.391926-2.440585 0.597611-0.735757 0.184195-1.475608 0.344854-2.204202 0.563842-0.800225 0.242524-1.569752 0.542352-2.351558 0.824785-0.726547 0.260943-1.458211 0.499373-2.173502 0.795109-0.732687 0.303922-1.435699 0.661056-2.14792 0.997724-0.735757 0.344854-1.475608 0.671289-2.194992 1.058099-0.688685 0.36839-1.344624 0.786922-2.013867 1.189082-0.701988 0.419556-1.412163 0.815575-2.096754 1.272993-0.744967 0.49835-1.447978 1.051959-2.164293 1.592264-0.559748 0.421602-1.137916 0.810459-1.684362 1.25969-1.254573 1.027399-2.459005 2.111081-3.605108 3.257184L103.162568 535.681352c-19.130709 19.130709-19.130709 50.14712 0 69.27783s50.146097 19.130709 69.27783 0l290.427602-290.426579 0 609.101525c0 27.054169 21.931498 48.986691 48.986691 48.986691 27.055193 0 48.987714-21.933545 48.987714-48.986691L560.842405 314.532603l290.426579 290.426579c9.565866 9.567913 22.102391 14.347776 34.638915 14.347776 12.537548 0 25.074072-4.779863 34.639938-14.347776C939.676499 585.828472 939.676499 554.812061 920.54579 535.681352z" p-id="20586" ></path>
        </svg>
    </div>

    <!-- 加载 -->
    <div class="bottom-describe">{{isLoadingCompleted ? '已经加载全部' : '上滑加载更多'}}</div>
</div>
</template>

<script>

export default {
    name: 'list',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度
			clientHeight: document.body.offsetHeight || document.documentElement.clientHeight || window.innerHeight, // 设备高度

            /**
             * 搜索框输入
             */
			searchInput: '',

            /**
             * 排序
             * @param {String} distance 距离优先 默认
             * @param {String} good 好评优先
             */
			sortSelect: 'distance', 

            /**
             * 门店类型
             */
			shopTypeSelect: '', // 如果为空, 则表示筛选全部
			shopTypeMenuVisible: false, // 是否显示模态框
			shopTypeList: [ '汽车保养', '汽车维修', '汽车美容', '汽车维修', '汽车美容' ],

            /**
             * 筛选 侧边栏
             */
			filterSelectList: [], // 筛选选中的数据
            isSidebarShow: false, // 侧边栏 - 是否显示
            sidebardefault: [ // 侧边栏 - 重置的数据 
                {
                    title: '外观美容',
                    isMultiple: true, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '手工打蜡',
                            isSelected: true, // 是否选中
                        }, {
                            name: '玻璃镀膜',
                            isSelected: false, // 是否选中
                        }, {
                            name: '车身镀膜',
                            isSelected: false, // 是否选中
                        }, {
                            name: '磨泥打磨',
                            isSelected: false, // 是否选中
                        }, {
                            name: '玻璃打磨',
                            isSelected: false, // 是否选中
                        }, {
                            name: '车身镀晶',
                            isSelected: false, // 是否选中
                        }
                    ]
                }, {
                    title: '内饰美容',
                    isMultiple: true, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '内饰美容',
                            isSelected: false, // 是否选中
                        }
                    ]
                }, {
                    title: '刹车养护',
                    isMultiple: true, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '刹车保养',
                            isSelected: false, // 是否选中
                        }, {
                            name: '更换刹车盘',
                            isSelected: false, // 是否选中
                        }, {
                            name: '更换刹车片',
                            isSelected: false, // 是否选中
                        }
                    ]
                }, {
                    title: '轮胎养护',
                    isMultiple: true, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '补胎·贴片式',
                            isSelected: false, // 是否选中
                        }, {
                            name: '动平衡服务',
                            isSelected: false, // 是否选中
                        }, {
                            name: '四轮定位',
                            isSelected: false, // 是否选中
                        }
                    ]
                }, {
                    title: '空调养护',
                    isMultiple: true, // 多选
                    selectedIndex: null, // 选中的下标
                    list: [
                        {
                            name: '空调清洗',
                            isSelected: false, // 是否选中
                        }, {
                            name: '臭氧杀菌',
                            isSelected: false, // 是否选中
                        }
                    ]
                }
            ],
            sidebarGroup: [], // 侧边栏 - 数据

            /**
             * 产品列表
             */
			products: [
				{
					picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(1).jpg',
					title: '深圳市福特坂田4S店',
					address: '五和地铁站旁',
					distance: '1.55km',
					score: 2, // 门店评分
				}, {
					picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(2).jpg',
					title: '深圳市福特坂田4S店',
					address: '五和地铁站旁',
					distance: '1.55km',
					score: 2, // 门店评分
				}, {
					picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(3).jpg',
					title: '深圳市福特坂田4S店',
					address: '五和地铁站旁',
					distance: '1.55km',
					score: 2, // 门店评分
				}
			],     
	
			// 是否加载成功
			isLoadingCompleted: false, 
        }
    },

    mounted: function () {
        this.sidebarGroup = JSON.parse(JSON.stringify(this.sidebardefault));
    },

    methods: {
        
        /**
         * 点击 排序 and 筛选栏
         * @param {String} condition 排序的条件
         */
        filterHandle: function filterHandle(condition) {
            // const _this = this;
			
			// 距离优先
            if (condition === 'distance') {
                this.filterSelect = 'distance';
            }

            // 好评优先
            if (condition === 'good') {
                this.filterSelect = 'good';
            }

            // 好评优先
            if (condition === 'shopType') {
                this.filterSelect = 'shopType';
            }
        },
        
        /**
         * 门店下拉选择
         * @param {String} condition 排序的条件
         */
		shopTypeHandle: function shopTypeHandle(shopType) {
			this.shopTypeSelect = shopType; // 设置选中
			this.shopTypeMenuVisible = false; // 隐藏下拉模态框
		},

        /**
         * 侧边栏 - 点击 选中
         * @param {Number} groupKey 分模块的下标
         * @param {Number} listKey 分组的下标
         */
        sidebarHandle: function(groupKey, listKey) {
            let newSidebarGroup = this.sidebarGroup.concat(); // 复制一个新的数组
            newSidebarGroup[groupKey].selectedIndex = listKey; // 设置选中的下标
            newSidebarGroup[groupKey].list[listKey].isSelected = !newSidebarGroup[groupKey].list[listKey].isSelected; // 是否选中 设置为相反
            this.sidebarGroup = newSidebarGroup; // 新数组赋值进去
        },

        /**
         * 侧边栏渲染 - 判断是否 选中
         * @param {Boolean} isSelected 当前 - 是否选中
         * @param {Number} targetIndex 当前 - 下标
         * @param {Boolean} isMultiple 模块 - 是否多选
         * @param {Number} selectedIndex 模块 - 选中的下标
         * @return {Boolean} 是否选中
         */
        verifySidebarSelected: function(isSelected, targetIndex, isMultiple, selectedIndex) {
            if (isMultiple) { // 多选
                // 当前选中就返回选中， 未选中就返回未选中
                return isSelected;
            } else { // 单选
                // 当前的下标 和 模块的下标相等则 表示选中, 不相等就返回未选中
                return targetIndex === selectedIndex
            }
        },

        /**
         * 侧边栏 - 点击重置
         */
        sidebarReset: function() {
            this.isSidebarShow = false; // 隐藏侧边栏
        },

        /**
         * 侧边栏 - 点击确认
         */
        sidebarAffirm: function() {
            this.isSidebarShow = false; // 隐藏侧边栏
        },

        /**
         * 跳转到地图列表
         */
		jumpToMap: function jumpToMap() {
			this.$router.push('/list/map/');
		},

        /**
         * 跳转到商品详情
         */
		jumpToDetail: function jumpToDetail() {
			this.$router.push('/list/detail/id');
		},
	},
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

@z-index-shopslist-searchBar: 3; // 搜索栏
@z-index-shopslist-filter: 3; // 排序 and 筛选栏

@z-index-shopslist-shop-type-shade: 1; // 筛选 门店类型 下拉
@z-index-shopslist-shop-type-content: 2; // 筛选 门店类型 下拉

@sidebar-shade-z-index: 4; // 筛选 侧边栏 遮罩层 
@sidebar-main-z-index: 5; // 筛选 侧边栏 主要部分 

.list {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

// 搜索栏
.searchBar {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 55px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    z-index: @z-index-shopslist-searchBar;

    .searchBar-input {
        padding-left: 15px;

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

    .searchBar-icon {
        width: 55px;
        height: 55px;
    }
}

// 排序 and 筛选栏
.filter {
    position: fixed;
    left: 0px;
    top: 56px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    background: #fff;
    border-bottom: 1px solid #ddd;
    z-index: @z-index-shopslist-filter;

    .filter-item {
        position: relative;
        font-size: 14px;
        color: @black2;
        width: 33.33%;

        // 筛选的SVG
        .filter-icon {
            position: relative;
            top: 2.5px;
        }
    }

    // 激活的模块
    .filter-activate-item {
        color: #E50012;

        path {
            fill: #E50012;
        }
    }

    // 分割线
    .filter-item-line {
        position: absolute;
        right: 0px;
        width: 1px;
        height: 40px;

        span {
            display: block;
            height: 18px;
            width: 1px;
            background: #dddddd;
        }
    }
}

// 筛选 门店类型 下拉
.shop-type {
    position: fixed;
    left: 0px;
    top: -160px;
    width: 100%;
    height: 245px;
    background: #fff;
    overflow-y: auto;
    z-index: @z-index-shopslist-shop-type-content;

    transition: top 0.2s;
    -moz-transition: top 0.2s;	/* Firefox 4 */
    -webkit-transition: top 0.2s;	/* Safari 和 Chrome */
    -o-transition: top 0.2s;	/* Opera */

    .shop-type-content {
        padding-left: 15px;
    }
    
    .type-item {
        font-size: 14px;
        line-height: 40px;
        color: @black2;
    }
    
    .type-item-line {
        border-bottom: 1px solid #ddd;
    }

    // 选中状态
    .type-item-selected {
        color: #E50012;
    }
}
.shop-type-show { // 显示
    top: 96px;
}
.shop-type-shade { // 遮罩层
    position: fixed;
    left: 0px;
    top: 96px;
    width: 100%;
    line-height: 40px;
    background: rgba(0, 0, 0, 0.36);
    z-index: @z-index-shopslist-shop-type-shade;
}

// 侧边栏 筛选 
.sidebar {
    position: fixed;
    top: 0px;
    right: -80%;
    height: 100%;
    width: 80%;
    transition: right 0.2s;
    -moz-transition: right 0.2s;	/* Firefox 4 */
    -webkit-transition: right 0.2s;	/* Safari 和 Chrome */
    -o-transition: right 0.2s;	/* Opera */
    background: #fff;
    z-index: @sidebar-main-z-index;

    .sidebar-content {
        height: 100%;
        overflow-y: scroll;
        position: relative;
    }

    // 主要内容区域
    .sidebar-content-main {
        padding: 15px 0px 65px 15px;

        // 一个块部分
        .sidebar-main-block {
            // 标题 
            .sidebar-block-title {
                font-size: 12px;
                color: @black3;
                padding-bottom: 10px;
            }

            // 列表
            .sidebar-block-list {
                overflow: hidden;

                > div {
                    float: left;
                }
            }

            // 项目 
            .sidebar-block-item {
                padding: 0px 10px;
                margin-bottom: 10px;
                margin-right: 10px;
                height: 30px;
                min-width: 60px;
                font-size: 14px;
                line-height: 30px;
                text-align: center;
                color: @black3;
                border: 1px solid #ddd;
                border-radius: 2.5px;
            }

            // 选中的项目
            .sidebar-item-selected {
                color: #e83043;
                border: 1px solid #e83043;
                background: #ffeff0;
            }
        }
    }

    // 底部
    .sidebar-bottom {
        position: absolute;
        bottom: 0px;
        height: 45px;
        width: 100%;

        > div {
            font-size: 14px;
            width: 50%;
            line-height: 45px;
            text-align: center;
        }

        .sidebar-bottom-left {
            color: @black3;
            border-top: 1px solid #ddd;
            background: #fff;
        }

        .sidebar-bottom-right {
            color: #fff;
            background: #e50012;
        }
    }
}

// 侧边栏 筛选 显示
.sidebar-show {
    right: 0px;
}

// 侧边栏 筛选 遮罩
.sidebar-shade {
    position: fixed;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.46);
    z-index: @sidebar-shade-z-index;
}

// 产品列表
.products {
    padding-top: 101px;

    // 框架部分
    .products-item {
        padding-bottom: 5px;

        .products-item-content {
            background: #fff;
            padding: 15px;
        }
    }

    // 门店主要部分下的图片
    .products-item-img {
        width: 90px;
        height: 70px;

        img {
            display: block;
            width: 100%;
            height: 100%;
        }
    }

    // 门店主要部分
    .products-item-main {
        padding-left: 15px;

        .item-main-title {
            color: @black1;
            font-size: 16px;
        }

        // 星星
        .main-describe-score {
            height: 30px;

            .star {
                width: 18px;
            }

            span {
                font-size: 14px;
                color: #e7380c;
                display: block;
                padding-left: 5px;
            }
        }

        .item-main-bottom {
            font-size: 14px;
            color: @black3;

        }
    }

    // 门店下 的服务项
    .content-item-label {
        border-top: 1px solid #ddd;
        background: #f5f5f5;

        .item-label-integral {
            padding: 15px;
            border-bottom: 1px solid #ddd;

            .label-integral-picture {
                width: 75px;
                height: 55px;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }
        }

        .label-integral-describe {
            padding: 0px 10px;

            .integral-describe-title {
                font-size: 14px;
                color: @black2;
                padding-bottom: 5px;
            }

            .integral-describe-other {
                font-size: 14px;
                height: 24px;
                line-height: 24px;

                .describe-other-main {
                    color: #e7380c;

                    span {
                        padding-left: 5px;
                    }
                }

                .describe-other-lable {
                    padding-left: 10px;
                    color: @black3;
                }
            }
        }

        .label-integral-submit {
            width: 70px;
            height: 30px;
            color: #e7380c;
            border: 1px solid #e7380c;
            border-radius: 4px;
            text-align: center;
            line-height: 30px;
        }
    }

    // 跳转
    .content-item-operation {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
        height: 40px;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        color: #ff9800;
        background: #fff;
    }
}

// 返回顶部
.backTop {
    position: fixed;
    bottom: 25px;
    right: 25px;
    width: 40px;
    height: 40px;
    border: 1px solid #ddd;
    border-radius: 40px;

    svg {
        fill: #606266;
    }
}
.backTop:active {
    border: 1px solid #f23030;

    svg {
        fill: #f23030;
    }
}

// 加载
.bottom-describe {
    padding: 25px;
    text-align: center;
    color: @black3;
}

</style>
