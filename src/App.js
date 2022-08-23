import { Provider } from 'react-redux';
import './App.css';
import Reducer from './Components/Reducer/Reducer';
import BlogPosts from './Components/BlogPosts/BlogPosts';
// import CustomHook from './Components/CustomHook/CustomHook';
// import Quiz from './Components/Quiz/Quiz';
// import Class from './Components/Class/Class';
// import Buttons from './Components/Buttons/Buttons';
// import FifaTourney from './Components/FifaTourney/FifaTourney';
// import Context from './Components/Context/Context';
// import CartExercise from './Components/CartExercise/CartExercise';
// import Redux from './Components/Redux/Redux';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
// import Storybook from './Components/Storybook/Storybook';
// import CartClassExercise from './Components/CartClassExercise/CartClassExercise';
// import Reducer from './Components/Reducer/Reducer';
// import Quiz from './Components/Quiz/Quiz';
// import Quiz from './Components/Quiz/Quiz';
// import Reducer from './Components/Reducer/Reducer';
// import store from './Components/TodoRedux/app/store';
// import Todo from './Components/TodoRedux/Todo';
import store from './Components/BlogPosts/app/store';
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
      {/* <Quiz /> */}
      {/* <CustomHook /> */}
      <Provider store={store}>
        {/* <Redux /> */}
        {/* <Todo /> */}
        <BlogPosts />
      </Provider>
    </div>
  );
}

export default App;
