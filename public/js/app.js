/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(17);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(2);


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__ (3);
	__webpack_require__ (7);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(6)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js!./no-op.js", function() {
				var newContent = require("!!./../css-loader/index.js!./../resolve-url-loader/index.js!./../sass-loader/index.js?sourceMap!./lib/bootstrap.styles.loader.js!./no-op.js");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\n\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n}\n\nbody {\n  margin: 0;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n[hidden],\ntemplate {\n  display: none;\n}\n\na {\n  background-color: transparent;\n}\n\na:active {\n  outline: 0;\n}\n\na:hover {\n  outline: 0;\n}\n\nabbr[title] {\n  border-bottom: 1px dotted;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\ndfn {\n  font-style: italic;\n}\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\nmark {\n  background: #ff0;\n  color: #000;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nimg {\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0;\n}\n\nbutton {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\ninput {\n  line-height: normal;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box;\n}\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\nlegend {\n  border: 0;\n  padding: 0;\n}\n\ntextarea {\n  overflow: auto;\n}\n\noptgroup {\n  font-weight: bold;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    text-shadow: none !important;\n    box-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  abbr[title]::after {\n    content: \" (\" attr(title) \")\";\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n\n  .navbar {\n    display: none;\n  }\n\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n\n  .label {\n    border: 1px solid #000;\n  }\n\n  .table {\n    border-collapse: collapse !important;\n  }\n\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\n@-moz-viewport {\n  width: device-width;\n}\n\n@-ms-viewport {\n  width: device-width;\n}\n\n@-o-viewport {\n  width: device-width;\n}\n\n@-webkit-viewport {\n  width: device-width;\n}\n\n@viewport {\n  width: device-width;\n}\n\nhtml {\n  font-size: 16px;\n  -webkit-tap-highlight-color: transparent;\n}\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #373a3c;\n  background-color: #fff;\n}\n\n[tabindex=\"-1\"]:focus {\n  outline: none !important;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 0;\n  margin-bottom: .5rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #818a91;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: bold;\n}\n\ndd {\n  margin-bottom: .5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\na {\n  color: #0275d8;\n  text-decoration: none;\n}\n\na:focus,\na:hover {\n  color: #014c8c;\n  text-decoration: underline;\n}\n\na:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\npre {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n}\n\n[role=\"button\"] {\n  cursor: pointer;\n}\n\na,\narea,\nbutton,\n[role=\"button\"],\ninput,\nlabel,\nselect,\nsummary,\ntextarea {\n  touch-action: manipulation;\n}\n\ntable {\n  background-color: transparent;\n}\n\ncaption {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  color: #818a91;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: left;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: .5rem;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\ntextarea {\n  margin: 0;\n  line-height: inherit;\n  border-radius: 0;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: .5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n}\n\ninput[type=\"search\"] {\n  box-sizing: inherit;\n  -webkit-appearance: none;\n}\n\noutput {\n  display: inline-block;\n}\n\n[hidden] {\n  display: none !important;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  margin-bottom: 0.5rem;\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\nh5 {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\n.h1 {\n  font-size: 2.5rem;\n}\n\n.h2 {\n  font-size: 2rem;\n}\n\n.h3 {\n  font-size: 1.75rem;\n}\n\n.h4 {\n  font-size: 1.5rem;\n}\n\n.h5 {\n  font-size: 1.25rem;\n}\n\n.h6 {\n  font-size: 1rem;\n}\n\n.lead {\n  font-size: 1.25rem;\n  font-weight: 300;\n}\n\n.display-1 {\n  font-size: 6rem;\n  font-weight: 300;\n}\n\n.display-2 {\n  font-size: 5.5rem;\n  font-weight: 300;\n}\n\n.display-3 {\n  font-size: 4.5rem;\n  font-weight: 300;\n}\n\n.display-4 {\n  font-size: 3.5rem;\n  font-weight: 300;\n}\n\nhr {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border: 0;\n  border-top: 1px solid rgba(0, 0, 0, 0.1);\n}\n\nsmall,\n.small {\n  font-size: 80%;\n  font-weight: normal;\n}\n\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-inline-item {\n  display: inline-block;\n}\n\n.list-inline-item:not(:last-child) {\n  margin-right: 5px;\n}\n\n.dl-horizontal {\n  margin-right: -1.875rem;\n  margin-left: -1.875rem;\n}\n\n.dl-horizontal::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\n\n.blockquote {\n  padding: 0.5rem 1rem;\n  margin-bottom: 1rem;\n  font-size: 1.25rem;\n  border-left: 0.25rem solid #eceeef;\n}\n\n.blockquote-footer {\n  display: block;\n  font-size: 80%;\n  line-height: 1.5;\n  color: #818a91;\n}\n\n.blockquote-footer::before {\n  content: \"\\2014   \\A0\";\n}\n\n.blockquote-reverse {\n  padding-right: 1rem;\n  padding-left: 0;\n  text-align: right;\n  border-right: 0.25rem solid #eceeef;\n  border-left: 0;\n}\n\n.blockquote-reverse .blockquote-footer::before {\n  content: \"\";\n}\n\n.blockquote-reverse .blockquote-footer::after {\n  content: \"\\A0   \\2014\";\n}\n\n.img-fluid {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-rounded {\n  border-radius: 0.3rem;\n}\n\n.img-thumbnail {\n  padding: 0.25rem;\n  line-height: 1.5;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 0.25rem;\n  transition: all .2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n}\n\n.img-circle {\n  border-radius: 50%;\n}\n\n.figure {\n  display: inline-block;\n}\n\n.figure-img {\n  margin-bottom: 0.5rem;\n  line-height: 1;\n}\n\n.figure-caption {\n  font-size: 90%;\n  color: #818a91;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\n\ncode {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #bd4147;\n  background-color: #f7f7f9;\n  border-radius: 0.25rem;\n}\n\nkbd {\n  padding: .2rem .4rem;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 0.2rem;\n}\n\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  font-size: 90%;\n  line-height: 1.5;\n  color: #373a3c;\n}\n\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  background-color: transparent;\n  border-radius: 0;\n}\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n\n.container {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n\n@media (min-width: 544px) {\n  .container {\n    max-width: 576px;\n  }\n}\n\n@media (min-width: 768px) {\n  .container {\n    max-width: 720px;\n  }\n}\n\n@media (min-width: 992px) {\n  .container {\n    max-width: 940px;\n  }\n}\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px;\n  }\n}\n\n.container-fluid {\n  margin-left: auto;\n  margin-right: auto;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  margin-left: -0.9375rem;\n  margin-right: -0.9375rem;\n}\n\n.col-xs-1,\n.col-xs-2,\n.col-xs-3,\n.col-xs-4,\n.col-xs-5,\n.col-xs-6,\n.col-xs-7,\n.col-xs-8,\n.col-xs-9,\n.col-xs-10,\n.col-xs-11,\n.col-xs-12,\n.col-sm-1,\n.col-sm-2,\n.col-sm-3,\n.col-sm-4,\n.col-sm-5,\n.col-sm-6,\n.col-sm-7,\n.col-sm-8,\n.col-sm-9,\n.col-sm-10,\n.col-sm-11,\n.col-sm-12,\n.col-md-1,\n.col-md-2,\n.col-md-3,\n.col-md-4,\n.col-md-5,\n.col-md-6,\n.col-md-7,\n.col-md-8,\n.col-md-9,\n.col-md-10,\n.col-md-11,\n.col-md-12,\n.col-lg-1,\n.col-lg-2,\n.col-lg-3,\n.col-lg-4,\n.col-lg-5,\n.col-lg-6,\n.col-lg-7,\n.col-lg-8,\n.col-lg-9,\n.col-lg-10,\n.col-lg-11,\n.col-lg-12,\n.col-xl-1,\n.col-xl-2,\n.col-xl-3,\n.col-xl-4,\n.col-xl-5,\n.col-xl-6,\n.col-xl-7,\n.col-xl-8,\n.col-xl-9,\n.col-xl-10,\n.col-xl-11,\n.col-xl-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 0.9375rem;\n  padding-right: 0.9375rem;\n}\n\n.col-xs-1 {\n  flex: 0 0 8.33333%;\n}\n\n.col-xs-2 {\n  flex: 0 0 16.66667%;\n}\n\n.col-xs-3 {\n  flex: 0 0 25%;\n}\n\n.col-xs-4 {\n  flex: 0 0 33.33333%;\n}\n\n.col-xs-5 {\n  flex: 0 0 41.66667%;\n}\n\n.col-xs-6 {\n  flex: 0 0 50%;\n}\n\n.col-xs-7 {\n  flex: 0 0 58.33333%;\n}\n\n.col-xs-8 {\n  flex: 0 0 66.66667%;\n}\n\n.col-xs-9 {\n  flex: 0 0 75%;\n}\n\n.col-xs-10 {\n  flex: 0 0 83.33333%;\n}\n\n.col-xs-11 {\n  flex: 0 0 91.66667%;\n}\n\n.col-xs-12 {\n  flex: 0 0 100%;\n}\n\n.col-xs-pull-0 {\n  right: auto;\n}\n\n.col-xs-pull-1 {\n  right: 8.33333%;\n}\n\n.col-xs-pull-2 {\n  right: 16.66667%;\n}\n\n.col-xs-pull-3 {\n  right: 25%;\n}\n\n.col-xs-pull-4 {\n  right: 33.33333%;\n}\n\n.col-xs-pull-5 {\n  right: 41.66667%;\n}\n\n.col-xs-pull-6 {\n  right: 50%;\n}\n\n.col-xs-pull-7 {\n  right: 58.33333%;\n}\n\n.col-xs-pull-8 {\n  right: 66.66667%;\n}\n\n.col-xs-pull-9 {\n  right: 75%;\n}\n\n.col-xs-pull-10 {\n  right: 83.33333%;\n}\n\n.col-xs-pull-11 {\n  right: 91.66667%;\n}\n\n.col-xs-pull-12 {\n  right: 100%;\n}\n\n.col-xs-push-0 {\n  left: auto;\n}\n\n.col-xs-push-1 {\n  left: 8.33333%;\n}\n\n.col-xs-push-2 {\n  left: 16.66667%;\n}\n\n.col-xs-push-3 {\n  left: 25%;\n}\n\n.col-xs-push-4 {\n  left: 33.33333%;\n}\n\n.col-xs-push-5 {\n  left: 41.66667%;\n}\n\n.col-xs-push-6 {\n  left: 50%;\n}\n\n.col-xs-push-7 {\n  left: 58.33333%;\n}\n\n.col-xs-push-8 {\n  left: 66.66667%;\n}\n\n.col-xs-push-9 {\n  left: 75%;\n}\n\n.col-xs-push-10 {\n  left: 83.33333%;\n}\n\n.col-xs-push-11 {\n  left: 91.66667%;\n}\n\n.col-xs-push-12 {\n  left: 100%;\n}\n\n.col-xs-offset-0 {\n  margin-left: 0%;\n}\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%;\n}\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%;\n}\n\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%;\n}\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%;\n}\n\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%;\n}\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%;\n}\n\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%;\n}\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%;\n}\n\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n\n@media (min-width: 544px) {\n  .col-sm-1 {\n    flex: 0 0 8.33333%;\n  }\n\n  .col-sm-2 {\n    flex: 0 0 16.66667%;\n  }\n\n  .col-sm-3 {\n    flex: 0 0 25%;\n  }\n\n  .col-sm-4 {\n    flex: 0 0 33.33333%;\n  }\n\n  .col-sm-5 {\n    flex: 0 0 41.66667%;\n  }\n\n  .col-sm-6 {\n    flex: 0 0 50%;\n  }\n\n  .col-sm-7 {\n    flex: 0 0 58.33333%;\n  }\n\n  .col-sm-8 {\n    flex: 0 0 66.66667%;\n  }\n\n  .col-sm-9 {\n    flex: 0 0 75%;\n  }\n\n  .col-sm-10 {\n    flex: 0 0 83.33333%;\n  }\n\n  .col-sm-11 {\n    flex: 0 0 91.66667%;\n  }\n\n  .col-sm-12 {\n    flex: 0 0 100%;\n  }\n\n  .col-sm-pull-0 {\n    right: auto;\n  }\n\n  .col-sm-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-sm-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n\n  .col-sm-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-sm-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n\n  .col-sm-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-sm-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n\n  .col-sm-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-sm-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n\n  .col-sm-push-0 {\n    left: auto;\n  }\n\n  .col-sm-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-sm-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-sm-push-3 {\n    left: 25%;\n  }\n\n  .col-sm-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-sm-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-sm-push-6 {\n    left: 50%;\n  }\n\n  .col-sm-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-sm-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-sm-push-9 {\n    left: 75%;\n  }\n\n  .col-sm-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-sm-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-sm-push-12 {\n    left: 100%;\n  }\n\n  .col-sm-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-sm-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-sm-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-sm-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-sm-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-sm-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-sm-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-sm-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-sm-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-1 {\n    flex: 0 0 8.33333%;\n  }\n\n  .col-md-2 {\n    flex: 0 0 16.66667%;\n  }\n\n  .col-md-3 {\n    flex: 0 0 25%;\n  }\n\n  .col-md-4 {\n    flex: 0 0 33.33333%;\n  }\n\n  .col-md-5 {\n    flex: 0 0 41.66667%;\n  }\n\n  .col-md-6 {\n    flex: 0 0 50%;\n  }\n\n  .col-md-7 {\n    flex: 0 0 58.33333%;\n  }\n\n  .col-md-8 {\n    flex: 0 0 66.66667%;\n  }\n\n  .col-md-9 {\n    flex: 0 0 75%;\n  }\n\n  .col-md-10 {\n    flex: 0 0 83.33333%;\n  }\n\n  .col-md-11 {\n    flex: 0 0 91.66667%;\n  }\n\n  .col-md-12 {\n    flex: 0 0 100%;\n  }\n\n  .col-md-pull-0 {\n    right: auto;\n  }\n\n  .col-md-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-md-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-md-pull-3 {\n    right: 25%;\n  }\n\n  .col-md-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-md-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-md-pull-6 {\n    right: 50%;\n  }\n\n  .col-md-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-md-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-md-pull-9 {\n    right: 75%;\n  }\n\n  .col-md-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-md-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-md-pull-12 {\n    right: 100%;\n  }\n\n  .col-md-push-0 {\n    left: auto;\n  }\n\n  .col-md-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-md-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-md-push-3 {\n    left: 25%;\n  }\n\n  .col-md-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-md-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-md-push-6 {\n    left: 50%;\n  }\n\n  .col-md-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-md-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-md-push-9 {\n    left: 75%;\n  }\n\n  .col-md-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-md-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-md-push-12 {\n    left: 100%;\n  }\n\n  .col-md-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-md-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-md-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-md-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-md-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-md-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-md-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-md-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-md-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg-1 {\n    flex: 0 0 8.33333%;\n  }\n\n  .col-lg-2 {\n    flex: 0 0 16.66667%;\n  }\n\n  .col-lg-3 {\n    flex: 0 0 25%;\n  }\n\n  .col-lg-4 {\n    flex: 0 0 33.33333%;\n  }\n\n  .col-lg-5 {\n    flex: 0 0 41.66667%;\n  }\n\n  .col-lg-6 {\n    flex: 0 0 50%;\n  }\n\n  .col-lg-7 {\n    flex: 0 0 58.33333%;\n  }\n\n  .col-lg-8 {\n    flex: 0 0 66.66667%;\n  }\n\n  .col-lg-9 {\n    flex: 0 0 75%;\n  }\n\n  .col-lg-10 {\n    flex: 0 0 83.33333%;\n  }\n\n  .col-lg-11 {\n    flex: 0 0 91.66667%;\n  }\n\n  .col-lg-12 {\n    flex: 0 0 100%;\n  }\n\n  .col-lg-pull-0 {\n    right: auto;\n  }\n\n  .col-lg-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-lg-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n\n  .col-lg-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-lg-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n\n  .col-lg-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-lg-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n\n  .col-lg-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-lg-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n\n  .col-lg-push-0 {\n    left: auto;\n  }\n\n  .col-lg-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-lg-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-lg-push-3 {\n    left: 25%;\n  }\n\n  .col-lg-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-lg-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-lg-push-6 {\n    left: 50%;\n  }\n\n  .col-lg-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-lg-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-lg-push-9 {\n    left: 75%;\n  }\n\n  .col-lg-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-lg-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-lg-push-12 {\n    left: 100%;\n  }\n\n  .col-lg-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-lg-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-lg-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-lg-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-lg-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-lg-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-lg-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-lg-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-lg-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl-1 {\n    flex: 0 0 8.33333%;\n  }\n\n  .col-xl-2 {\n    flex: 0 0 16.66667%;\n  }\n\n  .col-xl-3 {\n    flex: 0 0 25%;\n  }\n\n  .col-xl-4 {\n    flex: 0 0 33.33333%;\n  }\n\n  .col-xl-5 {\n    flex: 0 0 41.66667%;\n  }\n\n  .col-xl-6 {\n    flex: 0 0 50%;\n  }\n\n  .col-xl-7 {\n    flex: 0 0 58.33333%;\n  }\n\n  .col-xl-8 {\n    flex: 0 0 66.66667%;\n  }\n\n  .col-xl-9 {\n    flex: 0 0 75%;\n  }\n\n  .col-xl-10 {\n    flex: 0 0 83.33333%;\n  }\n\n  .col-xl-11 {\n    flex: 0 0 91.66667%;\n  }\n\n  .col-xl-12 {\n    flex: 0 0 100%;\n  }\n\n  .col-xl-pull-0 {\n    right: auto;\n  }\n\n  .col-xl-pull-1 {\n    right: 8.33333%;\n  }\n\n  .col-xl-pull-2 {\n    right: 16.66667%;\n  }\n\n  .col-xl-pull-3 {\n    right: 25%;\n  }\n\n  .col-xl-pull-4 {\n    right: 33.33333%;\n  }\n\n  .col-xl-pull-5 {\n    right: 41.66667%;\n  }\n\n  .col-xl-pull-6 {\n    right: 50%;\n  }\n\n  .col-xl-pull-7 {\n    right: 58.33333%;\n  }\n\n  .col-xl-pull-8 {\n    right: 66.66667%;\n  }\n\n  .col-xl-pull-9 {\n    right: 75%;\n  }\n\n  .col-xl-pull-10 {\n    right: 83.33333%;\n  }\n\n  .col-xl-pull-11 {\n    right: 91.66667%;\n  }\n\n  .col-xl-pull-12 {\n    right: 100%;\n  }\n\n  .col-xl-push-0 {\n    left: auto;\n  }\n\n  .col-xl-push-1 {\n    left: 8.33333%;\n  }\n\n  .col-xl-push-2 {\n    left: 16.66667%;\n  }\n\n  .col-xl-push-3 {\n    left: 25%;\n  }\n\n  .col-xl-push-4 {\n    left: 33.33333%;\n  }\n\n  .col-xl-push-5 {\n    left: 41.66667%;\n  }\n\n  .col-xl-push-6 {\n    left: 50%;\n  }\n\n  .col-xl-push-7 {\n    left: 58.33333%;\n  }\n\n  .col-xl-push-8 {\n    left: 66.66667%;\n  }\n\n  .col-xl-push-9 {\n    left: 75%;\n  }\n\n  .col-xl-push-10 {\n    left: 83.33333%;\n  }\n\n  .col-xl-push-11 {\n    left: 91.66667%;\n  }\n\n  .col-xl-push-12 {\n    left: 100%;\n  }\n\n  .col-xl-offset-0 {\n    margin-left: 0%;\n  }\n\n  .col-xl-offset-1 {\n    margin-left: 8.33333%;\n  }\n\n  .col-xl-offset-2 {\n    margin-left: 16.66667%;\n  }\n\n  .col-xl-offset-3 {\n    margin-left: 25%;\n  }\n\n  .col-xl-offset-4 {\n    margin-left: 33.33333%;\n  }\n\n  .col-xl-offset-5 {\n    margin-left: 41.66667%;\n  }\n\n  .col-xl-offset-6 {\n    margin-left: 50%;\n  }\n\n  .col-xl-offset-7 {\n    margin-left: 58.33333%;\n  }\n\n  .col-xl-offset-8 {\n    margin-left: 66.66667%;\n  }\n\n  .col-xl-offset-9 {\n    margin-left: 75%;\n  }\n\n  .col-xl-offset-10 {\n    margin-left: 83.33333%;\n  }\n\n  .col-xl-offset-11 {\n    margin-left: 91.66667%;\n  }\n\n  .col-xl-offset-12 {\n    margin-left: 100%;\n  }\n}\n\n.col-xs-first {\n  order: -1;\n}\n\n.col-xs-last {\n  order: 1;\n}\n\n@media (min-width: 544px) {\n  .col-sm-first {\n    order: -1;\n  }\n\n  .col-sm-last {\n    order: 1;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-first {\n    order: -1;\n  }\n\n  .col-md-last {\n    order: 1;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg-first {\n    order: -1;\n  }\n\n  .col-lg-last {\n    order: 1;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl-first {\n    order: -1;\n  }\n\n  .col-xl-last {\n    order: 1;\n  }\n}\n\n.row-xs-top {\n  align-items: flex-start;\n}\n\n.row-xs-center {\n  align-items: center;\n}\n\n.row-xs-bottom {\n  align-items: flex-end;\n}\n\n@media (min-width: 544px) {\n  .row-sm-top {\n    align-items: flex-start;\n  }\n\n  .row-sm-center {\n    align-items: center;\n  }\n\n  .row-sm-bottom {\n    align-items: flex-end;\n  }\n}\n\n@media (min-width: 768px) {\n  .row-md-top {\n    align-items: flex-start;\n  }\n\n  .row-md-center {\n    align-items: center;\n  }\n\n  .row-md-bottom {\n    align-items: flex-end;\n  }\n}\n\n@media (min-width: 992px) {\n  .row-lg-top {\n    align-items: flex-start;\n  }\n\n  .row-lg-center {\n    align-items: center;\n  }\n\n  .row-lg-bottom {\n    align-items: flex-end;\n  }\n}\n\n@media (min-width: 1200px) {\n  .row-xl-top {\n    align-items: flex-start;\n  }\n\n  .row-xl-center {\n    align-items: center;\n  }\n\n  .row-xl-bottom {\n    align-items: flex-end;\n  }\n}\n\n.col-xs-top {\n  align-self: flex-start;\n}\n\n.col-xs-center {\n  align-self: center;\n}\n\n.col-xs-bottom {\n  align-self: flex-end;\n}\n\n@media (min-width: 544px) {\n  .col-sm-top {\n    align-self: flex-start;\n  }\n\n  .col-sm-center {\n    align-self: center;\n  }\n\n  .col-sm-bottom {\n    align-self: flex-end;\n  }\n}\n\n@media (min-width: 768px) {\n  .col-md-top {\n    align-self: flex-start;\n  }\n\n  .col-md-center {\n    align-self: center;\n  }\n\n  .col-md-bottom {\n    align-self: flex-end;\n  }\n}\n\n@media (min-width: 992px) {\n  .col-lg-top {\n    align-self: flex-start;\n  }\n\n  .col-lg-center {\n    align-self: center;\n  }\n\n  .col-lg-bottom {\n    align-self: flex-end;\n  }\n}\n\n@media (min-width: 1200px) {\n  .col-xl-top {\n    align-self: flex-start;\n  }\n\n  .col-xl-center {\n    align-self: center;\n  }\n\n  .col-xl-bottom {\n    align-self: flex-end;\n  }\n}\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n}\n\n.table th,\n.table td {\n  padding: 0.75rem;\n  line-height: 1.5;\n  vertical-align: top;\n  border-top: 1px solid #eceeef;\n}\n\n.table thead th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #eceeef;\n}\n\n.table tbody + tbody {\n  border-top: 2px solid #eceeef;\n}\n\n.table .table {\n  background-color: #fff;\n}\n\n.table-sm th,\n.table-sm td {\n  padding: 0.3rem;\n}\n\n.table-bordered {\n  border: 1px solid #eceeef;\n}\n\n.table-bordered th,\n.table-bordered td {\n  border: 1px solid #eceeef;\n}\n\n.table-bordered thead th,\n.table-bordered thead td {\n  border-bottom-width: 2px;\n}\n\n.table-striped tbody tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n\n.table-hover tbody tr:hover {\n  background-color: #f5f5f5;\n}\n\n.table-active,\n.table-active > th,\n.table-active > td {\n  background-color: #f5f5f5;\n}\n\n.table-hover .table-active:hover {\n  background-color: #e8e8e8;\n}\n\n.table-hover .table-active:hover > td,\n.table-hover .table-active:hover > th {\n  background-color: #e8e8e8;\n}\n\n.table-success,\n.table-success > th,\n.table-success > td {\n  background-color: #dff0d8;\n}\n\n.table-hover .table-success:hover {\n  background-color: #d0e9c6;\n}\n\n.table-hover .table-success:hover > td,\n.table-hover .table-success:hover > th {\n  background-color: #d0e9c6;\n}\n\n.table-info,\n.table-info > th,\n.table-info > td {\n  background-color: #d9edf7;\n}\n\n.table-hover .table-info:hover {\n  background-color: #c4e3f3;\n}\n\n.table-hover .table-info:hover > td,\n.table-hover .table-info:hover > th {\n  background-color: #c4e3f3;\n}\n\n.table-warning,\n.table-warning > th,\n.table-warning > td {\n  background-color: #fcf8e3;\n}\n\n.table-hover .table-warning:hover {\n  background-color: #faf2cc;\n}\n\n.table-hover .table-warning:hover > td,\n.table-hover .table-warning:hover > th {\n  background-color: #faf2cc;\n}\n\n.table-danger,\n.table-danger > th,\n.table-danger > td {\n  background-color: #f2dede;\n}\n\n.table-hover .table-danger:hover {\n  background-color: #ebcccc;\n}\n\n.table-hover .table-danger:hover > td,\n.table-hover .table-danger:hover > th {\n  background-color: #ebcccc;\n}\n\n.table-responsive {\n  display: block;\n  width: 100%;\n  min-height: 0.01%;\n  overflow-x: auto;\n}\n\n.thead-inverse th {\n  color: #fff;\n  background-color: #373a3c;\n}\n\n.thead-default th {\n  color: #55595c;\n  background-color: #eceeef;\n}\n\n.table-inverse {\n  color: #eceeef;\n  background-color: #373a3c;\n}\n\n.table-inverse.table-bordered {\n  border: 0;\n}\n\n.table-inverse th,\n.table-inverse td,\n.table-inverse thead th {\n  border-color: #55595c;\n}\n\n.table-reflow thead {\n  float: left;\n}\n\n.table-reflow tbody {\n  display: block;\n  white-space: nowrap;\n}\n\n.table-reflow th,\n.table-reflow td {\n  border-top: 1px solid #eceeef;\n  border-left: 1px solid #eceeef;\n}\n\n.table-reflow th:last-child,\n.table-reflow td:last-child {\n  border-right: 1px solid #eceeef;\n}\n\n.table-reflow thead:last-child tr:last-child th,\n.table-reflow thead:last-child tr:last-child td,\n.table-reflow tbody:last-child tr:last-child th,\n.table-reflow tbody:last-child tr:last-child td,\n.table-reflow tfoot:last-child tr:last-child th,\n.table-reflow tfoot:last-child tr:last-child td {\n  border-bottom: 1px solid #eceeef;\n}\n\n.table-reflow tr {\n  float: left;\n}\n\n.table-reflow tr th,\n.table-reflow tr td {\n  display: block !important;\n  border: 1px solid #eceeef;\n}\n\n.form-control {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #55595c;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n}\n\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n\n.form-control:focus {\n  border-color: #66afe9;\n  outline: none;\n}\n\n.form-control::placeholder {\n  color: #999;\n  opacity: 1;\n}\n\n.form-control:disabled,\n.form-control[readonly] {\n  background-color: #eceeef;\n  opacity: 1;\n}\n\n.form-control:disabled {\n  cursor: not-allowed;\n}\n\n.form-control-file,\n.form-control-range {\n  display: block;\n}\n\n.form-control-label {\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n}\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 2.25rem;\n  }\n\n  input[type=\"date\"].input-sm,\n  .input-group-sm input[type=\"date\"].form-control,\n  input[type=\"time\"].input-sm,\n  .input-group-sm\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-sm,\n  .input-group-sm\n  input[type=\"month\"].form-control {\n    line-height: 1.8625rem;\n  }\n\n  input[type=\"date\"].input-lg,\n  .input-group-lg input[type=\"date\"].form-control,\n  input[type=\"time\"].input-lg,\n  .input-group-lg\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].input-lg,\n  .input-group-lg\n  input[type=\"month\"].form-control {\n    line-height: 3.16667rem;\n  }\n}\n\n.form-control-static {\n  min-height: 2.25rem;\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n  margin-bottom: 0;\n}\n\n.form-control-static.form-control-sm,\n.input-group-sm > .form-control-static.form-control,\n.input-group-sm > .form-control-static.input-group-addon,\n.input-group-sm > .input-group-btn > .form-control-static.btn,\n.form-control-static.form-control-lg,\n.input-group-lg > .form-control-static.form-control,\n.input-group-lg > .form-control-static.input-group-addon,\n.input-group-lg > .input-group-btn > .form-control-static.btn {\n  padding-right: 0;\n  padding-left: 0;\n}\n\n.form-control-sm,\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.form-control-lg,\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem;\n}\n\n.form-group {\n  margin-bottom: 1rem;\n}\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n}\n\n.radio label,\n.checkbox label {\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n\n.radio label input:only-child,\n.checkbox label input:only-child {\n  position: static;\n}\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: .25rem;\n  margin-left: -1.25rem;\n}\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -.25rem;\n}\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 1.25rem;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: .75rem;\n}\n\ninput[type=\"radio\"]:disabled,\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"]:disabled,\ninput[type=\"checkbox\"].disabled {\n  cursor: not-allowed;\n}\n\n.radio-inline.disabled,\n.checkbox-inline.disabled {\n  cursor: not-allowed;\n}\n\n.radio.disabled label,\n.checkbox.disabled label {\n  cursor: not-allowed;\n}\n\n.form-control-success,\n.form-control-warning,\n.form-control-danger {\n  padding-right: 2.25rem;\n  background-repeat: no-repeat;\n  background-position: center right 0.5625rem;\n  background-size: 1.4625rem 1.4625rem;\n}\n\n.has-success .text-help,\n.has-success .form-control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #5cb85c;\n}\n\n.has-success .form-control {\n  border-color: #5cb85c;\n}\n\n.has-success .input-group-addon {\n  color: #5cb85c;\n  border-color: #5cb85c;\n  background-color: #eaf6ea;\n}\n\n.has-success .form-control-feedback {\n  color: #5cb85c;\n}\n\n.has-success .form-control-success {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjNWNiODVjIiBkPSJNMjMzLjggNjEwYy0xMy4zIDAtMjYtNi0zNC0xNi44TDkwLjUgNDQ4LjhDNzYuMyA0MzAgODAgNDAzLjMgOTguOCAzODljMTguOC0xNC4yIDQ1LjUtMTAuNCA1OS44IDguNGw3MiA5NUw0NTEuMyAyNDJjMTIuNS0yMCAzOC44LTI2LjIgNTguOC0xMy43IDIwIDEyLjQgMjYgMzguNyAxMy43IDU4LjhMMjcwIDU5MGMtNy40IDEyLTIwLjIgMTkuNC0zNC4zIDIwaC0yeiIvPjwvc3ZnPg==\");\n}\n\n.has-warning .text-help,\n.has-warning .form-control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #f0ad4e;\n}\n\n.has-warning .form-control {\n  border-color: #f0ad4e;\n}\n\n.has-warning .input-group-addon {\n  color: #f0ad4e;\n  border-color: #f0ad4e;\n  background-color: white;\n}\n\n.has-warning .form-control-feedback {\n  color: #f0ad4e;\n}\n\n.has-warning .form-control-warning {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZjBhZDRlIiBkPSJNNjAzIDY0MC4ybC0yNzguNS01MDljLTMuOC02LjYtMTAuOC0xMC42LTE4LjUtMTAuNnMtMTQuNyA0LTE4LjUgMTAuNkw5IDY0MC4yYy0zLjcgNi41LTMuNiAxNC40LjIgMjAuOCAzLjggNi41IDEwLjggMTAuNCAxOC4zIDEwLjRoNTU3YzcuNiAwIDE0LjYtNCAxOC40LTEwLjQgMy41LTYuNCAzLjYtMTQuNCAwLTIwLjh6bS0yNjYuNC0zMGgtNjEuMlY1NDloNjEuMnY2MS4yem0wLTEwN2gtNjEuMlYzMDRoNjEuMnYxOTl6Ii8+PC9zdmc+\");\n}\n\n.has-danger .text-help,\n.has-danger .form-control-label,\n.has-danger .radio,\n.has-danger .checkbox,\n.has-danger .radio-inline,\n.has-danger .checkbox-inline,\n.has-danger.radio label,\n.has-danger.checkbox label,\n.has-danger.radio-inline label,\n.has-danger.checkbox-inline label {\n  color: #d9534f;\n}\n\n.has-danger .form-control {\n  border-color: #d9534f;\n}\n\n.has-danger .input-group-addon {\n  color: #d9534f;\n  border-color: #d9534f;\n  background-color: #fdf7f7;\n}\n\n.has-danger .form-control-feedback {\n  color: #d9534f;\n}\n\n.has-danger .form-control-danger {\n  background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MTIgNzkyIj48cGF0aCBmaWxsPSIjZDk1MzRmIiBkPSJNNDQ3IDU0NC40Yy0xNC40IDE0LjQtMzcuNiAxNC40LTUyIDBsLTg5LTkyLjctODkgOTIuN2MtMTQuNSAxNC40LTM3LjcgMTQuNC01MiAwLTE0LjQtMTQuNC0xNC40LTM3LjYgMC01Mmw5Mi40LTk2LjMtOTIuNC05Ni4zYy0xNC40LTE0LjQtMTQuNC0zNy42IDAtNTJzMzcuNi0xNC4zIDUyIDBsODkgOTIuOCA4OS4yLTkyLjdjMTQuNC0xNC40IDM3LjYtMTQuNCA1MiAwIDE0LjMgMTQuNCAxNC4zIDM3LjYgMCA1MkwzNTQuNiAzOTZsOTIuNCA5Ni40YzE0LjQgMTQuNCAxNC40IDM3LjYgMCA1MnoiLz48L3N2Zz4=\");\n}\n\n@media (min-width: 544px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n\n  .form-inline .form-control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n\n.btn {\n  display: inline-block;\n  font-weight: normal;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid transparent;\n  padding: 0.375rem 1rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  border-radius: 0.25rem;\n}\n\n.btn:focus,\n.btn.focus,\n.btn:active:focus,\n.btn:active.focus,\n.btn.active:focus,\n.btn.active.focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n\n.btn:focus,\n.btn:hover {\n  text-decoration: none;\n}\n\n.btn.focus {\n  text-decoration: none;\n}\n\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n}\n\n.btn.disabled,\n.btn:disabled {\n  cursor: not-allowed;\n  opacity: .65;\n}\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n\n.btn-primary {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary:hover {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n}\n\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n}\n\n.btn-primary:active,\n.btn-primary.active,\n.open > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #025aa5;\n  border-color: #01549b;\n  background-image: none;\n}\n\n.btn-primary:active:hover,\n.btn-primary:active:focus,\n.btn-primary:active.focus,\n.btn-primary.active:hover,\n.btn-primary.active:focus,\n.btn-primary.active.focus,\n.open > .btn-primary.dropdown-toggle:hover,\n.open > .btn-primary.dropdown-toggle:focus,\n.open > .btn-primary.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #014682;\n  border-color: #01315a;\n}\n\n.btn-primary.disabled:focus,\n.btn-primary.disabled.focus,\n.btn-primary:disabled:focus,\n.btn-primary:disabled.focus {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary.disabled:hover,\n.btn-primary:disabled:hover {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-secondary {\n  color: #373a3c;\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-secondary:hover {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-secondary:focus,\n.btn-secondary.focus {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n\n.btn-secondary:active,\n.btn-secondary.active,\n.open > .btn-secondary.dropdown-toggle {\n  color: #373a3c;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n  background-image: none;\n}\n\n.btn-secondary:active:hover,\n.btn-secondary:active:focus,\n.btn-secondary:active.focus,\n.btn-secondary.active:hover,\n.btn-secondary.active:focus,\n.btn-secondary.active.focus,\n.open > .btn-secondary.dropdown-toggle:hover,\n.open > .btn-secondary.dropdown-toggle:focus,\n.open > .btn-secondary.dropdown-toggle.focus {\n  color: #373a3c;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n\n.btn-secondary.disabled:focus,\n.btn-secondary.disabled.focus,\n.btn-secondary:disabled:focus,\n.btn-secondary:disabled.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-secondary.disabled:hover,\n.btn-secondary:disabled:hover {\n  background-color: #fff;\n  border-color: #ccc;\n}\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n}\n\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n}\n\n.btn-info:active,\n.btn-info.active,\n.open > .btn-info.dropdown-toggle {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #2aabd2;\n  background-image: none;\n}\n\n.btn-info:active:hover,\n.btn-info:active:focus,\n.btn-info:active.focus,\n.btn-info.active:hover,\n.btn-info.active:focus,\n.btn-info.active.focus,\n.open > .btn-info.dropdown-toggle:hover,\n.open > .btn-info.dropdown-toggle:focus,\n.open > .btn-info.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1f7e9a;\n}\n\n.btn-info.disabled:focus,\n.btn-info.disabled.focus,\n.btn-info:disabled:focus,\n.btn-info:disabled.focus {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info.disabled:hover,\n.btn-info:disabled:hover {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n}\n\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n}\n\n.btn-success:active,\n.btn-success.active,\n.open > .btn-success.dropdown-toggle {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #419641;\n  background-image: none;\n}\n\n.btn-success:active:hover,\n.btn-success:active:focus,\n.btn-success:active.focus,\n.btn-success.active:hover,\n.btn-success.active:focus,\n.btn-success.active.focus,\n.open > .btn-success.dropdown-toggle:hover,\n.open > .btn-success.dropdown-toggle:focus,\n.open > .btn-success.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #2d672d;\n}\n\n.btn-success.disabled:focus,\n.btn-success.disabled.focus,\n.btn-success:disabled:focus,\n.btn-success:disabled.focus {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success.disabled:hover,\n.btn-success:disabled:hover {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n}\n\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n}\n\n.btn-warning:active,\n.btn-warning.active,\n.open > .btn-warning.dropdown-toggle {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #eb9316;\n  background-image: none;\n}\n\n.btn-warning:active:hover,\n.btn-warning:active:focus,\n.btn-warning:active.focus,\n.btn-warning.active:hover,\n.btn-warning.active:focus,\n.btn-warning.active.focus,\n.open > .btn-warning.dropdown-toggle:hover,\n.open > .btn-warning.dropdown-toggle:focus,\n.open > .btn-warning.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #b06d0f;\n}\n\n.btn-warning.disabled:focus,\n.btn-warning.disabled.focus,\n.btn-warning:disabled:focus,\n.btn-warning:disabled.focus {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning.disabled:hover,\n.btn-warning:disabled:hover {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n}\n\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n}\n\n.btn-danger:active,\n.btn-danger.active,\n.open > .btn-danger.dropdown-toggle {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #c12e2a;\n  background-image: none;\n}\n\n.btn-danger:active:hover,\n.btn-danger:active:focus,\n.btn-danger:active.focus,\n.btn-danger.active:hover,\n.btn-danger.active:focus,\n.btn-danger.active.focus,\n.open > .btn-danger.dropdown-toggle:hover,\n.open > .btn-danger.dropdown-toggle:focus,\n.open > .btn-danger.dropdown-toggle.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #8b211e;\n}\n\n.btn-danger.disabled:focus,\n.btn-danger.disabled.focus,\n.btn-danger:disabled:focus,\n.btn-danger:disabled.focus {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger.disabled:hover,\n.btn-danger:disabled:hover {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-primary-outline {\n  color: #0275d8;\n  background-image: none;\n  background-color: transparent;\n  border-color: #0275d8;\n}\n\n.btn-primary-outline:focus,\n.btn-primary-outline.focus,\n.btn-primary-outline:active,\n.btn-primary-outline.active,\n.open > .btn-primary-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary-outline:hover {\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.btn-primary-outline.disabled:focus,\n.btn-primary-outline.disabled.focus,\n.btn-primary-outline:disabled:focus,\n.btn-primary-outline:disabled.focus {\n  border-color: #43a7fd;\n}\n\n.btn-primary-outline.disabled:hover,\n.btn-primary-outline:disabled:hover {\n  border-color: #43a7fd;\n}\n\n.btn-secondary-outline {\n  color: #ccc;\n  background-image: none;\n  background-color: transparent;\n  border-color: #ccc;\n}\n\n.btn-secondary-outline:focus,\n.btn-secondary-outline.focus,\n.btn-secondary-outline:active,\n.btn-secondary-outline.active,\n.open > .btn-secondary-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.btn-secondary-outline:hover {\n  color: #fff;\n  background-color: #ccc;\n  border-color: #ccc;\n}\n\n.btn-secondary-outline.disabled:focus,\n.btn-secondary-outline.disabled.focus,\n.btn-secondary-outline:disabled:focus,\n.btn-secondary-outline:disabled.focus {\n  border-color: white;\n}\n\n.btn-secondary-outline.disabled:hover,\n.btn-secondary-outline:disabled:hover {\n  border-color: white;\n}\n\n.btn-info-outline {\n  color: #5bc0de;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5bc0de;\n}\n\n.btn-info-outline:focus,\n.btn-info-outline.focus,\n.btn-info-outline:active,\n.btn-info-outline.active,\n.open > .btn-info-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info-outline:hover {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.btn-info-outline.disabled:focus,\n.btn-info-outline.disabled.focus,\n.btn-info-outline:disabled:focus,\n.btn-info-outline:disabled.focus {\n  border-color: #b0e1ef;\n}\n\n.btn-info-outline.disabled:hover,\n.btn-info-outline:disabled:hover {\n  border-color: #b0e1ef;\n}\n\n.btn-success-outline {\n  color: #5cb85c;\n  background-image: none;\n  background-color: transparent;\n  border-color: #5cb85c;\n}\n\n.btn-success-outline:focus,\n.btn-success-outline.focus,\n.btn-success-outline:active,\n.btn-success-outline.active,\n.open > .btn-success-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success-outline:hover {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.btn-success-outline.disabled:focus,\n.btn-success-outline.disabled.focus,\n.btn-success-outline:disabled:focus,\n.btn-success-outline:disabled.focus {\n  border-color: #a3d7a3;\n}\n\n.btn-success-outline.disabled:hover,\n.btn-success-outline:disabled:hover {\n  border-color: #a3d7a3;\n}\n\n.btn-warning-outline {\n  color: #f0ad4e;\n  background-image: none;\n  background-color: transparent;\n  border-color: #f0ad4e;\n}\n\n.btn-warning-outline:focus,\n.btn-warning-outline.focus,\n.btn-warning-outline:active,\n.btn-warning-outline.active,\n.open > .btn-warning-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning-outline:hover {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.btn-warning-outline.disabled:focus,\n.btn-warning-outline.disabled.focus,\n.btn-warning-outline:disabled:focus,\n.btn-warning-outline:disabled.focus {\n  border-color: #f8d9ac;\n}\n\n.btn-warning-outline.disabled:hover,\n.btn-warning-outline:disabled:hover {\n  border-color: #f8d9ac;\n}\n\n.btn-danger-outline {\n  color: #d9534f;\n  background-image: none;\n  background-color: transparent;\n  border-color: #d9534f;\n}\n\n.btn-danger-outline:focus,\n.btn-danger-outline.focus,\n.btn-danger-outline:active,\n.btn-danger-outline.active,\n.open > .btn-danger-outline.dropdown-toggle {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger-outline:hover {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.btn-danger-outline.disabled:focus,\n.btn-danger-outline.disabled.focus,\n.btn-danger-outline:disabled:focus,\n.btn-danger-outline:disabled.focus {\n  border-color: #eba5a3;\n}\n\n.btn-danger-outline.disabled:hover,\n.btn-danger-outline:disabled:hover {\n  border-color: #eba5a3;\n}\n\n.btn-link {\n  font-weight: normal;\n  color: #0275d8;\n  border-radius: 0;\n}\n\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link:disabled {\n  background-color: transparent;\n}\n\n.btn-link,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n\n.btn-link:hover {\n  border-color: transparent;\n}\n\n.btn-link:focus,\n.btn-link:hover {\n  color: #014c8c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n\n.btn-link:disabled:focus,\n.btn-link:disabled:hover {\n  color: #818a91;\n  text-decoration: none;\n}\n\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n  border-radius: 0.3rem;\n}\n\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  border-radius: 0.2rem;\n}\n\n.btn-block {\n  display: block;\n  width: 100%;\n}\n\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n\n.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n\n.fade.in {\n  opacity: 1;\n}\n\n.collapse {\n  display: none;\n}\n\n.collapse.in {\n  display: block;\n}\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition-timing-function: ease;\n  transition-duration: .35s;\n  transition-property: height;\n}\n\n.dropup,\n.dropdown {\n  position: relative;\n}\n\n.dropdown-toggle::after {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-right: .25rem;\n  margin-left: .25rem;\n  vertical-align: middle;\n  content: \"\";\n  border-top: 0.3em solid;\n  border-right: 0.3em solid transparent;\n  border-left: 0.3em solid transparent;\n}\n\n.dropdown-toggle:focus {\n  outline: 0;\n}\n\n.dropup .dropdown-toggle::after {\n  border-top: 0;\n  border-bottom: 0.3em solid;\n}\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 1rem;\n  color: #373a3c;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 0.25rem;\n}\n\n.dropdown-divider {\n  height: 1px;\n  margin: 0.5rem 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n\n.dropdown-item {\n  display: block;\n  width: 100%;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #373a3c;\n  text-align: inherit;\n  white-space: nowrap;\n  background: none;\n  border: 0;\n}\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  color: #2b2d2f;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n\n.dropdown-item.active,\n.dropdown-item.active:focus,\n.dropdown-item.active:hover {\n  color: #fff;\n  text-decoration: none;\n  background-color: #0275d8;\n  outline: 0;\n}\n\n.dropdown-item.disabled,\n.dropdown-item.disabled:focus,\n.dropdown-item.disabled:hover {\n  color: #818a91;\n}\n\n.dropdown-item.disabled:focus,\n.dropdown-item.disabled:hover {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: \"progid:DXImageTransform.Microsoft.gradient(enabled = false)\";\n}\n\n.open > .dropdown-menu {\n  display: block;\n}\n\n.open > a {\n  outline: 0;\n}\n\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #818a91;\n  white-space: nowrap;\n}\n\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 0.3em solid;\n}\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n\n.btn-group > .btn:focus,\n.btn-group > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn:focus,\n.btn-group-vertical > .btn:active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover {\n  z-index: 2;\n}\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n\n.btn-toolbar {\n  margin-left: -5px;\n}\n\n.btn-toolbar::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group > .btn-group {\n  float: left;\n}\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n\n.btn-group > .btn-lg + .dropdown-toggle,\n.btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n\n.btn .caret {\n  margin-left: 0;\n}\n\n.btn-lg .caret,\n.btn-group-lg > .btn .caret {\n  border-width: 0.3em 0.3em 0;\n  border-bottom-width: 0;\n}\n\n.dropup .btn-lg .caret,\n.dropup .btn-group-lg > .btn .caret {\n  border-width: 0 0.3em 0.3em;\n}\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n\n.btn-group-vertical > .btn-group::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-bottom-left-radius: 0.25rem;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n\n.input-group {\n  position: relative;\n  display: flex;\n}\n\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  flex: 1;\n  margin-bottom: 0;\n}\n\n.input-group .form-control:focus,\n.input-group .form-control:active,\n.input-group .form-control:hover {\n  z-index: 3;\n}\n\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n\n.input-group-addon,\n.input-group-btn {\n  white-space: nowrap;\n  vertical-align: middle;\n}\n\n.input-group-addon {\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1;\n  color: #55595c;\n  text-align: center;\n  background-color: #eceeef;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n}\n\n.input-group-addon.form-control-sm,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .input-group-addon.btn {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.input-group-addon.form-control-lg,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .input-group-addon.btn {\n  padding: 0.75rem 1.25rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n}\n\n.input-group-addon:first-child {\n  border-right: 0;\n}\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.input-group-addon:last-child {\n  border-left: 0;\n}\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n\n.input-group-btn > .btn {\n  position: relative;\n}\n\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active,\n.input-group-btn > .btn:hover {\n  z-index: 3;\n}\n\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n\n.input-group-btn:last-child > .btn:focus,\n.input-group-btn:last-child > .btn:active,\n.input-group-btn:last-child > .btn:hover,\n.input-group-btn:last-child > .btn-group:focus,\n.input-group-btn:last-child > .btn-group:active,\n.input-group-btn:last-child > .btn-group:hover {\n  z-index: 3;\n}\n\n.c-input {\n  position: relative;\n  display: inline;\n  padding-left: 1.5rem;\n  color: #555;\n  cursor: pointer;\n}\n\n.c-input > input {\n  position: absolute;\n  z-index: -1;\n  opacity: 0;\n}\n\n.c-input > input:checked ~ .c-indicator {\n  color: #fff;\n  background-color: #0074d9;\n}\n\n.c-input > input:focus ~ .c-indicator {\n  box-shadow: 0 0 0 .075rem #fff, 0 0 0 .2rem #0074d9;\n}\n\n.c-input > input:active ~ .c-indicator {\n  color: #fff;\n  background-color: #84c6ff;\n}\n\n.c-input + .c-input {\n  margin-left: 1rem;\n}\n\n.c-indicator {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: block;\n  width: 1rem;\n  height: 1rem;\n  font-size: 65%;\n  line-height: 1rem;\n  color: #eee;\n  text-align: center;\n  user-select: none;\n  background-color: #eee;\n  background-repeat: no-repeat;\n  background-position: center center;\n  background-size: 50% 50%;\n}\n\n.c-checkbox .c-indicator {\n  border-radius: .25rem;\n}\n\n.c-checkbox input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTYuNCwxTDUuNywxLjdMMi45LDQuNUwyLjEsMy43TDEuNCwzTDAsNC40bDAuNywwLjdsMS41LDEuNWwwLjcsMC43bDAuNy0wLjdsMy41LTMuNWwwLjctMC43TDYuNCwxTDYuNCwxeiINCgkvPg0KPC9zdmc+DQo=);\n}\n\n.c-checkbox input:indeterminate ~ .c-indicator {\n  background-color: #0074d9;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iOHB4IiBoZWlnaHQ9IjhweCIgdmlld0JveD0iMCAwIDggOCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgOCA4IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGw9IiNGRkZGRkYiIGQ9Ik0wLDN2Mmg4VjNIMHoiLz4NCjwvc3ZnPg0K);\n}\n\n.c-radio .c-indicator {\n  border-radius: 50%;\n}\n\n.c-radio input:checked ~ .c-indicator {\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgOCA4IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA4IDgiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQsMUMyLjMsMSwxLDIuMywxLDRzMS4zLDMsMywzczMtMS4zLDMtM1M1LjcsMSw0LDF6Ii8+DQo8L3N2Zz4NCg==);\n}\n\n.c-inputs-stacked .c-input {\n  display: inline;\n}\n\n.c-inputs-stacked .c-input::after {\n  display: block;\n  margin-bottom: .25rem;\n  content: \"\";\n}\n\n.c-inputs-stacked .c-input + .c-input {\n  margin-left: 0;\n}\n\n.c-select {\n  display: inline-block;\n  max-width: 100%;\n  padding: .375rem 1.75rem .375rem .75rem;\n  padding-right: .75rem \\9;\n  color: #55595c;\n  vertical-align: middle;\n  background: #fff url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAUCAMAAACzvE1FAAAADFBMVEUzMzMzMzMzMzMzMzMKAG/3AAAAA3RSTlMAf4C/aSLHAAAAPElEQVR42q3NMQ4AIAgEQTn//2cLdRKppSGzBYwzVXvznNWs8C58CiussPJj8h6NwgorrKRdTvuV9v16Afn0AYFOB7aYAAAAAElFTkSuQmCC) no-repeat right 0.75rem center;\n  background-image: none \\9;\n  background-size: 8px 10px;\n  border: 1px solid #ccc;\n  -moz-appearance: none;\n  -webkit-appearance: none;\n}\n\n.c-select:focus {\n  border-color: #51a7e8;\n  outline: none;\n}\n\n.c-select::-ms-expand {\n  opacity: 0;\n}\n\n.c-select-sm {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  font-size: 12px;\n}\n\n.c-select-sm:not([multiple]) {\n  height: 26px;\n  min-height: 26px;\n}\n\n.file {\n  position: relative;\n  display: inline-block;\n  height: 2.5rem;\n  cursor: pointer;\n}\n\n.file input {\n  min-width: 14rem;\n  margin: 0;\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n\n.file-custom {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 5;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  user-select: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: .25rem;\n}\n\n.file-custom::after {\n  content: \"Choose file...\";\n}\n\n.file-custom::before {\n  position: absolute;\n  top: -.075rem;\n  right: -.075rem;\n  bottom: -.075rem;\n  z-index: 6;\n  display: block;\n  height: 2.5rem;\n  padding: .5rem 1rem;\n  line-height: 1.5;\n  color: #555;\n  content: \"Browse\";\n  background-color: #eee;\n  border: 1px solid #ddd;\n  border-radius: 0 .25rem .25rem 0;\n}\n\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n\n.nav-link {\n  display: inline-block;\n}\n\n.nav-link:focus,\n.nav-link:hover {\n  text-decoration: none;\n}\n\n.nav-link.disabled {\n  color: #818a91;\n}\n\n.nav-link.disabled,\n.nav-link.disabled:focus,\n.nav-link.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n\n.nav-inline .nav-item {\n  display: inline-block;\n}\n\n.nav-inline .nav-item + .nav-item,\n.nav-inline .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n\n.nav-tabs::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.nav-tabs .nav-item {\n  float: left;\n  margin-bottom: -1px;\n}\n\n.nav-tabs .nav-item + .nav-item {\n  margin-left: .2rem;\n}\n\n.nav-tabs .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border: 1px solid transparent;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.nav-tabs .nav-link:focus,\n.nav-tabs .nav-link:hover {\n  border-color: #eceeef #eceeef #ddd;\n}\n\n.nav-tabs .nav-link.disabled,\n.nav-tabs .nav-link.disabled:focus,\n.nav-tabs .nav-link.disabled:hover {\n  color: #818a91;\n  background-color: transparent;\n  border-color: transparent;\n}\n\n.nav-tabs .nav-link.active,\n.nav-tabs .nav-link.active:focus,\n.nav-tabs .nav-link.active:hover,\n.nav-tabs .nav-item.open .nav-link,\n.nav-tabs .nav-item.open .nav-link:focus,\n.nav-tabs .nav-item.open .nav-link:hover {\n  color: #55595c;\n  background-color: #fff;\n  border-color: #ddd #ddd transparent;\n}\n\n.nav-pills::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.nav-pills .nav-item {\n  float: left;\n}\n\n.nav-pills .nav-item + .nav-item {\n  margin-left: .2rem;\n}\n\n.nav-pills .nav-link {\n  display: block;\n  padding: 0.5em 1em;\n  border-radius: 0.25rem;\n}\n\n.nav-pills .nav-link.active,\n.nav-pills .nav-link.active:focus,\n.nav-pills .nav-link.active:hover,\n.nav-pills .nav-item.open .nav-link,\n.nav-pills .nav-item.open .nav-link:focus,\n.nav-pills .nav-item.open .nav-link:hover {\n  color: #fff;\n  cursor: default;\n  background-color: #0275d8;\n}\n\n.nav-stacked .nav-item {\n  display: block;\n  float: none;\n}\n\n.nav-stacked .nav-item + .nav-item {\n  margin-top: .2rem;\n  margin-left: 0;\n}\n\n.tab-content > .tab-pane {\n  display: none;\n}\n\n.tab-content > .active {\n  display: block;\n}\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n}\n\n.navbar {\n  position: relative;\n  padding: 0.5rem 1rem;\n}\n\n.navbar::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n@media (min-width: 544px) {\n  .navbar {\n    border-radius: 0.25rem;\n  }\n}\n\n.navbar-full {\n  z-index: 1000;\n}\n\n@media (min-width: 544px) {\n  .navbar-full {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n@media (min-width: 544px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n\n.navbar-fixed-top {\n  top: 0;\n}\n\n.navbar-fixed-bottom {\n  bottom: 0;\n}\n\n.navbar-sticky-top {\n  position: sticky;\n  top: 0;\n  z-index: 1030;\n  width: 100%;\n}\n\n@media (min-width: 544px) {\n  .navbar-sticky-top {\n    border-radius: 0;\n  }\n}\n\n.navbar-brand {\n  float: left;\n  padding-top: .25rem;\n  padding-bottom: .25rem;\n  margin-right: 1rem;\n  font-size: 1.25rem;\n}\n\n.navbar-brand:focus,\n.navbar-brand:hover {\n  text-decoration: none;\n}\n\n.navbar-brand > img {\n  display: block;\n}\n\n.navbar-divider {\n  float: left;\n  width: 1px;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n  margin-right: 1rem;\n  margin-left: 1rem;\n  overflow: hidden;\n}\n\n.navbar-divider::before {\n  content: \"\\A0\";\n}\n\n.navbar-toggler {\n  padding: .5rem .75rem;\n  font-size: 1.25rem;\n  line-height: 1;\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.navbar-toggler:focus,\n.navbar-toggler:hover {\n  text-decoration: none;\n}\n\n@media (min-width: 544px) {\n  .navbar-toggleable-xs {\n    display: block !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .navbar-toggleable-sm {\n    display: block !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .navbar-toggleable-md {\n    display: block !important;\n  }\n}\n\n.navbar-nav .nav-item {\n  float: left;\n}\n\n.navbar-nav .nav-link {\n  display: block;\n  padding-top: .425rem;\n  padding-bottom: .425rem;\n}\n\n.navbar-nav .nav-link + .nav-link {\n  margin-left: 1rem;\n}\n\n.navbar-nav .nav-item + .nav-item {\n  margin-left: 1rem;\n}\n\n.navbar-light .navbar-brand {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.navbar-light .navbar-brand:focus,\n.navbar-light .navbar-brand:hover {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.navbar-light .navbar-nav .nav-link {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.navbar-light .navbar-nav .nav-link:focus,\n.navbar-light .navbar-nav .nav-link:hover {\n  color: rgba(0, 0, 0, 0.6);\n}\n\n.navbar-light .navbar-nav .open > .nav-link,\n.navbar-light .navbar-nav .open > .nav-link:focus,\n.navbar-light .navbar-nav .open > .nav-link:hover,\n.navbar-light .navbar-nav .active > .nav-link,\n.navbar-light .navbar-nav .active > .nav-link:focus,\n.navbar-light .navbar-nav .active > .nav-link:hover,\n.navbar-light .navbar-nav .nav-link.open,\n.navbar-light .navbar-nav .nav-link.open:focus,\n.navbar-light .navbar-nav .nav-link.open:hover,\n.navbar-light .navbar-nav .nav-link.active,\n.navbar-light .navbar-nav .nav-link.active:focus,\n.navbar-light .navbar-nav .nav-link.active:hover {\n  color: rgba(0, 0, 0, 0.8);\n}\n\n.navbar-light .navbar-divider {\n  background-color: rgba(0, 0, 0, 0.075);\n}\n\n.navbar-dark .navbar-brand {\n  color: white;\n}\n\n.navbar-dark .navbar-brand:focus,\n.navbar-dark .navbar-brand:hover {\n  color: white;\n}\n\n.navbar-dark .navbar-nav .nav-link {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.navbar-dark .navbar-nav .nav-link:focus,\n.navbar-dark .navbar-nav .nav-link:hover {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.navbar-dark .navbar-nav .open > .nav-link,\n.navbar-dark .navbar-nav .open > .nav-link:focus,\n.navbar-dark .navbar-nav .open > .nav-link:hover,\n.navbar-dark .navbar-nav .active > .nav-link,\n.navbar-dark .navbar-nav .active > .nav-link:focus,\n.navbar-dark .navbar-nav .active > .nav-link:hover,\n.navbar-dark .navbar-nav .nav-link.open,\n.navbar-dark .navbar-nav .nav-link.open:focus,\n.navbar-dark .navbar-nav .nav-link.open:hover,\n.navbar-dark .navbar-nav .nav-link.active,\n.navbar-dark .navbar-nav .nav-link.active:focus,\n.navbar-dark .navbar-nav .nav-link.active:hover {\n  color: white;\n}\n\n.navbar-dark .navbar-divider {\n  background-color: rgba(255, 255, 255, 0.075);\n}\n\n.card {\n  position: relative;\n  display: block;\n  margin-bottom: 0.75rem;\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 0.25rem;\n}\n\n.card-block {\n  padding: 1.25rem;\n}\n\n.card-title {\n  margin-bottom: 0.75rem;\n}\n\n.card-subtitle {\n  margin-top: -0.375rem;\n  margin-bottom: 0;\n}\n\n.card-text:last-child {\n  margin-bottom: 0;\n}\n\n.card-link:hover {\n  text-decoration: none;\n}\n\n.card-link + .card-link {\n  margin-left: 1.25rem;\n}\n\n.card > .list-group:first-child .list-group-item:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card > .list-group:last-child .list-group-item:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n\n.card-header {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.card-header:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card-footer {\n  padding: 0.75rem 1.25rem;\n  background-color: #f5f5f5;\n  border-top: 1px solid #e5e5e5;\n}\n\n.card-footer:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n\n.card-primary {\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.card-success {\n  background-color: #5cb85c;\n  border-color: #5cb85c;\n}\n\n.card-info {\n  background-color: #5bc0de;\n  border-color: #5bc0de;\n}\n\n.card-warning {\n  background-color: #f0ad4e;\n  border-color: #f0ad4e;\n}\n\n.card-danger {\n  background-color: #d9534f;\n  border-color: #d9534f;\n}\n\n.card-primary-outline {\n  background-color: transparent;\n  border-color: #0275d8;\n}\n\n.card-secondary-outline {\n  background-color: transparent;\n  border-color: #ccc;\n}\n\n.card-info-outline {\n  background-color: transparent;\n  border-color: #5bc0de;\n}\n\n.card-success-outline {\n  background-color: transparent;\n  border-color: #5cb85c;\n}\n\n.card-warning-outline {\n  background-color: transparent;\n  border-color: #f0ad4e;\n}\n\n.card-danger-outline {\n  background-color: transparent;\n  border-color: #d9534f;\n}\n\n.card-inverse .card-header,\n.card-inverse .card-footer {\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n.card-inverse .card-header,\n.card-inverse .card-footer,\n.card-inverse .card-title,\n.card-inverse .card-blockquote {\n  color: #fff;\n}\n\n.card-inverse .card-link,\n.card-inverse .card-text,\n.card-inverse .card-blockquote > footer {\n  color: rgba(255, 255, 255, 0.65);\n}\n\n.card-inverse .card-link:focus,\n.card-inverse .card-link:hover {\n  color: #fff;\n}\n\n.card-blockquote {\n  padding: 0;\n  margin-bottom: 0;\n  border-left: 0;\n}\n\n.card-img {\n  border-radius: 0.25rem;\n}\n\n.card-img-overlay {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 1.25rem;\n}\n\n.card-img-top {\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.card-img-bottom {\n  border-radius: 0 0 0.25rem 0.25rem;\n}\n\n@media (min-width: 544px) {\n  .card-deck {\n    display: flex;\n    flex-flow: row wrap;\n    margin-right: -.625rem;\n    margin-left: -.625rem;\n  }\n\n  .card-deck .card {\n    flex: 1 0 0;\n    margin-right: .625rem;\n    margin-left: .625rem;\n  }\n}\n\n@media (min-width: 544px) {\n  .card-group {\n    display: flex;\n    flex-flow: row wrap;\n  }\n\n  .card-group .card {\n    flex: 1 0 0;\n  }\n\n  .card-group .card + .card {\n    margin-left: 0;\n    border-left: 0;\n  }\n\n  .card-group .card:first-child {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0;\n  }\n\n  .card-group .card:first-child .card-img-top {\n    border-top-right-radius: 0;\n  }\n\n  .card-group .card:first-child .card-img-bottom {\n    border-bottom-right-radius: 0;\n  }\n\n  .card-group .card:last-child {\n    border-bottom-left-radius: 0;\n    border-top-left-radius: 0;\n  }\n\n  .card-group .card:last-child .card-img-top {\n    border-top-left-radius: 0;\n  }\n\n  .card-group .card:last-child .card-img-bottom {\n    border-bottom-left-radius: 0;\n  }\n\n  .card-group .card:not(:first-child):not(:last-child) {\n    border-radius: 0;\n  }\n\n  .card-group .card:not(:first-child):not(:last-child) .card-img-top,\n  .card-group .card:not(:first-child):not(:last-child) .card-img-bottom {\n    border-radius: 0;\n  }\n}\n\n@media (min-width: 544px) {\n  .card-columns {\n    column-count: 3;\n    column-gap: 1.25rem;\n  }\n\n  .card-columns .card {\n    display: inline-block;\n    width: 100%;\n  }\n}\n\n.breadcrumb {\n  padding: 0.75rem 1rem;\n  margin-bottom: 1rem;\n  list-style: none;\n  background-color: #eceeef;\n  border-radius: 0.25rem;\n}\n\n.breadcrumb::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.breadcrumb > li {\n  float: left;\n}\n\n.breadcrumb > li + li::before {\n  padding-right: .5rem;\n  padding-left: .5rem;\n  color: #818a91;\n  content: \"/\";\n}\n\n.breadcrumb > .active {\n  color: #818a91;\n}\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  border-radius: 0.25rem;\n}\n\n.page-item {\n  display: inline;\n}\n\n.page-item:first-child .page-link {\n  margin-left: 0;\n  border-bottom-left-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.page-item:last-child .page-link {\n  border-bottom-right-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.page-item.active .page-link,\n.page-item.active .page-link:focus,\n.page-item.active .page-link:hover {\n  z-index: 2;\n  color: #fff;\n  cursor: default;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.page-item.disabled .page-link,\n.page-item.disabled .page-link:focus,\n.page-item.disabled .page-link:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n\n.page-link {\n  position: relative;\n  float: left;\n  padding: 0.5rem 0.75rem;\n  margin-left: -1px;\n  line-height: 1.5;\n  color: #0275d8;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.page-link:focus,\n.page-link:hover {\n  color: #014c8c;\n  background-color: #eceeef;\n  border-color: #ddd;\n}\n\n.pagination-lg .page-link {\n  padding: 0.75rem 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1.33333;\n}\n\n.pagination-lg .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.3rem;\n  border-top-left-radius: 0.3rem;\n}\n\n.pagination-lg .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.3rem;\n  border-top-right-radius: 0.3rem;\n}\n\n.pagination-sm .page-link {\n  padding: 0.275rem 0.75rem;\n  font-size: 0.875rem;\n  line-height: 1.5;\n}\n\n.pagination-sm .page-item:first-child .page-link {\n  border-bottom-left-radius: 0.2rem;\n  border-top-left-radius: 0.2rem;\n}\n\n.pagination-sm .page-item:last-child .page-link {\n  border-bottom-right-radius: 0.2rem;\n  border-top-right-radius: 0.2rem;\n}\n\n.pager {\n  padding-left: 0;\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n  text-align: center;\n  list-style: none;\n}\n\n.pager::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.pager li {\n  display: inline;\n}\n\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n\n.pager li > a:focus,\n.pager li > a:hover {\n  text-decoration: none;\n  background-color: #eceeef;\n}\n\n.pager .disabled > a,\n.pager .disabled > a:focus,\n.pager .disabled > a:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n\n.pager .disabled > span {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n\n.pager-next > a,\n.pager-next > span {\n  float: right;\n}\n\n.pager-prev > a,\n.pager-prev > span {\n  float: left;\n}\n\n.label {\n  display: inline-block;\n  padding: .25em .4em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: 0.25rem;\n}\n\n.label:empty {\n  display: none;\n}\n\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n\na.label:focus,\na.label:hover {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.label-pill {\n  padding-right: .6em;\n  padding-left: .6em;\n  border-radius: 10rem;\n}\n\n.label-default {\n  background-color: #818a91;\n}\n\n.label-default[href]:focus,\n.label-default[href]:hover {\n  background-color: #687077;\n}\n\n.label-primary {\n  background-color: #0275d8;\n}\n\n.label-primary[href]:focus,\n.label-primary[href]:hover {\n  background-color: #025aa5;\n}\n\n.label-success {\n  background-color: #5cb85c;\n}\n\n.label-success[href]:focus,\n.label-success[href]:hover {\n  background-color: #449d44;\n}\n\n.label-info {\n  background-color: #5bc0de;\n}\n\n.label-info[href]:focus,\n.label-info[href]:hover {\n  background-color: #31b0d5;\n}\n\n.label-warning {\n  background-color: #f0ad4e;\n}\n\n.label-warning[href]:focus,\n.label-warning[href]:hover {\n  background-color: #ec971f;\n}\n\n.label-danger {\n  background-color: #d9534f;\n}\n\n.label-danger[href]:focus,\n.label-danger[href]:hover {\n  background-color: #c9302c;\n}\n\n.jumbotron {\n  padding: 2rem 1rem;\n  margin-bottom: 2rem;\n  background-color: #eceeef;\n  border-radius: 0.3rem;\n}\n\n@media (min-width: 544px) {\n  .jumbotron {\n    padding: 4rem 2rem;\n  }\n}\n\n.jumbotron-hr {\n  border-top-color: #d0d5d8;\n}\n\n.jumbotron-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  border-radius: 0;\n}\n\n.alert {\n  padding: 15px;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n\n.alert > p + p {\n  margin-top: 5px;\n}\n\n.alert-heading {\n  color: inherit;\n}\n\n.alert-link {\n  font-weight: bold;\n}\n\n.alert-dismissible {\n  padding-right: 35px;\n}\n\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d0e9c6;\n  color: #3c763d;\n}\n\n.alert-success hr {\n  border-top-color: #c1e2b3;\n}\n\n.alert-success .alert-link {\n  color: #2b542c;\n}\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bcdff1;\n  color: #31708f;\n}\n\n.alert-info hr {\n  border-top-color: #a6d5ec;\n}\n\n.alert-info .alert-link {\n  color: #245269;\n}\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faf2cc;\n  color: #8a6d3b;\n}\n\n.alert-warning hr {\n  border-top-color: #f7ecb5;\n}\n\n.alert-warning .alert-link {\n  color: #66512c;\n}\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebcccc;\n  color: #a94442;\n}\n\n.alert-danger hr {\n  border-top-color: #e4b9b9;\n}\n\n.alert-danger .alert-link {\n  color: #843534;\n}\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 1rem 0;\n  }\n\n  to {\n    background-position: 0 0;\n  }\n}\n\n.progress {\n  display: block;\n  width: 100%;\n  height: 1rem;\n  margin-bottom: 1rem;\n}\n\n.progress[value] {\n  color: #0074d9;\n  border: 0;\n  appearance: none;\n}\n\n.progress[value]::-webkit-progress-bar {\n  background-color: #eee;\n  border-radius: 0.25rem;\n}\n\n.progress[value]::-webkit-progress-value::before {\n  content: attr(value);\n}\n\n.progress[value]::-webkit-progress-value {\n  background-color: #0074d9;\n  border-top-left-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.progress[value=\"100\"]::-webkit-progress-value {\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress {\n    background-color: #eee;\n    border-radius: 0.25rem;\n  }\n\n  .progress-bar {\n    display: inline-block;\n    height: 1rem;\n    text-indent: -999rem;\n    background-color: #0074d9;\n    border-top-left-radius: 0.25rem;\n    border-bottom-left-radius: 0.25rem;\n  }\n\n  .progress[width^=\"0\"] {\n    min-width: 2rem;\n    color: #818a91;\n    background-color: transparent;\n    background-image: none;\n  }\n\n  .progress[width=\"100%\"] {\n    border-top-right-radius: 0.25rem;\n    border-bottom-right-radius: 0.25rem;\n  }\n}\n\n.progress-striped[value]::-webkit-progress-value {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n.progress-striped[value]::-moz-progress-bar {\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 1rem 1rem;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-bar-striped {\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-size: 1rem 1rem;\n  }\n}\n\n.progress-animated[value]::-webkit-progress-value {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n.progress-animated[value]::-moz-progress-bar {\n  animation: progress-bar-stripes 2s linear infinite;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-animated .progress-bar-striped {\n    animation: progress-bar-stripes 2s linear infinite;\n  }\n}\n\n.progress-success[value]::-webkit-progress-value {\n  background-color: #5cb85c;\n}\n\n.progress-success[value]::-moz-progress-bar {\n  background-color: #5cb85c;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-success .progress-bar {\n    background-color: #5cb85c;\n  }\n}\n\n.progress-info[value]::-webkit-progress-value {\n  background-color: #5bc0de;\n}\n\n.progress-info[value]::-moz-progress-bar {\n  background-color: #5bc0de;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-info .progress-bar {\n    background-color: #5bc0de;\n  }\n}\n\n.progress-warning[value]::-webkit-progress-value {\n  background-color: #f0ad4e;\n}\n\n.progress-warning[value]::-moz-progress-bar {\n  background-color: #f0ad4e;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-warning .progress-bar {\n    background-color: #f0ad4e;\n  }\n}\n\n.progress-danger[value]::-webkit-progress-value {\n  background-color: #d9534f;\n}\n\n.progress-danger[value]::-moz-progress-bar {\n  background-color: #d9534f;\n}\n\n@media screen and (min-width: 0\\0) {\n  .progress-danger .progress-bar {\n    background-color: #d9534f;\n  }\n}\n\n.media {\n  display: flex;\n  margin-bottom: 1rem;\n}\n\n.media-body {\n  flex: 1;\n}\n\n.media-middle {\n  align-self: center;\n}\n\n.media-bottom {\n  align-self: flex-end;\n}\n\n.media-object {\n  display: block;\n}\n\n.media-object.img-thumbnail {\n  max-width: none;\n}\n\n.media-right {\n  padding-left: 10px;\n}\n\n.media-left {\n  padding-right: 10px;\n}\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n\n.list-group {\n  padding-left: 0;\n  margin-bottom: 0;\n}\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: .75rem 1.25rem;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n\n.list-group-item:first-child {\n  border-top-right-radius: 0.25rem;\n  border-top-left-radius: 0.25rem;\n}\n\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 0.25rem;\n  border-bottom-left-radius: 0.25rem;\n}\n\n.list-group-flush .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n\n.list-group-flush:first-child .list-group-item:first-child {\n  border-top: 0;\n}\n\n.list-group-flush:last-child .list-group-item:last-child {\n  border-bottom: 0;\n}\n\na.list-group-item,\nbutton.list-group-item {\n  width: 100%;\n  color: #555;\n  text-align: inherit;\n}\n\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\n\na.list-group-item:focus,\na.list-group-item:hover,\nbutton.list-group-item:focus,\nbutton.list-group-item:hover {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n\n.list-group-item.disabled,\n.list-group-item.disabled:focus,\n.list-group-item.disabled:hover {\n  color: #818a91;\n  cursor: not-allowed;\n  background-color: #eceeef;\n}\n\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading {\n  color: inherit;\n}\n\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text {\n  color: #818a91;\n}\n\n.list-group-item.active,\n.list-group-item.active:focus,\n.list-group-item.active:hover {\n  z-index: 2;\n  color: #fff;\n  background-color: #0275d8;\n  border-color: #0275d8;\n}\n\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > .small {\n  color: inherit;\n}\n\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text {\n  color: #a8d6fe;\n}\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\n\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-success:focus,\na.list-group-item-success:hover,\nbutton.list-group-item-success:focus,\nbutton.list-group-item-success:hover {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\n\na.list-group-item-success.active,\na.list-group-item-success.active:focus,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active,\nbutton.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:hover {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\n\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-info:focus,\na.list-group-item-info:hover,\nbutton.list-group-item-info:focus,\nbutton.list-group-item-info:hover {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\n\na.list-group-item-info.active,\na.list-group-item-info.active:focus,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active,\nbutton.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:hover {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\n\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-warning:focus,\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:focus,\nbutton.list-group-item-warning:hover {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\n\na.list-group-item-warning.active,\na.list-group-item-warning.active:focus,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active,\nbutton.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:hover {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\n\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\n\na.list-group-item-danger:focus,\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:focus,\nbutton.list-group-item-danger:hover {\n  color: #a94442;\n  background-color: #ebcccc;\n}\n\na.list-group-item-danger.active,\na.list-group-item-danger.active:focus,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active,\nbutton.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:hover {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n\n.embed-responsive-21by9 {\n  padding-bottom: 42.85714%;\n}\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n\n.embed-responsive-1by1 {\n  padding-bottom: 100%;\n}\n\n.close {\n  float: right;\n  font-size: 1.5rem;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: .2;\n}\n\n.close:focus,\n.close:hover {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  opacity: .5;\n}\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none;\n}\n\n.modal-open {\n  overflow: hidden;\n}\n\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  outline: 0;\n  -webkit-overflow-scrolling: touch;\n}\n\n.modal.fade .modal-dialog {\n  transition: transform .3s ease-out;\n  transform: translate(0, -25%);\n}\n\n.modal.in .modal-dialog {\n  transform: translate(0, 0);\n}\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 0.3rem;\n  outline: 0;\n}\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n\n.modal-backdrop.fade {\n  opacity: 0;\n}\n\n.modal-backdrop.in {\n  opacity: 0.5;\n}\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n\n.modal-header::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.modal-header .close {\n  margin-top: -2px;\n}\n\n.modal-title {\n  margin: 0;\n  line-height: 1.5;\n}\n\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n\n.modal-footer::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n\n@media (min-width: 544px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n\n  .modal-sm {\n    width: 300px;\n  }\n}\n\n@media (min-width: 768px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 0.875rem;\n  opacity: 0;\n}\n\n.tooltip.in {\n  opacity: 0.9;\n}\n\n.tooltip.tooltip-top,\n.tooltip.bs-tether-element-attached-bottom {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n\n.tooltip.tooltip-top .tooltip-arrow,\n.tooltip.bs-tether-element-attached-bottom .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n\n.tooltip.tooltip-right,\n.tooltip.bs-tether-element-attached-left {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n\n.tooltip.tooltip-right .tooltip-arrow,\n.tooltip.bs-tether-element-attached-left .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n\n.tooltip.tooltip-bottom,\n.tooltip.bs-tether-element-attached-top {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n\n.tooltip.tooltip-bottom .tooltip-arrow,\n.tooltip.bs-tether-element-attached-top .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n\n.tooltip.tooltip-left,\n.tooltip.bs-tether-element-attached-right {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n\n.tooltip.tooltip-left .tooltip-arrow,\n.tooltip.bs-tether-element-attached-right .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem;\n}\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.pull-xs-left {\n  float: left !important;\n}\n\n.pull-xs-right {\n  float: right !important;\n}\n\n.pull-xs-none {\n  float: none !important;\n}\n\n@media (min-width: 544px) {\n  .pull-sm-left {\n    float: left !important;\n  }\n\n  .pull-sm-right {\n    float: right !important;\n  }\n\n  .pull-sm-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .pull-md-left {\n    float: left !important;\n  }\n\n  .pull-md-right {\n    float: right !important;\n  }\n\n  .pull-md-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .pull-lg-left {\n    float: left !important;\n  }\n\n  .pull-lg-right {\n    float: right !important;\n  }\n\n  .pull-lg-none {\n    float: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .pull-xl-left {\n    float: left !important;\n  }\n\n  .pull-xl-right {\n    float: right !important;\n  }\n\n  .pull-xl-none {\n    float: none !important;\n  }\n}\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n\n.invisible {\n  visibility: hidden !important;\n}\n\n.text-hide {\n  font: \"0/0\" a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n\n.text-justify {\n  text-align: justify !important;\n}\n\n.text-nowrap {\n  white-space: nowrap !important;\n}\n\n.text-truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.text-xs-left {\n  text-align: left !important;\n}\n\n.text-xs-right {\n  text-align: right !important;\n}\n\n.text-xs-center {\n  text-align: center !important;\n}\n\n@media (min-width: 544px) {\n  .text-sm-left {\n    text-align: left !important;\n  }\n\n  .text-sm-right {\n    text-align: right !important;\n  }\n\n  .text-sm-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .text-md-left {\n    text-align: left !important;\n  }\n\n  .text-md-right {\n    text-align: right !important;\n  }\n\n  .text-md-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .text-lg-left {\n    text-align: left !important;\n  }\n\n  .text-lg-right {\n    text-align: right !important;\n  }\n\n  .text-lg-center {\n    text-align: center !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .text-xl-left {\n    text-align: left !important;\n  }\n\n  .text-xl-right {\n    text-align: right !important;\n  }\n\n  .text-xl-center {\n    text-align: center !important;\n  }\n}\n\n.text-lowercase {\n  text-transform: lowercase !important;\n}\n\n.text-uppercase {\n  text-transform: uppercase !important;\n}\n\n.text-capitalize {\n  text-transform: capitalize !important;\n}\n\n.font-weight-normal {\n  font-weight: normal;\n}\n\n.font-weight-bold {\n  font-weight: bold;\n}\n\n.font-italic {\n  font-style: italic;\n}\n\n.text-muted {\n  color: #818a91;\n}\n\n.text-primary {\n  color: #0275d8 !important;\n}\n\na.text-primary:focus,\na.text-primary:hover {\n  color: #025aa5;\n}\n\n.text-success {\n  color: #5cb85c !important;\n}\n\na.text-success:focus,\na.text-success:hover {\n  color: #449d44;\n}\n\n.text-info {\n  color: #5bc0de !important;\n}\n\na.text-info:focus,\na.text-info:hover {\n  color: #31b0d5;\n}\n\n.text-warning {\n  color: #f0ad4e !important;\n}\n\na.text-warning:focus,\na.text-warning:hover {\n  color: #ec971f;\n}\n\n.text-danger {\n  color: #d9534f !important;\n}\n\na.text-danger:focus,\na.text-danger:hover {\n  color: #c9302c;\n}\n\n.bg-inverse {\n  color: #eceeef;\n  background-color: #373a3c;\n}\n\n.bg-faded {\n  background-color: #f7f7f9;\n}\n\n.bg-primary {\n  color: #fff !important;\n  background-color: #0275d8 !important;\n}\n\na.bg-primary:focus,\na.bg-primary:hover {\n  background-color: #025aa5;\n}\n\n.bg-success {\n  color: #fff !important;\n  background-color: #5cb85c !important;\n}\n\na.bg-success:focus,\na.bg-success:hover {\n  background-color: #449d44;\n}\n\n.bg-info {\n  color: #fff !important;\n  background-color: #5bc0de !important;\n}\n\na.bg-info:focus,\na.bg-info:hover {\n  background-color: #31b0d5;\n}\n\n.bg-warning {\n  color: #fff !important;\n  background-color: #f0ad4e !important;\n}\n\na.bg-warning:focus,\na.bg-warning:hover {\n  background-color: #ec971f;\n}\n\n.bg-danger {\n  color: #fff !important;\n  background-color: #d9534f !important;\n}\n\na.bg-danger:focus,\na.bg-danger:hover {\n  background-color: #c9302c;\n}\n\n.m-x-auto {\n  margin-right: auto !important;\n  margin-left: auto !important;\n}\n\n.m-a-0 {\n  margin: 0 0 !important;\n}\n\n.m-t-0 {\n  margin-top: 0 !important;\n}\n\n.m-r-0 {\n  margin-right: 0 !important;\n}\n\n.m-b-0 {\n  margin-bottom: 0 !important;\n}\n\n.m-l-0 {\n  margin-left: 0 !important;\n}\n\n.m-x-0 {\n  margin-right: 0 !important;\n  margin-left: 0 !important;\n}\n\n.m-y-0 {\n  margin-top: 0 !important;\n  margin-bottom: 0 !important;\n}\n\n.m-a-1 {\n  margin: 1rem 1rem !important;\n}\n\n.m-t-1 {\n  margin-top: 1rem !important;\n}\n\n.m-r-1 {\n  margin-right: 1rem !important;\n}\n\n.m-b-1 {\n  margin-bottom: 1rem !important;\n}\n\n.m-l-1 {\n  margin-left: 1rem !important;\n}\n\n.m-x-1 {\n  margin-right: 1rem !important;\n  margin-left: 1rem !important;\n}\n\n.m-y-1 {\n  margin-top: 1rem !important;\n  margin-bottom: 1rem !important;\n}\n\n.m-a-2 {\n  margin: 1.5rem 1.5rem !important;\n}\n\n.m-t-2 {\n  margin-top: 1.5rem !important;\n}\n\n.m-r-2 {\n  margin-right: 1.5rem !important;\n}\n\n.m-b-2 {\n  margin-bottom: 1.5rem !important;\n}\n\n.m-l-2 {\n  margin-left: 1.5rem !important;\n}\n\n.m-x-2 {\n  margin-right: 1.5rem !important;\n  margin-left: 1.5rem !important;\n}\n\n.m-y-2 {\n  margin-top: 1.5rem !important;\n  margin-bottom: 1.5rem !important;\n}\n\n.m-a-3 {\n  margin: 3rem 3rem !important;\n}\n\n.m-t-3 {\n  margin-top: 3rem !important;\n}\n\n.m-r-3 {\n  margin-right: 3rem !important;\n}\n\n.m-b-3 {\n  margin-bottom: 3rem !important;\n}\n\n.m-l-3 {\n  margin-left: 3rem !important;\n}\n\n.m-x-3 {\n  margin-right: 3rem !important;\n  margin-left: 3rem !important;\n}\n\n.m-y-3 {\n  margin-top: 3rem !important;\n  margin-bottom: 3rem !important;\n}\n\n.p-a-0 {\n  padding: 0 0 !important;\n}\n\n.p-t-0 {\n  padding-top: 0 !important;\n}\n\n.p-r-0 {\n  padding-right: 0 !important;\n}\n\n.p-b-0 {\n  padding-bottom: 0 !important;\n}\n\n.p-l-0 {\n  padding-left: 0 !important;\n}\n\n.p-x-0 {\n  padding-right: 0 !important;\n  padding-left: 0 !important;\n}\n\n.p-y-0 {\n  padding-top: 0 !important;\n  padding-bottom: 0 !important;\n}\n\n.p-a-1 {\n  padding: 1rem 1rem !important;\n}\n\n.p-t-1 {\n  padding-top: 1rem !important;\n}\n\n.p-r-1 {\n  padding-right: 1rem !important;\n}\n\n.p-b-1 {\n  padding-bottom: 1rem !important;\n}\n\n.p-l-1 {\n  padding-left: 1rem !important;\n}\n\n.p-x-1 {\n  padding-right: 1rem !important;\n  padding-left: 1rem !important;\n}\n\n.p-y-1 {\n  padding-top: 1rem !important;\n  padding-bottom: 1rem !important;\n}\n\n.p-a-2 {\n  padding: 1.5rem 1.5rem !important;\n}\n\n.p-t-2 {\n  padding-top: 1.5rem !important;\n}\n\n.p-r-2 {\n  padding-right: 1.5rem !important;\n}\n\n.p-b-2 {\n  padding-bottom: 1.5rem !important;\n}\n\n.p-l-2 {\n  padding-left: 1.5rem !important;\n}\n\n.p-x-2 {\n  padding-right: 1.5rem !important;\n  padding-left: 1.5rem !important;\n}\n\n.p-y-2 {\n  padding-top: 1.5rem !important;\n  padding-bottom: 1.5rem !important;\n}\n\n.p-a-3 {\n  padding: 3rem 3rem !important;\n}\n\n.p-t-3 {\n  padding-top: 3rem !important;\n}\n\n.p-r-3 {\n  padding-right: 3rem !important;\n}\n\n.p-b-3 {\n  padding-bottom: 3rem !important;\n}\n\n.p-l-3 {\n  padding-left: 3rem !important;\n}\n\n.p-x-3 {\n  padding-right: 3rem !important;\n  padding-left: 3rem !important;\n}\n\n.p-y-3 {\n  padding-top: 3rem !important;\n  padding-bottom: 3rem !important;\n}\n\n.pos-f-t {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n\n.hidden-xs-up {\n  display: none !important;\n}\n\n@media (max-width: 543px) {\n  .hidden-xs-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 544px) {\n  .hidden-sm-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 767px) {\n  .hidden-sm-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .hidden-md-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 991px) {\n  .hidden-md-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .hidden-lg-up {\n    display: none !important;\n  }\n}\n\n@media (max-width: 1199px) {\n  .hidden-lg-down {\n    display: none !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .hidden-xl-up {\n    display: none !important;\n  }\n}\n\n.hidden-xl-down {\n  display: none !important;\n}\n\n.visible-print-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n\n.visible-print-inline {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n\n.visible-print-inline-block {\n  display: none !important;\n}\n\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAtbG9hZGVyL25vLW9wLmpzIiwic291cmNlcyI6WyIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC1sb2FkZXIvbm8tb3AuanMiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19taXhpbnMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19icmVha3BvaW50cy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2hvdmVyLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9faW1hZ2Uuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19sYWJlbC5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3Jlc2V0LWZpbHRlci5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3Jlc2l6ZS5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3NjcmVlbi1yZWFkZXIuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19zaXplLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fdGFiLWZvY3VzLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fcmVzZXQtdGV4dC5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3RleHQtZW1waGFzaXMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL190ZXh0LWhpZGUuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL190ZXh0LXRydW5jYXRlLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYWxlcnQuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19idXR0b25zLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fY2FyZHMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19wYWdpbmF0aW9uLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fbGlzdHMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19saXN0LWdyb3VwLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fbmF2LWRpdmlkZXIuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19mb3Jtcy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX3Byb2dyZXNzLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fdGFibGUtcm93LnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYmFja2dyb3VuZC12YXJpYW50LnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fYm9yZGVyLXJhZGl1cy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2dyYWRpZW50cy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnMvX2NsZWFyZml4LnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fY2VudGVyLWJsb2NrLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fZ3JpZC1mcmFtZXdvcmsuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zL19ncmlkLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGlucy9fcHVsbHMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fbm9ybWFsaXplLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19wcmludC5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fcmVib290LnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL190eXBlLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19pbWFnZXMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2NvZGUuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2dyaWQuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3RhYmxlcy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fZm9ybXMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2J1dHRvbnMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2FuaW1hdGlvbi5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fZHJvcGRvd24uc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2J1dHRvbi1ncm91cC5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9faW5wdXQtZ3JvdXAuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2N1c3RvbS1mb3Jtcy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fbmF2LnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19uYXZiYXIuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2NhcmQuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2JyZWFkY3J1bWIuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3BhZ2luYXRpb24uc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3BhZ2VyLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19sYWJlbHMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX2p1bWJvdHJvbi5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fYWxlcnQuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3Byb2dyZXNzLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL19tZWRpYS5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fbGlzdC1ncm91cC5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fcmVzcG9uc2l2ZS1lbWJlZC5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fY2xvc2Uuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX21vZGFsLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL190b29sdGlwLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMuc2NzcyIsIi9Vc2Vycy9JbHlhL1dvcmsvb2htdGVjaC9ub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvX3V0aWxpdGllcy1iYWNrZ3JvdW5kLnNjc3MiLCIvVXNlcnMvSWx5YS9Xb3JrL29obXRlY2gvbm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMtc3BhY2luZy5zY3NzIiwiL1VzZXJzL0lseWEvV29yay9vaG10ZWNoL25vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9fdXRpbGl0aWVzLXJlc3BvbnNpdmUuc2NzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIkZW5hYmxlLWZsZXg6IHRydWU7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX21peGluc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL192YXJpYWJsZXNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAvc2Nzcy9fbm9ybWFsaXplXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX3ByaW50XCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX3JlYm9vdFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL190eXBlXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2ltYWdlc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19jb2RlXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2dyaWRcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAvc2Nzcy9fdGFibGVzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2Zvcm1zXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2J1dHRvbnNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAvc2Nzcy9fYW5pbWF0aW9uXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2Ryb3Bkb3duXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2J1dHRvbi1ncm91cFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19pbnB1dC1ncm91cFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19jdXN0b20tZm9ybXNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAvc2Nzcy9fbmF2XCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX25hdmJhclwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19jYXJkXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2JyZWFkY3J1bWJcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAvc2Nzcy9fcGFnaW5hdGlvblwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19wYWdlclwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19sYWJlbHNcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAvc2Nzcy9fanVtYm90cm9uXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2FsZXJ0XCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX3Byb2dyZXNzXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX21lZGlhXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX2xpc3QtZ3JvdXBcIjtcbkBpbXBvcnQgXCIuLi9ib290c3RyYXAvc2Nzcy9fcmVzcG9uc2l2ZS1lbWJlZFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19jbG9zZVwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL19tb2RhbFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL190b29sdGlwXCI7XG5AaW1wb3J0IFwiLi4vYm9vdHN0cmFwL3Njc3MvX3V0aWxpdGllc1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMtYmFja2dyb3VuZFwiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMtc3BhY2luZ1wiO1xuQGltcG9ydCBcIi4uL2Jvb3RzdHJhcC9zY3NzL191dGlsaXRpZXMtcmVzcG9uc2l2ZVwiO1xuXG4iLCIvLyBUb2dnbGVzXG4vL1xuLy8gVXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGdsb2JhbCB2YXJpYWJsZXMgdG8gZW5hYmxlIGNlcnRhaW4gdGhlbWUgZmVhdHVyZXMuXG5cbkBtaXhpbiBib3gtc2hhZG93KCRzaGFkb3cuLi4pIHtcbiAgQGlmICRlbmFibGUtc2hhZG93cyB7XG4gICAgYm94LXNoYWRvdzogJHNoYWRvdztcbiAgfVxufVxuXG5AbWl4aW4gdHJhbnNpdGlvbigkdHJhbnNpdGlvbi4uLikge1xuICBAaWYgJGVuYWJsZS10cmFuc2l0aW9ucyB7XG4gICAgdHJhbnNpdGlvbjogJHRyYW5zaXRpb247XG4gIH1cbn1cblxuLy8gVXRpbGl0aWVzXG5AaW1wb3J0IFwibWl4aW5zL2JyZWFrcG9pbnRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL2hvdmVyXCI7XG5AaW1wb3J0IFwibWl4aW5zL2ltYWdlXCI7XG5AaW1wb3J0IFwibWl4aW5zL2xhYmVsXCI7XG5AaW1wb3J0IFwibWl4aW5zL3Jlc2V0LWZpbHRlclwiO1xuQGltcG9ydCBcIm1peGlucy9yZXNpemVcIjtcbkBpbXBvcnQgXCJtaXhpbnMvc2NyZWVuLXJlYWRlclwiO1xuQGltcG9ydCBcIm1peGlucy9zaXplXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RhYi1mb2N1c1wiO1xuQGltcG9ydCBcIm1peGlucy9yZXNldC10ZXh0XCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtZW1waGFzaXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvdGV4dC1oaWRlXCI7XG5AaW1wb3J0IFwibWl4aW5zL3RleHQtdHJ1bmNhdGVcIjtcblxuLy8gLy8gQ29tcG9uZW50c1xuQGltcG9ydCBcIm1peGlucy9hbGVydFwiO1xuQGltcG9ydCBcIm1peGlucy9idXR0b25zXCI7XG5AaW1wb3J0IFwibWl4aW5zL2NhcmRzXCI7XG5AaW1wb3J0IFwibWl4aW5zL3BhZ2luYXRpb25cIjtcbkBpbXBvcnQgXCJtaXhpbnMvbGlzdHNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvbGlzdC1ncm91cFwiO1xuQGltcG9ydCBcIm1peGlucy9uYXYtZGl2aWRlclwiO1xuQGltcG9ydCBcIm1peGlucy9mb3Jtc1wiO1xuQGltcG9ydCBcIm1peGlucy9wcm9ncmVzc1wiO1xuQGltcG9ydCBcIm1peGlucy90YWJsZS1yb3dcIjtcblxuLy8gLy8gU2tpbnNcbkBpbXBvcnQgXCJtaXhpbnMvYmFja2dyb3VuZC12YXJpYW50XCI7XG5AaW1wb3J0IFwibWl4aW5zL2JvcmRlci1yYWRpdXNcIjtcbkBpbXBvcnQgXCJtaXhpbnMvZ3JhZGllbnRzXCI7XG5cbi8vIC8vIExheW91dFxuQGltcG9ydCBcIm1peGlucy9jbGVhcmZpeFwiO1xuQGltcG9ydCBcIm1peGlucy9jZW50ZXItYmxvY2tcIjtcbi8vIEBpbXBvcnQgXCJtaXhpbnMvbmF2YmFyLWFsaWduXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWQtZnJhbWV3b3JrXCI7XG5AaW1wb3J0IFwibWl4aW5zL2dyaWRcIjtcbkBpbXBvcnQgXCJtaXhpbnMvcHVsbHNcIjtcbiIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU0NHB4LCBtZDogNzY4cHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTQ0cHgsIG1kOiA3NjhweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTQ0cHgsIG1kOiA3NjhweCkpXG4vLyAgICA1NDRweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4xLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NDRweCwgbWQ6IDc2OHB4KSlcbi8vICAgIDc2N3B4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAxcHgsIG51bGwpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiQG1peGluIGhvdmVyIHtcbiAgQGlmICRlbmFibGUtaG92ZXItbWVkaWEtcXVlcnkge1xuICAgIC8vIFNlZSBNZWRpYSBRdWVyaWVzIExldmVsIDQ6IGh0dHA6Ly9kcmFmdHMuY3Nzd2cub3JnL21lZGlhcXVlcmllcy8jaG92ZXJcbiAgICAvLyBDdXJyZW50bHkgc2hpbW1lZCBieSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9tcTQtaG92ZXItc2hpbVxuICAgIEBtZWRpYSAoaG92ZXI6IGhvdmVyKSB7XG4gICAgICAmOmhvdmVyIHsgQGNvbnRlbnQgfVxuICAgIH1cbiAgfVxuICBAZWxzZSB7XG4gICAgJjpob3ZlciB7IEBjb250ZW50IH1cbiAgfVxufVxuXG5AbWl4aW4gaG92ZXItZm9jdXMge1xuICBAaWYgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeSB7XG4gICAgJjpmb2N1cyB7IEBjb250ZW50IH1cbiAgICBAaW5jbHVkZSBob3ZlciB7IEBjb250ZW50IH1cbiAgfVxuICBAZWxzZSB7XG4gICAgJjpmb2N1cyxcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gIEBpZiAkZW5hYmxlLWhvdmVyLW1lZGlhLXF1ZXJ5IHtcbiAgICAmLFxuICAgICY6Zm9jdXMge1xuICAgICAgQGNvbnRlbnRcbiAgICB9XG4gICAgQGluY2x1ZGUgaG92ZXIgeyBAY29udGVudCB9XG4gIH1cbiAgQGVsc2Uge1xuICAgICYsXG4gICAgJjpmb2N1cyxcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBob3Zlci1mb2N1cy1hY3RpdmUge1xuICBAaWYgJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeSB7XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSB7XG4gICAgICBAY29udGVudFxuICAgIH1cbiAgICBAaW5jbHVkZSBob3ZlciB7IEBjb250ZW50IH1cbiAgfVxuICBAZWxzZSB7XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSxcbiAgICAmOmhvdmVyIHtcbiAgICAgIEBjb250ZW50XG4gICAgfVxuICB9XG59XG4iLCIvLyBJbWFnZSBNaXhpbnNcbi8vIC0gUmVzcG9uc2l2ZSBpbWFnZVxuLy8gLSBSZXRpbmEgaW1hZ2VcblxuXG4vLyBSZXNwb25zaXZlIGltYWdlXG4vL1xuLy8gS2VlcCBpbWFnZXMgZnJvbSBzY2FsaW5nIGJleW9uZCB0aGUgd2lkdGggb2YgdGhlaXIgcGFyZW50cy5cblxuQG1peGluIGltZy1mbHVpZCgkZGlzcGxheTogYmxvY2spIHtcbiAgZGlzcGxheTogJGRpc3BsYXk7XG4gIG1heC13aWR0aDogMTAwJTsgLy8gUGFydCAxOiBTZXQgYSBtYXhpbXVtIHJlbGF0aXZlIHRvIHRoZSBwYXJlbnRcbiAgaGVpZ2h0OiBhdXRvOyAvLyBQYXJ0IDI6IFNjYWxlIHRoZSBoZWlnaHQgYWNjb3JkaW5nIHRvIHRoZSB3aWR0aCwgb3RoZXJ3aXNlIHlvdSBnZXQgc3RyZXRjaGluZ1xufVxuXG5cbi8vIFJldGluYSBpbWFnZVxuLy9cbi8vIFNob3J0IHJldGluYSBtaXhpbiBmb3Igc2V0dGluZyBiYWNrZ3JvdW5kLWltYWdlIGFuZCAtc2l6ZS5cblxuQG1peGluIGltZy1yZXRpbmEoJGZpbGUtMXgsICRmaWxlLTJ4LCAkd2lkdGgtMXgsICRoZWlnaHQtMXgpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCRmaWxlLTF4KTtcblxuICAvLyBBdXRvcHJlZml4ZXIgdGFrZXMgY2FyZSBvZiBhZGRpbmcgLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvIGFuZCAtby1taW4tZGV2aWNlLXBpeGVsLXJhdGlvLFxuICAvLyBidXQgZG9lc24ndCBjb252ZXJ0IGRwcHg9PmRwaS5cbiAgLy8gVGhlcmUncyBubyBzdWNoIHRoaW5nIGFzIHVucHJlZml4ZWQgbWluLWRldmljZS1waXhlbC1yYXRpbyBzaW5jZSBpdCdzIG5vbnN0YW5kYXJkLlxuICAvLyBDb21wYXRpYmlsaXR5IGluZm86IGh0dHA6Ly9jYW5pdXNlLmNvbS8jZmVhdD1jc3MtbWVkaWEtcmVzb2x1dGlvblxuICBAbWVkaWFcbiAgb25seSBzY3JlZW4gYW5kIChtaW4tcmVzb2x1dGlvbjogMTkyZHBpKSwgLy8gSUU5LTExIGRvbid0IHN1cHBvcnQgZHBweFxuICBvbmx5IHNjcmVlbiBhbmQgKG1pbi1yZXNvbHV0aW9uOiAyZHBweCkgeyAvLyBTdGFuZGFyZGl6ZWRcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZpbGUtMngpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogJHdpZHRoLTF4ICRoZWlnaHQtMXg7XG4gIH1cbn1cbiIsIi8vIExhYmVsc1xuXG5AbWl4aW4gbGFiZWwtdmFyaWFudCgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICZbaHJlZl0ge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBSZXNldCBmaWx0ZXJzIGZvciBJRVxuLy9cbi8vIFdoZW4geW91IG5lZWQgdG8gcmVtb3ZlIGEgZ3JhZGllbnQgYmFja2dyb3VuZCwgZG8gbm90IGZvcmdldCB0byB1c2UgdGhpcyB0byByZXNldFxuLy8gdGhlIElFIGZpbHRlciBmb3IgSUU5LlxuXG5AbWl4aW4gcmVzZXQtZmlsdGVyKCkge1xuICBmaWx0ZXI6IFwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQgPSBmYWxzZSlcIjtcbn1cbiIsIi8vIFJlc2l6ZSBhbnl0aGluZ1xuXG5AbWl4aW4gcmVzaXphYmxlKCRkaXJlY3Rpb24pIHtcbiAgcmVzaXplOiAkZGlyZWN0aW9uOyAvLyBPcHRpb25zOiBob3Jpem9udGFsLCB2ZXJ0aWNhbCwgYm90aFxuICBvdmVyZmxvdzogYXV0bzsgLy8gUGVyIENTUzMgVUksIGByZXNpemVgIG9ubHkgYXBwbGllcyB3aGVuIGBvdmVyZmxvd2AgaXNuJ3QgYHZpc2libGVgXG59XG4iLCIvLyBPbmx5IGRpc3BsYXkgY29udGVudCB0byBzY3JlZW4gcmVhZGVyc1xuLy9cbi8vIFNlZTogaHR0cDovL2ExMXlwcm9qZWN0LmNvbS9wb3N0cy9ob3ctdG8taGlkZS1jb250ZW50L1xuXG5AbWl4aW4gc3Itb25seSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY2xpcDogcmVjdCgwLDAsMCwwKTtcbiAgYm9yZGVyOiAwO1xufVxuXG4vLyBVc2UgaW4gY29uanVuY3Rpb24gd2l0aCAuc3Itb25seSB0byBvbmx5IGRpc3BsYXkgY29udGVudCB3aGVuIGl0J3MgZm9jdXNlZC5cbi8vXG4vLyBVc2VmdWwgZm9yIFwiU2tpcCB0byBtYWluIGNvbnRlbnRcIiBsaW5rczsgc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTMvTk9URS1XQ0FHMjAtVEVDSFMtMjAxMzA5MDUvRzFcbi8vXG4vLyBDcmVkaXQ6IEhUTUw1IEJvaWxlcnBsYXRlXG5cbkBtaXhpbiBzci1vbmx5LWZvY3VzYWJsZSB7XG4gICY6YWN0aXZlLFxuICAmOmZvY3VzIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBtYXJnaW46IDA7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgY2xpcDogYXV0bztcbiAgfVxufVxuIiwiLy8gU2l6aW5nIHNob3J0Y3V0c1xuXG5AbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQ6ICR3aWR0aCkge1xuICB3aWR0aDogJHdpZHRoO1xuICBoZWlnaHQ6ICRoZWlnaHQ7XG59XG4iLCIvLyBXZWJLaXQtc3R5bGUgZm9jdXNcblxuQG1peGluIHRhYi1mb2N1cygpIHtcbiAgLy8gRGVmYXVsdFxuICBvdXRsaW5lOiB0aGluIGRvdHRlZDtcbiAgLy8gV2ViS2l0XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7XG59XG4iLCJAbWl4aW4gcmVzZXQtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktYmFzZTtcbiAgLy8gV2UgZGVsaWJlcmF0ZWx5IGRvIE5PVCByZXNldCBmb250LXNpemUuXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgbGluZS1icmVhazogYXV0bztcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgdGV4dC1hbGlnbjogbGVmdDsgLy8gRmFsbGJhY2sgZm9yIHdoZXJlIGBzdGFydGAgaXMgbm90IHN1cHBvcnRlZFxuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuIiwiLy8gVHlwb2dyYXBoeVxuXG5AbWl4aW4gdGV4dC1lbXBoYXNpcy12YXJpYW50KCRwYXJlbnQsICRjb2xvcikge1xuICAjeyRwYXJlbnR9IHtcbiAgICBjb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSN7JHBhcmVudH0ge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLCAxMCUpO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gQ1NTIGltYWdlIHJlcGxhY2VtZW50XG5AbWl4aW4gdGV4dC1oaWRlKCkge1xuICBmb250OiBcIjAvMFwiIGE7XG4gIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG4iLCIvLyBUZXh0IHRydW5jYXRlXG4vLyBSZXF1aXJlcyBpbmxpbmUtYmxvY2sgb3IgYmxvY2sgZm9yIHByb3BlciBzdHlsaW5nXG5cbkBtaXhpbiB0ZXh0LXRydW5jYXRlKCkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iLCIvLyBBbGVydHNcblxuQG1peGluIGFsZXJ0LXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIsICRib2R5LWNvbG9yKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gIGNvbG9yOiAkYm9keS1jb2xvcjtcblxuICBociB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogZGFya2VuKCRib3JkZXIsIDUlKTtcbiAgfVxuICAuYWxlcnQtbGluayB7XG4gICAgY29sb3I6IGRhcmtlbigkYm9keS1jb2xvciwgMTAlKTtcbiAgfVxufVxuIiwiLy8gQnV0dG9uIHZhcmlhbnRzXG4vL1xuLy8gRWFzaWx5IHB1bXAgb3V0IGRlZmF1bHQgc3R5bGVzLCBhcyB3ZWxsIGFzIDpob3ZlciwgOmZvY3VzLCA6YWN0aXZlLFxuLy8gYW5kIGRpc2FibGVkIG9wdGlvbnMgZm9yIGFsbCBidXR0b25zXG5cbkBtaXhpbiBidXR0b24tdmFyaWFudCgkY29sb3IsICRiYWNrZ3JvdW5kLCAkYm9yZGVyKSB7XG4gICRhY3RpdmUtYmFja2dyb3VuZDogZGFya2VuKCRiYWNrZ3JvdW5kLCAxMCUpO1xuICAkYWN0aXZlLWJvcmRlcjogZGFya2VuKCRib3JkZXIsIDEyJSk7XG5cbiAgY29sb3I6ICRjb2xvcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsLjE1KSwgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSkpO1xuXG4gIEBpbmNsdWRlIGhvdmVyIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWN0aXZlLWJvcmRlcjtcbiAgfVxuXG4gICY6Zm9jdXMsXG4gICYuZm9jdXMge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBib3JkZXItY29sb3I6ICRhY3RpdmUtYm9yZGVyO1xuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlLFxuICAub3BlbiA+ICYuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBjb2xvcjogJGNvbG9yO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkYWN0aXZlLWJvcmRlcjtcbiAgICAvLyBSZW1vdmUgdGhlIGdyYWRpZW50IGZvciB0aGUgcHJlc3NlZC9hY3RpdmUgc3RhdGVcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuXG4gICAgJjpob3ZlcixcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgY29sb3I6ICRjb2xvcjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkYmFja2dyb3VuZCwgMTclKTtcbiAgICAgICAgICBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLCAyNSUpO1xuICAgIH1cbiAgfVxuXG4gICYuZGlzYWJsZWQsXG4gICY6ZGlzYWJsZWQge1xuICAgICY6Zm9jdXMsXG4gICAgJi5mb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRib3JkZXI7XG4gICAgfVxuICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoJGNvbG9yKSB7XG4gIGNvbG9yOiAkY29sb3I7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItY29sb3I6ICRjb2xvcjtcblxuICAmOmZvY3VzLFxuICAmLmZvY3VzLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gIC5vcGVuID4gJi5kcm9wZG93bi10b2dnbGUge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gIH1cbiAgQGluY2x1ZGUgaG92ZXIge1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gIH1cblxuICAmLmRpc2FibGVkLFxuICAmOmRpc2FibGVkIHtcbiAgICAmOmZvY3VzLFxuICAgICYuZm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjAlKTtcbiAgICB9XG4gICAgQGluY2x1ZGUgaG92ZXIge1xuICAgICAgYm9yZGVyLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjAlKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gQnV0dG9uIHNpemVzXG5AbWl4aW4gYnV0dG9uLXNpemUoJHBhZGRpbmcteSwgJHBhZGRpbmcteCwgJGZvbnQtc2l6ZSwgJGxpbmUtaGVpZ2h0LCAkYm9yZGVyLXJhZGl1cykge1xuICBwYWRkaW5nOiAkcGFkZGluZy15ICRwYWRkaW5nLXg7XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG59XG4iLCIvLyBDYXJkIHZhcmlhbnRzXG5cbkBtaXhpbiBjYXJkLXZhcmlhbnQoJGJhY2tncm91bmQsICRib3JkZXIpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIGJvcmRlci1jb2xvcjogJGJvcmRlcjtcbn1cblxuQG1peGluIGNhcmQtb3V0bGluZS12YXJpYW50KCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG59XG5cbi8vXG4vLyBJbnZlcnNlIHRleHQgd2l0aGluIGEgY2FyZCBmb3IgdXNlIHdpdGggZGFyayBiYWNrZ3JvdW5kc1xuLy9cblxuQG1peGluIGNhcmQtaW52ZXJzZSB7XG4gIC5jYXJkLWhlYWRlcixcbiAgLmNhcmQtZm9vdGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAkY2FyZC1ib3JkZXItd2lkdGggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwuMik7XG4gIH1cbiAgLmNhcmQtaGVhZGVyLFxuICAuY2FyZC1mb290ZXIsXG4gIC5jYXJkLXRpdGxlLFxuICAuY2FyZC1ibG9ja3F1b3RlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICAuY2FyZC1saW5rLFxuICAuY2FyZC10ZXh0LFxuICAuY2FyZC1ibG9ja3F1b3RlID4gZm9vdGVyIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuNjUpO1xuICB9XG4gIC5jYXJkLWxpbmsge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY2FyZC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy8gUGFnaW5hdGlvblxuXG5AbWl4aW4gcGFnaW5hdGlvbi1zaXplKCRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gIC5wYWdlLWxpbmsge1xuICAgIHBhZGRpbmc6ICRwYWRkaW5nLXZlcnRpY2FsICRwYWRkaW5nLWhvcml6b250YWw7XG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIH1cblxuICAucGFnZS1pdGVtIHtcbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgIC5wYWdlLWxpbmsge1xuICAgICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgLnBhZ2UtbGluayB7XG4gICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gTGlzdHNcblxuLy8gVW5zdHlsZWQga2VlcHMgbGlzdCBpdGVtcyBibG9jayBsZXZlbCwganVzdCByZW1vdmVzIGRlZmF1bHQgYnJvd3NlciBwYWRkaW5nIGFuZCBsaXN0LXN0eWxlXG5AbWl4aW4gbGlzdC11bnN0eWxlZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbiIsIi8vIExpc3QgR3JvdXBzXG5cbkBtaXhpbiBsaXN0LWdyb3VwLWl0ZW0tdmFyaWFudCgkc3RhdGUsICRiYWNrZ3JvdW5kLCAkY29sb3IpIHtcbiAgLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0ge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gIH1cblxuICBhLmxpc3QtZ3JvdXAtaXRlbS0jeyRzdGF0ZX0sXG4gIGJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0tI3skc3RhdGV9IHtcbiAgICBjb2xvcjogJGNvbG9yO1xuXG4gICAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGJhY2tncm91bmQsIDUlKTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiLy8gSG9yaXpvbnRhbCBkaXZpZGVyc1xuLy9cbi8vIERpdmlkZXJzIChiYXNpY2FsbHkgYW4gaHIpIHdpdGhpbiBkcm9wZG93bnMgYW5kIG5hdiBsaXN0c1xuXG5AbWl4aW4gbmF2LWRpdmlkZXIoJGNvbG9yOiAjZTVlNWU1KSB7XG4gIGhlaWdodDogMXB4O1xuICBtYXJnaW46ICgkc3BhY2VyLXkgLyAyKSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG59XG4iLCIvLyBGb3JtIHZhbGlkYXRpb24gc3RhdGVzXG4vL1xuLy8gVXNlZCBpbiBfZm9ybXMuc2NzcyB0byBnZW5lcmF0ZSB0aGUgZm9ybSB2YWxpZGF0aW9uIENTUyBmb3Igd2FybmluZ3MsIGVycm9ycyxcbi8vIGFuZCBzdWNjZXNzZXMuXG5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkY29sb3IpIHtcbiAgLy8gQ29sb3IgdGhlIGxhYmVsIGFuZCBoZWxwIHRleHRcbiAgLnRleHQtaGVscCxcbiAgLmZvcm0tY29udHJvbC1sYWJlbCxcbiAgLnJhZGlvLFxuICAuY2hlY2tib3gsXG4gIC5yYWRpby1pbmxpbmUsXG4gIC5jaGVja2JveC1pbmxpbmUsXG4gICYucmFkaW8gbGFiZWwsXG4gICYuY2hlY2tib3ggbGFiZWwsXG4gICYucmFkaW8taW5saW5lIGxhYmVsLFxuICAmLmNoZWNrYm94LWlubGluZSBsYWJlbCAge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gIH1cbiAgLy8gU2V0IHRoZSBib3JkZXIgYW5kIGJveCBzaGFkb3cgb24gc3BlY2lmaWMgaW5wdXRzIHRvIG1hdGNoXG4gIC5mb3JtLWNvbnRyb2wge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgIC8vIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSkpOyAvLyBSZWRlY2xhcmUgc28gdHJhbnNpdGlvbnMgd29ya1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAvLyBib3JkZXItY29sb3I6IGRhcmtlbigkYm9yZGVyLWNvbG9yLCAxMCUpO1xuICAgICAgLy8gJHNoYWRvdzogaW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA3NSksIDAgMCA2cHggbGlnaHRlbigkYm9yZGVyLWNvbG9yLCAyMCUpO1xuICAgICAgLy8gQGluY2x1ZGUgYm94LXNoYWRvdygkc2hhZG93KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgdmFsaWRhdGlvbiBzdGF0ZXMgYWxzbyBmb3IgYWRkb25zXG4gIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgY29sb3I6ICRjb2xvcjtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgNDAlKTtcbiAgfVxuICAvLyBPcHRpb25hbCBmZWVkYmFjayBpY29uXG4gIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgIGNvbG9yOiAkY29sb3I7XG4gIH1cbn1cblxuLy8gRm9ybSBjb250cm9sIGZvY3VzIHN0YXRlXG4vL1xuLy8gR2VuZXJhdGUgYSBjdXN0b21pemVkIGZvY3VzIHN0YXRlIGFuZCBmb3IgYW55IGlucHV0IHdpdGggdGhlIHNwZWNpZmllZCBjb2xvcixcbi8vIHdoaWNoIGRlZmF1bHRzIHRvIHRoZSBgQGlucHV0LWJvcmRlci1mb2N1c2AgdmFyaWFibGUuXG4vL1xuLy8gV2UgaGlnaGx5IGVuY291cmFnZSB5b3UgdG8gbm90IGN1c3RvbWl6ZSB0aGUgZGVmYXVsdCB2YWx1ZSwgYnV0IGluc3RlYWQgdXNlXG4vLyB0aGlzIHRvIHR3ZWFrIGNvbG9ycyBvbiBhbiBhcy1uZWVkZWQgYmFzaXMuIFRoaXMgYWVzdGhldGljIGNoYW5nZSBpcyBiYXNlZCBvblxuLy8gV2ViS2l0J3MgZGVmYXVsdCBzdHlsZXMsIGJ1dCBhcHBsaWNhYmxlIHRvIGEgd2lkZXIgcmFuZ2Ugb2YgYnJvd3NlcnMuIEl0c1xuLy8gdXNhYmlsaXR5IGFuZCBhY2Nlc3NpYmlsaXR5IHNob3VsZCBiZSB0YWtlbiBpbnRvIGFjY291bnQgd2l0aCBhbnkgY2hhbmdlLlxuLy9cbi8vIEV4YW1wbGUgdXNhZ2U6IGNoYW5nZSB0aGUgZGVmYXVsdCBibHVlIGJvcmRlciBhbmQgc2hhZG93IHRvIHdoaXRlIGZvciBiZXR0ZXJcbi8vIGNvbnRyYXN0IGFnYWluc3QgYSBkYXJrIGdyYXkgYmFja2dyb3VuZC5cbkBtaXhpbiBmb3JtLWNvbnRyb2wtZm9jdXMoKSB7XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJGlucHV0LWJvcmRlci1mb2N1cztcbiAgICBvdXRsaW5lOiBub25lO1xuICAgICRzaGFkb3c6IGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpLCAwIDAgOHB4ICRpbnB1dC1ib3gtc2hhZG93LWZvY3VzO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coJHNoYWRvdyk7XG4gIH1cbn1cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIFJlbGF0aXZlIHRleHQgc2l6ZSwgcGFkZGluZywgYW5kIGJvcmRlci1yYWRpaSBjaGFuZ2VzIGZvciBmb3JtIGNvbnRyb2xzLiBGb3Jcbi8vIGhvcml6b250YWwgc2l6aW5nLCB3cmFwIGNvbnRyb2xzIGluIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy4gYDxzZWxlY3Q+YFxuLy8gZWxlbWVudCBnZXRzIHNwZWNpYWwgbG92ZSBiZWNhdXNlIGl0J3Mgc3BlY2lhbCwgYW5kIHRoYXQncyBhIGZhY3QhXG5cbkBtaXhpbiBpbnB1dC1zaXplKCRwYXJlbnQsICRpbnB1dC1oZWlnaHQsICRwYWRkaW5nLXZlcnRpY2FsLCAkcGFkZGluZy1ob3Jpem9udGFsLCAkZm9udC1zaXplLCAkbGluZS1oZWlnaHQsICRib3JkZXItcmFkaXVzKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbiAgICBwYWRkaW5nOiAkcGFkZGluZy12ZXJ0aWNhbCAkcGFkZGluZy1ob3Jpem9udGFsO1xuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICB9XG5cbiAgc2VsZWN0I3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICB9XG5cbiAgdGV4dGFyZWEjeyRwYXJlbnR9LFxuICBzZWxlY3RbbXVsdGlwbGVdI3skcGFyZW50fSB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4iLCIvLyBQcm9ncmVzcyBiYXJzXG5cbkBtaXhpbiBwcm9ncmVzcy12YXJpYW50KCRjb2xvcikge1xuICAmW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuICB9XG5cbiAgJlt2YWx1ZV06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gIH1cblxuICAvLyBJRTlcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDowXFwwKSB7XG4gICAgLnByb2dyZXNzLWJhciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3I7XG4gICAgfVxuICB9XG59XG4iLCIvLyBUYWJsZXNcblxuQG1peGluIHRhYmxlLXJvdy12YXJpYW50KCRzdGF0ZSwgJGJhY2tncm91bmQpIHtcbiAgLy8gRXhhY3Qgc2VsZWN0b3JzIGJlbG93IHJlcXVpcmVkIHRvIG92ZXJyaWRlIGAudGFibGUtc3RyaXBlZGAgYW5kIHByZXZlbnRcbiAgLy8gaW5oZXJpdGFuY2UgdG8gbmVzdGVkIHRhYmxlcy5cbiAgLnRhYmxlLSN7JHN0YXRlfSB7XG4gICAgJixcbiAgICA+IHRoLFxuICAgID4gdGQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgfVxuICB9XG5cbiAgLy8gSG92ZXIgc3RhdGVzIGZvciBgLnRhYmxlLWhvdmVyYFxuICAvLyBOb3RlOiB0aGlzIGlzIG5vdCBhdmFpbGFibGUgZm9yIGNlbGxzIG9yIHJvd3Mgd2l0aGluIGB0aGVhZGAgb3IgYHRmb290YC5cbiAgLnRhYmxlLWhvdmVyIHtcbiAgICAkaG92ZXItYmFja2dyb3VuZDogZGFya2VuKCRiYWNrZ3JvdW5kLCA1JSk7XG5cbiAgICAudGFibGUtI3skc3RhdGV9IHtcbiAgICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG5cbiAgICAgICAgPiB0ZCxcbiAgICAgICAgPiB0aCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGhvdmVyLWJhY2tncm91bmQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcblxuQG1peGluIGJnLXZhcmlhbnQoJHBhcmVudCwgJGNvbG9yKSB7XG4gICN7JHBhcmVudH0ge1xuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yICFpbXBvcnRhbnQ7XG4gIH1cbiAgYSN7JHBhcmVudH0ge1xuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY29sb3IsIDEwJSk7XG4gICAgfVxuICB9XG59XG4iLCIvLyBTaW5nbGUgc2lkZSBib3JkZXItcmFkaXVzXG5cbkBtaXhpbiBib3JkZXItcmFkaXVzKCRyYWRpdXM6ICRib3JkZXItcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7XG4gIH1cbn1cblxuQG1peGluIGJvcmRlci10b3AtcmFkaXVzKCRyYWRpdXMpIHtcbiAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRyYWRpdXM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgfVxufVxuXG5AbWl4aW4gYm9yZGVyLXJpZ2h0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICB9XG59XG5cbkBtaXhpbiBib3JkZXItYm90dG9tLXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkcmFkaXVzO1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gIH1cbn1cblxuQG1peGluIGJvcmRlci1sZWZ0LXJhZGl1cygkcmFkaXVzKSB7XG4gIEBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRyYWRpdXM7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHJhZGl1cztcbiAgfVxufVxuIiwiLy8gR3JhZGllbnRzXG5cbi8vIEhvcml6b250YWwgZ3JhZGllbnQsIGZyb20gbGVmdCB0byByaWdodFxuLy9cbi8vIENyZWF0ZXMgdHdvIGNvbG9yIHN0b3BzLCBzdGFydCBhbmQgZW5kLCBieSBzcGVjaWZ5aW5nIGEgY29sb3IgYW5kIHBvc2l0aW9uIGZvciBlYWNoIGNvbG9yIHN0b3AuXG4vLyBDb2xvciBzdG9wcyBhcmUgbm90IGF2YWlsYWJsZSBpbiBJRTkuXG5AbWl4aW4gZ3JhZGllbnQtaG9yaXpvbnRhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJHN0YXJ0LWNvbG9yICRzdGFydC1wZXJjZW50LCAkZW5kLWNvbG9yICRlbmQtcGVyY2VudCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRzdGFydC1jb2xvcil9JywgZW5kQ29sb3JzdHI9JyN7aWUtaGV4LXN0cigkZW5kLWNvbG9yKX0nLCBHcmFkaWVudFR5cGU9MSk7IC8vIElFOVxufVxuXG4vLyBWZXJ0aWNhbCBncmFkaWVudCwgZnJvbSB0b3AgdG8gYm90dG9tXG4vL1xuLy8gQ3JlYXRlcyB0d28gY29sb3Igc3RvcHMsIHN0YXJ0IGFuZCBlbmQsIGJ5IHNwZWNpZnlpbmcgYSBjb2xvciBhbmQgcG9zaXRpb24gZm9yIGVhY2ggY29sb3Igc3RvcC5cbi8vIENvbG9yIHN0b3BzIGFyZSBub3QgYXZhaWxhYmxlIGluIElFOS5cbkBtaXhpbiBncmFkaWVudC12ZXJ0aWNhbCgkc3RhcnQtY29sb3I6ICM1NTUsICRlbmQtY29sb3I6ICMzMzMsICRzdGFydC1wZXJjZW50OiAwJSwgJGVuZC1wZXJjZW50OiAxMDAlKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICRzdGFydC1jb2xvciAkc3RhcnQtcGVyY2VudCwgJGVuZC1jb2xvciAkZW5kLXBlcmNlbnQpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTlcbn1cblxuQG1peGluIGdyYWRpZW50LWRpcmVjdGlvbmFsKCRzdGFydC1jb2xvcjogIzU1NSwgJGVuZC1jb2xvcjogIzMzMywgJGRlZzogNDVkZWcpIHtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoJGRlZywgJHN0YXJ0LWNvbG9yLCAkZW5kLWNvbG9yKTtcbn1cbkBtaXhpbiBncmFkaWVudC1ob3Jpem9udGFsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkc3RhcnQtY29sb3IsICRtaWQtY29sb3IgJGNvbG9yLXN0b3AsICRlbmQtY29sb3IpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScje2llLWhleC1zdHIoJHN0YXJ0LWNvbG9yKX0nLCBlbmRDb2xvcnN0cj0nI3tpZS1oZXgtc3RyKCRlbmQtY29sb3IpfScsIEdyYWRpZW50VHlwZT0xKTsgLy8gSUU5IGdldHMgbm8gY29sb3Itc3RvcCBhdCBhbGwgZm9yIHByb3BlciBmYWxsYmFja1xufVxuQG1peGluIGdyYWRpZW50LXZlcnRpY2FsLXRocmVlLWNvbG9ycygkc3RhcnQtY29sb3I6ICMwMGIzZWUsICRtaWQtY29sb3I6ICM3YTQzYjYsICRjb2xvci1zdG9wOiA1MCUsICRlbmQtY29sb3I6ICNjMzMyNWYpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCRzdGFydC1jb2xvciwgJG1pZC1jb2xvciAkY29sb3Itc3RvcCwgJGVuZC1jb2xvcik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9JyN7aWUtaGV4LXN0cigkc3RhcnQtY29sb3IpfScsIGVuZENvbG9yc3RyPScje2llLWhleC1zdHIoJGVuZC1jb2xvcil9JywgR3JhZGllbnRUeXBlPTApOyAvLyBJRTkgZ2V0cyBubyBjb2xvci1zdG9wIGF0IGFsbCBmb3IgcHJvcGVyIGZhbGxiYWNrXG59XG5AbWl4aW4gZ3JhZGllbnQtcmFkaWFsKCRpbm5lci1jb2xvcjogIzU1NSwgJG91dGVyLWNvbG9yOiAjMzMzKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsICRpbm5lci1jb2xvciwgJG91dGVyLWNvbG9yKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cbkBtaXhpbiBncmFkaWVudC1zdHJpcGVkKCRjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMTUpLCAkYW5nbGU6IDQ1ZGVnKSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgkYW5nbGUsICRjb2xvciAyNSUsIHRyYW5zcGFyZW50IDI1JSwgdHJhbnNwYXJlbnQgNTAlLCAkY29sb3IgNTAlLCAkY29sb3IgNzUlLCB0cmFuc3BhcmVudCA3NSUsIHRyYW5zcGFyZW50KTtcbn0iLCJAbWl4aW4gY2xlYXJmaXgoKSB7XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIGNsZWFyOiBib3RoO1xuICB9XG59XG4iLCIvLyBDZW50ZXItYWxpZ24gYSBibG9jayBsZXZlbCBlbGVtZW50XG5cbkBtaXhpbiBjZW50ZXItYmxvY2soKSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuIiwiLy8gRnJhbWV3b3JrIGdyaWQgZ2VuZXJhdGlvblxuLy9cbi8vIFVzZWQgb25seSBieSBCb290c3RyYXAgdG8gZ2VuZXJhdGUgdGhlIGNvcnJlY3QgbnVtYmVyIG9mIGdyaWQgY2xhc3NlcyBnaXZlblxuLy8gYW55IHZhbHVlIG9mIGAkZ3JpZC1jb2x1bW5zYC5cblxuQG1peGluIG1ha2UtZ3JpZC1jb2x1bW5zKCRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zLCAkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgLy8gQ29tbW9uIHByb3BlcnRpZXMgZm9yIGFsbCBicmVha3BvaW50c1xuICAlZ3JpZC1jb2x1bW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBQcmV2ZW50IGNvbHVtbnMgZnJvbSBjb2xsYXBzaW5nIHdoZW4gZW1wdHlcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgLy8gSW5uZXIgZ3V0dGVyIHZpYSBwYWRkaW5nXG4gICAgcGFkZGluZy1sZWZ0OiAoJGd1dHRlciAvIDIpO1xuICAgIHBhZGRpbmctcmlnaHQ6ICgkZ3V0dGVyIC8gMik7XG4gIH1cbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGJyZWFrcG9pbnRzKSB7XG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkY29sdW1ucyB7XG4gICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LSN7JGl9IHtcbiAgICAgICAgQGV4dGVuZCAlZ3JpZC1jb2x1bW47XG4gICAgICB9XG4gICAgfVxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgIC8vIFdvcmsgYXJvdW5kIGNyb3NzLW1lZGlhIEBleHRlbmQgKGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL3Nhc3MvaXNzdWVzLzEwNTApXG4gICAgICAlZ3JpZC1jb2x1bW4tZmxvYXQtI3skYnJlYWtwb2ludH0ge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgIH1cbiAgICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggJGNvbHVtbnMge1xuICAgICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LSN7JGl9IHtcbiAgICAgICAgICBAaWYgbm90ICRlbmFibGUtZmxleCB7XG4gICAgICAgICAgICBAZXh0ZW5kICVncmlkLWNvbHVtbi1mbG9hdC0jeyRicmVha3BvaW50fTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGluY2x1ZGUgbWFrZS1jb2wtc3BhbigkaSwgJGNvbHVtbnMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBAZWFjaCAkbW9kaWZpZXIgaW4gKHB1bGwsIHB1c2gsIG9mZnNldCkge1xuICAgICAgICBAZm9yICRpIGZyb20gMCB0aHJvdWdoICRjb2x1bW5zIHtcbiAgICAgICAgICAuY29sLSN7JGJyZWFrcG9pbnR9LSN7JG1vZGlmaWVyfS0jeyRpfSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtYWtlLWNvbC1tb2RpZmllcigkbW9kaWZpZXIsICRpLCAkY29sdW1ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vLyBHcmlkIHN5c3RlbVxuLy9cbi8vIEdlbmVyYXRlIHNlbWFudGljIGdyaWQgY29sdW1ucyB3aXRoIHRoZXNlIG1peGlucy5cblxuQG1peGluIG1ha2UtY29udGFpbmVyKCRndXR0ZXI6ICRncmlkLWd1dHRlci13aWR0aCkge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xuICBAaWYgbm90ICRlbmFibGUtZmxleCB7XG4gICAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcbiAgfVxufVxuXG5cbi8vIEZvciBlYWNoIGJyZWFrcG9pbnQsIGRlZmluZSB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyIGluIGEgbWVkaWEgcXVlcnlcbkBtaXhpbiBtYWtlLWNvbnRhaW5lci1tYXgtd2lkdGhzKCRtYXgtd2lkdGhzOiAkY29udGFpbmVyLW1heC13aWR0aHMpIHtcbiAgQGVhY2ggJGJyZWFrcG9pbnQsICRjb250YWluZXItbWF4LXdpZHRoIGluICRtYXgtd2lkdGhzIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICBtYXgtd2lkdGg6ICRjb250YWluZXItbWF4LXdpZHRoO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWFrZS1yb3coJGd1dHRlcjogJGdyaWQtZ3V0dGVyLXdpZHRoKSB7XG4gIEBpZiAkZW5hYmxlLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9IEBlbHNlIHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeCgpO1xuICB9XG4gIG1hcmdpbi1sZWZ0OiAgKCRndXR0ZXIgLyAtMik7XG4gIG1hcmdpbi1yaWdodDogKCRndXR0ZXIgLyAtMik7XG59XG5cbkBtaXhpbiBtYWtlLWNvbCgkZ3V0dGVyOiAkZ3JpZC1ndXR0ZXItd2lkdGgpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBAaWYgbm90ICRlbmFibGUtZmxleCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgbWluLWhlaWdodDogMXB4O1xuICBwYWRkaW5nLWxlZnQ6ICAoJGd1dHRlciAvIDIpO1xuICBwYWRkaW5nLXJpZ2h0OiAoJGd1dHRlciAvIDIpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtc3Bhbigkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgQGlmICRlbmFibGUtZmxleCB7XG4gICAgZmxleDogMCAwIHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyk7XG4gIH0gQGVsc2Uge1xuICAgIHdpZHRoOiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xuICB9XG59XG5cbkBtaXhpbiBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIG1hcmdpbi1sZWZ0OiBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtcHVzaCgkc2l6ZSwgJGNvbHVtbnM6ICRncmlkLWNvbHVtbnMpIHtcbiAgbGVmdDogaWYoJHNpemUgPiAwLCBwZXJjZW50YWdlKCRzaXplIC8gJGNvbHVtbnMpLCBhdXRvKTtcbn1cblxuQG1peGluIG1ha2UtY29sLXB1bGwoJHNpemUsICRjb2x1bW5zOiAkZ3JpZC1jb2x1bW5zKSB7XG4gIHJpZ2h0OiBpZigkc2l6ZSA+IDAsIHBlcmNlbnRhZ2UoJHNpemUgLyAkY29sdW1ucyksIGF1dG8pO1xufVxuXG5AbWl4aW4gbWFrZS1jb2wtbW9kaWZpZXIoJHR5cGUsICRzaXplLCAkY29sdW1ucykge1xuICAvLyBXb3JrIGFyb3VuZCB0aGUgbGFjayBvZiBkeW5hbWljIG1peGluIEBpbmNsdWRlIHN1cHBvcnQgKGh0dHBzOi8vZ2l0aHViLmNvbS9zYXNzL3Nhc3MvaXNzdWVzLzYyNilcbiAgQGlmICR0eXBlID09IHB1c2gge1xuICAgIEBpbmNsdWRlIG1ha2UtY29sLXB1c2goJHNpemUsICRjb2x1bW5zKTtcbiAgfSBAZWxzZSBpZiAkdHlwZSA9PSBwdWxsIHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbC1wdWxsKCRzaXplLCAkY29sdW1ucyk7XG4gIH0gQGVsc2UgaWYgJHR5cGUgPT0gb2Zmc2V0IHtcbiAgICBAaW5jbHVkZSBtYWtlLWNvbC1vZmZzZXQoJHNpemUsICRjb2x1bW5zKTtcbiAgfVxufVxuIiwiQG1peGluIHB1bGwtbGVmdCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7XG59XG5AbWl4aW4gcHVsbC1yaWdodCB7XG4gIGZsb2F0OiByaWdodCAhaW1wb3J0YW50O1xufVxuIiwiLy8gVmFyaWFibGVzXG4vL1xuLy8gQ29weSBzZXR0aW5ncyBmcm9tIHRoaXMgZmlsZSBpbnRvIHRoZSBwcm92aWRlZCBgX2N1c3RvbS5zY3NzYCB0byBvdmVycmlkZVxuLy8gdGhlIEJvb3RzdHJhcCBkZWZhdWx0cyB3aXRob3V0IG1vZGlmeWluZyBrZXksIHZlcnNpb25lZCBmaWxlcy5cblxuXG4vLyBUYWJsZSBvZiBDb250ZW50c1xuLy9cbi8vIENvbG9yc1xuLy8gT3B0aW9uc1xuLy8gU3BhY2luZ1xuLy8gQm9keVxuLy8gTGlua3Ncbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vIEdyaWQgY29udGFpbmVyc1xuLy8gR3JpZCBjb2x1bW5zXG4vLyBGb250c1xuLy8gQ29tcG9uZW50c1xuXG4vLyBHZW5lcmFsIHZhcmlhYmxlIHN0cnVjdHVyZVxuLy9cbi8vIFZhcmlhYmxlIGZvcm1hdCBzaG91bGQgZm9sbG93IHRoZSBgJGNvbXBvbmVudC1tb2RpZmllci1zdGF0ZS1wcm9wZXJ0eWAgb3JkZXIuXG5cblxuLy8gQ29sb3JzXG4vL1xuLy8gR3JheXNjYWxlIGFuZCBicmFuZCBjb2xvcnMgZm9yIHVzZSBhY3Jvc3MgQm9vdHN0cmFwLlxuXG4kZ3JheS1kYXJrOiAgICAgICAgICAgICAgICAgIzM3M2EzYyAhZGVmYXVsdDtcbiRncmF5OiAgICAgICAgICAgICAgICAgICAgICAjNTU1OTVjICFkZWZhdWx0O1xuJGdyYXktbGlnaHQ6ICAgICAgICAgICAgICAgICM4MThhOTEgIWRlZmF1bHQ7XG4kZ3JheS1saWdodGVyOiAgICAgICAgICAgICAgI2VjZWVlZiAhZGVmYXVsdDtcbiRncmF5LWxpZ2h0ZXN0OiAgICAgICAgICAgICAjZjdmN2Y5ICFkZWZhdWx0O1xuXG4kYnJhbmQtcHJpbWFyeTogICAgICAgICAgICAgIzAyNzVkOCAhZGVmYXVsdDtcbiRicmFuZC1zdWNjZXNzOiAgICAgICAgICAgICAjNWNiODVjICFkZWZhdWx0O1xuJGJyYW5kLWluZm86ICAgICAgICAgICAgICAgICM1YmMwZGUgIWRlZmF1bHQ7XG4kYnJhbmQtd2FybmluZzogICAgICAgICAgICAgI2YwYWQ0ZSAhZGVmYXVsdDtcbiRicmFuZC1kYW5nZXI6ICAgICAgICAgICAgICAjZDk1MzRmICFkZWZhdWx0O1xuXG5cbi8vIE9wdGlvbnNcbi8vXG4vLyBRdWlja2x5IG1vZGlmeSBnbG9iYWwgc3R5bGluZyBieSBlbmFibGluZyBvciBkaXNhYmxpbmcgb3B0aW9uYWwgZmVhdHVyZXMuXG5cbiRlbmFibGUtZmxleDogICAgICAgICAgICAgICBmYWxzZSAhZGVmYXVsdDtcbiRlbmFibGUtcm91bmRlZDogICAgICAgICAgICB0cnVlICFkZWZhdWx0O1xuJGVuYWJsZS1zaGFkb3dzOiAgICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmFkaWVudHM6ICAgICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS10cmFuc2l0aW9uczogICAgICAgIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ob3Zlci1tZWRpYS1xdWVyeTogIGZhbHNlICFkZWZhdWx0O1xuJGVuYWJsZS1ncmlkLWNsYXNzZXM6ICAgICAgIHRydWUgIWRlZmF1bHQ7XG5cblxuLy8gU3BhY2luZ1xuLy9cbi8vIENvbnRyb2wgdGhlIGRlZmF1bHQgc3R5bGluZyBvZiBtb3N0IEJvb3RzdHJhcCBlbGVtZW50cyBieSBtb2RpZnlpbmcgdGhlc2Vcbi8vIHZhcmlhYmxlcy4gTW9zdGx5IGZvY3VzZWQgb24gc3BhY2luZy5cblxuJHNwYWNlcjogICAgICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJHNwYWNlci14OiAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJHNwYWNlci15OiAgICAgICAgICAgICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJHNwYWNlcnM6IChcbiAgMDogKFxuICAgIHg6ICAgMCxcbiAgICB5OiAgIDBcbiAgKSxcbiAgMTogKFxuICAgIHg6ICAgJHNwYWNlci14LFxuICAgIHk6ICAgJHNwYWNlci15XG4gICksXG4gIDI6IChcbiAgICB4OiAgICgkc3BhY2VyLXggKiAxLjUpLFxuICAgIHk6ICAgKCRzcGFjZXIteSAqIDEuNSlcbiAgKSxcbiAgMzogKFxuICAgIHg6ICAgKCRzcGFjZXIteCAqIDMpLFxuICAgIHk6ICAgKCRzcGFjZXIteSAqIDMpXG4gIClcbikgIWRlZmF1bHQ7XG4kYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgIDFweCAhZGVmYXVsdDtcblxuXG4vLyBCb2R5XG4vL1xuLy8gU2V0dGluZ3MgZm9yIHRoZSBgPGJvZHk+YCBlbGVtZW50LlxuXG4kYm9keS1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYm9keS1jb2xvcjogICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG5cblxuLy8gTGlua3Ncbi8vXG4vLyBTdHlsZSBhbmNob3IgZWxlbWVudHMuXG5cbiRsaW5rLWNvbG9yOiAgICAgICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kbGluay1kZWNvcmF0aW9uOiAgICAgICAgICAgIG5vbmUgIWRlZmF1bHQ7XG4kbGluay1ob3Zlci1jb2xvcjogICAgICAgICAgIGRhcmtlbigkbGluay1jb2xvciwgMTUlKSAhZGVmYXVsdDtcbiRsaW5rLWhvdmVyLWRlY29yYXRpb246ICAgICAgdW5kZXJsaW5lICFkZWZhdWx0O1xuXG5cbi8vIEdyaWQgYnJlYWtwb2ludHNcbi8vXG4vLyBEZWZpbmUgdGhlIG1pbmltdW0gYW5kIG1heGltdW0gZGltZW5zaW9ucyBhdCB3aGljaCB5b3VyIGxheW91dCB3aWxsIGNoYW5nZSxcbi8vIGFkYXB0aW5nIHRvIGRpZmZlcmVudCBzY3JlZW4gc2l6ZXMsIGZvciB1c2UgaW4gbWVkaWEgcXVlcmllcy5cblxuJGdyaWQtYnJlYWtwb2ludHM6IChcbiAgLy8gRXh0cmEgc21hbGwgc2NyZWVuIC8gcGhvbmVcbiAgeHM6IDAsXG4gIC8vIFNtYWxsIHNjcmVlbiAvIHBob25lXG4gIHNtOiA1NDRweCxcbiAgLy8gTWVkaXVtIHNjcmVlbiAvIHRhYmxldFxuICBtZDogNzY4cHgsXG4gIC8vIExhcmdlIHNjcmVlbiAvIGRlc2t0b3BcbiAgbGc6IDk5MnB4LFxuICAvLyBFeHRyYSBsYXJnZSBzY3JlZW4gLyB3aWRlIGRlc2t0b3BcbiAgeGw6IDEyMDBweFxuKSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGNvbnRhaW5lcnNcbi8vXG4vLyBEZWZpbmUgdGhlIG1heGltdW0gd2lkdGggb2YgYC5jb250YWluZXJgIGZvciBkaWZmZXJlbnQgc2NyZWVuIHNpemVzLlxuXG4kY29udGFpbmVyLW1heC13aWR0aHM6IChcbiAgc206IDU3NnB4LFxuICBtZDogNzIwcHgsXG4gIGxnOiA5NDBweCxcbiAgeGw6IDExNDBweFxuKSAhZGVmYXVsdDtcblxuXG4vLyBHcmlkIGNvbHVtbnNcbi8vXG4vLyBTZXQgdGhlIG51bWJlciBvZiBjb2x1bW5zIGFuZCBzcGVjaWZ5IHRoZSB3aWR0aCBvZiB0aGUgZ3V0dGVycy5cblxuJGdyaWQtY29sdW1uczogICAgICAgICAgICAgICAxMiAhZGVmYXVsdDtcbiRncmlkLWd1dHRlci13aWR0aDogICAgICAgICAgMS44NzVyZW0gIWRlZmF1bHQ7IC8vIDMwcHhcblxuXG4vLyBUeXBvZ3JhcGh5XG4vL1xuLy8gRm9udCwgbGluZS1oZWlnaHQsIGFuZCBjb2xvciBmb3IgYm9keSB0ZXh0LCBoZWFkaW5ncywgYW5kIG1vcmUuXG5cbiRmb250LWZhbWlseS1zYW5zLXNlcmlmOiAgICAgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmICFkZWZhdWx0O1xuJGZvbnQtZmFtaWx5LXNlcmlmOiAgICAgICAgICBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWYgIWRlZmF1bHQ7XG4kZm9udC1mYW1pbHktbW9ub3NwYWNlOiAgICAgIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcIkNvdXJpZXIgTmV3XCIsIG1vbm9zcGFjZSAhZGVmYXVsdDtcbiRmb250LWZhbWlseS1iYXNlOiAgICAgICAgICAgJGZvbnQtZmFtaWx5LXNhbnMtc2VyaWYgIWRlZmF1bHQ7XG5cbi8vIFBpeGVsIHZhbHVlIHVzZWQgdG8gcmVzcG9uc2l2ZWx5IHNjYWxlIGFsbCB0eXBvZ3JhcGh5LiBBcHBsaWVkIHRvIHRoZSBgPGh0bWw+YCBlbGVtZW50LlxuJGZvbnQtc2l6ZS1yb290OiAgICAgICAgICAgICAxNnB4ICFkZWZhdWx0O1xuXG4kZm9udC1zaXplLWJhc2U6ICAgICAgICAgICAgIDFyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWxnOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXNtOiAgICAgICAgICAgICAgIC44NzVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLXhzOiAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJGZvbnQtc2l6ZS1oMTogICAgICAgICAgICAgICAyLjVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgyOiAgICAgICAgICAgICAgIDJyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWgzOiAgICAgICAgICAgICAgIDEuNzVyZW0gIWRlZmF1bHQ7XG4kZm9udC1zaXplLWg0OiAgICAgICAgICAgICAgIDEuNXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDU6ICAgICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRmb250LXNpemUtaDY6ICAgICAgICAgICAgICAgMXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXNpemU6ICAgICAgICAgICAgICAgNnJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5Mi1zaXplOiAgICAgICAgICAgICAgIDUuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5My1zaXplOiAgICAgICAgICAgICAgIDQuNXJlbSAhZGVmYXVsdDtcbiRkaXNwbGF5NC1zaXplOiAgICAgICAgICAgICAgIDMuNXJlbSAhZGVmYXVsdDtcblxuJGRpc3BsYXkxLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkyLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXkzLXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuJGRpc3BsYXk0LXdlaWdodDogICAgICAgICAgICAgMzAwICFkZWZhdWx0O1xuXG4kbGluZS1oZWlnaHQ6ICAgICAgICAgICAgICAgIDEuNSAhZGVmYXVsdDtcblxuJGhlYWRpbmdzLW1hcmdpbi1ib3R0b206ICAgICAoJHNwYWNlciAvIDIpICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAgICAgICBpbmhlcml0ICFkZWZhdWx0O1xuJGhlYWRpbmdzLWZvbnQtd2VpZ2h0OiAgICAgICA1MDAgIWRlZmF1bHQ7XG4kaGVhZGluZ3MtbGluZS1oZWlnaHQ6ICAgICAgIDEuMSAhZGVmYXVsdDtcbiRoZWFkaW5ncy1jb2xvcjogICAgICAgICAgICAgaW5oZXJpdCAhZGVmYXVsdDtcblxuJGxlYWQtZm9udC1zaXplOiAgICAgICAgICAgICAxLjI1cmVtICFkZWZhdWx0O1xuJGxlYWQtZm9udC13ZWlnaHQ6ICAgICAgICAgICAzMDAgIWRlZmF1bHQ7XG5cbiR0ZXh0LW11dGVkOiAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4kYWJici1ib3JkZXItY29sb3I6ICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuJGJsb2NrcXVvdGUtc21hbGwtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1mb250LXNpemU6ICAgICAgICAoJGZvbnQtc2l6ZS1iYXNlICogMS4yNSkgIWRlZmF1bHQ7XG4kYmxvY2txdW90ZS1ib3JkZXItY29sb3I6ICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kaHItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICByZ2JhKDAsMCwwLC4xKSAhZGVmYXVsdDtcbiRoci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG5cbiRkdC1mb250LXdlaWdodDogICAgICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cbiRuZXN0ZWQta2JkLWZvbnQtd2VpZ2h0OiAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cbiRsaXN0LWlubGluZS1wYWRkaW5nOiAgICAgICAgIDVweCAhZGVmYXVsdDtcblxuXG4vLyBDb21wb25lbnRzXG4vL1xuLy8gRGVmaW5lIGNvbW1vbiBwYWRkaW5nIGFuZCBib3JkZXIgcmFkaXVzIHNpemVzIGFuZCBtb3JlLlxuXG4kbGluZS1oZWlnaHQtbGc6ICAgICAgICAgKDQgLyAzKSAhZGVmYXVsdDtcbiRsaW5lLWhlaWdodC1zbTogICAgICAgICAxLjUgIWRlZmF1bHQ7XG5cbiRib3JkZXItcmFkaXVzOiAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1sZzogICAgICAgLjNyZW0gIWRlZmF1bHQ7XG4kYm9yZGVyLXJhZGl1cy1zbTogICAgICAgLjJyZW0gIWRlZmF1bHQ7XG5cbiRjb21wb25lbnQtYWN0aXZlLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJGNvbXBvbmVudC1hY3RpdmUtYmc6ICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4kY2FyZXQtd2lkdGg6ICAgICAgICAgICAgLjNlbSAhZGVmYXVsdDtcbiRjYXJldC13aWR0aC1sZzogICAgICAgICAkY2FyZXQtd2lkdGggIWRlZmF1bHQ7XG5cblxuLy8gVGFibGVzXG4vL1xuLy8gQ3VzdG9taXplcyB0aGUgYC50YWJsZWAgY29tcG9uZW50IHdpdGggYmFzaWMgdmFsdWVzLCBlYWNoIHVzZWQgYWNyb3NzIGFsbCB0YWJsZSB2YXJpYXRpb25zLlxuXG4kdGFibGUtY2VsbC1wYWRkaW5nOiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiR0YWJsZS1zbS1jZWxsLXBhZGRpbmc6ICAgICAgICAgLjNyZW0gIWRlZmF1bHQ7XG5cbiR0YWJsZS1iZzogICAgICAgICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kdGFibGUtYmctYWNjZW50OiAgICAgICAgICAgICAgICNmOWY5ZjkgIWRlZmF1bHQ7XG4kdGFibGUtYmctaG92ZXI6ICAgICAgICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kdGFibGUtYmctYWN0aXZlOiAgICAgICAgICAgICAgICR0YWJsZS1iZy1ob3ZlciAhZGVmYXVsdDtcblxuJHRhYmxlLWJvcmRlci13aWR0aDogICAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJHRhYmxlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG5cbi8vIEJ1dHRvbnNcbi8vXG4vLyBGb3IgZWFjaCBvZiBCb290c3RyYXAncyBidXR0b25zLCBkZWZpbmUgdGV4dCwgYmFja2dyb3VuZCBhbmQgYm9yZGVyIGNvbG9yLlxuXG4kYnRuLXBhZGRpbmcteDogICAgICAgICAgICAgICAgICAxcmVtICFkZWZhdWx0O1xuJGJ0bi1wYWRkaW5nLXk6ICAgICAgICAgICAgICAgICAgLjM3NXJlbSAhZGVmYXVsdDtcbiRidG4tZm9udC13ZWlnaHQ6ICAgICAgICAgICAgICAgIG5vcm1hbCAhZGVmYXVsdDtcblxuJGJ0bi1wcmltYXJ5LWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tcHJpbWFyeS1iZzogICAgICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuJGJ0bi1wcmltYXJ5LWJvcmRlcjogICAgICAgICAgICAgJGJ0bi1wcmltYXJ5LWJnICFkZWZhdWx0O1xuXG4kYnRuLXNlY29uZGFyeS1jb2xvcjogICAgICAgICAgICAkZ3JheS1kYXJrICFkZWZhdWx0O1xuJGJ0bi1zZWNvbmRhcnktYmc6ICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tc2Vjb25kYXJ5LWJvcmRlcjogICAgICAgICAgICNjY2MgIWRlZmF1bHQ7XG5cbiRidG4taW5mby1jb2xvcjogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWluZm8tYmc6ICAgICAgICAgICAgICAgICAgICAkYnJhbmQtaW5mbyAhZGVmYXVsdDtcbiRidG4taW5mby1ib3JkZXI6ICAgICAgICAgICAgICAgICRidG4taW5mby1iZyAhZGVmYXVsdDtcblxuJGJ0bi1zdWNjZXNzLWNvbG9yOiAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRidG4tc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuJGJ0bi1zdWNjZXNzLWJvcmRlcjogICAgICAgICAgICAgJGJ0bi1zdWNjZXNzLWJnICFkZWZhdWx0O1xuXG4kYnRuLXdhcm5pbmctY29sb3I6ICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGJ0bi13YXJuaW5nLWJnOiAgICAgICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kYnRuLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgICAkYnRuLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG5cbiRidG4tZGFuZ2VyLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kYnRuLWRhbmdlci1iZzogICAgICAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuJGJ0bi1kYW5nZXItYm9yZGVyOiAgICAgICAgICAgICAgJGJ0bi1kYW5nZXItYmcgIWRlZmF1bHQ7XG5cbiRidG4tbGluay1kaXNhYmxlZC1jb2xvcjogICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuXG4kYnRuLXBhZGRpbmcteC1zbTogICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgICAuMjVyZW0gIWRlZmF1bHQ7XG5cbiRidG4tcGFkZGluZy14LWxnOiAgICAgICAgICAgICAgIDEuMjVyZW0gIWRlZmF1bHQ7XG4kYnRuLXBhZGRpbmcteS1sZzogICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cbi8vIEFsbG93cyBmb3IgY3VzdG9taXppbmcgYnV0dG9uIHJhZGl1cyBpbmRlcGVuZGVudGx5IGZyb20gZ2xvYmFsIGJvcmRlciByYWRpdXNcbiRidG4tYm9yZGVyLXJhZGl1czogICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGJ0bi1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICAgJGJvcmRlci1yYWRpdXMtbGcgIWRlZmF1bHQ7XG4kYnRuLWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgICAkYm9yZGVyLXJhZGl1cy1zbSAhZGVmYXVsdDtcblxuXG4vLyBGb3Jtc1xuXG4kaW5wdXQtcGFkZGluZy14OiAgICAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG4kaW5wdXQtcGFkZGluZy15OiAgICAgICAgICAgICAgICAuMzc1cmVtICFkZWZhdWx0O1xuXG4kaW5wdXQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGlucHV0LWJnLWRpc2FibGVkOiAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yOiAgICAgICAgICAgICAgICAgICAgJGdyYXkgIWRlZmF1bHQ7XG4kaW5wdXQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg6ICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDsgLy8gRm9yIGZvcm0gY29udHJvbHMgYW5kIGJ1dHRvbnNcbiRpbnB1dC1ib3gtc2hhZG93OiAgICAgICAgICAgICAgIGluc2V0IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4wNzUpICFkZWZhdWx0O1xuXG4kaW5wdXQtYm9yZGVyLXJhZGl1czogICAgICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRpbnB1dC1ib3JkZXItcmFkaXVzLWxnOiAgICAgICAgICRib3JkZXItcmFkaXVzLWxnICFkZWZhdWx0O1xuJGlucHV0LWJvcmRlci1yYWRpdXMtc206ICAgICAgICAgJGJvcmRlci1yYWRpdXMtc20gIWRlZmF1bHQ7XG5cbiRpbnB1dC1ib3JkZXItZm9jdXM6ICAgICAgICAgICAgICM2NmFmZTkgIWRlZmF1bHQ7XG4kaW5wdXQtYm94LXNoYWRvdy1mb2N1czogICAgICAgICByZ2JhKDEwMiwxNzUsMjMzLC42KSAhZGVmYXVsdDtcblxuJGlucHV0LWNvbG9yLXBsYWNlaG9sZGVyOiAgICAgICAgIzk5OSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteC1zbTogICAgICAgICAgICAgLjc1cmVtICFkZWZhdWx0O1xuJGlucHV0LXBhZGRpbmcteS1zbTogICAgICAgICAgICAgLjI3NXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LXBhZGRpbmcteC1sZzogICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRpbnB1dC1wYWRkaW5nLXktbGc6ICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcblxuJGlucHV0LWhlaWdodDogICAgICAgICAgICAgICAgICAgKCgkZm9udC1zaXplLWJhc2UgKiAkbGluZS1oZWlnaHQpICsgKCRpbnB1dC1wYWRkaW5nLXkgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LWxnOiAgICAgICAgICAgICAgICAoKCRmb250LXNpemUtbGcgKiAkbGluZS1oZWlnaHQtbGcpICsgKCRpbnB1dC1wYWRkaW5nLXktbGcgKiAyKSkgIWRlZmF1bHQ7XG4kaW5wdXQtaGVpZ2h0LXNtOiAgICAgICAgICAgICAgICAoKCRmb250LXNpemUtc20gKiAkbGluZS1oZWlnaHQtc20pICsgKCRpbnB1dC1wYWRkaW5nLXktc20gKiAyKSkgIWRlZmF1bHQ7XG5cbiRmb3JtLWdyb3VwLW1hcmdpbi1ib3R0b206ICAgICAgICRzcGFjZXIteSAhZGVmYXVsdDtcblxuJGlucHV0LWdyb3VwLWFkZG9uLWJnOiAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRpbnB1dC1ncm91cC1hZGRvbi1ib3JkZXItY29sb3I6ICRpbnB1dC1ib3JkZXItY29sb3IgIWRlZmF1bHQ7XG5cbiRjdXJzb3ItZGlzYWJsZWQ6ICAgICAgICAgICAgICAgIG5vdC1hbGxvd2VkICFkZWZhdWx0O1xuXG4vLyBGb3JtIHZhbGlkYXRpb24gaWNvbnNcbiRmb3JtLWljb24tc3VjY2VzczogXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSFpwWlhkQ2IzZzlJakFnTUNBMk1USWdOemt5SWo0OGNHRjBhQ0JtYVd4c1BTSWpOV05pT0RWaklpQmtQU0pOTWpNekxqZ2dOakV3WXkweE15NHpJREF0TWpZdE5pMHpOQzB4Tmk0NFREa3dMalVnTkRRNExqaEROell1TXlBME16QWdPREFnTkRBekxqTWdPVGd1T0NBek9EbGpNVGd1T0MweE5DNHlJRFExTGpVdE1UQXVOQ0ExT1M0NElEZ3VOR3czTWlBNU5VdzBOVEV1TXlBeU5ESmpNVEl1TlMweU1DQXpPQzQ0TFRJMkxqSWdOVGd1T0MweE15NDNJREl3SURFeUxqUWdNallnTXpndU55QXhNeTQzSURVNExqaE1NamN3SURVNU1HTXROeTQwSURFeUxUSXdMaklnTVRrdU5DMHpOQzR6SURJd2FDMHllaUl2UGp3dmMzWm5QZz09XCIgIWRlZmF1bHQ7XG4kZm9ybS1pY29uLXdhcm5pbmc6IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhacFpYZENiM2c5SWpBZ01DQTJNVElnTnpreUlqNDhjR0YwYUNCbWFXeHNQU0lqWmpCaFpEUmxJaUJrUFNKTk5qQXpJRFkwTUM0eWJDMHlOemd1TlMwMU1EbGpMVE11T0MwMkxqWXRNVEF1T0MweE1DNDJMVEU0TGpVdE1UQXVObk10TVRRdU55QTBMVEU0TGpVZ01UQXVOa3c1SURZME1DNHlZeTB6TGpjZ05pNDFMVE11TmlBeE5DNDBMaklnTWpBdU9DQXpMamdnTmk0MUlERXdMamdnTVRBdU5DQXhPQzR6SURFd0xqUm9OVFUzWXpjdU5pQXdJREUwTGpZdE5DQXhPQzQwTFRFd0xqUWdNeTQxTFRZdU5DQXpMall0TVRRdU5DQXdMVEl3TGpoNmJTMHlOall1TkMwek1HZ3ROakV1TWxZMU5EbG9OakV1TW5ZMk1TNHllbTB3TFRFd04yZ3ROakV1TWxZek1EUm9OakV1TW5ZeE9UbDZJaTgrUEM5emRtYytcIiAhZGVmYXVsdDtcbiRmb3JtLWljb24tZGFuZ2VyOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIWnBaWGRDYjNnOUlqQWdNQ0EyTVRJZ056a3lJajQ4Y0dGMGFDQm1hV3hzUFNJalpEazFNelJtSWlCa1BTSk5ORFEzSURVME5DNDBZeTB4TkM0MElERTBMalF0TXpjdU5pQXhOQzQwTFRVeUlEQnNMVGc1TFRreUxqY3RPRGtnT1RJdU4yTXRNVFF1TlNBeE5DNDBMVE0zTGpjZ01UUXVOQzAxTWlBd0xURTBMalF0TVRRdU5DMHhOQzQwTFRNM0xqWWdNQzAxTW13NU1pNDBMVGsyTGpNdE9USXVOQzA1Tmk0ell5MHhOQzQwTFRFMExqUXRNVFF1TkMwek55NDJJREF0TlRKek16Y3VOaTB4TkM0eklEVXlJREJzT0RrZ09USXVPQ0E0T1M0eUxUa3lMamRqTVRRdU5DMHhOQzQwSURNM0xqWXRNVFF1TkNBMU1pQXdJREUwTGpNZ01UUXVOQ0F4TkM0eklETTNMallnTUNBMU1rd3pOVFF1TmlBek9UWnNPVEl1TkNBNU5pNDBZekUwTGpRZ01UUXVOQ0F4TkM0MElETTNMallnTUNBMU1ub2lMejQ4TDNOMlp6ND1cIiAhZGVmYXVsdDtcblxuXG4vLyBEcm9wZG93bnNcbi8vXG4vLyBEcm9wZG93biBtZW51IGNvbnRhaW5lciBhbmQgY29udGVudHMuXG5cbiRkcm9wZG93bi1iZzogICAgICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLWNvbG9yOiAgICAgICAgICByZ2JhKDAsMCwwLC4xNSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuJGRyb3Bkb3duLWRpdmlkZXItYmc6ICAgICAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWxpbmstY29sb3I6ICAgICAgICAgICAgJGdyYXktZGFyayAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWhvdmVyLWNvbG9yOiAgICAgIGRhcmtlbigkZ3JheS1kYXJrLCA1JSkgIWRlZmF1bHQ7XG4kZHJvcGRvd24tbGluay1ob3Zlci1iZzogICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I6ICAgICAkY29tcG9uZW50LWFjdGl2ZS1jb2xvciAhZGVmYXVsdDtcbiRkcm9wZG93bi1saW5rLWFjdGl2ZS1iZzogICAgICAgICRjb21wb25lbnQtYWN0aXZlLWJnICFkZWZhdWx0O1xuXG4kZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjogICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuJGRyb3Bkb3duLWhlYWRlci1jb2xvcjogICAgICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG5cblxuLy8gWi1pbmRleCBtYXN0ZXIgbGlzdFxuLy9cbi8vIFdhcm5pbmc6IEF2b2lkIGN1c3RvbWl6aW5nIHRoZXNlIHZhbHVlcy4gVGhleSdyZSB1c2VkIGZvciBhIGJpcmQncyBleWUgdmlld1xuLy8gb2YgY29tcG9uZW50cyBkZXBlbmRlbnQgb24gdGhlIHotYXhpcyBhbmQgYXJlIGRlc2lnbmVkIHRvIGFsbCB3b3JrIHRvZ2V0aGVyLlxuXG4kemluZGV4LW5hdmJhcjogICAgICAgICAgICAxMDAwICFkZWZhdWx0O1xuJHppbmRleC1kcm9wZG93bjogICAgICAgICAgMTAwMCAhZGVmYXVsdDtcbiR6aW5kZXgtcG9wb3ZlcjogICAgICAgICAgIDEwNjAgIWRlZmF1bHQ7XG4kemluZGV4LXRvb2x0aXA6ICAgICAgICAgICAxMDcwICFkZWZhdWx0O1xuJHppbmRleC1uYXZiYXItZml4ZWQ6ICAgICAgMTAzMCAhZGVmYXVsdDtcbiR6aW5kZXgtbmF2YmFyLXN0aWNreTogICAgIDEwMzAgIWRlZmF1bHQ7XG4kemluZGV4LW1vZGFsLWJnOiAgICAgICAgICAxMDQwICFkZWZhdWx0O1xuJHppbmRleC1tb2RhbDogICAgICAgICAgICAgMTA1MCAhZGVmYXVsdDtcblxuXG4vLyBOYXZiYXJcblxuJG5hdmJhci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgJGJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDogICAgICAgICAkc3BhY2VyICFkZWZhdWx0O1xuJG5hdmJhci1wYWRkaW5nLXZlcnRpY2FsOiAgICAgICAgICAgKCRzcGFjZXIgLyAyKSAhZGVmYXVsdDtcblxuJG5hdmJhci1kYXJrLWNvbG9yOiAgICAgICAgICAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwuNSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstaG92ZXItY29sb3I6ICAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LC43NSkgIWRlZmF1bHQ7XG4kbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yOiAgICAgICAgICByZ2JhKDI1NSwyNTUsMjU1LDEpICFkZWZhdWx0O1xuJG5hdmJhci1kYXJrLWRpc2FibGVkLWNvbG9yOiAgICAgICAgcmdiYSgyNTUsMjU1LDI1NSwuMjUpICFkZWZhdWx0O1xuXG4kbmF2YmFyLWxpZ2h0LWNvbG9yOiAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4zKSAhZGVmYXVsdDtcbiRuYXZiYXItbGlnaHQtaG92ZXItY29sb3I6ICAgICAgICAgIHJnYmEoMCwwLDAsLjYpICFkZWZhdWx0O1xuJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I6ICAgICAgICAgcmdiYSgwLDAsMCwuOCkgIWRlZmF1bHQ7XG4kbmF2YmFyLWxpZ2h0LWRpc2FibGVkLWNvbG9yOiAgICAgICByZ2JhKDAsMCwwLC4xNSkgIWRlZmF1bHQ7XG5cblxuLy8gTmF2c1xuXG4kbmF2LWxpbmstcGFkZGluZzogICAgICAgICAgICAgICAgICAgICAgICAgIC41ZW0gMWVtICFkZWZhdWx0O1xuJG5hdi1saW5rLWhvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuXG4kbmF2LWRpc2FibGVkLWxpbmstY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJG5hdi1kaXNhYmxlZC1saW5rLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcblxuJG5hdi10YWJzLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtbGluay1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICRncmF5LWxpZ2h0ZXIgIWRlZmF1bHQ7XG5cbiRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAgJGJvZHktYmcgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgICRncmF5ICFkZWZhdWx0O1xuJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJvcmRlci1jb2xvcjogICAjZGRkICFkZWZhdWx0O1xuXG4kbmF2LXRhYnMtanVzdGlmaWVkLWxpbmstYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbmF2LXRhYnMtanVzdGlmaWVkLWFjdGl2ZS1saW5rLWJvcmRlci1jb2xvcjogICAgICRib2R5LWJnICFkZWZhdWx0O1xuXG4kbmF2LXBpbGxzLWJvcmRlci1yYWRpdXM6ICAgICAgICAgICAgICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJG5hdi1waWxscy1hY3RpdmUtbGluay1ob3Zlci1iZzogICAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRuYXYtcGlsbHMtYWN0aXZlLWxpbmstaG92ZXItY29sb3I6ICAgICAgICAgJGNvbXBvbmVudC1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cblxuLy8gUGFnaW5hdGlvblxuXG4kcGFnaW5hdGlvbi1wYWRkaW5nLXg6ICAgICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteTogICAgICAgICAgICAgICAgLjVyZW0gIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1wYWRkaW5nLXgtc206ICAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbTogICAgICAgICAgICAgLjI3NXJlbSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZzogICAgICAgICAgICAgMS41cmVtICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tcGFkZGluZy15LWxnOiAgICAgICAgICAgICAuNzVyZW0gIWRlZmF1bHQ7XG5cblxuJHBhZ2luYXRpb24tY29sb3I6ICAgICAgICAgICAgICAgICAgICAgJGxpbmstY29sb3IgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1iZzogICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJHBhZ2luYXRpb24tYm9yZGVyLXdpZHRoOiAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWJvcmRlci1jb2xvcjogICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWhvdmVyLWNvbG9yOiAgICAgICAgICAgICAgICRsaW5rLWhvdmVyLWNvbG9yICFkZWZhdWx0O1xuJHBhZ2luYXRpb24taG92ZXItYmc6ICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWhvdmVyLWJvcmRlcjogICAgICAgICAgICAgICNkZGQgIWRlZmF1bHQ7XG5cbiRwYWdpbmF0aW9uLWFjdGl2ZS1jb2xvcjogICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1hY3RpdmUtYmc6ICAgICAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXI6ICAgICAgICAgICAgICRicmFuZC1wcmltYXJ5ICFkZWZhdWx0O1xuXG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRwYWdpbmF0aW9uLWRpc2FibGVkLWJnOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kcGFnaW5hdGlvbi1kaXNhYmxlZC1ib3JkZXI6ICAgICAgICAgICAjZGRkICFkZWZhdWx0O1xuXG5cbi8vIFBhZ2VyXG5cbiRwYWdlci1iZzogICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJnICFkZWZhdWx0O1xuJHBhZ2VyLWJvcmRlci13aWR0aDogICAgICAgICAgICAgICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWJvcmRlci1jb2xvciAhZGVmYXVsdDtcbiRwYWdlci1ib3JkZXItcmFkaXVzOiAgICAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG5cbiRwYWdlci1ob3Zlci1iZzogICAgICAgICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWhvdmVyLWJnICFkZWZhdWx0O1xuXG4kcGFnZXItYWN0aXZlLWJnOiAgICAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtYmcgIWRlZmF1bHQ7XG4kcGFnZXItYWN0aXZlLWNvbG9yOiAgICAgICAgICAgICAgICAgICAkcGFnaW5hdGlvbi1hY3RpdmUtY29sb3IgIWRlZmF1bHQ7XG5cbiRwYWdlci1kaXNhYmxlZC1jb2xvcjogICAgICAgICAgICAgICAgICRwYWdpbmF0aW9uLWRpc2FibGVkLWNvbG9yICFkZWZhdWx0O1xuXG5cbi8vIEp1bWJvdHJvblxuXG4kanVtYm90cm9uLXBhZGRpbmc6ICAgICAgICAgICAgICAycmVtICFkZWZhdWx0O1xuJGp1bWJvdHJvbi1iZzogICAgICAgICAgICAgICAgICAgJGdyYXktbGlnaHRlciAhZGVmYXVsdDtcblxuXG4vLyBGb3JtIHN0YXRlcyBhbmQgYWxlcnRzXG4vL1xuLy8gRGVmaW5lIGNvbG9ycyBmb3IgZm9ybSBmZWVkYmFjayBzdGF0ZXMgYW5kLCBieSBkZWZhdWx0LCBhbGVydHMuXG5cbiRzdGF0ZS1zdWNjZXNzLXRleHQ6ICAgICAgICAgICAgICMzYzc2M2QgIWRlZmF1bHQ7XG4kc3RhdGUtc3VjY2Vzcy1iZzogICAgICAgICAgICAgICAjZGZmMGQ4ICFkZWZhdWx0O1xuJHN0YXRlLXN1Y2Nlc3MtYm9yZGVyOiAgICAgICAgICAgZGFya2VuKCRzdGF0ZS1zdWNjZXNzLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1pbmZvLXRleHQ6ICAgICAgICAgICAgICAgICMzMTcwOGYgIWRlZmF1bHQ7XG4kc3RhdGUtaW5mby1iZzogICAgICAgICAgICAgICAgICAjZDllZGY3ICFkZWZhdWx0O1xuJHN0YXRlLWluZm8tYm9yZGVyOiAgICAgICAgICAgICAgZGFya2VuKCRzdGF0ZS1pbmZvLWJnLCA3JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS13YXJuaW5nLXRleHQ6ICAgICAgICAgICAgICM4YTZkM2IgIWRlZmF1bHQ7XG4kc3RhdGUtd2FybmluZy1iZzogICAgICAgICAgICAgICAjZmNmOGUzICFkZWZhdWx0O1xuJHN0YXRlLXdhcm5pbmctYm9yZGVyOiAgICAgICAgICAgZGFya2VuKCRzdGF0ZS13YXJuaW5nLWJnLCA1JSkgIWRlZmF1bHQ7XG5cbiRzdGF0ZS1kYW5nZXItdGV4dDogICAgICAgICAgICAgICNhOTQ0NDIgIWRlZmF1bHQ7XG4kc3RhdGUtZGFuZ2VyLWJnOiAgICAgICAgICAgICAgICAjZjJkZWRlICFkZWZhdWx0O1xuJHN0YXRlLWRhbmdlci1ib3JkZXI6ICAgICAgICAgICAgZGFya2VuKCRzdGF0ZS1kYW5nZXItYmcsIDUlKSAhZGVmYXVsdDtcblxuXG4vLyBDYXJkc1xuJGNhcmQtc3BhY2VyLXg6ICAgICAgICAgICAgMS4yNXJlbSAhZGVmYXVsdDtcbiRjYXJkLXNwYWNlci15OiAgICAgICAgICAgIC43NXJlbSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci13aWR0aDogICAgICAgIDFweCAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXM6ICAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuJGNhcmQtYm9yZGVyLWNvbG9yOiAgICAgICAgI2U1ZTVlNSAhZGVmYXVsdDtcbiRjYXJkLWJvcmRlci1yYWRpdXMtaW5uZXI6ICRjYXJkLWJvcmRlci1yYWRpdXMgIWRlZmF1bHQ7XG4kY2FyZC1jYXAtYmc6ICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJGNhcmQtYmc6ICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuJGNhcmQtbGluay1ob3Zlci1jb2xvcjogICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLyBUb29sdGlwc1xuXG4kdG9vbHRpcC1tYXgtd2lkdGg6ICAgICAgICAgICAyMDBweCAhZGVmYXVsdDtcbiR0b29sdGlwLWNvbG9yOiAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kdG9vbHRpcC1iZzogICAgICAgICAgICAgICAgICAjMDAwICFkZWZhdWx0O1xuJHRvb2x0aXAtb3BhY2l0eTogICAgICAgICAgICAgLjkgIWRlZmF1bHQ7XG5cbiR0b29sdGlwLWFycm93LXdpZHRoOiAgICAgICAgIDVweCAhZGVmYXVsdDtcbiR0b29sdGlwLWFycm93LWNvbG9yOiAgICAgICAgICR0b29sdGlwLWJnICFkZWZhdWx0O1xuXG5cbi8vIFBvcG92ZXJzXG5cbiRwb3BvdmVyLWJnOiAgICAgICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwb3BvdmVyLW1heC13aWR0aDogICAgICAgICAgICAgICAgICAgMjc2cHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItd2lkdGg6ICAgICAgICAgICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kcG9wb3Zlci1ib3JkZXItY29sb3I6ICAgICAgICAgICAgICAgIHJnYmEoMCwwLDAsLjIpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci10aXRsZS1iZzogICAgICAgICAgICAgICAgICAgIGRhcmtlbigkcG9wb3Zlci1iZywgMyUpICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy13aWR0aDogICAgICAgICAgICAgICAgIDEwcHggIWRlZmF1bHQ7XG4kcG9wb3Zlci1hcnJvdy1jb2xvcjogICAgICAgICAgICAgICAgICRwb3BvdmVyLWJnICFkZWZhdWx0O1xuXG4kcG9wb3Zlci1hcnJvdy1vdXRlci13aWR0aDogICAgICAgICAgICgkcG9wb3Zlci1hcnJvdy13aWR0aCArIDEpICFkZWZhdWx0O1xuJHBvcG92ZXItYXJyb3ctb3V0ZXItY29sb3I6ICAgICAgICAgICBmYWRlLWluKCRwb3BvdmVyLWJvcmRlci1jb2xvciwgMC4wNSkgIWRlZmF1bHQ7XG5cblxuLy8gTGFiZWxzXG5cbiRsYWJlbC1kZWZhdWx0LWJnOiAgICAgICAgICAgICRncmF5LWxpZ2h0ICFkZWZhdWx0O1xuJGxhYmVsLXByaW1hcnktYmc6ICAgICAgICAgICAgJGJyYW5kLXByaW1hcnkgIWRlZmF1bHQ7XG4kbGFiZWwtc3VjY2Vzcy1iZzogICAgICAgICAgICAkYnJhbmQtc3VjY2VzcyAhZGVmYXVsdDtcbiRsYWJlbC1pbmZvLWJnOiAgICAgICAgICAgICAgICRicmFuZC1pbmZvICFkZWZhdWx0O1xuJGxhYmVsLXdhcm5pbmctYmc6ICAgICAgICAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kbGFiZWwtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuXG4kbGFiZWwtY29sb3I6ICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGxhYmVsLWxpbmstaG92ZXItY29sb3I6ICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRsYWJlbC1mb250LXdlaWdodDogICAgICAgICAgIGJvbGQgIWRlZmF1bHQ7XG5cblxuLy8gTW9kYWxzXG5cbi8vIFBhZGRpbmcgYXBwbGllZCB0byB0aGUgbW9kYWwgYm9keVxuJG1vZGFsLWlubmVyLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcblxuJG1vZGFsLXRpdGxlLXBhZGRpbmc6ICAgICAgICAgMTVweCAhZGVmYXVsdDtcbiRtb2RhbC10aXRsZS1saW5lLWhlaWdodDogICAgICRsaW5lLWhlaWdodCAhZGVmYXVsdDtcblxuJG1vZGFsLWNvbnRlbnQtYmc6ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJG1vZGFsLWNvbnRlbnQtYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAgICAgICByZ2JhKDAsMCwwLC4yKSAhZGVmYXVsdDtcblxuJG1vZGFsLWJhY2tkcm9wLWJnOiAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRtb2RhbC1iYWNrZHJvcC1vcGFjaXR5OiAgICAgIC41ICFkZWZhdWx0O1xuJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I6ICAgI2U1ZTVlNSAhZGVmYXVsdDtcbiRtb2RhbC1mb290ZXItYm9yZGVyLWNvbG9yOiAgICRtb2RhbC1oZWFkZXItYm9yZGVyLWNvbG9yICFkZWZhdWx0O1xuXG4kbW9kYWwtbGc6ICAgICAgICAgICAgICAgICAgICA5MDBweCAhZGVmYXVsdDtcbiRtb2RhbC1tZDogICAgICAgICAgICAgICAgICAgIDYwMHB4ICFkZWZhdWx0O1xuJG1vZGFsLXNtOiAgICAgICAgICAgICAgICAgICAgMzAwcHggIWRlZmF1bHQ7XG5cblxuLy8gQWxlcnRzXG4vL1xuLy8gRGVmaW5lIGFsZXJ0IGNvbG9ycywgYm9yZGVyIHJhZGl1cywgYW5kIHBhZGRpbmcuXG5cbiRhbGVydC1wYWRkaW5nOiAgICAgICAgICAgICAgIDE1cHggIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXJhZGl1czogICAgICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcbiRhbGVydC1saW5rLWZvbnQtd2VpZ2h0OiAgICAgIGJvbGQgIWRlZmF1bHQ7XG4kYWxlcnQtYm9yZGVyLXdpZHRoOiAgICAgICAgICAkYm9yZGVyLXdpZHRoICFkZWZhdWx0O1xuXG4kYWxlcnQtc3VjY2Vzcy1iZzogICAgICAgICAgICAkc3RhdGUtc3VjY2Vzcy1iZyAhZGVmYXVsdDtcbiRhbGVydC1zdWNjZXNzLXRleHQ6ICAgICAgICAgICRzdGF0ZS1zdWNjZXNzLXRleHQgIWRlZmF1bHQ7XG4kYWxlcnQtc3VjY2Vzcy1ib3JkZXI6ICAgICAgICAkc3RhdGUtc3VjY2Vzcy1ib3JkZXIgIWRlZmF1bHQ7XG5cbiRhbGVydC1pbmZvLWJnOiAgICAgICAgICAgICAgICRzdGF0ZS1pbmZvLWJnICFkZWZhdWx0O1xuJGFsZXJ0LWluZm8tdGV4dDogICAgICAgICAgICAgJHN0YXRlLWluZm8tdGV4dCAhZGVmYXVsdDtcbiRhbGVydC1pbmZvLWJvcmRlcjogICAgICAgICAgICRzdGF0ZS1pbmZvLWJvcmRlciAhZGVmYXVsdDtcblxuJGFsZXJ0LXdhcm5pbmctYmc6ICAgICAgICAgICAgJHN0YXRlLXdhcm5pbmctYmcgIWRlZmF1bHQ7XG4kYWxlcnQtd2FybmluZy10ZXh0OiAgICAgICAgICAkc3RhdGUtd2FybmluZy10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LXdhcm5pbmctYm9yZGVyOiAgICAgICAgJHN0YXRlLXdhcm5pbmctYm9yZGVyICFkZWZhdWx0O1xuXG4kYWxlcnQtZGFuZ2VyLWJnOiAgICAgICAgICAgICAkc3RhdGUtZGFuZ2VyLWJnICFkZWZhdWx0O1xuJGFsZXJ0LWRhbmdlci10ZXh0OiAgICAgICAgICAgJHN0YXRlLWRhbmdlci10ZXh0ICFkZWZhdWx0O1xuJGFsZXJ0LWRhbmdlci1ib3JkZXI6ICAgICAgICAgJHN0YXRlLWRhbmdlci1ib3JkZXIgIWRlZmF1bHQ7XG5cblxuLy8gUHJvZ3Jlc3MgYmFyc1xuXG4kcHJvZ3Jlc3MtYmc6ICAgICAgICAgICAgICAgICAjZjVmNWY1ICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1jb2xvcjogICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRwcm9ncmVzcy1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kcHJvZ3Jlc3MtYmFyLWJnOiAgICAgICAgICAgICAkYnJhbmQtcHJpbWFyeSAhZGVmYXVsdDtcbiRwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZzogICAgICRicmFuZC1zdWNjZXNzICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci13YXJuaW5nLWJnOiAgICAgJGJyYW5kLXdhcm5pbmcgIWRlZmF1bHQ7XG4kcHJvZ3Jlc3MtYmFyLWRhbmdlci1iZzogICAgICAkYnJhbmQtZGFuZ2VyICFkZWZhdWx0O1xuJHByb2dyZXNzLWJhci1pbmZvLWJnOiAgICAgICAgJGJyYW5kLWluZm8gIWRlZmF1bHQ7XG5cblxuLy8gTGlzdCBncm91cFxuXG4kbGlzdC1ncm91cC1iZzogICAgICAgICAgICAgICAgICNmZmYgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItY29sb3I6ICAgICAgICNkZGQgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItd2lkdGg6ICAgICAgICRib3JkZXItd2lkdGggIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzOiAgICAgICRib3JkZXItcmFkaXVzICFkZWZhdWx0O1xuXG4kbGlzdC1ncm91cC1ob3Zlci1iZzogICAgICAgICAgICNmNWY1ZjUgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1hY3RpdmUtY29sb3I6ICAgICAgICRjb21wb25lbnQtYWN0aXZlLWNvbG9yICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLWJnOiAgICAgICAgICAkY29tcG9uZW50LWFjdGl2ZS1iZyAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXI6ICAgICAgJGxpc3QtZ3JvdXAtYWN0aXZlLWJnICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtYWN0aXZlLXRleHQtY29sb3I6ICBsaWdodGVuKCRsaXN0LWdyb3VwLWFjdGl2ZS1iZywgNDAlKSAhZGVmYXVsdDtcblxuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3I6ICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kbGlzdC1ncm91cC1kaXNhYmxlZC1iZzogICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJGxpc3QtZ3JvdXAtZGlzYWJsZWQtdGV4dC1jb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtY29sb3IgIWRlZmF1bHQ7XG5cbiRsaXN0LWdyb3VwLWxpbmstY29sb3I6ICAgICAgICAgIzU1NSAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWxpbmstaG92ZXItY29sb3I6ICAgJGxpc3QtZ3JvdXAtbGluay1jb2xvciAhZGVmYXVsdDtcbiRsaXN0LWdyb3VwLWxpbmstaGVhZGluZy1jb2xvcjogIzMzMyAhZGVmYXVsdDtcblxuXG4vLyBJbWFnZSB0aHVtYm5haWxzXG5cbiR0aHVtYm5haWwtcGFkZGluZzogICAgICAgICAgIC4yNXJlbSAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYmc6ICAgICAgICAgICAgICAgICRib2R5LWJnICFkZWZhdWx0O1xuJHRodW1ibmFpbC1ib3JkZXItd2lkdGg6ICAgICAgJGJvcmRlci13aWR0aCAhZGVmYXVsdDtcbiR0aHVtYm5haWwtYm9yZGVyLWNvbG9yOiAgICAgICNkZGQgIWRlZmF1bHQ7XG4kdGh1bWJuYWlsLWJvcmRlci1yYWRpdXM6ICAgICAkYm9yZGVyLXJhZGl1cyAhZGVmYXVsdDtcblxuXG4vLyBCcmVhZGNydW1ic1xuXG4kYnJlYWRjcnVtYi1wYWRkaW5nLXZlcnRpY2FsOiAgIC43NXJlbSAhZGVmYXVsdDtcbiRicmVhZGNydW1iLXBhZGRpbmctaG9yaXpvbnRhbDogMXJlbSAhZGVmYXVsdDtcblxuJGJyZWFkY3J1bWItYmc6ICAgICAgICAgICAgICAgICAkZ3JheS1saWdodGVyICFkZWZhdWx0O1xuJGJyZWFkY3J1bWItZGl2aWRlci1jb2xvcjogICAgICAkZ3JheS1saWdodCAhZGVmYXVsdDtcbiRicmVhZGNydW1iLWFjdGl2ZS1jb2xvcjogICAgICAgJGdyYXktbGlnaHQgIWRlZmF1bHQ7XG4kYnJlYWRjcnVtYi1kaXZpZGVyOiAgICAgICAgICAgIFwiL1wiICFkZWZhdWx0O1xuXG5cbi8vIENhcm91c2VsXG5cbiRjYXJvdXNlbC10ZXh0LXNoYWRvdzogICAgICAgICAgICAgICAgICAgICAgICAwIDFweCAycHggcmdiYSgwLDAsMCwuNikgIWRlZmF1bHQ7XG5cbiRjYXJvdXNlbC1jb250cm9sLWNvbG9yOiAgICAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGNhcm91c2VsLWNvbnRyb2wtd2lkdGg6ICAgICAgICAgICAgICAgICAgICAgIDE1JSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLW9wYWNpdHk6ICAgICAgICAgICAgICAgICAgICAuNSAhZGVmYXVsdDtcbiRjYXJvdXNlbC1jb250cm9sLWZvbnQtc2l6ZTogICAgICAgICAgICAgICAgICAyMHB4ICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtaW5kaWNhdG9yLWFjdGl2ZS1iZzogICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcbiRjYXJvdXNlbC1pbmRpY2F0b3ItYm9yZGVyLWNvbG9yOiAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuXG4kY2Fyb3VzZWwtY2FwdGlvbi1jb2xvcjogICAgICAgICAgICAgICAgICAgICAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLyBDbG9zZVxuXG4kY2xvc2UtZm9udC13ZWlnaHQ6ICAgICAgICAgICBib2xkICFkZWZhdWx0O1xuJGNsb3NlLWNvbG9yOiAgICAgICAgICAgICAgICAgIzAwMCAhZGVmYXVsdDtcbiRjbG9zZS10ZXh0LXNoYWRvdzogICAgICAgICAgIDAgMXB4IDAgI2ZmZiAhZGVmYXVsdDtcblxuXG4vLyBDb2RlXG5cbiRjb2RlLWNvbG9yOiAgICAgICAgICAgICAgICAgICNiZDQxNDcgIWRlZmF1bHQ7XG4kY29kZS1iZzogICAgICAgICAgICAgICAgICAgICAjZjdmN2Y5ICFkZWZhdWx0O1xuXG4ka2JkLWNvbG9yOiAgICAgICAgICAgICAgICAgICAjZmZmICFkZWZhdWx0O1xuJGtiZC1iZzogICAgICAgICAgICAgICAgICAgICAgIzMzMyAhZGVmYXVsdDtcblxuJHByZS1iZzogICAgICAgICAgICAgICAgICAgICAgI2Y3ZjdmOSAhZGVmYXVsdDtcbiRwcmUtY29sb3I6ICAgICAgICAgICAgICAgICAgICRncmF5LWRhcmsgIWRlZmF1bHQ7XG4kcHJlLWJvcmRlci1jb2xvcjogICAgICAgICAgICAjY2NjICFkZWZhdWx0O1xuJHByZS1zY3JvbGxhYmxlLW1heC1oZWlnaHQ6ICAgMzQwcHggIWRlZmF1bHQ7XG4iLCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjMgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8vXG4vLyAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxuLy8gMi4gUHJldmVudCBpT1MgYW5kIElFIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgZGV2aWNlIG9yaWVudGF0aW9uIGNoYW5nZSxcbi8vICAgIHdpdGhvdXQgZGlzYWJsaW5nIHVzZXIgem9vbS5cbi8vXG5cbmh0bWwge1xuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjsgLy8gMVxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLy8gMlxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8vIDJcbn1cblxuLy9cbi8vIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cbi8vXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8vIEhUTUw1IGRpc3BsYXkgZGVmaW5pdGlvbnNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYW55IEhUTUw1IGVsZW1lbnQgaW4gSUUgOC85LlxuLy8gQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBkZXRhaWxzYCBvciBgc3VtbWFyeWAgaW4gSUUgMTAvMTFcbi8vIGFuZCBGaXJlZm94LlxuLy8gQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGBtYWluYCBpbiBJRSAxMS5cbi8vXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWFpbixcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vL1xuLy8gMS4gQ29ycmVjdCBgaW5saW5lLWJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGluIElFIDgvOS5cbi8vIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbi8vXG5cbmF1ZGlvLFxuY2FudmFzLFxucHJvZ3Jlc3MsXG52aWRlbyB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazsgLy8gMVxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8vIDJcbn1cblxuLy9cbi8vIFByZXZlbnQgbW9kZXJuIGJyb3dzZXJzIGZyb20gZGlzcGxheWluZyBgYXVkaW9gIHdpdGhvdXQgY29udHJvbHMuXG4vLyBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxuLy9cblxuYXVkaW86bm90KFtjb250cm9sc10pIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgaGVpZ2h0OiAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBgW2hpZGRlbl1gIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLlxuLy8gSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMC8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxuLy9cblxuW2hpZGRlbl0sXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8vIExpbmtzXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vL1xuLy8gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgY29sb3IgZnJvbSBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4vL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8vXG4vLyBJbXByb3ZlIHJlYWRhYmlsaXR5IG9mIGZvY3VzZWQgZWxlbWVudHMgd2hlbiB0aGV5IGFyZSBhbHNvIGluIGFuXG4vLyBhY3RpdmUvaG92ZXIgc3RhdGUuXG4vL1xuXG5hIHtcbiAgJjphY3RpdmUge1xuICAgIG91dGxpbmU6IDA7XG4gIH1cbiAgJjpob3ZlciB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuXG4vLyBUZXh0LWxldmVsIHNlbWFudGljc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAvMTEsIFNhZmFyaSwgYW5kIENocm9tZS5cbi8vXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcbn1cblxuLy9cbi8vIEFkZHJlc3Mgc3R5bGUgc2V0IHRvIGBib2xkZXJgIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbi8vXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLy9cbi8vIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbi8vXG5cbmRmbiB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLy9cbi8vIEFkZHJlc3MgdmFyaWFibGUgYGgxYCBmb250LXNpemUgYW5kIG1hcmdpbiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWBcbi8vIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cbi8vXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8vXG4vLyBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LlxuLy9cblxubWFyayB7XG4gIGJhY2tncm91bmQ6ICNmZjA7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBpbmNvbnNpc3RlbnQgYW5kIHZhcmlhYmxlIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4vL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vL1xuLy8gUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgYWZmZWN0aW5nIGBsaW5lLWhlaWdodGAgaW4gYWxsIGJyb3dzZXJzLlxuLy9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuLy8gRW1iZWRkZWQgY29udGVudFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxuLy9cblxuaW1nIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4vL1xuLy8gQ29ycmVjdCBvdmVyZmxvdyBub3QgaGlkZGVuIGluIElFIDkvMTAvMTEuXG4vL1xuXG5zdmc6bm90KDpyb290KSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIEdyb3VwaW5nIGNvbnRlbnRcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBBZGRyZXNzIG1hcmdpbiBub3QgcHJlc2VudCBpbiBJRSA4LzkgYW5kIFNhZmFyaS5cbi8vXG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMWVtIDQwcHg7XG59XG5cbi8vXG4vLyBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXG4vL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBoZWlnaHQ6IDA7XG59XG5cbi8vXG4vLyBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cbi8vXG5cbnByZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vL1xuLy8gQWRkcmVzcyBvZGQgYGVtYC11bml0IGZvbnQgc2l6ZSByZW5kZXJpbmcgaW4gYWxsIGJyb3dzZXJzLlxuLy9cblxuY29kZSxcbmtiZCxcbnByZSxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vLyBGb3Jtc1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuLy9cbi8vIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXG4vLyBzdHlsaW5nIG9mIGBzZWxlY3RgLCB1bmxlc3MgYSBgYm9yZGVyYCBwcm9wZXJ0eSBpcyBzZXQuXG4vL1xuXG4vL1xuLy8gMS4gQ29ycmVjdCBjb2xvciBub3QgYmVpbmcgaW5oZXJpdGVkLlxuLy8gICAgS25vd24gaXNzdWU6IGFmZmVjdHMgY29sb3Igb2YgZGlzYWJsZWQgZWxlbWVudHMuXG4vLyAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxuLy8gMy4gQWRkcmVzcyBtYXJnaW5zIHNldCBkaWZmZXJlbnRseSBpbiBGaXJlZm94IDQrLCBTYWZhcmksIGFuZCBDaHJvbWUuXG4vL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBjb2xvcjogaW5oZXJpdDsgLy8gMVxuICBmb250OiBpbmhlcml0OyAvLyAyXG4gIG1hcmdpbjogMDsgLy8gM1xufVxuXG4vL1xuLy8gQWRkcmVzcyBgb3ZlcmZsb3dgIHNldCB0byBgaGlkZGVuYCBpbiBJRSA4LzkvMTAvMTEuXG4vL1xuXG5idXR0b24ge1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLy9cbi8vIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cbi8vIEFsbCBvdGhlciBmb3JtIGNvbnRyb2wgZWxlbWVudHMgZG8gbm90IGluaGVyaXQgYHRleHQtdHJhbnNmb3JtYCB2YWx1ZXMuXG4vLyBDb3JyZWN0IGBidXR0b25gIHN0eWxlIGluaGVyaXRhbmNlIGluIEZpcmVmb3gsIElFIDgvOS8xMC8xMSwgYW5kIE9wZXJhLlxuLy8gQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxuLy9cblxuYnV0dG9uLFxuc2VsZWN0IHtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8vXG4vLyAxLiBBdm9pZCB0aGUgV2ViS2l0IGJ1ZyBpbiBBbmRyb2lkIDQuMC4qIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYFxuLy8gICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXG4vLyAyLiBDb3JyZWN0IGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgYGlucHV0YCB0eXBlcyBpbiBpT1MuXG4vLyAzLiBJbXByb3ZlIHVzYWJpbGl0eSBhbmQgY29uc2lzdGVuY3kgb2YgY3Vyc29yIHN0eWxlIGJldHdlZW4gaW1hZ2UtdHlwZVxuLy8gICAgYGlucHV0YCBhbmQgb3RoZXJzLlxuLy9cblxuYnV0dG9uLFxuaHRtbCBpbnB1dFt0eXBlPVwiYnV0dG9uXCJdLCAvLyAxXG5pbnB1dFt0eXBlPVwicmVzZXRcIl0sXG5pbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8vIDJcbiAgY3Vyc29yOiBwb2ludGVyOyAvLyAzXG59XG5cbi8vXG4vLyBSZS1zZXQgZGVmYXVsdCBjdXJzb3IgZm9yIGRpc2FibGVkIGVsZW1lbnRzLlxuLy9cblxuYnV0dG9uW2Rpc2FibGVkXSxcbmh0bWwgaW5wdXRbZGlzYWJsZWRdIHtcbiAgY3Vyc29yOiBkZWZhdWx0O1xufVxuXG4vL1xuLy8gUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIGJvcmRlciBpbiBGaXJlZm94IDQrLlxuLy9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8vXG4vLyBBZGRyZXNzIEZpcmVmb3ggNCsgc2V0dGluZyBgbGluZS1oZWlnaHRgIG9uIGBpbnB1dGAgdXNpbmcgYCFpbXBvcnRhbnRgIGluXG4vLyB0aGUgVUEgc3R5bGVzaGVldC5cbi8vXG5cbmlucHV0IHtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbn1cblxuLy9cbi8vIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cbi8vIEZpcmVmb3gncyBpbXBsZW1lbnRhdGlvbiBkb2Vzbid0IHJlc3BlY3QgYm94LXNpemluZywgcGFkZGluZywgb3Igd2lkdGguXG4vL1xuLy8gMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cbi8vIDIuIFJlbW92ZSBleGNlc3MgcGFkZGluZyBpbiBJRSA4LzkvMTAuXG4vL1xuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0sXG5pbnB1dFt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvLyAxXG4gIHBhZGRpbmc6IDA7IC8vIDJcbn1cblxuLy9cbi8vIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXG4vLyBgZm9udC1zaXplYCB2YWx1ZXMgb2YgdGhlIGBpbnB1dGAsIGl0IGNhdXNlcyB0aGUgY3Vyc29yIHN0eWxlIG9mIHRoZVxuLy8gZGVjcmVtZW50IGJ1dHRvbiB0byBjaGFuZ2UgZnJvbSBgZGVmYXVsdGAgdG8gYHRleHRgLlxuLy9cblxuaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbmlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8vXG4vLyAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cbi8vIDIuIEFkZHJlc3MgYGJveC1zaXppbmdgIHNldCB0byBgYm9yZGVyLWJveGAgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXG4vL1xuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8vIDFcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8vMlxufVxuXG4vL1xuLy8gUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXG4vLyBTYWZhcmkgKGJ1dCBub3QgQ2hyb21lKSBjbGlwcyB0aGUgY2FuY2VsIGJ1dHRvbiB3aGVuIHRoZSBzZWFyY2ggaW5wdXQgaGFzXG4vLyBwYWRkaW5nIChhbmQgYHRleHRmaWVsZGAgYXBwZWFyYW5jZSkuXG4vL1xuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxuaW5wdXRbdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLy9cbi8vIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cbi8vXG5cbmZpZWxkc2V0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2MwYzBjMDtcbiAgbWFyZ2luOiAwIDJweDtcbiAgcGFkZGluZzogMC4zNWVtIDAuNjI1ZW0gMC43NWVtO1xufVxuXG4vL1xuLy8gMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxuLy8gMi4gUmVtb3ZlIHBhZGRpbmcgc28gcGVvcGxlIGFyZW4ndCBjYXVnaHQgb3V0IGlmIHRoZXkgemVybyBvdXQgZmllbGRzZXRzLlxuLy9cblxubGVnZW5kIHtcbiAgYm9yZGVyOiAwOyAvLyAxXG4gIHBhZGRpbmc6IDA7IC8vIDJcbn1cblxuLy9cbi8vIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXG4vL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vL1xuLy8gRG9uJ3QgaW5oZXJpdCB0aGUgYGZvbnQtd2VpZ2h0YCAoYXBwbGllZCBieSBhIHJ1bGUgYWJvdmUpLlxuLy8gTk9URTogdGhlIGRlZmF1bHQgY2Fubm90IHNhZmVseSBiZSBjaGFuZ2VkIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFguXG4vL1xuXG5vcHRncm91cCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4vLyBUYWJsZXNcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbi8vXG4vLyBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXG4vL1xuXG50YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlci1zcGFjaW5nOiAwO1xufVxuXG50ZCxcbnRoIHtcbiAgcGFkZGluZzogMDtcbn1cbiIsIi8vIFNvdXJjZTogaHR0cHM6Ly9naXRodWIuY29tL2g1YnAvaHRtbDUtYm9pbGVycGxhdGUvYmxvYi9tYXN0ZXIvc3JjL2Nzcy9tYWluLmNzc1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gUHJpbnQgc3R5bGVzLlxuLy8gSW5saW5lZCB0byBhdm9pZCB0aGUgYWRkaXRpb25hbCBIVFRQIHJlcXVlc3Q6IGg1YnAuY29tL3Jcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbkBtZWRpYSBwcmludCB7XG4gICosXG4gICo6OmJlZm9yZSxcbiAgKjo6YWZ0ZXIge1xuICAgIHRleHQtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICB9XG5cbiAgYSxcbiAgYTp2aXNpdGVkIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgfVxuXG4gIGFiYnJbdGl0bGVdOjphZnRlciB7XG4gICAgY29udGVudDogXCIgKFwiIGF0dHIodGl0bGUpIFwiKVwiO1xuICB9XG5cbiAgcHJlLFxuICBibG9ja3F1b3RlIHtcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgIzk5OTtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cblxuICB0aGVhZCB7XG4gICAgZGlzcGxheTogdGFibGUtaGVhZGVyLWdyb3VwOyAvLyBoNWJwLmNvbS90XG4gIH1cblxuICB0cixcbiAgaW1nIHtcbiAgICBwYWdlLWJyZWFrLWluc2lkZTogYXZvaWQ7XG4gIH1cblxuICBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgcCxcbiAgaDIsXG4gIGgzIHtcbiAgICBvcnBoYW5zOiAzO1xuICAgIHdpZG93czogMztcbiAgfVxuXG4gIGgyLFxuICBoMyB7XG4gICAgcGFnZS1icmVhay1hZnRlcjogYXZvaWQ7XG4gIH1cblxuICAvLyBCb290c3RyYXAgc3BlY2lmaWMgY2hhbmdlcyBzdGFydFxuXG4gIC8vIEJvb3RzdHJhcCBjb21wb25lbnRzXG4gIC5uYXZiYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJ0bixcbiAgLmRyb3B1cCA+IC5idG4ge1xuICAgID4gLmNhcmV0IHtcbiAgICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmxhYmVsIHtcbiAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQgIzAwMDtcbiAgfVxuXG4gIC50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZSAhaW1wb3J0YW50O1xuXG4gICAgdGQsXG4gICAgdGgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAudGFibGUtYm9yZGVyZWQge1xuICAgIHRoLFxuICAgIHRkIHtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAvLyBCb290c3RyYXAgc3BlY2lmaWMgY2hhbmdlcyBlbmRcbn1cbiIsIi8vIFJlYm9vdFxuLy9cbi8vIEdsb2JhbCByZXNldHMgdG8gY29tbW9uIEhUTUwgZWxlbWVudHMgYW5kIG1vcmUgZm9yIGVhc2llciB1c2FnZSBieSBCb290c3RyYXAuXG4vLyBBZGRzIGFkZGl0aW9uYWwgcnVsZXMgb24gdG9wIG9mIE5vcm1hbGl6ZS5jc3MsIGluY2x1ZGluZyBzZXZlcmFsIG92ZXJyaWRlcy5cblxuXG4vLyBSZXNldCB0aGUgYm94LXNpemluZ1xuLy9cbi8vIENoYW5nZSBmcm9tIGBib3gtc2l6aW5nOiBjb250ZW50LWJveGAgdG8gYGJvcmRlci1ib3hgIHNvIHRoYXQgd2hlbiB5b3UgYWRkXG4vLyBgcGFkZGluZ2Agb3IgYGJvcmRlcmBzIHRvIGFuIGVsZW1lbnQsIHRoZSBvdmVyYWxsIGRlY2xhcmVkIGB3aWR0aGAgZG9lcyBub3Rcbi8vIGNoYW5nZS4gRm9yIGV4YW1wbGUsIGB3aWR0aDogMTAwcHg7YCB3aWxsIGFsd2F5cyBiZSBgMTAwcHhgIGRlc3BpdGUgdGhlXG4vLyBgYm9yZGVyOiAxMHB4IHNvbGlkIHJlZDtgIGFuZCBgcGFkZGluZzogMjBweDtgLlxuLy9cbi8vIEhlYWRzIHVwISBUaGlzIHJlc2V0IG1heSBjYXVzZSBjb25mbGljdHMgd2l0aCBzb21lIHRoaXJkLXBhcnR5IHdpZGdldHMuIEZvclxuLy8gcmVjb21tZW5kYXRpb25zIG9uIHJlc29sdmluZyBzdWNoIGNvbmZsaWN0cywgc2VlXG4vLyBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9nZXR0aW5nLXN0YXJ0ZWQvI3RoaXJkLWJveC1zaXppbmcuXG4vL1xuLy8gQ3JlZGl0OiBodHRwczovL2Nzcy10cmlja3MuY29tL2luaGVyaXRpbmctYm94LXNpemluZy1wcm9iYWJseS1zbGlnaHRseS1iZXR0ZXItYmVzdC1wcmFjdGljZS9cblxuaHRtbCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG59XG5cblxuLy8gTWFrZSB2aWV3cG9ydCByZXNwb25zaXZlXG4vL1xuLy8gQHZpZXdwb3J0IGlzIG5lZWRlZCBiZWNhdXNlIElFIDEwKyBkb2Vzbid0IGhvbm9yIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiPiBpblxuLy8gc29tZSBjYXNlcy4gU2VlIGh0dHA6Ly90aW1rYWRsZWMuY29tLzIwMTIvMTAvaWUxMC1zbmFwLW1vZGUtYW5kLXJlc3BvbnNpdmUtZGVzaWduLy5cbi8vIEV2ZW50dWFsbHkgQHZpZXdwb3J0IHdpbGwgcmVwbGFjZSA8bWV0YSBuYW1lPVwidmlld3BvcnRcIj4uIEl0J3MgYmVlbiBtYW51YWxseVxuLy8gcHJlZml4ZWQgZm9yIGZvcndhcmQtY29tcGF0aWJpbGl0eS5cbi8vXG4vLyBIb3dldmVyLCBgZGV2aWNlLXdpZHRoYCBpcyBicm9rZW4gb24gSUUgMTAgb24gV2luZG93cyAoUGhvbmUpIDgsXG4vLyAoc2VlIGh0dHA6Ly90aW1rYWRsZWMuY29tLzIwMTMvMDEvd2luZG93cy1waG9uZS04LWFuZC1kZXZpY2Utd2lkdGgvIGFuZCBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzEwNDk3KVxuLy8gYW5kIHRoZSBmaXggZm9yIHRoYXQgaW52b2x2ZXMgYSBzbmlwcGV0IG9mIEphdmFTY3JpcHQgdG8gc25pZmYgdGhlIHVzZXIgYWdlbnRcbi8vIGFuZCBhcHBseSBzb21lIGNvbmRpdGlvbmFsIENTUy5cbi8vXG4vLyBTZWUgaHR0cDovL2dldGJvb3RzdHJhcC5jb20vZ2V0dGluZy1zdGFydGVkLyNzdXBwb3J0LWllMTAtd2lkdGggZm9yIHRoZSByZWxldmFudCBoYWNrLlxuLy9cbi8vIFdyYXAgYEB2aWV3cG9ydGAgd2l0aCBgQGF0LXJvb3RgIGZvciB3aGVuIGZvbGtzIGRvIGEgbmVzdGVkIGltcG9ydCAoZS5nLixcbi8vIGAuY2xhc3MtbmFtZSB7IEBpbXBvcnQgXCJib290c3RyYXBcIjsgfWApLlxuLy9cbi8vIEluY2x1ZGVzIGZ1dHVyZS1wcm9vZmVkIHZlbmRvciBwcmVmaXhlcyBhcyB3ZWxsLlxuQGF0LXJvb3Qge1xuICBALW1vei12aWV3cG9ydCAgICAgIHsgd2lkdGg6IGRldmljZS13aWR0aDsgfVxuICBALW1zLXZpZXdwb3J0ICAgICAgIHsgd2lkdGg6IGRldmljZS13aWR0aDsgfVxuICBALW8tdmlld3BvcnQgICAgICAgIHsgd2lkdGg6IGRldmljZS13aWR0aDsgfVxuICBALXdlYmtpdC12aWV3cG9ydCAgIHsgd2lkdGg6IGRldmljZS13aWR0aDsgfVxuICBAdmlld3BvcnQgICAgICAgICAgIHsgd2lkdGg6IGRldmljZS13aWR0aDsgfVxufVxuXG5cbi8vXG4vLyBSZXNldCBIVE1MLCBib2R5LCBhbmQgbW9yZVxuLy9cblxuaHRtbCB7XG4gIC8vIFNldHMgYSBzcGVjaWZpYyBkZWZhdWx0IGBmb250LXNpemVgIGZvciB1c2VyIHdpdGggYHJlbWAgdHlwZSBzY2FsZXMuXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1yb290O1xuICAvLyBDaGFuZ2VzIHRoZSBkZWZhdWx0IHRhcCBoaWdobGlnaHQgdG8gYmUgY29tcGxldGVseSB0cmFuc3BhcmVudCBpbiBpT1MuXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbn1cblxuYm9keSB7XG4gIC8vIE1ha2UgdGhlIGBib2R5YCB1c2UgdGhlIGBmb250LXNpemUtcm9vdGBcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1iYXNlO1xuICBmb250LXNpemU6ICRmb250LXNpemUtYmFzZTtcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgLy8gR28gZWFzeSBvbiB0aGUgZXllcyBhbmQgdXNlIHNvbWV0aGluZyBvdGhlciB0aGFuIGAjMDAwYCBmb3IgdGV4dFxuICBjb2xvcjogJGJvZHktY29sb3I7XG4gIC8vIEJ5IGRlZmF1bHQsIGA8Ym9keT5gIGhhcyBubyBgYmFja2dyb3VuZC1jb2xvcmAgc28gd2Ugc2V0IG9uZSBhcyBhIGJlc3QgcHJhY3RpY2UuXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xufVxuXG4vLyBTdXBwcmVzcyB0aGUgZm9jdXMgb3V0bGluZSBvbiBlbGVtZW50cyB0aGF0IGNhbm5vdCBiZSBhY2Nlc3NlZCB2aWEga2V5Ym9hcmQuXG4vLyBUaGlzIHByZXZlbnRzIGFuIHVud2FudGVkIGZvY3VzIG91dGxpbmUgZnJvbSBhcHBlYXJpbmcgYXJvdW5kIGVsZW1lbnRzIHRoYXRcbi8vIG1pZ2h0IHN0aWxsIHJlc3BvbmQgdG8gcG9pbnRlciBldmVudHMuXG4vL1xuLy8gQ3JlZGl0OiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXG5bdGFiaW5kZXg9XCItMVwiXTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuXG4vL1xuLy8gVHlwb2dyYXBoeVxuLy9cblxuLy8gUmVtb3ZlIHRvcCBtYXJnaW5zIGZyb20gaGVhZGluZ3Ncbi8vXG4vLyBCeSBkZWZhdWx0LCBgPGgxPmAtYDxoNj5gIGFsbCByZWNlaXZlIHRvcCBhbmQgYm90dG9tIG1hcmdpbnMuIFdlIG51a2UgdGhlIHRvcFxuLy8gbWFyZ2luIGZvciBlYXNpZXIgY29udHJvbCB3aXRoaW4gdHlwZSBzY2FsZXMgYXMgaXQgYXZvaWRzIG1hcmdpbiBjb2xsYXBzaW5nLlxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xufVxuXG4vLyBSZXNldCBtYXJnaW5zIG9uIHBhcmFncmFwaHNcbi8vXG4vLyBTaW1pbGFybHksIHRoZSB0b3AgbWFyZ2luIG9uIGA8cD5gcyBnZXQgcmVzZXQuIEhvd2V2ZXIsIHdlIGFsc28gcmVzZXQgdGhlXG4vLyBib3R0b20gbWFyZ2luIHRvIHVzZSBgcmVtYCB1bml0cyBpbnN0ZWFkIG9mIGBlbWAuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLy8gQWJicmV2aWF0aW9ucyBhbmQgYWNyb255bXNcbmFiYnJbdGl0bGVdLFxuLy8gQWRkIGRhdGEtKiBhdHRyaWJ1dGUgdG8gaGVscCBvdXQgb3VyIHRvb2x0aXAgcGx1Z2luLCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy81MjU3XG5hYmJyW2RhdGEtb3JpZ2luYWwtdGl0bGVdIHtcbiAgY3Vyc29yOiBoZWxwO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkICRhYmJyLWJvcmRlci1jb2xvcjtcbn1cblxuYWRkcmVzcyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG59XG5cbm9sLFxudWwsXG5kbCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbm9sIG9sLFxudWwgdWwsXG5vbCB1bCxcbnVsIG9sIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuZHQge1xuICBmb250LXdlaWdodDogJGR0LWZvbnQtd2VpZ2h0O1xufVxuXG5kZCB7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBtYXJnaW4tbGVmdDogMDsgLy8gVW5kbyBicm93c2VyIGRlZmF1bHRcbn1cblxuYmxvY2txdW90ZSB7XG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cblxuLy9cbi8vIExpbmtzXG4vL1xuXG5hIHtcbiAgY29sb3I6ICRsaW5rLWNvbG9yO1xuICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWRlY29yYXRpb247XG5cbiAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWhvdmVyLWRlY29yYXRpb247XG4gIH1cblxuICAmOmZvY3VzIHtcbiAgICBAaW5jbHVkZSB0YWItZm9jdXMoKTtcbiAgfVxufVxuXG5cbi8vXG4vLyBDb2RlXG4vL1xuXG5wcmUge1xuICAvLyBSZW1vdmUgYnJvd3NlciBkZWZhdWx0IHRvcCBtYXJnaW5cbiAgbWFyZ2luLXRvcDogMDtcbiAgLy8gUmVzZXQgYnJvd3NlciBkZWZhdWx0IG9mIGAxZW1gIHRvIHVzZSBgcmVtYHNcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuXG4vL1xuLy8gRmlndXJlc1xuLy9cblxuZmlndXJlIHtcbiAgLy8gTm9ybWFsaXplIGFkZHMgYG1hcmdpbmAgdG8gYGZpZ3VyZWBzIGFzIGJyb3dzZXJzIGFwcGx5IGl0IGluY29uc2lzdGVudGx5LlxuICAvLyBXZSByZXNldCB0aGF0IHRvIGNyZWF0ZSBhIGJldHRlciBmbG93IGluLXBhZ2UuXG4gIG1hcmdpbjogMCAwIDFyZW07XG59XG5cblxuLy9cbi8vIEltYWdlc1xuLy9cblxuaW1nIHtcbiAgLy8gQnkgZGVmYXVsdCwgYDxpbWc+YHMgYXJlIGBpbmxpbmUtYmxvY2tgLiBUaGlzIGFzc3VtZXMgdGhhdCwgYW5kIHZlcnRpY2FsbHlcbiAgLy8gY2VudGVycyB0aGVtLiBUaGlzIHdvbid0IGFwcGx5IHNob3VsZCB5b3UgcmVzZXQgdGhlbSB0byBgYmxvY2tgIGxldmVsLlxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAvLyBOb3RlOiBgPGltZz5gcyBhcmUgZGVsaWJlcmF0ZWx5IG5vdCBtYWRlIHJlc3BvbnNpdmUgYnkgZGVmYXVsdC5cbiAgLy8gRm9yIHRoZSByYXRpb25hbGUgYmVoaW5kIHRoaXMsIHNlZSB0aGUgY29tbWVudHMgb24gdGhlIGAuaW1nLWZsdWlkYCBjbGFzcy5cbn1cblxuXG4vLyBpT1MgXCJjbGlja2FibGUgZWxlbWVudHNcIiBmaXggZm9yIHJvbGU9XCJidXR0b25cIlxuLy9cbi8vIEZpeGVzIFwiY2xpY2thYmlsaXR5XCIgaXNzdWUgKGFuZCBtb3JlIGdlbmVyYWxseSwgdGhlIGZpcmluZyBvZiBldmVudHMgc3VjaCBhcyBmb2N1cyBhcyB3ZWxsKVxuLy8gZm9yIHRyYWRpdGlvbmFsbHkgbm9uLWZvY3VzYWJsZSBlbGVtZW50cyB3aXRoIHJvbGU9XCJidXR0b25cIlxuLy8gc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0V2ZW50cy9jbGljayNTYWZhcmlfTW9iaWxlXG5cbltyb2xlPVwiYnV0dG9uXCJdIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi8vIEF2b2lkIDMwMG1zIGNsaWNrIGRlbGF5IG9uIHRvdWNoIGRldmljZXMgdGhhdCBzdXBwb3J0IHRoZSBgdG91Y2gtYWN0aW9uYCBDU1MgcHJvcGVydHkuXG4vL1xuLy8gSW4gcGFydGljdWxhciwgdW5saWtlIG1vc3Qgb3RoZXIgYnJvd3NlcnMsIElFMTErRWRnZSBvbiBXaW5kb3dzIDEwIG9uIHRvdWNoIGRldmljZXMgYW5kIElFIE1vYmlsZSAxMC0xMVxuLy8gRE9OJ1QgcmVtb3ZlIHRoZSBjbGljayBkZWxheSB3aGVuIGA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoXCI+YCBpcyBwcmVzZW50LlxuLy8gSG93ZXZlciwgdGhleSBETyBzdXBwb3J0IHJlbW92aW5nIHRoZSBjbGljayBkZWxheSB2aWEgYHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uYC5cbi8vIFNlZTpcbi8vICogaHR0cDovL3Y0LWFscGhhLmdldGJvb3RzdHJhcC5jb20vY29udGVudC9yZWJvb3QvI2NsaWNrLWRlbGF5LW9wdGltaXphdGlvbi1mb3ItdG91Y2hcbi8vICogaHR0cDovL2Nhbml1c2UuY29tLyNmZWF0PWNzcy10b3VjaC1hY3Rpb25cbi8vICogaHR0cDovL3BhdHJpY2tobGF1a2UuZ2l0aHViLmlvL3RvdWNoL3Rlc3RzL3Jlc3VsdHMvI3N1cHByZXNzaW5nLTMwMG1zLWRlbGF5XG5cbmEsXG5hcmVhLFxuYnV0dG9uLFxuW3JvbGU9XCJidXR0b25cIl0sXG5pbnB1dCxcbmxhYmVsLFxuc2VsZWN0LFxuc3VtbWFyeSxcbnRleHRhcmVhIHtcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XG59XG5cblxuLy9cbi8vIFRhYmxlc1xuLy9cblxudGFibGUge1xuICAvLyBSZXNldCBmb3IgbmVzdGluZyB3aXRoaW4gcGFyZW50cyB3aXRoIGBiYWNrZ3JvdW5kLWNvbG9yYC5cbiAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWJnO1xufVxuXG5jYXB0aW9uIHtcbiAgcGFkZGluZy10b3A6ICR0YWJsZS1jZWxsLXBhZGRpbmc7XG4gIHBhZGRpbmctYm90dG9tOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICBjb2xvcjogJHRleHQtbXV0ZWQ7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNhcHRpb24tc2lkZTogYm90dG9tO1xufVxuXG50aCB7XG4gIC8vIENlbnRlcmVkIGJ5IGRlZmF1bHQsIGJ1dCBsZWZ0LWFsaWduLWVkIHRvIG1hdGNoIHRoZSBgdGRgcyBiZWxvdy5cbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuXG4vL1xuLy8gRm9ybXNcbi8vXG5cbmxhYmVsIHtcbiAgLy8gQWxsb3cgbGFiZWxzIHRvIHVzZSBgbWFyZ2luYCBmb3Igc3BhY2luZy5cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLy8gV29yayBhcm91bmQgYSBGaXJlZm94L0lFIGJ1ZyB3aGVyZSB0aGUgdHJhbnNwYXJlbnQgYGJ1dHRvbmAgYmFja2dyb3VuZFxuLy8gcmVzdWx0cyBpbiBhIGxvc3Mgb2YgdGhlIGRlZmF1bHQgYGJ1dHRvbmAgZm9jdXMgc3R5bGVzLlxuLy9cbi8vIENyZWRpdDogaHR0cHM6Ly9naXRodWIuY29tL3N1aXRjc3MvYmFzZS9cbmJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQ7XG4gIG91dGxpbmU6IDVweCBhdXRvIC13ZWJraXQtZm9jdXMtcmluZy1jb2xvcjtcbn1cblxuaW5wdXQsXG5idXR0b24sXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIC8vIFJlbW92ZSBhbGwgYG1hcmdpbmBzIHNvIG91ciBjbGFzc2VzIGRvbid0IGhhdmUgdG8gZG8gaXQgdGhlbXNlbHZlcy5cbiAgbWFyZ2luOiAwO1xuICAvLyBOb3JtYWxpemUgaW5jbHVkZXMgYGZvbnQ6IGluaGVyaXQ7YCwgc28gYGZvbnQtZmFtaWx5YC4gYGZvbnQtc2l6ZWAsIGV0YyBhcmVcbiAgLy8gcHJvcGVybHkgaW5oZXJpdGVkLiBIb3dldmVyLCBgbGluZS1oZWlnaHRgIGlzbid0IGFkZHJlc3NlZCB0aGVyZS4gVXNpbmcgdGhpc1xuICAvLyBlbnN1cmVzIHdlIGRvbid0IG5lZWQgdG8gdW5uZWNlc3NhcmlseSByZWRlY2xhcmUgdGhlIGdsb2JhbCBmb250IHN0YWNrLlxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgLy8gaU9TIGFkZHMgcm91bmRlZCBib3JkZXJzIGJ5IGRlZmF1bHRcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxudGV4dGFyZWEge1xuICAvLyBUZXh0YXJlYXMgc2hvdWxkIHJlYWxseSBvbmx5IHJlc2l6ZSB2ZXJ0aWNhbGx5IHNvIHRoZXkgZG9uJ3QgYnJlYWsgdGhlaXIgKGhvcml6b250YWwpIGNvbnRhaW5lcnMuXG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmZpZWxkc2V0IHtcbiAgLy8gQ2hyb21lIGFuZCBGaXJlZm94IHNldCBhIGBtaW4td2lkdGg6IG1pbi1jb250ZW50O2Agb24gZmllbGRzZXRzLFxuICAvLyBzbyB3ZSByZXNldCB0aGF0IHRvIGVuc3VyZSBpdCBiZWhhdmVzIG1vcmUgbGlrZSBhIHN0YW5kYXJkIGJsb2NrIGVsZW1lbnQuXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzEyMzU5LlxuICBtaW4td2lkdGg6IDA7XG4gIC8vIFJlc2V0IHRoZSBkZWZhdWx0IG91dGxpbmUgYmVoYXZpb3Igb2YgZmllbGRzZXRzIHNvIHRoZXkgZG9uJ3QgYWZmZWN0IHBhZ2UgbGF5b3V0LlxuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbn1cblxubGVnZW5kIHtcbiAgLy8gUmVzZXQgdGhlIGVudGlyZSBsZWdlbmQgZWxlbWVudCB0byBtYXRjaCB0aGUgYGZpZWxkc2V0YFxuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4vLyAgYm9yZGVyOiAwO1xufVxuXG5pbnB1dFt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLy8gVW5kbyBOb3JtYWxpemUncyBkZWZhdWx0IGhlcmUgdG8gbWF0Y2ggb3VyIGdsb2JhbCBvdmVycmlkZXMuXG4gIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gIC8vIFRoaXMgb3ZlcnJpZGVzIHRoZSBleHRyYSByb3VuZGVkIGNvcm5lcnMgb24gc2VhcmNoIGlucHV0cyBpbiBpT1Mgc28gdGhhdCBvdXJcbiAgLy8gYC5mb3JtLWNvbnRyb2xgIGNsYXNzIGNhbiBwcm9wZXJseSBzdHlsZSB0aGVtLiBOb3RlIHRoYXQgdGhpcyBjYW5ub3Qgc2ltcGx5XG4gIC8vIGJlIGFkZGVkIHRvIGAuZm9ybS1jb250cm9sYCBhcyBpdCdzIG5vdCBzcGVjaWZpYyBlbm91Z2guIEZvciBkZXRhaWxzLCBzZWVcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU4Ni5cbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vLyB0b2RvOiBuZWVkZWQ/XG5vdXRwdXQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4vLyAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4vLyAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbi8vICBjb2xvcjogJGlucHV0LWNvbG9yO1xufVxuXG4vLyBBbHdheXMgaGlkZSBhbiBlbGVtZW50IHdpdGggdGhlIGBoaWRkZW5gIEhUTUwgYXR0cmlidXRlIChmcm9tIFB1cmVDU1MpLlxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG4iLCIvL1xuLy8gSGVhZGluZ3Ncbi8vXG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsXG4uaDEsIC5oMiwgLmgzLCAuaDQsIC5oNSwgLmg2IHtcbiAgbWFyZ2luLWJvdHRvbTogJGhlYWRpbmdzLW1hcmdpbi1ib3R0b207XG4gIGZvbnQtZmFtaWx5OiAkaGVhZGluZ3MtZm9udC1mYW1pbHk7XG4gIGZvbnQtd2VpZ2h0OiAkaGVhZGluZ3MtZm9udC13ZWlnaHQ7XG4gIGxpbmUtaGVpZ2h0OiAkaGVhZGluZ3MtbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkaGVhZGluZ3MtY29sb3I7XG59XG5cbmgxIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgxOyB9XG5oMiB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMjsgfVxuaDMgeyBmb250LXNpemU6ICRmb250LXNpemUtaDM7IH1cbmg0IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg0OyB9XG5oNSB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNTsgfVxuaDYgeyBmb250LXNpemU6ICRmb250LXNpemUtaDY7IH1cblxuLy8gVGhlc2UgZGVjbGFyYXRpb25zIGFyZSBrZXB0IHNlcGFyYXRlIGZyb20gYW5kIHBsYWNlZCBhZnRlclxuLy8gdGhlIHByZXZpb3VzIHRhZy1iYXNlZCBkZWNsYXJhdGlvbnMgc28gdGhhdCB0aGUgY2xhc3NlcyBiZWF0IHRoZSB0YWdzIGluXG4vLyB0aGUgQ1NTIGNhc2NhZGUsIGFuZCB0aHVzIDxoMSBjbGFzcz1cImgyXCI+IHdpbGwgYmUgc3R5bGVkIGxpa2UgYW4gaDIuXG4uaDEgeyBmb250LXNpemU6ICRmb250LXNpemUtaDE7IH1cbi5oMiB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oMjsgfVxuLmgzIHsgZm9udC1zaXplOiAkZm9udC1zaXplLWgzOyB9XG4uaDQgeyBmb250LXNpemU6ICRmb250LXNpemUtaDQ7IH1cbi5oNSB7IGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1oNTsgfVxuLmg2IHsgZm9udC1zaXplOiAkZm9udC1zaXplLWg2OyB9XG5cbi5sZWFkIHtcbiAgZm9udC1zaXplOiAkbGVhZC1mb250LXNpemU7XG4gIGZvbnQtd2VpZ2h0OiAkbGVhZC1mb250LXdlaWdodDtcbn1cblxuLy8gVHlwZSBkaXNwbGF5IGNsYXNzZXNcbi5kaXNwbGF5LTEge1xuICBmb250LXNpemU6ICRkaXNwbGF5MS1zaXplO1xuICBmb250LXdlaWdodDogJGRpc3BsYXkxLXdlaWdodDtcbn1cbi5kaXNwbGF5LTIge1xuICBmb250LXNpemU6ICRkaXNwbGF5Mi1zaXplO1xuICBmb250LXdlaWdodDogJGRpc3BsYXkyLXdlaWdodDtcbn1cbi5kaXNwbGF5LTMge1xuICBmb250LXNpemU6ICRkaXNwbGF5My1zaXplO1xuICBmb250LXdlaWdodDogJGRpc3BsYXkzLXdlaWdodDtcbn1cbi5kaXNwbGF5LTQge1xuICBmb250LXNpemU6ICRkaXNwbGF5NC1zaXplO1xuICBmb250LXdlaWdodDogJGRpc3BsYXk0LXdlaWdodDtcbn1cblxuXG4vL1xuLy8gSG9yaXpvbnRhbCBydWxlc1xuLy9cblxuaHIge1xuICBtYXJnaW4tdG9wOiAkc3BhY2VyLXk7XG4gIG1hcmdpbi1ib3R0b206ICRzcGFjZXIteTtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItdG9wOiAkaHItYm9yZGVyLXdpZHRoIHNvbGlkICRoci1ib3JkZXItY29sb3I7XG59XG5cblxuLy9cbi8vIEVtcGhhc2lzXG4vL1xuXG5zbWFsbCxcbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG5tYXJrLFxuLm1hcmsge1xuICBwYWRkaW5nOiAuMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3RhdGUtd2FybmluZy1iZztcbn1cblxuXG4vL1xuLy8gTGlzdHNcbi8vXG5cbi5saXN0LXVuc3R5bGVkIHtcbiAgQGluY2x1ZGUgbGlzdC11bnN0eWxlZDtcbn1cblxuLy8gSW5saW5lIHR1cm5zIGxpc3QgaXRlbXMgaW50byBpbmxpbmUtYmxvY2tcbi5saXN0LWlubGluZSB7XG4gIEBpbmNsdWRlIGxpc3QtdW5zdHlsZWQ7XG59XG4ubGlzdC1pbmxpbmUtaXRlbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1yaWdodDogJGxpc3QtaW5saW5lLXBhZGRpbmc7XG4gIH1cbn1cblxuLy8gSG9yaXpvbnRhbCBkZXNjcmlwdGlvbiBsaXN0cyB3LyBncmlkIGNsYXNzZXNcbi5kbC1ob3Jpem9udGFsIHtcbiAgbWFyZ2luLXJpZ2h0OiAtJGdyaWQtZ3V0dGVyLXdpZHRoO1xuICBtYXJnaW4tbGVmdDogLSRncmlkLWd1dHRlci13aWR0aDtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG59XG5cblxuLy9cbi8vIE1pc2Ncbi8vXG5cbi8vIEJ1aWxkcyBvbiBgYWJicmBcbi5pbml0aWFsaXNtIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi8vIEJsb2NrcXVvdGVzXG4uYmxvY2txdW90ZSB7XG4gIHBhZGRpbmc6ICgkc3BhY2VyIC8gMikgJHNwYWNlcjtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlcjtcbiAgZm9udC1zaXplOiAkYmxvY2txdW90ZS1mb250LXNpemU7XG4gIGJvcmRlci1sZWZ0OiAuMjVyZW0gc29saWQgJGJsb2NrcXVvdGUtYm9yZGVyLWNvbG9yO1xufVxuXG4uYmxvY2txdW90ZS1mb290ZXIge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiA4MCU7IC8vIGJhY2sgdG8gZGVmYXVsdCBmb250LXNpemVcbiAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgY29sb3I6ICRibG9ja3F1b3RlLXNtYWxsLWNvbG9yO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDIwMTQgXFwwMEEwXCI7IC8vIGVtIGRhc2gsIG5ic3BcbiAgfVxufVxuXG4vLyBPcHBvc2l0ZSBhbGlnbm1lbnQgb2YgYmxvY2txdW90ZVxuLmJsb2NrcXVvdGUtcmV2ZXJzZSB7XG4gIHBhZGRpbmctcmlnaHQ6ICRzcGFjZXI7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvcmRlci1yaWdodDogLjI1cmVtIHNvbGlkICRibG9ja3F1b3RlLWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLWxlZnQ6IDA7XG59XG5cbi5ibG9ja3F1b3RlLXJldmVyc2UgLmJsb2NrcXVvdGUtZm9vdGVyIHtcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICB9XG4gICY6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlxcMDBBMCBcXDIwMTRcIjsgLy8gbmJzcCwgZW0gZGFzaFxuICB9XG59XG4iLCIvLyBSZXNwb25zaXZlIGltYWdlcyAoZW5zdXJlIGltYWdlcyBkb24ndCBzY2FsZSBiZXlvbmQgdGhlaXIgcGFyZW50cylcbi8vXG4vLyBUaGlzIGlzIHB1cnBvc2VmdWxseSBvcHQtaW4gdmlhIGFuIGV4cGxpY2l0IGNsYXNzIHJhdGhlciB0aGFuIGJlaW5nIHRoZSBkZWZhdWx0IGZvciBhbGwgYDxpbWc+YHMuXG4vLyBXZSBwcmV2aW91c2x5IHRyaWVkIHRoZSBcImltYWdlcyBhcmUgcmVzcG9uc2l2ZSBieSBkZWZhdWx0XCIgYXBwcm9hY2ggaW4gQm9vdHN0cmFwIHYyLFxuLy8gYW5kIGFiYW5kb25lZCBpdCBpbiBCb290c3RyYXAgdjMgYmVjYXVzZSBpdCBicmVha3MgbG90cyBvZiB0aGlyZC1wYXJ0eSB3aWRnZXRzIChpbmNsdWRpbmcgR29vZ2xlIE1hcHMpXG4vLyB3aGljaCB3ZXJlbid0IGV4cGVjdGluZyB0aGUgaW1hZ2VzIHdpdGhpbiB0aGVtc2VsdmVzIHRvIGJlIGludm9sdW50YXJpbHkgcmVzaXplZC5cbi8vIFNlZSBhbHNvIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTgxNzhcbi5pbWctZmx1aWQge1xuICBAaW5jbHVkZSBpbWctZmx1aWQoKTtcbn1cblxuLy8gUm91bmRlZCBjb3JuZXJzXG4uaW1nLXJvdW5kZWQge1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzLWxnKTtcbn1cblxuLy8gSW1hZ2UgdGh1bWJuYWlsc1xuLmltZy10aHVtYm5haWwge1xuICBwYWRkaW5nOiAkdGh1bWJuYWlsLXBhZGRpbmc7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICR0aHVtYm5haWwtYmc7XG4gIGJvcmRlcjogJHRodW1ibmFpbC1ib3JkZXItd2lkdGggc29saWQgJHRodW1ibmFpbC1ib3JkZXItY29sb3I7XG4gIGJvcmRlci1yYWRpdXM6ICR0aHVtYm5haWwtYm9yZGVyLXJhZGl1cztcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlLWluLW91dDtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDFweCAycHggcmdiYSgwLDAsMCwuMDc1KSk7XG5cbiAgLy8gS2VlcCB0aGVtIGF0IG1vc3QgMTAwJSB3aWRlXG4gIEBpbmNsdWRlIGltZy1mbHVpZChpbmxpbmUtYmxvY2spO1xufVxuXG4vLyBQZXJmZWN0IGNpcmNsZVxuLmltZy1jaXJjbGUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi8vXG4vLyBGaWd1cmVzXG4vL1xuXG4uZmlndXJlIHtcbiAgLy8gRW5zdXJlcyB0aGUgY2FwdGlvbidzIHRleHQgYWxpZ25zIHdpdGggdGhlIGltYWdlLlxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5maWd1cmUtaW1nIHtcbiAgbWFyZ2luLWJvdHRvbTogKCRzcGFjZXIteSAvIDIpO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLmZpZ3VyZS1jYXB0aW9uIHtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGNvbG9yOiAkZ3JheS1saWdodDtcbn1cbiIsIi8vIElubGluZSBhbmQgYmxvY2sgY29kZSBzdHlsZXNcbmNvZGUsXG5rYmQsXG5wcmUsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseS1tb25vc3BhY2U7XG59XG5cbi8vIElubGluZSBjb2RlXG5jb2RlIHtcbiAgcGFkZGluZzogLjJyZW0gLjRyZW07XG4gIGZvbnQtc2l6ZTogOTAlO1xuICBjb2xvcjogJGNvZGUtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjb2RlLWJnO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbn1cblxuLy8gVXNlciBpbnB1dCB0eXBpY2FsbHkgZW50ZXJlZCB2aWEga2V5Ym9hcmRcbmtiZCB7XG4gIHBhZGRpbmc6IC4ycmVtIC40cmVtO1xuICBmb250LXNpemU6IDkwJTtcbiAgY29sb3I6ICRrYmQtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRrYmQtYmc7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMtc20pO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgLS4xcmVtIDAgcmdiYSgwLDAsMCwuMjUpKTtcblxuICBrYmQge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQtd2VpZ2h0OiAkbmVzdGVkLWtiZC1mb250LXdlaWdodDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICB9XG59XG5cbi8vIEJsb2NrcyBvZiBjb2RlXG5wcmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMDtcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgZm9udC1zaXplOiA5MCU7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkcHJlLWNvbG9yO1xuXG4gIC8vIEFjY291bnQgZm9yIHNvbWUgY29kZSBvdXRwdXRzIHRoYXQgcGxhY2UgY29kZSB0YWdzIGluIHByZSB0YWdzXG4gIGNvZGUge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cbn1cblxuLy8gRW5hYmxlIHNjcm9sbGFibGUgYmxvY2tzIG9mIGNvZGVcbi5wcmUtc2Nyb2xsYWJsZSB7XG4gIG1heC1oZWlnaHQ6ICRwcmUtc2Nyb2xsYWJsZS1tYXgtaGVpZ2h0O1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iLCIvLyBDb250YWluZXIgd2lkdGhzXG4vL1xuLy8gU2V0IHRoZSBjb250YWluZXIgd2lkdGgsIGFuZCBvdmVycmlkZSBpdCBmb3IgZml4ZWQgbmF2YmFycyBpbiBtZWRpYSBxdWVyaWVzLlxuXG4uY29udGFpbmVyIHtcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXIoKTtcbiAgQGluY2x1ZGUgbWFrZS1jb250YWluZXItbWF4LXdpZHRocygpO1xuXG59XG5cblxuLy8gRmx1aWQgY29udGFpbmVyXG4vL1xuLy8gVXRpbGl6ZXMgdGhlIG1peGluIG1lYW50IGZvciBmaXhlZCB3aWR0aCBjb250YWluZXJzLCBidXQgd2l0aG91dCBhbnkgZGVmaW5lZFxuLy8gd2lkdGggZm9yIGZsdWlkLCBmdWxsIHdpZHRoIGxheW91dHMuXG5cbi5jb250YWluZXItZmx1aWQge1xuICBAaW5jbHVkZSBtYWtlLWNvbnRhaW5lcigpO1xufVxuXG5cbi8vIFJvd1xuLy9cbi8vIFJvd3MgY29udGFpbiBhbmQgY2xlYXIgdGhlIGZsb2F0cyBvZiB5b3VyIGNvbHVtbnMuXG5cbkBpZiAkZW5hYmxlLWdyaWQtY2xhc3NlcyB7XG4gIC5yb3cge1xuICAgIEBpbmNsdWRlIG1ha2Utcm93KCk7XG4gIH1cbn1cblxuXG4vLyBDb2x1bW5zXG4vL1xuLy8gQ29tbW9uIHN0eWxlcyBmb3Igc21hbGwgYW5kIGxhcmdlIGdyaWQgY29sdW1uc1xuXG5AaWYgJGVuYWJsZS1ncmlkLWNsYXNzZXMge1xuICBAaW5jbHVkZSBtYWtlLWdyaWQtY29sdW1ucygpO1xufVxuXG5cbi8vIEZsZXggdmFyaWF0aW9uXG4vL1xuLy8gQ3VzdG9tIHN0eWxlcyBmb3IgYWRkaXRpb25hbCBmbGV4IGFsaWdubWVudCBvcHRpb25zLlxuXG5AaWYgJGVuYWJsZS1mbGV4IGFuZCAkZW5hYmxlLWdyaWQtY2xhc3NlcyB7XG5cbiAgLy8gRmxleCBjb2x1bW4gcmVvcmRlcmluZ1xuXG4gIEBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnJlYWtwb2ludCkge1xuICAgICAgLmNvbC0jeyRicmVha3BvaW50fS1maXJzdCB7IG9yZGVyOiAtMTsgfVxuICAgICAgLmNvbC0jeyRicmVha3BvaW50fS1sYXN0ICB7IG9yZGVyOiAxOyB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWxpZ25tZW50IGZvciBldmVyeSBjb2x1bW4gaW4gcm93XG5cbiAgQGVhY2ggJGJyZWFrcG9pbnQgaW4gbWFwLWtleXMoJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgICAucm93LSN7JGJyZWFrcG9pbnR9LXRvcCAgICB7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG4gICAgICAucm93LSN7JGJyZWFrcG9pbnR9LWNlbnRlciB7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAgIC5yb3ctI3skYnJlYWtwb2ludH0tYm90dG9tIHsgYWxpZ24taXRlbXM6IGZsZXgtZW5kOyB9XG4gICAgfVxuICB9XG5cbiAgLy8gQWxpZ25tZW50IHBlciBjb2x1bW5cblxuICBAZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAgIC5jb2wtI3skYnJlYWtwb2ludH0tdG9wICAgIHsgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgfVxuICAgICAgLmNvbC0jeyRicmVha3BvaW50fS1jZW50ZXIgeyBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cbiAgICAgIC5jb2wtI3skYnJlYWtwb2ludH0tYm90dG9tIHsgYWxpZ24tc2VsZjogZmxleC1lbmQ7IH1cbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBCYXNpYyBCb290c3RyYXAgdGFibGVcbi8vXG5cbi50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206ICRzcGFjZXI7XG5cbiAgdGgsXG4gIHRkIHtcbiAgICBwYWRkaW5nOiAkdGFibGUtY2VsbC1wYWRkaW5nO1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAkdGFibGUtYm9yZGVyLXdpZHRoIHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gIH1cblxuICB0aGVhZCB0aCB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICBib3JkZXItYm90dG9tOiAoMiAqICR0YWJsZS1ib3JkZXItd2lkdGgpIHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gIH1cblxuICB0Ym9keSArIHRib2R5IHtcbiAgICBib3JkZXItdG9wOiAoMiAqICR0YWJsZS1ib3JkZXItd2lkdGgpIHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gIH1cblxuICAudGFibGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xuICB9XG59XG5cblxuLy9cbi8vIENvbmRlbnNlZCB0YWJsZSB3LyBoYWxmIHBhZGRpbmdcbi8vXG5cbi50YWJsZS1zbSB7XG4gIHRoLFxuICB0ZCB7XG4gICAgcGFkZGluZzogJHRhYmxlLXNtLWNlbGwtcGFkZGluZztcbiAgfVxufVxuXG5cbi8vIEJvcmRlcmVkIHZlcnNpb25cbi8vXG4vLyBBZGQgYm9yZGVycyBhbGwgYXJvdW5kIHRoZSB0YWJsZSBhbmQgYmV0d2VlbiBhbGwgdGhlIGNvbHVtbnMuXG5cbi50YWJsZS1ib3JkZXJlZCB7XG4gIGJvcmRlcjogJHRhYmxlLWJvcmRlci13aWR0aCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuXG4gIHRoLFxuICB0ZCB7XG4gICAgYm9yZGVyOiAkdGFibGUtYm9yZGVyLXdpZHRoIHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gIH1cblxuICB0aGVhZCB7XG4gICAgdGgsXG4gICAgdGQge1xuICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogKDIgKiAkdGFibGUtYm9yZGVyLXdpZHRoKTtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBaZWJyYS1zdHJpcGluZ1xuLy9cbi8vIERlZmF1bHQgemVicmEtc3RyaXBlIHN0eWxlcyAoYWx0ZXJuYXRpbmcgZ3JheSBhbmQgdHJhbnNwYXJlbnQgYmFja2dyb3VuZHMpXG5cbi50YWJsZS1zdHJpcGVkIHtcbiAgdGJvZHkgdHI6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHRhYmxlLWJnLWFjY2VudDtcbiAgfVxufVxuXG5cbi8vIEhvdmVyIGVmZmVjdFxuLy9cbi8vIFBsYWNlZCBoZXJlIHNpbmNlIGl0IGhhcyB0byBjb21lIGFmdGVyIHRoZSBwb3RlbnRpYWwgemVicmEgc3RyaXBpbmdcblxuLnRhYmxlLWhvdmVyIHtcbiAgdGJvZHkgdHIge1xuICAgIEBpbmNsdWRlIGhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0YWJsZS1iZy1ob3ZlcjtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBUYWJsZSBiYWNrZ3JvdW5kc1xuLy9cbi8vIEV4YWN0IHNlbGVjdG9ycyBiZWxvdyByZXF1aXJlZCB0byBvdmVycmlkZSBgLnRhYmxlLXN0cmlwZWRgIGFuZCBwcmV2ZW50XG4vLyBpbmhlcml0YW5jZSB0byBuZXN0ZWQgdGFibGVzLlxuXG4vLyBHZW5lcmF0ZSB0aGUgY29udGV4dHVhbCB2YXJpYW50c1xuQGluY2x1ZGUgdGFibGUtcm93LXZhcmlhbnQoYWN0aXZlLCAkdGFibGUtYmctYWN0aXZlKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KHN1Y2Nlc3MsICRzdGF0ZS1zdWNjZXNzLWJnKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KGluZm8sICRzdGF0ZS1pbmZvLWJnKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KHdhcm5pbmcsICRzdGF0ZS13YXJuaW5nLWJnKTtcbkBpbmNsdWRlIHRhYmxlLXJvdy12YXJpYW50KGRhbmdlciwgJHN0YXRlLWRhbmdlci1iZyk7XG5cblxuLy8gUmVzcG9uc2l2ZSB0YWJsZXNcbi8vXG4vLyBXcmFwIHlvdXIgdGFibGVzIGluIGAudGFibGUtcmVzcG9uc2l2ZWAgYW5kIHdlJ2xsIG1ha2UgdGhlbSBtb2JpbGUgZnJpZW5kbHlcbi8vIGJ5IGVuYWJsaW5nIGhvcml6b250YWwgc2Nyb2xsaW5nLiBPbmx5IGFwcGxpZXMgPDc2OHB4LiBFdmVyeXRoaW5nIGFib3ZlIHRoYXRcbi8vIHdpbGwgZGlzcGxheSBub3JtYWxseS5cblxuLnRhYmxlLXJlc3BvbnNpdmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDAuMDElOyAvLyBXb3JrYXJvdW5kIGZvciBJRTkgYnVnIChzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xNDgzNylcbiAgb3ZlcmZsb3cteDogYXV0bztcblxuICAvLyBUT0RPOiBmaW5kIG91dCBpZiB3ZSBuZWVkIHRoaXMgc3RpbGwuXG4gIC8vXG4gIC8vIGJvcmRlcjogJHRhYmxlLWJvcmRlci13aWR0aCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAvLyAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjsgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzEwMDU3XG59XG5cblxuLnRoZWFkLWludmVyc2Uge1xuICB0aCB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktZGFyaztcbiAgfVxufVxuLnRoZWFkLWRlZmF1bHQge1xuICB0aCB7XG4gICAgY29sb3I6ICRncmF5O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmF5LWxpZ2h0ZXI7XG4gIH1cbn1cblxuLnRhYmxlLWludmVyc2Uge1xuICBjb2xvcjogJGdyYXktbGlnaHRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktZGFyaztcblxuICAmLnRhYmxlLWJvcmRlcmVkIHtcbiAgICBib3JkZXI6IDA7XG4gIH1cblxuICB0aCxcbiAgdGQsXG4gIHRoZWFkIHRoIHtcbiAgICBib3JkZXItY29sb3I6ICRncmF5O1xuICB9XG59XG5cblxuLnRhYmxlLXJlZmxvdyB7XG4gIHRoZWFkIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIHRib2R5IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB9XG5cbiAgdGgsXG4gIHRkIHtcbiAgICBib3JkZXItdG9wOiAkdGFibGUtYm9yZGVyLXdpZHRoIHNvbGlkICR0YWJsZS1ib3JkZXItY29sb3I7XG4gICAgYm9yZGVyLWxlZnQ6ICR0YWJsZS1ib3JkZXItd2lkdGggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBib3JkZXItcmlnaHQ6ICR0YWJsZS1ib3JkZXItd2lkdGggc29saWQgJHRhYmxlLWJvcmRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICB0aGVhZCxcbiAgdGJvZHksXG4gIHRmb290IHtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgdHI6bGFzdC1jaGlsZCB7XG4gICAgICAgIHRoLFxuICAgICAgICB0ZCB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogJHRhYmxlLWJvcmRlci13aWR0aCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHIge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgdGgsXG4gICAgdGQge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogJHRhYmxlLWJvcmRlci13aWR0aCBzb2xpZCAkdGFibGUtYm9yZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIFRleHR1YWwgZm9ybSBjb250cm9sc1xuLy9cblxuLmZvcm0tY29udHJvbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gLy8gTWFrZSBpbnB1dHMgYXQgbGVhc3QgdGhlIGhlaWdodCBvZiB0aGVpciBidXR0b24gY291bnRlcnBhcnQgKGJhc2UgbGluZS1oZWlnaHQgKyBwYWRkaW5nICsgYm9yZGVyKVxuICAvLyBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXkgJGlucHV0LXBhZGRpbmcteDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkaW5wdXQtY29sb3I7XG4gIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZztcbiAgLy8gUmVzZXQgdW51c3VhbCBGaXJlZm94LW9uLUFuZHJvaWQgZGVmYXVsdCBzdHlsZTsgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MvaXNzdWVzLzIxNC5cbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgYm9yZGVyOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCBzb2xpZCAkaW5wdXQtYm9yZGVyLWNvbG9yO1xuICAvLyBOb3RlOiBUaGlzIGhhcyBubyBlZmZlY3Qgb24gPHNlbGVjdD5zIGluIHNvbWUgYnJvd3NlcnMsIGR1ZSB0byB0aGUgbGltaXRlZCBzdHlsYWJpbGl0eSBvZiBgPHNlbGVjdD5gcyBpbiBDU1MuXG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGlucHV0LWJvcmRlci1yYWRpdXMpO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KCRpbnB1dC1ib3gtc2hhZG93KTtcbiAgQGluY2x1ZGUgdHJhbnNpdGlvbihib3JkZXItY29sb3IgZWFzZS1pbi1vdXQgLjE1cywgYm94LXNoYWRvdyBlYXNlLWluLW91dCAuMTVzKTtcblxuICAvLyBNYWtlIGlucHV0cyBhdCBsZWFzdCB0aGUgaGVpZ2h0IG9mIHRoZWlyIGJ1dHRvbiBjb3VudGVycGFydCAoYmFzZSBsaW5lLWhlaWdodCArIHBhZGRpbmcgKyBib3JkZXIpLlxuICAvLyBPbmx5IGFwcGx5IHRoZSBoZWlnaHQgdG8gdGV4dHVhbCBpbnB1dHMgYW5kIHNvbWUgc2VsZWN0cy5cbiAgLy8gJjpub3QodGV4dGFyZWEpLFxuICAvLyAmOm5vdChzZWxlY3Rbc2l6ZV0pLFxuICAvLyAmOm5vdChzZWxlY3RbbXVsdGlwbGVdKSB7XG4gIC8vICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAvLyB9XG5cbiAgLy8gVW5zdHlsZSB0aGUgY2FyZXQgb24gYDxzZWxlY3Q+YHMgaW4gSUUxMCsuXG4gICY6Oi1tcy1leHBhbmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMDtcbiAgfVxuXG4gIC8vIEN1c3RvbWl6ZSB0aGUgYDpmb2N1c2Agc3RhdGUgdG8gaW1pdGF0ZSBuYXRpdmUgV2ViS2l0IHN0eWxlcy5cbiAgQGluY2x1ZGUgZm9ybS1jb250cm9sLWZvY3VzKCk7XG5cbiAgLy8gUGxhY2Vob2xkZXJcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAkaW5wdXQtY29sb3ItcGxhY2Vob2xkZXI7XG4gICAgLy8gT3ZlcnJpZGUgRmlyZWZveCdzIHVudXN1YWwgZGVmYXVsdCBvcGFjaXR5OyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL3B1bGwvMTE1MjYuXG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIC8vIERpc2FibGVkIGFuZCByZWFkLW9ubHkgaW5wdXRzXG4gIC8vXG4gIC8vIEhUTUw1IHNheXMgdGhhdCBjb250cm9scyB1bmRlciBhIGZpZWxkc2V0ID4gbGVnZW5kOmZpcnN0LWNoaWxkIHdvbid0IGJlXG4gIC8vIGRpc2FibGVkIGlmIHRoZSBmaWVsZHNldCBpcyBkaXNhYmxlZC4gRHVlIHRvIGltcGxlbWVudGF0aW9uIGRpZmZpY3VsdHksIHdlXG4gIC8vIGRvbid0IGhvbm9yIHRoYXQgZWRnZSBjYXNlOyB3ZSBzdHlsZSB0aGVtIGFzIGRpc2FibGVkIGFueXdheS5cbiAgJjpkaXNhYmxlZCxcbiAgJltyZWFkb25seV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1iZy1kaXNhYmxlZDtcbiAgICAvLyBpT1MgZml4IGZvciB1bnJlYWRhYmxlIGRpc2FibGVkIGNvbnRlbnQ7IHNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvaXNzdWVzLzExNjU1LlxuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cblxuXG4vLyBNYWtlIGZpbGUgaW5wdXRzIGJldHRlciBtYXRjaCB0ZXh0IGlucHV0cyBieSBmb3JjaW5nIHRoZW0gdG8gbmV3IGxpbmVzLlxuLmZvcm0tY29udHJvbC1maWxlLFxuLmZvcm0tY29udHJvbC1yYW5nZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8vXG4vLyBMYWJlbHNcbi8vXG5cbi8vIEZvciB1c2Ugd2l0aCBob3Jpem9udGFsIGFuZCBpbmxpbmUgZm9ybXMsIHdoZW4geW91IG5lZWQgdGhlIGxhYmVsIHRleHQgdG9cbi8vIGFsaWduIHdpdGggdGhlIGZvcm0gY29udHJvbHMuXG4uZm9ybS1jb250cm9sLWxhYmVsIHtcbiAgcGFkZGluZzogJGlucHV0LXBhZGRpbmcteSAkaW5wdXQtcGFkZGluZy14O1xuICBtYXJnaW4tYm90dG9tOiAwOyAvLyBPdmVycmlkZSB0aGUgYDxsYWJlbD5gIGRlZmF1bHRcbn1cblxuXG4vLyBUb2RvOiBjbGVhciB0aGlzIHVwXG5cbi8vIFNwZWNpYWwgc3R5bGVzIGZvciBpT1MgdGVtcG9yYWwgaW5wdXRzXG4vL1xuLy8gSW4gTW9iaWxlIFNhZmFyaSwgc2V0dGluZyBgZGlzcGxheTogYmxvY2tgIG9uIHRlbXBvcmFsIGlucHV0cyBjYXVzZXMgdGhlXG4vLyB0ZXh0IHdpdGhpbiB0aGUgaW5wdXQgdG8gYmVjb21lIHZlcnRpY2FsbHkgbWlzYWxpZ25lZC4gQXMgYSB3b3JrYXJvdW5kLCB3ZVxuLy8gc2V0IGEgcGl4ZWwgbGluZS1oZWlnaHQgdGhhdCBtYXRjaGVzIHRoZSBnaXZlbiBoZWlnaHQgb2YgdGhlIGlucHV0LCBidXQgb25seVxuLy8gZm9yIFNhZmFyaS4gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzk4NDhcbi8vXG4vLyBOb3RlIHRoYXQgYXMgb2YgOC4zLCBpT1MgZG9lc24ndCBzdXBwb3J0IGBkYXRldGltZWAgb3IgYHdlZWtgLlxuXG5AbWVkaWEgc2NyZWVuIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAwKSB7XG4gIGlucHV0W3R5cGU9XCJkYXRlXCJdLFxuICBpbnB1dFt0eXBlPVwidGltZVwiXSxcbiAgaW5wdXRbdHlwZT1cImRhdGV0aW1lLWxvY2FsXCJdLFxuICBpbnB1dFt0eXBlPVwibW9udGhcIl0ge1xuICAgICYuZm9ybS1jb250cm9sIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAgIH1cblxuICAgICYuaW5wdXQtc20sXG4gICAgLmlucHV0LWdyb3VwLXNtICYuZm9ybS1jb250cm9sIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtO1xuICAgIH1cblxuICAgICYuaW5wdXQtbGcsXG4gICAgLmlucHV0LWdyb3VwLWxnICYuZm9ybS1jb250cm9sIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxnO1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFN0YXRpYyBmb3JtIGNvbnRyb2wgdGV4dFxuLy9cbi8vIEFwcGx5IGNsYXNzIHRvIGFuIGVsZW1lbnQgdG8gbWFrZSBhbnkgc3RyaW5nIG9mIHRleHQgYWxpZ24gd2l0aCBsYWJlbHMgaW4gYVxuLy8gaG9yaXpvbnRhbCBmb3JtIGxheW91dC5cblxuLmZvcm0tY29udHJvbC1zdGF0aWMge1xuICBtaW4taGVpZ2h0OiAkaW5wdXQtaGVpZ2h0O1xuICAvLyBTaXplIGl0IGFwcHJvcHJpYXRlbHkgbmV4dCB0byByZWFsIGZvcm0gY29udHJvbHNcbiAgcGFkZGluZy10b3A6ICRpbnB1dC1wYWRkaW5nLXk7XG4gIHBhZGRpbmctYm90dG9tOiAkaW5wdXQtcGFkZGluZy15O1xuICAvLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gZnJvbSBgcGBcbiAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAmLmZvcm0tY29udHJvbC1zbSxcbiAgJi5mb3JtLWNvbnRyb2wtbGcge1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG59XG5cblxuLy8gRm9ybSBjb250cm9sIHNpemluZ1xuLy9cbi8vIEJ1aWxkIG9uIGAuZm9ybS1jb250cm9sYCB3aXRoIG1vZGlmaWVyIGNsYXNzZXMgdG8gZGVjcmVhc2Ugb3IgaW5jcmVhc2UgdGhlXG4vLyBoZWlnaHQgYW5kIGZvbnQtc2l6ZSBvZiBmb3JtIGNvbnRyb2xzLlxuLy9cbi8vIFRoZSBgLmZvcm0tZ3JvdXAtKiBmb3JtLWNvbnRyb2xgIHZhcmlhdGlvbnMgYXJlIHNhZGx5IGR1cGxpY2F0ZWQgdG8gYXZvaWQgdGhlXG4vLyBpc3N1ZSBkb2N1bWVudGVkIGluIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9pc3N1ZXMvMTUwNzQuXG5cbi5mb3JtLWNvbnRyb2wtc20ge1xuICAvLyBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtc207XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktc20gJGlucHV0LXBhZGRpbmcteC1zbTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0LXNtO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRpbnB1dC1ib3JkZXItcmFkaXVzLXNtKTtcbn1cblxuLmZvcm0tY29udHJvbC1sZyB7XG4gIC8vIGhlaWdodDogJGlucHV0LWhlaWdodC1sZztcbiAgcGFkZGluZzogJGlucHV0LXBhZGRpbmcteS1sZyAkaW5wdXQtcGFkZGluZy14LWxnO1xuICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQtbGc7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGlucHV0LWJvcmRlci1yYWRpdXMtbGcpO1xufVxuXG5cbi8vIEZvcm0gZ3JvdXBzXG4vL1xuLy8gRGVzaWduZWQgdG8gaGVscCB3aXRoIHRoZSBvcmdhbml6YXRpb24gYW5kIHNwYWNpbmcgb2YgdmVydGljYWwgZm9ybXMuIEZvclxuLy8gaG9yaXpvbnRhbCBmb3JtcywgdXNlIHRoZSBwcmVkZWZpbmVkIGdyaWQgY2xhc3Nlcy5cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAkZm9ybS1ncm91cC1tYXJnaW4tYm90dG9tO1xufVxuXG5cbi8vIENoZWNrYm94ZXMgYW5kIHJhZGlvc1xuLy9cbi8vIEluZGVudCB0aGUgbGFiZWxzIHRvIHBvc2l0aW9uIHJhZGlvcy9jaGVja2JveGVzIGFzIGhhbmdpbmcgY29udHJvbHMuXG5cbi5yYWRpbyxcbi5jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIC8vIG1hcmdpbi10b3A6ICAgICgkc3BhY2VyICogLjc1KTtcbiAgbWFyZ2luLWJvdHRvbTogKCRzcGFjZXIgKiAuNzUpO1xuXG4gIGxhYmVsIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC8vIFdoZW4gdGhlcmUncyBubyBsYWJlbHMsIGRvbid0IHBvc2l0aW9uIHRoZSBpbnB1dC5cbiAgICBpbnB1dDpvbmx5LWNoaWxkIHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgfVxuICB9XG59XG4ucmFkaW8gaW5wdXRbdHlwZT1cInJhZGlvXCJdLFxuLnJhZGlvLWlubGluZSBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4uY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdLFxuLmNoZWNrYm94LWlubGluZSBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IC4yNXJlbTtcbiAgLy8gbWFyZ2luLXRvcDogNHB4IFxcOTtcbiAgbWFyZ2luLWxlZnQ6IC0xLjI1cmVtO1xufVxuXG4ucmFkaW8gKyAucmFkaW8sXG4uY2hlY2tib3ggKyAuY2hlY2tib3gge1xuICAvLyBNb3ZlIHVwIHNpYmxpbmcgcmFkaW9zIG9yIGNoZWNrYm94ZXMgZm9yIHRpZ2h0ZXIgc3BhY2luZ1xuICBtYXJnaW4tdG9wOiAtLjI1cmVtO1xufVxuXG4vLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgb24gc2FtZSBsaW5lXG4ucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yYWRpby1pbmxpbmUgKyAucmFkaW8taW5saW5lLFxuLmNoZWNrYm94LWlubGluZSArIC5jaGVja2JveC1pbmxpbmUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tbGVmdDogLjc1cmVtO1xufVxuXG4vLyBBcHBseSBzYW1lIGRpc2FibGVkIGN1cnNvciB0d2VhayBhcyBmb3IgaW5wdXRzXG4vLyBTb21lIHNwZWNpYWwgY2FyZSBpcyBuZWVkZWQgYmVjYXVzZSA8bGFiZWw+cyBkb24ndCBpbmhlcml0IHRoZWlyIHBhcmVudCdzIGBjdXJzb3JgLlxuLy9cbi8vIE5vdGU6IE5laXRoZXIgcmFkaW9zIG5vciBjaGVja2JveGVzIGNhbiBiZSByZWFkb25seS5cbmlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbmlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICY6ZGlzYWJsZWQsXG4gICYuZGlzYWJsZWQge1xuICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgfVxufVxuLy8gVGhlc2UgY2xhc3NlcyBhcmUgdXNlZCBkaXJlY3RseSBvbiA8bGFiZWw+c1xuLnJhZGlvLWlubGluZSxcbi5jaGVja2JveC1pbmxpbmUge1xuICAmLmRpc2FibGVkIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gIH1cbn1cbi8vIFRoZXNlIGNsYXNzZXMgYXJlIHVzZWQgb24gZWxlbWVudHMgd2l0aCA8bGFiZWw+IGRlc2NlbmRhbnRzXG4ucmFkaW8sXG4uY2hlY2tib3gge1xuICAmLmRpc2FibGVkIHtcbiAgICBsYWJlbCB7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgfVxuICB9XG59XG5cblxuLy8gRm9ybSBjb250cm9sIGZlZWRiYWNrIHN0YXRlc1xuLy9cbi8vIEFwcGx5IGNvbnRleHR1YWwgYW5kIHNlbWFudGljIHN0YXRlcyB0byBpbmRpdmlkdWFsIGZvcm0gY29udHJvbHMuXG5cbi5mb3JtLWNvbnRyb2wtc3VjY2Vzcyxcbi5mb3JtLWNvbnRyb2wtd2FybmluZyxcbi5mb3JtLWNvbnRyb2wtZGFuZ2VyIHtcbiAgcGFkZGluZy1yaWdodDogKCRpbnB1dC1wYWRkaW5nLXggKiAzKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIHJpZ2h0ICgkaW5wdXQtaGVpZ2h0ICogLjI1KTtcbiAgYmFja2dyb3VuZC1zaXplOiAoJGlucHV0LWhlaWdodCAqIC42NSkgKCRpbnB1dC1oZWlnaHQgKiAuNjUpO1xufVxuXG4vLyBGb3JtIHZhbGlkYXRpb24gc3RhdGVzXG4uaGFzLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkYnJhbmQtc3VjY2Vzcyk7XG5cbiAgLmZvcm0tY29udHJvbC1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZvcm0taWNvbi1zdWNjZXNzKTtcbiAgfVxufVxuXG4uaGFzLXdhcm5pbmcge1xuICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkYnJhbmQtd2FybmluZyk7XG5cbiAgLmZvcm0tY29udHJvbC13YXJuaW5nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZvcm0taWNvbi13YXJuaW5nKTtcbiAgfVxufVxuXG4uaGFzLWRhbmdlciB7XG4gIEBpbmNsdWRlIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCRicmFuZC1kYW5nZXIpO1xuXG4gIC5mb3JtLWNvbnRyb2wtZGFuZ2VyIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJGZvcm0taWNvbi1kYW5nZXIpO1xuICB9XG59XG5cblxuXG5cbi8vIC5mb3JtLWNvbnRyb2wtc3VjY2VzcyB7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiN7JGZvcm0taWNvbi1zdWNjZXNzfVwiKTtcbi8vICAgYm9yZGVyLWNvbG9yOiAkYnJhbmQtc3VjY2Vzcztcbi8vIH1cbi8vXG4vLyAuZm9ybS1jb250cm9sLXdhcm5pbmcge1xuLy8gICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIjeyRmb3JtLWljb24td2FybmluZ31cIik7XG4vLyAgIGJvcmRlci1jb2xvcjogJGJyYW5kLXdhcm5pbmc7XG4vLyB9XG4vL1xuLy8gLmZvcm0tY29udHJvbC1lcnJvciB7XG4vLyAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiN7JGZvcm0taWNvbi1kYW5nZXJ9XCIpO1xuLy8gICBib3JkZXItY29sb3I6ICRicmFuZC1kYW5nZXI7XG4vLyB9XG5cblxuLy8gLmhhcy1mZWVkYmFjayB7XG4vLyAgIC8vIEVuYWJsZSBhYnNvbHV0ZSBwb3NpdGlvbmluZ1xuLy8gICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vL1xuLy8gICAvLyBFbnN1cmUgaWNvbnMgZG9uJ3Qgb3ZlcmxhcCB0ZXh0XG4vLyAgIC5mb3JtLWNvbnRyb2wge1xuLy8gICAgIHBhZGRpbmctcmlnaHQ6ICgkaW5wdXQtaGVpZ2h0ICogMS4yNSk7XG4vLyAgIH1cbi8vIH1cbi8vIC8vIEZlZWRiYWNrIGljb25cbi8vIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgIHRvcDogMDtcbi8vICAgcmlnaHQ6IDA7XG4vLyAgIHotaW5kZXg6IDI7IC8vIEVuc3VyZSBpY29uIGlzIGFib3ZlIGlucHV0IGdyb3Vwc1xuLy8gICBkaXNwbGF5OiBibG9jaztcbi8vICAgd2lkdGg6ICRpbnB1dC1oZWlnaHQ7XG4vLyAgIGhlaWdodDogJGlucHV0LWhlaWdodDtcbi8vICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1oZWlnaHQ7XG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4vLyB9XG4vLyAuaW5wdXQtbGcgKyAuZm9ybS1jb250cm9sLWZlZWRiYWNrLFxuLy8gLmlucHV0LWdyb3VwLWxnICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4vLyAgIHdpZHRoOiAkaW5wdXQtaGVpZ2h0LWxnO1xuLy8gICBoZWlnaHQ6ICRpbnB1dC1oZWlnaHQtbGc7XG4vLyAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LWxnO1xuLy8gfVxuLy8gLmlucHV0LXNtICsgLmZvcm0tY29udHJvbC1mZWVkYmFjayxcbi8vIC5pbnB1dC1ncm91cC1zbSArIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuLy8gICB3aWR0aDogJGlucHV0LWhlaWdodC1zbTtcbi8vICAgaGVpZ2h0OiAkaW5wdXQtaGVpZ2h0LXNtO1xuLy8gICBsaW5lLWhlaWdodDogJGlucHV0LWhlaWdodC1zbTtcbi8vIH1cbi8vXG4vLyAvLyBGb3JtIHZhbGlkYXRpb24gc3RhdGVzXG4vLyAuaGFzLXN1Y2Nlc3Mge1xuLy8gICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy10ZXh0LCAkc3RhdGUtc3VjY2Vzcy1iZyk7XG4vLyB9XG4vLyAuaGFzLXdhcm5pbmcge1xuLy8gICBAaW5jbHVkZSBmb3JtLWNvbnRyb2wtdmFsaWRhdGlvbigkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy10ZXh0LCAkc3RhdGUtd2FybmluZy1iZyk7XG4vLyB9XG4vLyAuaGFzLWRhbmdlciB7XG4vLyAgIEBpbmNsdWRlIGZvcm0tY29udHJvbC12YWxpZGF0aW9uKCRzdGF0ZS1kYW5nZXItdGV4dCwgJHN0YXRlLWRhbmdlci10ZXh0LCAkc3RhdGUtZGFuZ2VyLWJnKTtcbi8vIH1cbi8vXG4vLyAvLyBSZXBvc2l0aW9uIGZlZWRiYWNrIGljb24gaWYgaW5wdXQgaGFzIHZpc2libGUgbGFiZWwgYWJvdmVcbi8vIC5oYXMtZmVlZGJhY2sgbGFiZWwge1xuLy9cbi8vICAgfiAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbi8vICAgICAvLyBUT0RPOiByZWRvIHRoaXMgc2luY2Ugd2UgbnVrZWQgdGhlIGAkbGluZS1oZWlnaHQtY29tcHV0ZWRgXG4vLyAgICAgdG9wOiAwOyAvLyBIZWlnaHQgb2YgdGhlIGBsYWJlbGAgYW5kIGl0cyBtYXJnaW5cbi8vICAgfVxuLy9cbi8vICAgJi5zci1vbmx5IH4gLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XG4vLyAgICAgdG9wOiAwO1xuLy8gICB9XG4vLyB9XG5cblxuLy8gSW5saW5lIGZvcm1zXG4vL1xuLy8gTWFrZSBmb3JtcyBhcHBlYXIgaW5saW5lKC1ibG9jaykgYnkgYWRkaW5nIHRoZSBgLmZvcm0taW5saW5lYCBjbGFzcy4gSW5saW5lXG4vLyBmb3JtcyBiZWdpbiBzdGFja2VkIG9uIGV4dHJhIHNtYWxsIChtb2JpbGUpIGRldmljZXMgYW5kIHRoZW4gZ28gaW5saW5lIHdoZW5cbi8vIHZpZXdwb3J0cyByZWFjaCA8NzY4cHguXG4vL1xuLy8gUmVxdWlyZXMgd3JhcHBpbmcgaW5wdXRzIGFuZCBsYWJlbHMgd2l0aCBgLmZvcm0tZ3JvdXBgIGZvciBwcm9wZXIgZGlzcGxheSBvZlxuLy8gZGVmYXVsdCBIVE1MIGZvcm0gY29udHJvbHMgYW5kIG91ciBjdXN0b20gZm9ybSBjb250cm9scyAoZS5nLiwgaW5wdXQgZ3JvdXBzKS5cblxuLmZvcm0taW5saW5lIHtcblxuICAvLyBLaWNrIGluIHRoZSBpbmxpbmVcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIC8vIElubGluZS1ibG9jayBhbGwgdGhlIHRoaW5ncyBmb3IgXCJpbmxpbmVcIlxuICAgIC5mb3JtLWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIH1cblxuICAgIC8vIEFsbG93IGZvbGtzIHRvICpub3QqIHVzZSBgLmZvcm0tZ3JvdXBgXG4gICAgLmZvcm0tY29udHJvbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB3aWR0aDogYXV0bzsgLy8gUHJldmVudCBsYWJlbHMgZnJvbSBzdGFja2luZyBhYm92ZSBpbnB1dHMgaW4gYC5mb3JtLWdyb3VwYFxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBNYWtlIHN0YXRpYyBjb250cm9scyBiZWhhdmUgbGlrZSByZWd1bGFyIG9uZXNcbiAgICAuZm9ybS1jb250cm9sLXN0YXRpYyB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxuXG4gICAgLmlucHV0LWdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgIC5pbnB1dC1ncm91cC1hZGRvbixcbiAgICAgIC5pbnB1dC1ncm91cC1idG4sXG4gICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5wdXQgZ3JvdXBzIG5lZWQgdGhhdCAxMDAlIHdpZHRoIHRob3VnaFxuICAgIC5pbnB1dC1ncm91cCA+IC5mb3JtLWNvbnRyb2wge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgLmZvcm0tY29udHJvbC1sYWJlbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgZGVmYXVsdCBtYXJnaW4gb24gcmFkaW9zL2NoZWNrYm94ZXMgdGhhdCB3ZXJlIHVzZWQgZm9yIHN0YWNraW5nLCBhbmRcbiAgICAvLyB0aGVuIHVuZG8gdGhlIGZsb2F0aW5nIG9mIHJhZGlvcyBhbmQgY2hlY2tib3hlcyB0byBtYXRjaC5cbiAgICAucmFkaW8sXG4gICAgLmNoZWNrYm94IHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgbGFiZWwge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICB9XG4gICAgfVxuICAgIC5yYWRpbyBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gICAgLmNoZWNrYm94IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAvLyBSZS1vdmVycmlkZSB0aGUgZmVlZGJhY2sgaWNvbi5cbiAgICAuaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xuICAgICAgdG9wOiAwO1xuICAgIH1cbiAgfVxufVxuIiwiLy9cbi8vIEJhc2Ugc3R5bGVzXG4vL1xuXG4uYnRuIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXdlaWdodDogJGJ0bi1mb250LXdlaWdodDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBib3JkZXI6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkYnRuLXBhZGRpbmcteSwgJGJ0bi1wYWRkaW5nLXgsICRmb250LXNpemUtYmFzZSwgJGxpbmUtaGVpZ2h0LCAkYnRuLWJvcmRlci1yYWRpdXMpO1xuICBAaW5jbHVkZSB0cmFuc2l0aW9uKGFsbCAuMnMgZWFzZS1pbi1vdXQpO1xuXG4gICYsXG4gICY6YWN0aXZlLFxuICAmLmFjdGl2ZSB7XG4gICAgJjpmb2N1cyxcbiAgICAmLmZvY3VzIHtcbiAgICAgIEBpbmNsdWRlIHRhYi1mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgJi5mb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgJjphY3RpdmUsXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuICAgIG91dGxpbmU6IDA7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIDNweCA1cHggcmdiYSgwLDAsMCwuMTI1KSk7XG4gIH1cblxuICAmLmRpc2FibGVkLFxuICAmOmRpc2FibGVkIHtcbiAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgb3BhY2l0eTogLjY1O1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cbn1cblxuLy8gRnV0dXJlLXByb29mIGRpc2FibGluZyBvZiBjbGlja3Mgb24gYDxhPmAgZWxlbWVudHNcbmEuYnRuLmRpc2FibGVkLFxuZmllbGRzZXRbZGlzYWJsZWRdIGEuYnRuIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblxuLy9cbi8vIEFsdGVybmF0ZSBidXR0b25zXG4vL1xuXG4uYnRuLXByaW1hcnkge1xuICBAaW5jbHVkZSBidXR0b24tdmFyaWFudCgkYnRuLXByaW1hcnktY29sb3IsICRidG4tcHJpbWFyeS1iZywgJGJ0bi1wcmltYXJ5LWJvcmRlcik7XG59XG4uYnRuLXNlY29uZGFyeSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tc2Vjb25kYXJ5LWNvbG9yLCAkYnRuLXNlY29uZGFyeS1iZywgJGJ0bi1zZWNvbmRhcnktYm9yZGVyKTtcbn1cbi5idG4taW5mbyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4taW5mby1jb2xvciwgJGJ0bi1pbmZvLWJnLCAkYnRuLWluZm8tYm9yZGVyKTtcbn1cbi5idG4tc3VjY2VzcyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4tc3VjY2Vzcy1jb2xvciwgJGJ0bi1zdWNjZXNzLWJnLCAkYnRuLXN1Y2Nlc3MtYm9yZGVyKTtcbn1cbi5idG4td2FybmluZyB7XG4gIEBpbmNsdWRlIGJ1dHRvbi12YXJpYW50KCRidG4td2FybmluZy1jb2xvciwgJGJ0bi13YXJuaW5nLWJnLCAkYnRuLXdhcm5pbmctYm9yZGVyKTtcbn1cbi5idG4tZGFuZ2VyIHtcbiAgQGluY2x1ZGUgYnV0dG9uLXZhcmlhbnQoJGJ0bi1kYW5nZXItY29sb3IsICRidG4tZGFuZ2VyLWJnLCAkYnRuLWRhbmdlci1ib3JkZXIpO1xufVxuXG4vLyBSZW1vdmUgYWxsIGJhY2tncm91bmRzXG4uYnRuLXByaW1hcnktb3V0bGluZSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1wcmltYXJ5LWJnKTtcbn1cbi5idG4tc2Vjb25kYXJ5LW91dGxpbmUge1xuICBAaW5jbHVkZSBidXR0b24tb3V0bGluZS12YXJpYW50KCRidG4tc2Vjb25kYXJ5LWJvcmRlcik7XG59XG4uYnRuLWluZm8tb3V0bGluZSB7XG4gIEBpbmNsdWRlIGJ1dHRvbi1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1pbmZvLWJnKTtcbn1cbi5idG4tc3VjY2Vzcy1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUtdmFyaWFudCgkYnRuLXN1Y2Nlc3MtYmcpO1xufVxuLmJ0bi13YXJuaW5nLW91dGxpbmUge1xuICBAaW5jbHVkZSBidXR0b24tb3V0bGluZS12YXJpYW50KCRidG4td2FybmluZy1iZyk7XG59XG4uYnRuLWRhbmdlci1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgYnV0dG9uLW91dGxpbmUtdmFyaWFudCgkYnRuLWRhbmdlci1iZyk7XG59XG5cblxuLy9cbi8vIExpbmsgYnV0dG9uc1xuLy9cblxuLy8gTWFrZSBhIGJ1dHRvbiBsb29rIGFuZCBiZWhhdmUgbGlrZSBhIGxpbmtcbi5idG4tbGluayB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAkbGluay1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogMDtcblxuICAmLFxuICAmOmFjdGl2ZSxcbiAgJi5hY3RpdmUsXG4gICY6ZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3cobm9uZSk7XG4gIH1cbiAgJixcbiAgJjpmb2N1cyxcbiAgJjphY3RpdmUge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgQGluY2x1ZGUgaG92ZXIge1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgIGNvbG9yOiAkbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246ICRsaW5rLWhvdmVyLWRlY29yYXRpb247XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbiAgJjpkaXNhYmxlZCB7XG4gICAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgICAgY29sb3I6ICRidG4tbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG4vL1xuLy8gQnV0dG9uIFNpemVzXG4vL1xuXG4uYnRuLWxnIHtcbiAgLy8gbGluZS1oZWlnaHQ6IGVuc3VyZSBldmVuLW51bWJlcmVkIGhlaWdodCBvZiBidXR0b24gbmV4dCB0byBsYXJnZSBpbnB1dFxuICBAaW5jbHVkZSBidXR0b24tc2l6ZSgkYnRuLXBhZGRpbmcteS1sZywgJGJ0bi1wYWRkaW5nLXgtbGcsICRmb250LXNpemUtbGcsICRsaW5lLWhlaWdodC1sZywgJGJ0bi1ib3JkZXItcmFkaXVzLWxnKTtcbn1cbi5idG4tc20ge1xuICAvLyBsaW5lLWhlaWdodDogZW5zdXJlIHByb3BlciBoZWlnaHQgb2YgYnV0dG9uIG5leHQgdG8gc21hbGwgaW5wdXRcbiAgQGluY2x1ZGUgYnV0dG9uLXNpemUoJGJ0bi1wYWRkaW5nLXktc20sICRidG4tcGFkZGluZy14LXNtLCAkZm9udC1zaXplLXNtLCAkbGluZS1oZWlnaHQtc20sICRidG4tYm9yZGVyLXJhZGl1cy1zbSk7XG59XG5cblxuLy9cbi8vIEJsb2NrIGJ1dHRvblxuLy9cblxuLmJ0bi1ibG9jayB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLy8gVmVydGljYWxseSBzcGFjZSBvdXQgbXVsdGlwbGUgYmxvY2sgYnV0dG9uc1xuLmJ0bi1ibG9jayArIC5idG4tYmxvY2sge1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi8vIFNwZWNpZmljaXR5IG92ZXJyaWRlc1xuaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSxcbmlucHV0W3R5cGU9XCJyZXNldFwiXSxcbmlucHV0W3R5cGU9XCJidXR0b25cIl0ge1xuICAmLmJ0bi1ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIi5mYWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAuMTVzIGxpbmVhcjtcblxuICAmLmluIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5jb2xsYXBzZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgJi5pbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgLy8gdHImLmluICAgIHsgZGlzcGxheTogdGFibGUtcm93OyB9XG4gIC8vIHRib2R5Ji5pbiB7IGRpc3BsYXk6IHRhYmxlLXJvdy1ncm91cDsgfVxufVxuXG4uY29sbGFwc2luZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjM1cztcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0O1xufVxuIiwiLy8gVGhlIGRyb3Bkb3duIHdyYXBwZXIgKGA8ZGl2PmApXG4uZHJvcHVwLFxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZHJvcGRvd24tdG9nZ2xlIHtcbiAgLy8gR2VuZXJhdGUgdGhlIGNhcmV0IGF1dG9tYXRpY2FsbHlcbiAgJjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVyZW07XG4gICAgbWFyZ2luLWxlZnQ6IC4yNXJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgYm9yZGVyLXRvcDogJGNhcmV0LXdpZHRoIHNvbGlkO1xuICAgIGJvcmRlci1yaWdodDogJGNhcmV0LXdpZHRoIHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1sZWZ0OiAkY2FyZXQtd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAvLyBQcmV2ZW50IHRoZSBmb2N1cyBvbiB0aGUgZHJvcGRvd24gdG9nZ2xlIHdoZW4gY2xvc2luZyBkcm9wZG93bnNcbiAgJjpmb2N1cyB7XG4gICAgb3V0bGluZTogMDtcbiAgfVxufVxuXG4uZHJvcHVwIHtcbiAgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgJjo6YWZ0ZXIge1xuICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgIGJvcmRlci1ib3R0b206ICRjYXJldC13aWR0aCBzb2xpZDtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhlIGRyb3Bkb3duIG1lbnVcbi5kcm9wZG93bi1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtZHJvcGRvd247XG4gIGRpc3BsYXk6IG5vbmU7IC8vIG5vbmUgYnkgZGVmYXVsdCwgYnV0IGJsb2NrIG9uIFwib3BlblwiIG9mIHRoZSBtZW51XG4gIGZsb2F0OiBsZWZ0O1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBwYWRkaW5nOiA1cHggMDtcbiAgbWFyZ2luOiAycHggMCAwOyAvLyBvdmVycmlkZSBkZWZhdWx0IHVsXG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1iYXNlO1xuICBjb2xvcjogJGJvZHktY29sb3I7XG4gIHRleHQtYWxpZ246IGxlZnQ7IC8vIEVuc3VyZXMgcHJvcGVyIGFsaWdubWVudCBpZiBwYXJlbnQgaGFzIGl0IGNoYW5nZWQgKGUuZy4sIG1vZGFsIGZvb3RlcilcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRyb3Bkb3duLWJnO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xuICBib3JkZXI6ICRkcm9wZG93bi1ib3JkZXItd2lkdGggc29saWQgJGRyb3Bkb3duLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCA2cHggMTJweCByZ2JhKDAsMCwwLC4xNzUpKTtcbn1cblxuLy8gRGl2aWRlcnMgKGJhc2ljYWxseSBhbiBgPGhyPmApIHdpdGhpbiB0aGUgZHJvcGRvd25cbi5kcm9wZG93bi1kaXZpZGVyIHtcbiAgQGluY2x1ZGUgbmF2LWRpdmlkZXIoJGRyb3Bkb3duLWRpdmlkZXItYmcpO1xufVxuXG4vLyBMaW5rcywgYnV0dG9ucywgYW5kIG1vcmUgd2l0aGluIHRoZSBkcm9wZG93biBtZW51XG4vL1xuLy8gYDxidXR0b24+YC1zcGVjaWZpYyBzdHlsZXMgYXJlIGRlbm90ZWQgd2l0aCBgLy8gRm9yIDxidXR0b24+c2Bcbi5kcm9wZG93bi1pdGVtIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlOyAvLyBGb3IgYDxidXR0b24+YHNcbiAgcGFkZGluZzogM3B4IDIwcHg7XG4gIGNsZWFyOiBib3RoO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICBjb2xvcjogJGRyb3Bkb3duLWxpbmstY29sb3I7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7IC8vIEZvciBgPGJ1dHRvbj5gc1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvLyBwcmV2ZW50IGxpbmtzIGZyb20gcmFuZG9tbHkgYnJlYWtpbmcgb250byBuZXcgbGluZXNcbiAgYmFja2dyb3VuZDogbm9uZTsgLy8gRm9yIGA8YnV0dG9uPmBzXG4gIGJvcmRlcjogMDsgLy8gRm9yIGA8YnV0dG9uPmBzXG5cbiAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyb3Bkb3duLWxpbmstaG92ZXItYmc7XG4gIH1cblxuICAvLyBBY3RpdmUgc3RhdGVcbiAgJi5hY3RpdmUge1xuICAgIEBpbmNsdWRlIHBsYWluLWhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1hY3RpdmUtY29sb3I7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJvcGRvd24tbGluay1hY3RpdmUtYmc7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIERpc2FibGVkIHN0YXRlXG4gIC8vXG4gIC8vIEdyYXkgb3V0IHRleHQgYW5kIGVuc3VyZSB0aGUgaG92ZXIvZm9jdXMgc3RhdGUgcmVtYWlucyBncmF5XG4gICYuZGlzYWJsZWQge1xuICAgIEBpbmNsdWRlIHBsYWluLWhvdmVyLWZvY3VzIHtcbiAgICAgIGNvbG9yOiAkZHJvcGRvd24tbGluay1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAvLyBOdWtlIGhvdmVyL2ZvY3VzIGVmZmVjdHNcbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8vIFJlbW92ZSBDU1MgZ3JhZGllbnRcbiAgICAgIEBpbmNsdWRlIHJlc2V0LWZpbHRlcigpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBPcGVuIHN0YXRlIGZvciB0aGUgZHJvcGRvd25cbi5vcGVuIHtcbiAgLy8gU2hvdyB0aGUgbWVudVxuICA+IC5kcm9wZG93bi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgb3V0bGluZSB3aGVuIDpmb2N1cyBpcyB0cmlnZ2VyZWRcbiAgPiBhIHtcbiAgICBvdXRsaW5lOiAwO1xuICB9XG59XG5cbi8vIE1lbnUgcG9zaXRpb25pbmdcbi8vXG4vLyBBZGQgZXh0cmEgY2xhc3MgdG8gYC5kcm9wZG93bi1tZW51YCB0byBmbGlwIHRoZSBhbGlnbm1lbnQgb2YgdGhlIGRyb3Bkb3duXG4vLyBtZW51IHdpdGggdGhlIHBhcmVudC5cbi5kcm9wZG93bi1tZW51LXJpZ2h0IHtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IGF1dG87IC8vIFJlc2V0IHRoZSBkZWZhdWx0IGZyb20gYC5kcm9wZG93bi1tZW51YFxufVxuLy8gV2l0aCB2Mywgd2UgZW5hYmxlZCBhdXRvLWZsaXBwaW5nIGlmIHlvdSBoYXZlIGEgZHJvcGRvd24gd2l0aGluIGEgcmlnaHRcbi8vIGFsaWduZWQgbmF2IGNvbXBvbmVudC4gVG8gZW5hYmxlIHRoZSB1bmRvaW5nIG9mIHRoYXQsIHdlIHByb3ZpZGUgYW4gb3ZlcnJpZGVcbi8vIHRvIHJlc3RvcmUgdGhlIGRlZmF1bHQgZHJvcGRvd24gbWVudSBhbGlnbm1lbnQuXG4vL1xuLy8gVGhpcyBpcyBvbmx5IGZvciBsZWZ0LWFsaWduaW5nIGEgZHJvcGRvd24gbWVudSB3aXRoaW4gYSBgLm5hdmJhci1yaWdodGAgb3Jcbi8vIGAucHVsbC1yaWdodGAgbmF2IGNvbXBvbmVudC5cbi5kcm9wZG93bi1tZW51LWxlZnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogMDtcbn1cblxuLy8gRHJvcGRvd24gc2VjdGlvbiBoZWFkZXJzXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDNweCAyMHB4O1xuICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkZHJvcGRvd24taGVhZGVyLWNvbG9yO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyAvLyBhcyB3aXRoID4gbGkgPiBhXG59XG5cbi8vIEJhY2tkcm9wIHRvIGNhdGNoIGJvZHkgY2xpY2tzIG9uIG1vYmlsZSwgZXRjLlxuLmRyb3Bkb3duLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICgkemluZGV4LWRyb3Bkb3duIC0gMTApO1xufVxuXG4vLyBSaWdodCBhbGlnbmVkIGRyb3Bkb3duc1xuLnB1bGwtcmlnaHQgPiAuZHJvcGRvd24tbWVudSB7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiBhdXRvO1xufVxuXG4vLyBBbGxvdyBmb3IgZHJvcGRvd25zIHRvIGdvIGJvdHRvbSB1cCAoYWthLCBkcm9wdXAtbWVudSlcbi8vXG4vLyBKdXN0IGFkZCAuZHJvcHVwIGFmdGVyIHRoZSBzdGFuZGFyZCAuZHJvcGRvd24gY2xhc3MgYW5kIHlvdSdyZSBzZXQuXG4vLyBUT0RPOiBhYnN0cmFjdCB0aGlzIHNvIHRoYXQgdGhlIG5hdmJhciBmaXhlZCBzdHlsZXMgYXJlIG5vdCBwbGFjZWQgaGVyZT9cblxuLmRyb3B1cCxcbi5uYXZiYXItZml4ZWQtYm90dG9tIC5kcm9wZG93biB7XG4gIC8vIFJldmVyc2UgdGhlIGNhcmV0XG4gIC5jYXJldCB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGJvcmRlci1ib3R0b206ICRjYXJldC13aWR0aCBzb2xpZDtcbiAgfVxuXG4gIC8vIERpZmZlcmVudCBwb3NpdGlvbmluZyBmb3IgYm90dG9tIHVwIG1lbnVcbiAgLmRyb3Bkb3duLW1lbnUge1xuICAgIHRvcDogYXV0bztcbiAgICBib3R0b206IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59XG4iLCIvLyBNYWtlIHRoZSBkaXYgYmVoYXZlIGxpa2UgYSBidXR0b25cbi5idG4tZ3JvdXAsXG4uYnRuLWdyb3VwLXZlcnRpY2FsIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8vIG1hdGNoIC5idG4gYWxpZ25tZW50IGdpdmVuIGZvbnQtc2l6ZSBoYWNrIGFib3ZlXG5cbiAgPiAuYnRuIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICAvLyBCcmluZyB0aGUgXCJhY3RpdmVcIiBidXR0b24gdG8gdGhlIGZyb250XG4gICAgJjpmb2N1cyxcbiAgICAmOmFjdGl2ZSxcbiAgICAmLmFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICBAaW5jbHVkZSBob3ZlciB7XG4gICAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgfVxufVxuXG4vLyBQcmV2ZW50IGRvdWJsZSBib3JkZXJzIHdoZW4gYnV0dG9ucyBhcmUgbmV4dCB0byBlYWNoIG90aGVyXG4uYnRuLWdyb3VwIHtcbiAgLmJ0biArIC5idG4sXG4gIC5idG4gKyAuYnRuLWdyb3VwLFxuICAuYnRuLWdyb3VwICsgLmJ0bixcbiAgLmJ0bi1ncm91cCArIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi1sZWZ0OiAtJGlucHV0LWJ0bi1ib3JkZXItd2lkdGg7XG4gIH1cbn1cblxuLy8gT3B0aW9uYWw6IEdyb3VwIG11bHRpcGxlIGJ1dHRvbiBncm91cHMgdG9nZXRoZXIgZm9yIGEgdG9vbGJhclxuLmJ0bi10b29sYmFyIHtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7IC8vIE9mZnNldCB0aGUgZmlyc3QgY2hpbGQncyBtYXJnaW5cbiAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcblxuICAuYnRuLWdyb3VwLFxuICAuaW5wdXQtZ3JvdXAge1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG5cbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAsXG4gID4gLmlucHV0LWdyb3VwIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG59XG5cbi5idG4tZ3JvdXAgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5kcm9wZG93bi10b2dnbGUpIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cblxuLy8gU2V0IGNvcm5lcnMgaW5kaXZpZHVhbCBiZWNhdXNlIHNvbWV0aW1lcyBhIHNpbmdsZSBidXR0b24gY2FuIGJlIGluIGEgLmJ0bi1ncm91cCBhbmQgd2UgbmVlZCA6Zmlyc3QtY2hpbGQgYW5kIDpsYXN0LWNoaWxkIHRvIGJvdGggbWF0Y2hcbi5idG4tZ3JvdXAgPiAuYnRuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgJjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbiAgfVxufVxuLy8gTmVlZCAuZHJvcGRvd24tdG9nZ2xlIHNpbmNlIDpsYXN0LWNoaWxkIGRvZXNuJ3QgYXBwbHkgZ2l2ZW4gYSAuZHJvcGRvd24tbWVudSBpbW1lZGlhdGVseSBhZnRlciBpdFxuLmJ0bi1ncm91cCA+IC5idG46bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSxcbi5idG4tZ3JvdXAgPiAuZHJvcGRvd24tdG9nZ2xlOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xufVxuXG4vLyBDdXN0b20gZWRpdHMgZm9yIGluY2x1ZGluZyBidG4tZ3JvdXBzIHdpdGhpbiBidG4tZ3JvdXBzICh1c2VmdWwgZm9yIGluY2x1ZGluZyBkcm9wZG93biBidXR0b25zIHdpdGhpbiBhIGJ0bi1ncm91cClcbi5idG4tZ3JvdXAgPiAuYnRuLWdyb3VwIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpID4gLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG4uYnRuLWdyb3VwID4gLmJ0bi1ncm91cDpmaXJzdC1jaGlsZDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgPiAuYnRuOmxhc3QtY2hpbGQsXG4gID4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygwKTtcbiAgfVxufVxuLmJ0bi1ncm91cCA+IC5idG4tZ3JvdXA6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoMCk7XG59XG5cbi8vIE9uIGFjdGl2ZSBhbmQgb3BlbiwgZG9uJ3Qgc2hvdyBvdXRsaW5lXG4uYnRuLWdyb3VwIC5kcm9wZG93bi10b2dnbGU6YWN0aXZlLFxuLmJ0bi1ncm91cC5vcGVuIC5kcm9wZG93bi10b2dnbGUge1xuICBvdXRsaW5lOiAwO1xufVxuXG5cbi8vIFNpemluZ1xuLy9cbi8vIFJlbWl4IHRoZSBkZWZhdWx0IGJ1dHRvbiBzaXppbmcgY2xhc3NlcyBpbnRvIG5ldyBvbmVzIGZvciBlYXNpZXIgbWFuaXB1bGF0aW9uLlxuXG4uYnRuLWdyb3VwLXNtID4gLmJ0biB7IEBleHRlbmQgLmJ0bi1zbTsgfVxuLmJ0bi1ncm91cC1sZyA+IC5idG4geyBAZXh0ZW5kIC5idG4tbGc7IH1cblxuXG4vL1xuLy8gU3BsaXQgYnV0dG9uIGRyb3Bkb3duc1xuLy9cblxuLy8gR2l2ZSB0aGUgbGluZSBiZXR3ZWVuIGJ1dHRvbnMgc29tZSBkZXB0aFxuLmJ0bi1ncm91cCA+IC5idG4gKyAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbi5idG4tZ3JvdXAgPiAuYnRuLWxnICsgLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMTJweDtcbn1cblxuLy8gVGhlIGNsaWNrYWJsZSBidXR0b24gZm9yIHRvZ2dsaW5nIHRoZSBtZW51XG4vLyBSZW1vdmUgdGhlIGdyYWRpZW50IGFuZCBzZXQgdGhlIHNhbWUgaW5zZXQgc2hhZG93IGFzIHRoZSA6YWN0aXZlIHN0YXRlXG4uYnRuLWdyb3VwLm9wZW4gLmRyb3Bkb3duLXRvZ2dsZSB7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwwLDAsLjEyNSkpO1xuXG4gIC8vIFNob3cgbm8gc2hhZG93IGZvciBgLmJ0bi1saW5rYCBzaW5jZSBpdCBoYXMgbm8gb3RoZXIgYnV0dG9uIHN0eWxlcy5cbiAgJi5idG4tbGluayB7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxufVxuXG5cbi8vIFJlcG9zaXRpb24gdGhlIGNhcmV0XG4uYnRuIC5jYXJldCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLy8gQ2FyZXRzIGluIG90aGVyIGJ1dHRvbiBzaXplc1xuLmJ0bi1sZyAuY2FyZXQge1xuICBib3JkZXItd2lkdGg6ICRjYXJldC13aWR0aC1sZyAkY2FyZXQtd2lkdGgtbGcgMDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cbi8vIFVwc2lkZSBkb3duIGNhcmV0cyBmb3IgLmRyb3B1cFxuLmRyb3B1cCAuYnRuLWxnIC5jYXJldCB7XG4gIGJvcmRlci13aWR0aDogMCAkY2FyZXQtd2lkdGgtbGcgJGNhcmV0LXdpZHRoLWxnO1xufVxuXG5cblxuLy9cbi8vIFZlcnRpY2FsIGJ1dHRvbiBncm91cHNcbi8vXG5cbi5idG4tZ3JvdXAtdmVydGljYWwge1xuICA+IC5idG4sXG4gID4gLmJ0bi1ncm91cCxcbiAgPiAuYnRuLWdyb3VwID4gLmJ0biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gQ2xlYXIgZmxvYXRzIHNvIGRyb3Bkb3duIG1lbnVzIGNhbiBiZSBwcm9wZXJseSBwbGFjZWRcbiAgPiAuYnRuLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBjbGVhcmZpeCgpO1xuXG4gICAgPiAuYnRuIHtcbiAgICAgIGZsb2F0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gID4gLmJ0biArIC5idG4sXG4gID4gLmJ0biArIC5idG4tZ3JvdXAsXG4gID4gLmJ0bi1ncm91cCArIC5idG4sXG4gID4gLmJ0bi1ncm91cCArIC5idG4tZ3JvdXAge1xuICAgIG1hcmdpbi10b3A6IC0kaW5wdXQtYnRuLWJvcmRlci13aWR0aDtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4uYnRuLWdyb3VwLXZlcnRpY2FsID4gLmJ0biB7XG4gICY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICAmOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXM7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoMCk7XG4gIH1cbiAgJjpsYXN0LWNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkYnRuLWJvcmRlci1yYWRpdXM7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXRvcC1yYWRpdXMoMCk7XG4gIH1cbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOm5vdCg6Zmlyc3QtY2hpbGQpOm5vdCg6bGFzdC1jaGlsZCkgPiAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5idG4tZ3JvdXAtdmVydGljYWwgPiAuYnRuLWdyb3VwOmZpcnN0LWNoaWxkOm5vdCg6bGFzdC1jaGlsZCkge1xuICA+IC5idG46bGFzdC1jaGlsZCxcbiAgPiAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBib3JkZXItYm90dG9tLXJhZGl1cygwKTtcbiAgfVxufVxuLmJ0bi1ncm91cC12ZXJ0aWNhbCA+IC5idG4tZ3JvdXA6bGFzdC1jaGlsZDpub3QoOmZpcnN0LWNoaWxkKSA+IC5idG46Zmlyc3QtY2hpbGQge1xuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbn1cblxuXG4vLyBDaGVja2JveCBhbmQgcmFkaW8gb3B0aW9uc1xuLy9cbi8vIEluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIGJyb3dzZXIncyBmb3JtIHZhbGlkYXRpb24gZmVlZGJhY2ssIHBvd2VyZWQgYnkgdGhlXG4vLyBgcmVxdWlyZWRgIGF0dHJpYnV0ZSwgd2UgaGF2ZSB0byBcImhpZGVcIiB0aGUgaW5wdXRzIHZpYSBgY2xpcGAuIFdlIGNhbm5vdCB1c2Vcbi8vIGBkaXNwbGF5OiBub25lO2Agb3IgYHZpc2liaWxpdHk6IGhpZGRlbjtgIGFzIHRoYXQgYWxzbyBoaWRlcyB0aGUgcG9wb3Zlci5cbi8vIFNpbXBseSB2aXN1YWxseSBoaWRpbmcgdGhlIGlucHV0cyB2aWEgYG9wYWNpdHlgIHdvdWxkIGxlYXZlIHRoZW0gY2xpY2thYmxlIGluXG4vLyBjZXJ0YWluIGNhc2VzIHdoaWNoIGlzIHByZXZlbnRlZCBieSB1c2luZyBgY2xpcGAgYW5kIGBwb2ludGVyLWV2ZW50c2AuXG4vLyBUaGlzIHdheSwgd2UgZW5zdXJlIGEgRE9NIGVsZW1lbnQgaXMgdmlzaWJsZSB0byBwb3NpdGlvbiB0aGUgcG9wb3ZlciBmcm9tLlxuLy9cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMjc5NCBhbmRcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9wdWxsLzE0NTU5IGZvciBtb3JlIGluZm9ybWF0aW9uLlxuXG5bZGF0YS10b2dnbGU9XCJidXR0b25zXCJdIHtcbiAgPiAuYnRuLFxuICA+IC5idG4tZ3JvdXAgPiAuYnRuIHtcbiAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl0sXG4gICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGNsaXA6IHJlY3QoMCwwLDAsMCk7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIi8vXG4vLyBCYXNlIHN0eWxlc1xuLy9cblxuLmlucHV0LWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBpZiAkZW5hYmxlLWZsZXgge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH0gQGVsc2Uge1xuICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgIC8vIFByZXZlbnQgaW5wdXQgZ3JvdXBzIGZyb20gaW5oZXJpdGluZyBib3JkZXIgc3R5bGVzIGZyb20gdGFibGUgY2VsbHMgd2hlblxuICAgIC8vIHBsYWNlZCB3aXRoaW4gYSB0YWJsZS5cbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICB9XG5cbiAgLmZvcm0tY29udHJvbCB7XG4gICAgLy8gRW5zdXJlIHRoYXQgdGhlIGlucHV0IGlzIGFsd2F5cyBhYm92ZSB0aGUgKmFwcGVuZGVkKiBhZGRvbiBidXR0b24gZm9yXG4gICAgLy8gcHJvcGVyIGJvcmRlciBjb2xvcnMuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgLy8gQnJpbmcgdGhlIFwiYWN0aXZlXCIgZm9ybSBjb250cm9sIHRvIHRoZSBmcm9udFxuICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgICB6LWluZGV4OiAzO1xuICAgIH1cbiAgICBAaWYgJGVuYWJsZS1mbGV4IHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfSBAZWxzZSB7XG4gICAgICAvLyBJRTkgZnViYXJzIHRoZSBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgaW4gdGV4dCBpbnB1dHMgYW5kIHRoZSBhcnJvd3Mgb25cbiAgICAgIC8vIHNlbGVjdCBlbGVtZW50cyBpbiBpbnB1dCBncm91cHMuIFRvIGZpeCBpdCwgd2UgZmxvYXQgdGhlIGlucHV0LiBEZXRhaWxzOlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2lzc3Vlcy8xMTU2MSNpc3N1ZWNvbW1lbnQtMjg5MzY4NTVcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cblxuLmlucHV0LWdyb3VwLWFkZG9uLFxuLmlucHV0LWdyb3VwLWJ0bixcbi5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcbiAgQGlmICRlbmFibGUtZmxleCB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9IEBlbHNlIHtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB9XG5cbiAgJjpub3QoOmZpcnN0LWNoaWxkKTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xuICB9XG59XG5cbi5pbnB1dC1ncm91cC1hZGRvbixcbi5pbnB1dC1ncm91cC1idG4ge1xuICBAaWYgJGVuYWJsZS1mbGV4IHtcbiAgICAvLyBkbyBub3RoaW5nXG4gIH0gQGVsc2Uge1xuICAgIHdpZHRoOiAxJTtcbiAgfVxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvLyBNYXRjaCB0aGUgaW5wdXRzXG59XG5cblxuLy8gU2l6aW5nIG9wdGlvbnNcbi8vXG4vLyBSZW1peCB0aGUgZGVmYXVsdCBmb3JtIGNvbnRyb2wgc2l6aW5nIGNsYXNzZXMgaW50byBuZXcgb25lcyBmb3IgZWFzaWVyXG4vLyBtYW5pcHVsYXRpb24uXG5cbi5pbnB1dC1ncm91cC1sZyA+IC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtbGcgPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIEBleHRlbmQgLmZvcm0tY29udHJvbC1sZztcbn1cbi5pbnB1dC1ncm91cC1zbSA+IC5mb3JtLWNvbnRyb2wsXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYWRkb24sXG4uaW5wdXQtZ3JvdXAtc20gPiAuaW5wdXQtZ3JvdXAtYnRuID4gLmJ0biB7XG4gIEBleHRlbmQgLmZvcm0tY29udHJvbC1zbTtcbn1cblxuXG4vL1xuLy8gVGV4dCBpbnB1dCBncm91cHNcbi8vXG5cbi5pbnB1dC1ncm91cC1hZGRvbiB7XG4gIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXkgJGlucHV0LXBhZGRpbmcteDtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWJhc2U7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBjb2xvcjogJGlucHV0LWNvbG9yO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1ncm91cC1hZGRvbi1iZztcbiAgYm9yZGVyOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCBzb2xpZCAkaW5wdXQtZ3JvdXAtYWRkb24tYm9yZGVyLWNvbG9yO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcblxuICAvLyBTaXppbmdcbiAgJi5mb3JtLWNvbnRyb2wtc20ge1xuICAgIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktc20gJGlucHV0LXBhZGRpbmcteC1zbTtcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtc207XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cy1zbSk7XG4gIH1cbiAgJi5mb3JtLWNvbnRyb2wtbGcge1xuICAgIHBhZGRpbmc6ICRpbnB1dC1wYWRkaW5nLXktbGcgJGlucHV0LXBhZGRpbmcteC1sZztcbiAgICBmb250LXNpemU6ICRmb250LXNpemUtbGc7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cy1sZyk7XG4gIH1cblxuICAvLyBOdWtlIGRlZmF1bHQgbWFyZ2lucyBmcm9tIGNoZWNrYm94ZXMgYW5kIHJhZGlvcyB0byB2ZXJ0aWNhbGx5IGNlbnRlciB3aXRoaW4uXG4gIGlucHV0W3R5cGU9XCJyYWRpb1wiXSxcbiAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICB9XG59XG5cblxuLy9cbi8vIFJlc2V0IHJvdW5kZWQgY29ybmVyc1xuLy9cblxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6Zmlyc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYWRkb246Zmlyc3QtY2hpbGQsXG4uaW5wdXQtZ3JvdXAtYnRuOmZpcnN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuLWdyb3VwID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuZHJvcGRvd24tdG9nZ2xlLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bjpub3QoOmxhc3QtY2hpbGQpOm5vdCguZHJvcGRvd24tdG9nZ2xlKSxcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4tZ3JvdXA6bm90KDpsYXN0LWNoaWxkKSA+IC5idG4ge1xuICBAaW5jbHVkZSBib3JkZXItcmlnaHQtcmFkaXVzKDApO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJpZ2h0OiAwO1xufVxuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2w6bGFzdC1jaGlsZCxcbi5pbnB1dC1ncm91cC1hZGRvbjpsYXN0LWNoaWxkLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmJ0bixcbi5pbnB1dC1ncm91cC1idG46bGFzdC1jaGlsZCA+IC5idG4tZ3JvdXAgPiAuYnRuLFxuLmlucHV0LWdyb3VwLWJ0bjpsYXN0LWNoaWxkID4gLmRyb3Bkb3duLXRvZ2dsZSxcbi5pbnB1dC1ncm91cC1idG46Zmlyc3QtY2hpbGQgPiAuYnRuOm5vdCg6Zmlyc3QtY2hpbGQpLFxuLmlucHV0LWdyb3VwLWJ0bjpmaXJzdC1jaGlsZCA+IC5idG4tZ3JvdXA6bm90KDpmaXJzdC1jaGlsZCkgPiAuYnRuIHtcbiAgQGluY2x1ZGUgYm9yZGVyLWxlZnQtcmFkaXVzKDApO1xufVxuLmlucHV0LWdyb3VwLWFkZG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXItbGVmdDogMDtcbn1cblxuXG4vL1xuLy8gQnV0dG9uIGlucHV0IGdyb3Vwc1xuLy9cblxuLmlucHV0LWdyb3VwLWJ0biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLy8gSmFua2lseSBwcmV2ZW50IGlucHV0IGJ1dHRvbiBncm91cHMgZnJvbSB3cmFwcGluZyB3aXRoIGB3aGl0ZS1zcGFjZWAgYW5kXG4gIC8vIGBmb250LXNpemVgIGluIGNvbWJpbmF0aW9uIHdpdGggYGlubGluZS1ibG9ja2Agb24gYnV0dG9ucy5cbiAgZm9udC1zaXplOiAwO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gIC8vIE5lZ2F0aXZlIG1hcmdpbiBmb3Igc3BhY2luZywgcG9zaXRpb24gZm9yIGJyaW5naW5nIGhvdmVyZWQvZm9jdXNlZC9hY3RpdmVkXG4gIC8vIGVsZW1lbnQgYWJvdmUgdGhlIHNpYmxpbmdzLlxuICA+IC5idG4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICArIC5idG4ge1xuICAgICAgbWFyZ2luLWxlZnQ6ICgtJGlucHV0LWJ0bi1ib3JkZXItd2lkdGgpO1xuICAgIH1cbiAgICAvLyBCcmluZyB0aGUgXCJhY3RpdmVcIiBidXR0b24gdG8gdGhlIGZyb250XG4gICAgQGluY2x1ZGUgaG92ZXItZm9jdXMtYWN0aXZlIHtcbiAgICAgIHotaW5kZXg6IDM7XG4gICAgfVxuICB9XG5cbiAgLy8gTmVnYXRpdmUgbWFyZ2luIHRvIG9ubHkgaGF2ZSBhIHNpbmdsZSwgc2hhcmVkIGJvcmRlciBiZXR3ZWVuIHRoZSB0d29cbiAgJjpmaXJzdC1jaGlsZCB7XG4gICAgPiAuYnRuLFxuICAgID4gLmJ0bi1ncm91cCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6ICgtJGlucHV0LWJ0bi1ib3JkZXItd2lkdGgpO1xuICAgIH1cbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgID4gLmJ0bixcbiAgICA+IC5idG4tZ3JvdXAge1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIG1hcmdpbi1sZWZ0OiAoLSRpbnB1dC1idG4tYm9yZGVyLXdpZHRoKTtcbiAgICAgIC8vIEJlY2F1c2Ugc3BlY2lmaWNpdHlcbiAgICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIvLyBFbWJlZGRlZCBpY29ucyBmcm9tIE9wZW4gSWNvbmljLlxuLy8gUmVsZWFzZWQgdW5kZXIgTUlUIGFuZCBjb3B5cmlnaHQgMjAxNCBXYXlidXJ5LlxuLy8gaHR0cDovL3VzZWljb25pYy5jb20vb3BlblxuXG5cbi8vIENoZWNrYm94ZXMgYW5kIHJhZGlvc1xuLy9cbi8vIEJhc2UgY2xhc3MgdGFrZXMgY2FyZSBvZiBhbGwgdGhlIGtleSBiZWhhdmlvcmFsIGFzcGVjdHMuXG5cbi5jLWlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIHBhZGRpbmctbGVmdDogMS41cmVtO1xuICBjb2xvcjogIzU1NTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gID4gaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTsgLy8gUHV0IHRoZSBpbnB1dCBiZWhpbmQgdGhlIGxhYmVsIHNvIGl0IGRvZXNuJ3Qgb3ZlcmxheSB0ZXh0XG4gICAgb3BhY2l0eTogMDtcblxuICAgICY6Y2hlY2tlZCB+IC5jLWluZGljYXRvciB7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDk7XG4gICAgICBAaW5jbHVkZSBib3gtc2hhZG93KG5vbmUpO1xuICAgIH1cblxuICAgICY6Zm9jdXMgfiAuYy1pbmRpY2F0b3Ige1xuICAgICAgLy8gdGhlIG1peGluIGlzIG5vdCB1c2VkIGhlcmUgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIGZlZWRiYWNrXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAuMDc1cmVtICNmZmYsIDAgMCAwIC4ycmVtICMwMDc0ZDk7XG4gICAgfVxuXG4gICAgJjphY3RpdmUgfiAuYy1pbmRpY2F0b3Ige1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjNmZmO1xuICAgICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgICB9XG4gIH1cblxuICArIC5jLWlucHV0IHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxufVxuXG4vLyBDdXN0b20gaW5kaWNhdG9yXG4vL1xuLy8gR2VuZXJhdGVzIGEgc2hhZG93IGVsZW1lbnQgdG8gY3JlYXRlIG91ciBtYWtlc2hpZnQgY2hlY2tib3gvcmFkaW8gYmFja2dyb3VuZC5cblxuLmMtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMXJlbTtcbiAgaGVpZ2h0OiAxcmVtO1xuICBmb250LXNpemU6IDY1JTtcbiAgbGluZS1oZWlnaHQ6IDFyZW07XG4gIGNvbG9yOiAjZWVlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IDUwJSA1MCU7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAuMTI1cmVtIC4xMjVyZW0gcmdiYSgwLDAsMCwuMSkpO1xufVxuXG4vLyBDaGVja2JveGVzXG4vL1xuLy8gVHdlYWsganVzdCBhIGZldyB0aGluZ3MgZm9yIGNoZWNrYm94ZXMuXG5cbi5jLWNoZWNrYm94IHtcbiAgLmMtaW5kaWNhdG9yIHtcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG4gIH1cblxuICBpbnB1dDpjaGVja2VkIH4gLmMtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF4Tnk0eExqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5DandoUkU5RFZGbFFSU0J6ZG1jZ1VGVkNURWxESUNJdEx5OVhNME12TDBSVVJDQlRWa2NnTVM0eEx5OUZUaUlnSW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTDBkeVlYQm9hV056TDFOV1J5OHhMakV2UkZSRUwzTjJaekV4TG1SMFpDSStEUW84YzNabklIWmxjbk5wYjI0OUlqRXVNU0lnYVdROUlreGhlV1Z5WHpFaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhnOUlqQndlQ0lnZVQwaU1IQjRJZzBLQ1NCMmFXVjNRbTk0UFNJd0lEQWdPQ0E0SWlCbGJtRmliR1V0WW1GamEyZHliM1Z1WkQwaWJtVjNJREFnTUNBNElEZ2lJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGcwS1BIQmhkR2dnWm1sc2JEMGlJMFpHUmtaR1JpSWdaRDBpVFRZdU5Dd3hURFV1Tnl3eExqZE1NaTQ1TERRdU5Vd3lMakVzTXk0M1RERXVOQ3d6VERBc05DNDBiREF1Tnl3d0xqZHNNUzQxTERFdU5Xd3dMamNzTUM0M2JEQXVOeTB3TGpkc015NDFMVE11Tld3d0xqY3RNQzQzVERZdU5Dd3hURFl1TkN3eGVpSU5DZ2t2UGcwS1BDOXpkbWMrRFFvPSk7XG4gIH1cblxuICBpbnB1dDppbmRldGVybWluYXRlIH4gLmMtaW5kaWNhdG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3NGQ5O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXhOeTR4TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqd2hSRTlEVkZsUVJTQnpkbWNnVUZWQ1RFbERJQ0l0THk5WE0wTXZMMFJVUkNCVFZrY2dNUzR4THk5RlRpSWdJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MMGR5WVhCb2FXTnpMMU5XUnk4eExqRXZSRlJFTDNOMlp6RXhMbVIwWkNJK0RRbzhjM1puSUhabGNuTnBiMjQ5SWpFdU1TSWdhV1E5SWt4aGVXVnlYekVpSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZUcxc2JuTTZlR3hwYm1zOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2ZUd4cGJtc2lJSGc5SWpCd2VDSWdlVDBpTUhCNElnMEtDU0IzYVdSMGFEMGlPSEI0SWlCb1pXbG5hSFE5SWpod2VDSWdkbWxsZDBKdmVEMGlNQ0F3SURnZ09DSWdaVzVoWW14bExXSmhZMnRuY205MWJtUTlJbTVsZHlBd0lEQWdPQ0E0SWlCNGJXdzZjM0JoWTJVOUluQnlaWE5sY25abElqNE5Danh3WVhSb0lHWnBiR3c5SWlOR1JrWkdSa1lpSUdROUlrMHdMRE4yTW1nNFZqTklNSG9pTHo0TkNqd3ZjM1puUGcwSyk7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdyhub25lKTtcbiAgfVxufVxuXG4vLyBSYWRpb3Ncbi8vXG4vLyBUd2VhayBqdXN0IGEgZmV3IHRoaW5ncyBmb3IgcmFkaW9zLlxuXG4uYy1yYWRpbyB7XG4gIC5jLWluZGljYXRvciB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgaW5wdXQ6Y2hlY2tlZCB+IC5jLWluZGljYXRvciB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeE55NHhMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p3aFJFOURWRmxRUlNCemRtY2dVRlZDVEVsRElDSXRMeTlYTTBNdkwwUlVSQ0JUVmtjZ01TNHhMeTlGVGlJZ0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwwZHlZWEJvYVdOekwxTldSeTh4TGpFdlJGUkVMM04yWnpFeExtUjBaQ0krRFFvOGMzWm5JSFpsY25OcGIyNDlJakV1TVNJZ2FXUTlJa3hoZVdWeVh6RWlJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIZzlJakJ3ZUNJZ2VUMGlNSEI0SWcwS0NTQjJhV1YzUW05NFBTSXdJREFnT0NBNElpQmxibUZpYkdVdFltRmphMmR5YjNWdVpEMGlibVYzSURBZ01DQTRJRGdpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBnMEtQSEJoZEdnZ1ptbHNiRDBpSTBaR1JrWkdSaUlnWkQwaVRUUXNNVU15TGpNc01Td3hMREl1TXl3eExEUnpNUzR6TERNc015d3pjek10TVM0ekxETXRNMU0xTGpjc01TdzBMREY2SWk4K0RRbzhMM04yWno0TkNnPT0pO1xuICB9XG59XG5cblxuLy8gTGF5b3V0IG9wdGlvbnNcbi8vXG4vLyBCeSBkZWZhdWx0IHJhZGlvcyBhbmQgY2hlY2tib3hlcyBhcmUgYGlubGluZS1ibG9ja2Agd2l0aCBubyBhZGRpdGlvbmFsIHNwYWNpbmdcbi8vIHNldC4gVXNlIHRoZXNlIG9wdGlvbmFsIGNsYXNzZXMgdG8gdHdlYWsgdGhlIGxheW91dC5cblxuLmMtaW5wdXRzLXN0YWNrZWQge1xuICAuYy1pbnB1dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgIH1cblxuICAgICsgLmMtaW5wdXQge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG5cblxuLy8gU2VsZWN0XG4vL1xuLy8gUmVwbGFjZXMgdGhlIGJyb3dzZXIgZGVmYXVsdCBzZWxlY3Qgd2l0aCBhIGN1c3RvbSBvbmUsIG1vc3RseSBwdWxsZWQgZnJvbVxuLy8gaHR0cDovL3ByaW1lcmNzcy5pby5cbi8vXG4vLyBJbmNsdWRlcyBJRTktc3BlY2lmaWMgaGFja3MgKG5vdGVkIGJ5IGAgXFw5YCkuXG5cbi5jLXNlbGVjdCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAuMzc1cmVtIDEuNzVyZW0gLjM3NXJlbSAuNzVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IC43NXJlbSBcXDk7XG4gIGNvbG9yOiAkaW5wdXQtY29sb3I7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGJhY2tncm91bmQ6ICNmZmYgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBVUNBTUFBQUN6dkUxRkFBQUFERkJNVkVVek16TXpNek16TXpNek16TUtBRy8zQUFBQUEzUlNUbE1BZjRDL2FTTEhBQUFBUEVsRVFWUjQycTNOTVE0QUlBZ0VRVG4vLzJjTGRSS3BwU0d6Qll3elZYdnpuTldzOEM1OENpdXNzUEpqOGg2Tndnb3JyS1JkVHZ1Vjl2MTZBZm4wQVlGT0I3YVlBQUFBQUVsRlRrU3VRbUNDKSBuby1yZXBlYXQgcmlnaHQgLjc1cmVtIGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSBcXDk7XG4gIGJhY2tncm91bmQtc2l6ZTogOHB4IDEwcHg7XG4gIGJvcmRlcjogJGlucHV0LWJ0bi1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWJvcmRlci1jb2xvcjtcbiAgLy8gVXNlIHZlbmRvciBwcmVmaXhlcyBhcyBgYXBwZWFyYW5jZWAgaXNuJ3QgcGFydCBvZiB0aGUgQ1NTIHNwZWMuXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzUxYTdlODtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNzUpLCAwIDAgNXB4IHJnYmEoODEsIDE2NywgMjMyLCAwLjUpKTtcbiAgfVxuXG4gIC8vIEhpZGVzIHRoZSBkZWZhdWx0IGNhcmV0IGluIElFMTFcbiAgJjo6LW1zLWV4cGFuZCB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uYy1zZWxlY3Qtc20ge1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICBwYWRkaW5nLWJvdHRvbTogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG5cbiAgJjpub3QoW211bHRpcGxlXSkge1xuICAgIGhlaWdodDogMjZweDtcbiAgICBtaW4taGVpZ2h0OiAyNnB4O1xuICB9XG59XG5cblxuLy8gRmlsZVxuLy9cbi8vIEN1c3RvbSBmaWxlIGlucHV0LlxuXG4uZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmZpbGUgaW5wdXQge1xuICBtaW4td2lkdGg6IDE0cmVtO1xuICBtYXJnaW46IDA7XG4gIGZpbHRlcjogYWxwaGEob3BhY2l0eSA9IDApO1xuICBvcGFjaXR5OiAwO1xufVxuLmZpbGUtY3VzdG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA1O1xuICBoZWlnaHQ6IDIuNXJlbTtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM1NTU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6ICRpbnB1dC1idG4tYm9yZGVyLXdpZHRoIHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdyhpbnNldCAwIC4ycmVtIC40cmVtIHJnYmEoMCwwLDAsLjA1KSk7XG59XG4uZmlsZS1jdXN0b206OmFmdGVyIHtcbiAgY29udGVudDogXCJDaG9vc2UgZmlsZS4uLlwiO1xufVxuLmZpbGUtY3VzdG9tOjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLS4wNzVyZW07XG4gIHJpZ2h0OiAtLjA3NXJlbTtcbiAgYm90dG9tOiAtLjA3NXJlbTtcbiAgei1pbmRleDogNjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGhlaWdodDogMi41cmVtO1xuICBwYWRkaW5nOiAuNXJlbSAxcmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzU1NTtcbiAgY29udGVudDogXCJCcm93c2VcIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgYm9yZGVyOiAkaW5wdXQtYnRuLWJvcmRlci13aWR0aCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiAwIC4yNXJlbSAuMjVyZW0gMDtcbn1cblxuLy8gRm9jdXMgc3RhdGVcbi5maWxlIGlucHV0OmZvY3VzIH4gLmZpbGUtY3VzdG9tIHtcbiAgQGluY2x1ZGUgYm94LXNoYWRvdygwIDAgMCAuMDc1cmVtICNmZmYsIDAgMCAwIC4ycmVtICMwMDc0ZDkpO1xufVxuIiwiLy8gQmFzZSBjbGFzc1xuLy9cbi8vIEtpY2tzdGFydCBhbnkgbmF2aWdhdGlvbiBjb21wb25lbnQgd2l0aCBhIHNldCBvZiBzdHlsZSByZXNldHMuIFdvcmtzIHdpdGhcbi8vIGA8bmF2PmBzIG9yIGA8dWw+YHMuXG5cbi5uYXYge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5uYXYtbGluayB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG5cbiAgLy8gRGlzYWJsZWQgc3RhdGUgbGlnaHRlbnMgdGV4dCBhbmQgcmVtb3ZlcyBob3Zlci90YWIgZWZmZWN0c1xuICAmLmRpc2FibGVkIHtcbiAgICBjb2xvcjogJG5hdi1kaXNhYmxlZC1saW5rLWNvbG9yO1xuXG4gICAgQGluY2x1ZGUgcGxhaW4taG92ZXItZm9jdXMge1xuICAgICAgY29sb3I6ICRuYXYtZGlzYWJsZWQtbGluay1ob3Zlci1jb2xvcjtcbiAgICAgIGN1cnNvcjogJGN1cnNvci1kaXNhYmxlZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIE5hdiBpbmxpbmVcblxuLm5hdi1pbmxpbmUge1xuICAubmF2LWl0ZW0ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuXG4gIC5uYXYtaXRlbSArIC5uYXYtaXRlbSxcbiAgLm5hdi1saW5rICsgLm5hdi1saW5rIHtcbiAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgfVxufVxuXG5cbi8vXG4vLyBUYWJzXG4vL1xuXG4ubmF2LXRhYnMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcblxuICAubmF2LWl0ZW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIC8vIE1ha2UgdGhlIGxpc3QtaXRlbXMgb3ZlcmxheSB0aGUgYm90dG9tIGJvcmRlclxuICAgIG1hcmdpbi1ib3R0b206IC0xcHg7XG5cbiAgICArIC5uYXYtaXRlbSB7XG4gICAgICBtYXJnaW4tbGVmdDogLjJyZW07XG4gICAgfVxuICB9XG5cbiAgLm5hdi1saW5rIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAkbmF2LWxpbmstcGFkZGluZztcbiAgICBib3JkZXI6ICRuYXYtdGFicy1saW5rLWJvcmRlci13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzICRib3JkZXItcmFkaXVzIDAgMCk7XG5cbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICRuYXYtdGFicy1saW5rLWhvdmVyLWJvcmRlci1jb2xvciAkbmF2LXRhYnMtbGluay1ob3Zlci1ib3JkZXItY29sb3IgJG5hdi10YWJzLWJvcmRlci1jb2xvcjtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgIEBpbmNsdWRlIHBsYWluLWhvdmVyLWZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXYtZGlzYWJsZWQtbGluay1jb2xvcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdi1saW5rLmFjdGl2ZSxcbiAgLm5hdi1pdGVtLm9wZW4gLm5hdi1saW5rIHtcbiAgICBAaW5jbHVkZSBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWNvbG9yO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdi10YWJzLWFjdGl2ZS1saW5rLWhvdmVyLWJnO1xuICAgICAgYm9yZGVyLWNvbG9yOiAkbmF2LXRhYnMtYWN0aXZlLWxpbmstaG92ZXItYm9yZGVyLWNvbG9yICRuYXYtdGFicy1hY3RpdmUtbGluay1ob3Zlci1ib3JkZXItY29sb3IgdHJhbnNwYXJlbnQ7XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIFBpbGxzXG4vL1xuXG4ubmF2LXBpbGxzIHtcbiAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcblxuICAubmF2LWl0ZW0ge1xuICAgIGZsb2F0OiBsZWZ0O1xuXG4gICAgKyAubmF2LWl0ZW0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IC4ycmVtO1xuICAgIH1cbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogJG5hdi1saW5rLXBhZGRpbmc7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkbmF2LXBpbGxzLWJvcmRlci1yYWRpdXMpO1xuICB9XG5cbiAgLm5hdi1saW5rLmFjdGl2ZSxcbiAgLm5hdi1pdGVtLm9wZW4gLm5hdi1saW5rIHtcbiAgICBAaW5jbHVkZSBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gICAgICBjb2xvcjogJGNvbXBvbmVudC1hY3RpdmUtY29sb3I7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29tcG9uZW50LWFjdGl2ZS1iZztcbiAgICB9XG4gIH1cbn1cblxuLm5hdi1zdGFja2VkIHtcbiAgLm5hdi1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmbG9hdDogbm9uZTtcblxuICAgICsgLm5hdi1pdGVtIHtcbiAgICAgIG1hcmdpbi10b3A6IC4ycmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIFRhYmJhYmxlIHRhYnNcbi8vXG5cbi8vIEhpZGUgdGFiYmFibGUgcGFuZXMgdG8gc3RhcnQsIHNob3cgdGhlbSB3aGVuIGAuYWN0aXZlYFxuLnRhYi1jb250ZW50IHtcbiAgPiAudGFiLXBhbmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgPiAuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG5cbi8vXG4vLyBEcm9wZG93bnNcbi8vXG5cbi5uYXYtdGFicyAuZHJvcGRvd24tbWVudSB7XG4gIC8vIE1ha2UgZHJvcGRvd24gYm9yZGVyIG92ZXJsYXAgdGFiIGJvcmRlclxuICBtYXJnaW4tdG9wOiAtMXB4O1xuICAvLyBSZW1vdmUgdGhlIHRvcCByb3VuZGVkIGNvcm5lcnMgaGVyZSBzaW5jZSB0aGVyZSBpcyBhIGhhcmQgZWRnZSBhYm92ZSB0aGUgbWVudVxuICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygwKTtcbn1cbiIsIi8vIFdyYXBwZXIgYW5kIGJhc2UgY2xhc3Ncbi8vXG4vLyBQcm92aWRlIGEgc3RhdGljIG5hdmJhciBmcm9tIHdoaWNoIHdlIGV4cGFuZCB0byBjcmVhdGUgZnVsbC13aWR0aCwgZml4ZWQsIGFuZFxuLy8gb3RoZXIgbmF2YmFyIHZhcmlhdGlvbnMuXG5cbi5uYXZiYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6ICRuYXZiYXItcGFkZGluZy12ZXJ0aWNhbCAkbmF2YmFyLXBhZGRpbmctaG9yaXpvbnRhbDtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJG5hdmJhci1ib3JkZXItcmFkaXVzKTtcbiAgfVxufVxuXG5cbi8vIE5hdmJhciBhbGlnbm1lbnQgb3B0aW9uc1xuLy9cbi8vIERpc3BsYXkgdGhlIG5hdmJhciBhY3Jvc3MgdGhlIGVudGlyZXR5IG9mIHRoZSBwYWdlIG9yIGZpeGVkIGl0IHRvIHRoZSB0b3Agb3Jcbi8vIGJvdHRvbSBvZiB0aGUgcGFnZS5cblxuLy8gQSBzdGF0aWMsIGZ1bGwgd2lkdGggbW9kaWZpZXIgd2l0aCBubyByb3VuZGVkIGNvcm5lcnMuXG4ubmF2YmFyLWZ1bGwge1xuICB6LWluZGV4OiAkemluZGV4LW5hdmJhcjtcblxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcbiAgfVxufVxuXG4vLyBGaXggdGhlIHRvcC9ib3R0b20gbmF2YmFycyB3aGVuIHNjcmVlbiByZWFsIGVzdGF0ZSBzdXBwb3J0cyBpdFxuLm5hdmJhci1maXhlZC10b3AsXG4ubmF2YmFyLWZpeGVkLWJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtbmF2YmFyLWZpeGVkO1xuXG4gIC8vIFVuZG8gdGhlIHJvdW5kZWQgY29ybmVyc1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwKTtcbiAgfVxufVxuXG4ubmF2YmFyLWZpeGVkLXRvcCB7XG4gIHRvcDogMDtcbn1cblxuLm5hdmJhci1maXhlZC1ib3R0b20ge1xuICBib3R0b206IDA7XG59XG5cbi5uYXZiYXItc3RpY2t5LXRvcCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogJHppbmRleC1uYXZiYXItc3RpY2t5O1xuICB3aWR0aDogMTAwJTtcblxuICAvLyBVbmRvIHRoZSByb3VuZGVkIGNvcm5lcnNcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCk7XG4gIH1cbn1cblxuXG4vL1xuLy8gQnJhbmQvcHJvamVjdCBuYW1lXG4vL1xuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAgICAuMjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG4gIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLWxnO1xuXG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cblxuICA+IGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuXG4ubmF2YmFyLWRpdmlkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDFweDtcbiAgcGFkZGluZy10b3A6IC40MjVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAuNDI1cmVtO1xuICBtYXJnaW4tcmlnaHQ6ICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBtYXJnaW4tbGVmdDogICRuYXZiYXItcGFkZGluZy1ob3Jpem9udGFsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICY6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcXDAwYTBcIjtcbiAgfVxufVxuXG5cbi8vIE5hdmJhciB0b2dnbGVcbi8vXG4vLyBDdXN0b20gYnV0dG9uIGZvciB0b2dnbGluZyB0aGUgYC5uYXZiYXItY29sbGFwc2VgLCBwb3dlcmVkIGJ5IHRoZSBjb2xsYXBzZVxuLy8gQm9vdHN0cmFwIEphdmFTY3JpcHQgcGx1Z2luLlxuXG4ubmF2YmFyLXRvZ2dsZXIge1xuICBwYWRkaW5nOiAuNXJlbSAuNzVyZW07XG4gIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZS1sZztcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogJGJvcmRlci13aWR0aCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYnRuLWJvcmRlci1yYWRpdXMpO1xuXG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLy8gQ3VzdG9tIG92ZXJyaWRlIGZvclxuLm5hdmJhci10b2dnbGVhYmxlIHtcbiAgJi14cyB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgJi1zbSB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChtZCkge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgJi1tZCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChsZykge1xuICAgICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBOYXZpZ2F0aW9uXG4vL1xuLy8gQ3VzdG9tIG5hdmJhciBuYXZpZ2F0aW9uIGJ1aWx0IG9uIHRoZSBiYXNlIGAubmF2YCBzdHlsZXMuXG5cbi5uYXZiYXItbmF2IHtcbiAgLm5hdi1pdGVtIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxuXG4gIC5uYXYtbGluayB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZy10b3A6ICAgIC40MjVyZW07XG4gICAgcGFkZGluZy1ib3R0b206IC40MjVyZW07XG5cbiAgICArIC5uYXYtbGluayB7XG4gICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICB9XG4gIH1cblxuICAubmF2LWl0ZW0gKyAubmF2LWl0ZW0ge1xuICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICB9XG59XG5cbi8vIERhcmsgbGlua3MgYWdhaW5zdCBhIGxpZ2h0IGJhY2tncm91bmRcbi5uYXZiYXItbGlnaHQge1xuICAubmF2YmFyLWJyYW5kIHtcbiAgICBjb2xvcjogJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I7XG5cbiAgICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgICBjb2xvcjogJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgIC5uYXYtbGluayB7XG4gICAgICBjb2xvcjogJG5hdmJhci1saWdodC1jb2xvcjtcblxuICAgICAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1saWdodC1ob3Zlci1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAub3BlbiA+IC5uYXYtbGluayxcbiAgICAuYWN0aXZlID4gLm5hdi1saW5rLFxuICAgIC5uYXYtbGluay5vcGVuLFxuICAgIC5uYXYtbGluay5hY3RpdmUge1xuICAgICAgQGluY2x1ZGUgcGxhaW4taG92ZXItZm9jdXMge1xuICAgICAgICBjb2xvcjogJG5hdmJhci1saWdodC1hY3RpdmUtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wNzUpO1xuICB9XG59XG5cbi8vIFdoaXRlIGxpbmtzIGFnYWluc3QgYSBkYXJrIGJhY2tncm91bmRcbi5uYXZiYXItZGFyayB7XG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGNvbG9yOiAkbmF2YmFyLWRhcmstYWN0aXZlLWNvbG9yO1xuXG4gICAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgICAgY29sb3I6ICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgIC5uYXYtbGluayB7XG4gICAgICBjb2xvcjogJG5hdmJhci1kYXJrLWNvbG9yO1xuXG4gICAgICBAaW5jbHVkZSBob3Zlci1mb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkbmF2YmFyLWRhcmstaG92ZXItY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm9wZW4gPiAubmF2LWxpbmssXG4gICAgLmFjdGl2ZSA+IC5uYXYtbGluayxcbiAgICAubmF2LWxpbmsub3BlbixcbiAgICAubmF2LWxpbmsuYWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIHBsYWluLWhvdmVyLWZvY3VzIHtcbiAgICAgICAgY29sb3I6ICRuYXZiYXItZGFyay1hY3RpdmUtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdmJhci1kaXZpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC4wNzUpO1xuICB9XG59XG4iLCIvL1xuLy8gQmFzZSBzdHlsZXNcbi8vXG5cbi5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogJGNhcmQtc3BhY2VyLXk7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWJnO1xuICBib3JkZXI6ICRjYXJkLWJvcmRlci13aWR0aCBzb2xpZCAkY2FyZC1ib3JkZXItY29sb3I7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGNhcmQtYm9yZGVyLXJhZGl1cyk7XG59XG5cbi5jYXJkLWJsb2NrIHtcbiAgcGFkZGluZzogJGNhcmQtc3BhY2VyLXg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luLWJvdHRvbTogJGNhcmQtc3BhY2VyLXk7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogLSgkY2FyZC1zcGFjZXIteSAvIDIpO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY2FyZC10ZXh0Omxhc3QtY2hpbGQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4vLyAuY2FyZC1hY3Rpb25zIHtcbi8vICAgcGFkZGluZzogJGNhcmQtc3BhY2VyLXkgJGNhcmQtc3BhY2VyLXg7XG5cbi8vICAgLmNhcmQtbGluayArIC5jYXJkLWxpbmsge1xuLy8gICAgIG1hcmdpbi1sZWZ0OiAkY2FyZC1zcGFjZXIteDtcbi8vICAgfVxuLy8gfVxuXG4uY2FyZC1saW5rIHtcbiAgQGluY2x1ZGUgaG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfVxuXG4gICsgLmNhcmQtbGluayB7XG4gICAgbWFyZ2luLWxlZnQ6ICRjYXJkLXNwYWNlci14O1xuICB9XG59XG5cbkBpZiAkZW5hYmxlLXJvdW5kZWQge1xuICAuY2FyZCB7XG4gICAgPiAubGlzdC1ncm91cDpmaXJzdC1jaGlsZCB7XG4gICAgICAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGNhcmQtYm9yZGVyLXJhZGl1cyAkY2FyZC1ib3JkZXItcmFkaXVzIDAgMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICA+IC5saXN0LWdyb3VwOmxhc3QtY2hpbGQge1xuICAgICAgLmxpc3QtZ3JvdXAtaXRlbTpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwICRjYXJkLWJvcmRlci1yYWRpdXMgJGNhcmQtYm9yZGVyLXJhZGl1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG4vL1xuLy8gT3B0aW9uYWwgdGV4dHVhbCBjYXBzXG4vL1xuXG4uY2FyZC1oZWFkZXIge1xuICBwYWRkaW5nOiAkY2FyZC1zcGFjZXIteSAkY2FyZC1zcGFjZXIteDtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNhcmQtY2FwLWJnO1xuICBib3JkZXItYm90dG9tOiAkY2FyZC1ib3JkZXItd2lkdGggc29saWQgJGNhcmQtYm9yZGVyLWNvbG9yO1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGNhcmQtYm9yZGVyLXJhZGl1cy1pbm5lciAkY2FyZC1ib3JkZXItcmFkaXVzLWlubmVyIDAgMCk7XG4gIH1cbn1cblxuLmNhcmQtZm9vdGVyIHtcbiAgcGFkZGluZzogJGNhcmQtc3BhY2VyLXkgJGNhcmQtc3BhY2VyLXg7XG4gIGJhY2tncm91bmQtY29sb3I6ICRjYXJkLWNhcC1iZztcbiAgYm9yZGVyLXRvcDogJGNhcmQtYm9yZGVyLXdpZHRoIHNvbGlkICRjYXJkLWJvcmRlci1jb2xvcjtcblxuICAmOmxhc3QtY2hpbGQge1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoMCAwICRjYXJkLWJvcmRlci1yYWRpdXMtaW5uZXIgJGNhcmQtYm9yZGVyLXJhZGl1cy1pbm5lcik7XG4gIH1cbn1cblxuXG4vL1xuLy8gQmFja2dyb3VuZCB2YXJpYXRpb25zXG4vL1xuXG4uY2FyZC1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgY2FyZC12YXJpYW50KCRicmFuZC1wcmltYXJ5LCAkYnJhbmQtcHJpbWFyeSk7XG59XG4uY2FyZC1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgY2FyZC12YXJpYW50KCRicmFuZC1zdWNjZXNzLCAkYnJhbmQtc3VjY2Vzcyk7XG59XG4uY2FyZC1pbmZvIHtcbiAgQGluY2x1ZGUgY2FyZC12YXJpYW50KCRicmFuZC1pbmZvLCAkYnJhbmQtaW5mbyk7XG59XG4uY2FyZC13YXJuaW5nIHtcbiAgQGluY2x1ZGUgY2FyZC12YXJpYW50KCRicmFuZC13YXJuaW5nLCAkYnJhbmQtd2FybmluZyk7XG59XG4uY2FyZC1kYW5nZXIge1xuICBAaW5jbHVkZSBjYXJkLXZhcmlhbnQoJGJyYW5kLWRhbmdlciwgJGJyYW5kLWRhbmdlcik7XG59XG5cbi8vIFJlbW92ZSBhbGwgYmFja2dyb3VuZHNcbi5jYXJkLXByaW1hcnktb3V0bGluZSB7XG4gIEBpbmNsdWRlIGNhcmQtb3V0bGluZS12YXJpYW50KCRidG4tcHJpbWFyeS1iZyk7XG59XG4uY2FyZC1zZWNvbmRhcnktb3V0bGluZSB7XG4gIEBpbmNsdWRlIGNhcmQtb3V0bGluZS12YXJpYW50KCRidG4tc2Vjb25kYXJ5LWJvcmRlcik7XG59XG4uY2FyZC1pbmZvLW91dGxpbmUge1xuICBAaW5jbHVkZSBjYXJkLW91dGxpbmUtdmFyaWFudCgkYnRuLWluZm8tYmcpO1xufVxuLmNhcmQtc3VjY2Vzcy1vdXRsaW5lIHtcbiAgQGluY2x1ZGUgY2FyZC1vdXRsaW5lLXZhcmlhbnQoJGJ0bi1zdWNjZXNzLWJnKTtcbn1cbi5jYXJkLXdhcm5pbmctb3V0bGluZSB7XG4gIEBpbmNsdWRlIGNhcmQtb3V0bGluZS12YXJpYW50KCRidG4td2FybmluZy1iZyk7XG59XG4uY2FyZC1kYW5nZXItb3V0bGluZSB7XG4gIEBpbmNsdWRlIGNhcmQtb3V0bGluZS12YXJpYW50KCRidG4tZGFuZ2VyLWJnKTtcbn1cblxuLy9cbi8vIEludmVyc2UgdGV4dCB3aXRoaW4gYSBjYXJkIGZvciB1c2Ugd2l0aCBkYXJrIGJhY2tncm91bmRzXG4vL1xuXG4uY2FyZC1pbnZlcnNlIHtcbiAgQGluY2x1ZGUgY2FyZC1pbnZlcnNlO1xufVxuXG4vL1xuLy8gQmxvY2txdW90ZVxuLy9cblxuLmNhcmQtYmxvY2txdW90ZSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlci1sZWZ0OiAwO1xufVxuXG4vLyBDYXJkIGltYWdlXG4uY2FyZC1pbWcge1xuICAvLyBtYXJnaW46IC0xLjMyNXJlbTtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cyguMjVyZW0pO1xufVxuLmNhcmQtaW1nLW92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcGFkZGluZzogMS4yNXJlbTtcbn1cblxuXG5cbi8vIENhcmQgaW1hZ2UgY2Fwc1xuLmNhcmQtaW1nLXRvcCB7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGNhcmQtYm9yZGVyLXJhZGl1cy1pbm5lciAkY2FyZC1ib3JkZXItcmFkaXVzLWlubmVyIDAgMCk7XG59XG4uY2FyZC1pbWctYm90dG9tIHtcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygwIDAgJGNhcmQtYm9yZGVyLXJhZGl1cy1pbm5lciAkY2FyZC1ib3JkZXItcmFkaXVzLWlubmVyKTtcbn1cblxuXG4vL1xuLy8gQ2FyZCBzZXRcbi8vXG5cbkBpZiAkZW5hYmxlLWZsZXgge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gICAgLmNhcmQtZGVjayB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgIG1hcmdpbi1yaWdodDogLS42MjVyZW07XG4gICAgICBtYXJnaW4tbGVmdDogLS42MjVyZW07XG5cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjYyNXJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC42MjVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG59IEBlbHNlIHtcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIC5jYXJkLWRlY2sge1xuICAgICAgZGlzcGxheTogdGFibGU7XG4gICAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgICAgYm9yZGVyLXNwYWNpbmc6IDEuMjVyZW0gMDtcblxuICAgICAgLmNhcmQge1xuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICB3aWR0aDogMSU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICB9XG4gICAgfVxuICAgIC5jYXJkLWRlY2std3JhcHBlciB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IC0xLjI1cmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0xLjI1cmVtO1xuICAgIH1cbiAgfVxufVxuXG4vL1xuLy8gQ2FyZCBncm91cHNcbi8vXG5cbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgLmNhcmQtZ3JvdXAge1xuICAgIEBpZiAkZW5hYmxlLWZsZXgge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gICAgfSBAZWxzZSB7XG4gICAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbiAgICB9XG5cbiAgICAuY2FyZCB7XG4gICAgICBAaWYgJGVuYWJsZS1mbGV4IHtcbiAgICAgICAgZmxleDogMSAwIDA7XG4gICAgICB9IEBlbHNlIHtcbiAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgIH1cblxuICAgICAgKyAuY2FyZCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIHJvdW5kZWQgY29ybmVyc1xuICAgICAgQGlmICRlbmFibGUtcm91bmRlZCB7XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1yaWdodC1yYWRpdXMoMCk7XG5cbiAgICAgICAgICAuY2FyZC1pbWctdG9wIHtcbiAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZC1pbWctYm90dG9tIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIEBpbmNsdWRlIGJvcmRlci1sZWZ0LXJhZGl1cygwKTtcblxuICAgICAgICAgIC5jYXJkLWltZy10b3Age1xuICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmQtaW1nLWJvdHRvbSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcblxuICAgICAgICAgIC5jYXJkLWltZy10b3AsXG4gICAgICAgICAgLmNhcmQtaW1nLWJvdHRvbSB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vXG4vLyBDYXJkXG4vL1xuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKHNtKSB7XG4gIC5jYXJkLWNvbHVtbnMge1xuICAgIGNvbHVtbi1jb3VudDogMztcbiAgICBjb2x1bW4tZ2FwOiAxLjI1cmVtO1xuXG4gICAgLmNhcmQge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgd2lkdGg6IDEwMCU7IC8vIERvbid0IGxldCB0aGVtIGV4Y2VlZCB0aGUgY29sdW1uIHdpZHRoXG4gICAgfVxuICB9XG59XG4iLCIuYnJlYWRjcnVtYiB7XG4gIHBhZGRpbmc6ICRicmVhZGNydW1iLXBhZGRpbmctdmVydGljYWwgJGJyZWFkY3J1bWItcGFkZGluZy1ob3Jpem9udGFsO1xuICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyLXk7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICRicmVhZGNydW1iLWJnO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCRib3JkZXItcmFkaXVzKTtcbiAgQGluY2x1ZGUgY2xlYXJmaXg7XG5cbiAgPiBsaSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG5cbiAgICArIGxpOjpiZWZvcmUge1xuICAgICAgcGFkZGluZy1yaWdodDogLjVyZW07XG4gICAgICBwYWRkaW5nLWxlZnQ6IC41cmVtO1xuICAgICAgY29sb3I6ICRicmVhZGNydW1iLWRpdmlkZXItY29sb3I7XG4gICAgICBjb250ZW50OiBcIiN7JGJyZWFkY3J1bWItZGl2aWRlcn1cIjtcbiAgICB9XG4gIH1cblxuICA+IC5hY3RpdmUge1xuICAgIGNvbG9yOiAkYnJlYWRjcnVtYi1hY3RpdmUtY29sb3I7XG4gIH1cbn1cbiIsIi5wYWdpbmF0aW9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG4gIG1hcmdpbi10b3A6ICRzcGFjZXIteTtcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlci15O1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCk7XG59XG5cbi5wYWdlLWl0ZW0ge1xuICBkaXNwbGF5OiBpbmxpbmU7IC8vIFJlbW92ZSBsaXN0LXN0eWxlIGFuZCBibG9jay1sZXZlbCBkZWZhdWx0c1xuXG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIC5wYWdlLWxpbmsge1xuICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICBAaW5jbHVkZSBib3JkZXItbGVmdC1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgIH1cbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIC5wYWdlLWxpbmsge1xuICAgICAgQGluY2x1ZGUgYm9yZGVyLXJpZ2h0LXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4gICAgfVxuICB9XG5cbiAgJi5hY3RpdmUgLnBhZ2UtbGluayB7XG4gICAgQGluY2x1ZGUgcGxhaW4taG92ZXItZm9jdXMge1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIGNvbG9yOiAkcGFnaW5hdGlvbi1hY3RpdmUtY29sb3I7XG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1hY3RpdmUtYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRwYWdpbmF0aW9uLWFjdGl2ZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgJi5kaXNhYmxlZCAucGFnZS1saW5rIHtcbiAgICBAaW5jbHVkZSBwbGFpbi1ob3Zlci1mb2N1cyB7XG4gICAgICBjb2xvcjogJHBhZ2luYXRpb24tZGlzYWJsZWQtY29sb3I7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1kaXNhYmxlZC1iZztcbiAgICAgIGJvcmRlci1jb2xvcjogJHBhZ2luYXRpb24tZGlzYWJsZWQtYm9yZGVyO1xuICAgIH1cbiAgfVxufVxuXG4ucGFnZS1saW5rIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbG9hdDogbGVmdDsgLy8gQ29sbGFwc2Ugd2hpdGUtc3BhY2VcbiAgcGFkZGluZzogJHBhZ2luYXRpb24tcGFkZGluZy15ICRwYWdpbmF0aW9uLXBhZGRpbmcteDtcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gIGNvbG9yOiAkcGFnaW5hdGlvbi1jb2xvcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnaW5hdGlvbi1iZztcbiAgYm9yZGVyOiAkcGFnaW5hdGlvbi1ib3JkZXItd2lkdGggc29saWQgJHBhZ2luYXRpb24tYm9yZGVyLWNvbG9yO1xuXG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICBjb2xvcjogJHBhZ2luYXRpb24taG92ZXItY29sb3I7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHBhZ2luYXRpb24taG92ZXItYmc7XG4gICAgYm9yZGVyLWNvbG9yOiAkcGFnaW5hdGlvbi1ob3Zlci1ib3JkZXI7XG4gIH1cbn1cblxuXG4vL1xuLy8gU2l6aW5nXG4vL1xuXG4ucGFnaW5hdGlvbi1sZyB7XG4gIEBpbmNsdWRlIHBhZ2luYXRpb24tc2l6ZSgkcGFnaW5hdGlvbi1wYWRkaW5nLXktbGcsICRwYWdpbmF0aW9uLXBhZGRpbmcteC1sZywgJGZvbnQtc2l6ZS1sZywgJGxpbmUtaGVpZ2h0LWxnLCAkYm9yZGVyLXJhZGl1cy1sZyk7XG59XG5cbi5wYWdpbmF0aW9uLXNtIHtcbiAgQGluY2x1ZGUgcGFnaW5hdGlvbi1zaXplKCRwYWdpbmF0aW9uLXBhZGRpbmcteS1zbSwgJHBhZ2luYXRpb24tcGFkZGluZy14LXNtLCAkZm9udC1zaXplLXNtLCAkbGluZS1oZWlnaHQtc20sICRib3JkZXItcmFkaXVzLXNtKTtcbn1cbiIsIi5wYWdlciB7XG4gIHBhZGRpbmctbGVmdDogMDtcbiAgbWFyZ2luLXRvcDogJHNwYWNlci15O1xuICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyLXk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcblxuICBsaSB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuXG4gICAgPiBhLFxuICAgID4gc3BhbiB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICBwYWRkaW5nOiA1cHggMTRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdlci1iZztcbiAgICAgIGJvcmRlcjogJHBhZ2VyLWJvcmRlci13aWR0aCBzb2xpZCAkcGFnZXItYm9yZGVyLWNvbG9yO1xuICAgICAgYm9yZGVyLXJhZGl1czogJHBhZ2VyLWJvcmRlci1yYWRpdXM7XG4gICAgfVxuXG4gICAgPiBhIHtcbiAgICAgIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZXItaG92ZXItYmc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRpc2FibGVkIHtcbiAgICA+IGEge1xuICAgICAgQGluY2x1ZGUgcGxhaW4taG92ZXItZm9jdXMge1xuICAgICAgICBjb2xvcjogJHBhZ2VyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWdlci1iZztcbiAgICAgIH1cbiAgICB9XG4gICAgPiBzcGFuIHtcbiAgICAgIGNvbG9yOiAkcGFnZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICBjdXJzb3I6ICRjdXJzb3ItZGlzYWJsZWQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGFnZXItYmc7XG4gICAgfVxuICB9XG59XG5cbi5wYWdlci1uZXh0IHtcbiAgPiBhLFxuICA+IHNwYW4ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxufVxuXG4ucGFnZXItcHJldiB7XG4gID4gYSxcbiAgPiBzcGFuIHtcbiAgICBmbG9hdDogbGVmdDtcbiAgfVxufVxuIiwiLy8gQmFzZSBjbGFzc1xuLy9cbi8vIFJlcXVpcmVzIG9uZSBvZiB0aGUgY29udGV4dHVhbCwgY29sb3IgbW9kaWZpZXIgY2xhc3NlcyBmb3IgYGNvbG9yYCBhbmRcbi8vIGBiYWNrZ3JvdW5kLWNvbG9yYC5cblxuLmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAuMjVlbSAuNGVtO1xuICBmb250LXNpemU6IDc1JTtcbiAgZm9udC13ZWlnaHQ6ICRsYWJlbC1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKCk7XG5cbiAgLy8gRW1wdHkgbGFiZWxzIGNvbGxhcHNlIGF1dG9tYXRpY2FsbHlcbiAgJjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4vLyBRdWljayBmaXggZm9yIGxhYmVscyBpbiBidXR0b25zXG4uYnRuIC5sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xufVxuXG4vLyBBZGQgaG92ZXIgZWZmZWN0cywgYnV0IG9ubHkgZm9yIGxpbmtzXG5hLmxhYmVsIHtcbiAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgIGNvbG9yOiAkbGFiZWwtbGluay1ob3Zlci1jb2xvcjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi8vIFBpbGwgbGFiZWxzXG4vL1xuLy8gTWFrZSB0aGVtIGV4dHJhIHJvdW5kZWQgd2l0aCBhIG1vZGlmaWVyIHRvIHJlcGxhY2UgdjMncyBiYWRnZXMuXG5cbi5sYWJlbC1waWxsIHtcbiAgcGFkZGluZy1yaWdodDogLjZlbTtcbiAgcGFkZGluZy1sZWZ0OiAuNmVtO1xuICAvLyBVc2UgYSBoaWdoZXIgdGhhbiBub3JtYWwgdmFsdWUgdG8gZW5zdXJlIGNvbXBsZXRlbHkgcm91bmRlZCBlZGdlcyB3aGVuXG4gIC8vIGN1c3RvbWl6aW5nIHBhZGRpbmcgb3IgZm9udC1zaXplIG9uIGxhYmVscy5cbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygxMHJlbSk7XG59XG5cbi8vIENvbG9yc1xuLy9cbi8vIENvbnRleHR1YWwgdmFyaWF0aW9ucyAobGlua2VkIGxhYmVscyBnZXQgZGFya2VyIG9uIDpob3ZlcikuXG5cbi5sYWJlbC1kZWZhdWx0IHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtZGVmYXVsdC1iZyk7XG59XG5cbi5sYWJlbC1wcmltYXJ5IHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtcHJpbWFyeS1iZyk7XG59XG5cbi5sYWJlbC1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtc3VjY2Vzcy1iZyk7XG59XG5cbi5sYWJlbC1pbmZvIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtaW5mby1iZyk7XG59XG5cbi5sYWJlbC13YXJuaW5nIHtcbiAgQGluY2x1ZGUgbGFiZWwtdmFyaWFudCgkbGFiZWwtd2FybmluZy1iZyk7XG59XG5cbi5sYWJlbC1kYW5nZXIge1xuICBAaW5jbHVkZSBsYWJlbC12YXJpYW50KCRsYWJlbC1kYW5nZXItYmcpO1xufVxuIiwiLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6ICRqdW1ib3Ryb24tcGFkZGluZyAoJGp1bWJvdHJvbi1wYWRkaW5nIC8gMik7XG4gIG1hcmdpbi1ib3R0b206ICRqdW1ib3Ryb24tcGFkZGluZztcbiAgYmFja2dyb3VuZC1jb2xvcjogJGp1bWJvdHJvbi1iZztcbiAgQGluY2x1ZGUgYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cy1sZyk7XG5cbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cChzbSkge1xuICAgIHBhZGRpbmc6ICgkanVtYm90cm9uLXBhZGRpbmcgKiAyKSAkanVtYm90cm9uLXBhZGRpbmc7XG4gIH1cbn1cblxuLmp1bWJvdHJvbi1ociB7XG4gIGJvcmRlci10b3AtY29sb3I6IGRhcmtlbigkanVtYm90cm9uLWJnLCAxMCUpO1xufVxuXG4uanVtYm90cm9uLWZsdWlkIHtcbiAgcGFkZGluZy1yaWdodDogMDtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBAaW5jbHVkZSBib3JkZXItcmFkaXVzKDApO1xufVxuIiwiLy9cbi8vIEJhc2Ugc3R5bGVzXG4vL1xuXG4uYWxlcnQge1xuICBwYWRkaW5nOiAkYWxlcnQtcGFkZGluZztcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlci15O1xuICBib3JkZXI6ICRhbGVydC1ib3JkZXItd2lkdGggc29saWQgdHJhbnNwYXJlbnQ7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGFsZXJ0LWJvcmRlci1yYWRpdXMpO1xuXG4gIC8vIEltcHJvdmUgYWxpZ25tZW50IGFuZCBzcGFjaW5nIG9mIGlubmVyIGNvbnRlbnRcbiAgPiBwLFxuICA+IHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gID4gcCArIHAge1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgfVxufVxuXG4vLyBIZWFkaW5ncyBmb3IgbGFyZ2VyIGFsZXJ0c1xuLmFsZXJ0LWhlYWRpbmcge1xuICAvLyBTcGVjaWZpZWQgdG8gcHJldmVudCBjb25mbGljdHMgb2YgY2hhbmdpbmcgJGhlYWRpbmdzLWNvbG9yXG4gIGNvbG9yOiBpbmhlcml0O1xufVxuXG4vLyBQcm92aWRlIGNsYXNzIGZvciBsaW5rcyB0aGF0IG1hdGNoIGFsZXJ0c1xuLmFsZXJ0LWxpbmsge1xuICBmb250LXdlaWdodDogJGFsZXJ0LWxpbmstZm9udC13ZWlnaHQ7XG59XG5cblxuLy8gRGlzbWlzc2libGUgYWxlcnRzXG4vL1xuLy8gRXhwYW5kIHRoZSByaWdodCBwYWRkaW5nIGFuZCBhY2NvdW50IGZvciB0aGUgY2xvc2UgYnV0dG9uJ3MgcG9zaXRpb25pbmcuXG5cbi5hbGVydC1kaXNtaXNzaWJsZSB7XG4gIHBhZGRpbmctcmlnaHQ6ICgkYWxlcnQtcGFkZGluZyArIDIwKTtcblxuICAvLyBBZGp1c3QgY2xvc2UgbGluayBwb3NpdGlvblxuICAuY2xvc2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC0ycHg7XG4gICAgcmlnaHQ6IC0yMXB4O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG59XG5cblxuLy8gQWx0ZXJuYXRlIHN0eWxlc1xuLy9cbi8vIEdlbmVyYXRlIGNvbnRleHR1YWwgbW9kaWZpZXIgY2xhc3NlcyBmb3IgY29sb3JpemluZyB0aGUgYWxlcnQuXG5cbi5hbGVydC1zdWNjZXNzIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtc3VjY2Vzcy1iZywgJGFsZXJ0LXN1Y2Nlc3MtYm9yZGVyLCAkYWxlcnQtc3VjY2Vzcy10ZXh0KTtcbn1cbi5hbGVydC1pbmZvIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtaW5mby1iZywgJGFsZXJ0LWluZm8tYm9yZGVyLCAkYWxlcnQtaW5mby10ZXh0KTtcbn1cbi5hbGVydC13YXJuaW5nIHtcbiAgQGluY2x1ZGUgYWxlcnQtdmFyaWFudCgkYWxlcnQtd2FybmluZy1iZywgJGFsZXJ0LXdhcm5pbmctYm9yZGVyLCAkYWxlcnQtd2FybmluZy10ZXh0KTtcbn1cbi5hbGVydC1kYW5nZXIge1xuICBAaW5jbHVkZSBhbGVydC12YXJpYW50KCRhbGVydC1kYW5nZXItYmcsICRhbGVydC1kYW5nZXItYm9yZGVyLCAkYWxlcnQtZGFuZ2VyLXRleHQpO1xufVxuIiwiLy9cbi8vIFByb2dyZXNzIGFuaW1hdGlvbnNcbi8vXG5cbkBrZXlmcmFtZXMgcHJvZ3Jlc3MtYmFyLXN0cmlwZXMge1xuICBmcm9tICB7IGJhY2tncm91bmQtcG9zaXRpb246ICRzcGFjZXIteSAwOyB9XG4gIHRvICAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwOyB9XG59XG5cblxuLy9cbi8vIEJhc2ljIHByb2dyZXNzIGJhclxuLy9cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6ICRzcGFjZXIteTsgLy8gdG9kbzogbWFrZSBhIG5ldyB2YXIgZm9yIHRoaXNcbiAgbWFyZ2luLWJvdHRvbTogJHNwYWNlci15O1xufVxuLnByb2dyZXNzW3ZhbHVlXSB7XG4gIC8vIElFMTAgdXNlcyBgY29sb3JgIHRvIHNldCB0aGUgYmFyIGJhY2tncm91bmQtY29sb3JcbiAgY29sb3I6ICMwMDc0ZDk7XG4gIC8vIFJlbW92ZSBGaXJlZm94IGFuZCBPcGVyYSBib3JkZXJcbiAgYm9yZGVyOiAwO1xuICAvLyBSZXNldCB0aGUgZGVmYXVsdCBhcHBlYXJhbmNlXG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG4ucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICBAaW5jbHVkZSBib3gtc2hhZG93KGluc2V0IDAgLjFyZW0gLjFyZW0gcmdiYSgwLDAsMCwuMSkpO1xufVxuLnByb2dyZXNzW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZTo6YmVmb3JlIHtcbiAgY29udGVudDogYXR0cih2YWx1ZSk7XG59XG4ucHJvZ3Jlc3NbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzRkOTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xufVxuLnByb2dyZXNzW3ZhbHVlPVwiMTAwXCJdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG59XG5cbi8vIEZpcmVmb3ggc3R5bGVzIG11c3QgYmUgZW50aXJlbHkgc2VwYXJhdGUgb3IgaXQgYnVzdHMgV2Via2l0IHN0eWxlcy5cbi8vXG4vLyBDb21tZW50ZWQgb3V0IGZvciBub3cgYmVjYXVzZSBsaW50ZXIuXG4vL1xuLy8gJC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbi8vICAgLnByb2dyZXNzW3ZhbHVlXSB7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbi8vICAgICAuYm9yZGVyLXJhZGl1cygkYm9yZGVyLXJhZGl1cyk7XG4vLyAgICAgLmJveC1zaGFkb3coaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKDAsMCwwLC4xKSk7XG4vLyAgIH1cbi8vICAgLnByb2dyZXNzW3ZhbHVlXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDk7XG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4vLyAgIH1cbi8vICAgLnByb2dyZXNzW3ZhbHVlPVwiMFwiXTo6LW1vei1wcm9ncmVzcy1iYXIge1xuLy8gICAgIGNvbG9yOiAkZ3JheS1saWdodDtcbi8vICAgICBtaW4td2lkdGg6IDJyZW07XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbi8vICAgfVxuLy8gICAucHJvZ3Jlc3NbdmFsdWU9XCIxMDBcIl06Oi1tb3otcHJvZ3Jlc3MtYmFyIHtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4vLyAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuLy8gICB9XG4vLyB9XG5cbi8vIElFOSBoYWNrcyB0byBhY2NvbXBhbnkgY3VzdG9tIG1hcmt1cC4gV2UgZG9uJ3QgbmVlZCB0byBzY29wZSB0aGlzIHZpYSBtZWRpYSBxdWVyaWVzLCBidXQgSSBmZWVsIGJldHRlciBkb2luZyBpdCBhbnl3YXkuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjBcXDApIHtcbiAgLnByb2dyZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3coaW5zZXQgMCAuMXJlbSAuMXJlbSByZ2JhKDAsMCwwLC4xKSk7XG4gIH1cbiAgLnByb2dyZXNzLWJhciB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGhlaWdodDogJHNwYWNlci15O1xuICAgIHRleHQtaW5kZW50OiAtOTk5cmVtOyAvLyBTaW11bGF0ZSBoaWRpbmcgb2YgdmFsdWUgYXMgaW4gbmF0aXZlIGA8cHJvZ3Jlc3M+YFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDc0ZDk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gIH1cbiAgLnByb2dyZXNzW3dpZHRoXj1cIjBcIl0ge1xuICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICBjb2xvcjogJGdyYXktbGlnaHQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcbiAgfVxuICAucHJvZ3Jlc3Nbd2lkdGg9XCIxMDAlXCJdIHtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJGJvcmRlci1yYWRpdXM7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xuICB9XG59XG5cblxuLy9cbi8vIFN0cmlwZWRcbi8vXG5cbi5wcm9ncmVzcy1zdHJpcGVkW3ZhbHVlXTo6LXdlYmtpdC1wcm9ncmVzcy12YWx1ZSB7XG4gIEBpbmNsdWRlIGdyYWRpZW50LXN0cmlwZWQoKTtcbiAgYmFja2dyb3VuZC1zaXplOiAkc3BhY2VyLXkgJHNwYWNlci15O1xufVxuLnByb2dyZXNzLXN0cmlwZWRbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIEBpbmNsdWRlIGdyYWRpZW50LXN0cmlwZWQoKTtcbiAgYmFja2dyb3VuZC1zaXplOiAkc3BhY2VyLXkgJHNwYWNlci15O1xufVxuLy8gSUU5XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjBcXDApIHtcbiAgLnByb2dyZXNzLWJhci1zdHJpcGVkIHtcbiAgICBAaW5jbHVkZSBncmFkaWVudC1zdHJpcGVkKCk7XG4gICAgYmFja2dyb3VuZC1zaXplOiAkc3BhY2VyLXkgJHNwYWNlci15O1xuICB9XG59XG5cblxuLy9cbi8vIEFuaW1hdGVkXG4vL1xuXG4ucHJvZ3Jlc3MtYW5pbWF0ZWRbdmFsdWVdOjotd2Via2l0LXByb2dyZXNzLXZhbHVlIHtcbiAgYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG59XG4ucHJvZ3Jlc3MtYW5pbWF0ZWRbdmFsdWVdOjotbW96LXByb2dyZXNzLWJhciB7XG4gIGFuaW1hdGlvbjogcHJvZ3Jlc3MtYmFyLXN0cmlwZXMgMnMgbGluZWFyIGluZmluaXRlO1xufVxuLy8gSUU5XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjBcXDApIHtcbiAgLnByb2dyZXNzLWFuaW1hdGVkIC5wcm9ncmVzcy1iYXItc3RyaXBlZCB7XG4gICAgYW5pbWF0aW9uOiBwcm9ncmVzcy1iYXItc3RyaXBlcyAycyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbn1cblxuXG4vL1xuLy8gVmFyaWF0aW9uc1xuLy9cblxuLnByb2dyZXNzLXN1Y2Nlc3Mge1xuICBAaW5jbHVkZSBwcm9ncmVzcy12YXJpYW50KCRwcm9ncmVzcy1iYXItc3VjY2Vzcy1iZyk7XG59XG4ucHJvZ3Jlc3MtaW5mbyB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLXZhcmlhbnQoJHByb2dyZXNzLWJhci1pbmZvLWJnKTtcbn1cbi5wcm9ncmVzcy13YXJuaW5nIHtcbiAgQGluY2x1ZGUgcHJvZ3Jlc3MtdmFyaWFudCgkcHJvZ3Jlc3MtYmFyLXdhcm5pbmctYmcpO1xufVxuLnByb2dyZXNzLWRhbmdlciB7XG4gIEBpbmNsdWRlIHByb2dyZXNzLXZhcmlhbnQoJHByb2dyZXNzLWJhci1kYW5nZXItYmcpO1xufVxuIiwiQGlmICRlbmFibGUtZmxleCB7XG4gIC5tZWRpYSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAkc3BhY2VyO1xuICB9XG4gIC5tZWRpYS1ib2R5IHtcbiAgICBmbGV4OiAxO1xuICB9XG4gIC5tZWRpYS1taWRkbGUge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgfVxuICAubWVkaWEtYm90dG9tIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgfVxufSBAZWxzZSB7XG4gIC5tZWRpYSB7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICB9XG4gIH1cbiAgLm1lZGlhLFxuICAubWVkaWEtYm9keSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6b29tOiAxO1xuICB9XG4gIC5tZWRpYS1ib2R5IHtcbiAgICB3aWR0aDogMTAwMDBweDtcbiAgfVxuICAubWVkaWEtbGVmdCxcbiAgLm1lZGlhLXJpZ2h0LFxuICAubWVkaWEtYm9keSB7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICB9XG4gIC5tZWRpYS1taWRkbGUge1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIH1cbiAgLm1lZGlhLWJvdHRvbSB7XG4gICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgfVxufVxuXG5cbi8vXG4vLyBJbWFnZXMvZWxlbWVudHMgYXMgdGhlIG1lZGlhIGFuY2hvclxuLy9cblxuLm1lZGlhLW9iamVjdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC8vIEZpeCBjb2xsYXBzZSBpbiB3ZWJraXQgZnJvbSBtYXgtd2lkdGg6IDEwMCUgYW5kIGRpc3BsYXk6IHRhYmxlLWNlbGwuXG4gICYuaW1nLXRodW1ibmFpbCB7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICB9XG59XG5cblxuLy9cbi8vIEFsaWdubWVudFxuLy9cblxuLm1lZGlhLXJpZ2h0IHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4ubWVkaWEtbGVmdCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cblxuLy9cbi8vIEhlYWRpbmdzXG4vL1xuXG4ubWVkaWEtaGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuXG4vL1xuLy8gTWVkaWEgbGlzdCB2YXJpYXRpb25cbi8vXG5cbi5tZWRpYS1saXN0IHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuIiwiLy8gQmFzZSBjbGFzc1xuLy9cbi8vIEVhc2lseSB1c2FibGUgb24gPHVsPiwgPG9sPiwgb3IgPGRpdj4uXG5cbi5saXN0LWdyb3VwIHtcbiAgLy8gTm8gbmVlZCB0byBzZXQgbGlzdC1zdHlsZTogbm9uZTsgc2luY2UgLmxpc3QtZ3JvdXAtaXRlbSBpcyBibG9jayBsZXZlbFxuICBwYWRkaW5nLWxlZnQ6IDA7IC8vIHJlc2V0IHBhZGRpbmcgYmVjYXVzZSB1bCBhbmQgb2xcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuXG4vLyBJbmRpdmlkdWFsIGxpc3QgaXRlbXNcbi8vXG4vLyBVc2Ugb24gYGxpYHMgb3IgYGRpdmBzIHdpdGhpbiB0aGUgYC5saXN0LWdyb3VwYCBwYXJlbnQuXG5cbi5saXN0LWdyb3VwLWl0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcbiAgLy8gUGxhY2UgdGhlIGJvcmRlciBvbiB0aGUgbGlzdCBpdGVtcyBhbmQgbmVnYXRpdmUgbWFyZ2luIHVwIGZvciBiZXR0ZXIgc3R5bGluZ1xuICBtYXJnaW4tYm90dG9tOiAtJGxpc3QtZ3JvdXAtYm9yZGVyLXdpZHRoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1iZztcbiAgYm9yZGVyOiAkbGlzdC1ncm91cC1ib3JkZXItd2lkdGggc29saWQgJGxpc3QtZ3JvdXAtYm9yZGVyLWNvbG9yO1xuXG4gIC8vIFJvdW5kIHRoZSBmaXJzdCBhbmQgbGFzdCBpdGVtc1xuICAmOmZpcnN0LWNoaWxkIHtcbiAgICBAaW5jbHVkZSBib3JkZXItdG9wLXJhZGl1cygkbGlzdC1ncm91cC1ib3JkZXItcmFkaXVzKTtcbiAgfVxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgQGluY2x1ZGUgYm9yZGVyLWJvdHRvbS1yYWRpdXMoJGxpc3QtZ3JvdXAtYm9yZGVyLXJhZGl1cyk7XG4gIH1cbn1cblxuLmxpc3QtZ3JvdXAtZmx1c2gge1xuICAubGlzdC1ncm91cC1pdGVtIHtcbiAgICBib3JkZXItd2lkdGg6ICRsaXN0LWdyb3VwLWJvcmRlci13aWR0aCAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gIH1cblxuICAmOmZpcnN0LWNoaWxkIHtcbiAgICAubGlzdC1ncm91cC1pdGVtOmZpcnN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgfVxuICB9XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICAubGlzdC1ncm91cC1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cblxuXG4vLyBJbnRlcmFjdGl2ZSBsaXN0IGl0ZW1zXG4vL1xuLy8gVXNlIGFuY2hvciBvciBidXR0b24gZWxlbWVudHMgaW5zdGVhZCBvZiBgbGlgcyBvciBgZGl2YHMgdG8gY3JlYXRlIGludGVyYWN0aXZlXG4vLyBsaXN0IGl0ZW1zLiBJbmNsdWRlcyBhbiBleHRyYSBgLmFjdGl2ZWAgbW9kaWZpZXIgY2xhc3MgZm9yIHNlbGVjdGVkIGl0ZW1zLlxuXG5hLmxpc3QtZ3JvdXAtaXRlbSxcbmJ1dHRvbi5saXN0LWdyb3VwLWl0ZW0ge1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6ICRsaXN0LWdyb3VwLWxpbmstY29sb3I7XG4gIHRleHQtYWxpZ246IGluaGVyaXQ7XG5cbiAgLmxpc3QtZ3JvdXAtaXRlbS1oZWFkaW5nIHtcbiAgICBjb2xvcjogJGxpc3QtZ3JvdXAtbGluay1oZWFkaW5nLWNvbG9yO1xuICB9XG5cbiAgLy8gSG92ZXIgc3RhdGVcbiAgQGluY2x1ZGUgaG92ZXItZm9jdXMge1xuICAgIGNvbG9yOiAkbGlzdC1ncm91cC1saW5rLWhvdmVyLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1ob3Zlci1iZztcbiAgfVxufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgLy8gRGlzYWJsZWQgc3RhdGVcbiAgJi5kaXNhYmxlZCB7XG4gICAgQGluY2x1ZGUgcGxhaW4taG92ZXItZm9jdXMge1xuICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWRpc2FibGVkLWNvbG9yO1xuICAgICAgY3Vyc29yOiAkY3Vyc29yLWRpc2FibGVkO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpc3QtZ3JvdXAtZGlzYWJsZWQtYmc7XG5cbiAgICAgIC8vIEZvcmNlIGNvbG9yIHRvIGluaGVyaXQgZm9yIGN1c3RvbSBjb250ZW50XG4gICAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIC5saXN0LWdyb3VwLWl0ZW0tdGV4dCB7XG4gICAgICAgIGNvbG9yOiAkbGlzdC1ncm91cC1kaXNhYmxlZC10ZXh0LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2ZSBjbGFzcyBvbiBpdGVtIGl0c2VsZiwgbm90IHBhcmVudFxuICAmLmFjdGl2ZSB7XG4gICAgQGluY2x1ZGUgcGxhaW4taG92ZXItZm9jdXMge1xuICAgICAgei1pbmRleDogMjsgLy8gUGxhY2UgYWN0aXZlIGl0ZW1zIGFib3ZlIHRoZWlyIHNpYmxpbmdzIGZvciBwcm9wZXIgYm9yZGVyIHN0eWxpbmdcbiAgICAgIGNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlzdC1ncm91cC1hY3RpdmUtYmc7XG4gICAgICBib3JkZXItY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS1ib3JkZXI7XG5cbiAgICAgIC8vIEZvcmNlIGNvbG9yIHRvIGluaGVyaXQgZm9yIGN1c3RvbSBjb250ZW50XG4gICAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcsXG4gICAgICAubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcgPiBzbWFsbCxcbiAgICAgIC5saXN0LWdyb3VwLWl0ZW0taGVhZGluZyA+IC5zbWFsbCB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgICAgLmxpc3QtZ3JvdXAtaXRlbS10ZXh0IHtcbiAgICAgICAgY29sb3I6ICRsaXN0LWdyb3VwLWFjdGl2ZS10ZXh0LWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbi8vIENvbnRleHR1YWwgdmFyaWFudHNcbi8vXG4vLyBBZGQgbW9kaWZpZXIgY2xhc3NlcyB0byBjaGFuZ2UgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvciBvbiBpbmRpdmlkdWFsIGl0ZW1zLlxuLy8gT3JnYW5pemF0aW9uYWxseSwgdGhpcyBtdXN0IGNvbWUgYWZ0ZXIgdGhlIGA6aG92ZXJgIHN0YXRlcy5cblxuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoc3VjY2VzcywgJHN0YXRlLXN1Y2Nlc3MtYmcsICRzdGF0ZS1zdWNjZXNzLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoaW5mbywgJHN0YXRlLWluZm8tYmcsICRzdGF0ZS1pbmZvLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQod2FybmluZywgJHN0YXRlLXdhcm5pbmctYmcsICRzdGF0ZS13YXJuaW5nLXRleHQpO1xuQGluY2x1ZGUgbGlzdC1ncm91cC1pdGVtLXZhcmlhbnQoZGFuZ2VyLCAkc3RhdGUtZGFuZ2VyLWJnLCAkc3RhdGUtZGFuZ2VyLXRleHQpO1xuXG5cbi8vIEN1c3RvbSBjb250ZW50IG9wdGlvbnNcbi8vXG4vLyBFeHRyYSBjbGFzc2VzIGZvciBjcmVhdGluZyB3ZWxsLWZvcm1hdHRlZCBjb250ZW50IHdpdGhpbiBgLmxpc3QtZ3JvdXAtaXRlbWBzLlxuXG4ubGlzdC1ncm91cC1pdGVtLWhlYWRpbmcge1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubGlzdC1ncm91cC1pdGVtLXRleHQge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBsaW5lLWhlaWdodDogMS4zO1xufVxuIiwiLy8gQ3JlZGl0OiBOaWNvbGFzIEdhbGxhZ2hlciBhbmQgU1VJVCBDU1MuXG5cbi5lbWJlZC1yZXNwb25zaXZlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAwO1xuICBwYWRkaW5nOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIC5lbWJlZC1yZXNwb25zaXZlLWl0ZW0sXG4gIGlmcmFtZSxcbiAgZW1iZWQsXG4gIG9iamVjdCxcbiAgdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogMDtcbiAgfVxufVxuXG4uZW1iZWQtcmVzcG9uc2l2ZS0yMWJ5OSB7XG4gIHBhZGRpbmctYm90dG9tOiBwZXJjZW50YWdlKDkgLyAyMSk7XG59XG5cbi5lbWJlZC1yZXNwb25zaXZlLTE2Ynk5IHtcbiAgcGFkZGluZy1ib3R0b206IHBlcmNlbnRhZ2UoOSAvIDE2KTtcbn1cblxuLmVtYmVkLXJlc3BvbnNpdmUtNGJ5MyB7XG4gIHBhZGRpbmctYm90dG9tOiBwZXJjZW50YWdlKDMgLyA0KTtcbn1cblxuLmVtYmVkLXJlc3BvbnNpdmUtMWJ5MSB7XG4gIHBhZGRpbmctYm90dG9tOiBwZXJjZW50YWdlKDEgLyAxKTtcbn1cbiIsIi5jbG9zZSB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAoJGZvbnQtc2l6ZS1iYXNlICogMS41KTtcbiAgZm9udC13ZWlnaHQ6ICRjbG9zZS1mb250LXdlaWdodDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGNvbG9yOiAkY2xvc2UtY29sb3I7XG4gIHRleHQtc2hhZG93OiAkY2xvc2UtdGV4dC1zaGFkb3c7XG4gIG9wYWNpdHk6IC4yO1xuXG4gIEBpbmNsdWRlIGhvdmVyLWZvY3VzIHtcbiAgICBjb2xvcjogJGNsb3NlLWNvbG9yO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogLjU7XG4gIH1cbn1cblxuLy8gQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuLy8gaU9TIHJlcXVpcmVzIHRoZSBidXR0b24gZWxlbWVudCBpbnN0ZWFkIG9mIGFuIGFuY2hvciB0YWcuXG4vLyBJZiB5b3Ugd2FudCB0aGUgYW5jaG9yIHZlcnNpb24sIGl0IHJlcXVpcmVzIGBocmVmPVwiI1wiYC5cbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9FdmVudHMvY2xpY2sjU2FmYXJpX01vYmlsZVxuYnV0dG9uLmNsb3NlIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4iLCIvLyAubW9kYWwtb3BlbiAgICAgIC0gYm9keSBjbGFzcyBmb3Iga2lsbGluZyB0aGUgc2Nyb2xsXG4vLyAubW9kYWwgICAgICAgICAgIC0gY29udGFpbmVyIHRvIHNjcm9sbCB3aXRoaW5cbi8vIC5tb2RhbC1kaWFsb2cgICAgLSBwb3NpdGlvbmluZyBzaGVsbCBmb3IgdGhlIGFjdHVhbCBtb2RhbFxuLy8gLm1vZGFsLWNvbnRlbnQgICAtIGFjdHVhbCBtb2RhbCB3LyBiZyBhbmQgY29ybmVycyBhbmQgc2hpdFxuXG5cbi8vIEtpbGwgdGhlIHNjcm9sbCBvbiB0aGUgYm9keVxuLm1vZGFsLW9wZW4ge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4vLyBDb250YWluZXIgdGhhdCB0aGUgbW9kYWwgc2Nyb2xscyB3aXRoaW5cbi5tb2RhbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAkemluZGV4LW1vZGFsO1xuICBkaXNwbGF5OiBub25lO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAvLyBQcmV2ZW50IENocm9tZSBvbiBXaW5kb3dzIGZyb20gYWRkaW5nIGEgZm9jdXMgb3V0bGluZS4gRm9yIGRldGFpbHMsIHNlZVxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvcHVsbC8xMDk1MS5cbiAgb3V0bGluZTogMDtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gIC8vIFdoZW4gZmFkaW5nIGluIHRoZSBtb2RhbCwgYW5pbWF0ZSBpdCB0byBzbGlkZSBkb3duXG4gICYuZmFkZSAubW9kYWwtZGlhbG9nIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0yNSUpO1xuICB9XG4gICYuaW4gLm1vZGFsLWRpYWxvZyB7IHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApOyB9XG59XG4ubW9kYWwtb3BlbiAubW9kYWwge1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi8vIFNoZWxsIGRpdiB0byBwb3NpdGlvbiB0aGUgbW9kYWwgd2l0aCBib3R0b20gcGFkZGluZ1xuLm1vZGFsLWRpYWxvZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IGF1dG87XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLy8gQWN0dWFsIG1vZGFsXG4ubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1vZGFsLWNvbnRlbnQtYmc7XG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XG4gIGJvcmRlcjogMXB4IHNvbGlkICRtb2RhbC1jb250ZW50LWJvcmRlci1jb2xvcjtcbiAgYm9yZGVyLXJhZGl1czogJGJvcmRlci1yYWRpdXMtbGc7XG4gIEBpbmNsdWRlIGJveC1zaGFkb3coMCAzcHggOXB4IHJnYmEoMCwwLDAsLjUpKTtcbiAgLy8gUmVtb3ZlIGZvY3VzIG91dGxpbmUgZnJvbSBvcGVuZWQgbW9kYWxcbiAgb3V0bGluZTogMDtcbn1cblxuLy8gTW9kYWwgYmFja2dyb3VuZFxuLm1vZGFsLWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6ICR6aW5kZXgtbW9kYWwtYmc7XG4gIGJhY2tncm91bmQtY29sb3I6ICRtb2RhbC1iYWNrZHJvcC1iZztcblxuICAvLyBGYWRlIGZvciBiYWNrZHJvcFxuICAmLmZhZGUgeyBvcGFjaXR5OiAwOyB9XG4gICYuaW4geyBvcGFjaXR5OiAkbW9kYWwtYmFja2Ryb3Atb3BhY2l0eTsgfVxufVxuXG4vLyBNb2RhbCBoZWFkZXJcbi8vIFRvcCBzZWN0aW9uIG9mIHRoZSBtb2RhbCB3LyB0aXRsZSBhbmQgZGlzbWlzc1xuLm1vZGFsLWhlYWRlciB7XG4gIHBhZGRpbmc6ICRtb2RhbC10aXRsZS1wYWRkaW5nO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJG1vZGFsLWhlYWRlci1ib3JkZXItY29sb3I7XG4gIEBpbmNsdWRlIGNsZWFyZml4O1xufVxuLy8gQ2xvc2UgaWNvblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW4tdG9wOiAtMnB4O1xufVxuXG4vLyBUaXRsZSB0ZXh0IHdpdGhpbiBoZWFkZXJcbi5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6ICRtb2RhbC10aXRsZS1saW5lLWhlaWdodDtcbn1cblxuLy8gTW9kYWwgYm9keVxuLy8gV2hlcmUgYWxsIG1vZGFsIGNvbnRlbnQgcmVzaWRlcyAoc2libGluZyBvZiAubW9kYWwtaGVhZGVyIGFuZCAubW9kYWwtZm9vdGVyKVxuLm1vZGFsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6ICRtb2RhbC1pbm5lci1wYWRkaW5nO1xufVxuXG4vLyBGb290ZXIgKGZvciBhY3Rpb25zKVxuLm1vZGFsLWZvb3RlciB7XG4gIHBhZGRpbmc6ICRtb2RhbC1pbm5lci1wYWRkaW5nO1xuICB0ZXh0LWFsaWduOiByaWdodDsgLy8gcmlnaHQgYWxpZ24gYnV0dG9uc1xuICBib3JkZXItdG9wOiAxcHggc29saWQgJG1vZGFsLWZvb3Rlci1ib3JkZXItY29sb3I7XG4gIEBpbmNsdWRlIGNsZWFyZml4KCk7IC8vIGNsZWFyIGl0IGluIGNhc2UgZm9sa3MgdXNlIC5wdWxsLSogY2xhc3NlcyBvbiBidXR0b25zXG5cbiAgLy8gUHJvcGVybHkgc3BhY2Ugb3V0IGJ1dHRvbnNcbiAgLmJ0biArIC5idG4ge1xuICAgIG1hcmdpbi1ib3R0b206IDA7IC8vIGFjY291bnQgZm9yIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0gd2hpY2ggZ2V0cyB0aGUgYm90dG9tIG1hcmdpbiBsaWtlIGFsbCBvdGhlciBpbnB1dHNcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIC8vIGJ1dCBvdmVycmlkZSB0aGF0IGZvciBidXR0b24gZ3JvdXBzXG4gIC5idG4tZ3JvdXAgLmJ0biArIC5idG4ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xuICB9XG4gIC8vIGFuZCBvdmVycmlkZSBpdCBmb3IgYmxvY2sgYnV0dG9ucyBhcyB3ZWxsXG4gIC5idG4tYmxvY2sgKyAuYnRuLWJsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuXG4vLyBNZWFzdXJlIHNjcm9sbGJhciB3aWR0aCBmb3IgcGFkZGluZyBib2R5IGR1cmluZyBtb2RhbCBzaG93L2hpZGVcbi5tb2RhbC1zY3JvbGxiYXItbWVhc3VyZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtOTk5OXB4O1xuICB3aWR0aDogNTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBvdmVyZmxvdzogc2Nyb2xsO1xufVxuXG4vLyBTY2FsZSB1cCB0aGUgbW9kYWxcbkBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoc20pIHtcbiAgLy8gQXV0b21hdGljYWxseSBzZXQgbW9kYWwncyB3aWR0aCBmb3IgbGFyZ2VyIHZpZXdwb3J0c1xuICAubW9kYWwtZGlhbG9nIHtcbiAgICB3aWR0aDogJG1vZGFsLW1kO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICB9XG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93KDAgNXB4IDE1cHggcmdiYSgwLDAsMCwuNSkpO1xuICB9XG5cbiAgLy8gTW9kYWwgc2l6ZXNcbiAgLm1vZGFsLXNtIHsgd2lkdGg6ICRtb2RhbC1zbTsgfVxufVxuXG5AaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKG1kKSB7XG4gIC5tb2RhbC1sZyB7IHdpZHRoOiAkbW9kYWwtbGc7IH1cbn1cbiIsIi8vIEJhc2UgY2xhc3Ncbi50b29sdGlwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAkemluZGV4LXRvb2x0aXA7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvLyBPdXIgcGFyZW50IGVsZW1lbnQgY2FuIGJlIGFyYml0cmFyeSBzaW5jZSB0b29sdGlwcyBhcmUgYnkgZGVmYXVsdCBpbnNlcnRlZCBhcyBhIHNpYmxpbmcgb2YgdGhlaXIgdGFyZ2V0IGVsZW1lbnQuXG4gIC8vIFNvIHJlc2V0IG91ciBmb250IGFuZCB0ZXh0IHByb3BlcnRpZXMgdG8gYXZvaWQgaW5oZXJpdGluZyB3ZWlyZCB2YWx1ZXMuXG4gIEBpbmNsdWRlIHJlc2V0LXRleHQoKTtcbiAgZm9udC1zaXplOiAkZm9udC1zaXplLXNtO1xuICBvcGFjaXR5OiAwO1xuXG4gICYuaW4geyBvcGFjaXR5OiAkdG9vbHRpcC1vcGFjaXR5OyB9XG5cbiAgJi50b29sdGlwLXRvcCxcbiAgJi5icy10ZXRoZXItZWxlbWVudC1hdHRhY2hlZC1ib3R0b20ge1xuICAgIHBhZGRpbmc6ICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgbWFyZ2luLXRvcDogLTNweDtcblxuICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItd2lkdGg6ICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoIDA7XG4gICAgICBib3JkZXItdG9wLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi50b29sdGlwLXJpZ2h0LFxuICAmLmJzLXRldGhlci1lbGVtZW50LWF0dGFjaGVkLWxlZnQge1xuICAgIHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWxlZnQ6IDNweDtcblxuICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIG1hcmdpbi10b3A6IC0kdG9vbHRpcC1hcnJvdy13aWR0aDtcbiAgICAgIGJvcmRlci13aWR0aDogJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGggMDtcbiAgICAgIGJvcmRlci1yaWdodC1jb2xvcjogJHRvb2x0aXAtYXJyb3ctY29sb3I7XG4gICAgfVxuICB9XG4gICYudG9vbHRpcC1ib3R0b20sXG4gICYuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtdG9wIHtcbiAgICBwYWRkaW5nOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwO1xuICAgIG1hcmdpbi10b3A6IDNweDtcblxuICAgIC50b29sdGlwLWFycm93IHtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItd2lkdGg6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGggJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkdG9vbHRpcC1hcnJvdy1jb2xvcjtcbiAgICB9XG4gIH1cbiAgJi50b29sdGlwLWxlZnQsXG4gICYuYnMtdGV0aGVyLWVsZW1lbnQtYXR0YWNoZWQtcmlnaHQge1xuICAgIHBhZGRpbmc6IDAgJHRvb2x0aXAtYXJyb3ctd2lkdGg7XG4gICAgbWFyZ2luLWxlZnQ6IC0zcHg7XG5cbiAgICAudG9vbHRpcC1hcnJvdyB7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luLXRvcDogLSR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLXdpZHRoOiAkdG9vbHRpcC1hcnJvdy13aWR0aCAwICR0b29sdGlwLWFycm93LXdpZHRoICR0b29sdGlwLWFycm93LXdpZHRoO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICR0b29sdGlwLWFycm93LWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG4vLyBXcmFwcGVyIGZvciB0aGUgdG9vbHRpcCBjb250ZW50XG4udG9vbHRpcC1pbm5lciB7XG4gIG1heC13aWR0aDogJHRvb2x0aXAtbWF4LXdpZHRoO1xuICBwYWRkaW5nOiAzcHggOHB4O1xuICBjb2xvcjogJHRvb2x0aXAtY29sb3I7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHRvb2x0aXAtYmc7XG4gIEBpbmNsdWRlIGJvcmRlci1yYWRpdXMoJGJvcmRlci1yYWRpdXMpO1xufVxuXG4vLyBBcnJvd3Ncbi50b29sdGlwLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuIiwiLy9cbi8vIEZsb2F0c1xuLy9cblxuLmNsZWFyZml4IHtcbiAgQGluY2x1ZGUgY2xlYXJmaXgoKTtcbn1cblxuLmNlbnRlci1ibG9jayB7XG4gIEBpbmNsdWRlIGNlbnRlci1ibG9jaygpO1xufVxuXG5AZWFjaCAkYnJlYWtwb2ludCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRicmVha3BvaW50KSB7XG4gICAgLnB1bGwtI3skYnJlYWtwb2ludH0tbGVmdCB7XG4gICAgICBAaW5jbHVkZSBwdWxsLWxlZnQoKTtcbiAgICB9XG4gICAgLnB1bGwtI3skYnJlYWtwb2ludH0tcmlnaHQge1xuICAgICAgQGluY2x1ZGUgcHVsbC1yaWdodCgpO1xuICAgIH1cbiAgICAucHVsbC0jeyRicmVha3BvaW50fS1ub25lIHtcbiAgICAgIGZsb2F0OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG59XG5cblxuLy9cbi8vIFNjcmVlbnJlYWRlcnNcbi8vXG5cbi5zci1vbmx5IHtcbiAgQGluY2x1ZGUgc3Itb25seSgpO1xufVxuXG4uc3Itb25seS1mb2N1c2FibGUge1xuICBAaW5jbHVkZSBzci1vbmx5LWZvY3VzYWJsZSgpO1xufVxuXG4uaW52aXNpYmxlIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0LWhpZGUge1xuICBAaW5jbHVkZSB0ZXh0LWhpZGUoKTtcbn1cblxuXG4vL1xuLy8gVGV4dFxuLy9cblxuLy8gQWxpZ25tZW50XG5cbi50ZXh0LWp1c3RpZnkgICAgICAgIHsgdGV4dC1hbGlnbjoganVzdGlmeSAhaW1wb3J0YW50OyB9XG4udGV4dC1ub3dyYXAgICAgICAgICB7IHdoaXRlLXNwYWNlOiBub3dyYXAgIWltcG9ydGFudDsgfVxuLnRleHQtdHJ1bmNhdGUgICAgICAgeyBAaW5jbHVkZSB0ZXh0LXRydW5jYXRlOyB9XG5cbi8vIFJlc3BvbnNpdmUgYWxpZ25tZW50XG5cbkBlYWNoICRicmVha3BvaW50IGluIG1hcC1rZXlzKCRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGJyZWFrcG9pbnQpIHtcbiAgICAudGV4dC0jeyRicmVha3BvaW50fS1sZWZ0ICAgeyB0ZXh0LWFsaWduOiBsZWZ0ICFpbXBvcnRhbnQ7IH1cbiAgICAudGV4dC0jeyRicmVha3BvaW50fS1yaWdodCAgeyB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50OyB9XG4gICAgLnRleHQtI3skYnJlYWtwb2ludH0tY2VudGVyIHsgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7IH1cbiAgfVxufVxuXG4vLyBUcmFuc2Zvcm1hdGlvblxuXG4udGV4dC1sb3dlcmNhc2UgICAgICB7IHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2UgIWltcG9ydGFudDsgfVxuLnRleHQtdXBwZXJjYXNlICAgICAgeyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlICFpbXBvcnRhbnQ7IH1cbi50ZXh0LWNhcGl0YWxpemUgICAgIHsgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDsgfVxuXG4vLyBXZWlnaHQgYW5kIGl0YWxpY3NcblxuLmZvbnQtd2VpZ2h0LW5vcm1hbCAgeyBmb250LXdlaWdodDogbm9ybWFsOyB9XG4uZm9udC13ZWlnaHQtYm9sZCAgICB7IGZvbnQtd2VpZ2h0OiBib2xkOyB9XG4uZm9udC1pdGFsaWMgICAgICAgICB7IGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuXG4vLyBDb250ZXh0dWFsIGNvbG9yc1xuXG4udGV4dC1tdXRlZCB7XG4gIGNvbG9yOiAkdGV4dC1tdXRlZDtcbn1cblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC1wcmltYXJ5JywgJGJyYW5kLXByaW1hcnkpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LXN1Y2Nlc3MnLCAkYnJhbmQtc3VjY2Vzcyk7XG5cbkBpbmNsdWRlIHRleHQtZW1waGFzaXMtdmFyaWFudCgnLnRleHQtaW5mbycsICRicmFuZC1pbmZvKTtcblxuQGluY2x1ZGUgdGV4dC1lbXBoYXNpcy12YXJpYW50KCcudGV4dC13YXJuaW5nJywgJGJyYW5kLXdhcm5pbmcpO1xuXG5AaW5jbHVkZSB0ZXh0LWVtcGhhc2lzLXZhcmlhbnQoJy50ZXh0LWRhbmdlcicsICRicmFuZC1kYW5nZXIpO1xuIiwiLy9cbi8vIENvbnRleHR1YWwgYmFja2dyb3VuZHNcbi8vXG5cbi8vIEludmVyc2Vcbi8vIFRPRE86IHJlZG8gdGhpcyBhcyBhIHByb3BlciBjbGFzc1xuLmJnLWludmVyc2Uge1xuICBjb2xvcjogJGdyYXktbGlnaHRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktZGFyaztcbn1cblxuLmJnLWZhZGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyYXktbGlnaHRlc3Q7XG59XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy1wcmltYXJ5JywgJGJyYW5kLXByaW1hcnkpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctc3VjY2VzcycsICRicmFuZC1zdWNjZXNzKTtcblxuQGluY2x1ZGUgYmctdmFyaWFudCgnLmJnLWluZm8nLCAkYnJhbmQtaW5mbyk7XG5cbkBpbmNsdWRlIGJnLXZhcmlhbnQoJy5iZy13YXJuaW5nJywgJGJyYW5kLXdhcm5pbmcpO1xuXG5AaW5jbHVkZSBiZy12YXJpYW50KCcuYmctZGFuZ2VyJywgJGJyYW5kLWRhbmdlcik7XG4iLCIvLyBNYXJnaW4gYW5kIFBhZGRpbmdcblxuLm0teC1hdXRvIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAgYXV0byAhaW1wb3J0YW50O1xufVxuXG5AZWFjaCAkcHJvcCwgJGFiYnJldiBpbiAobWFyZ2luOiBtLCBwYWRkaW5nOiBwKSB7XG4gIEBlYWNoICRzaXplLCAkbGVuZ3RocyBpbiAkc3BhY2VycyB7XG4gICAgJGxlbmd0aC14OiAgIG1hcC1nZXQoJGxlbmd0aHMsIHgpO1xuICAgICRsZW5ndGgteTogICBtYXAtZ2V0KCRsZW5ndGhzLCB5KTtcblxuICAgIC4jeyRhYmJyZXZ9LWEtI3skc2l6ZX0geyAjeyRwcm9wfTogICAgICAgICRsZW5ndGgteSAkbGVuZ3RoLXggIWltcG9ydGFudDsgfSAvLyBhID0gQWxsIHNpZGVzXG4gICAgLiN7JGFiYnJldn0tdC0jeyRzaXplfSB7ICN7JHByb3B9LXRvcDogICAgJGxlbmd0aC15ICFpbXBvcnRhbnQ7IH1cbiAgICAuI3skYWJicmV2fS1yLSN7JHNpemV9IHsgI3skcHJvcH0tcmlnaHQ6ICAkbGVuZ3RoLXggIWltcG9ydGFudDsgfVxuICAgIC4jeyRhYmJyZXZ9LWItI3skc2l6ZX0geyAjeyRwcm9wfS1ib3R0b206ICRsZW5ndGgteSAhaW1wb3J0YW50OyB9XG4gICAgLiN7JGFiYnJldn0tbC0jeyRzaXplfSB7ICN7JHByb3B9LWxlZnQ6ICAgJGxlbmd0aC14ICFpbXBvcnRhbnQ7IH1cblxuICAgIC8vIEF4ZXNcbiAgICAuI3skYWJicmV2fS14LSN7JHNpemV9IHtcbiAgICAgICN7JHByb3B9LXJpZ2h0OiAgJGxlbmd0aC14ICFpbXBvcnRhbnQ7XG4gICAgICAjeyRwcm9wfS1sZWZ0OiAgICRsZW5ndGgteCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuI3skYWJicmV2fS15LSN7JHNpemV9IHtcbiAgICAgICN7JHByb3B9LXRvcDogICAgJGxlbmd0aC15ICFpbXBvcnRhbnQ7XG4gICAgICAjeyRwcm9wfS1ib3R0b206ICRsZW5ndGgteSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBQb3NpdGlvbmluZ1xuXG4ucG9zLWYtdCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogJHppbmRleC1uYXZiYXItZml4ZWQ7XG59XG4iLCIvL1xuLy8gUmVzcG9uc2l2ZSB1dGlsaXRpZXNcbi8vXG5cbkBlYWNoICRicCBpbiBtYXAta2V5cygkZ3JpZC1icmVha3BvaW50cykge1xuICAuaGlkZGVuLSN7JGJwfS11cCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkYnApIHtcbiAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLmhpZGRlbi0jeyRicH0tZG93biB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicCkge1xuICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuXG5cbi8vIFByaW50IHV0aWxpdGllc1xuLy9cbi8vIE1lZGlhIHF1ZXJpZXMgYXJlIHBsYWNlZCBvbiB0aGUgaW5zaWRlIHRvIGJlIG1peGluLWZyaWVuZGx5LlxuXG4udmlzaWJsZS1wcmludC1ibG9jayB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi52aXNpYmxlLXByaW50LWlubGluZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcblxuICBAbWVkaWEgcHJpbnQge1xuICAgIGRpc3BsYXk6IGlubGluZSAhaW1wb3J0YW50O1xuICB9XG59XG4udmlzaWJsZS1wcmludC1pbmxpbmUtYmxvY2sge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG5cbiAgQG1lZGlhIHByaW50IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcbiAgfVxufVxuXG4uaGlkZGVuLXByaW50IHtcbiAgQG1lZGlh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 */", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__ (8);
	__webpack_require__ (11);
	__webpack_require__ (12);
	__webpack_require__ (13);
	__webpack_require__ (14);
	__webpack_require__ (15);
	__webpack_require__ (10);


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.alert = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): alert.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Alert = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'alert';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.alert';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = '.data-api';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];
	    var TRANSITION_DURATION = 150;

	    var Selector = {
	      DISMISS: '[data-dismiss="alert"]'
	    };

	    var Event = {
	      CLOSE: 'close' + EVENT_KEY,
	      CLOSED: 'closed' + EVENT_KEY,
	      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	    };

	    var ClassName = {
	      ALERT: 'alert',
	      FADE: 'fade',
	      IN: 'in'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Alert = (function () {
	      function Alert(element) {
	        _classCallCheck(this, Alert);

	        this._element = element;
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * Data Api implementation
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Alert, [{
	        key: 'close',

	        // public

	        value: function close(element) {
	          element = element || this._element;

	          var rootElement = this._getRootElement(element);
	          var customEvent = this._triggerCloseEvent(rootElement);

	          if (customEvent.isDefaultPrevented()) {
	            return;
	          }

	          this._removeElement(rootElement);
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          $.removeData(this._element, DATA_KEY);
	          this._element = null;
	        }

	        // private

	      }, {
	        key: '_getRootElement',
	        value: function _getRootElement(element) {
	          var selector = _Util['default'].getSelectorFromElement(element);
	          var parent = false;

	          if (selector) {
	            parent = $(selector)[0];
	          }

	          if (!parent) {
	            parent = $(element).closest('.' + ClassName.ALERT)[0];
	          }

	          return parent;
	        }
	      }, {
	        key: '_triggerCloseEvent',
	        value: function _triggerCloseEvent(element) {
	          var closeEvent = $.Event(Event.CLOSE);

	          $(element).trigger(closeEvent);
	          return closeEvent;
	        }
	      }, {
	        key: '_removeElement',
	        value: function _removeElement(element) {
	          $(element).removeClass(ClassName.IN);

	          if (!_Util['default'].supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
	            this._destroyElement(element);
	            return;
	          }

	          $(element).one(_Util['default'].TRANSITION_END, $.proxy(this._destroyElement, this, element)).emulateTransitionEnd(TRANSITION_DURATION);
	        }
	      }, {
	        key: '_destroyElement',
	        value: function _destroyElement(element) {
	          $(element).detach().trigger(Event.CLOSED).remove();
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var $element = $(this);
	            var data = $element.data(DATA_KEY);

	            if (!data) {
	              data = new Alert(this);
	              $element.data(DATA_KEY, data);
	            }

	            if (config === 'close') {
	              data[config](this);
	            }
	          });
	        }
	      }, {
	        key: '_handleDismiss',
	        value: function _handleDismiss(alertInstance) {
	          return function (event) {
	            if (event) {
	              event.preventDefault();
	            }

	            alertInstance.close(this);
	          };
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }]);

	      return Alert;
	    })();

	    $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = Alert._jQueryInterface;
	    $.fn[NAME].Constructor = Alert;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Alert._jQueryInterface;
	    };

	    return Alert;
	  })(jQuery);

	  module.exports = Alert;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v2.2.2
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-03-17T17:51Z
	 */

	(function( global, factory ) {

		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var arr = [];

	var document = window.document;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};



	var
		version = "2.2.2",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android<4.1
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},

		isPlainObject: function( obj ) {
			var key;

			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}

			// Not own constructor property must be Object
			if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype || {}, "isPrototypeOf" ) ) {
				return false;
			}

			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own
			for ( key in obj ) {}

			return key === undefined || hasOwn.call( obj, key );
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			var script,
				indirect = eval;

			code = jQuery.trim( code );

			if ( code ) {

				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if ( code.indexOf( "use strict" ) === 1 ) {
					script = document.createElement( "script" );
					script.text = code;
					document.head.appendChild( script ).parentNode.removeChild( script );
				} else {

					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval

					indirect( code );
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,
		rescape = /'|\\/g,

		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");

		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},

			"disabled": function( elem ) {
				return elem.disabled === true;
			},

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				len = this.length,
				ret = [],
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						// Support: Blackberry 4.6
						// gEBID returns nodes no longer in the document (#6963)
						if ( elem && elem.parentNode ) {

							// Inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}

						this.context = document;
						this.selector = selector;
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;

			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];

				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add( function() {

						// state = [ resolved | rejected ]
						state = stateString;

					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}

				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,

				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},

				progressValues, progressContexts, resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}

			return deferred.promise();
		}
	} );


	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function( fn ) {

		// Add the callback
		jQuery.ready.promise().done( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );

			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );

	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE9-10 only
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );

			} else {

				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );

				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
			}
		}
		return readyList.promise( obj );
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		register: function( owner, initial ) {
			var value = initial || {};

			// If it is a node unlikely to be stringify-ed or looped over
			// use plain assignment
			if ( owner.nodeType ) {
				owner[ this.expando ] = value;

			// Otherwise secure it in a non-enumerable, non-writable property
			// configurability must be true to allow the property to be
			// deleted with the delete operator
			} else {
				Object.defineProperty( owner, this.expando, {
					value: value,
					writable: true,
					configurable: true
				} );
			}
			return owner[ this.expando ];
		},
		cache: function( owner ) {

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( !acceptData( owner ) ) {
				return {};
			}

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			if ( typeof data === "string" ) {
				cache[ data ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :
				owner[ this.expando ] && owner[ this.expando ][ key ];
		},
		access: function( owner, key, value ) {
			var stored;

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				stored = this.get( owner, key );

				return stored !== undefined ?
					stored : this.get( owner, jQuery.camelCase( key ) );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i, name, camel,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key === undefined ) {
				this.register( owner );

			} else {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat( key.map( jQuery.camelCase ) );
				} else {
					camel = jQuery.camelCase( key );

					// Try the string as a key before any manipulation
					if ( key in cache ) {
						name = [ key, camel ];
					} else {

						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ?
							[ name ] : ( name.match( rnotwhite ) || [] );
					}
				}

				i = name.length;

				while ( i-- ) {
					delete cache[ name[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <= 35-45+
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://code.google.com/p/chromium/issues/detail?id=378607
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data, camelKey;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// with the key as-is
					data = dataUser.get( elem, key ) ||

						// Try to find dashed key if it exists (gh-2779)
						// This is for 2.2.x only
						dataUser.get( elem, key.replace( rmultiDash, "-$&" ).toLowerCase() );

					if ( data !== undefined ) {
						return data;
					}

					camelKey = jQuery.camelCase( key );

					// Attempt to get data from the cache
					// with the key camelized
					data = dataUser.get( elem, camelKey );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, camelKey, undefined );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				camelKey = jQuery.camelCase( key );
				this.each( function() {

					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = dataUser.get( this, camelKey );

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					dataUser.set( this, camelKey, value );

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if ( key.indexOf( "-" ) > -1 && data !== undefined ) {
						dataUser.set( this, key, value );
					}
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHidden = function( elem, el ) {

			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};



	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([\w:-]+)/ );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE9-11+
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android<4.1, PhantomJS<2
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0-4.3, Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();


	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( event ) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );

			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {

				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: ( "button buttons clientX clientY offsetX offsetY pageX pageY " +
				"screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var eventDoc, doc, body,
					button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}

				return event;
			}
		},

		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];

			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

			event = new jQuery.Event( originalEvent );

			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if ( !event.target ) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android<4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <= 35-45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {

		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,

		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );


	var iframe,
		elemdisplay = {

			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};

	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */

	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

			display = jQuery.css( elem[ 0 ], "display" );

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];

		if ( !display ) {
			display = actualDisplay( nodeName, doc );

			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {

				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[ 0 ].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}

		return display;
	}
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};


	var documentElement = document.documentElement;



	( function() {
		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );
		}

		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {

				// Support: Android 4.0-4.3
				// We're checking for boxSizingReliableVal here instead of pixelMarginRightVal
				// since that compresses better and they're computed together anyway.
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {

				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( boxSizingReliableVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =

					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;box-sizing:content-box;" +
					"display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				documentElement.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv ).marginRight );

				documentElement.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE9-11+
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,

		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE11 only
		// In IE 11 fullscreen elements inside of an iframe have
		// 100x too small dimensions (gh-1764).
		if ( document.msFullscreenElement && window.top !== window ) {

			// Support: IE11 only
			// Running getBoundingClientRect on a disconnected node
			// in IE throws an error.
			if ( elem.getClientRects().length ) {
				val = Math.round( elem.getBoundingClientRect()[ name ] * 100 );
			}
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;

		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			values[ index ] = dataPriv.get( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {

				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] = dataPriv.access(
						elem,
						"olddisplay",
						defaultDisplay( elem.nodeName )
					);
				}
			} else {
				hidden = isHidden( elem );

				if ( display !== "none" || !hidden ) {
					dataPriv.set(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				dataPriv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
				style.display = "inline-block";
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", {} );
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;

				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ?
			opt.duration : opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		window.clearInterval( timerId );

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;

					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {

						// Set corresponding property to false
						elem[ propName ] = false;
					}

					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled : option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true

					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// But now, this "simulate" function is used only for events
					// for which stopPropagation() is noop, so there is no need for that anymore.
					//
					// For the 1.x branch though, guard for "click" and "submit"
					// events is still used, but was moved to jQuery.event.stopPropagation function
					// because `originalEvent` should point to the original event for the constancy
					// with other events and for more focused logic
				}
			);

			jQuery.event.trigger( e, null, elem );

			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function( data ) {
		return JSON.parse( data + "" );
	};


	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE9
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

			// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// The jqXHR state
				state = 0,

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {

									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" ).replace( rhash, "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE8-11+
				// IE throws exception if url is malformed, e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE8-11+
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?

						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :

						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );

					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Called once
				if ( state === 2 ) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}

			if ( this[ 0 ] ) {

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );


	jQuery.expr.filters.hidden = function( elem ) {
		return !jQuery.expr.filters.visible( elem );
	};
	jQuery.expr.filters.visible = function( elem ) {

		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		// Use OR instead of AND as the element is not visible if either is true
		// See tickets #10406 and #13132
		return elem.offsetWidth > 0 || elem.offsetHeight > 0 || elem.getClientRects().length > 0;
	};




	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {

				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE9
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE9
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE9
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}

		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( self, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win,
				elem = this[ 0 ],
				box = { top: 0, left: 0 },
				doc = elem && elem.ownerDocument;

			if ( !doc ) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}

			box = elem.getBoundingClientRect();
			win = getWindow( doc );
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		},
		size: function() {
			return this.length;
		}
	} );

	jQuery.fn.andSelf = jQuery.fn.addBack;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}



	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
	}));


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.util = mod.exports;
	  }
	})(this, function (exports, module) {
	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): util.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  'use strict';

	  var Util = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Private TransitionEnd Helpers
	     * ------------------------------------------------------------------------
	     */

	    var transition = false;

	    var TransitionEndEvent = {
	      WebkitTransition: 'webkitTransitionEnd',
	      MozTransition: 'transitionend',
	      OTransition: 'oTransitionEnd otransitionend',
	      transition: 'transitionend'
	    };

	    // shoutout AngusCroll (https://goo.gl/pxwQGp)
	    function toType(obj) {
	      return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
	    }

	    function isElement(obj) {
	      return (obj[0] || obj).nodeType;
	    }

	    function getSpecialTransitionEndEvent() {
	      return {
	        bindType: transition.end,
	        delegateType: transition.end,
	        handle: function handle(event) {
	          if ($(event.target).is(this)) {
	            return event.handleObj.handler.apply(this, arguments);
	          }
	        }
	      };
	    }

	    function transitionEndTest() {
	      if (window.QUnit) {
	        return false;
	      }

	      var el = document.createElement('bootstrap');

	      for (var _name in TransitionEndEvent) {
	        if (el.style[_name] !== undefined) {
	          return { end: TransitionEndEvent[_name] };
	        }
	      }

	      return false;
	    }

	    function transitionEndEmulator(duration) {
	      var _this = this;

	      var called = false;

	      $(this).one(Util.TRANSITION_END, function () {
	        called = true;
	      });

	      setTimeout(function () {
	        if (!called) {
	          Util.triggerTransitionEnd(_this);
	        }
	      }, duration);

	      return this;
	    }

	    function setTransitionEndSupport() {
	      transition = transitionEndTest();

	      $.fn.emulateTransitionEnd = transitionEndEmulator;

	      if (Util.supportsTransitionEnd()) {
	        $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
	      }
	    }

	    /**
	     * --------------------------------------------------------------------------
	     * Public Util Api
	     * --------------------------------------------------------------------------
	     */

	    var Util = {

	      TRANSITION_END: 'bsTransitionEnd',

	      getUID: function getUID(prefix) {
	        do {
	          prefix += ~ ~(Math.random() * 1000000); // "~~" acts like a faster Math.floor() here
	        } while (document.getElementById(prefix));
	        return prefix;
	      },

	      getSelectorFromElement: function getSelectorFromElement(element) {
	        var selector = element.getAttribute('data-target');

	        if (!selector) {
	          selector = element.getAttribute('href') || '';
	          selector = /^#[a-z]/i.test(selector) ? selector : null;
	        }

	        return selector;
	      },

	      reflow: function reflow(element) {
	        new Function('bs', 'return bs')(element.offsetHeight);
	      },

	      triggerTransitionEnd: function triggerTransitionEnd(element) {
	        $(element).trigger(transition.end);
	      },

	      supportsTransitionEnd: function supportsTransitionEnd() {
	        return Boolean(transition);
	      },

	      typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
	        for (var property in configTypes) {
	          if (configTypes.hasOwnProperty(property)) {
	            var expectedTypes = configTypes[property];
	            var value = config[property];
	            var valueType = undefined;

	            if (value && isElement(value)) {
	              valueType = 'element';
	            } else {
	              valueType = toType(value);
	            }

	            if (!new RegExp(expectedTypes).test(valueType)) {
	              throw new Error(componentName.toUpperCase() + ': ' + ('Option "' + property + '" provided type "' + valueType + '" ') + ('but expected type "' + expectedTypes + '".'));
	            }
	          }
	        }
	      }
	    };

	    setTransitionEndSupport();

	    return Util;
	  })(jQuery);

	  module.exports = Util;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module);
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod);
	    global.button = mod.exports;
	  }
	})(this, function (exports, module) {
	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): button.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var Button = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'button';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.button';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = '.data-api';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var ClassName = {
	      ACTIVE: 'active',
	      BUTTON: 'btn',
	      FOCUS: 'focus'
	    };

	    var Selector = {
	      DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
	      DATA_TOGGLE: '[data-toggle="buttons"]',
	      INPUT: 'input',
	      ACTIVE: '.active',
	      BUTTON: '.btn'
	    };

	    var Event = {
	      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
	      FOCUS_BLUR_DATA_API: 'focus' + EVENT_KEY + DATA_API_KEY + ' ' + ('blur' + EVENT_KEY + DATA_API_KEY)
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Button = (function () {
	      function Button(element) {
	        _classCallCheck(this, Button);

	        this._element = element;
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * Data Api implementation
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Button, [{
	        key: 'toggle',

	        // public

	        value: function toggle() {
	          var triggerChangeEvent = true;
	          var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

	          if (rootElement) {
	            var input = $(this._element).find(Selector.INPUT)[0];

	            if (input) {
	              if (input.type === 'radio') {
	                if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
	                  triggerChangeEvent = false;
	                } else {
	                  var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

	                  if (activeElement) {
	                    $(activeElement).removeClass(ClassName.ACTIVE);
	                  }
	                }
	              }

	              if (triggerChangeEvent) {
	                input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
	                $(this._element).trigger('change');
	              }
	            }
	          } else {
	            this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
	          }

	          if (triggerChangeEvent) {
	            $(this._element).toggleClass(ClassName.ACTIVE);
	          }
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          $.removeData(this._element, DATA_KEY);
	          this._element = null;
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);

	            if (!data) {
	              data = new Button(this);
	              $(this).data(DATA_KEY, data);
	            }

	            if (config === 'toggle') {
	              data[config]();
	            }
	          });
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }]);

	      return Button;
	    })();

	    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
	      event.preventDefault();

	      var button = event.target;

	      if (!$(button).hasClass(ClassName.BUTTON)) {
	        button = $(button).closest(Selector.BUTTON);
	      }

	      Button._jQueryInterface.call($(button), 'toggle');
	    }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
	      var button = $(event.target).closest(Selector.BUTTON)[0];
	      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
	    });

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = Button._jQueryInterface;
	    $.fn[NAME].Constructor = Button;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Button._jQueryInterface;
	    };

	    return Button;
	  })(jQuery);

	  module.exports = Button;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.dropdown = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): dropdown.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Dropdown = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'dropdown';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.dropdown';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = '.data-api';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var Event = {
	      HIDE: 'hide' + EVENT_KEY,
	      HIDDEN: 'hidden' + EVENT_KEY,
	      SHOW: 'show' + EVENT_KEY,
	      SHOWN: 'shown' + EVENT_KEY,
	      CLICK: 'click' + EVENT_KEY,
	      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY,
	      KEYDOWN_DATA_API: 'keydown' + EVENT_KEY + DATA_API_KEY
	    };

	    var ClassName = {
	      BACKDROP: 'dropdown-backdrop',
	      DISABLED: 'disabled',
	      OPEN: 'open'
	    };

	    var Selector = {
	      BACKDROP: '.dropdown-backdrop',
	      DATA_TOGGLE: '[data-toggle="dropdown"]',
	      FORM_CHILD: '.dropdown form',
	      ROLE_MENU: '[role="menu"]',
	      ROLE_LISTBOX: '[role="listbox"]',
	      NAVBAR_NAV: '.navbar-nav',
	      VISIBLE_ITEMS: '[role="menu"] li:not(.disabled) a, ' + '[role="listbox"] li:not(.disabled) a'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Dropdown = (function () {
	      function Dropdown(element) {
	        _classCallCheck(this, Dropdown);

	        this._element = element;

	        this._addEventListeners();
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * Data Api implementation
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Dropdown, [{
	        key: 'toggle',

	        // public

	        value: function toggle() {
	          if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
	            return false;
	          }

	          var parent = Dropdown._getParentFromElement(this);
	          var isActive = $(parent).hasClass(ClassName.OPEN);

	          Dropdown._clearMenus();

	          if (isActive) {
	            return false;
	          }

	          if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {

	            // if mobile we use a backdrop because click events don't delegate
	            var dropdown = document.createElement('div');
	            dropdown.className = ClassName.BACKDROP;
	            $(dropdown).insertBefore(this);
	            $(dropdown).on('click', Dropdown._clearMenus);
	          }

	          var relatedTarget = { relatedTarget: this };
	          var showEvent = $.Event(Event.SHOW, relatedTarget);

	          $(parent).trigger(showEvent);

	          if (showEvent.isDefaultPrevented()) {
	            return false;
	          }

	          this.focus();
	          this.setAttribute('aria-expanded', 'true');

	          $(parent).toggleClass(ClassName.OPEN);
	          $(parent).trigger($.Event(Event.SHOWN, relatedTarget));

	          return false;
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          $.removeData(this._element, DATA_KEY);
	          $(this._element).off(EVENT_KEY);
	          this._element = null;
	        }

	        // private

	      }, {
	        key: '_addEventListeners',
	        value: function _addEventListeners() {
	          $(this._element).on(Event.CLICK, this.toggle);
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);

	            if (!data) {
	              $(this).data(DATA_KEY, data = new Dropdown(this));
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config].call(this);
	            }
	          });
	        }
	      }, {
	        key: '_clearMenus',
	        value: function _clearMenus(event) {
	          if (event && event.which === 3) {
	            return;
	          }

	          var backdrop = $(Selector.BACKDROP)[0];
	          if (backdrop) {
	            backdrop.parentNode.removeChild(backdrop);
	          }

	          var toggles = $.makeArray($(Selector.DATA_TOGGLE));

	          for (var i = 0; i < toggles.length; i++) {
	            var _parent = Dropdown._getParentFromElement(toggles[i]);
	            var relatedTarget = { relatedTarget: toggles[i] };

	            if (!$(_parent).hasClass(ClassName.OPEN)) {
	              continue;
	            }

	            if (event && event.type === 'click' && /input|textarea/i.test(event.target.tagName) && $.contains(_parent, event.target)) {
	              continue;
	            }

	            var hideEvent = $.Event(Event.HIDE, relatedTarget);
	            $(_parent).trigger(hideEvent);
	            if (hideEvent.isDefaultPrevented()) {
	              continue;
	            }

	            toggles[i].setAttribute('aria-expanded', 'false');

	            $(_parent).removeClass(ClassName.OPEN).trigger($.Event(Event.HIDDEN, relatedTarget));
	          }
	        }
	      }, {
	        key: '_getParentFromElement',
	        value: function _getParentFromElement(element) {
	          var parent = undefined;
	          var selector = _Util['default'].getSelectorFromElement(element);

	          if (selector) {
	            parent = $(selector)[0];
	          }

	          return parent || element.parentNode;
	        }
	      }, {
	        key: '_dataApiKeydownHandler',
	        value: function _dataApiKeydownHandler(event) {
	          if (!/(38|40|27|32)/.test(event.which) || /input|textarea/i.test(event.target.tagName)) {
	            return;
	          }

	          event.preventDefault();
	          event.stopPropagation();

	          if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
	            return;
	          }

	          var parent = Dropdown._getParentFromElement(this);
	          var isActive = $(parent).hasClass(ClassName.OPEN);

	          if (!isActive && event.which !== 27 || isActive && event.which === 27) {

	            if (event.which === 27) {
	              var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
	              $(toggle).trigger('focus');
	            }

	            $(this).trigger('click');
	            return;
	          }

	          var items = $.makeArray($(Selector.VISIBLE_ITEMS));

	          items = items.filter(function (item) {
	            return item.offsetWidth || item.offsetHeight;
	          });

	          if (!items.length) {
	            return;
	          }

	          var index = items.indexOf(event.target);

	          if (event.which === 38 && index > 0) {
	            // up
	            index--;
	          }

	          if (event.which === 40 && index < items.length - 1) {
	            // down
	            index++;
	          }

	          if (! ~index) {
	            index = 0;
	          }

	          items[index].focus();
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }]);

	      return Dropdown;
	    })();

	    $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_MENU, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.ROLE_LISTBOX, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, Dropdown.prototype.toggle).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
	      e.stopPropagation();
	    });

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = Dropdown._jQueryInterface;
	    $.fn[NAME].Constructor = Dropdown;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Dropdown._jQueryInterface;
	    };

	    return Dropdown;
	  })(jQuery);

	  module.exports = Dropdown;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.scrollspy = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): scrollspy.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var ScrollSpy = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'scrollspy';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.scrollspy';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = '.data-api';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];

	    var Default = {
	      offset: 10,
	      method: 'auto',
	      target: ''
	    };

	    var DefaultType = {
	      offset: 'number',
	      method: 'string',
	      target: '(string|element)'
	    };

	    var Event = {
	      ACTIVATE: 'activate' + EVENT_KEY,
	      SCROLL: 'scroll' + EVENT_KEY,
	      LOAD_DATA_API: 'load' + EVENT_KEY + DATA_API_KEY
	    };

	    var ClassName = {
	      DROPDOWN_ITEM: 'dropdown-item',
	      DROPDOWN_MENU: 'dropdown-menu',
	      NAV_LINK: 'nav-link',
	      NAV: 'nav',
	      ACTIVE: 'active'
	    };

	    var Selector = {
	      DATA_SPY: '[data-spy="scroll"]',
	      ACTIVE: '.active',
	      LIST_ITEM: '.list-item',
	      LI: 'li',
	      LI_DROPDOWN: 'li.dropdown',
	      NAV_LINKS: '.nav-link',
	      DROPDOWN: '.dropdown',
	      DROPDOWN_ITEMS: '.dropdown-item',
	      DROPDOWN_TOGGLE: '.dropdown-toggle'
	    };

	    var OffsetMethod = {
	      OFFSET: 'offset',
	      POSITION: 'position'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var ScrollSpy = (function () {
	      function ScrollSpy(element, config) {
	        _classCallCheck(this, ScrollSpy);

	        this._element = element;
	        this._scrollElement = element.tagName === 'BODY' ? window : element;
	        this._config = this._getConfig(config);
	        this._selector = this._config.target + ' ' + Selector.NAV_LINKS + ',' + (this._config.target + ' ' + Selector.DROPDOWN_ITEMS);
	        this._offsets = [];
	        this._targets = [];
	        this._activeTarget = null;
	        this._scrollHeight = 0;

	        $(this._scrollElement).on(Event.SCROLL, $.proxy(this._process, this));

	        this.refresh();
	        this._process();
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * Data Api implementation
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(ScrollSpy, [{
	        key: 'refresh',

	        // public

	        value: function refresh() {
	          var _this = this;

	          var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;

	          var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;

	          var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;

	          this._offsets = [];
	          this._targets = [];

	          this._scrollHeight = this._getScrollHeight();

	          var targets = $.makeArray($(this._selector));

	          targets.map(function (element) {
	            var target = undefined;
	            var targetSelector = _Util['default'].getSelectorFromElement(element);

	            if (targetSelector) {
	              target = $(targetSelector)[0];
	            }

	            if (target && (target.offsetWidth || target.offsetHeight)) {
	              // todo (fat): remove sketch reliance on jQuery position/offset
	              return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
	            }
	          }).filter(function (item) {
	            return item;
	          }).sort(function (a, b) {
	            return a[0] - b[0];
	          }).forEach(function (item) {
	            _this._offsets.push(item[0]);
	            _this._targets.push(item[1]);
	          });
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          $.removeData(this._element, DATA_KEY);
	          $(this._scrollElement).off(EVENT_KEY);

	          this._element = null;
	          this._scrollElement = null;
	          this._config = null;
	          this._selector = null;
	          this._offsets = null;
	          this._targets = null;
	          this._activeTarget = null;
	          this._scrollHeight = null;
	        }

	        // private

	      }, {
	        key: '_getConfig',
	        value: function _getConfig(config) {
	          config = $.extend({}, Default, config);

	          if (typeof config.target !== 'string') {
	            var id = $(config.target).attr('id');
	            if (!id) {
	              id = _Util['default'].getUID(NAME);
	              $(config.target).attr('id', id);
	            }
	            config.target = '#' + id;
	          }

	          _Util['default'].typeCheckConfig(NAME, config, DefaultType);

	          return config;
	        }
	      }, {
	        key: '_getScrollTop',
	        value: function _getScrollTop() {
	          return this._scrollElement === window ? this._scrollElement.scrollY : this._scrollElement.scrollTop;
	        }
	      }, {
	        key: '_getScrollHeight',
	        value: function _getScrollHeight() {
	          return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
	        }
	      }, {
	        key: '_process',
	        value: function _process() {
	          var scrollTop = this._getScrollTop() + this._config.offset;
	          var scrollHeight = this._getScrollHeight();
	          var maxScroll = this._config.offset + scrollHeight - this._scrollElement.offsetHeight;

	          if (this._scrollHeight !== scrollHeight) {
	            this.refresh();
	          }

	          if (scrollTop >= maxScroll) {
	            var target = this._targets[this._targets.length - 1];

	            if (this._activeTarget !== target) {
	              this._activate(target);
	            }
	          }

	          if (this._activeTarget && scrollTop < this._offsets[0]) {
	            this._activeTarget = null;
	            this._clear();
	            return;
	          }

	          for (var i = this._offsets.length; i--;) {
	            var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (this._offsets[i + 1] === undefined || scrollTop < this._offsets[i + 1]);

	            if (isActiveTarget) {
	              this._activate(this._targets[i]);
	            }
	          }
	        }
	      }, {
	        key: '_activate',
	        value: function _activate(target) {
	          this._activeTarget = target;

	          this._clear();

	          var queries = this._selector.split(',');
	          queries = queries.map(function (selector) {
	            return selector + '[data-target="' + target + '"],' + (selector + '[href="' + target + '"]');
	          });

	          var $link = $(queries.join(','));

	          if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
	            $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	            $link.addClass(ClassName.ACTIVE);
	          } else {
	            // todo (fat) this is kinda sus…
	            // recursively add actives to tested nav-links
	            $link.parents(Selector.LI).find(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
	          }

	          $(this._scrollElement).trigger(Event.ACTIVATE, {
	            relatedTarget: target
	          });
	        }
	      }, {
	        key: '_clear',
	        value: function _clear() {
	          $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);
	            var _config = typeof config === 'object' && config || null;

	            if (!data) {
	              data = new ScrollSpy(this, _config);
	              $(this).data(DATA_KEY, data);
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config]();
	            }
	          });
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }, {
	        key: 'Default',
	        get: function get() {
	          return Default;
	        }
	      }]);

	      return ScrollSpy;
	    })();

	    $(window).on(Event.LOAD_DATA_API, function () {
	      var scrollSpys = $.makeArray($(Selector.DATA_SPY));

	      for (var i = scrollSpys.length; i--;) {
	        var $spy = $(scrollSpys[i]);
	        ScrollSpy._jQueryInterface.call($spy, $spy.data());
	      }
	    });

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = ScrollSpy._jQueryInterface;
	    $.fn[NAME].Constructor = ScrollSpy;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return ScrollSpy._jQueryInterface;
	    };

	    return ScrollSpy;
	  })(jQuery);

	  module.exports = ScrollSpy;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.tab = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): tab.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Tab = (function ($) {

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'tab';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.tab';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var DATA_API_KEY = '.data-api';
	    var JQUERY_NO_CONFLICT = $.fn[NAME];
	    var TRANSITION_DURATION = 150;

	    var Event = {
	      HIDE: 'hide' + EVENT_KEY,
	      HIDDEN: 'hidden' + EVENT_KEY,
	      SHOW: 'show' + EVENT_KEY,
	      SHOWN: 'shown' + EVENT_KEY,
	      CLICK_DATA_API: 'click' + EVENT_KEY + DATA_API_KEY
	    };

	    var ClassName = {
	      DROPDOWN_MENU: 'dropdown-menu',
	      ACTIVE: 'active',
	      FADE: 'fade',
	      IN: 'in'
	    };

	    var Selector = {
	      A: 'a',
	      LI: 'li',
	      DROPDOWN: '.dropdown',
	      UL: 'ul:not(.dropdown-menu)',
	      FADE_CHILD: '> .nav-item .fade, > .fade',
	      ACTIVE: '.active',
	      ACTIVE_CHILD: '> .nav-item > .active, > .active',
	      DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
	      DROPDOWN_TOGGLE: '.dropdown-toggle',
	      DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Tab = (function () {
	      function Tab(element) {
	        _classCallCheck(this, Tab);

	        this._element = element;
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * Data Api implementation
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Tab, [{
	        key: 'show',

	        // public

	        value: function show() {
	          var _this = this;

	          if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE)) {
	            return;
	          }

	          var target = undefined;
	          var previous = undefined;
	          var ulElement = $(this._element).closest(Selector.UL)[0];
	          var selector = _Util['default'].getSelectorFromElement(this._element);

	          if (ulElement) {
	            previous = $.makeArray($(ulElement).find(Selector.ACTIVE));
	            previous = previous[previous.length - 1];
	          }

	          var hideEvent = $.Event(Event.HIDE, {
	            relatedTarget: this._element
	          });

	          var showEvent = $.Event(Event.SHOW, {
	            relatedTarget: previous
	          });

	          if (previous) {
	            $(previous).trigger(hideEvent);
	          }

	          $(this._element).trigger(showEvent);

	          if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
	            return;
	          }

	          if (selector) {
	            target = $(selector)[0];
	          }

	          this._activate(this._element, ulElement);

	          var complete = function complete() {
	            var hiddenEvent = $.Event(Event.HIDDEN, {
	              relatedTarget: _this._element
	            });

	            var shownEvent = $.Event(Event.SHOWN, {
	              relatedTarget: previous
	            });

	            $(previous).trigger(hiddenEvent);
	            $(_this._element).trigger(shownEvent);
	          };

	          if (target) {
	            this._activate(target, target.parentNode, complete);
	          } else {
	            complete();
	          }
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          $.removeClass(this._element, DATA_KEY);
	          this._element = null;
	        }

	        // private

	      }, {
	        key: '_activate',
	        value: function _activate(element, container, callback) {
	          var active = $(container).find(Selector.ACTIVE_CHILD)[0];
	          var isTransitioning = callback && _Util['default'].supportsTransitionEnd() && (active && $(active).hasClass(ClassName.FADE) || Boolean($(container).find(Selector.FADE_CHILD)[0]));

	          var complete = $.proxy(this._transitionComplete, this, element, active, isTransitioning, callback);

	          if (active && isTransitioning) {
	            $(active).one(_Util['default'].TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	          } else {
	            complete();
	          }

	          if (active) {
	            $(active).removeClass(ClassName.IN);
	          }
	        }
	      }, {
	        key: '_transitionComplete',
	        value: function _transitionComplete(element, active, isTransitioning, callback) {
	          if (active) {
	            $(active).removeClass(ClassName.ACTIVE);

	            var dropdownChild = $(active).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

	            if (dropdownChild) {
	              $(dropdownChild).removeClass(ClassName.ACTIVE);
	            }

	            active.setAttribute('aria-expanded', false);
	          }

	          $(element).addClass(ClassName.ACTIVE);
	          element.setAttribute('aria-expanded', true);

	          if (isTransitioning) {
	            _Util['default'].reflow(element);
	            $(element).addClass(ClassName.IN);
	          } else {
	            $(element).removeClass(ClassName.FADE);
	          }

	          if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {

	            var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];
	            if (dropdownElement) {
	              $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
	            }

	            element.setAttribute('aria-expanded', true);
	          }

	          if (callback) {
	            callback();
	          }
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var $this = $(this);
	            var data = $this.data(DATA_KEY);

	            if (!data) {
	              data = data = new Tab(this);
	              $this.data(DATA_KEY, data);
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config]();
	            }
	          });
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }]);

	      return Tab;
	    })();

	    $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
	      event.preventDefault();
	      Tab._jQueryInterface.call($(this), 'show');
	    });

	    /**
	     * ------------------------------------------------------------------------
	     * jQuery
	     * ------------------------------------------------------------------------
	     */

	    $.fn[NAME] = Tab._jQueryInterface;
	    $.fn[NAME].Constructor = Tab;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Tab._jQueryInterface;
	    };

	    return Tab;
	  })(jQuery);

	  module.exports = Tab;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery, __webpack_provided_window_dot_Tether, Tether) {(function (global, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
	    factory(exports, module, require('./util'));
	  } else {
	    var mod = {
	      exports: {}
	    };
	    factory(mod.exports, mod, global.Util);
	    global.tooltip = mod.exports;
	  }
	})(this, function (exports, module, _util) {
	  /* global Tether */

	  'use strict';

	  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	  var _Util = _interopRequireDefault(_util);

	  /**
	   * --------------------------------------------------------------------------
	   * Bootstrap (v4.0.0-alpha.2): tooltip.js
	   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	   * --------------------------------------------------------------------------
	   */

	  var Tooltip = (function ($) {

	    /**
	     * Check for Tether dependency
	     * Tether - http://github.hubspot.com/tether/
	     */
	    if (__webpack_provided_window_dot_Tether === undefined) {
	      throw new Error('Bootstrap tooltips require Tether (http://github.hubspot.com/tether/)');
	    }

	    /**
	     * ------------------------------------------------------------------------
	     * Constants
	     * ------------------------------------------------------------------------
	     */

	    var NAME = 'tooltip';
	    var VERSION = '4.0.0-alpha';
	    var DATA_KEY = 'bs.tooltip';
	    var EVENT_KEY = '.' + DATA_KEY;
	    var JQUERY_NO_CONFLICT = $.fn[NAME];
	    var TRANSITION_DURATION = 150;
	    var CLASS_PREFIX = 'bs-tether';

	    var Default = {
	      animation: true,
	      template: '<div class="tooltip" role="tooltip">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner"></div></div>',
	      trigger: 'hover focus',
	      title: '',
	      delay: 0,
	      html: false,
	      selector: false,
	      placement: 'top',
	      offset: '0 0',
	      constraints: []
	    };

	    var DefaultType = {
	      animation: 'boolean',
	      template: 'string',
	      title: '(string|element|function)',
	      trigger: 'string',
	      delay: '(number|object)',
	      html: 'boolean',
	      selector: '(string|boolean)',
	      placement: '(string|function)',
	      offset: 'string',
	      constraints: 'array'
	    };

	    var AttachmentMap = {
	      TOP: 'bottom center',
	      RIGHT: 'middle left',
	      BOTTOM: 'top center',
	      LEFT: 'middle right'
	    };

	    var HoverState = {
	      IN: 'in',
	      OUT: 'out'
	    };

	    var Event = {
	      HIDE: 'hide' + EVENT_KEY,
	      HIDDEN: 'hidden' + EVENT_KEY,
	      SHOW: 'show' + EVENT_KEY,
	      SHOWN: 'shown' + EVENT_KEY,
	      INSERTED: 'inserted' + EVENT_KEY,
	      CLICK: 'click' + EVENT_KEY,
	      FOCUSIN: 'focusin' + EVENT_KEY,
	      FOCUSOUT: 'focusout' + EVENT_KEY,
	      MOUSEENTER: 'mouseenter' + EVENT_KEY,
	      MOUSELEAVE: 'mouseleave' + EVENT_KEY
	    };

	    var ClassName = {
	      FADE: 'fade',
	      IN: 'in'
	    };

	    var Selector = {
	      TOOLTIP: '.tooltip',
	      TOOLTIP_INNER: '.tooltip-inner'
	    };

	    var TetherClass = {
	      element: false,
	      enabled: false
	    };

	    var Trigger = {
	      HOVER: 'hover',
	      FOCUS: 'focus',
	      CLICK: 'click',
	      MANUAL: 'manual'
	    };

	    /**
	     * ------------------------------------------------------------------------
	     * Class Definition
	     * ------------------------------------------------------------------------
	     */

	    var Tooltip = (function () {
	      function Tooltip(element, config) {
	        _classCallCheck(this, Tooltip);

	        // private
	        this._isEnabled = true;
	        this._timeout = 0;
	        this._hoverState = '';
	        this._activeTrigger = {};
	        this._tether = null;

	        // protected
	        this.element = element;
	        this.config = this._getConfig(config);
	        this.tip = null;

	        this._setListeners();
	      }

	      /**
	       * ------------------------------------------------------------------------
	       * jQuery
	       * ------------------------------------------------------------------------
	       */

	      // getters

	      _createClass(Tooltip, [{
	        key: 'enable',

	        // public

	        value: function enable() {
	          this._isEnabled = true;
	        }
	      }, {
	        key: 'disable',
	        value: function disable() {
	          this._isEnabled = false;
	        }
	      }, {
	        key: 'toggleEnabled',
	        value: function toggleEnabled() {
	          this._isEnabled = !this._isEnabled;
	        }
	      }, {
	        key: 'toggle',
	        value: function toggle(event) {
	          if (event) {
	            var dataKey = this.constructor.DATA_KEY;
	            var context = $(event.currentTarget).data(dataKey);

	            if (!context) {
	              context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	              $(event.currentTarget).data(dataKey, context);
	            }

	            context._activeTrigger.click = !context._activeTrigger.click;

	            if (context._isWithActiveTrigger()) {
	              context._enter(null, context);
	            } else {
	              context._leave(null, context);
	            }
	          } else {

	            if ($(this.getTipElement()).hasClass(ClassName.IN)) {
	              this._leave(null, this);
	              return;
	            }

	            this._enter(null, this);
	          }
	        }
	      }, {
	        key: 'dispose',
	        value: function dispose() {
	          clearTimeout(this._timeout);

	          this.cleanupTether();

	          $.removeData(this.element, this.constructor.DATA_KEY);

	          $(this.element).off(this.constructor.EVENT_KEY);

	          if (this.tip) {
	            $(this.tip).remove();
	          }

	          this._isEnabled = null;
	          this._timeout = null;
	          this._hoverState = null;
	          this._activeTrigger = null;
	          this._tether = null;

	          this.element = null;
	          this.config = null;
	          this.tip = null;
	        }
	      }, {
	        key: 'show',
	        value: function show() {
	          var _this = this;

	          var showEvent = $.Event(this.constructor.Event.SHOW);

	          if (this.isWithContent() && this._isEnabled) {
	            $(this.element).trigger(showEvent);

	            var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

	            if (showEvent.isDefaultPrevented() || !isInTheDom) {
	              return;
	            }

	            var tip = this.getTipElement();
	            var tipId = _Util['default'].getUID(this.constructor.NAME);

	            tip.setAttribute('id', tipId);
	            this.element.setAttribute('aria-describedby', tipId);

	            this.setContent();

	            if (this.config.animation) {
	              $(tip).addClass(ClassName.FADE);
	            }

	            var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

	            var attachment = this._getAttachment(placement);

	            $(tip).data(this.constructor.DATA_KEY, this).appendTo(document.body);

	            $(this.element).trigger(this.constructor.Event.INSERTED);

	            this._tether = new Tether({
	              attachment: attachment,
	              element: tip,
	              target: this.element,
	              classes: TetherClass,
	              classPrefix: CLASS_PREFIX,
	              offset: this.config.offset,
	              constraints: this.config.constraints,
	              addTargetClasses: false
	            });

	            _Util['default'].reflow(tip);
	            this._tether.position();

	            $(tip).addClass(ClassName.IN);

	            var complete = function complete() {
	              var prevHoverState = _this._hoverState;
	              _this._hoverState = null;

	              $(_this.element).trigger(_this.constructor.Event.SHOWN);

	              if (prevHoverState === HoverState.OUT) {
	                _this._leave(null, _this);
	              }
	            };

	            if (_Util['default'].supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
	              $(this.tip).one(_Util['default'].TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
	              return;
	            }

	            complete();
	          }
	        }
	      }, {
	        key: 'hide',
	        value: function hide(callback) {
	          var _this2 = this;

	          var tip = this.getTipElement();
	          var hideEvent = $.Event(this.constructor.Event.HIDE);
	          var complete = function complete() {
	            if (_this2._hoverState !== HoverState.IN && tip.parentNode) {
	              tip.parentNode.removeChild(tip);
	            }

	            _this2.element.removeAttribute('aria-describedby');
	            $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);
	            _this2.cleanupTether();

	            if (callback) {
	              callback();
	            }
	          };

	          $(this.element).trigger(hideEvent);

	          if (hideEvent.isDefaultPrevented()) {
	            return;
	          }

	          $(tip).removeClass(ClassName.IN);

	          if (_Util['default'].supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {

	            $(tip).one(_Util['default'].TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
	          } else {
	            complete();
	          }

	          this._hoverState = '';
	        }

	        // protected

	      }, {
	        key: 'isWithContent',
	        value: function isWithContent() {
	          return Boolean(this.getTitle());
	        }
	      }, {
	        key: 'getTipElement',
	        value: function getTipElement() {
	          return this.tip = this.tip || $(this.config.template)[0];
	        }
	      }, {
	        key: 'setContent',
	        value: function setContent() {
	          var $tip = $(this.getTipElement());

	          this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());

	          $tip.removeClass(ClassName.FADE).removeClass(ClassName.IN);

	          this.cleanupTether();
	        }
	      }, {
	        key: 'setElementContent',
	        value: function setElementContent($element, content) {
	          var html = this.config.html;
	          if (typeof content === 'object' && (content.nodeType || content.jquery)) {
	            // content is a DOM node or a jQuery
	            if (html) {
	              if (!$(content).parent().is($element)) {
	                $element.empty().append(content);
	              }
	            } else {
	              $element.text($(content).text());
	            }
	          } else {
	            $element[html ? 'html' : 'text'](content);
	          }
	        }
	      }, {
	        key: 'getTitle',
	        value: function getTitle() {
	          var title = this.element.getAttribute('data-original-title');

	          if (!title) {
	            title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
	          }

	          return title;
	        }
	      }, {
	        key: 'cleanupTether',
	        value: function cleanupTether() {
	          if (this._tether) {
	            this._tether.destroy();
	          }
	        }

	        // private

	      }, {
	        key: '_getAttachment',
	        value: function _getAttachment(placement) {
	          return AttachmentMap[placement.toUpperCase()];
	        }
	      }, {
	        key: '_setListeners',
	        value: function _setListeners() {
	          var _this3 = this;

	          var triggers = this.config.trigger.split(' ');

	          triggers.forEach(function (trigger) {
	            if (trigger === 'click') {
	              $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, $.proxy(_this3.toggle, _this3));
	            } else if (trigger !== Trigger.MANUAL) {
	              var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
	              var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;

	              $(_this3.element).on(eventIn, _this3.config.selector, $.proxy(_this3._enter, _this3)).on(eventOut, _this3.config.selector, $.proxy(_this3._leave, _this3));
	            }
	          });

	          if (this.config.selector) {
	            this.config = $.extend({}, this.config, {
	              trigger: 'manual',
	              selector: ''
	            });
	          } else {
	            this._fixTitle();
	          }
	        }
	      }, {
	        key: '_fixTitle',
	        value: function _fixTitle() {
	          var titleType = typeof this.element.getAttribute('data-original-title');
	          if (this.element.getAttribute('title') || titleType !== 'string') {
	            this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
	            this.element.setAttribute('title', '');
	          }
	        }
	      }, {
	        key: '_enter',
	        value: function _enter(event, context) {
	          var dataKey = this.constructor.DATA_KEY;

	          context = context || $(event.currentTarget).data(dataKey);

	          if (!context) {
	            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	            $(event.currentTarget).data(dataKey, context);
	          }

	          if (event) {
	            context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
	          }

	          if ($(context.getTipElement()).hasClass(ClassName.IN) || context._hoverState === HoverState.IN) {
	            context._hoverState = HoverState.IN;
	            return;
	          }

	          clearTimeout(context._timeout);

	          context._hoverState = HoverState.IN;

	          if (!context.config.delay || !context.config.delay.show) {
	            context.show();
	            return;
	          }

	          context._timeout = setTimeout(function () {
	            if (context._hoverState === HoverState.IN) {
	              context.show();
	            }
	          }, context.config.delay.show);
	        }
	      }, {
	        key: '_leave',
	        value: function _leave(event, context) {
	          var dataKey = this.constructor.DATA_KEY;

	          context = context || $(event.currentTarget).data(dataKey);

	          if (!context) {
	            context = new this.constructor(event.currentTarget, this._getDelegateConfig());
	            $(event.currentTarget).data(dataKey, context);
	          }

	          if (event) {
	            context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
	          }

	          if (context._isWithActiveTrigger()) {
	            return;
	          }

	          clearTimeout(context._timeout);

	          context._hoverState = HoverState.OUT;

	          if (!context.config.delay || !context.config.delay.hide) {
	            context.hide();
	            return;
	          }

	          context._timeout = setTimeout(function () {
	            if (context._hoverState === HoverState.OUT) {
	              context.hide();
	            }
	          }, context.config.delay.hide);
	        }
	      }, {
	        key: '_isWithActiveTrigger',
	        value: function _isWithActiveTrigger() {
	          for (var trigger in this._activeTrigger) {
	            if (this._activeTrigger[trigger]) {
	              return true;
	            }
	          }

	          return false;
	        }
	      }, {
	        key: '_getConfig',
	        value: function _getConfig(config) {
	          config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

	          if (config.delay && typeof config.delay === 'number') {
	            config.delay = {
	              show: config.delay,
	              hide: config.delay
	            };
	          }

	          _Util['default'].typeCheckConfig(NAME, config, this.constructor.DefaultType);

	          return config;
	        }
	      }, {
	        key: '_getDelegateConfig',
	        value: function _getDelegateConfig() {
	          var config = {};

	          if (this.config) {
	            for (var key in this.config) {
	              if (this.constructor.Default[key] !== this.config[key]) {
	                config[key] = this.config[key];
	              }
	            }
	          }

	          return config;
	        }

	        // static

	      }], [{
	        key: '_jQueryInterface',
	        value: function _jQueryInterface(config) {
	          return this.each(function () {
	            var data = $(this).data(DATA_KEY);
	            var _config = typeof config === 'object' ? config : null;

	            if (!data && /destroy|hide/.test(config)) {
	              return;
	            }

	            if (!data) {
	              data = new Tooltip(this, _config);
	              $(this).data(DATA_KEY, data);
	            }

	            if (typeof config === 'string') {
	              if (data[config] === undefined) {
	                throw new Error('No method named "' + config + '"');
	              }
	              data[config]();
	            }
	          });
	        }
	      }, {
	        key: 'VERSION',
	        get: function get() {
	          return VERSION;
	        }
	      }, {
	        key: 'Default',
	        get: function get() {
	          return Default;
	        }
	      }, {
	        key: 'NAME',
	        get: function get() {
	          return NAME;
	        }
	      }, {
	        key: 'DATA_KEY',
	        get: function get() {
	          return DATA_KEY;
	        }
	      }, {
	        key: 'Event',
	        get: function get() {
	          return Event;
	        }
	      }, {
	        key: 'EVENT_KEY',
	        get: function get() {
	          return EVENT_KEY;
	        }
	      }, {
	        key: 'DefaultType',
	        get: function get() {
	          return DefaultType;
	        }
	      }]);

	      return Tooltip;
	    })();

	    $.fn[NAME] = Tooltip._jQueryInterface;
	    $.fn[NAME].Constructor = Tooltip;
	    $.fn[NAME].noConflict = function () {
	      $.fn[NAME] = JQUERY_NO_CONFLICT;
	      return Tooltip._jQueryInterface;
	    };

	    return Tooltip;
	  })(jQuery);

	  module.exports = Tooltip;
	});

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(16), __webpack_require__(16)))

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! tether 1.2.0 */

	(function(root, factory) {
	  if (true) {
	    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    module.exports = factory(require, exports, module);
	  } else {
	    root.Tether = factory();
	  }
	}(this, function(require, exports, module) {

	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var TetherBase = undefined;
	if (typeof TetherBase === 'undefined') {
	  TetherBase = { modules: [] };
	}

	function getScrollParent(el) {
	  // In firefox if the el is inside an iframe with display: none; window.getComputedStyle() will return null;
	  // https://bugzilla.mozilla.org/show_bug.cgi?id=548397
	  var computedStyle = getComputedStyle(el) || {};
	  var position = computedStyle.position;

	  if (position === 'fixed') {
	    return el;
	  }

	  var parent = el;
	  while (parent = parent.parentNode) {
	    var style = undefined;
	    try {
	      style = getComputedStyle(parent);
	    } catch (err) {}

	    if (typeof style === 'undefined' || style === null) {
	      return parent;
	    }

	    var _style = style;
	    var overflow = _style.overflow;
	    var overflowX = _style.overflowX;
	    var overflowY = _style.overflowY;

	    if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
	      if (position !== 'absolute' || ['relative', 'absolute', 'fixed'].indexOf(style.position) >= 0) {
	        return parent;
	      }
	    }
	  }

	  return document.body;
	}

	var uniqueId = (function () {
	  var id = 0;
	  return function () {
	    return ++id;
	  };
	})();

	var zeroPosCache = {};
	var getOrigin = function getOrigin(doc) {
	  // getBoundingClientRect is unfortunately too accurate.  It introduces a pixel or two of
	  // jitter as the user scrolls that messes with our ability to detect if two positions
	  // are equivilant or not.  We place an element at the top left of the page that will
	  // get the same jitter, so we can cancel the two out.
	  var node = doc._tetherZeroElement;
	  if (typeof node === 'undefined') {
	    node = doc.createElement('div');
	    node.setAttribute('data-tether-id', uniqueId());
	    extend(node.style, {
	      top: 0,
	      left: 0,
	      position: 'absolute'
	    });

	    doc.body.appendChild(node);

	    doc._tetherZeroElement = node;
	  }

	  var id = node.getAttribute('data-tether-id');
	  if (typeof zeroPosCache[id] === 'undefined') {
	    zeroPosCache[id] = {};

	    var rect = node.getBoundingClientRect();
	    for (var k in rect) {
	      // Can't use extend, as on IE9, elements don't resolve to be hasOwnProperty
	      zeroPosCache[id][k] = rect[k];
	    }

	    // Clear the cache when this position call is done
	    defer(function () {
	      delete zeroPosCache[id];
	    });
	  }

	  return zeroPosCache[id];
	};

	function getBounds(el) {
	  var doc = undefined;
	  if (el === document) {
	    doc = document;
	    el = document.documentElement;
	  } else {
	    doc = el.ownerDocument;
	  }

	  var docEl = doc.documentElement;

	  var box = {};
	  // The original object returned by getBoundingClientRect is immutable, so we clone it
	  // We can't use extend because the properties are not considered part of the object by hasOwnProperty in IE9
	  var rect = el.getBoundingClientRect();
	  for (var k in rect) {
	    box[k] = rect[k];
	  }

	  var origin = getOrigin(doc);

	  box.top -= origin.top;
	  box.left -= origin.left;

	  if (typeof box.width === 'undefined') {
	    box.width = document.body.scrollWidth - box.left - box.right;
	  }
	  if (typeof box.height === 'undefined') {
	    box.height = document.body.scrollHeight - box.top - box.bottom;
	  }

	  box.top = box.top - docEl.clientTop;
	  box.left = box.left - docEl.clientLeft;
	  box.right = doc.body.clientWidth - box.width - box.left;
	  box.bottom = doc.body.clientHeight - box.height - box.top;

	  return box;
	}

	function getOffsetParent(el) {
	  return el.offsetParent || document.documentElement;
	}

	function getScrollBarSize() {
	  var inner = document.createElement('div');
	  inner.style.width = '100%';
	  inner.style.height = '200px';

	  var outer = document.createElement('div');
	  extend(outer.style, {
	    position: 'absolute',
	    top: 0,
	    left: 0,
	    pointerEvents: 'none',
	    visibility: 'hidden',
	    width: '200px',
	    height: '150px',
	    overflow: 'hidden'
	  });

	  outer.appendChild(inner);

	  document.body.appendChild(outer);

	  var widthContained = inner.offsetWidth;
	  outer.style.overflow = 'scroll';
	  var widthScroll = inner.offsetWidth;

	  if (widthContained === widthScroll) {
	    widthScroll = outer.clientWidth;
	  }

	  document.body.removeChild(outer);

	  var width = widthContained - widthScroll;

	  return { width: width, height: width };
	}

	function extend() {
	  var out = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	  var args = [];

	  Array.prototype.push.apply(args, arguments);

	  args.slice(1).forEach(function (obj) {
	    if (obj) {
	      for (var key in obj) {
	        if (({}).hasOwnProperty.call(obj, key)) {
	          out[key] = obj[key];
	        }
	      }
	    }
	  });

	  return out;
	}

	function removeClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.remove(cls);
	      }
	    });
	  } else {
	    var regex = new RegExp('(^| )' + name.split(' ').join('|') + '( |$)', 'gi');
	    var className = getClassName(el).replace(regex, ' ');
	    setClassName(el, className);
	  }
	}

	function addClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    name.split(' ').forEach(function (cls) {
	      if (cls.trim()) {
	        el.classList.add(cls);
	      }
	    });
	  } else {
	    removeClass(el, name);
	    var cls = getClassName(el) + (' ' + name);
	    setClassName(el, cls);
	  }
	}

	function hasClass(el, name) {
	  if (typeof el.classList !== 'undefined') {
	    return el.classList.contains(name);
	  }
	  var className = getClassName(el);
	  return new RegExp('(^| )' + name + '( |$)', 'gi').test(className);
	}

	function getClassName(el) {
	  if (el.className instanceof SVGAnimatedString) {
	    return el.className.baseVal;
	  }
	  return el.className;
	}

	function setClassName(el, className) {
	  el.setAttribute('class', className);
	}

	function updateClasses(el, add, all) {
	  // Of the set of 'all' classes, we need the 'add' classes, and only the
	  // 'add' classes to be set.
	  all.forEach(function (cls) {
	    if (add.indexOf(cls) === -1 && hasClass(el, cls)) {
	      removeClass(el, cls);
	    }
	  });

	  add.forEach(function (cls) {
	    if (!hasClass(el, cls)) {
	      addClass(el, cls);
	    }
	  });
	}

	var deferred = [];

	var defer = function defer(fn) {
	  deferred.push(fn);
	};

	var flush = function flush() {
	  var fn = undefined;
	  while (fn = deferred.pop()) {
	    fn();
	  }
	};

	var Evented = (function () {
	  function Evented() {
	    _classCallCheck(this, Evented);
	  }

	  _createClass(Evented, [{
	    key: 'on',
	    value: function on(event, handler, ctx) {
	      var once = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

	      if (typeof this.bindings === 'undefined') {
	        this.bindings = {};
	      }
	      if (typeof this.bindings[event] === 'undefined') {
	        this.bindings[event] = [];
	      }
	      this.bindings[event].push({ handler: handler, ctx: ctx, once: once });
	    }
	  }, {
	    key: 'once',
	    value: function once(event, handler, ctx) {
	      this.on(event, handler, ctx, true);
	    }
	  }, {
	    key: 'off',
	    value: function off(event, handler) {
	      if (typeof this.bindings !== 'undefined' && typeof this.bindings[event] !== 'undefined') {
	        return;
	      }

	      if (typeof handler === 'undefined') {
	        delete this.bindings[event];
	      } else {
	        var i = 0;
	        while (i < this.bindings[event].length) {
	          if (this.bindings[event][i].handler === handler) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'trigger',
	    value: function trigger(event) {
	      if (typeof this.bindings !== 'undefined' && this.bindings[event]) {
	        var i = 0;

	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        while (i < this.bindings[event].length) {
	          var _bindings$event$i = this.bindings[event][i];
	          var handler = _bindings$event$i.handler;
	          var ctx = _bindings$event$i.ctx;
	          var once = _bindings$event$i.once;

	          var context = ctx;
	          if (typeof context === 'undefined') {
	            context = this;
	          }

	          handler.apply(context, args);

	          if (once) {
	            this.bindings[event].splice(i, 1);
	          } else {
	            ++i;
	          }
	        }
	      }
	    }
	  }]);

	  return Evented;
	})();

	TetherBase.Utils = {
	  getScrollParent: getScrollParent,
	  getBounds: getBounds,
	  getOffsetParent: getOffsetParent,
	  extend: extend,
	  addClass: addClass,
	  removeClass: removeClass,
	  hasClass: hasClass,
	  updateClasses: updateClasses,
	  defer: defer,
	  flush: flush,
	  uniqueId: uniqueId,
	  Evented: Evented,
	  getScrollBarSize: getScrollBarSize
	};
	/* globals TetherBase, performance */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	if (typeof TetherBase === 'undefined') {
	  throw new Error('You must include the utils.js file before tether.js');
	}

	var _TetherBase$Utils = TetherBase.Utils;
	var getScrollParent = _TetherBase$Utils.getScrollParent;
	var getBounds = _TetherBase$Utils.getBounds;
	var getOffsetParent = _TetherBase$Utils.getOffsetParent;
	var extend = _TetherBase$Utils.extend;
	var addClass = _TetherBase$Utils.addClass;
	var removeClass = _TetherBase$Utils.removeClass;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;
	var flush = _TetherBase$Utils.flush;
	var getScrollBarSize = _TetherBase$Utils.getScrollBarSize;

	function within(a, b) {
	  var diff = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];

	  return a + diff >= b && b >= a - diff;
	}

	var transformKey = (function () {
	  if (typeof document === 'undefined') {
	    return '';
	  }
	  var el = document.createElement('div');

	  var transforms = ['transform', 'webkitTransform', 'OTransform', 'MozTransform', 'msTransform'];
	  for (var i = 0; i < transforms.length; ++i) {
	    var key = transforms[i];
	    if (el.style[key] !== undefined) {
	      return key;
	    }
	  }
	})();

	var tethers = [];

	var position = function position() {
	  tethers.forEach(function (tether) {
	    tether.position(false);
	  });
	  flush();
	};

	function now() {
	  if (typeof performance !== 'undefined' && typeof performance.now !== 'undefined') {
	    return performance.now();
	  }
	  return +new Date();
	}

	(function () {
	  var lastCall = null;
	  var lastDuration = null;
	  var pendingTimeout = null;

	  var tick = function tick() {
	    if (typeof lastDuration !== 'undefined' && lastDuration > 16) {
	      // We voluntarily throttle ourselves if we can't manage 60fps
	      lastDuration = Math.min(lastDuration - 16, 250);

	      // Just in case this is the last event, remember to position just once more
	      pendingTimeout = setTimeout(tick, 250);
	      return;
	    }

	    if (typeof lastCall !== 'undefined' && now() - lastCall < 10) {
	      // Some browsers call events a little too frequently, refuse to run more than is reasonable
	      return;
	    }

	    if (typeof pendingTimeout !== 'undefined') {
	      clearTimeout(pendingTimeout);
	      pendingTimeout = null;
	    }

	    lastCall = now();
	    position();
	    lastDuration = now() - lastCall;
	  };

	  if (typeof window !== 'undefined') {
	    ['resize', 'scroll', 'touchmove'].forEach(function (event) {
	      window.addEventListener(event, tick);
	    });
	  }
	})();

	var MIRROR_LR = {
	  center: 'center',
	  left: 'right',
	  right: 'left'
	};

	var MIRROR_TB = {
	  middle: 'middle',
	  top: 'bottom',
	  bottom: 'top'
	};

	var OFFSET_MAP = {
	  top: 0,
	  left: 0,
	  middle: '50%',
	  center: '50%',
	  bottom: '100%',
	  right: '100%'
	};

	var autoToFixedAttachment = function autoToFixedAttachment(attachment, relativeToAttachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (left === 'auto') {
	    left = MIRROR_LR[relativeToAttachment.left];
	  }

	  if (top === 'auto') {
	    top = MIRROR_TB[relativeToAttachment.top];
	  }

	  return { left: left, top: top };
	};

	var attachmentToOffset = function attachmentToOffset(attachment) {
	  var left = attachment.left;
	  var top = attachment.top;

	  if (typeof OFFSET_MAP[attachment.left] !== 'undefined') {
	    left = OFFSET_MAP[attachment.left];
	  }

	  if (typeof OFFSET_MAP[attachment.top] !== 'undefined') {
	    top = OFFSET_MAP[attachment.top];
	  }

	  return { left: left, top: top };
	};

	function addOffset() {
	  var out = { top: 0, left: 0 };

	  for (var _len = arguments.length, offsets = Array(_len), _key = 0; _key < _len; _key++) {
	    offsets[_key] = arguments[_key];
	  }

	  offsets.forEach(function (_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (typeof top === 'string') {
	      top = parseFloat(top, 10);
	    }
	    if (typeof left === 'string') {
	      left = parseFloat(left, 10);
	    }

	    out.top += top;
	    out.left += left;
	  });

	  return out;
	}

	function offsetToPx(offset, size) {
	  if (typeof offset.left === 'string' && offset.left.indexOf('%') !== -1) {
	    offset.left = parseFloat(offset.left, 10) / 100 * size.width;
	  }
	  if (typeof offset.top === 'string' && offset.top.indexOf('%') !== -1) {
	    offset.top = parseFloat(offset.top, 10) / 100 * size.height;
	  }

	  return offset;
	}

	var parseOffset = function parseOffset(value) {
	  var _value$split = value.split(' ');

	  var _value$split2 = _slicedToArray(_value$split, 2);

	  var top = _value$split2[0];
	  var left = _value$split2[1];

	  return { top: top, left: left };
	};
	var parseAttachment = parseOffset;

	var TetherClass = (function () {
	  function TetherClass(options) {
	    var _this = this;

	    _classCallCheck(this, TetherClass);

	    this.position = this.position.bind(this);

	    tethers.push(this);

	    this.history = [];

	    this.setOptions(options, false);

	    TetherBase.modules.forEach(function (module) {
	      if (typeof module.initialize !== 'undefined') {
	        module.initialize.call(_this);
	      }
	    });

	    this.position();
	  }

	  _createClass(TetherClass, [{
	    key: 'getClass',
	    value: function getClass() {
	      var key = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
	      var classes = this.options.classes;

	      if (typeof classes !== 'undefined' && classes[key]) {
	        return this.options.classes[key];
	      } else if (this.options.classPrefix) {
	        return this.options.classPrefix + '-' + key;
	      } else {
	        return key;
	      }
	    }
	  }, {
	    key: 'setOptions',
	    value: function setOptions(options) {
	      var _this2 = this;

	      var pos = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

	      var defaults = {
	        offset: '0 0',
	        targetOffset: '0 0',
	        targetAttachment: 'auto auto',
	        classPrefix: 'tether'
	      };

	      this.options = extend(defaults, options);

	      var _options = this.options;
	      var element = _options.element;
	      var target = _options.target;
	      var targetModifier = _options.targetModifier;

	      this.element = element;
	      this.target = target;
	      this.targetModifier = targetModifier;

	      if (this.target === 'viewport') {
	        this.target = document.body;
	        this.targetModifier = 'visible';
	      } else if (this.target === 'scroll-handle') {
	        this.target = document.body;
	        this.targetModifier = 'scroll-handle';
	      }

	      ['element', 'target'].forEach(function (key) {
	        if (typeof _this2[key] === 'undefined') {
	          throw new Error('Tether Error: Both element and target must be defined');
	        }

	        if (typeof _this2[key].jquery !== 'undefined') {
	          _this2[key] = _this2[key][0];
	        } else if (typeof _this2[key] === 'string') {
	          _this2[key] = document.querySelector(_this2[key]);
	        }
	      });

	      addClass(this.element, this.getClass('element'));
	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('target'));
	      }

	      if (!this.options.attachment) {
	        throw new Error('Tether Error: You must provide an attachment');
	      }

	      this.targetAttachment = parseAttachment(this.options.targetAttachment);
	      this.attachment = parseAttachment(this.options.attachment);
	      this.offset = parseOffset(this.options.offset);
	      this.targetOffset = parseOffset(this.options.targetOffset);

	      if (typeof this.scrollParent !== 'undefined') {
	        this.disable();
	      }

	      if (this.targetModifier === 'scroll-handle') {
	        this.scrollParent = this.target;
	      } else {
	        this.scrollParent = getScrollParent(this.target);
	      }

	      if (!(this.options.enabled === false)) {
	        this.enable(pos);
	      }
	    }
	  }, {
	    key: 'getTargetBounds',
	    value: function getTargetBounds() {
	      if (typeof this.targetModifier !== 'undefined') {
	        if (this.targetModifier === 'visible') {
	          if (this.target === document.body) {
	            return { top: pageYOffset, left: pageXOffset, height: innerHeight, width: innerWidth };
	          } else {
	            var bounds = getBounds(this.target);

	            var out = {
	              height: bounds.height,
	              width: bounds.width,
	              top: bounds.top,
	              left: bounds.left
	            };

	            out.height = Math.min(out.height, bounds.height - (pageYOffset - bounds.top));
	            out.height = Math.min(out.height, bounds.height - (bounds.top + bounds.height - (pageYOffset + innerHeight)));
	            out.height = Math.min(innerHeight, out.height);
	            out.height -= 2;

	            out.width = Math.min(out.width, bounds.width - (pageXOffset - bounds.left));
	            out.width = Math.min(out.width, bounds.width - (bounds.left + bounds.width - (pageXOffset + innerWidth)));
	            out.width = Math.min(innerWidth, out.width);
	            out.width -= 2;

	            if (out.top < pageYOffset) {
	              out.top = pageYOffset;
	            }
	            if (out.left < pageXOffset) {
	              out.left = pageXOffset;
	            }

	            return out;
	          }
	        } else if (this.targetModifier === 'scroll-handle') {
	          var bounds = undefined;
	          var target = this.target;
	          if (target === document.body) {
	            target = document.documentElement;

	            bounds = {
	              left: pageXOffset,
	              top: pageYOffset,
	              height: innerHeight,
	              width: innerWidth
	            };
	          } else {
	            bounds = getBounds(target);
	          }

	          var style = getComputedStyle(target);

	          var hasBottomScroll = target.scrollWidth > target.clientWidth || [style.overflow, style.overflowX].indexOf('scroll') >= 0 || this.target !== document.body;

	          var scrollBottom = 0;
	          if (hasBottomScroll) {
	            scrollBottom = 15;
	          }

	          var height = bounds.height - parseFloat(style.borderTopWidth) - parseFloat(style.borderBottomWidth) - scrollBottom;

	          var out = {
	            width: 15,
	            height: height * 0.975 * (height / target.scrollHeight),
	            left: bounds.left + bounds.width - parseFloat(style.borderLeftWidth) - 15
	          };

	          var fitAdj = 0;
	          if (height < 408 && this.target === document.body) {
	            fitAdj = -0.00011 * Math.pow(height, 2) - 0.00727 * height + 22.58;
	          }

	          if (this.target !== document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          var scrollPercentage = this.target.scrollTop / (target.scrollHeight - height);
	          out.top = scrollPercentage * (height - out.height - fitAdj) + bounds.top + parseFloat(style.borderTopWidth);

	          if (this.target === document.body) {
	            out.height = Math.max(out.height, 24);
	          }

	          return out;
	        }
	      } else {
	        return getBounds(this.target);
	      }
	    }
	  }, {
	    key: 'clearCache',
	    value: function clearCache() {
	      this._cache = {};
	    }
	  }, {
	    key: 'cache',
	    value: function cache(k, getter) {
	      // More than one module will often need the same DOM info, so
	      // we keep a cache which is cleared on each position call
	      if (typeof this._cache === 'undefined') {
	        this._cache = {};
	      }

	      if (typeof this._cache[k] === 'undefined') {
	        this._cache[k] = getter.call(this);
	      }

	      return this._cache[k];
	    }
	  }, {
	    key: 'enable',
	    value: function enable() {
	      var pos = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      if (!(this.options.addTargetClasses === false)) {
	        addClass(this.target, this.getClass('enabled'));
	      }
	      addClass(this.element, this.getClass('enabled'));
	      this.enabled = true;

	      if (this.scrollParent !== document) {
	        this.scrollParent.addEventListener('scroll', this.position);
	      }

	      if (pos) {
	        this.position();
	      }
	    }
	  }, {
	    key: 'disable',
	    value: function disable() {
	      removeClass(this.target, this.getClass('enabled'));
	      removeClass(this.element, this.getClass('enabled'));
	      this.enabled = false;

	      if (typeof this.scrollParent !== 'undefined') {
	        this.scrollParent.removeEventListener('scroll', this.position);
	      }
	    }
	  }, {
	    key: 'destroy',
	    value: function destroy() {
	      var _this3 = this;

	      this.disable();

	      tethers.forEach(function (tether, i) {
	        if (tether === _this3) {
	          tethers.splice(i, 1);
	          return;
	        }
	      });
	    }
	  }, {
	    key: 'updateAttachClasses',
	    value: function updateAttachClasses(elementAttach, targetAttach) {
	      var _this4 = this;

	      elementAttach = elementAttach || this.attachment;
	      targetAttach = targetAttach || this.targetAttachment;
	      var sides = ['left', 'top', 'bottom', 'right', 'middle', 'center'];

	      if (typeof this._addAttachClasses !== 'undefined' && this._addAttachClasses.length) {
	        // updateAttachClasses can be called more than once in a position call, so
	        // we need to clean up after ourselves such that when the last defer gets
	        // ran it doesn't add any extra classes from previous calls.
	        this._addAttachClasses.splice(0, this._addAttachClasses.length);
	      }

	      if (typeof this._addAttachClasses === 'undefined') {
	        this._addAttachClasses = [];
	      }
	      var add = this._addAttachClasses;

	      if (elementAttach.top) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.top);
	      }
	      if (elementAttach.left) {
	        add.push(this.getClass('element-attached') + '-' + elementAttach.left);
	      }
	      if (targetAttach.top) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.top);
	      }
	      if (targetAttach.left) {
	        add.push(this.getClass('target-attached') + '-' + targetAttach.left);
	      }

	      var all = [];
	      sides.forEach(function (side) {
	        all.push(_this4.getClass('element-attached') + '-' + side);
	        all.push(_this4.getClass('target-attached') + '-' + side);
	      });

	      defer(function () {
	        if (!(typeof _this4._addAttachClasses !== 'undefined')) {
	          return;
	        }

	        updateClasses(_this4.element, _this4._addAttachClasses, all);
	        if (!(_this4.options.addTargetClasses === false)) {
	          updateClasses(_this4.target, _this4._addAttachClasses, all);
	        }

	        delete _this4._addAttachClasses;
	      });
	    }
	  }, {
	    key: 'position',
	    value: function position() {
	      var _this5 = this;

	      var flushChanges = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];

	      // flushChanges commits the changes immediately, leave true unless you are positioning multiple
	      // tethers (in which case call Tether.Utils.flush yourself when you're done)

	      if (!this.enabled) {
	        return;
	      }

	      this.clearCache();

	      // Turn 'auto' attachments into the appropriate corner or edge
	      var targetAttachment = autoToFixedAttachment(this.targetAttachment, this.attachment);

	      this.updateAttachClasses(this.attachment, targetAttachment);

	      var elementPos = this.cache('element-bounds', function () {
	        return getBounds(_this5.element);
	      });

	      var width = elementPos.width;
	      var height = elementPos.height;

	      if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	        var _lastSize = this.lastSize;

	        // We cache the height and width to make it possible to position elements that are
	        // getting hidden.
	        width = _lastSize.width;
	        height = _lastSize.height;
	      } else {
	        this.lastSize = { width: width, height: height };
	      }

	      var targetPos = this.cache('target-bounds', function () {
	        return _this5.getTargetBounds();
	      });
	      var targetSize = targetPos;

	      // Get an actual px offset from the attachment
	      var offset = offsetToPx(attachmentToOffset(this.attachment), { width: width, height: height });
	      var targetOffset = offsetToPx(attachmentToOffset(targetAttachment), targetSize);

	      var manualOffset = offsetToPx(this.offset, { width: width, height: height });
	      var manualTargetOffset = offsetToPx(this.targetOffset, targetSize);

	      // Add the manually provided offset
	      offset = addOffset(offset, manualOffset);
	      targetOffset = addOffset(targetOffset, manualTargetOffset);

	      // It's now our goal to make (element position + offset) == (target position + target offset)
	      var left = targetPos.left + targetOffset.left - offset.left;
	      var top = targetPos.top + targetOffset.top - offset.top;

	      for (var i = 0; i < TetherBase.modules.length; ++i) {
	        var _module2 = TetherBase.modules[i];
	        var ret = _module2.position.call(this, {
	          left: left,
	          top: top,
	          targetAttachment: targetAttachment,
	          targetPos: targetPos,
	          elementPos: elementPos,
	          offset: offset,
	          targetOffset: targetOffset,
	          manualOffset: manualOffset,
	          manualTargetOffset: manualTargetOffset,
	          scrollbarSize: scrollbarSize,
	          attachment: this.attachment
	        });

	        if (ret === false) {
	          return false;
	        } else if (typeof ret === 'undefined' || typeof ret !== 'object') {
	          continue;
	        } else {
	          top = ret.top;
	          left = ret.left;
	        }
	      }

	      // We describe the position three different ways to give the optimizer
	      // a chance to decide the best possible way to position the element
	      // with the fewest repaints.
	      var next = {
	        // It's position relative to the page (absolute positioning when
	        // the element is a child of the body)
	        page: {
	          top: top,
	          left: left
	        },

	        // It's position relative to the viewport (fixed positioning)
	        viewport: {
	          top: top - pageYOffset,
	          bottom: pageYOffset - top - height + innerHeight,
	          left: left - pageXOffset,
	          right: pageXOffset - left - width + innerWidth
	        }
	      };

	      var scrollbarSize = undefined;
	      if (document.body.scrollWidth > window.innerWidth) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.bottom -= scrollbarSize.height;
	      }

	      if (document.body.scrollHeight > window.innerHeight) {
	        scrollbarSize = this.cache('scrollbar-size', getScrollBarSize);
	        next.viewport.right -= scrollbarSize.width;
	      }

	      if (['', 'static'].indexOf(document.body.style.position) === -1 || ['', 'static'].indexOf(document.body.parentElement.style.position) === -1) {
	        // Absolute positioning in the body will be relative to the page, not the 'initial containing block'
	        next.page.bottom = document.body.scrollHeight - top - height;
	        next.page.right = document.body.scrollWidth - left - width;
	      }

	      if (typeof this.options.optimizations !== 'undefined' && this.options.optimizations.moveElement !== false && !(typeof this.targetModifier !== 'undefined')) {
	        (function () {
	          var offsetParent = _this5.cache('target-offsetparent', function () {
	            return getOffsetParent(_this5.target);
	          });
	          var offsetPosition = _this5.cache('target-offsetparent-bounds', function () {
	            return getBounds(offsetParent);
	          });
	          var offsetParentStyle = getComputedStyle(offsetParent);
	          var offsetParentSize = offsetPosition;

	          var offsetBorder = {};
	          ['Top', 'Left', 'Bottom', 'Right'].forEach(function (side) {
	            offsetBorder[side.toLowerCase()] = parseFloat(offsetParentStyle['border' + side + 'Width']);
	          });

	          offsetPosition.right = document.body.scrollWidth - offsetPosition.left - offsetParentSize.width + offsetBorder.right;
	          offsetPosition.bottom = document.body.scrollHeight - offsetPosition.top - offsetParentSize.height + offsetBorder.bottom;

	          if (next.page.top >= offsetPosition.top + offsetBorder.top && next.page.bottom >= offsetPosition.bottom) {
	            if (next.page.left >= offsetPosition.left + offsetBorder.left && next.page.right >= offsetPosition.right) {
	              // We're within the visible part of the target's scroll parent
	              var scrollTop = offsetParent.scrollTop;
	              var scrollLeft = offsetParent.scrollLeft;

	              // It's position relative to the target's offset parent (absolute positioning when
	              // the element is moved to be a child of the target's offset parent).
	              next.offset = {
	                top: next.page.top - offsetPosition.top + scrollTop - offsetBorder.top,
	                left: next.page.left - offsetPosition.left + scrollLeft - offsetBorder.left
	              };
	            }
	          }
	        })();
	      }

	      // We could also travel up the DOM and try each containing context, rather than only
	      // looking at the body, but we're gonna get diminishing returns.

	      this.move(next);

	      this.history.unshift(next);

	      if (this.history.length > 3) {
	        this.history.pop();
	      }

	      if (flushChanges) {
	        flush();
	      }

	      return true;
	    }

	    // THE ISSUE
	  }, {
	    key: 'move',
	    value: function move(pos) {
	      var _this6 = this;

	      if (!(typeof this.element.parentNode !== 'undefined')) {
	        return;
	      }

	      var same = {};

	      for (var type in pos) {
	        same[type] = {};

	        for (var key in pos[type]) {
	          var found = false;

	          for (var i = 0; i < this.history.length; ++i) {
	            var point = this.history[i];
	            if (typeof point[type] !== 'undefined' && !within(point[type][key], pos[type][key])) {
	              found = true;
	              break;
	            }
	          }

	          if (!found) {
	            same[type][key] = true;
	          }
	        }
	      }

	      var css = { top: '', left: '', right: '', bottom: '' };

	      var transcribe = function transcribe(_same, _pos) {
	        var hasOptimizations = typeof _this6.options.optimizations !== 'undefined';
	        var gpu = hasOptimizations ? _this6.options.optimizations.gpu : null;
	        if (gpu !== false) {
	          var yPos = undefined,
	              xPos = undefined;
	          if (_same.top) {
	            css.top = 0;
	            yPos = _pos.top;
	          } else {
	            css.bottom = 0;
	            yPos = -_pos.bottom;
	          }

	          if (_same.left) {
	            css.left = 0;
	            xPos = _pos.left;
	          } else {
	            css.right = 0;
	            xPos = -_pos.right;
	          }

	          css[transformKey] = 'translateX(' + Math.round(xPos) + 'px) translateY(' + Math.round(yPos) + 'px)';

	          if (transformKey !== 'msTransform') {
	            // The Z transform will keep this in the GPU (faster, and prevents artifacts),
	            // but IE9 doesn't support 3d transforms and will choke.
	            css[transformKey] += " translateZ(0)";
	          }
	        } else {
	          if (_same.top) {
	            css.top = _pos.top + 'px';
	          } else {
	            css.bottom = _pos.bottom + 'px';
	          }

	          if (_same.left) {
	            css.left = _pos.left + 'px';
	          } else {
	            css.right = _pos.right + 'px';
	          }
	        }
	      };

	      var moved = false;
	      if ((same.page.top || same.page.bottom) && (same.page.left || same.page.right)) {
	        css.position = 'absolute';
	        transcribe(same.page, pos.page);
	      } else if ((same.viewport.top || same.viewport.bottom) && (same.viewport.left || same.viewport.right)) {
	        css.position = 'fixed';
	        transcribe(same.viewport, pos.viewport);
	      } else if (typeof same.offset !== 'undefined' && same.offset.top && same.offset.left) {
	        (function () {
	          css.position = 'absolute';
	          var offsetParent = _this6.cache('target-offsetparent', function () {
	            return getOffsetParent(_this6.target);
	          });

	          if (getOffsetParent(_this6.element) !== offsetParent) {
	            defer(function () {
	              _this6.element.parentNode.removeChild(_this6.element);
	              offsetParent.appendChild(_this6.element);
	            });
	          }

	          transcribe(same.offset, pos.offset);
	          moved = true;
	        })();
	      } else {
	        css.position = 'absolute';
	        transcribe({ top: true, left: true }, pos.page);
	      }

	      if (!moved) {
	        var offsetParentIsBody = true;
	        var currentNode = this.element.parentNode;
	        while (currentNode && currentNode.tagName !== 'BODY') {
	          if (getComputedStyle(currentNode).position !== 'static') {
	            offsetParentIsBody = false;
	            break;
	          }

	          currentNode = currentNode.parentNode;
	        }

	        if (!offsetParentIsBody) {
	          this.element.parentNode.removeChild(this.element);
	          document.body.appendChild(this.element);
	        }
	      }

	      // Any css change will trigger a repaint, so let's avoid one if nothing changed
	      var writeCSS = {};
	      var write = false;
	      for (var key in css) {
	        var val = css[key];
	        var elVal = this.element.style[key];

	        if (elVal !== '' && val !== '' && ['top', 'left', 'bottom', 'right'].indexOf(key) >= 0) {
	          elVal = parseFloat(elVal);
	          val = parseFloat(val);
	        }

	        if (elVal !== val) {
	          write = true;
	          writeCSS[key] = val;
	        }
	      }

	      if (write) {
	        defer(function () {
	          extend(_this6.element.style, writeCSS);
	        });
	      }
	    }
	  }]);

	  return TetherClass;
	})();

	TetherClass.modules = [];

	TetherBase.position = position;

	var Tether = extend(TetherClass, TetherBase);
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var extend = _TetherBase$Utils.extend;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	var BOUNDS_FORMAT = ['left', 'top', 'right', 'bottom'];

	function getBoundingRect(tether, to) {
	  if (to === 'scrollParent') {
	    to = tether.scrollParent;
	  } else if (to === 'window') {
	    to = [pageXOffset, pageYOffset, innerWidth + pageXOffset, innerHeight + pageYOffset];
	  }

	  if (to === document) {
	    to = to.documentElement;
	  }

	  if (typeof to.nodeType !== 'undefined') {
	    (function () {
	      var size = getBounds(to);
	      var pos = size;
	      var style = getComputedStyle(to);

	      to = [pos.left, pos.top, size.width + pos.left, size.height + pos.top];

	      BOUNDS_FORMAT.forEach(function (side, i) {
	        side = side[0].toUpperCase() + side.substr(1);
	        if (side === 'Top' || side === 'Left') {
	          to[i] += parseFloat(style['border' + side + 'Width']);
	        } else {
	          to[i] -= parseFloat(style['border' + side + 'Width']);
	        }
	      });
	    })();
	  }

	  return to;
	}

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;
	    var targetAttachment = _ref.targetAttachment;

	    if (!this.options.constraints) {
	      return true;
	    }

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    if (width === 0 && height === 0 && typeof this.lastSize !== 'undefined') {
	      var _lastSize = this.lastSize;

	      // Handle the item getting hidden as a result of our positioning without glitching
	      // the classes in and out
	      width = _lastSize.width;
	      height = _lastSize.height;
	    }

	    var targetSize = this.cache('target-bounds', function () {
	      return _this.getTargetBounds();
	    });

	    var targetHeight = targetSize.height;
	    var targetWidth = targetSize.width;

	    var allClasses = [this.getClass('pinned'), this.getClass('out-of-bounds')];

	    this.options.constraints.forEach(function (constraint) {
	      var outOfBoundsClass = constraint.outOfBoundsClass;
	      var pinnedClass = constraint.pinnedClass;

	      if (outOfBoundsClass) {
	        allClasses.push(outOfBoundsClass);
	      }
	      if (pinnedClass) {
	        allClasses.push(pinnedClass);
	      }
	    });

	    allClasses.forEach(function (cls) {
	      ['left', 'top', 'right', 'bottom'].forEach(function (side) {
	        allClasses.push(cls + '-' + side);
	      });
	    });

	    var addClasses = [];

	    var tAttachment = extend({}, targetAttachment);
	    var eAttachment = extend({}, this.attachment);

	    this.options.constraints.forEach(function (constraint) {
	      var to = constraint.to;
	      var attachment = constraint.attachment;
	      var pin = constraint.pin;

	      if (typeof attachment === 'undefined') {
	        attachment = '';
	      }

	      var changeAttachX = undefined,
	          changeAttachY = undefined;
	      if (attachment.indexOf(' ') >= 0) {
	        var _attachment$split = attachment.split(' ');

	        var _attachment$split2 = _slicedToArray(_attachment$split, 2);

	        changeAttachY = _attachment$split2[0];
	        changeAttachX = _attachment$split2[1];
	      } else {
	        changeAttachX = changeAttachY = attachment;
	      }

	      var bounds = getBoundingRect(_this, to);

	      if (changeAttachY === 'target' || changeAttachY === 'both') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          top += targetHeight;
	          tAttachment.top = 'bottom';
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          top -= targetHeight;
	          tAttachment.top = 'top';
	        }
	      }

	      if (changeAttachY === 'together') {
	        if (top < bounds[1] && tAttachment.top === 'top') {
	          if (eAttachment.top === 'bottom') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top += height;
	            eAttachment.top = 'top';
	          } else if (eAttachment.top === 'top') {
	            top += targetHeight;
	            tAttachment.top = 'bottom';

	            top -= height;
	            eAttachment.top = 'bottom';
	          }
	        }

	        if (top + height > bounds[3] && tAttachment.top === 'bottom') {
	          if (eAttachment.top === 'top') {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (eAttachment.top === 'bottom') {
	            top -= targetHeight;
	            tAttachment.top = 'top';

	            top += height;
	            eAttachment.top = 'top';
	          }
	        }

	        if (tAttachment.top === 'middle') {
	          if (top + height > bounds[3] && eAttachment.top === 'top') {
	            top -= height;
	            eAttachment.top = 'bottom';
	          } else if (top < bounds[1] && eAttachment.top === 'bottom') {
	            top += height;
	            eAttachment.top = 'top';
	          }
	        }
	      }

	      if (changeAttachX === 'target' || changeAttachX === 'both') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          left += targetWidth;
	          tAttachment.left = 'right';
	        }

	        if (left + width > bounds[2] && tAttachment.left === 'right') {
	          left -= targetWidth;
	          tAttachment.left = 'left';
	        }
	      }

	      if (changeAttachX === 'together') {
	        if (left < bounds[0] && tAttachment.left === 'left') {
	          if (eAttachment.left === 'right') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'left') {
	            left += targetWidth;
	            tAttachment.left = 'right';

	            left -= width;
	            eAttachment.left = 'right';
	          }
	        } else if (left + width > bounds[2] && tAttachment.left === 'right') {
	          if (eAttachment.left === 'left') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'right') {
	            left -= targetWidth;
	            tAttachment.left = 'left';

	            left += width;
	            eAttachment.left = 'left';
	          }
	        } else if (tAttachment.left === 'center') {
	          if (left + width > bounds[2] && eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (left < bounds[0] && eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          }
	        }
	      }

	      if (changeAttachY === 'element' || changeAttachY === 'both') {
	        if (top < bounds[1] && eAttachment.top === 'bottom') {
	          top += height;
	          eAttachment.top = 'top';
	        }

	        if (top + height > bounds[3] && eAttachment.top === 'top') {
	          top -= height;
	          eAttachment.top = 'bottom';
	        }
	      }

	      if (changeAttachX === 'element' || changeAttachX === 'both') {
	        if (left < bounds[0]) {
	          if (eAttachment.left === 'right') {
	            left += width;
	            eAttachment.left = 'left';
	          } else if (eAttachment.left === 'center') {
	            left += width / 2;
	            eAttachment.left = 'left';
	          }
	        }

	        if (left + width > bounds[2]) {
	          if (eAttachment.left === 'left') {
	            left -= width;
	            eAttachment.left = 'right';
	          } else if (eAttachment.left === 'center') {
	            left -= width / 2;
	            eAttachment.left = 'right';
	          }
	        }
	      }

	      if (typeof pin === 'string') {
	        pin = pin.split(',').map(function (p) {
	          return p.trim();
	        });
	      } else if (pin === true) {
	        pin = ['top', 'left', 'right', 'bottom'];
	      }

	      pin = pin || [];

	      var pinned = [];
	      var oob = [];

	      if (top < bounds[1]) {
	        if (pin.indexOf('top') >= 0) {
	          top = bounds[1];
	          pinned.push('top');
	        } else {
	          oob.push('top');
	        }
	      }

	      if (top + height > bounds[3]) {
	        if (pin.indexOf('bottom') >= 0) {
	          top = bounds[3] - height;
	          pinned.push('bottom');
	        } else {
	          oob.push('bottom');
	        }
	      }

	      if (left < bounds[0]) {
	        if (pin.indexOf('left') >= 0) {
	          left = bounds[0];
	          pinned.push('left');
	        } else {
	          oob.push('left');
	        }
	      }

	      if (left + width > bounds[2]) {
	        if (pin.indexOf('right') >= 0) {
	          left = bounds[2] - width;
	          pinned.push('right');
	        } else {
	          oob.push('right');
	        }
	      }

	      if (pinned.length) {
	        (function () {
	          var pinnedClass = undefined;
	          if (typeof _this.options.pinnedClass !== 'undefined') {
	            pinnedClass = _this.options.pinnedClass;
	          } else {
	            pinnedClass = _this.getClass('pinned');
	          }

	          addClasses.push(pinnedClass);
	          pinned.forEach(function (side) {
	            addClasses.push(pinnedClass + '-' + side);
	          });
	        })();
	      }

	      if (oob.length) {
	        (function () {
	          var oobClass = undefined;
	          if (typeof _this.options.outOfBoundsClass !== 'undefined') {
	            oobClass = _this.options.outOfBoundsClass;
	          } else {
	            oobClass = _this.getClass('out-of-bounds');
	          }

	          addClasses.push(oobClass);
	          oob.forEach(function (side) {
	            addClasses.push(oobClass + '-' + side);
	          });
	        })();
	      }

	      if (pinned.indexOf('left') >= 0 || pinned.indexOf('right') >= 0) {
	        eAttachment.left = tAttachment.left = false;
	      }
	      if (pinned.indexOf('top') >= 0 || pinned.indexOf('bottom') >= 0) {
	        eAttachment.top = tAttachment.top = false;
	      }

	      if (tAttachment.top !== targetAttachment.top || tAttachment.left !== targetAttachment.left || eAttachment.top !== _this.attachment.top || eAttachment.left !== _this.attachment.left) {
	        _this.updateAttachClasses(eAttachment, tAttachment);
	      }
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return { top: top, left: left };
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _TetherBase$Utils = TetherBase.Utils;
	var getBounds = _TetherBase$Utils.getBounds;
	var updateClasses = _TetherBase$Utils.updateClasses;
	var defer = _TetherBase$Utils.defer;

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var _this = this;

	    var top = _ref.top;
	    var left = _ref.left;

	    var _cache = this.cache('element-bounds', function () {
	      return getBounds(_this.element);
	    });

	    var height = _cache.height;
	    var width = _cache.width;

	    var targetPos = this.getTargetBounds();

	    var bottom = top + height;
	    var right = left + width;

	    var abutted = [];
	    if (top <= targetPos.bottom && bottom >= targetPos.top) {
	      ['left', 'right'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === left || targetPosSide === right) {
	          abutted.push(side);
	        }
	      });
	    }

	    if (left <= targetPos.right && right >= targetPos.left) {
	      ['top', 'bottom'].forEach(function (side) {
	        var targetPosSide = targetPos[side];
	        if (targetPosSide === top || targetPosSide === bottom) {
	          abutted.push(side);
	        }
	      });
	    }

	    var allClasses = [];
	    var addClasses = [];

	    var sides = ['left', 'top', 'right', 'bottom'];
	    allClasses.push(this.getClass('abutted'));
	    sides.forEach(function (side) {
	      allClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    if (abutted.length) {
	      addClasses.push(this.getClass('abutted'));
	    }

	    abutted.forEach(function (side) {
	      addClasses.push(_this.getClass('abutted') + '-' + side);
	    });

	    defer(function () {
	      if (!(_this.options.addTargetClasses === false)) {
	        updateClasses(_this.target, addClasses, allClasses);
	      }
	      updateClasses(_this.element, addClasses, allClasses);
	    });

	    return true;
	  }
	});
	/* globals TetherBase */

	'use strict';

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	TetherBase.modules.push({
	  position: function position(_ref) {
	    var top = _ref.top;
	    var left = _ref.left;

	    if (!this.options.shift) {
	      return;
	    }

	    var shift = this.options.shift;
	    if (typeof this.options.shift === 'function') {
	      shift = this.options.shift.call(this, { top: top, left: left });
	    }

	    var shiftTop = undefined,
	        shiftLeft = undefined;
	    if (typeof shift === 'string') {
	      shift = shift.split(' ');
	      shift[1] = shift[1] || shift[0];

	      var _shift = shift;

	      var _shift2 = _slicedToArray(_shift, 2);

	      shiftTop = _shift2[0];
	      shiftLeft = _shift2[1];

	      shiftTop = parseFloat(shiftTop, 10);
	      shiftLeft = parseFloat(shiftLeft, 10);
	    } else {
	      shiftTop = shift.top;
	      shiftLeft = shift.left;
	    }

	    top += shiftTop;
	    left += shiftLeft;

	    return { top: top, left: left };
	  }
	});
	return Tether;

	}));


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	$(function() {
	  console.log('Ready...');
	}); 

	$(document).ready(function(){
	    App.init();
	})


	var App = {
	    submitXHR: null,
	    init: function(){
	        var self = this;
	        self.initBinds();
	    },
	    initBinds: function(){
	        var self = this;    
	        
	        self.$inputs = {
	            email:      $('input[name="email"]'),
	            name:       $('input[name="name"]'),
	            company:    $('input[name="company"]'),
	            message:    $('textarea[name="message"]')
	        };
	        self.$submit            = $('.btn-contact-submit');
	        self.$overlay           = $('.form__overlay');
	        self.$overlay_status    = $('.form__overlay .form__overlay__status');
	        self.$overlay_icon      = $('.form__overlay .form__overlay__icon');
	        self.$form = $('.contact__form');
	        self.$form.on('submit', function(e){
	            e.preventDefault();
	        });
	        self.$submit.on('click', self.send);
	        $('.asttbc').tooltip({
	            trigger: 'hover',
	            title: 'Applied Science Technologists & Technicians of BC'
	        });        
	    },
	    _getFormData: function(){
	        var self = this;
	        return {
	            email:      self.$inputs.email.val(),
	            name:       self.$inputs.name.val(),
	            company:    self.$inputs.company.val(),
	            message:    self.$inputs.message.val(),
	        }
	    },
	    _showError: function(field, msg){
	        var self = this;
	        self.$inputs[field].tooltip({
	            title: msg,
	            trigger: 'manual',
	            placement: 'left',
	            template: '<div class="tooltip tooltip--error" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
	        })
	        .attr('data-original-title', msg)
	        .tooltip('show');        
	    },
	    _validateForm: function(){
	        var self = this;
	        validate.validators.presence.message = "is required";
	        
	        var constraints = {
	            name: {
	                presence: {message: '^ Name is required'}
	            },
	            company: {
	                presence: {message : "^Company is required"}
	            },
	            email: {
	                email: true,
	                presence: true
	            },
	            message: {
	                presence: {message: '^ Please provide a message'}
	            }
	        };   
	        // Validate required fields
	        var validation = validate(self._getFormData(), constraints);

	        if(validation){
	            $.each(validation, function(field, errors){
	                self._showError(field, errors[0]);
	            });

	            $.each(self.$inputs, function(field, $input){
	                $input.off().on('input', function(){
	                    try{
	                        $(this).tooltip('destroy');
	                    }catch(e){}
	                })
	            });
	        }
	        return validation;        
	    },
	    send: function(){
	        var self = App;
	        if(self.$submit.hasClass('btn-primary--success') || self.submitXHR){
	            return;
	        }
	        if(self._validateForm()){
	            return;
	        }
	        
	        self.submitXHR = $.ajax({
	            method: 'POST',
	            url: '/contact-submit',
	            data: App._getFormData()
	        });
	        self.$overlay.fadeIn('fast');
	        
	        self.submitXHR
	            .success(function(res){
	                self.$overlay_status.html('Thanks for reaching out!');
	                self.$overlay_icon.removeClass('fa-spin fa-spinner').addClass('fa-check');
	                self.$overlay.css('background', '#49b050');
	            })
	            .error(function(err){
	                self.$overlay_status.html('Oops. Something went wrong. <br/> Please refresh the page and try again.');
	                self.$overlay_icon.removeClass('fa-spin fa-spinner').addClass('fa-meh-o');
	                self.$overlay.css('background', '#ed6a43');
	            });
	        
	    }
	    
	};


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }
/******/ ]);