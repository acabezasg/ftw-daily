import React, { Component } from 'react';

import css from './Calendar.css';

class Calendar extends Component {
  componentDidMount() {
    const datepicker = window.flatpickr(document.getElementById('required-date'), {
      mode: 'range',
      dateFormat: 'Y-m-d',
    });
    datepicker.element.onchange = () => {
      this.props.onUpdate(datepicker.element.value);
    };
  }
  render() {
    return (
      <div>
        <input type="text" id="required-date" placeholder="Select Required Dates" />
      </div>
    );
  }
}

export default Calendar;
