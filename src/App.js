import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/navbar/Navbar';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Upload from './components/upload/Upload';
import ProfileDetail from './components/profileDetail/ProfileDetail';
import PostDetails from './components/postDetails/PostDetails';
import { useSelector } from 'react-redux';

function App() {
 const {user} = useSelector((state) => state.auth)

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={!user ? <Login /> : <Navigate to='/' />} />
        <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='/upload' element={user ? <Upload /> : <Navigate to='/login' />} />
        <Route path='/profileDetail/:id' element={user ? <ProfileDetail /> : <Navigate to='/login' />} />
        <Route path='/postDetails/:id' element={user ? <PostDetails /> : <Navigate to='/login' />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



// import './App.css';
// import Comment from './components/comment/Comment';
// import Navbar from './components/navbar/Navbar'
// import Footer from './components/footer/Footer'
// import {Routes, Route} from 'react-router-dom'
// import Home from './components/home/Home'
// import Login from './components/login/Login'
// import Signup from './components/signup/Signup'
// import Upload from './components/upload/Upload'
// import PostDetails from './components/postDetails/PostDetails'
// import ProfileDetail from './components/profileDetail/ProfileDetail'
// function App() {
  
//   return (
//     <div >
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/upload' element={<Upload />} />
//         <Route path='/profileDetail/:id' element={<ProfileDetail />} />
//         <Route path='/postDetails/:id' element={<PostDetails />} />

//       </Routes>
//       <Footer />
//       {/* <Comment/> */}
//     </div>
//   );
// }

// export default App;
