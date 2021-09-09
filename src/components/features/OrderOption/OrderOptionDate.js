import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from 'react-datepicker';
import React from 'react';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {
  state = {
    startDate: new Date(),
  };
  static propTypes = {
    setOptionValue: PropTypes.func,
  };

  handleChange = (date) => {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date);
  };

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
      />
    );
  }
}

export default OrderOptionDate;