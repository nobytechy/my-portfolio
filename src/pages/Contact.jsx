import React from 'react';

const Contact = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input type="text" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Email</label>
          <input type="email" className="w-full border border-gray-300 p-2 rounded" />
        </div>
        <div>
          <label className="block text-gray-700">Message</label>
          <textarea className="w-full border border-gray-300 p-2 rounded"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
      </form>
      <p className="mt-4 text-gray-700">
        Or reach out directly via email: <a href="mailto:your.email@example.com" className="text-blue-500">your.email@example.com</a>
      </p>
    </div>
  );
};

export default Contact;
