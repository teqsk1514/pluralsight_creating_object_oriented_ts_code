/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/savings-account */ "./src/scripts/savings-account.ts");
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
/* harmony import */ var _scripts_atm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/atm */ "./src/scripts/atm.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var Main = /** @class */ (function () {
    function Main(renderer) {
        this.renderer = renderer;
    }
    Main.prototype.loadAccounts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("/data.json")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["CheckingAccount"](__assign({}, data.checkingAccount));
                        this.savingsAccount = new _scripts_savings_account__WEBPACK_IMPORTED_MODULE_1__["SavingsAccount"](__assign({}, data.savingsAccount));
                        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_5__["ATM"](this.checkingAccount);
                        html = this.renderAccounts();
                        this.renderer.render("\n            <h2>Welcome to Acme Bank!</h2><br />\n            <image src=\"src/images/acmebank.jpg\" height=\"150\">\n            <br /><br />\n            <h5>Your Accounts:</h5><br />\n            " + html + "\n        ");
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case "checking":
                this.currentAccount = this.checkingAccount;
                break;
            case "savings":
                this.currentAccount = this.savingsAccount;
                break;
            case "atm":
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAtm = function () {
        var html = "\n                <h3>ATM</h3>\n                <image src=\"src/images/atm.jpg\" height=\"150\">\n                <br /><br />\n                Current Checking Account Balance: $" + this.checkingAccount.balance + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true, true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false, true)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.renderAccounts = function () {
        var acctsHtml = "";
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_2__["AccountList"]();
        accList.add(this.checkingAccount);
        accList.add(this.savingsAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + "<br />";
        });
        return acctsHtml;
    };
    Main.prototype.renderAccount = function (account) {
        var accountType = _scripts_enums__WEBPACK_IMPORTED_MODULE_4__["AccountType"][account.accountType];
        var html = "\n                <h3>" + accountType + " Account</h3>\n                <image src=\"src/images/" + accountType.toLowerCase() + ".jpg\" height=\"150\">\n                <br /><br />\n                <span class=\"label\">Owner:</span> " + account.title + "\n                <br />\n                <span class=\"label\">Balance:</span> $" + account.balance.toFixed(2) + "\n                <br /><br />\n                $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n                <button onclick=\"main.depositWithDrawal(true)\">Deposit</button>&nbsp;\n                <button onclick=\"main.depositWithDrawal(false)\">Withdrawal</button>&nbsp;\n            ";
        this.renderer.render(html);
    };
    Main.prototype.depositWithDrawal = function (deposit, atm) {
        var amountInput = document.querySelector("#depositWithdrawalAmount");
        var amount = +amountInput.value;
        var error;
        try {
            if (deposit) {
                if (atm) {
                    this.atm.deposit(amount);
                }
                else {
                    this.currentAccount.deposit(amount);
                }
            }
            else {
                if (atm) {
                    this.atm.withdrawal(amount);
                }
                else {
                    this.currentAccount.withdrawal(amount);
                }
            }
        }
        catch (e) {
            error = e;
        }
        atm ? this.renderAtm() : this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
// Create main object and add handlers for it
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["Renderer"](document.querySelector("#viewTemplate"));
var main = new Main(renderer);
main.loadAccounts();
// Quick and easy way to expose a global API that can hook to the Main object
// so that we can get to it from click and events and others.
// Yes, there are other ways but this gets the job done for this demo.
window.main = main;


/***/ }),

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
/*! exports provided: AccountList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountList", function() { return AccountList; });
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());



/***/ }),

/***/ "./src/scripts/atm.ts":
/*!****************************!*\
  !*** ./src/scripts/atm.ts ***!
  \****************************/
/*! exports provided: ATM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ATM", function() { return ATM; });
var ATM = /** @class */ (function () {
    function ATM(account) {
        this.account = account;
    }
    ATM.prototype.deposit = function (amount) {
        this.account.deposit(amount);
    };
    ATM.prototype.withdrawal = function (amount) {
        this.account.withdrawal(amount);
    };
    return ATM;
}());



