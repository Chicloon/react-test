import React from 'react'
import { withFormik } from 'formik'
import { withRouter } from 'react-router'
import Yup from 'yup'
import Spinner from '../components/Spinner'

const formikEnhancer = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Неверный email!')
      .required('Email обязателен!'),
    password: Yup.string()
      // eslint-disable-next-line no-template-curly-in-string
      .min(3, 'Пароль должен содежать минимум ${min} символа')
      .required('Пароль обязателен!'),
  }),
  handleSubmit: async (
    values,
    { setErrors, setSubmitting, props: { logIn, history } }
  ) => {
    const response = await logIn(values)
    if (response) {
      values.password = ''
      setErrors({ email: response })
      setSubmitting(false)
    } else {
      setSubmitting(false)
      history.push('/profile')
    }
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
      <button type="submit" disabled={!dirty || isSubmitting}>
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
