<!-- 评论详情 -->
<template>
<div class="comment">
    <div class="detail-comment-title flex-start-center">
        <div class="comment-title-point flex-rest flex-start-center">
            <div style="padding-right: 5px;">综合评分</div>
            <div class="describe-score-ratingStar flex-start">
                <svg v-for="(empty, key) in new Array(commentPoint)" :key="key" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <path fill="#e7380c" d="M785.352203 933.397493c-4.074805 0-8.151657-0.970094-11.833513-3.007497l-261.311471-142.488225L250.942821 930.388972c-8.343015 4.559852-18.527982 3.8814-26.28669-1.599428-7.760754-5.5279-11.640108-14.987343-10.088776-24.347524l47.578622-285.365306L72.563154 429.470355c-6.594185-6.547113-8.971325-16.295128-6.110161-25.122167 2.814092-8.850575 10.379395-15.397688 19.546172-16.949021l285.512662-47.577598 118.529557-236.989529c4.172019-8.391111 12.803607-13.701047 22.165836-13.701047 9.359158 0 17.992793 5.309936 22.163789 13.701047l118.529557 236.989529 285.511639 47.577598c9.217942 1.551332 16.73208 8.051373 19.593244 16.949021 2.813069 8.875135 0.48607 18.575054-6.109138 25.122167L762.264369 619.077737l47.577598 285.365306c1.50119 9.360182-2.37714 18.819624-10.087753 24.347524C795.487028 931.797042 790.394033 933.397493 785.352203 933.397493z"></path>
                </svg>
                <svg v-for="(empty, reskey) in new Array(5 - commentPoint)" :key="reskey + 5" width="16" height="16" t="1522358298526" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  p-id="2572" xmlns:xlink="http://www.w3.org/1999/xlink">
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

</div>
</template>

<script>

export default {
    name: 'list-comment',

    data () {
        return {
            clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备的宽度

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
        let query = this.$route.query;

        window.document.title = query.storeName; // 将门店名称设置进去
    },

    methods: { },
}

</script>

<style scoped lang="less">
@black1: #303133;
@black2: #606266;
@black3: #909399;
@black4: #C0C4CC;

.comment {
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
}

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

</style>
