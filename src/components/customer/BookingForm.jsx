import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar } from 'lucide-react';

const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    { id: 1, name: 'Standard Cleaning', price: 80 },
    { id: 2, name: 'Deep Cleaning', price: 150 },
    { id: 3, name: 'Move-in/Move-out', price: 200 },
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Book a Cleaning Service</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Service Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Service
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <button
                  key={service.id}
                  className={`p-4 border rounded-lg text-left ${
                    selectedService?.id === service.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200'
                  }`}
                  onClick={() => setSelectedService(service)}
                >
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="text-gray-600">${service.price}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Date and Time Selection - Placeholder */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Date & Time
            </label>
            <div className="flex items-center gap-4 p-4 border rounded-lg">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>Date Picker Coming Soon</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button className="w-full" variant="outline">
              Cancel
            </Button>
            <Button className="w-full">
              Continue to Payment
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingForm;