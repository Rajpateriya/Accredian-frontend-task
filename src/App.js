import React, { useState } from 'react';
import HeroSection from './components/HeroSection';
import ReferralModal from './components/ReferralModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      <HeroSection onReferNowClick={openModal} />
      {isModalOpen && <ReferralModal onClose={closeModal} />}
    </div>
  );
}

export default App;
