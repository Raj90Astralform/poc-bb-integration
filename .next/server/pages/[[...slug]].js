(() => {
var exports = {};
exports.id = 120;
exports.ids = [120,660];
exports.modules = {

/***/ 7754:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderpage_2F_5B_5B_slug_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5B_5B_slug_5D_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_),
  getServerSideProps: () => (/* binding */ getServerSideProps),
  getStaticPaths: () => (/* binding */ next_route_loaderpage_2F_5B_5B_slug_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5B_5B_slug_5D_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths),
  getStaticProps: () => (/* binding */ next_route_loaderpage_2F_5B_5B_slug_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5B_5B_slug_5D_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps),
  reportWebVitals: () => (/* binding */ reportWebVitals),
  routeModule: () => (/* binding */ routeModule),
  unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
  unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
  unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
  unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
  unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
});

// NAMESPACE OBJECT: ./pages/[[...slug]].jsx
var _slug_namespaceObject = {};
__webpack_require__.r(_slug_namespaceObject);
__webpack_require__.d(_slug_namespaceObject, {
  "default": () => (ComposablePage),
  getStaticPaths: () => (getStaticPaths),
  getStaticProps: () => (getStaticProps)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages/module.js
var pages_module = __webpack_require__(3185);
var module_default = /*#__PURE__*/__webpack_require__.n(pages_module);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7182);
// EXTERNAL MODULE: ./node_modules/next/dist/pages/_document.js
var _document = __webpack_require__(2940);
var _document_default = /*#__PURE__*/__webpack_require__.n(_document);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(6004);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "markdown-to-jsx"
const external_markdown_to_jsx_namespaceObject = require("markdown-to-jsx");
var external_markdown_to_jsx_default = /*#__PURE__*/__webpack_require__.n(external_markdown_to_jsx_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Button.jsx


const themeClassMap = {
    default: "border-violet-800 bg-violet-800 text-white hover:bg-violet-600 hover:border-violet-600",
    outline: "border-black bg-transparent text-black hover:text-gray-500 hover:border-gray-500"
};
const Button = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: props.url ?? "/",
        className: `py-3 px-8 inline-block border rounded-md transition-all duration-300 ${themeClassMap[props.theme] ?? themeClassMap["default"]}`,
        "data-sb-field-path": ".button",
        children: /*#__PURE__*/ jsx_runtime.jsx("span", {
            "data-sb-field-path": ".label",
            children: props.label
        })
    });
};

;// CONCATENATED MODULE: ./components/Hero.jsx




const Hero_themeClassMap = {
    imgLeft: "flex-row-reverse",
    imgRight: ""
};
const Hero = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "px-12 py-24 bg-gray-100",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: `flex mx-auto max-w-6xl gap-12 ${Hero_themeClassMap[props.theme] ?? Hero_themeClassMap["imgRight"]}`,
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-xl py-20 mx-auto lg:shrink-0",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h1", {
                            className: "mb-6 text-5xl leading-tight",
                            "data-sb-field-path": ".heading",
                            children: props.heading
                        }),
                        props.body && /*#__PURE__*/ jsx_runtime.jsx((external_markdown_to_jsx_default()), {
                            options: {
                                forceBlock: true
                            },
                            className: "mb-6 text-lg",
                            "data-sb-field-path": ".body",
                            children: props.body
                        }),
                        props.button && /*#__PURE__*/ jsx_runtime.jsx(Button, {
                            ...props.button
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "relative hidden w-full overflow-hidden rounded-md lg:block",
                    children: props.image?.src && /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        src: props.image?.src,
                        alt: props.image?.alt,
                        fill: true,
                        style: {
                            objectFit: "contain"
                        },
                        "data-sb-field-path": ".image"
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./components/Stats.jsx


const Stats_themeClassMap = {
    primary: "bg-violet-800 text-white",
    dark: "bg-gray-600 text-white"
};
const Stats = (props)=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: `py-24 px-12 text-center ${Stats_themeClassMap[props.theme] ?? Stats_themeClassMap["dark"]}`,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "max-w-2xl mx-auto mb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "mb-4 text-4xl sm:text-5xl",
                            "data-sb-field-path": ".heading",
                            children: props.heading
                        }),
                        props.body && /*#__PURE__*/ jsx_runtime.jsx((external_markdown_to_jsx_default()), {
                            options: {
                                forceBlock: true
                            },
                            className: "sm:text-xl",
                            "data-sb-field-path": ".body",
                            children: props.body
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "grid max-w-3xl gap-12 mx-auto sm:grid-cols-3",
                    children: props.stats?.length > 0 && props.stats.map((stat, idx)=>/*#__PURE__*/ jsx_runtime.jsx(StatItem, {
                            theme: props.theme,
                            ...stat,
                            "data-sb-field-path": `.stats.${idx}`
                        }, idx))
                })
            ]
        })
    });
};
const itemThemeClassMap = {
    primary: "bg-violet-700",
    dark: "bg-gray-500"
};
const StatItem = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: `px-4 py-8 rounded-md ${itemThemeClassMap[props.theme] ?? itemThemeClassMap["dark"]}`,
        "data-sb-field-path": props["data-sb-field-path"],
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "mb-3 text-3xl sm:text-4xl",
                "data-sb-field-path": ".value",
                children: props.value
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "text-sm uppercase",
                "data-sb-field-path": ".label",
                children: props.label
            })
        ]
    });
};

