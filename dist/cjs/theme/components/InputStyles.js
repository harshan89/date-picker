"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputStyles = void 0;
exports.InputStyles = {
    baseStyle: {
        borderRadius: 'sm',
        color: 'fg-default',
        _focus: {},
        _hover: {}
    },
    sizes: {
        sm: {
            field: {
                fontSize: 'sm',
                height: 8,
                paddingX: 4
            }
        },
        lg: {
            fontSize: 'lg',
            height: 8,
            paddingX: 6
        }
    },
    variants: {
        outline: {
            field: {
                _focus: {}
            }
        },
        filled: {
            field: {
                _focus: {}
            }
        },
        primary: {
            field: {
                border: '1px solid ',
                borderColor: 'txt-border-outline',
                _focus: {
                    borderColor: 'txt-border-outline'
                }
            }
        }
    }
};
//# sourceMappingURL=InputStyles.js.map