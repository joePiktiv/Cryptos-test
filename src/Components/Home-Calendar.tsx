import { DateType } from "./Home";
import DatePicker from "react-datepicker";

interface CalendarProps {
    date : DateType;
    handleSelect : (value : DateType) => void;
}

export const Calendar = ({date, handleSelect}: CalendarProps) => {
    return (
        <div className="calendar-container">
            <DatePicker selected={date} onChange={(date) => handleSelect(date)} />
        </div>
    )
}