import './App.css';
import User from './pages/user/User';
import Input from './pages/Input/Input';
import Button from './components/button/Button';
import Example from './components/example/Example';
import Buttons from './components/buttons/Buttons';
import MainPage from './pages/mainPage/MainPage';
import Parent from './components/props/Parent'

function App() {

    // const sum = (a,b) => {
    //     return a+b
    // }

    // console.log(sum(4,9));

    return (
        <div className="App">
            <Parent/>
            <MainPage/>
        </div>
    );
}


export default App;
