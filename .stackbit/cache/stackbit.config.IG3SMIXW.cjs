"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// stackbit.config.ts
var stackbit_config_exports = {};
__export(stackbit_config_exports, {
  default: () => stackbit_config_default
});
module.exports = __toCommonJS(stackbit_config_exports);
var import_types = require("../../node_modules/@stackbit/types/dist/index.js");
var import_cms_git = require("../../node_modules/@stackbit/cms-git/dist/index.js");

// .stackbit/models/button.ts
var button = {
  name: "button",
  type: "object",
  fields: [
    { name: "label", type: "string", default: "Get Started" },
    { name: "url", type: "string", default: "/" },
    { name: "theme", type: "enum", options: ["default", "outline"], default: "outline" }
  ]
};

// .stackbit/models/hero.ts
var hero = {
  name: "hero",
  type: "object",
  fields: [
    { name: "heading", type: "string" },
    { name: "body", type: "markdown" },
    {
      name: "image",
      type: "object",
      fields: [
        { name: "src", type: "image", default: "/images/fpo-shapes.png" },
        { name: "alt", type: "string" }
      ]
    },
    { name: "button", type: "model", models: ["button"] },
    { name: "theme", type: "enum", options: ["imgLeft", "imgRight"] }
  ]
};

// .stackbit/models/page.ts
var page = {
  name: "page",
  type: "page",
  hideContent: true,
  urlPath: "/{slug}",
  filePath: "content/pages/{slug}.md",
  fields: [
    { name: "title", type: "string", required: true },
    { name: "sections", type: "list", items: { type: "model", models: ["hero", "stats"] } }
  ]
};

// .stackbit/models/stats.ts
var stats = {
  name: "stats",
  type: "object",
  fields: [
    { name: "heading", type: "string" },
    { name: "body", type: "markdown" },
    {
      name: "stats",
      type: "list",
      items: {
        type: "object",
        fields: [
          { name: "label", type: "string", default: "Five-star reviews" },
          { name: "value", type: "string", default: "5M" }
        ]
      }
    },
    { name: "theme", type: "enum", options: ["primary", "dark"] }
  ]
};

// stackbit.config.ts
var stackbit_config_default = (0, import_types.defineStackbitConfig)({
  stackbitVersion: "~0.6.0",
  ssgName: "nextjs",
  nodeVersion: "16",
  contentSources: [
    new import_cms_git.GitContentSource({
      rootPath: "/Users/rajdeepchowdhuri/Desktop/R&D/CAA/caa-poc-temp/caa-poc-temp",
      contentDirs: ["content"],
      models: [button, hero, page, stats],
      assetsConfig: {
        referenceType: "static",
        staticDir: "public",
        uploadDir: "images",
        publicPath: "/"
      }
    })
  ]
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=stackbit.config.IG3SMIXW.cjs.map
