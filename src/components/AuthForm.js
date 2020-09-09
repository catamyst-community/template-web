import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const Form = styled.form`
  width: 100%;
  max-width: 480px;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20;
`

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 2;
`

const Input = styled.input`
  padding: 3;
  font-size: 1.2em;
`

const Submit = styled.input`
  cursor: pointer;
  border: none;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  padding: 3;
  width: 100%;
  background-color: primary;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: primaryAlt;
  }
`

const Error = styled.span`
  margin-top: 10px;
  color: textError;
`

const AuthForm = ({
  fields,
  isLoading,
  register,
  handleSubmit,
  errors,
  submitData,
  submitText,
  submitTextLoading,
  authError
}) => {
  return (
    <Form onSubmit={handleSubmit(submitData)}>
      {fields.email && (
        <Field>
          <Label htmlFor='email'>Email Address</Label>
          <Input
            name='email'
            type='email'
            autoComplete='email'
            autoFocus={true}
            ref={register({
              required: 'Sorry, please tell your email address',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Please provide a valid email'
              }
            })}
            placeholder='name@example.com'
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </Field>
      )}

      {fields.name && (
        <Field>
          <Label htmlFor='name'>Name</Label>
          <Input
            name='name'
            type='text'
            autoComplete='name'
            placeholder='Full Name'
            aria-invalid={errors.name ? 'true' : 'false'}
            ref={register({
              required: 'Sorry, please tell your name',
              pattern: {
                value: /^[a-zA-Z\s]*$/i,
                message: 'Please provide a name with only alphabet and space'
              }
            })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </Field>
      )}

      {fields.username && (
        <Field>
          <Label htmlFor='username'>Username</Label>
          <Input
            name='username'
            type='text'
            autoComplete='username'
            placeholder='username'
            aria-invalid={errors.username ? 'true' : 'false'}
            ref={register({
              required: 'Sorry, please set your username',
              pattern: {
                value: /^[a-zA-Z0-9_]*$/i,
                message:
                  'Please provide a username with only alphabet, number, and underscore'
              }
            })}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </Field>
      )}

      {fields.password && (
        <Field>
          <Label htmlFor='password'>Password</Label>
          <Input
            name='password'
            type='password'
            autoComplete='password'
            placeholder='********'
            aria-invalid={errors.password ? 'true' : 'false'}
            ref={register({
              required: 'Sorry, please set your password',
              minLength: 8
            })}
          />
          {errors.password?.type === 'minLength' && (
            <Error>Sorry, the password have to be at least 8 characters</Error>
          )}
          {errors.password && <Error>{errors.password.message}</Error>}
        </Field>
      )}

      <Submit
        type='submit'
        value={isLoading ? submitTextLoading : submitText}
        disabled={isLoading}
      />

      {authError && (
        <Error>
          The email and password you entered did not match our records. Please
          double-check and try again.
        </Error>
      )}
    </Form>
  )
}

AuthForm.propTypes = {
  fields: PropTypes.object.isRequired,
  isLoading: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  submitData: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired,
  submitTextLoading: PropTypes.string.isRequired,
  authError: PropTypes.any
}

export default AuthForm
