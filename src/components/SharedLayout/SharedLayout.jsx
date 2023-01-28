import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Header from 'components/Header/Header';
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const OurFriendsPage = lazy(() =>
  import('pages/OurFriendsPage/OurFriendsPage')
);
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const UserPage = lazy(() => import('pages/UserPage/UserPage'));

export default function SharedLayout() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Header />
      <Routes>
        //public route
        <Route path="/news" element={<NewsPage />} />
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        //private route to do
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </Suspense>
  );
}
