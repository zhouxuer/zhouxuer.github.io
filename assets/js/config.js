const httpUrl = 'https://gist.githubusercontent.com/JoshuaYang/37ed2ca102efe190315c94b695e5833e/raw/136ea13c39867b40757625ddd99714f66ff89a13/fakeData.json';
const navData = [
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
                title: 'demoOne',
                url: '/Demo/DemoOne'
            },
            {
                icon: 'el-icon-star-off',
                title: 'demoTwo',
                url: '/Demo/DemoTwo'
            },
            {
                icon: 'el-icon-star-off',
                title: 'demoThree',
                url: '/Demo/DemoThree'
            },
            {
                icon: 'el-icon-star-off',
                title: 'demoFour',
                url: '/Demo/DemoFour'
            },
            {
                icon: 'el-icon-star-off',
                title: 'demoFive',
                url: '/Demo/DemoFive'
            },
            {
                icon: 'el-icon-star-off',
                title: 'demoSix',
                url: '/Demo/DemoSix'
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
];

export default {
    httpUrl,
    navData
}
