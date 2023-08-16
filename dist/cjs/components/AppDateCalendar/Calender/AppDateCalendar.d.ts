import React, { Dispatch, SetStateAction } from 'react';
interface AppDateCalendarProps {
    onDateSelect: (date: Date) => void;
    initDate?: Date;
    dateRange?: {
        startDate: Date | undefined;
        endDate: Date | undefined;
    };
    validMaxDate?: Date | undefined;
    tempRangeEndDate?: Date;
    setTempRangeEndDate?: Dispatch<SetStateAction<Date | undefined>>;
}
declare const AppDateCalendar: React.FC<AppDateCalendarProps>;
export default AppDateCalendar;
