import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Form, InputPassword } from '../components';
import {
   SIGN_UP,
   INVALID_EMAIL,
   WRONG_PASS,
   NOT_FOUND,
   BROWSE,
} from '../constants';
const SignInContainer = () => {
   const [user, setUser] = useState({ email: '', password: '' });
   const [type, setType] = useState({ type: 'password', show: 'SHOW' });
   const [error, setError] = useState(null);
   const inputRef = useRef();
   const isValid = user.password === '' || user.email === '';
   const navigate = useNavigate();
   // Handle Click Show Password
   const handelClick = () => {
      inputRef.current.focus();
      type.type === 'text'
         ? setType({ type: 'password', show: 'SHOW' })
         : setType({ type: 'text', show: 'HIDE' });
   };
   const handelSignin = (event) => {
      event.preventDefault();
      //   Firebase work here ! Get user from auth firebase and check
      const auth = getAuth();
      // Sign in with user already exist on system
      signInWithEmailAndPassword(auth, user.email, user.password)
         // Then check email verified yet? if email verified then navigate to browse
         .then((result) => {
            if (!result.user.emailVerified) {
               return setError(
                  'Email is not confirmed, please check your email and confirm it.'
               );
            }
            setError(null);
            navigate(BROWSE);
         })
         // Handle error
         .catch((error) => {
            setUser({ email: '', password: '' });
            console.log(error.code)
            handleError(error);
         });
   };
   //  Function hadle error while login
   const handleError = (error) => {
      switch (error.code) {
         case INVALID_EMAIL:
            return setError('Invalid email, please enter again.');
         case WRONG_PASS:
            return setError('Wrong password, please enter again.');
         case NOT_FOUND:
            return setError('User not found, please check again.');
      }
   };
   return (
      <Form>
         <Form.Title>Sign In</Form.Title>
         {error && <Form.Error>{error}</Form.Error>}
         <Form.Frame onSubmit={handelSignin} method="POST">
            <Form.Wrapper>
               <Form.Input
                  type="text"
                  value={user.email}
                  onChange={({ target }) =>
                     setUser({ ...user, email: target.value })
                  }
               />
               <Form.Label isValid={user.email}>
                  Email or phone number
               </Form.Label>
            </Form.Wrapper>
            <Form.Wrapper>
               <InputPassword
                  ref={inputRef}
                  type={type.type}
                  value={user.password}
                  onChange={({ target }) =>
                     setUser({ ...user, password: target.value })
                  }
               />
               <Form.Label isValid={user.password}>Password</Form.Label>
               <Form.Option onClick={handelClick}>
                  {user.password !== '' && type.show}
               </Form.Option>
            </Form.Wrapper>
            <Form.Submit disabled={isValid} type="submit">
               Sign In
            </Form.Submit>
         </Form.Frame>
         <Form.Text>
            New to Netflix?
            <Form.Link to={SIGN_UP}> Sign up now.</Form.Link>
         </Form.Text>
         <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
         </Form.TextSmall>
      </Form>
   );
};

export default SignInContainer;
