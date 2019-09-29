const BASE_CODE = 1000;
module.exports = {
    NO_URL: { code: BASE_CODE -6, message: "请求url路径不存在！" },
    EMPTY_REQ_DATA: { code: BASE_CODE - 5, message: "请求参数data为空或不存在！" },
    EMPTY_TIMESTAMP: { code: BASE_CODE - 4, message: "请求时间戳不能为空！" },
    EMPTY_METHOD: { code: BASE_CODE - 3, message: "方法名为空!" },
    NO_METHOD: { code: BASE_CODE - 2, message: "方法名不存在" },
    NO_POST: { code: BASE_CODE - 1, message: "只能使用POST方式请求接口" },
    OK: { code: 0, message: "成功!" },
    NO_USER: { code: BASE_CODE, message: "用户不存在!" },
    ERROR_PWD: { code: BASE_CODE + 1, message: "登录密码错误!" },
    EMPTY_EMAIL: { code: BASE_CODE + 2, message: "用户名不能为空!" },
    EMPTY_PWD: { code: BASE_CODE + 3, message: "登录密码不能为空!" },
    ONLY_ADMIN_USER: { code: BASE_CODE + 4, message: "只有管理员账号才能登录后台!" },
}