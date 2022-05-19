import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from './pages'
import { SIGN_UP, SIGN_IN} from './constants'
function App() {
   return (
     <Routes>
        <Route path={SIGN_IN} element={<SignIn />} />
        <Route path={SIGN_UP} element={<SignUp />} />
     </Routes>
   )
}

export default App;
