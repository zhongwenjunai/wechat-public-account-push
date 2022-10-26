/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7e23f0145b4c59df',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'e5cf600b362a5401cdd2be52732da833',

  PROVINCE: '广东',
  CITY: '连州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小梨',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKgCh6oI7pvfg2abSp2rj8dhDTWM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '2ZMo5E5ViaYtK37UFsAf4mE4DwLmvVU4dh6BIDJ_7LQ',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-08',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '小梨宝贝', year: '1999', date: '06-27',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '啊峻', year: '1998', date: '08-25',
        },
        {
          type: '节日', name: '相恋纪念日', year: '2022', date: '09-04',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-04' },

      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	2ZMo5E5ViaYtK37UFsAf4mE4DwLmvVU4dh6BIDJ_7LQ',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oKgCh6lkjXa4uvXOlifMckyxAn2k',
    }
  ],

}

module.exports = USER_CONFIG

