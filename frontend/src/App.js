import Footer from './components/Footer';
import Header from './components/Header';
import CategoryPosts from './pages/CategoryPosts';
import PostDetails from './pages/PostDetails';
import PostList from './pages/PostList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<PostList />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='/posts/category/:id' element={<CategoryPosts />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