;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "glob"
const external_glob_namespaceObject = require("glob");
var external_glob_default = /*#__PURE__*/__webpack_require__.n(external_glob_namespaceObject);
;// CONCATENATED MODULE: external "gray-matter"
const external_gray_matter_namespaceObject = require("gray-matter");
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_namespaceObject);
;// CONCATENATED MODULE: ./utils/content.js




const PAGES_DIR = external_path_default().join(process.cwd(), "content/pages");
function relativePathFromFile(file) {
    return file.replace(PAGES_DIR, "").replace(external_path_default().extname(file), "").replace(/\/index$/g, "/");
}
function pagePathMap() {
    const allPagePaths = external_glob_default().sync(external_path_default().join(PAGES_DIR, "**/*.md"));
    return Object.fromEntries(allPagePaths.map((file)=>[
            relativePathFromFile(file),
            file
        ]));
}
async function getPagePaths() {
    return Object.keys(pagePathMap());
}
async function getPageFromSlug(slug) {
    const absPath = pagePathMap()[slug];
    const rawContent = external_fs_default().readFileSync(absPath, "utf8");
    const { data, content } = external_gray_matter_default()(rawContent);
    return {
        _id: absPath.replace(`${process.cwd()}/`, ""),
        ...data,
        body: content
    };
}

;// CONCATENATED MODULE: ./pages/[[...slug]].jsx




async function getStaticPaths() {
    const paths = await getPagePaths();
    return {
        paths,
        fallback: false
    };
}
async function getStaticProps({ params }) {
    const slug = "/" + (params?.slug ?? [
        ""
    ]).join("/");
    const page = await getPageFromSlug(slug);
    return {
        props: {
            page
        }
    };
}
const componentMap = {
    hero: Hero,
    stats: Stats
};
function ComposablePage({ page }) {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        "data-sb-object-id": page._id,
        children: page.sections?.length ? page.sections.map((section, idx)=>{
            const Component = componentMap[section.type];
            return /*#__PURE__*/ jsx_runtime.jsx("div", {
                "data-sb-field-path": `sections.${idx}`,
                children: /*#__PURE__*/ jsx_runtime.jsx(Component, {
                    ...section
                })
            }, idx);
        }) : /*#__PURE__*/ jsx_runtime.jsx(EmptyState, {})
    });
}
function EmptyState() {
    return  false ? /*#__PURE__*/ 0 : /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {});
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?page=%2F%5B%5B...slug%5D%5D&preferredRegion=&absolutePagePath=private-next-pages%2F%5B%5B...slug%5D%5D.jsx&absoluteAppPath=private-next-pages%2F_app.js&absoluteDocumentPath=next%2Fdist%2Fpages%2F_document&middlewareConfigBase64=e30%3D!

        // Next.js Route Loader
        
        

        // Import the app and document modules.
        
        

        // Import the userland code.
        

        // Re-export the component (should be the default export).
        /* harmony default export */ const next_route_loaderpage_2F_5B_5B_slug_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5B_5B_slug_5D_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(_slug_namespaceObject, "default"));

        // Re-export methods.
        const next_route_loaderpage_2F_5B_5B_slug_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5B_5B_slug_5D_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticProps")
        const next_route_loaderpage_2F_5B_5B_slug_5D_5D_preferredRegion_absolutePagePath_private_next_pages_2F_5B_5B_slug_5D_5D_jsx_absoluteAppPath_private_next_pages_2F_app_js_absoluteDocumentPath_next_2Fdist_2Fpages_2F_document_middlewareConfigBase64_e30_3D_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getStaticPaths")
        const getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "getServerSideProps")
        const config = (0,helpers/* hoist */.l)(_slug_namespaceObject, "config")
        const reportWebVitals = (0,helpers/* hoist */.l)(_slug_namespaceObject, "reportWebVitals")
        

        // Re-export legacy methods.
        const unstable_getStaticProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticProps")
        const unstable_getStaticPaths = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticPaths")
        const unstable_getStaticParams = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getStaticParams")
        const unstable_getServerProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerProps")
        const unstable_getServerSideProps = (0,helpers/* hoist */.l)(_slug_namespaceObject, "unstable_getServerSideProps")

        // Create and export the route module that will be consumed.
        const options = {"definition":{"kind":"PAGES","page":"/[[...slug]]","pathname":"/[[...slug]]","bundlePath":"","filename":""}}
        const routeModule = new (module_default())({
          ...options,
          components: {
            App: _app["default"],
            Document: (_document_default()),
          },
          userland: _slug_namespaceObject,
        })
        
        
    

/***/ }),

/***/ 6004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6764);
/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);


function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
        ...pageProps
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 3076:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4140:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 3100:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/render.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 3918:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 5132:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/get-img-props.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [940,812,636,61], () => (__webpack_exec__(7754)));
module.exports = __webpack_exports__;

})();