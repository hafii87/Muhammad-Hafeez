import React from "react";

const FinalYearProject = () => {
  return (
    <section className="w-full bg-gradient-to-br from-pink-50 to-blue-50 py-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-[#6a0dad] mb-2">🎓 Final Year Project</h2>
      <p className="text-center text-gray-500 max-w-xl mb-8 text-lg">
        Smart Waste Analyzer – An AI-based system that classifies waste from images and provides material breakdown (plastic, organic, rubber, etc.)
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Tech Used Card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
          <h3 className="text-lg font-bold text-[#6a0dad] mb-3">🔧 Tech Used</h3>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
            <li>MobileNetV2</li>
            <li>FastAPI</li>
            <li>React + Next.js</li>
            <li>10k+ Waste Images</li>
          </ul>
        </div>
        {/* Purpose Card */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start">
          <h3 className="text-lg font-bold text-[#6a0dad] mb-3">📈 Purpose</h3>
          <ul className="list-disc pl-5 text-gray-700 text-sm space-y-2">
            <li>Assist in smart recycling</li>
            <li>Real-time waste analysis</li>
            <li>Support smart city systems</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FinalYearProject;
