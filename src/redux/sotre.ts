import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import genderReducer from '../redux/slices/genderSlice';
import kinkReducer from '../redux/slices/kinkSlice';
import bodyReducer from '../redux/slices/bodySlice';
import drinkReducer from '../redux/slices/drinkingSlice';
import pearcingReducer from '../redux/slices/piercingSlice';
import religionReducer from '../redux/slices/religionSlice';
import optionReducer from '../redux/slices/saxualitySlice';
import smookingReducer from '../redux/slices/smookingSlice';
import tattosReducer from '../redux/slices/tattooseSlice';
import profileImageReducer from '../redux/slices/profilePicSlice';
import userNameReducer from '../redux/slices/nameSlice';
import userAboutUsReducer from '../redux/slices/aboutUsSlice';
import singegender from '../redux/slices/singleGenderSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    gender: genderReducer,
    kinks: kinkReducer,
    body: bodyReducer,
    drink: drinkReducer,
    peircing: pearcingReducer,
    religion: religionReducer,
    option: optionReducer,
    smooking: smookingReducer,
    tattoos: tattosReducer,
    proimg: profileImageReducer,
    username: userNameReducer,
    aboutus: userAboutUsReducer,
    singlegender: singegender,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
