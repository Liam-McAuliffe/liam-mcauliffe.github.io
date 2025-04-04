/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/terminal.js":
/*!*****************************!*\
  !*** ./scripts/terminal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   terminal: () => (/* binding */ terminal)\n/* harmony export */ });\nconst terminal = () => {\n  const codeSnippet = document.getElementById('code-snippet');\n  const cursor = document.querySelector('.cursor');\n\n  const codeText = `// Click the picture for a surprise!\nfunction greet() {\n  console.log(\"Hello, world!\");\n}\ngreet();`;\n\n  let i = 0;\n  function typeWriter() {\n    if (i < codeText.length) {\n      codeSnippet.textContent += codeText.charAt(i);\n      i++;\n      cursor.style.top = codeSnippet.offsetHeight + 'px';\n      setTimeout(typeWriter, 30);\n    }\n  }\n\n  console.log('Hello, world!');\n  typeWriter();\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zY3JpcHRzL3Rlcm1pbmFsLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zY3JpcHRzL3Rlcm1pbmFsLmpzPzdjYjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRlcm1pbmFsID0gKCkgPT4ge1xuICBjb25zdCBjb2RlU25pcHBldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlLXNuaXBwZXQnKTtcbiAgY29uc3QgY3Vyc29yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnNvcicpO1xuXG4gIGNvbnN0IGNvZGVUZXh0ID0gYC8vIENsaWNrIHRoZSBwaWN0dXJlIGZvciBhIHN1cnByaXNlIVxuZnVuY3Rpb24gZ3JlZXQoKSB7XG4gIGNvbnNvbGUubG9nKFwiSGVsbG8sIHdvcmxkIVwiKTtcbn1cbmdyZWV0KCk7YDtcblxuICBsZXQgaSA9IDA7XG4gIGZ1bmN0aW9uIHR5cGVXcml0ZXIoKSB7XG4gICAgaWYgKGkgPCBjb2RlVGV4dC5sZW5ndGgpIHtcbiAgICAgIGNvZGVTbmlwcGV0LnRleHRDb250ZW50ICs9IGNvZGVUZXh0LmNoYXJBdChpKTtcbiAgICAgIGkrKztcbiAgICAgIGN1cnNvci5zdHlsZS50b3AgPSBjb2RlU25pcHBldC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgc2V0VGltZW91dCh0eXBlV3JpdGVyLCAzMCk7XG4gICAgfVxuICB9XG5cbiAgY29uc29sZS5sb2coJ0hlbGxvLCB3b3JsZCEnKTtcbiAgdHlwZVdyaXRlcigpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./scripts/terminal.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/reset.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/styles.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/contact.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/project.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/surpirse.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './styles/terminal.css'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _scripts_terminal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scripts/terminal */ \"./scripts/terminal.js\");\n\n\n\n\n\n\n\n\n\nDocument.addEventListener('onload', () => {\n  (0,_scripts_terminal__WEBPACK_IMPORTED_MODULE_1__.terminal)();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEI7QUFDQztBQUNDO0FBQ0E7QUFDQztBQUNBOztBQUVnQjs7QUFFL0M7QUFDQSxFQUFFLDJEQUFRO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvc3R5bGVzLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2NvbnRhY3QuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvcHJvamVjdC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9zdXJwaXJzZS5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy90ZXJtaW5hbC5jc3MnO1xuXG5pbXBvcnQgeyB0ZXJtaW5hbCB9IGZyb20gJy4uL3NjcmlwdHMvdGVybWluYWwnO1xuXG5Eb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdvbmxvYWQnLCAoKSA9PiB7XG4gIHRlcm1pbmFsKCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;