import React from 'react'
// import { Link, Redirect } from 'react-router-dom'
import { Field, reduxForm, SubmissionError } from 'redux-form'

class Login extends React.Component {
  // async componentDidUpdate() {
  //   await console.log('Updated', this.props.session)
  //   if (this.props.session.error) {
  //     throw new SubmissionError({
  //       _error: 'Login failed!',
  //     })
  //   }
  // }

  asyncValidate = (values /*, dispatch */) => {
    // return sleep(1000).then(() => {
    //   // simulate server latency
    //   if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
    //     throw { username: 'That username is taken' }
    //   }
    // })
  }

  submit = values => {
    const { session } = this.props
    console.log(this.props.logIn(values))
    console.log('====session', session)

    // session.payload.then(res => {
    //   console.log(res)
    // })
    if (session.error) {
      throw new SubmissionError({
        _error: 'Login failed!',
      })
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched && error && <span>{error}</span>}
      </div>
    </div>
  )
  render() {
    const { error, handleSubmit, pristine, reset, submitting } = this.props
    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <Field
          name="username"
          type="text"
          component={this.renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={this.renderField}
          label="Password"
        />
        {error && <strong>{error}</strong>}
        <div>
          <button type="submit" disabled={submitting}>
            Log In
          </button>
          <button
            type="button"
            disabled={pristine || submitting}
            onClick={reset}
          >
            Clear Values
          </button>
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'loginForm', // a unique identifier for this form
})(Login)

// class Login extends React.Component {
//   state = {
//     redirectToPreviousRoute: false,
//     username: '',
//     password: '',
//   }

//   handleSubmit = e => {
//     e.preventDefault()
//     const { username, password } = this.state

//     this.props.logIn(
//       {
//         username,
//         password,
//       },
//       () => {
//         this.setState({ redirectToPreviousRoute: true })
//       }
//     )
//   }

//   handleChange = e => {
//     const value = e.currentTarget.value
//     const fieldName = e.currentTarget.dataset.fieldName

//     this.setState(prev => ({
//       ...prev,
//       [fieldName]: value,
//     }))
//   }

//   render() {
//     const { location, errorMsg } = this.props
//     const { from } = location.state || { from: { pathname: '/' } }
//     const { username, password, redirectToPreviousRoute } = this.state

//     if (redirectToPreviousRoute) {
//       return <Redirect to={from} />
//     }

//     return (
//       <div>
//         {errorMsg && <p>{errorMsg}</p>}
//         <form onSubmit={this.handleSubmit}>
//           <input
//             data-field-name={'username'}
//             type={'text'}
//             onChange={this.handleChange}
//             placeholder={'Имя'}
//             value={username}
//           />
//           <input
//             data-field-name={'password'}
//             type={'text'}
//             onChange={this.handleChange}
//             placeholder={'Пароль'}
//             value={password}
//           />
//           <button type="submit">Log in</button>
//         </form>
//       </div>
//     )
//   }
// }

// Login.propTypes = {
//   logIn: PropTypes.func.isRequired,
//   errorMsg: PropTypes.string,
// }

// export default Login
