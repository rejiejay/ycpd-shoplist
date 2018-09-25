<!-- 门店详情 -->
<template>
<div class="detail">
    <!-- banner图片 -->
    <div class="detail-banner"><img src="https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(3).jpg" /></div>
    <!-- 描述 -->
    <div class="detail-describe">

        <div class="detail-describe-title flex-start-center">
            <div class="describe-title-describe flex-rest">
                <div class="title-describe-main">{{storeName}}</div>
                
                <!-- 评分 -->
                <div class="title-describe-lable flex-start-center">
                    <div class="describe-score-ratingStar flex-start">
                        <svg v-for="(empty, key) in new Array(score)" :key="key" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#e7380c" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                        </svg>
                        <svg v-for="(empty, reskey) in new Array(5 - score)" :key="reskey + 5" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path fill="#dddddd" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                        </svg>
                    </div>
                    <span>{{score}}.0</span>
                </div>
            </div>
            <div class="describe-title-icon">
                <svg t="1531531457993" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1956" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    width="32" height="32">
                    <path d="M507.918859 650.527512c-49.503789-40.346806-106.623387-94.611243-156.090335-155.822216-34.713235-42.89496-65.404683-87.94306-33.707276-119.633303L95.656089 153.242337C63.221866 193.655661-8.620745 386.103763 299.338585 701.174388c324.458887 332.036833 533.74323 261.005742 569.766359 223.573453L652.205814 708.149578C621.886867 738.400983 582.842793 711.503113 507.918859 650.527512zM947.385483 798.906865l0-0.201601c0 0-169.23738-168.702166-169.343809-168.769707-13.381394-13.347623-34.814547-13.078481-48.127376 0.067541l-61.340939 61.375733 217.469138 217.203066c0 0 61.409504-61.176179 61.342986-61.245767l0.165784-0.132013C961.605005 833.148333 960.162074 811.75202 947.385483 798.906865zM396.298428 297.126091l0-0.168854c14.051691-14.083415 12.74589-35.45005 0-48.196964l0-0.234348c0 0-174.132089-173.597897-174.200654-173.597897-13.452005-13.484753-34.884135-13.148069-48.163193 0l-61.342986 61.441228 222.299375 221.961668C334.888924 358.335017 396.298428 297.225356 396.298428 297.126091z" p-id="1957" 
                        fill="#e7380c">
                    </path>
                </svg>
            </div>
        </div>
        
        <div class="describe-lable-content">
            <div class="detail-describe-address flex-start-center">
                <div class="describe-address-icon flex-center">
                    <svg t="1531532557211" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3710" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    width="18" height="18">
                    <path d="M512.660032 64.021106c-150.943804 0-256.796644 104.943121-256.796644 255.842922 0 142.524041 38.32384 292.391327 202.794729 456.861192 32.138978 32.138978 54.001915 54.82363 54.001915 54.82363s21.868053-21.047362 55.644321-54.82363c164.469865-164.469865 199.243857-300.206316 199.243857-456.861192C767.54821 168.963203 663.570067 64.021106 512.660032 64.021106zM523.07729 731.497133c-3.324722 3.324722-6.53381 6.526647-9.619078 9.597589-3.072989-3.088338-6.268774-6.29231-9.572006-9.596566-70.794369-70.794369-119.487372-141.139507-148.862399-215.054961-24.013927-60.427254-35.198663-122.891911-35.198663-196.580191 0-56.58474 18.307971-104.706737 52.943816-139.16555 34.665521-34.487465 83.039251-52.716642 139.892097-52.716642 56.580646 0 104.537891 18.147312 138.687666 52.479235 34.175357 34.358529 52.239781 82.563414 52.239781 139.402957C703.58748 462.552821 673.39176 581.184709 523.07729 731.497133z" p-id="3711" 
                        fill="#909399">
                    </path>
                    <path d="M511.706311 191.942567c-70.64906 0-127.921461 57.272401-127.921461 127.921461s57.272401 127.921461 127.921461 127.921461 127.921461-57.272401 127.921461-127.921461S582.355371 191.942567 511.706311 191.942567zM511.706311 383.823736c-35.32453 0-63.960731-28.636201-63.960731-63.960731s28.636201-63.960731 63.960731-63.960731c35.32453 0 63.960731 28.636201 63.960731 63.960731S547.030841 383.823736 511.706311 383.823736z" p-id="3712" 
                        fill="#909399">
                    </path>
                    <path d="M959.426309 920.401504l0.004093 0.001023 0.001023-4.02671-64.443731-256.539794 0 0c-2.28095-11.498892-12.422937-20.169365-24.592095-20.169365L728.662575 639.666658c-13.848403 0-25.075095 11.226692-25.075095 25.075095l0 13.81054c0 13.848403 11.226692 25.075095 25.075095 25.075095l102.362342 0 48.095391 191.882192L144.291291 895.509581l48.095391-191.882192 102.362342 0c13.848403 0 25.075095-11.226692 25.075095-25.075095l0-13.81054c0-13.848403-11.226692-25.075095-25.075095-25.075095L153.017022 639.666658c-12.169157 0-22.311145 8.670473-24.592095 20.169365l0 0L63.981197 916.375817l0 3.332908 0.022513-0.007163c-0.010233 0.293689-0.022513 0.586354-0.022513 0.88209l0 13.81054c0 13.848403 11.226692 25.075095 25.075095 25.075095l845.299015 0c13.848403 0 25.075095-11.226692 25.075095-25.075095l0-13.81054C959.430402 920.523277 959.426309 920.462902 959.426309 920.401504z" p-id="3713" 
                        fill="#909399">
                    </path>
                </svg>
                
                </div>
                <div class="describe-address-content flex-rest">
                    深圳市龙华新区清龙路原彬峰桂工业园(和平路与清龙路交叉口东200米
                    <span>6.10km</span>
                </div>
                <div class="describe-address-navigation flex-center">
                    <svg t="1531532640425" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6544" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        width="32" height="32">
                        <path d="M931 104L74.12 438.15a10.59 10.59 0 0 0 0 20l345.71 135.43a11.22 11.22 0 0 1 6.28 6l137.37 323.73c3.82 9 17.36 9.13 21.37 0.2l361.23-805.3c4.01-8.93-5.54-17.93-15.08-14.21z m26-10.14" 
                            fill="#26a2ff" p-id="6545"></path>
                    </svg>
                </div>
            </div>
            <div class="lable-content-line"><div class="content-line-main"></div></div>
            <div class="detail-describe-other flex-start-center">
                <div class="describe-other-icon flex-center">
                    <svg t="1531532576072" viewBox="0 0 1026 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4532" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        width="20" height="20">
                        <path d="M531.090286 1005.714286c-272.676571 0-494.518857-221.842286-494.518857-494.518857 0-272.676571 221.842286-494.518857 494.518857-494.518857s494.518857 221.842286 494.518857 494.518857C1025.536 783.872 803.693714 1005.714286 531.090286 1005.714286zM531.090286 89.892571C298.715429 89.892571 109.714286 278.893714 109.714286 511.195429c0 232.374857 189.001143 421.376 421.376 421.376s421.376-189.001143 421.376-421.376C952.393143 278.893714 763.465143 89.892571 531.090286 89.892571z" p-id="4533" 
                            fill="#909399">
                        </path>
                        <path d="M714.459429 807.277714 475.428571 563.492571 475.428571 182.857143 548.571429 182.857143 548.571429 533.650286 766.683429 756.150857Z" p-id="4534" 
                            fill="#909399">
                        </path>
                    </svg>
                </div>
                <div class="describe-other-content">营业时间: 08:30-21:00</div>
                <span></span>
                <div class="describe-other-icon flex-center">
                    <svg t="1531532603023" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5744" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        width="24" height="24">
                        <path d="M872.96 266.24c-12.8 15.36-33.28 33.28-64 61.44-33.28 33.28-79.36 33.28-112.64 0-33.28-33.28-33.28-79.36 0-110.08 30.72-30.72 61.44-66.56 61.44-66.56-87.04-40.96-194.56-25.6-266.24 46.08-66.56 66.56-84.48 158.72-56.32 243.2L158.72 716.8c-40.96 40.96-40.96 107.52 0 148.48 40.96 40.96 107.52 40.96 148.48 0L586.24 588.8c81.92 28.16 176.64 7.68 243.2-56.32 69.12-74.24 84.48-179.2 43.52-266.24z m-81.92 227.84c-58.88 58.88-148.48 69.12-217.6 30.72L268.8 826.88c-20.48 20.48-53.76 20.48-74.24 0-20.48-20.48-20.48-53.76 0-74.24l304.64-302.08c-38.4-69.12-28.16-158.72 30.72-217.6 35.84-35.84 81.92-51.2 128-53.76-48.64 51.2-48.64 133.12 2.56 181.76 51.2 51.2 130.56 51.2 181.76 2.56 0 48.64-17.92 94.72-51.2 130.56z" p-id="5745" 
                            fill="#909399">
                        </path>
                    </svg>
                </div>
                <div class="describe-other-content">工位数: 888</div>
            </div>
        </div>
    </div>

    <!-- 商家列表 -->
    <!-- <div class="detail-list">

        <div class="content-item-label">
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
        </div>
        <div class="content-item-operation">查看本店全部商品 ></div>
    </div> -->

    <!-- 评论 -->
    <div class="detail-comment">
        <div class="detail-comment-title flex-start-center">
            <div class="comment-title-point flex-rest flex-start-center">
                <div style="padding-right: 5px;">综合评分</div>
                <div class="describe-score-ratingStar flex-start">
                    <svg v-for="(empty, key) in new Array(score)" :key="key" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#e7380c" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                    </svg>
                    <svg v-for="(empty, reskey) in new Array(5 - score)" :key="reskey + 5" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path fill="#dddddd" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                    </svg>
                </div>
                <span>{{commentPoint}}.0</span>
            </div>
            <div class="comment-title-count">
                66666 条评价
            </div>
        </div>

        <div class="detail-comment-list">
            <div class="detail-comment-item"
                v-for="(item, key) in comments" 
                :key="key"
            >
                <div class="detail-comment-content">
                    <div class="comment-item-content flex-start">
                        <div class="item-content-portrait">
                            <img :src="item.portrait" alt="portrait" />
                        </div>
                        <div class="item-content-main flex-rest">
                            <div class="content-main-top flex-start">
                                <div class="main-top-name flex-rest">{{item.name}}</div>
                                <div class="main-top-other">{{item.time}}</div>
                            </div>
                            <div class="content-main-score flex-start">
                                <svg v-for="(empty, key) in new Array(item.point)" :key="key" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path fill="#e7380c" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                                </svg>
                                <svg v-for="(empty, reskey) in new Array(5 - item.point)" :key="reskey + 5" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <path fill="#dddddd" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                                </svg>
                            </div>
                            <div class="content-main-describe">{{item.content}}</div>
                        </div>
                    </div>
                </div>

                <div class="comment-item-line" v-if="key !== (comments.length - 1)"></div>
            </div>
        </div>

        <div class="detail-comment-more" @click="jumpToComment">
            查看全部评价 >
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'list-detail',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

            storeName: '中国和谐控股豪华汽车维修中心', // 门店名称
            
			score: 3,        // 门店详情 评分
			commentPoint: 4,        // 综合 评分
			comments: [        // 评分列表
				{
					portrait: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(3).jpg',
					name: '深夜在路边偷井盖的賊',
					time: '6-30 20:20',
					point: 3,
					content: '服务非常周到，热情细致专业！强力推荐！！！'
				}, {
					portrait: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(4).jpg',
					name: '*** (匿名)',
					time: '2017-6-30 20:20',
					point: 4,
					content: '服务非常周到，热情细致专业，强力推荐！服务非 常周到，热情细致专业！强力推荐！！！'
				}, {
					portrait: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(5).jpg',
					name: '*** (匿名)',
					time: '2017-6-30 20:20',
					point: 2,
					content: '服务非常周到，热情细致专业，强力推荐！服务非 常周到，热情细致专业！强力推荐！！！'
				}
			],
        }
    },

    mounted: function () {
    },

    methods: {
        /**
         * 跳转到评论详情页面
         */
        jumpToComment: function jumpToComment() {
			this.$router.push({path: '/list/comment', query: {storeName: this.storeName}});
        }
    },
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

