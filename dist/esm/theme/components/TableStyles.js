export var TableStyles = {
    parts: ['th', 'tr', 'td'],
    baseStyle: {
        th: {
            textTransform: 'capitalize',
            backgroundColor: '#252525'
        },
        tr: {
            backgroundColor: '#252525'
        },
        td: {
            backgroundColor: '#252525'
        }
    },
    variants: {
        default: {
            tr: {
                th: {
                    border: '1.5px solid #1A1A1A',
                    paddingLeft: '10px'
                },
                td: {
                    transition: '0.8s',
                    border: '1.5px solid #1A1A1A',
                    padding: '10px'
                },
                _hover: {
                    td: {
                        background: '#000000'
                    }
                }
            }
        },
        simple: {
            tr: {
                th: {
                    border: 'none',
                    paddingLeft: '10px',
                    backgroundColor: 'insights-section-bg-color',
                    textAlign: 'center',
                    minWidth: '150px'
                },
                td: {
                    transition: '0.8s',
                    border: '1.5px solid #1A1A1A',
                    padding: '10px',
                    minWidth: '150px'
                }
            }
        }
    }
};
//# sourceMappingURL=TableStyles.js.map