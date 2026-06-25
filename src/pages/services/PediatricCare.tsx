import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Activity, Check, Clock, Phone, Calendar, ChevronLeft, ShieldCheck } from 'lucide-react';

const PediatricCare = () => {
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
          <span className="text-gray-900 font-medium">Pediatric Care</span>
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
              <span>Specialized & Preventative Care</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              Pediatric Chiropractic Care
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light mb-8">
              Supports your child's developing nervous system and physical growth by ensuring proper joint mechanics, helping them thrive through every milestone from infancy to adolescence with greater comfort and resilience.
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
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Gentle Chiropractic for Developing Bodies</h2>
            <div className="text-gray-600 text-lg leading-relaxed space-y-6 font-light">
              <p>
                From the birth process itself to learning to crawl, walk, run, and play, children's bodies experience constant structural stress and physical changes. Along with these natural developmental steps, school-aged children face modern postural pressures, such as carrying heavy backpacks and spending hours looking down at digital screens.
              </p>
              <p>
                Because a child's nervous system controls their entire growth and development, minor misalignments (subluxations) in their developing spine can interfere with optimal function. Restoring normal joint mobility helps ensure that their nervous system communicates clearly with the rest of the body.
              </p>
              <p>
                At Live Right Chiropractic, pediatric care is exceptionally gentle and safe. Dr. Calvin Smolich utilizes extremely light-force techniques—often applying pressure no firmer than the touch of a finger—to adjust young joints. We do not use the high-velocity cracking techniques typically applied to adult patients, ensuring a comfortable, welcoming, and relaxed experience for children of all ages.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <h3 className="text-2xl font-bold text-gray-900">Our Pediatric Care Protocol</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Gentle, light-force spinal and joint assessments",
                  "Milestone evaluation (sitting, crawling, walking alignment)",
                  "Backpack ergonomics and posture analysis",
                  "Pediatric joint mobility checks to support growth",
                  "Relaxed, child-friendly treatment methods",
                  "Guidance for parents on active play and posture habits"
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
              <span>Why Parents Seek Chiropractic</span>
            </h3>
            <ul className="space-y-4">
              {[
                { title: "Developmental Milestone Support", desc: "Ensuring proper joint movement as babies transition from crawling to standing and walking." },
                { title: "Growing Pains Relief", desc: "Easing muscle tightness and joint strain during rapid physical growth spurts." },
                { title: "Postural Correction", desc: "Preventing forward head posture and spinal slouching caused by school desks and devices." },
                { title: "Play & Sports Injury Recovery", desc: "Addressing musculoskeletal tension from playground falls, bumps, and school sports." },
                { title: "Nervous System Wellness", desc: "Maintaining spinal alignment to optimize physical comfort, sleep quality, and active play." }
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
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Ready to Find Lasting Relief?</h3>
            <p className="text-white/90 text-lg font-light leading-relaxed mb-4">
              Schedule your Initial Chiropractic Consultation. We will complete a full examination, evaluate your posture and spine alignment, and create a targeted treatment plan to help you move, feel, and live better.
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

export default PediatricCare;
