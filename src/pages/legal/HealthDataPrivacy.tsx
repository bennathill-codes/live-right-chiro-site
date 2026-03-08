import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

const HealthDataPrivacy = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-4 text-brand">
            <Heart className="h-8 w-8" />
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Consumer Health Data Privacy Policy</h1>
          </div>
          <p className="text-gray-500 text-sm">Last Updated: March 8, 2026</p>
          
          <div className="prose prose-lg prose-brand max-w-none text-gray-600 space-y-6">
            <p className="bg-brand/5 p-6 rounded-2xl border border-brand/10 text-brand-dark font-medium leading-relaxed">
              This policy specifically addresses the collection, use, and disclosure of Colorado and Washington Consumer Health Data as required by the Washington My Health My Data Act (MHMDA) and similar regulations.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 mt-12">1. Health Data We Collect</h2>
            <p>
              We collect information about your health conditions, treatment plans, and chiropractic history to provide you with the best possible care.
            </p>
            {/* Additional content would go here */}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HealthDataPrivacy;
