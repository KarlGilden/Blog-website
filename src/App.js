import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import {useState} from 'react'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PostView from './pages/PostView';
import AddPostPage from './pages/AddPostPage';
import PrivateRoute from './components/PrivateRoute';
import EditPage from './pages/EditPage';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Router>
        <AuthProvider>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar  toggle={toggle}/>

          <Routes>
            
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/post/:id" element={<PostView/>}/>
            
            <Route
              path="/edit/:id"
              element={
                <PrivateRoute>
                  <EditPage />
                </PrivateRoute>
                }
            />

            <Route
              path="/add-post"
              element={
                <PrivateRoute>
                  <AddPostPage />
                </PrivateRoute>
                }
            />

          </Routes>
          <Footer/>

        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
