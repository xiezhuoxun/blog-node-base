const fetch = require('node-fetch');
const createHttpError = require('http-errors');
const CONFIG = require('../app.config.js');
import { MD5_SUFFIX, send2Client, md5 } from '../util/util.js';
import Api from '../util/Api';
import * as StatusCode from '../util/StatusCode';

const Codes = Api.map(item => item.code);

module.exports = app => {
  app.post('/', (req, res) => {
    try {
      const { actionCode, timestamp } = req.body;
      if (!actionCode) {
        send2Client(res, 200, StatusCode.EMPTY_METHOD);
        return;
      }
      if (!timestamp) {
        send2Client(res, 200, StatusCode.EMPTY_TIMESTAMP);
        return;
      }
      if (Codes.includes(actionCode)) {
        const apiAction = Api.find(item => item.code === actionCode);
        const { action, needData } = apiAction;
        let { data } = req.body;
        if (needData && (data === undefined || data === null || data === "" || Object.keys(data).length === 0)) {
          send2Client(res, 200, StatusCode.EMPTY_REQ_DATA);
          return;
        }
        action(req, res);
      } else {
        send2Client(res, 200, StatusCode.NO_METHOD);
      }
    } catch (error) {
      send2Client(res, 200, { code: 500, message: error.toString() });
    }
  });
}
