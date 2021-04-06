import './App.css';
import Nav from './Nav';
import { ItemProvider } from './ItemContext';
import Items from './Items';
import UpdateItems from './UpdateItems';


function App() {
  return (
    <ItemProvider>
      <div className="App">
        <Nav />
        <UpdateItems />
        <Items />
      </div>
    </ItemProvider>
  );
}

export default App;
