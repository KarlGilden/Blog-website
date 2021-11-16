import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Menubar from './components/Menubar';
import PostView from './pages/PostView';
import AddPostPage from './pages/AddPostPage';
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Menubar/>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/post/:id" element={<PostView/>}/>
            <Route path="/add-post" element={<AddPostPage/>}/>
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
