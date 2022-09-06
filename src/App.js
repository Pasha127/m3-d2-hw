import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from './Components/MyNav';
import MyFooter from './Components/MyFooter';
import Welcome from './Components/Welcome';
import LatestRelease from './Components/LatestRelease';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav></MyNav>
      </header>
      <main>
        <Welcome></Welcome>
        <LatestRelease></LatestRelease>
      </main>
      <footer>
        <MyFooter></MyFooter>
      </footer>
    </div>
  );
}

export default App;
