import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class renderDatePicker extends React.Component {
  static propTypes = {
    field: PropTypes.shape({
      onChange: PropTypes.func,
      value: PropTypes.any,
    }).isRequired,
    inputValueFormat: PropTypes.string,
  };

  static defaultProps = {
    inputValueFormat: null,
  };

  state = {
    selectedDate: null,
  };

  componentWillMount() {
    if (this.props.field.value) {
      this.setState({
        selectedDate: moment(this.props.field.value, this.props.inputValueFormat)
      });
    }
  }

  handleChange = (date) => {
    this.setState({
      selectedDate: date.format(this.props.inputValueFormat),
    });
    const { field, form } = this.props
    form.setFieldValue(field.name, date.format(this.props.inputValueFormat));
  }

  render() {
    const {
      form,
      field,
      ...rest
    } = this.props;

    const fieldError = form.errors[field.name]
    const isTouched = form.touched[field.name]

    return (
      <div>
        <DatePicker
        {...field}
          {...rest}

          onChange={this.handleChange}
        />
        {isTouched &&
          fieldError &&
          <span className="datepicker__error">
            {fieldError}
          </span>}
      </div>
    );
  }
}