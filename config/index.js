export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wx05d87783bd56c221",
    // 公众号APP_SECRET
    APP_SECRET: "b5a74efaf549545d5174a5bf569d6338",
    // 模板消息id
    TEMPLATE_ID: "kDc9O8zcPmgApQ3Oio8iJcWxpDXJg0bPDtbhO1nTAvc",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["oVnu46A6tsh4noVMJyFkGVj6ZBJw"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "内蒙古",
    // 所在城市
    CITY: "呼和浩特",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS_MESSAGE: [
      {"name": "小火炉", "year": "1995", "date": "08-11"}
    ],

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2021-06-15",
    // 结婚纪念日
    MARRY_DATE: "2023-04-01",


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: ""


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
