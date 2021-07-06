import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <div>
      <Header/>
      <main>
        <Container className='py-3'>
          <h1>This is the main part</h1>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
