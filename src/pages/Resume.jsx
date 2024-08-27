import React from 'react';

const Resume = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <p className="text-gray-700 mb-4">
        Download my resume: 
        <a href="/path-to-your-resume.pdf" download className="text-blue-500 ml-2">Download PDF</a>
      </p>
      <div>
        <h3 className="font-semibold text-xl mb-2">Experience</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Job Title 1 - Company Name</li>
          <li>Job Title 2 - Company Name</li>
          {/* Add more experience */}
        </ul>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-xl mb-2">Education</h3>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Degree - Institution Name</li>
          {/* Add more education */}
        </ul>
      </div>
    </div>
  );
};

export default Resume;