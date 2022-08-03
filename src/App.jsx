import { useState, useRef } from 'react';
import { Header, Main, Footer } from './page'
import './App.scss';
import Container from './components/container/container';
import Routess from './routes/Routes';
function App() {
    return (
      <Container>
        <Header />
        <Main> 
          <Routess/>
        </Main>
        <Footer />
      </Container>
    )
}

export default App;
