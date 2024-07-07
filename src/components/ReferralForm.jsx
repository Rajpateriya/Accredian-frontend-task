import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const ReferralForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/referrals', data);
      console.log('Referral submitted successfully:', response.data);
      alert('Referral submitted successfully!');
    } catch (error) {
      console.error('Error submitting referral:', error);
      alert('Failed to submit referral. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="block text-gray-100">Your Name</label>
        <input
          type="text"
          {...register('referrerName', { required: 'Name is required' })}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
        {errors.referrerName && <p className="text-red-500 text-sm mt-1">{errors.referrerName.message}</p>}
      </div>

      <div>
        <label className="block text-gray-100">Your Email</label>
        <input
          type="email"
          {...register('referrerEmail', { required: 'Email is required' })}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
        {errors.referrerEmail && <p className="text-red-500 text-sm mt-1">{errors.referrerEmail.message}</p>}
      </div>

      <div>
        <label className="block text-gray-100">Friend's Name</label>
        <input
          type="text"
          {...register('refereeName', { required: 'Friend\'s name is required' })}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
        {errors.refereeName && <p className="text-red-500 text-sm mt-1">{errors.refereeName.message}</p>}
      </div>

      <div>
        <label className="block text-gray-100">Friend's Email</label>
        <input
          type="email"
          {...register('refereeEmail', { required: 'Friend\'s email is required' })}
          className="mt-1 block w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
        {errors.refereeEmail && <p className="text-red-500 text-sm mt-1">{errors.refereeEmail.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default ReferralForm;
