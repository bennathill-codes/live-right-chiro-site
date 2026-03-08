import React from 'react';
import { motion } from 'motion/react';
import { Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 text-brand">
            <Scale className="h-8 w-8" />
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Terms of Service</h1>
          </div>
          <p className="text-gray-500 text-sm">Last Updated: March 8, 2026</p>
          
          <div className="prose prose-lg prose-brand max-w-none text-gray-600 space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mt-12">1. Terms</h2>
            <p>
              By accessing the website at Live Right Chiro, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
            {/* Additional content would go here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
