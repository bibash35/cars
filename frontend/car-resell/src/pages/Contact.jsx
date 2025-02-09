// import React, { useState } from 'react';
// import { FaPhoneAlt } from 'react-icons/fa'; // Import the phone icon from React Icons

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here (e.g., send to backend or email)
//     console.log('Form submitted:', formData);
//     setFormData({ name: '', email: '', message: '' }); // Reset form after submission
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4">
//       <header className="w-full max-w-6xl text-center mb-12">
//         <h1 className="text-4xl font-bold text-red-600">Contact Us</h1>
//         <p className="text-lg text-gray-700 mt-4">
//           Have any questions or need assistance? Reach out to us and we'll get back to you as soon as possible!
//         </p>
//       </header>

//       <section className="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-6">We'd Love to Hear From You!</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-gray-700 text-lg">Your Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-gray-700 text-lg">Your Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-gray-700 text-lg">Your Message</label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleInputChange}
//               required
//               rows="5"
//               className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-red-600 text-white font-semibold text-lg rounded-lg hover:bg-red-700 transition duration-300"
//           >
//             Send Message
//           </button>
//         </form>
//       </section>

//       <footer className="w-full max-w-6xl text-center mt-12">
//         <p className="text-gray-600">
//           Or contact us directly at <a href="mailto:support@carx.com" className="text-red-600">support@carx.com</a>
//         </p>
//         <p className="text-gray-600 mt-4 flex items-center justify-center">
//           <FaPhoneAlt className="text-red-600 mr-2" /> 
//           <a href="tel:+9779843xxxxxx" className="text-red-600">+977 9843 xxxxxx</a>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default Contact;


import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {

  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOnChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!data.name) {
      errors.name = "Please fill out the name field";
    }

    if (!data.email) {
      errors.email = "Please fill out the email field";
    }

    if (!data.message) {
      errors.message = "Please fill out the message field";
    }

    
  };

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Contact Us</h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          We would love to hear from you! Whether you have a question, concern, or feedback, feel free to reach out to us using the form below or via our contact information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <FaPhoneAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Phone</h3>
            <p className="text-lg text-gray-600">+97 9841.....</p>
          </div>
          <div className="text-center">
            <FaEnvelope className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-lg text-gray-600">carx@gmail.com</p>
          </div>
          <div className="text-center">
            <FaMapMarkerAlt className="text-4xl text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Address</h3>
            <p className="text-lg text-gray-600">Gongabu-3,Kathmandu,Nepal</p>
          </div>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-lg text-gray-800 font-semibold mb-2" htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" // Ensure name attribute is correct
                value={data.name}
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Your Name" 
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg text-gray-800 font-semibold mb-2" htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" // Ensure name attribute is correct
                value={data.email}
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Your Email" 
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg text-gray-800 font-semibold mb-2" htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" // Ensure name attribute is correct
                rows="5"
                value={data.message}
                onChange={handleOnChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" 
                placeholder="Your Message" 
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-red-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-red-500 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
