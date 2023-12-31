import { FC, ReactElement } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

export const TaskDateField: FC<IDatefield> = (props): ReactElement => {
  //Destructure props
  // const {
  //   value = new Date(),
  //   disabled = false,
  //   onChange = (date) => console.log(date),
  // } = props;

  // const { value = new Date(), disabled = false, ...rest } = props;

  //state
  // const [date, setDate] = useState<Date | null>(null); // this is the state for the date picker and now we can get rid of it since we are passing it in as a prop. we also removed the useState import

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          label="Due Date"
          {...props}
        />
      </LocalizationProvider>
    </>
  );
};
