const BASE_CODE = 1000;
module.exports = {
    NO_METHOD: BASE_CODE - 2,//方法名不存在 
    NO_POST: BASE_CODE - 1,//非POST方法
    OK: 0,
    NO_USER: BASE_CODE,//用户名不存在
    ERROR_PWD: BASE_CODE + 1,//用户密码错误
    EMPTY_EMAIL: BASE_CODE + 2,//用户邮箱为空
    EMPTY_PWD: BASE_CODE + 3,//用户密码为空
    ONLY_ADMIN_USER: BASE_CODE + 4,//只有管理员账号才能登录运营后台
}