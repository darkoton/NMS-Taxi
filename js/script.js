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

/***/ "./src/js/modules/spoiler.js":
/*!***********************************!*\
  !*** ./src/js/modules/spoiler.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nconst spollersArray = document.querySelectorAll('[data-spollers]');\r\n\r\nif (spollersArray.length > 0) {\r\n  // Получение обычных спойлеров\r\n  const spollersRegular = Array.from(spollersArray).filter(function (item, index, self) {\r\n    return !item.dataset.spollers.split(',')[0];\r\n  });\r\n  // Инициализация обычных спойлеров\r\n  if (spollersRegular.length > 0) {\r\n    initSpollers(spollersRegular);\r\n  }\r\n\r\n  // Получение спойлеров с медиа запросами\r\n  const spollersMedia = Array.from(spollersArray).filter(function (item, index, self) {\r\n    return item.dataset.spollers.split(',')[0];\r\n  });\r\n\r\n  // Инициализация спойлеров с медиа запросами\r\n  if (spollersMedia.length > 0) {\r\n    const breakpointsArray = [];\r\n    spollersMedia.forEach(item => {\r\n      const params = item.dataset.spollers;\r\n      const breakpoint = {};\r\n      const paramsArray = params.split(',');\r\n      breakpoint.value = paramsArray[0];\r\n      breakpoint.type = paramsArray[1] ? paramsArray[1].trim() : 'max';\r\n      breakpoint.item = item;\r\n      breakpointsArray.push(breakpoint);\r\n    });\r\n\r\n    // Получаем уникальные брейкпоинты\r\n    let mediaQueries = breakpointsArray.map(function (item) {\r\n      return '(' + item.type + '-width: ' + item.value + 'px),' + item.value + ',' + item.type;\r\n    });\r\n    mediaQueries = mediaQueries.filter(function (item, index, self) {\r\n      return self.indexOf(item) === index;\r\n    });\r\n\r\n    // Работаем с каждым брейкпоинтом\r\n    mediaQueries.forEach(breakpoint => {\r\n      const paramsArray = breakpoint.split(',');\r\n      const mediaBreakpoint = paramsArray[1];\r\n      const mediaType = paramsArray[2];\r\n      const matchMedia = window.matchMedia(paramsArray[0]);\r\n\r\n      // Объекты с нужными условиями\r\n      const spollersArray = breakpointsArray.filter(function (item) {\r\n        if (item.value === mediaBreakpoint && item.type === mediaType) {\r\n          return true;\r\n        }\r\n      });\r\n      // Событие\r\n      matchMedia.addListener(function () {\r\n        initSpollers(spollersArray, matchMedia);\r\n      });\r\n      initSpollers(spollersArray, matchMedia);\r\n    });\r\n  }\r\n  // Инициализация\r\n  function initSpollers(spollersArray, matchMedia = false) {\r\n    spollersArray.forEach(spollersBlock => {\r\n      spollersBlock = matchMedia ? spollersBlock.item : spollersBlock;\r\n      if (matchMedia.matches || !matchMedia) {\r\n        spollersBlock.classList.add('_init');\r\n        initSpollerBody(spollersBlock);\r\n        spollersBlock.addEventListener('click', setSpollerAction);\r\n      } else {\r\n        spollersBlock.classList.remove('_init');\r\n        initSpollerBody(spollersBlock, false);\r\n        spollersBlock.removeEventListener('click', setSpollerAction);\r\n      }\r\n    });\r\n  }\r\n  // Работа с контентом\r\n  function initSpollerBody(spollersBlock, hideSpollerBody = true) {\r\n    const spollerTitles = spollersBlock.querySelectorAll('[data-spoller]');\r\n    if (spollerTitles.length > 0) {\r\n      spollerTitles.forEach(spollerTitle => {\r\n        if (hideSpollerBody) {\r\n          spollerTitle.removeAttribute('tabindex');\r\n          if (!spollerTitle.classList.contains('_active')) {\r\n            spollerTitle.nextElementSibling.hidden = true;\r\n          }\r\n        } else {\r\n          spollerTitle.setAttribute('tabindex', '-1');\r\n          spollerTitle.nextElementSibling.hidden = false;\r\n        }\r\n      });\r\n    }\r\n  }\r\n  function setSpollerAction(e) {\r\n    const el = e.target;\r\n    if (el.hasAttribute('data-spoller') || el.closest('[data-spoller]')) {\r\n      const spollerTitle = el.hasAttribute('data-spoller') ? el : el.closest('[data-spoller]');\r\n      const spollersBlock = spollerTitle.closest('[data-spollers]');\r\n      const oneSpoller = spollersBlock.hasAttribute('data-one-spoller') ? true : false;\r\n      if (!spollersBlock.querySelectorAll('._slide').length) {\r\n        if (oneSpoller && !spollerTitle.classList.contains('_active')) {\r\n          hideSpollersBody(spollersBlock);\r\n        }\r\n        spollerTitle.classList.toggle('_active');\r\n        _slideToggle(spollerTitle.nextElementSibling, 500);\r\n      }\r\n      e.preventDefault();\r\n    }\r\n  }\r\n  function hideSpollersBody(spollersBlock) {\r\n    const spollerActiveTitle = spollersBlock.querySelector('[data-spoller]._active');\r\n    if (spollerActiveTitle) {\r\n      spollerActiveTitle.classList.remove('_active');\r\n      _slideUp(spollerActiveTitle.nextElementSibling, 500);\r\n    }\r\n  }\r\n}\r\n\r\nlet _slideUp = (target, duration = 500) => {\r\n  if (!target.classList.contains('_slide')) {\r\n    target.classList.add('_slide');\r\n    target.style.transitionProperty = 'height, margin, padding';\r\n    target.style.transitionDuration = duration + 'ms';\r\n    target.style.height = target.offsetHeight + 'px';\r\n    target.offsetHeight;\r\n    target.style.overflow = 'hidden';\r\n    target.style.height = 0;\r\n    target.style.paddingTop = 0;\r\n    target.style.paddingBottom = 0;\r\n    target.style.marginTop = 0;\r\n    target.style.marginBottom = 0;\r\n    window.setTimeout(() => {\r\n      target.hidden = true;\r\n      target.style.removeProperty('height');\r\n      target.style.removeProperty('padding-top');\r\n      target.style.removeProperty('padding-bottom');\r\n      target.style.removeProperty('margin-top');\r\n      target.style.removeProperty('margin-bottom');\r\n      target.style.removeProperty('overflow');\r\n      target.style.removeProperty('transition-duration');\r\n      target.style.removeProperty('transition-property');\r\n      target.classList.remove('_slide');\r\n    }, duration);\r\n  }\r\n};\r\nlet _slideDown = (target, duration = 500) => {\r\n  if (!target.classList.contains('_slide')) {\r\n    target.classList.add('_slide');\r\n    if (target.hidden) {\r\n      target.hidden = false;\r\n    }\r\n    let height = target.offsetHeight;\r\n    target.style.overflow = 'hidden';\r\n    target.style.height = 0;\r\n    target.style.paddingTop = 0;\r\n    target.style.paddingBottom = 0;\r\n    target.style.marginTop = 0;\r\n    target.style.marginBottom = 0;\r\n    target.offsetHeight;\r\n    target.style.transitionProperty = 'height, margin, padding';\r\n    target.style.transitionDuration = duration + 'ms';\r\n    target.style.height = height + 'px';\r\n    target.style.removeProperty('padding-top');\r\n    target.style.removeProperty('padding-bottom');\r\n    target.style.removeProperty('margin-top');\r\n    target.style.removeProperty('margin-bottom');\r\n    window.setTimeout(() => {\r\n      target.style.removeProperty('height');\r\n      target.style.removeProperty('overflow');\r\n      target.style.removeProperty('transition-duration');\r\n      target.style.removeProperty('transition-property');\r\n      target.classList.remove('_slide');\r\n    }, duration);\r\n  }\r\n};\r\nlet _slideToggle = (target, duration = 500) => {\r\n  if (target.hidden) {\r\n    return _slideDown(target, duration);\r\n  } else {\r\n    return _slideUp(target, duration);\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://gulp-template-lite/./src/js/modules/spoiler.js?");

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nlet tabs = () => {\r\n  let nav = document.querySelectorAll('.tab'),\r\n    result = document.querySelectorAll('.tab-block'),\r\n    tabName;\r\n\r\n  nav.forEach(item => {\r\n    item.addEventListener('click', selectnav);\r\n  });\r\n\r\n  function selectnav() {\r\n    const parent = this.closest('.tabs');\r\n    if (!parent) {\r\n      return;\r\n    }\r\n\r\n    const currentNav = parent.querySelectorAll('.tab');\r\n    currentNav.forEach(item => {\r\n      item.classList.remove('_active');\r\n    });\r\n    this.classList.add('_active');\r\n    tabName = this.getAttribute('data-tab-name');\r\n    selectresult(tabName, parent);\r\n  }\r\n\r\n  function selectresult(tabName, parent) {\r\n    const blocks = parent.querySelectorAll('.tab-block');\r\n    blocks.forEach(item => {\r\n      item.classList.contains(tabName) ? item.classList.add('_active') : item.classList.remove('_active');\r\n    });\r\n  }\r\n};\r\n\r\ntabs();\r\n\n\n//# sourceURL=webpack://gulp-template-lite/./src/js/modules/tabs.js?");

/***/ }),

