// This file is created by egg-ts-helper@1.25.6
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAnimate from '../../../app/controller/animate';
import ExportComic from '../../../app/controller/comic';
import ExportConfig from '../../../app/controller/config';
import ExportDanmu from '../../../app/controller/danmu';
import ExportKey from '../../../app/controller/key';
import ExportReport from '../../../app/controller/report';
import ExportShop from '../../../app/controller/shop';
import ExportUser from '../../../app/controller/user';

declare module 'egg' {
  interface IController {
    animate: ExportAnimate;
    comic: ExportComic;
    config: ExportConfig;
    danmu: ExportDanmu;
    key: ExportKey;
    report: ExportReport;
    shop: ExportShop;
    user: ExportUser;
  }
}