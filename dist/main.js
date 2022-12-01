/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_commentsPopupWindow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/commentsPopupWindow.js */ \"./src/modules/commentsPopupWindow.js\");\n\n// import './css/pop-window.css'\n\n\nvar popupContainer = document.getElementById('popup-container');\nvar data = {\n  imgSrc: '/src/assets/logo-pop.png',\n  imgAlt: 'Movie name here',\n  movieName: 'The Princess Bride',\n  season: '1',\n  episode: '2',\n  description: 'Hello,My Name is Inigo Montoya, You killed my father,Prepare to die'\n};\nfunction closeModal() {\n  popupContainer.innerHTML = '';\n}\nvar popup = (0,_modules_commentsPopupWindow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, closeModal);\npopupContainer.append(popup);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/commentsPopupWindow.js":
/*!********************************************!*\
  !*** ./src/modules/commentsPopupWindow.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getComments = function getComments(comments) {\n  var fragment = document.createDocumentFragment();\n  comments.forEach(function (comment) {\n    var li = document.createElement('li');\n    li.textContent = comment;\n    fragment.append(li);\n  });\n  return fragment;\n};\nvar fakeComments = ['Good times', 'Awesome Show', 'Me likey'];\nvar popupWindow = function popupWindow(_ref, closePopup) {\n  var imgSrc = _ref.imgSrc,\n    imgAlt = _ref.imgAlt,\n    movieName = _ref.movieName,\n    season = _ref.season,\n    episode = _ref.episode,\n    description = _ref.description;\n  var mainDiv = document.createElement('div');\n  mainDiv.classList.add('popup-window');\n\n  // start close button\n\n  var closeButton = document.createElement('button');\n  closeButton.classList.add('button-default', 'close-button');\n  var closeIcon = document.createElement('i');\n  closeIcon.classList.add('fa-solid', 'fa-xmark', 'close-icon-fa');\n  closeButton.appendChild(closeIcon);\n\n  // eventListener to close Popup Window\n  closeButton.addEventListener('click', function () {\n    closePopup();\n  });\n\n  // end close button\n\n  // start image div\n  var imgDiv = document.createElement('div');\n  var imgElement = document.createElement('img');\n  imgElement.classList.add('popup-image');\n  imgElement.setAttribute('src', imgSrc);\n  imgElement.setAttribute('alt', imgAlt);\n  imgDiv.appendChild(imgElement);\n  // end image div\n\n  // start show description div\n  var titleDiv = document.createElement('div');\n  titleDiv.classList.add('title-div');\n  var movieHeading = document.createElement('h3');\n  movieHeading.textContent = movieName;\n  var detailsDiv = document.createElement('div');\n  detailsDiv.classList.add('details-div');\n  var seasonSpan = document.createElement('span');\n  seasonSpan.textContent = \"Season : \".concat(season);\n  var episodeSpan = document.createElement('span');\n  episodeSpan.textContent = \"Episode : \".concat(episode);\n  detailsDiv.append(seasonSpan, episodeSpan);\n  var descriptionSpan = document.createElement('span');\n  descriptionSpan.textContent = description;\n  titleDiv.append(movieHeading, detailsDiv, descriptionSpan);\n  // end show descritption div\n\n  // start display comments div\n  var displayCommentsDiv = document.createElement('div');\n  displayCommentsDiv.classList.add('display-comments');\n  var commentTitleDiv = document.createElement('div');\n  commentTitleDiv.classList.add('comment-title');\n  var commentsHeading = document.createElement('h4');\n  commentsHeading.textContent = 'Comments';\n  var commentCountSpan = document.createElement('span');\n  commentCountSpan.setAttribute('id', 'comment-count');\n  var commentCount = 10;\n  commentCountSpan.textContent = \"(\".concat(commentCount, \")\");\n  commentsHeading.append(commentCountSpan);\n  commentTitleDiv.append(commentsHeading);\n  var commentsUL = document.createElement('ul');\n  commentsUL.classList.add('comments-ul');\n\n  //* getComments will return a fragment containing list items of commenst\n  var comments = getComments(fakeComments);\n  commentsUL.append(comments);\n  displayCommentsDiv.append(commentTitleDiv, commentsUL);\n  // end display comments div\n\n  // start New Comments div\n  var newCommentsDiv = document.createElement('div');\n  newCommentsDiv.classList.add('new-comments');\n  var newCommentHeading = document.createElement('h4');\n  newCommentHeading.textContent = 'Add A Comment';\n  var commentsForm = document.createElement('form');\n  commentsForm.classList.add('comments-form');\n  commentsForm.setAttribute('action', '');\n  var nameInput = document.createElement('input');\n  nameInput.setAttribute('type', 'text');\n  nameInput.setAttribute('required', '');\n  nameInput.setAttribute('placeholder', 'Your Name');\n  var commentTextArea = document.createElement('textarea');\n  commentTextArea.setAttribute('required', '');\n  commentTextArea.setAttribute('placeholder', 'Your Comments');\n  commentTextArea.setAttribute('cols', '25');\n  commentTextArea.setAttribute('rows', '3');\n  var commentButton = document.createElement('button');\n  commentButton.classList.add('comment-button', 'button-85');\n  commentButton.innerHTML = 'Comment';\n  commentsForm.append(nameInput, commentTextArea, commentButton);\n  newCommentsDiv.append(newCommentHeading, commentsForm);\n  // end new Comments div\n\n  mainDiv.append(closeButton, imgDiv, titleDiv, displayCommentsDiv, newCommentsDiv);\n  return mainDiv;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popupWindow);\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/commentsPopupWindow.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/pop-window.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/pop-window.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/dust_scratches.png */ \"./src/assets/dust_scratches.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n\\n\\n/* Styling for the popup window */\\n\\n.popup-window1{\\n\\tdisplay:none;\\n\\tvisibility: hidden;\\n}\\n\\n.button-default {\\n  background: none;\\n  color: inherit;\\n  border: none;\\n  padding: 0;\\n  font: inherit;\\n  cursor: pointer;\\n  outline: inherit;\\n}\\n\\n.close-button {\\n  position: absolute;\\n  right: 0;\\n  margin-right: 15px;\\n  font-size: 45px;\\n}\\n\\n.close-icon-fa {\\n  color: rgb(255, 42, 0);\\n}\\n\\n.popup-window {\\n  display: flex;\\n  flex-direction: column;\\n  width: 70%;\\n  border: 5px solid black;\\n  align-items: center;\\n  z-index: 10;\\n  position: fixed;\\n  top: 50%;\\n  left: 50%;\\n\\n  /* bring your own prefixes */\\n  transform: translate(-50%, -50%);\\n  text-align: center;\\n  height: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.popup-image {\\n  width: auto;\\n  height: 250px;\\n}\\n\\n.title-div {\\n  margin: 10px;\\n  width: 350px;\\n}\\n\\n.display-comments {\\n  margin-top: 10px;\\n  margin-bottom: 10px;\\n  overflow-y: scroll;\\n  height: 150px;\\n  text-align: left;\\n  overflow-x: visible;\\n  width: 350px;\\n  padding-left: 5px;\\n  border: 1px solid blue;\\n}\\n\\n.details-div {\\n  display: flex;\\n  width: 70%;\\n  margin: auto;\\n  color: blueviolet;\\n  justify-content: space-between;\\n}\\n\\n.comment-title {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.comments-ul {\\n  list-style-type: none;\\n  text-align: left;\\n  padding-left: 0;\\n}\\n\\n.new-comments {\\n  width: 350px;\\n}\\n\\n.comments-form {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: flex-start;\\n  height: 190px;\\n}\\n\\n.comment-button{\\n\\tmargin-bottom: 10px;\\n\\n}\\n\\n/* CSS */\\n.button-85 {\\n  padding: 0.4em 1.7em;\\n  border: none;\\n  outline: none;\\n  color: rgb(255, 255, 255);\\n  background: #111;\\n  cursor: pointer;\\n  position: relative;\\n  z-index: 0;\\n  border-radius: 10px;\\n  user-select: none;\\n  -webkit-user-select: none;\\n  touch-action: manipulation;\\n}\\n\\n.button-85:before {\\n  content: \\\"\\\";\\n  background: linear-gradient(\\n    45deg,\\n    #ff0000,\\n    #ff7300,\\n    #fffb00,\\n    #48ff00,\\n    #00ffd5,\\n    #002bff,\\n    #7a00ff,\\n    #ff00c8,\\n    #ff0000\\n  );\\n  position: absolute;\\n  top: -2px;\\n  left: -2px;\\n  background-size: 400%;\\n  z-index: -1;\\n  filter: blur(5px);\\n  -webkit-filter: blur(5px);\\n  width: calc(100% + 4px);\\n  height: calc(100% + 4px);\\n  animation: glowing-button-85 20s linear infinite;\\n  transition: opacity 0.3s ease-in-out;\\n  border-radius: 10px;\\n}\\n\\n@keyframes glowing-button-85 {\\n  0% {\\n    background-position: 0 0;\\n  }\\n  50% {\\n    background-position: 400% 0;\\n  }\\n  100% {\\n    background-position: 0 0;\\n  }\\n}\\n\\n.button-85:after {\\n  z-index: -1;\\n  content: \\\"\\\";\\n  position: absolute;\\n  width: 100%;\\n  height: 100%;\\n  background: #222;\\n  left: 0;\\n  top: 0;\\n  border-radius: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/css/pop-window.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_css_pop_window_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js!./css/pop-window.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/pop-window.css\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3__);\n// Imports\n\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../../src/assets/so-white.png */ \"./src/assets/so-white.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_css_pop_window_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_3___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\n  1. Use a more-intuitive box-sizing model.\\n*/\\n*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n}\\n\\n/*\\n  2. Remove default margin\\n*/\\n* {\\n  margin: 0;\\n}\\n\\n/*\\n  3. Allow percentage-based heights in the application\\n*/\\nhtml,\\nbody {\\n  height: 100%;\\n}\\n\\n/*\\n  Typographic tweaks!\\n  4. Add accessible line-height\\n  5. Improve text rendering\\n*/\\nbody {\\n  line-height: 1.5;\\n  -webkit-font-smoothing: antialiased;\\n  font-family: 'Magra', sans-serif;\\n  font-size: 18px;\\n  letter-spacing: 1px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  padding-bottom: 60px;\\n}\\n\\n/*\\n  6. Improve media defaults\\n*/\\nimg,\\npicture,\\nvideo,\\ncanvas,\\nsvg {\\n  display: block;\\n  max-width: 100%;\\n}\\n\\n/*\\n  7. Remove built-in form typography styles\\n*/\\ninput,\\nbutton,\\ntextarea,\\nselect {\\n  font: inherit;\\n}\\n\\n/*\\n  8. Avoid text overflows\\n*/\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6 {\\n  overflow-wrap: break-word;\\n  font-family: 'Metamorphous', cursive;\\n}\\n\\np {\\n  overflow-wrap: break-word;\\n}\\n\\n/*\\n  9. Create a root stacking context\\n*/\\n#root,\\n#__next {\\n  isolation: isolate;\\n}\\n\\n.header {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  background-color: #204ecf;\\n  padding: 10px;\\n}\\n\\n.logo-div {\\n  display: flex;\\n  align-items: center;\\n  color: white;\\n  font-size: 30px;\\n}\\n\\n.movie-icon {\\n  width: 100px;\\n}\\n\\n.nav-link {\\n  width: 350px;\\n  display: flex;\\n  justify-content: space-between;\\n  padding-left: 30px;\\n  padding-right: 30px;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: white;\\n}\\n\\n.footer {\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n  padding: 10px;\\n  font-weight: normal;\\n}\\n\\n.footer-logo-div {\\n  display: flex;\\n  align-items: center;\\n  color: white;\\n  font-size: 25px;\\n}\\n\\n.footer-icon {\\n  width: 70px;\\n  height: auto;\\n}\\n\\nfooter {\\n  width: 100%;\\n  position: fixed;\\n  bottom: 0;\\n  display: flex;\\n  flex-direction: column;\\n  background-color: #204ecf;\\n  color: white;\\n  height: 60px;\\n}\\n\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/dust_scratches.png":
/*!***************************************!*\
  !*** ./src/assets/dust_scratches.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3a1926a3547db7d195be.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/dust_scratches.png?");

/***/ }),

/***/ "./src/assets/so-white.png":
/*!*********************************!*\
  !*** ./src/assets/so-white.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c00e443505e8be1ad7d9.png\";\n\n//# sourceURL=webpack://my-webpack-project/./src/assets/so-white.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;