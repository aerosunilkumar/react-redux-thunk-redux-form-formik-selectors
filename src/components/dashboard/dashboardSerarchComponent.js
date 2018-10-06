import React, { Component } from "react";
import PropTypes from "prop-types";
import { withFormik, Field } from 'formik';
import Yup from 'yup';
import { FormikDatePicker } from '../ui-kit';
import moment from 'moment';

class dashboardSerarchComponent extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
    posts: PropTypes.array.isRequired,
    postsError: PropTypes.bool,
    user: PropTypes.object.isRequired
  };

  componentWillMount() {
    const { fetchPosts } = this.props;

    fetchPosts();
  }

  render() {
    const { isLoading,
      posts,
      postsError,
      values,
      touched,
      errors,
      dirty,
      isSubmitting,
      handleChange,
      setFieldValue,
      handleBlur,
      handleSubmit,
      handleReset,
      fetchPosts } = this.props;

    return (
      <div>
        <form className="p-5" onSubmit={handleSubmit}>
          <h1>Hello this is form!</h1>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="text"
              className={`form-control ${errors.email && touched.email && 'is-invalid'}`}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.email && touched.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <label>Username</label>
            <input name="username" type="text"
              className={`form-control ${errors.username && touched.username && 'is-invalid'}`}
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.username && touched.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
          <div className="form-group">
            <label>Date Picker</label>
            <Field
            type="text"
            value={values.datepicker}
              name="datepicker"
              inputValueFormat="YYYY-MM-DD"
              dateFormat="L"
              dateFormatCalendar="dddd"
              fixedHeight
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              component={FormikDatePicker}
            />
            {errors.datepicker && touched.datepicker && <div className="invalid-feedback">{errors.datepicker}</div>}
          </div>

          <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>
            {isSubmitting ? 'WAIT PLIZ' : 'CLICK ME'}
          </button>
        </form>
      </div>
    );
  }
}

export default withFormik({
  mapPropsToValues: (props) => ({
    email: props.user.email,
    username: props.user.username,
    datepicker: props.user.datepicker.format("2018/01/01")
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required!'),
    username: Yup.string().required('This man needs a user name'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    setTimeout(() => {
      // submit them do the server. do whatever you like!
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
      props.fetchPosts()
    }, 1000);
  },
})(dashboardSerarchComponent);
