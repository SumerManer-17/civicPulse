import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          AI-Powered Smart Civic Issue Reporting
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-8">
          Report civic problems instantly. Our AI verifies, prioritizes,
          and forwards issues to authorities for faster resolution.
        </p>
        <Link
          to="/login"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200"
        >
          Report an Issue
        </Link>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">1️⃣ Capture</h3>
            <p>Take a real-time photo of the civic issue.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2️⃣ AI Verification</h3>
            <p>AI checks validity, category & severity.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3️⃣ Resolution</h3>
            <p>Authorities receive prioritized complaints instantly.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow">
            AI Image Classification
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            Duplicate Detection
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            Automatic Priority Scoring
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            Authority Dashboard
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">
          Help Improve Your Community Today
        </h2>
        <Link
          to="/register"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700"
        >
          Get Started
        </Link>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        © 2026 CivicPulse. All Rights Reserved.
      </footer>

    </div>
  );
};

export default Home;
