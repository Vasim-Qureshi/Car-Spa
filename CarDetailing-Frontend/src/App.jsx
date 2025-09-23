import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminDashboard from './pages/admin/AdminDashboard.jsx'
import Home from './pages/HomePage.jsx'
import SignupOTP from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import OrderPage from './pages/OrderPage.jsx'
import ExamplePage from './pages/ServicesExamplePage.jsx'
import CustomerProfile from './pages/CustomerProfile.jsx'

//Protected Route
function ProtectedRoute({ children }) {
  const isAuthenticated = true; // TODO: Replace with real authentication logic
  return isAuthenticated ? children : <Navigate to="/signup" />;
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignupOTP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path="/profile/:customerId" element={<ProtectedRoute><CustomerProfile /></ProtectedRoute>} />
        <Route path="/order" element={<ProtectedRoute><OrderPage /></ProtectedRoute>} />
        <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
        <Route path='/example' element={<ExamplePage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
