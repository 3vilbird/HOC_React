import React from 'react';
import logo from './logo.svg';
import './App.css';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import Welcome from './component/Welcome';
import CDatePicker from './Test_MUI/CDatePicker';
import DatePicker from './Test_MUI/DatePicker';




function App() {


  const [selectedDate, handleDateChange] = React.useState(new Date())

  return (
    <div className="App">
      <h1>hello form react</h1>
      <ClickCounter />
      <HoverCounter />
      <Welcome isLoaded={false} user="Gana" />
      {
        //<CDatePicker />
      }
      <DatePicker
        format="HH:mm"
        label="HOC TESTING"
        onChange={date => handleDateChange(date)}
        value={selectedDate}
        Type="time"
      />
    </div>
  );
}

export default App;
