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

			// 输入
			searchInput: '',

			// 产品列表
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

	mounted: function mounted() { },

	methods: {
	},
};

// 抽象的方法
var utils = {
	// 获取URL参数
	loadPageVar: function loadPageVar(sVar) {
		return decodeURI(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURI(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));
	},
};
