import VoucherPage from 'features';
import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';

export default function RootRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location}>
        <Route path="/" element={<VoucherPage />} />
      </Routes>
    </AnimatePresence>
  );
}