/***/ }),

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
/*! exports provided: BankAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankAccount", function() { return BankAccount; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/scripts/constants.ts");

var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._balance = 0;
        this.id = accountSettings.id;
        this.title = accountSettings.title;
        this.balance = accountSettings.balance;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdrawal = function (amount) {
        this.balance -= amount;
    };
    BankAccount.prototype.getAccountInfo = function () {
        return {
            routingNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].ROUTING_NUMBER,
            bankNumber: _constants__WEBPACK_IMPORTED_MODULE_0__["Constants"].BANK_NUMBER,
        };
    };
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (val) {
            if (val >= 0) {
                this._balance = val;
            }
            else {
                throw Error("Balance cannot be negative!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return BankAccount;
}());



/***/ }),

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/*! exports provided: CheckingAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckingAccount", function() { return CheckingAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Checking;
        return _this;
        //   getAccountInfo() {
        //     return {};
        //   }
    }
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ }),

/***/ "./src/scripts/constants.ts":
/*!**********************************!*\
  !*** ./src/scripts/constants.ts ***!
  \**********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ROUTING_NUMBER", {
        get: function () {
            return "1231A4433Y2";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BANK_NUMBER", {
        get: function () {
            return 100008374;
        },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());



/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/*! exports provided: AccountType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountType", function() { return AccountType; });
var AccountType;
(function (AccountType) {
    AccountType[AccountType["Checking"] = 0] = "Checking";
    AccountType[AccountType["Savings"] = 1] = "Savings";
})(AccountType || (AccountType = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
var Renderer = /** @class */ (function () {
    function Renderer(viewTemplate) {
        this.viewTemplate = viewTemplate;
        this.viewTemplate.innerHTML = "\n              <h2>Welcome to Acme Bank!</h2>\n              <image src=\"src/images/acmebank.jpg\" height=\"150\">\n              <br /><br />\n              <h5>Your Accounts:</h5><br />";
    }
    Renderer.prototype.render = function (html) {
        this.viewTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.viewTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">" + message + "</div>";
    };
    return Renderer;
}());



/***/ }),

/***/ "./src/scripts/savings-account.ts":
/*!****************************************!*\
  !*** ./src/scripts/savings-account.ts ***!
  \****************************************/
