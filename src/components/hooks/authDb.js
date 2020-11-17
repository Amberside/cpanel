import { useState, useEffect } from 'react';
import { auth } from '../config/db';

export const useAuth = () => {
  const [currentUser, setCurrentUser ] = useState();
  // listening to the database, onAuthStateChanged
  // listening once instead of always listening.
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)

      return unsubscribe
    })
    // [] just run this once
  }, [])
  


  return [currentUser, setCurrentUser];
}

export const login = ({email, password}) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const register = ({email, password}) => {
  return auth.createUserWithEmailAndPassword(email, password);
}