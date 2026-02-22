import React, { useState } from 'react';
import { motion } from 'motion/react';
import adjustmentImg from './assets/adjustment.jpg';
import adjustmentsImg from './assets/adjustments.jpg';
import faqImg from './assets/faq.jpg';
import firstAppointmentImg from './assets/first-appointment.jpg';
import {
  Star,
  MapPin,
  Phone,
  Calendar,
  ChevronDown,
  Award,
  Activity,
  ShieldCheck,
  HeartHandshake,
  Check
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

          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-gray-600">
              <span>Excellent</span>
              <div className="flex text-emerald-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-gray-400">|</span>
              <span className="font-semibold text-gray-800">Trustpilot</span>
            </div>
            <a href="#booking" className="bg-brand hover:bg-brand-dark text-white px-4 lg:px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2 shadow-[0_0_15px_rgba(106,139,141,0.4)] whitespace-nowrap text-sm lg:text-base">
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
    <div className="relative bg-gray-900 min-h-[calc(100vh-5rem)] flex items-center">
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
    <section className="py-20 md:py-32 bg-white min-h-screen flex flex-col justify-center">
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
      desc: "Chiropractic care for upper and lower back pain restores proper spinal alignment and nerve function, allowing you to reclaim your mobility and live a pain-free life focused on what matters most to you."
    },
    {
      title: "Neck Pain",
      desc: "To relieve chronic tension and restore a full range of motion, helping you eliminate headaches and discomfort so you can move through your day with clarity and ease."
    },
    {
      title: "Postural Correction",
      desc: "Personalized postural correction identifies and fixes the underlying spinal misalignments caused by daily habits, transforming your stance to eliminate chronic strain and naturally boosting your energy."
    },
    {
      title: "Sciatica Treatment",
      desc: "Focuses on relieving the mechanical pressure and nerve irritation at the source, providing drug-free pain relief that restores leg strength and helps you return to an active lifestyle."
    },
    {
      title: "Post Partum",
      desc: "Gentle postpartum chiropractic care supports your body’s natural recovery by restoring pelvic stability and relieving the physical strain of newborn care, helping you regain your strength and comfort so you can focus fully on bonding with your little one."
    },
    {
      title: "Pediatric Care",
      desc: "Supports your child's developing nervous system and physical growth by ensuring proper joint mechanics, helping them thrive through every milestone from infancy to adolescence with greater comfort and resilience."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-gray-50 border-t border-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand"></div>
            <h3 className="text-brand font-semibold tracking-wider uppercase text-sm">Services</h3>
            <div className="h-px w-12 bg-brand"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight">Conditions We Treat</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
          <div className="w-full lg:w-5/12 flex flex-col gap-2">
            {services.map((s, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`text-left px-6 py-5 rounded-2xl transition-all duration-300 border focus:outline-none ${activeIndex === i
                  ? 'bg-white border-brand/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-gray-900'
                  : 'bg-transparent border-transparent text-gray-400 hover:text-gray-600 hover:bg-black/5'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className={`text-xl md:text-2xl font-bold tracking-tight transition-all duration-300 ${activeIndex === i ? 'text-brand' : ''}`}>
                    {s.title}
                  </h4>
                  {activeIndex === i && (
                    <motion.div
                      layoutId="active-indicator"
                      className="w-2 h-2 rounded-full bg-brand"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="w-full lg:w-7/12 bg-white rounded-[2rem] p-8 md:p-16 shadow-[0_20px_60px_rgb(0,0,0,0.05)] border border-gray-100 flex items-center min-h-[300px]">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="w-full"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 tracking-tight">
                {services[activeIndex].title}
              </h3>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                {services[activeIndex].desc}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      title: "Highly recommend Dr. Calvin if you’re looking for a chiropractor who takes a more holistic approach.",
      text: "I had some pretty intense back pain the other week—sharp, shooting pain that ran from my left leg up to my lower back and hip. After his assessment and a few adjustments (including work on my T band), I felt a noticeable difference. I can walk more smoothly now, and I'm way more comfortable and pain-free. On top of that, I’ve been taking the supplements I got from his office, and honestly, I haven’t felt this good in a while!",
      author: "Erin O."
    },
    {
      title: "Dr. Calvin is hands down the best chiropractor I’ve been to.",
      text: "He actually takes the time to figure out what’s going on instead of rushing you in and out like a quick appointment. He explains everything really well—what’s causing the issue, how he’s going to fix it, and even gives you “homework” to keep the progress going between visits. You can tell he knows his stuff and genuinely cares about getting you better, not just giving a quick adjustment and sending you on your way. Highly recommend!",
      author: "Michael N."
    },
    {
      title: "I definitely recommend Live Right Chiro!",
      text: "Every visit with Dr. Calvin is worth my time driving all the at from west seattle. He listens to my concerns, explains everything clearly, and helps me feel so much better. Provides excellent advice and tools to take home as well. Great experience from start to finish!",
      author: "Marie L."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-brand"></div>
            <h3 className="text-brand font-semibold tracking-wider uppercase text-sm">Review</h3>
            <div className="h-px w-12 bg-brand"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Words From Our Patients</h2>
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
    {
      question: "What is chiropractic?",
      answer: "At its core, chiropractic care is about helping your body restore balance, relieve discomfort, and enhance overall well-being without relying on medications or invasive procedures. Whether you're recovering from an injury, managing chronic pain, or simply looking to maintain your health, chiropractic care can be a powerful tool in supporting your journey toward a healthier, more active life.\n\n Chiropractors use hands-on techniques, including spinal adjustments and other treatments, to realign the spine and help the body heal naturally. These adjustments can improve mobility, reduce pain, and support the body’s ability to function optimally. Chiropractic care is not just for back pain—it can also help with headaches, joint pain, stress, posture issues, and so much more."
    },
    {
      question: "Who can benefit from chiropractic care?",
      answer: "Chiropractic care is beneficial for people of all ages, from infants to seniors. Whether you're a child experiencing growing pains, an adult managing stress or back pain, or a senior looking to improve mobility and reduce joint discomfort, chiropractic care offers a safe, natural approach to improving overall health. It can help with pain relief, posture, mobility, and stress at any stage of life. We're here to support your wellness journey, no matter your age!"
    },
    {
      question: "What is the \"popping\" sound during an adjustment?",
      answer: "The \"popping\" sound you hear during chiropractic adjustments is typically caused by the release of gas bubbles from the joints. This is known as cavitation.\n\n When a chiropractor applies a gentle, controlled force to a joint, the pressure inside the joint changes. This causes dissolved gases—mainly oxygen, nitrogen, and carbon dioxide—to form bubbles that quickly burst, creating the popping sound. This is completely normal and doesn't indicate that anything is being \"cracked\" or harmed.\n\n The sound itself is harmless and doesn't affect the effectiveness of the adjustment. In fact, many patients report feeling immediate relief and increased mobility after hearing the pop. It's simply a sign that the joint has been properly adjusted, helping to restore function and reduce tension."
    },
    {
      question: "Will I be sore after my adjustment?",
      answer: "It’s possible to feel some mild soreness after your adjustment, especially if your body is adjusting to new alignment or if it’s been a while since you’ve had chiropractic care. This is typically temporary and should subside within a day or two. Many patients feel immediate relief and improved mobility after their visit, but if you experience any discomfort, it’s usually mild and short-lived."
    },
    {
      question: "Is there a dress code?",
      answer: "At Live Right Chiro, we ask that all patients wear comfortable, non-restrictive clothing for their visits. Please avoid clothing that is overly revealing, such as tops that expose undergarments or are too low-cut. Similarly, we request that patients avoid extremely baggy or overly restrictive clothing, as it may hinder the effectiveness of your treatment. Our goal is to ensure you feel comfortable and relaxed during your visit while allowing us to provide the best possible care."
    },
    {
      question: "Do we accept insurance?",
      answer: "At Live Right Chiro, we provide high-quality, personalized chiropractic care as out-of-network providers. While we do not accept insurance directly, we do accept HSA/FSA cards as a form of payment.\n\n If you have insurance, we can provide you with a superbill—an itemized receipt that you can submit to your insurance company for potential reimbursement. If you have any questions about your insurance coverage or the superbill process, please feel free to contact us. We're here to assist you!"
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-32 bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={faqImg}
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
              {faqs.map((faqItem, i) => (
                <div key={i} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  >
                    <span className="font-semibold text-gray-900">{faqItem.question}</span>
                    <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed whitespace-pre-line">
                      {faqItem.answer}
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
  const sessionItems = [
    "A full exam to understand your body’s needs",
    "A deep dive into your personal health goals",
    "Expert supplement recommendations tailored to you",
    "At-home stretches & release techniques to keep you feeling great",
    "Full-body chiropractic adjustments to restore balance & relieve tension"
  ];

  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 bg-brand text-white py-20 md:py-32 px-4 sm:px-6 lg:px-16 xl:px-24 flex flex-col justify-center">
        <h3 className="text-white/80 font-semibold tracking-wider uppercase text-sm mb-3">Your First Appointment</h3>
        <h2 className="text-3xl md:text-5xl font-bold mb-8">What to Expect</h2>
        <p className="text-white/90 text-lg mb-8 leading-relaxed">
          We don't guess — we assess. Your first session at Live Right Chiro is focused on identifying the root cause of your concern and starting treatment right away (when appropriate). Whether you're dealing with ongoing pain or a recent injury, we approach every case with the same care, attention, and professionalism from the very beginning.
        </p>

        <div className="bg-white/10 rounded-2xl p-8 border border-white/20">
          <h4 className="text-xl font-bold mb-6 text-white text-center">Your 30–45 minute session includes:</h4>
          <ul className="space-y-4">
            {sessionItems.map((item, i) => (
              <li key={i} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Check className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-white/90 text-lg leading-snug">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[600px] md:h-auto">
        <img
          src={firstAppointmentImg}
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
    <section id="booking" className="relative py-24 md:py-32 flex items-center justify-center min-h-screen">
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
