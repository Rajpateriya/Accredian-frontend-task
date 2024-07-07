import React from 'react';
import ReferralForm from './ReferralForm';

const ReferralModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-grey-800 bg-opacity-50">
      <div className="bg-gray-900 text-gray-100 p-6 rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Refer a Friend</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ReferralForm />
      </div>
    </div>
  );
};

export default ReferralModal;