/***/ "./src/js/modules/webp.js":
/*!********************************!*\
  !*** ./src/js/modules/webp.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isWebp)\n/* harmony export */ });\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\nfunction isWebp() {\r\n  // Проверка поддержки webp\r\n  function testWebP(callback) {\r\n    let webP = new Image();\r\n    webP.onload = webP.onerror = () => {\r\n      callback(webP.height == 2);\r\n    };\r\n    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';\r\n  }\r\n\r\n  // Добавление класса _webp или _no-webp для HTML\r\n  testWebP(support => {\r\n    let className = support === true ? 'webp' : 'no-webp';\r\n    document.documentElement.classList.add(className);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://gulp-template-lite/./src/js/modules/webp.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_webp_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/webp.js */ \"./src/js/modules/webp.js\");\n/* harmony import */ var _modules_spoiler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/spoiler.js */ \"./src/js/modules/spoiler.js\");\n/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs.js */ \"./src/js/modules/tabs.js\");\n//< \" modules \" >=============================================================================================================>//\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_webp_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n//< \" popups \" >=============================================================================================================>//\r\n\r\nconst popups = document.querySelectorAll('.popup');\r\nconst openBtns = Array.from(document.querySelectorAll('[data-popup-open]'));\r\n\r\nwindow.addEventListener('click', ({ target }) => {\r\n  const btn = target.closest('[data-popup-open]');\r\n\r\n  if (btn && !openBtns.includes(btn)) {\r\n    openBtns.push(btn);\r\n    btn.addEventListener('click', () => openPopup(btn));\r\n    openPopup(btn);\r\n  }\r\n});\r\n\r\nopenBtns.forEach(btn => {\r\n  btn.addEventListener('click', () => openPopup(btn));\r\n});\r\n\r\nfunction openPopup(btn) {\r\n  const popup = document.querySelector('.' + btn.dataset.popupOpen);\r\n  popup.classList.add('active');\r\n}\r\n\r\npopups.forEach(popup => {\r\n  const closeBtns = popup.querySelectorAll('.popup-close');\r\n\r\n  closeBtns.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      popup.classList.remove('active');\r\n    });\r\n  });\r\n});\r\n\r\nwindow.addEventListener('click', ({ target }) => {\r\n  if (!target.closest('.popup-body') && !target.closest('[data-popup-open]')) {\r\n    popups.forEach(popup => {\r\n      popup.classList.remove('active');\r\n    });\r\n  }\r\n});\r\n\r\n//< \" СКРИПТЫ \" >=============================================================================================================>//\r\n\r\n// Code field\r\nconst codeFields = document.querySelectorAll('.form__code-field');\r\ncodeFields.forEach(field => {\r\n  const inputs = field.querySelectorAll('input');\r\n\r\n  inputs.forEach(input => {\r\n    input.addEventListener('input', event => {\r\n      event.preventDefault();\r\n\r\n      const target = event.target;\r\n      const value = event.target.value;\r\n\r\n      if (value > 9) {\r\n        target.value = value.slice(0, -1);\r\n      }\r\n\r\n      let nextInput;\r\n\r\n      if (event.inputType === 'insertText') {\r\n        nextInput = field.querySelector(`[data-order=\"${+target.dataset.order + 1}\"]`);\r\n      } else if (event.inputType === 'deleteContentBackward') {\r\n        nextInput = field.querySelector(`[data-order=\"${+target.dataset.order - 1}\"]`);\r\n      }\r\n      if (nextInput) {\r\n        nextInput.focus();\r\n      }\r\n    });\r\n  });\r\n});\r\n\r\n// Language select\r\nconst langSelects = document.querySelectorAll('.form__language');\r\nlangSelects.forEach(select => {\r\n  const value = select.querySelector('.form__language-value');\r\n  const valueField = value.querySelector('span');\r\n  const list = select.querySelector('.form__language-list');\r\n\r\n  value.onclick = () => {\r\n    select.classList.toggle('open');\r\n  };\r\n\r\n  list.querySelectorAll('li').forEach(li => {\r\n    li.onclick = () => {\r\n      valueField.textContent = li.textContent;\r\n      select.classList.remove('open');\r\n    };\r\n  });\r\n});\r\n\r\n//\r\n\r\nconst switchRegister = document.querySelector('.form__switch');\r\n\r\nif (switchRegister) {\r\n  switchRegister.querySelectorAll('button').forEach(button => {\r\n    button.onclick = () => {\r\n      document.querySelector('.driver').style.display = 'none';\r\n      document.querySelector('.partner').style.display = 'none';\r\n\r\n      document.querySelector(`.${button.dataset.value}`).style.display = 'flex';\r\n\r\n      switchRegister.querySelectorAll('button').forEach(btn => {\r\n        btn.classList.remove('active');\r\n      });\r\n\r\n      button.classList.add('active');\r\n    };\r\n  });\r\n}\r\n\r\n// Event delegation\r\nwindow.addEventListener('click', ({ target }) => {\r\n  if (!target.closest('.form__language')) {\r\n    document.querySelectorAll('.form__language').forEach(list => {\r\n      list.classList.remove('open');\r\n    });\r\n  }\r\n});\r\n\r\n// Burger Dashboad header\r\n\r\nconst burgerButtonOpen = document.querySelector('.header__burger');\r\nconst burgerButtonClose = document.querySelector('.menu__close');\r\nconst menu = document.querySelector('.menu');\r\nburgerButtonOpen.addEventListener('click', () => {\r\n  menu.classList.add('active');\r\n});\r\n\r\nburgerButtonClose.addEventListener('click', () => {\r\n  menu.classList.remove('active');\r\n});\r\n\n\n//# sourceURL=webpack://gulp-template-lite/./src/js/script.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;