import React from 'react';
// import MainNavigator from './src/navigation/MainNavigator'
import Blind_homePage from './src/Blind_homePage';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Jobs from './src/Jobs';
import Vocational_Training from './src/Vocational_Training';
import Courses from './src/Courses';
import Subject from './src/Subject';
import Quiz from './src/Quiz';
import Story_Telling from './src/Story_Telling';
import Workshop from './src/Workshop';
import WorkshopVideoPage from './src/WorkshopVideoPage';

const App = () => {
  return (
    <SafeAreaProvider style={{backgroundColor: 'white'}}>
      <WorkshopVideoPage />
    </SafeAreaProvider>
  );
};

export default App;
