import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, InputPassword } from '../components';
import { SIGN_IN, INVALID_EMAIL, EMAIL_EXIST, PASS_WEAK } from '../constants';
import { writeListUser } from '../helpers/firebase-auth'
import {
   getAuth,
   createUserWithEmailAndPassword,
   updateProfile,
   sendEmailVerification,
} from 'firebase/auth';

const SignUpContainer = () => {
   const navigate = useNavigate();
   const [user, setuser] = useState({
      firstname: '',
      email: '',
      password: '',
   });
   const [error, setError] = useState(null);
   const [type, setType] = useState({
      type: 'password',
      show: 'SHOW',
   });
   // Use check value of input and then css label
   const isValid =
      user.email === '' || user.password === '' || user.firstname === '';
   // Show password or hide password
   const handleOnClick = () => {
      type.type === 'password'
         ? setType({ type: 'text', show: 'HIDE' })
         : setType({ type: 'password', show: 'SHOW' });
   };
   // Handle submit form
   const handleSubmit = (event) => {
      event.preventDefault();
      // Fire base work here
      const auth = getAuth();
      // Create an new user
      createUserWithEmailAndPassword(auth, user.email, user.password)
         // Then send email verify
         // .then(() => {
         //    sendEmailVerification(auth.currentUser);
         // })
         // Then update profile and navigate page
         .then(() => {
            updateProfile(auth.currentUser, {
               displayName: user.firstname,
               photoURL: Math.floor(Math.random() * 5) + 1, // Random avatar from 1 to 5 picture
            });
            setError(null);
            writeListUser();
            navigate(SIGN_IN);
         })
         .catch((error) => {
            handleError(error);
         });
   };
   // Function handle error when user typing wrong
   const handleError = (error) => {
      switch (error.code) {
         case INVALID_EMAIL:
            return setError('Invalid email, please enter again.');
         case EMAIL_EXIST:
            return setError(
               'Email already exists, please enter another email.'
            );
            case PASS_WEAK:
               return setError('Password must be at least 6 characters.')
      }
   };
   return (
      <Form>
         <Form.Title>Sign Up</Form.Title>
         {error && <Form.Error>{error}</Form.Error>}
         <Form.Frame onSubmit={handleSubmit}>
            <Form.Wrapper>
               <Form.Input
                  value={user.firstname}
                  type="text"
                  onChange={({ target }) =>
                     setuser({ ...user, firstname: target.value })
                  }
               />
               <Form.Label isValid={user.firstname}>First Name</Form.Label>
            </Form.Wrapper>
            <Form.Wrapper>
               <Form.Input
                  value={user.email}
                  type="text"
                  onChange={({ target }) =>
                     setuser({ ...user, email: target.value })
                  }
               />
               <Form.Label isValid={user.email}>Email address</Form.Label>
            </Form.Wrapper>
            <Form.Wrapper>
               <InputPassword
                  type={type.type}
                  value={user.password}
                  onChange={({ target }) =>
                     setuser({ ...user, password: target.value })
                  }
               />
               <Form.Option onClick={handleOnClick}>
                  {user.password && type.show}
               </Form.Option>
               <Form.Label isValid={user.password}>Password</Form.Label>
            </Form.Wrapper>
            <Form.Submit type="submit" disabled={isValid}>
               Sign Up
            </Form.Submit>
         </Form.Frame>
         <Form.Text>
            Already a user?
            <Form.Link to={SIGN_IN}> Sign in now. </Form.Link>
         </Form.Text>
         <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
         </Form.TextSmall>
      </Form>
   );
};

export default SignUpContainer;
