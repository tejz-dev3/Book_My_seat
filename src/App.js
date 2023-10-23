
import Home from './components/Home/Home';
import BookingPage from './components/BookingPage/BookingPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/bookingpage' element={<BookingPage/>}></Route>
      </Routes>
    </div>
  );
}


// const routerApp = createBrowserRouter([
//   {
//     path: '/seatlayout',
//     element: <Seatlayout />
//   }
// ]);

// const root = createRoot(document.getElementById('root'));
// root.render(
//   <RouterProvider router={routerApp}/>
// );

export default App;






