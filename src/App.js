import Footer from "./components/Footer";
import Header from "./components/Header";
import './components/Heder.css'
import { Routes, Route } from 'react-router-dom'
import Home from "./routs/Home";
import About from "./routs/About";
import Storeys from "./routs/Storeys";
import StoorreyList from "./routs/StoorreyList";
import StoreyId from "./routs/StoreyId";
import ProfileFile from "./routs/ProfileFile";
import Protected from "./components/Protected";
import Login from "./routs/Login";
import Notfount from "./routs/Notfount";
function App() {
  return (
    <div className="bg-home min-h-screen max-w-screen-lg mx-auto flex flex-col">
      <Header />
      <main className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/storey" element={<Storeys />}>
            <Route index element={<StoorreyList />} />
            <Route path=":id" element={<StoreyId />} />
          </Route>
          <Route path="/profil" element={
            <Protected>
              <ProfileFile />
            </Protected>
          } />

          <Route path="/login" element={<Login/>}/>
          <Route path="*" element={<Notfount/>}/>

        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
