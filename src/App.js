import './App.css';
import Reducer from './Components/Reducer/Reducer';

// import Class from './Components/Class/Class';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
// import CartExercise from './Components/CartExercise/CartExercise';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
// import Storybook from './Components/Storybook/Storybook';
import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
import Reducer from './Components/Reducer/Reducer';
import Quiz from './Components/Quiz/Quiz';
// import Reducer from './Components/Reducer/Reducer';

function App() {
  return (
    <div className='App'>
      {/* <Context /> */}
      {/* <CartExercise /> */}
      {/* <Buttons /> */}
      {/* <FifaTourney /> */}
      {/* <Class /> */}
      {/* <CartClassExercise /> */}
      {/* <Storybook /> */}
      <Reducer />
      <CartClassExercise />
      {/* <Reducer /> */}
      <Quiz />
    </div>
  );
}

export default App;
