import React from 'react';
import { MuiPickersUtilsProvider, DatePicker, KeyboardDatePicker, TimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';



const CDatePicker = () => {
    const [selectedDate, handleDateChange] = React.useState(new Date());
    return (


        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                autoOk
                variant="inline"
                inputVariant="outlined"
                label="With keyboard"
                format="MM/dd/yyyy"
                value={selectedDate}
                InputAdornmentProps={{ position: "end" }}
                onChange={date => handleDateChange(date)}
            />
            <TimePicker
                variant="inline"
                inputVariant="outlined"
                label="Inline mode"
                value={selectedDate}
                InputAdornmentProps={{ position: "start" }}
                onChange={handleDateChange}
            />
            <KeyboardDateTimePicker
                variant="inline"
                ampm={false}
                label="With keyboard"
                inputVariant="outlined"
                value={selectedDate}
                onChange={handleDateChange}
                onError={console.log}
                disablePast
                format="yyyy/MM/dd HH:mm"
            />

        </MuiPickersUtilsProvider>

    );
}

export default CDatePicker;