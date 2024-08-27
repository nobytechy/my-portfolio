import React from 'react';

const Projects = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 1</h3>
          <p className="text-gray-700">Description of Project 1.</p>
          <a href="https://github.com/yourgithub/project1" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 2</h3>
          <p className="text-gray-700">Description of Project 2.</p>
          <a href="https://github.com/yourgithub/project2" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        {/* Add more projects here */}
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 1</h3>
          <p className="text-gray-700">Description of Project 1.</p>
          <a href="https://github.com/yourgithub/project1" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 2</h3>
          <p className="text-gray-700">Description of Project 2.</p>
          <a href="https://github.com/yourgithub/project2" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 1</h3>
          <p className="text-gray-700">Description of Project 1.</p>
          <a href="https://github.com/yourgithub/project1" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 2</h3>
          <p className="text-gray-700">Description of Project 2.</p>
          <a href="https://github.com/yourgithub/project2" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 1</h3>
          <p className="text-gray-700">Description of Project 1.</p>
          <a href="https://github.com/yourgithub/project1" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
        <div className="border p-4 rounded-lg">
          <h3 className="font-semibold text-xl mb-2">Project 2</h3>
          <p className="text-gray-700">Description of Project 2.</p>
          <a href="https://github.com/yourgithub/project2" className="text-blue-500 mt-2 inline-block">View on GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
