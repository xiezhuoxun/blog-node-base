/*
 * @Author: XieZhuoxun(59296309@qq.com)
 * @Date: 2019-08-09 11:16:49
 * @Last Modified by: XieZhuoxun(59296309@qq.com)
 * @Last Modified time: 2019-09-29 15:06:45
 * @TODO:  API请求码(由API+7位数据组成)
 */
const user = require('../routes/user');

const Api = [
    {
        name: "Login",
        code: "API0010001",
        action: user.login,
        needData: true
    },
    {
        name: "Register",
        code: "API0010002",
        action: user.register,
        needData: true
    }
]
module.exports = Api;