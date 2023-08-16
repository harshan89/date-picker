export var ButtonStyles = {
    baseStyle: {
        color: 'fg-default',
        _focus: {},
        _hover: {}
    },
    sizes: {
        sm: {
            h: '30px',
            w: '90px',
            fontSize: '13px',
            fontWeight: '400'
        },
        md: {
            h: '25px',
            fontSize: '12px',
            fontWeight: '400'
        },
        lg: {
            h: '40px',
            fontSize: '30px',
            fontWeight: '500'
        }
    },
    variants: {
        solid: {
            backgroundColor: 'btn-bg-solid',
            borderRadius: '5px',
            _hover: {
                backgroundColor: 'btn-bg-solid'
            }
        },
        transparent: {
            backgroundColor: 'none'
        },
        bgTransparentIcon: {
            backgroundColor: 'none',
            _hover: {
                color: 'left-menu-icon-hover-color'
            }
        },
        outline: {
            backgroundColor: 'transparent',
            borderRadius: '100px',
            border: '1px solid',
            borderColor: 'btn-border-outline'
        },
        roundedSolid: {
            backgroundColor: 'rounded-btn-bg-color',
            border: '1px solid transparent',
            borderRadius: '100px',
            _hover: {
                backgroundColor: 'btn-bg-solid'
            }
        },
        primary: {
            backgroundColor: 'transparent',
            borderRadius: '5px',
            _hover: {
                backgroundColor: 'btn-bg-solid',
                color: 'black'
            }
        },
        secondary: {
            backgroundColor: 'transparent',
            borderRadius: '5px',
            _hover: {
                backgroundColor: 'rgba(247, 204, 69, 0.2)',
                color: '#ffffff'
            }
        }
    }
};
//# sourceMappingURL=ButtonStyles.js.map