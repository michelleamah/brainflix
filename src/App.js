import './App.scss';
import Header from './components/Component/Header';
import DisplayVideo from './components/Component/DisplayVideo';
import MainVideo from './components/Component/MainVideo';
import videoDetails from './Data/video-details.json';

function App() {
  return (
    <div className="App">
      <Header />
      <MainVideo video={videoDetails} />
      <DisplayVideo />
    </div>
  );
}

export default App;
