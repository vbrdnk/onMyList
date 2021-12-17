import React, { createContext, useContext, useEffect } from 'react';
import {
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import Router from 'next/router';

import { setUserAsync } from '@/features/authSlice';
import { useAppDispatch } from '@/app/hooks';
import firebase from './firebase';

interface IAuth {
  signInWithGoogle: (redirectUrl?: string) => any;
  signout: () => any;
}

const auth = getAuth(firebase);
const AuthContext = createContext<IAuth>({
  signInWithGoogle: () => {},
  signout: () => {},
});

export const AuthProvider: React.FC<any> = ({ children }) => {
  const authData = useProvideAuth();
  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

const useProvideAuth = (): IAuth => {
  const dispatch = useAppDispatch();

  const signInWithGoogle = async (redirectUrl?: string) => {
    await signInWithPopup(auth, new GoogleAuthProvider());

    if (redirectUrl) {
      Router.push(redirectUrl);
    }
  };

  const signout = async (): Promise<void> => {
    await signOut(auth);

    Router.push('/');
  };

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, user => dispatch(setUserAsync(user)));

    return () => unsubscribe();
  }, []);

  return {
    signInWithGoogle,
    signout,
  };
};
