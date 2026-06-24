/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RequireAdminAuth from './components/RequireAdminAuth';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Technicals from './pages/Technicals';
import Accessories from './pages/Accessories';
import Professionals from './pages/Professionals';
import GalleryPage from './pages/GalleryPage';
import FAQs from './pages/FAQs';
import ContactPage from './pages/ContactPage';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';

function AppRoutes() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-luxury-gold selection:text-luxury-cream transition-colors duration-300 bg-[#FAF9F6] dark:bg-luxury-black text-luxury-black dark:text-luxury-cream">
      {!isAdminRoute ? <Navbar /> : null}
      <main className="flex-grow w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/technicals" element={<Technicals />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/professionals" element={<Professionals />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/admin"
            element={(
              <RequireAdminAuth>
                <AdminDashboard />
              </RequireAdminAuth>
            )}
          />
        </Routes>
      </main>
      {!isAdminRoute ? <Footer /> : null}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}
