// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';

export function App() {
  return (
    <>
      <nav className="bg-blue-500 border-b-1 border-slate-500">navbar</nav>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        /> */}
      </Routes>
      {/* END: routes */}
    </>
  );
}

export default App;
