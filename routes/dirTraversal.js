import url from "url";
import path from 'path';
import * as express from "express";

const BASE_DIR = '/wwwroot';

exports.dirTraversal = function (req) {
  var server = express();
  var path = path.join(BASE_DIR, req.url);
  server.use(express.static(path));
};
