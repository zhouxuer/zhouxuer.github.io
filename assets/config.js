export default [
    {
        icon: 'el-icon-menu',
        title: 'Home',
        url: '/'
    },
    {
        icon: 'el-icon-document',
        title: 'Demo',
        children: [
            {
                icon: 'el-icon-star-off',
                title:'demo01',
                url: '/Demo/DemoOne'
            },
            {
               icon: 'el-icon-star-off',
               title: 'demo02',
               url: '/Demo/DemoTwo'
            }
        ]
    },
    {
        icon: 'el-icon-picture',
        title: 'Works',
        url: '/Works'
    },
    {
        icon: 'el-icon-setting',
        title: 'AboutMe',
        url: '/AboutMe'
    },
    {
        icon: 'el-icon-phone-outline',
        title: 'ContactMe',
        url: '/ContactMe'
    },
    {
      icon: 'el-icon-goods',
        title: 'Other',
        url: '/Other'
    }
]