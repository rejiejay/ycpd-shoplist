window.onload = function () {
	init.main();
};

// 配置信息类
var config = (function () { // 匿名函数自执行
	// 判断是否测试环境	
	if (window.location.origin === 'file://' || window.location.host === 'store.demo.ichebaoyang.com') {
		// 测试环境
		return {
			url: {
				origin: 'http://store.demo.ichebaoyang.com', // 请求源(服务器地址)
			}
		}

	} else {
		// 线上生产环境
		return {
			url: {
				origin: 'http://ycpdapi.hotgz.com', // 请求源(服务器地址)
			}
		}
	}
})();

// 初始化的类
var init = {
	// vue的实例挂载 (提供给外部访问与测试)
	vueMount: null,

	main: function main() {
		// 实例化 Vue
		this.initVue();
	},

	initVue: function initVue() {
		var _this = this;

		// 路由配置
		var routes = [
			{
				path: '/', // 商家列表
				component: VmMain,
				meta: { title: '商家列表' },
			},
		];

		// 初始化路由配置
		var router = new VueRouter({
			routes: routes
		});
		
		router.beforeEach( function (to, from, next) { // 全局的 beforeEach 守卫

			// 路由发生变化修改页面 title
			if (to.meta.title) {
				document.title = to.meta.title;
			}

			// 表示 跳转 到详情
			if (from.path === '/' && to.path === '/detail') { 
				// 判断 Vue 初始化成功后
				if (_this.vueMount) {
					// 隐藏持久化页面
					_this.vueMount.$data.isInHome = false;
				}
			}
			
			// 表示 从 detail 返回到 主页
			if (from.path === '/detail' && to.path === '/') {
				_this.vueMount.$data.isInHome = true; // 显示持久化页面
			}

			next();
		});

		// 初始化 Vue 到页面
		this.vueMount = new Vue({
			router: router,
			data: {
				isInHome: true, // 页面缓存相关 是否在首页 默认是 true(在首页的情况)
			}
		});

		this.vueMount.$mount('#app');
	}
};

// ajaxs请求类
var ajaxs = {
    /**
     * 获取 车辆品牌 列表
     */
	getBrand: function getBrand() {
		return new Promise(function (resolve, reject) {
			var form = new FormData();
			form.append("action", "GetBrand");
			
			$.ajax({
				url: config.url.carBrandSeriesCode,
				type: "POST",
                data: form,
                processData: false,
                contentType: false,
				success: function(res){
					if (res && res instanceof Array && res.length > 0) {
						resolve(res);
					} else {
						reject('向服务器发起请求查找车辆品牌列表成功, 但是数据有误!');
					}
				},
				error: function (XMLHttpRequest, textStatus, errorThrown) {
					reject('向服务器发起请求查找车辆品牌列表失败, 原因: ' + errorThrown);
				}
			});
		});
	},
};

/**
 * Vue类
 * 商家列表
 */
var VmMain = {
	template: '#shopslist',

	data: function data() {
		return {
			clientWidth: document.body.offsetWidth || document.documentElement.clientWidth || window.innerWidth, // 设备宽度
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
					title: '中国和谐控股豪华汽车维修中心（清 龙路店）',
					address: '五和地铁站旁',
					distance: '1.55km',
				}, {
					picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(2).jpg',
					title: '中国和谐控股豪华汽车维修中心（清 龙路店）',
					address: '五和地铁站旁',
					distance: '1.55km',
				}, {
					picUrl: 'https://ycpd-assets.oss-cn-shenzhen.aliyuncs.com/ycpd/component/captcha-slider/picture/canvas%20(3).jpg',
					title: '中国和谐控股豪华汽车维修中心（清 龙路店）',
					address: '五和地铁站旁',
					distance: '1.55km',
				}
			],     
	
			// 是否加载成功
			isLoadingCompleted: false, 
		};
	},

	mounted: function mounted() { 
        this.sidebarGroup = this.sidebardefault.concat();
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
	},
};

// 抽象的方法
var utils = {
	// 获取URL参数
	loadPageVar: function loadPageVar(sVar) {
		return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	},
};
