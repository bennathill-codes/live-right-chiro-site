import React, { useState } from 'react';
import { motion } from 'motion/react';
import adjustmentImg from './assets/adjustment.jpg';
import adjustmentsImg from './assets/adjustments.jpg';
import {
  Star,
  MapPin,
  Phone,
  Calendar,
  ChevronDown,
  Award,
  Activity,
  ShieldCheck,
  HeartHandshake
} from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Activity className="h-8 w-8 text-brand" />
            <span className="font-bold text-2xl text-gray-900 tracking-tight">Live Right Chiro</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
              <span>Excellent</span>
              <div className="flex text-emerald-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-gray-400">|</span>
              <span className="font-semibold text-gray-800">Trustpilot</span>
            </div>
            <a href="#booking" className="bg-brand hover:bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(106,139,141,0.4)]">
              <Calendar className="h-4 w-4" />
              <span>Arrange An Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-[600px] md:h-[700px] flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={adjustmentImg}
          alt="Chiropractic Adjustment"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Schedule a consultation today!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Move Better.<br />Feel Better.<br /> Live Better.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            At Live Right Chiro, our mission is to help you feel your absolute best so you can live life to the fullest. We’re not just about fixing aches and pains—we’re here to get to the root of what’s holding you back and help you move better, feel better, and live better!
          </p>
          <a href="#booking" className="inline-block bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(106,139,141,0.5)] hover:shadow-[0_0_30px_rgba(106,139,141,0.6)] hover:-translate-y-1">
            Book Appointment
          </a>
        </motion.div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={adjustmentsImg}
              alt="Doctor treating patient"
              className="w-full h-[600px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="bg-brand/10 p-4 rounded-full">
                  <HeartHandshake className="h-8 w-8 text-brand" />
                </div>
                <div>
                  {/* <p className="font-bold text-2xl text-gray-900">10k+</p> */}
                  <p className="text-gray-600 font-medium">Accepting New Patients</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-brand font-semibold tracking-wider uppercase text-sm mb-3">About Live Right Chiro</h3>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Personalized Care
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
              <p>
                At Live Right Chiropractic, we help individuals and families restore alignment, relieve pain, and stay well naturally. Whether you're dealing with chronic tension, recovering from an injury, or looking for preventative care, we're here to support your journey to better health.
              </p>
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand">
                <p className="italic text-gray-700">
                  "My goal is simple: to provide personalized chiropractic care that targets the root causes of your health challenges. Whether you're recovering from an injury, managing pain, or seeking to improve your mobility, I’m here to help you feel better, move better, and live better."
                </p>
                <p className="mt-4 font-semibold text-gray-900">— Dr. Calvin Smolich, Doctor of Chiropractic</p>
              </div>
              <p>
                At Live Right Chiropractic, we focus on full-body wellness through customized care. Our approach combines thorough assessments, hands-on adjustments, and holistic support — including supplements, mobility tools, and at-home techniques.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#booking" className="bg-brand hover:bg-brand-dark text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-[0_0_15px_rgba(106,139,141,0.4)] hover:shadow-[0_0_25px_rgba(106,139,141,0.5)]">
                Book Appointment
              </a>
              <a href="tel:+18775556666" className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-8 py-3.5 rounded-full font-medium transition-colors flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call: 206 795 0126
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: <Star className="h-8 w-8" />, title: "Google 5★ Rated", desc: "Trusted by your local community" },
    { icon: <Award className="h-8 w-8" />, title: "Registered", desc: "Doctor of Chiropractic" },
    { icon: <HeartHandshake className="h-8 w-8" />, title: "Customized Treatment", desc: "Treatment tailored to your needs" },
    { icon: <Activity className="h-8 w-8" />, title: "Evidence-Based Care", desc: "with Real Outcomes" },
    { icon: <ShieldCheck className="h-8 w-8" />, title: "Personal Care", desc: "Lifestyle and supplement guidance" },
    { icon: <MapPin className="h-8 w-8" />, title: "Central Clinics", desc: "Conveniently Located" },
  ];

  return (
    <section className="py-16 bg-brand text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Live Right Chiro?</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="mb-4 text-white/90">
                {f.icon}
              </div>
              <h4 className="font-semibold mb-2 leading-tight">{f.title}</h4>
              <p className="text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Upper & Lower Back Pain",
      desc: "Chiropractic care for upper and lower back pain restores proper spinal alignment and nerve function, allowing you to reclaim your mobility and live a pain-free life focused on what matters most to you.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Neck Pain",
      desc: "To relieve chronic tension and restore a full range of motion, helping you eliminate headaches and discomfort so you can move through your day with clarity and ease.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Postural Correction",
      desc: "Personalized postural correction identifies and fixes the underlying spinal misalignments caused by daily habits, transforming your stance to eliminate chronic strain and naturallyboosting your energy.",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Sciatica Treatment",
      desc: "Focuses on relieving the mechanical pressure and nerve irritation at the source, providing drug-free pain relief that restores leg strength and helps you return to an active lifestyle.",
      img: "https://images.unsplash.com/photo-1552693673-1bf958298935?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Post Partum",
      desc: "Gentle postpartum chiropractic care supports your body’s natural recovery by restoring pelvic stability and relieving the physical strain of newborn care, helping you regain your strength and comfort so you can focus fully on bonding with your little one.",
      img: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=600"
    },
    {
      title: "Pediatric Care",
      desc: "Supports your child's developing nervous system and physical growth by ensuring proper joint mechanics, helping them thrive through every milestone from infancy to adolescence with greater comfort and resilience.",
      img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand"></div>
            <h3 className="text-brand font-semibold tracking-wider uppercase text-sm">Services</h3>
            <div className="h-px w-12 bg-brand"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Conditions We Treat</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h4>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      title: "Excellent Quality and Service Back Pain",
      text: "After just a few sessions, my neck pain and headaches have almost completely disappeared. The chiropractor explained everything clearly and made me feel comfortable from day one.",
      author: "Jason R."
    },
    {
      title: "Smooth Experience from Start to Finish",
      text: "The care here is top-notch. They take time to understand your body and tailor treatments to what you really need. My posture has improved so much!",
      author: "Jessica R."
    },
    {
      title: "Flawless Installation and Great Team",
      text: "I came in with chronic back pain and walked out feeling like a new person. The team is professional, kind, and really listens to your concerns. Highly recommend!",
      author: "Adam K."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand"></div>
            <h3 className="text-brand font-semibold tracking-wider uppercase text-sm">Review</h3>
            <div className="h-px w-12 bg-brand"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">What our customers say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
            >
              <div className="flex text-emerald-500 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">{r.title}</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">{r.text}</p>
              <p className="font-semibold text-gray-900">{r.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    "What is chiropractic care?",
    "Is chiropractic treatment safe?",
    "Does chiropractic care hurt?",
    "How many sessions will I need?",
    "Can chiropractic help with headaches or migraines?",
    "Do I need a referral to see a chiropractor?",
    "Is chiropractic care safe during pregnancy?"
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
              alt="Chiropractic consultation"
              className="w-full h-[700px] object-cover rounded-tl-[100px] rounded-br-[100px] shadow-xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-brand font-semibold tracking-wider uppercase text-sm">FAQ</h3>
              <div className="h-px w-12 bg-brand"></div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10 leading-tight">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((q, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="font-semibold text-gray-900">{q}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      Chiropractic care is a patient-centered, non-invasive, hands-on, regulated health care profession focused on your spine, muscles, joints, and nervous system. We use the best available evidence and clinical expertise to diagnose issues that affect your body's movement.
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    {
      title: "Comprehensive consultation and case history",
      desc: "We take the time to understand your condition by asking about your symptoms, daily habits, medical history, and lifestyle factors."
    },
    {
      title: "Orthopaedic, neurological and chiropractic assessment",
      desc: "This involves testing joint movement, checking reflexes and muscle strength, evaluating sensory response, and analyzing posture — all to give us a complete picture of how your body is functioning."
    },
    {
      title: "Diagnosis and explanation",
      desc: "We'll give you a clear, easy-to-understand diagnosis. You'll know what's going on, what's causing the issue, and how we plan to treat it—along with a step-by-step treatment plan and what results to expect."
    },
    {
      title: "Initial treatment (if clinically appropriate)",
      desc: "Most clients start treatment during their first visit, which may include chiropractic adjustments, soft tissue therapy, joint mobilization, dry needling, or rehab guidance—based on what's best for your condition."
    }
  ];

  return (
    <section className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-brand text-white py-20 md:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
        <h3 className="text-white/80 font-semibold tracking-wider uppercase text-sm mb-3">Your First Appointment</h3>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">What to Expect</h2>
        <p className="text-white/90 text-lg mb-12 leading-relaxed">
          We don't guess — we assess. Your first session at Live Right Chiro is focused on identifying the root cause of your concern and starting treatment right away (when appropriate). Whether you're dealing with ongoing pain or a recent injury, we approach every case with the same care, attention, and professionalism from the very beginning.
        </p>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">{s.title}</h4>
                <p className="text-white/80 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[600px] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=1000"
          alt="Patient assessment"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
};

const BookingForm = () => {
  return (
    <section id="booking" className="relative py-24 md:py-32 flex items-center justify-center">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
          alt="Clinic background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-brand"></div>
          <h3 className="text-brand font-semibold tracking-wider uppercase text-sm">Get Started</h3>
          <div className="h-px w-12 bg-brand"></div>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Book an Appointment Today</h2>

        <form className="bg-white/10 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-shadow"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-shadow"
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-shadow mb-6"
          />
          <textarea
            placeholder="Any special requests?"
            rows={4}
            className="w-full bg-white px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand transition-shadow mb-8 resize-none"
          ></textarea>

          <button
            type="button"
            className="bg-brand hover:bg-brand-dark text-white px-10 py-4 rounded-full font-semibold text-lg transition-all shadow-[0_0_20px_rgba(106,139,141,0.5)] hover:shadow-[0_0_30px_rgba(106,139,141,0.6)] hover:-translate-y-1"
          >
            Arrange an appointment
          </button>
        </form>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center border-t border-gray-800">
      <p>&copy; {new Date().getFullYear()} Live Right Chiro. All Rights Reserved.</p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Services />
        <Reviews />
        <FAQ />
        <Process />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}
