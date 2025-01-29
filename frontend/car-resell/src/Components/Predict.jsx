import React, { useState } from 'react';

const Predict = () => {
  const [formData, setFormData] = useState({
    carName: '',
    brand: '',
    model: '',
    vehicleAge: '',
    kmDriven: '',
    sellerType: '',
    fuelType: '',
    transmissionType: '',
    mileage: '',
    engine: '',
    maxPower: '',
    seats: '',
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value,}));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Select the Best Car for You</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="carName" className="block text-sm font-medium text-gray-700">
                  Car Name:
                </label>
                <input
                  type="text"
                  id="carName"
                  name="carName"
                  value={formData.carName}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                  Brand:
                </label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label htmlFor="model" className="block text-sm font-medium text-gray-700">
                  Model:
                </label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label htmlFor="vehicleAge" className="block text-sm font-medium text-gray-700">
                  Vehicle Age:
                </label>
                <input
                  type="number"
                  id="vehicleAge"
                  name="vehicleAge"
                  value={formData.vehicleAge}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label htmlFor="kmDriven" className="block text-sm font-medium text-gray-700">
                  KM Driven:
                </label>
                <input
                  type="number"
                  id="kmDriven"
                  name="kmDriven"
                  value={formData.kmDriven}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label htmlFor="seats" className="block text-sm font-medium text-gray-700">
                  Seats:
                </label>
                <input
                  type="number"
                  id="seats"
                  name="seats"
                  value={formData.seats}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>


            {/* Second Column */}
            <div className="space-y-4">
              <div>
                <label htmlFor="sellerType" className="block text-sm font-medium text-gray-700">
                  Seller Type:
                </label>
                <select
                  id="sellerType"
                  name="sellerType"
                  value={formData.sellerType}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select Seller Type</option>
                  <option value="individual">Individual</option>
                  <option value="trustmarkDealer">Trustmark Dealer</option>
                </select>
              </div>

              <div>
                <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700">
                  Fuel Type:
                </label>
                <select
                  id="fuelType"
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select Fuel Type</option>
                  <option value="diesel">Diesel</option>
                  <option value="electric">Electric</option>
                  <option value="lpg">LPG</option>
                  <option value="petrol">Petrol</option>
                </select>
              </div>

              <div>
                <label htmlFor="transmissionType" className="block text-sm font-medium text-gray-700">
                  Transmission Type:
                </label>
                <select
                  id="transmissionType"
                  name="transmissionType"
                  value={formData.transmissionType}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                >
                  <option value="">Select Transmission Type</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </select>
              </div>

              <div>
                <label htmlFor="mileage" className="block text-sm font-medium text-gray-700">
                  Mileage:
                </label>
                <input
                  type="text"
                  id="mileage"
                  name="mileage"
                  value={formData.mileage}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label htmlFor="engine" className="block text-sm font-medium text-gray-700">
                  Engine:
                </label>
                <input
                  type="text"
                  id="engine"
                  name="engine"
                  value={formData.engine}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              <div>
                <label htmlFor="maxPower" className="block text-sm font-medium text-gray-700">
                  Max Power:
                </label>
                <input
                  type="text"
                  id="maxPower"
                  name="maxPower"
                  value={formData.maxPower}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border border-gray-300 rounded-md text-sm"
                />
              </div>

              
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Predict;
