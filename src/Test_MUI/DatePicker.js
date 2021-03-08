import React from 'react';
import { MuiPickersUtilsProvider, DatePicker, KeyboardDatePicker, TimePicker, KeyboardDateTimePicker } from '@material-ui/pickers';

// pick a date util library
import MomentUtils from '@date-io/moment';
import DateFnsUtils from '@date-io/date-fns';
import LuxonUtils from '@date-io/luxon';




class datePicker extends React.Component {
    render() {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <h1>from the type not date</h1>
                <KeyboardDateTimePicker
                    autoOk
                    variant="inline"
                    inputVariant="outlined"
                    // label="With keyboard"
                    // format="MM/dd/yyyy"
                    //value={this.props.selectedDate}
                    InputAdornmentProps={{ position: "end" }}
                    //onChange={date => this.props.handleDateChange(date)}
                    {...this.props}
                />
            </MuiPickersUtilsProvider>



        );
    }
}



const dPicker = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            if (this.props.Type == "date") {
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <h1>from the type date</h1>
                        <KeyboardDatePicker
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            InputAdornmentProps={{ position: "end" }}
                            {...this.props} />
                    </MuiPickersUtilsProvider>)

            }
            return super.render();
        }

    }
}




const TPicker = (WrappedComponent) => {
    return class extends WrappedComponent {
        render() {
            if (this.props.Type == "time") {
                return (
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <h1>from the type time</h1>
                        <TimePicker
                            autoOk
                            variant="inline"
                            inputVariant="outlined"
                            InputAdornmentProps={{ position: "end" }}
                            {...this.props} />
                    </MuiPickersUtilsProvider>)

            }
            return super.render();
        }

    }
}







export default TPicker(dPicker(datePicker));


