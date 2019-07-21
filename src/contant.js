//常量配置
//1:登陆页面的url定义
export const LoginUrl = "/login"
//2:顶部菜单导航
export const TopMenu = [
    {
        title: "通用组件",
        path: "commonComponent",
        key: "commonComponent"
    },
    {
        title: "个人资料",
        path: "privateInfo",
        key: "privateInfo"
    },
    {
        title: "系统设置",
        path: "systemSetting",
        key: "systemSetting"
    }
]
//通用组件的二级路由
export const commonComponentSubMenu = [
    {
        title: "组件级导航",
        key: "componentMenu",
        path: "/componentMenu",
        subMenu: [
            {
                title: "虚拟化表格",
                key: "virtualizedTable",
                path: "/commonComponent/componentMenu/virtualizedTable"
            },
            {
                title:"轮播组件",
                key:"loopComponent",
                path:"/commonComponent/componentMenu/loopComponent"
            }
        ]
    },
    {
        title:"页面级导航",
        key:"pageMenu",
        path:"/pageMenu",
        subMenu:[
            {
                title:"登陆页面",
                key:"loginPage",
                path:"/commonComponent/pageMenu/loginPage"
            },
            {
                title:"表格页面",
                key:"tablePage",
                path:"/commonComponent/pageMenu/tablePage"
            }
        ]
    }
]