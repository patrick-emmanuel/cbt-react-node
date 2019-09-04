import * as React from 'react'
import useForm from 'react-hook-form';
import { AuthContext } from './AuthProvider';

const SignUp = () => {
  const { signUp, signUpLoading, signUpError } = React.useContext(AuthContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    const { name, email, password } = values;
    signUp({ variables: { name, email, password } });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {signUpError && 'An error occurred'}
      <label htmlFor="name">Name</label>
      <input type="text" name="name" ref={register} />

      <label htmlFor="email">First Name</label>
      <input type="text" name="email" ref={register} />

      <label htmlFor="password">Last Name</label>
      <input type="text" name="password" ref={register} />

      <button>{signUpLoading ? 'loading...' : 'Submit'}</button>
    </form>
  );
}

export default SignUp;