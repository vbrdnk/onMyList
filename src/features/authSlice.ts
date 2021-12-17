import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import UserMapper, { FirebaseUser, UserDTO } from '@/app/mappers/user.mapper';
import { createUser } from '@/app/db';
import type { AppState } from '@/app/store';

export interface AuthState {
  user: UserDTO | null;
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  user: null,
  isLoggedIn: false,
};

export const setUserAsync = createAsyncThunk('auth/setUser', async (raw: FirebaseUser | null) => {
  if (raw) {
    const user = UserMapper.mapToDTO(raw);
    await createUser(user.uid, user);
    return user;
  }

  return null;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = !!action.payload;
    });
  },
});

export const selectUser = (state: AppState) => state.auth.user;
export const selectIsLoggedIn = (state: AppState) => state.auth.isLoggedIn;

export default authSlice.reducer;
