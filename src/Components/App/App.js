import './App.css';
import styles from './App.css';
import SearchBar from '../SearchBar/SearchBar';

function App() {
  return (
      <div className="App">
        <nav>
          <div className="title-container">
            <h1 className="title">...SpotifyAPI</h1>
          </div>
          <div className="search-bar">
              <SearchBar />
          </div>
        </nav>
      </div>
  );
}

export default App;