// banner 图片
.detail-banner {
    height: 280px;
    width: 100%;

    img {
        display: block;
        width: 100%;
        height: 100%;
    }
}

// 描述 标题
.detail-describe-title {
    padding: 15px;
    background: #fff;
    border-bottom: 1px solid #ddd;

    .title-describe-main {
        font-size: 18px;
        color: @black1;
    }

    .title-describe-lable {
        height: 30px;
        line-height: 30px;

        span {
            padding-left: 7px;
            font-size: 18px;
            color: #e7380c;
        }
    }

    .describe-title-icon {
        padding-right: 15px;
    }
}

// 描述 下部分
.describe-lable-content {
    padding-left: 15px;
    background: #fff;
    border-bottom: 1px solid #ddd;

    // 描述 地址
    .detail-describe-address {
        padding: 15px 0px;

        .describe-address-content {
            padding-left: 15px;
            line-height: 24px;
            font-size: 14px;
            color: @black3;

            span {
                float: right;
                text-align: right;
            }
        }

        .describe-address-navigation {
            width: 85px;
        }

    }

    // 分割线
    .lable-content-line {
        width: 100%;
        height: 1px;
        background: #ddd;
    }

    .detail-describe-other {
        padding: 15px 0px;
        font-size: 14px;
        color: @black3;

        .describe-other-icon {
            padding-right: 5px;
        }

        span {
            display: block;
            width: 15px;
        }
    }
}