/*! exports provided: SavingsAccount */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SavingsAccount", function() { return SavingsAccount; });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.accountType = _enums__WEBPACK_IMPORTED_MODULE_1__["AccountType"].Savings;
        _this._interestRate = accountSettings.interestRate;
        // Simulate interest over time
        setInterval(function () {
            _this.addInterest();
        }, 60000);
        return _this;
    }
    // getAccountInfo() {
    //   return {};
    // }
    SavingsAccount.prototype.deposit = function (amount) {
        var newAmount = amount + amount * (this._interestRate / 100);
        this.balance += newAmount;
    };
    SavingsAccount.prototype.addInterest = function () {
        this.balance = this.balance + this.balance * (this._interestRate / 100);
    };
    return SavingsAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["BankAccount"]));



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2F0bS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9iYW5rLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMvc2F2aW5ncy1hY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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SSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxDQTFCbUMseURBQVcsR0EwQjlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4udHNcIik7XG4iLCJpbXBvcnQgeyBDaGVja2luZ0FjY291bnQgfSBmcm9tIFwiLi9zY3JpcHRzL2NoZWNraW5nLWFjY291bnRcIjtcbmltcG9ydCB7IFNhdmluZ3NBY2NvdW50IH0gZnJvbSBcIi4vc2NyaXB0cy9zYXZpbmdzLWFjY291bnRcIjtcbmltcG9ydCB7IEFjY291bnRMaXN0IH0gZnJvbSBcIi4vc2NyaXB0cy9hY2NvdW50LWxpc3RcIjtcbmltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSBcIi4vc2NyaXB0cy9iYW5rLWFjY291bnRcIjtcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vc2NyaXB0cy9yZW5kZXJlclwiO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi9zY3JpcHRzL2VudW1zXCI7XG5pbXBvcnQgeyBBVE0gfSBmcm9tIFwiLi9zY3JpcHRzL2F0bVwiO1xuXG5jbGFzcyBNYWluIHtcbiAgY2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG4gIHNhdmluZ3NBY2NvdW50OiBTYXZpbmdzQWNjb3VudDtcbiAgY3VycmVudEFjY291bnQ6IEJhbmtBY2NvdW50O1xuICBhdG06IEFUTTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge31cblxuICBhc3luYyBsb2FkQWNjb3VudHMoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcIi9kYXRhLmpzb25cIik7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB0aGlzLmNoZWNraW5nQWNjb3VudCA9IG5ldyBDaGVja2luZ0FjY291bnQoeyAuLi5kYXRhLmNoZWNraW5nQWNjb3VudCB9KTtcbiAgICB0aGlzLnNhdmluZ3NBY2NvdW50ID0gbmV3IFNhdmluZ3NBY2NvdW50KHsgLi4uZGF0YS5zYXZpbmdzQWNjb3VudCB9KTtcbiAgICB0aGlzLmF0bSA9IG5ldyBBVE0odGhpcy5jaGVja2luZ0FjY291bnQpO1xuXG4gICAgbGV0IGh0bWwgPSB0aGlzLnJlbmRlckFjY291bnRzKCk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoYFxuICAgICAgICAgICAgPGgyPldlbGNvbWUgdG8gQWNtZSBCYW5rITwvaDI+PGJyIC8+XG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwic3JjL2ltYWdlcy9hY21lYmFuay5qcGdcIiBoZWlnaHQ9XCIxNTBcIj5cbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPGg1PllvdXIgQWNjb3VudHM6PC9oNT48YnIgLz5cbiAgICAgICAgICAgICR7aHRtbH1cbiAgICAgICAgYCk7XG4gIH1cblxuICBjaGFuZ2VWaWV3KHZpZXc/OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHZpZXcpIHtcbiAgICAgIGNhc2UgXCJjaGVja2luZ1wiOlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5jaGVja2luZ0FjY291bnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNhdmluZ3NcIjpcbiAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuc2F2aW5nc0FjY291bnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImF0bVwiOlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5jaGVja2luZ0FjY291bnQ7XG4gICAgICAgIHRoaXMucmVuZGVyQXRtKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpO1xuICB9XG5cbiAgcmVuZGVyQXRtKCkge1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgICAgICAgICAgPGgzPkFUTTwvaDM+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgIEN1cnJlbnQgQ2hlY2tpbmcgQWNjb3VudCBCYWxhbmNlOiAkJHt0aGlzLmNoZWNraW5nQWNjb3VudC5iYWxhbmNlfVxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCI+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbCh0cnVlLCB0cnVlKVwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlLCB0cnVlKVwiPldpdGhkcmF3YWw8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIGA7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoaHRtbCk7XG4gIH1cblxuICByZW5kZXJBY2NvdW50cygpIHtcbiAgICBsZXQgYWNjdHNIdG1sOiBzdHJpbmcgPSBcIlwiO1xuICAgIGNvbnN0IGFjY0xpc3QgPSBuZXcgQWNjb3VudExpc3QoKTtcbiAgICBhY2NMaXN0LmFkZCh0aGlzLmNoZWNraW5nQWNjb3VudCk7XG4gICAgYWNjTGlzdC5hZGQodGhpcy5zYXZpbmdzQWNjb3VudCk7XG5cbiAgICBhY2NMaXN0LmdldEFjY291bnRzKCkuZm9yRWFjaCgoYWNjdCwgaW5kZXgpID0+IHtcbiAgICAgIGFjY3RzSHRtbCArPSBhY2N0LnRpdGxlICsgXCI8YnIgLz5cIjtcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjdHNIdG1sO1xuICB9XG5cbiAgcmVuZGVyQWNjb3VudChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xuICAgIGNvbnN0IGFjY291bnRUeXBlID0gQWNjb3VudFR5cGVbYWNjb3VudC5hY2NvdW50VHlwZV07XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgICAgICA8aDM+JHthY2NvdW50VHlwZX0gQWNjb3VudDwvaDM+XG4gICAgICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvJHthY2NvdW50VHlwZS50b0xvd2VyQ2FzZSgpfS5qcGdcIiBoZWlnaHQ9XCIxNTBcIj5cbiAgICAgICAgICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+T3duZXI6PC9zcGFuPiAke2FjY291bnQudGl0bGV9XG4gICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkJhbGFuY2U6PC9zcGFuPiAkJHthY2NvdW50LmJhbGFuY2UudG9GaXhlZChcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICAgICQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCI+Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5kZXBvc2l0V2l0aERyYXdhbCh0cnVlKVwiPkRlcG9zaXQ8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmRlcG9zaXRXaXRoRHJhd2FsKGZhbHNlKVwiPldpdGhkcmF3YWw8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIGA7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoaHRtbCk7XG4gIH1cblxuICBkZXBvc2l0V2l0aERyYXdhbChkZXBvc2l0OiBib29sZWFuLCBhdG0/OiBib29sZWFuKSB7XG4gICAgbGV0IGFtb3VudElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiI2RlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCJcbiAgICApO1xuICAgIGxldCBhbW91bnQgPSArYW1vdW50SW5wdXQudmFsdWU7XG4gICAgbGV0IGVycm9yO1xuICAgIHRyeSB7XG4gICAgICBpZiAoZGVwb3NpdCkge1xuICAgICAgICBpZiAoYXRtKSB7XG4gICAgICAgICAgdGhpcy5hdG0uZGVwb3NpdChhbW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQuZGVwb3NpdChhbW91bnQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoYXRtKSB7XG4gICAgICAgICAgdGhpcy5hdG0ud2l0aGRyYXdhbChhbW91bnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY3VycmVudEFjY291bnQud2l0aGRyYXdhbChhbW91bnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGF0bSA/IHRoaXMucmVuZGVyQXRtKCkgOiB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBDcmVhdGUgbWFpbiBvYmplY3QgYW5kIGFkZCBoYW5kbGVycyBmb3IgaXRcbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdmlld1RlbXBsYXRlXCIpKTtcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihyZW5kZXJlcik7XG5tYWluLmxvYWRBY2NvdW50cygpO1xuXG4vLyBRdWljayBhbmQgZWFzeSB3YXkgdG8gZXhwb3NlIGEgZ2xvYmFsIEFQSSB0aGF0IGNhbiBob29rIHRvIHRoZSBNYWluIG9iamVjdFxuLy8gc28gdGhhdCB3ZSBjYW4gZ2V0IHRvIGl0IGZyb20gY2xpY2sgYW5kIGV2ZW50cyBhbmQgb3RoZXJzLlxuLy8gWWVzLCB0aGVyZSBhcmUgb3RoZXIgd2F5cyBidXQgdGhpcyBnZXRzIHRoZSBqb2IgZG9uZSBmb3IgdGhpcyBkZW1vLlxuKDxhbnk+d2luZG93KS5tYWluID0gbWFpbjtcbiIsImltcG9ydCB7IEJhbmtBY2NvdW50IH0gZnJvbSAnLi9iYW5rLWFjY291bnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFjY291bnRMaXN0IHsgXHJcbiAgICBfYWNjb3VudExpc3Q6IEJhbmtBY2NvdW50W10gPSBbXTtcclxuXHJcbiAgICBhZGQoYWNjb3VudDogQmFua0FjY291bnQpIHtcclxuICAgICAgICB0aGlzLl9hY2NvdW50TGlzdC5wdXNoKGFjY291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjY291bnRzKCk6IEJhbmtBY2NvdW50W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY2NvdW50TGlzdDtcclxuICAgIH1cclxufSBcclxuXHJcbiIsImltcG9ydCB7IERlcG9zaXRXaXRoZHJhd2FsLCBBY2NvdW50IH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY2xhc3MgQVRNIGltcGxlbWVudHMgRGVwb3NpdFdpdGhkcmF3YWwge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY291bnQ6IEFjY291bnQpIHt9XG5cbiAgZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuYWNjb3VudC5kZXBvc2l0KGFtb3VudCk7XG4gIH1cblxuICB3aXRoZHJhd2FsKGFtb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5hY2NvdW50LndpdGhkcmF3YWwoYW1vdW50KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi9lbnVtc1wiO1xuaW1wb3J0IHsgQWNjb3VudCwgQWNjb3VudFNldHRpbmdzLCBBY2NvdW50SW5mbyB9IGZyb20gXCIuL2ludGVyZmFjZXNcIjtcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFua0FjY291bnQgaW1wbGVtZW50cyBBY2NvdW50IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgcHJpdmF0ZSBfYmFsYW5jZSA9IDA7XG4gIGFic3RyYWN0IGFjY291bnRUeXBlOiBBY2NvdW50VHlwZTtcblxuICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY291bnRTZXR0aW5ncykge1xuICAgIHRoaXMuaWQgPSBhY2NvdW50U2V0dGluZ3MuaWQ7XG4gICAgdGhpcy50aXRsZSA9IGFjY291bnRTZXR0aW5ncy50aXRsZTtcbiAgICB0aGlzLmJhbGFuY2UgPSBhY2NvdW50U2V0dGluZ3MuYmFsYW5jZTtcbiAgfVxuXG4gIGRlcG9zaXQoYW1vdW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmJhbGFuY2UgKz0gYW1vdW50O1xuICB9XG5cbiAgd2l0aGRyYXdhbChhbW91bnQ6IG51bWJlcikge1xuICAgIHRoaXMuYmFsYW5jZSAtPSBhbW91bnQ7XG4gIH1cblxuICBnZXRBY2NvdW50SW5mbygpOiBBY2NvdW50SW5mbzxzdHJpbmcsIG51bWJlcj4ge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0aW5nTnVtYmVyOiBDb25zdGFudHMuUk9VVElOR19OVU1CRVIsXG4gICAgICBiYW5rTnVtYmVyOiBDb25zdGFudHMuQkFOS19OVU1CRVIsXG4gICAgfTtcbiAgfVxuXG4gIGdldCBiYWxhbmNlKCkge1xuICAgIHJldHVybiB0aGlzLl9iYWxhbmNlO1xuICB9XG5cbiAgc2V0IGJhbGFuY2UodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsID49IDApIHtcbiAgICAgIHRoaXMuX2JhbGFuY2UgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKFwiQmFsYW5jZSBjYW5ub3QgYmUgbmVnYXRpdmUhXCIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgQmFua0FjY291bnQgfSBmcm9tIFwiLi9iYW5rLWFjY291bnRcIjtcclxuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi9lbnVtc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZWNraW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcclxuICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLkNoZWNraW5nO1xyXG5cclxuICAvLyAgIGdldEFjY291bnRJbmZvKCkge1xyXG4gIC8vICAgICByZXR1cm4ge307XHJcbiAgLy8gICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XG4gIHN0YXRpYyBnZXQgUk9VVElOR19OVU1CRVIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gXCIxMjMxQTQ0MzNZMlwiO1xuICB9XG4gIHN0YXRpYyBnZXQgQkFOS19OVU1CRVIoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gMTAwMDA4Mzc0O1xuICB9XG59XG4iLCJleHBvcnQgZW51bSBBY2NvdW50VHlwZSB7XG4gIENoZWNraW5nLFxuICBTYXZpbmdzLFxufVxuIiwiZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB2aWV3VGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgICA8aDI+V2VsY29tZSB0byBBY21lIEJhbmshPC9oMj5cbiAgICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYWNtZWJhbmsuanBnXCIgaGVpZ2h0PVwiMTUwXCI+XG4gICAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgICA8aDU+WW91ciBBY2NvdW50czo8L2g1PjxiciAvPmA7XG4gIH1cblxuICByZW5kZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgdGhpcy52aWV3VGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxuXG4gIHJlbmRlckVycm9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHRoaXMudmlld1RlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCYW5rQWNjb3VudCB9IGZyb20gXCIuL2JhbmstYWNjb3VudFwiO1xuaW1wb3J0IHsgQWNjb3VudFR5cGUgfSBmcm9tIFwiLi9lbnVtc1wiO1xuaW1wb3J0IHsgQWNjb3VudFNldHRpbmdzIH0gZnJvbSBcIi4vaW50ZXJmYWNlc1wiO1xuXG5leHBvcnQgY2xhc3MgU2F2aW5nc0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudCB7XG4gIHByaXZhdGUgX2ludGVyZXN0UmF0ZTogbnVtYmVyO1xuICBhY2NvdW50VHlwZSA9IEFjY291bnRUeXBlLlNhdmluZ3M7XG5cbiAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBBY2NvdW50U2V0dGluZ3MpIHtcbiAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xuICAgIHRoaXMuX2ludGVyZXN0UmF0ZSA9IGFjY291bnRTZXR0aW5ncy5pbnRlcmVzdFJhdGU7XG5cbiAgICAvLyBTaW11bGF0ZSBpbnRlcmVzdCBvdmVyIHRpbWVcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0aGlzLmFkZEludGVyZXN0KCk7XG4gICAgfSwgNjAwMDApO1xuICB9XG5cbiAgLy8gZ2V0QWNjb3VudEluZm8oKSB7XG4gIC8vICAgcmV0dXJuIHt9O1xuICAvLyB9XG5cbiAgZGVwb3NpdChhbW91bnQ6IG51bWJlcikge1xuICAgIGxldCBuZXdBbW91bnQgPSBhbW91bnQgKyBhbW91bnQgKiAodGhpcy5faW50ZXJlc3RSYXRlIC8gMTAwKTtcbiAgICB0aGlzLmJhbGFuY2UgKz0gbmV3QW1vdW50O1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRJbnRlcmVzdCgpIHtcbiAgICB0aGlzLmJhbGFuY2UgPSB0aGlzLmJhbGFuY2UgKyB0aGlzLmJhbGFuY2UgKiAodGhpcy5faW50ZXJlc3RSYXRlIC8gMTAwKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==