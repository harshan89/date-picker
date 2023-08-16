import { BoxProps } from '@chakra-ui/react';
import { Dispatch, FC, SetStateAction } from 'react';
interface Props extends BoxProps {
    handleDateClick: (date: Date) => void;
    isSelected: boolean;
    date: Date;
    day: number;
    validMaxDate?: Date | undefined;
    dateRange?: {
        startDate: Date | undefined;
        endDate: Date | undefined;
    };
    tempRangeEndDate?: Date;
    setTempRangeEndDate?: Dispatch<SetStateAction<Date | undefined>>;
}
declare const AppCalenderDate: FC<Props>;
export default AppCalenderDate;
