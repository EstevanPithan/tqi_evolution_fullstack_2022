import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import BooksConsult from './containers/BooksConsult'
import AuthorsConsult from './containers/AuthorsConsult'
import ClientsConsult from './containers/ClientsConsult'
import BooksRegister from './containers/BooksRegister'
import AuthorsRegister from './containers/AuthorsRegister'
import ClientsRegister from './containers/ClientsRegister'
import NewSellOrder from './containers/NewSellOrder'
import NewBuyOrder from './containers/NewBuyOrder'
import Home from './containers/HomePage'

import { UserProvider } from './contexts/UserContext'

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booksRegister" element={<BooksRegister />} />
          <Route path="/authorsRegister" element={<AuthorsRegister />} />
          <Route path="/clientsRegister" element={<ClientsRegister />} />
          <Route path="/books" element={<BooksConsult />} />
          <Route path="/authors" element={<AuthorsConsult />} />
          <Route path="/clients" element={<ClientsConsult />} />
          <Route path="/newBuy" element={<NewBuyOrder />} />
          <Route path="/newSell" element={<NewSellOrder />} />
        </Routes>
      </Router>
    </UserProvider>
  )
}

export default App
