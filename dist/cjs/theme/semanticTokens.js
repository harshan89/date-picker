"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var tokens_1 = tslib_1.__importDefault(require("./tokens"));
var semanticTokens = {
    colors: {
        'bg-default': {
            _light: tokens_1.default.colors.light['bg-default'],
            _dark: tokens_1.default.colors.dark['bg-default'],
        },
        'fg-default': {
            _light: tokens_1.default.colors.light['fg-default'],
            _dark: tokens_1.default.colors.dark['fg-default'],
        },
        'overlay-bg': {
            _light: tokens_1.default.colors.light['overlay-bg'],
            _dark: tokens_1.default.colors.dark['overlay-bg'],
        },
    },
};
exports.default = semanticTokens;
//# sourceMappingURL=semanticTokens.js.map