// 商家列表
.detail-list {
    padding-top: 10px;

    .content-item-label {
        border-top: 1px solid #ddd;
        background: #fff;

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

    .content-item-operation {
        border-bottom: 1px solid #ddd;
        height: 40px;
        font-size: 16px;
        text-align: center;
        line-height: 40px;
        color: #ff9800;
        background: #fff;
    }
}

// 评论
.detail-comment {
    padding-top: 10px;
    padding-bottom: 35px;

    .detail-comment-title {
        height: 40px;
        padding: 0px 15px;
        background: #fff;
        border-bottom: 1px solid #ddd;
        color: @black2;

        .comment-title-point {
            font-size: 14px;

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
    }

    .detail-comment-list {
        background: #fff;
        padding-left: 15px;

        .detail-comment-item {

            .detail-comment-content {
                padding-top: 15px;
                padding-bottom: 15px;
            }

            .item-content-portrait {
                width: 30px;
                height: 30px;
                border-radius: 30px;
                overflow: hidden;

                img {
                    display: block;
                    width: 100%;
                    height: 100%;
                }
            }

            .item-content-main {
                padding-left: 10px;
                padding-right: 15px;

                .content-main-top {
                    padding-bottom: 5px;
                    color: @black2;
                }
            }

            .content-main-describe {
                padding-top: 5px;
                color: @black1;
            }
        }

        .comment-item-line {
            width: 100%;
            height: 1px;
            background: #ddd;
        }
    }

    .detail-comment-more {
        height: 50px;
        border-top: 1px solid #ddd;
        line-height: 50px;
        background: #fff;
        text-align: center;
        color: #e7380c;
    }
}


</style>
