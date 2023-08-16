export declare const TableStyles: {
    parts: string[];
    baseStyle: {
        th: {
            textTransform: string;
            backgroundColor: string;
        };
        tr: {
            backgroundColor: string;
        };
        td: {
            backgroundColor: string;
        };
    };
    variants: {
        default: {
            tr: {
                th: {
                    border: string;
                    paddingLeft: string;
                };
                td: {
                    transition: string;
                    border: string;
                    padding: string;
                };
                _hover: {
                    td: {
                        background: string;
                    };
                };
            };
        };
        simple: {
            tr: {
                th: {
                    border: string;
                    paddingLeft: string;
                    backgroundColor: string;
                    textAlign: string;
                    minWidth: string;
                };
                td: {
                    transition: string;
                    border: string;
                    padding: string;
                    minWidth: string;
                };
            };
        };
    };
};
