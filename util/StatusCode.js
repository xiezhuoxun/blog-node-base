const BASE_CODE = 100;
module.exports = {
    OK: 0,
    NO_USER: BASE_CODE,//用户名不存在
    ERROR_PWD: BASE_CODE + 1,//用户密码错误
    EMPTY_EMAIL: BASE_CODE + 2,//用户邮箱为空
    EMPTY_PWD: BASE_CODE + 3,//用户密码为空
}