import React from 'react';
import { TextProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
interface Props extends TextProps {
    children: ReactNode;
}
declare const AppText: React.FC<Props & TextProps>;
export default AppText;
