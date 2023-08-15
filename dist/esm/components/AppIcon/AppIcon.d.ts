import React from 'react';
import { IconProps } from '@chakra-ui/react';
export declare const ChevronLeftIcon: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"svg", IconProps>;
export declare const ChevronRightIcon: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"svg", IconProps>;
export declare const CalenderDoubleArrow: import("@chakra-ui/system/dist/system.types").ComponentWithAs<"svg", IconProps>;
export type iconName = 'chevronLeft' | 'chevronRight' | 'calenderDoubleArrow';
interface AppIconProps extends IconProps {
    name: iconName;
}
declare const AppIcon: ({ name, ...rest }: AppIconProps) => React.JSX.Element;
export default AppIcon;
