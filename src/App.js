import './App.css';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Footer from './Components/Footer/Footer'
import Aside from './Components/Aside/Aside'



function App() {
  return (
    <div className="App">
      <Header>
      
      </Header>
      <div className='App-outer-border'>
      <div className='App-border'>
      <Main>
        
      </Main>
      <Aside>

      </Aside>
      </div>
      </div>
      <Footer>
       
      </Footer>
      
    </div>
  );
}

export default App;
