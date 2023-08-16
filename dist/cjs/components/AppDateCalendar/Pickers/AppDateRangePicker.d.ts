import { FC, ReactNode } from 'react';
interface Props {
    icon: ReactNode;
    id: number;
    onRangeSelect: (startDate: Date, endDate: Date, key: number) => void;
    validMaxDate?: Date | undefined;
    initialDate1?: Date;
    initialDate2?: Date;
    prePos?: {
        x?: number;
        y?: number;
    };
}
declare const AppDateRangePicker: FC<Props>;
export default AppDateRangePicker;
