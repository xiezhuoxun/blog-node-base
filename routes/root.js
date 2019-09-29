const fetch = require('node-fetch');
const CONFIG = require('../app.config.js');
import { MD5_SUFFIX, responseClient, md5 } from '../util/util.js';
import * as StatusCode from '../util/StatusCode';
const user = require('./user');

module.exports.baseRequest = (req, res) => {
  let { action } = req.body;
  if(!action){
    responseClient(res, 200, StatusCode.NO_METHOD, '方法名不存在！');
    return;
  }
  if(action ==="A000001001"){
    user.login(req, res);
  }
  
};
