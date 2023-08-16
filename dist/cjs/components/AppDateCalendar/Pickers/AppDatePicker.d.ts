import { FC, ReactNode } from 'react';
interface Props {
    icon?: ReactNode;
    onDateSelect: (date: Date) => void;
    prePos?: {
        x?: number;
        y?: number;
    };
}
declare const AppDatePicker: FC<Props>;
export default AppDatePicker;
