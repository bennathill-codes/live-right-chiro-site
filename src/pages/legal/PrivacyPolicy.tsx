import React from 'react';
import { motion } from 'motion/react';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 text-brand">
            <Shield className="h-8 w-8" />
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Privacy Policy</h1>
          </div>
          <p className="text-gray-500 text-sm">Last Updated: March 8, 2026</p>
          
          <div className="prose prose-lg prose-brand max-w-none text-gray-600 space-y-6">
            <p>
              Your privacy is important to us. It is Live Right Chiro's policy to respect your privacy regarding any information we may collect from you across our website.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-12">1. Information We Collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.
            </p>
            {/* Additional content would go here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
