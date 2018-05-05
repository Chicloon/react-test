import React from 'react'
import { withFormik } from 'formik'
import { withRouter } from 'react-router'
import Yup from 'yup'
import Spinner from '../components/Spinner'

import { LOCAL_STORAGE } from '../helpers/constants'

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
  }),
  handleSubmit: (
    values,
    { setErrors, setSubmitting, props: { logIn, history } }
  ) => {
    const cb = response => {
      if (response.status !== 'ok') {
        values.password = ''
        switch (response.message) {
          case 'wrong_email_or_password':
            setErrors({ email: 'Имя пользователя или пароль введены не верно' })
            break
          case 'Network Error':
            setErrors({ email: 'Сервер не доступен' })
            break
          default:
            setErrors({ email: response.message })
        }
        setSubmitting(false)
      } else {
        setSubmitting(false)
        history.push('/profile')
      }
    }
    logIn(values, cb)
  },
  displayName: 'Login',
})

const Login = props => {
  const {
    values,
    errors,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
  } = props

  const errorsValues = Object.values(errors)

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" style={{ display: 'block' }}>
        Email
      </label>
      <input
        id="email"
        placeholder="Введите e-mail"
        type="text"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <input
        id="password"
        placeholder="Введите пароль"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </button>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
      {isSubmitting && <Spinner />}
      {errorsValues.length !== 0 && (
        <ul style={{ listStyle: 'none', color: 'red' }}>
          {errorsValues.map(error => <li key={error}>{error}</li>)}
        </ul>
      )}
    </form>
  )
}

export default withRouter(formikEnhancer(Login))
