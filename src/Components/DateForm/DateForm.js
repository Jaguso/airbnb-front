import React, { Component } from 'react';
import Calendar from 'react-calendar';


class DateForm extends Component {

  constructor(props){
    super(props)
    this.state = {
      start_date: "",
      due_date: "",
      date: new Date() //es la fecha de hoy para que el calendario empiece en hoy
    }
  }

  nextStep = () => {
    //Envía data al store y pasa al siguiente estado

  }

  onChange = (dates) => {
    this.setState(
      {
        start_date: dates[0],
        due_date: dates[1]
      }
    )
  }

  render() {
    return(
      <div className="row justify-content-center">
        <div className="col-md-10">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
            selectRange={true}
          />

          <button className="btn btn-info" onClick={this.nextStep}>Siguiente</button>
        </div>
      </div>
    )
  }
    
}


export default DateForm;