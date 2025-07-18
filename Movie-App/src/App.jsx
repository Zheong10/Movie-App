import { useState } from "react";
import Search from './components/search.jsx'; // Make sure the casing matches the actual file
import MovieCard from "./components/MovieCard";
import { Spinner } from "./components/Spinner";



const App = () => {
  const [searchTerm, setsearchTerm] = useState('I AM BATMAN')


  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy
            Without the Hassle
          </h1>
     </header>
          <Search searchTerm ={searchTerm} setsearchTerm = {setsearchTerm} />
      </div>
    </main>
  );
};

export default App;
