"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/index.js
var frontmatter = require("remark-frontmatter");
var gfm = require("remark-gfm");
var extension = /\.tsx$/;
var corndocs = (corndocsConfig) => function withCorndocs(nextConfig = {}) {
  return __spreadProps(__spreadValues({}, nextConfig), {
    webpack(config, options) {
      config.module.rules.push(
        {
          test: extension,
          issuer: (request) => !!request,
          use: [
            options.defaultLoaders.babel,
            {
              loader: require.resolve("../loader"),
              options: {
                corndocsConfig
              }
            }
          ]
        },
        {
          test: /\.mdx?$/,
          use: [
            options.defaultLoaders.babel,
            {
              loader: require.resolve("@mdx-js/loader"),
              options: {
                remarkPlugins: [frontmatter, gfm],
                providerImportSource: "@mdx-js/react"
              }
            }
          ]
        }
      );
      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }
      return config;
    }
  });
};
module.exports = corndocs;
