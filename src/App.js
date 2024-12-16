import React from 'react';
import './index.css';
import BookingForm from './components/customer/BookingForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <BookingForm />
      </div>
    </div>
  );
}

export default App;