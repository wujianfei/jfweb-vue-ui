### jfweb-vue-ui

**模块**

- jf-menu

**安装**

```bash
npm install jfweb-vue-ui --save
```

**使用JfMenu**

```js
import { JfMenu } from 'jfweb-vue-ui'

// 注册
components: {
  JfMenu
},
// data
data() {
  return {
    list: [
      {
        name: '菜单1',
        opened: true,
        children: [
          {
            name: '测试1',
            url: '/docs/use',
            key: '1'
          },
          {
            name: '测试2',
            url: '/docs/use',
            key: '2'
          },
          {
            name: '测试3',
            url: '/docs/use',
            key: '3'
          },
          {
            name: '测试4',
            url: '/docs/use',
            key: '4'
          }
        ]
      },
      {
        name: '菜单2',
        opened: true,
        children: [
          {
            name: '测试5',
            url: '/docs/iframe',
            key: '5'
          },
          {
            name: '测试6',
            url: '/docs/iframe',
            key: '6'
          }
        ]
      }
    ]
  }
}
// 跳转
clickItem({ it, key }) {
  if (it && it.url) {
    this.$router.push({
      path: it.url + '#' + it.key
    })
  }
}
```

