// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    user: ExportUser;
  }
}
