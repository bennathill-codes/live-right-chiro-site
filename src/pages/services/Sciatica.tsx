import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Activity, Check, Clock, Phone, Calendar, ChevronLeft, ShieldCheck } from 'lucide-react';

const Sciatica = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand transition-colors flex items-center gap-1">
            <ChevronLeft className="h-4 w-4" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-gray-400">Services</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">Sciatica Treatment</span>
        </div>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-brand/5 via-brand-light/10 to-transparent p-8 md:p-16 rounded-[2.5rem] border border-brand/10 mb-16"
        >
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-brand/10 border border-brand/20 text-brand px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Activity className="h-4 w-4" />
              <span>Spinal & Joint Pain Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Sciatica & Pinched Nerve Treatment
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-8">
              Focuses on relieving mechanical pressure and nerve irritation at the source. We provide drug-free pain relief that restores leg strength, reduces tingling, and helps you return to an active, comfortable lifestyle.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://liverightchiro.janeapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-semibold transition-all shadow-[0_10px_25px_rgba(106,139,141,0.4)] hover:shadow-[0_15px_30px_rgba(106,139,141,0.5)] hover:-translate-y-1 flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                <span>Book Initial Assessment</span>
              </a>
              <a
                href="tel:+12067950126"
                className="bg-gray-50 hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-full font-semibold transition-colors flex items-center gap-2 border border-gray-200"
              >
                <Phone className="h-4 w-4" />
                <span>Call: 206 795 0126</span>
              </a>
            </div>
            <p className="text-xs text-gray-500 flex items-center gap-2 mt-4">
              <Clock className="h-4 w-4 text-brand" />
              <span>Inquiries responded to within 2 business hours</span>
            </p>
          </div>
        </motion.div>

        {/* Detailed Info Grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Understanding Sciatica</h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-6 font-light">
              <p>
                Sciatica is not a disease in itself, but rather a symptom of an underlying issue. It occurs when the sciatic nerve—the longest and largest nerve in your body—is compressed or irritated. This nerve runs from your lower back, through your hips and buttocks, and down each leg.
              </p>
              <p>
                When a lumbar vertebrae is out of alignment, or a disc is bulging, or the piriformis muscle in the hip becomes tight, it can pinch the sciatic nerve. This leads to shooting pain, burning sensations, numbness, or muscle weakness that can make sitting, standing, and walking painful.
              </p>
              <p>
                Chiropractic care targets the mechanical cause of this compression. By performing targeted adjustments to the lower spine and pelvis, Dr. Calvin Smolich helps remove pressure from the nerve root, reducing inflammation and supporting your body's natural healing process without drugs or invasive surgeries.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Sciatica Care Protocol</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Detailed lower back and neurological check",
                  "Lumbar spine adjustments to relieve nerve compression",
                  "Pelvic and sacroiliac (SI) joint alignment",
                  "Hip and piriformis muscle release therapy",
                  "Nerve flossing and guided stretching exercises",
                  "Ergonomic guidance for sitting and lifting"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="mt-1 bg-brand/10 p-1 rounded-full flex-shrink-0">
                      <Check className="w-4 h-4 text-brand" />
                    </div>
                    <span className="text-gray-700 leading-snug font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gray-50 rounded-[2rem] p-8 md:p-10 border border-gray-100 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-brand" />
              <span>Common Symptoms We Address</span>
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Radiating Leg Pain", desc: "Sharp or burning pain traveling from the lower back through the buttock and down the leg." },
                { title: "Numbness & Tingling", desc: "A 'pins and needles' sensation in the calf, thigh, or foot." },
                { title: "One-Sided Discomfort", desc: "Pain that typically affects only one leg, making it difficult to find a comfortable position." },
                { title: "Pain Worsened by Sitting", desc: "Increased pressure on the sciatic nerve when sitting down for extended periods." },
                { title: "Leg Weakness", desc: "Difficulty moving the leg or foot, or feeling like the leg might give way." }
              ].map((symptom, i) => (
                <li key={i} className="border-b border-gray-200/60 pb-4 last:border-b-0 last:pb-0">
                  <h4 className="font-bold text-gray-900 text-lg mb-1">{symptom.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{symptom.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action Booking Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-brand text-white p-8 md:p-16 rounded-[2.5rem] shadow-xl relative overflow-hidden border border-brand-light/20 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/40 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to Reclaim Your Mobility?</h3>
            <p className="text-white/90 text-lg font-light leading-relaxed mb-4">
              Schedule your Initial Chiropractic Consultation. We will perform a focused exam to locate where the nerve is being pinched and begin targeted adjustments to relieve the pressure.
            </p>
            <div className="text-xs text-white/70 space-x-4 border-t border-white/10 pt-4 inline-block">
              <span>WA License #CH60xxxx</span>
              <span>•</span>
              <span>Washington State Chiropractic Association (WSCA) Member</span>
            </div>
          </div>
          <div className="relative z-10 flex-shrink-0 flex flex-col items-center md:items-end gap-3">
            <a
              href="https://liverightchiro.janeapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-50 text-brand px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:-translate-y-1 block text-center min-w-[240px]"
            >
              Book Consultation
            </a>
            <p className="text-xs text-white/80 flex items-center gap-2">
              <Clock className="h-4 w-4 text-emerald-300" />
              <span>Inquiries responded to within 2 business hours</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sciatica;
