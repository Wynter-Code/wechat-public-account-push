/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx7cd33071c528e910',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '4a746f27599a0ff1db4f5c8f9be82393',

  PROVINCE: '河南',
  CITY: '周口',

  USERS: [
    {
      // 想要发送的人的名字
      name: '可可小宝儿',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRxHe7ZdiwsDbdb2-O7DJebQ_zDk',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'MI7tEOU-JhipG1PJg65-Ku-Kot2l0Wk0SEjD_QNPoXM',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '10-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '可可小宝儿', year: '2003', date: '09-07',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        // {
        //   type: '生日', name: '希希小宝儿', year: '2003', date: '10-02',
        // },
        // {
        //   type: '节日', name: '相识纪念日', year: '2023', date: '01-16',
        // },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'l_day', date: '2023-01-09' },
        // 结婚纪念日
        // { keyword: 'marry_day', date: '2022-09-09' },
        // 退伍日
        // { keyword: 'ex_day', date: '2022-09-10' }
        // 你可以不断按格式往下增加
        // ...
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'FuKAnPuK8Tv8a5qM84FRsG-4bbjgp1IguE65FpZEvjA',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oRxHe7erY8g51q5oSoqAO2ZxwOKo',
    }
  ],

}

module.exports = USER_CONFIG

