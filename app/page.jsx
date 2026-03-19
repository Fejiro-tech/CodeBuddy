"use client";
import Link from "next/link";
import Navbar from './components/Navbar';
import { motion } from "framer-motion";
import { FaBolt, FaCode, FaComments } from "react-icons/fa";

export default function LandingPage() {

  // Container for staggered animation
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  // Individual card animation
  const card = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: { 
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Features with icons
  const features = [
    {
      title: "Instant Answers",
      desc: "Get real-time answers to coding questions with AI suggestions and clear explanations.",
      icon: <FaBolt />,
    },
    {
      title: "Suggested Challenges",
      desc: "Improve your skills with curated coding challenges tailored to your level.",
      icon: <FaCode />,
    },
    {
      title: "Interactive Chat",
      desc: "Ask follow-up questions, clarify doubts, and interact naturally with AI.",
      icon: <FaComments />,
    },
  ];

  return (
    <main className="min-h-screen text-white bg-[#0A0A0A]">

      {/* Hero Section */}
      <section className="relative h-screen bg-[url('/hero3.webp')] bg-cover bg-center bg-no-repeat px-8 md:px-10">
        <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] to-[#0A0A0A]/75"></div>
        <Navbar />

        <div className="flex items-center h-[80vh]">
          <div className="relative z-20 w-full">
            <div className="max-w-6xl mx-auto text-left">
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-6xl font-bold mb-6 leading-tight"
              >
                <span className="text-[#55d627]">CodeBuddy: </span>  
                <br className="hidden md:block" />
                Your AI Coding Assistant
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-sm md:text-lg lg:text-xl mb-8 text-gray-300"
              >
                Ask questions, explore coding suggestions, and get instant AI-powered
                answers - all in one place.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Link href="/chatPage">
                  <button className="bg-[#55D627] hover:bg-[#49c11f] text-sm md:text-base text-black font-semibold px-4 md:px-8 py-3 rounded-lg shadow-lg transition-transform hover:scale-105">
                    Try CodeBuddy
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-8 py-24">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          What You Can Do
        </h2>

        <motion.div
          className="grid gap-8 md:gap-10 grid-cols-1 lg:grid-cols-3 px-8 justify-items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={card}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl py-12 px-6 text-center w-80 md:w-100 lg:w-auto relative overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#55d627]/20 via-transparent to-[#55d627]/20 blur-xl"></div>

              {/* Icon */}
              <motion.div
                className="text-3xl text-[#55d627] mb-4 flex justify-center relative z-10"
                whileHover={{ rotate: 10, scale: 1.2 }}
              >
                {item.icon}
              </motion.div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-4 text-[#55d627] relative z-10">
                {item.title}
              </h3>

              <p className="text-gray-300 text-sm md:text-base relative z-10">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#111111] py-24">
        <div className="max-w-6xl mx-auto text-center px-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Ready to Boost Your Coding Skills with 
            <span className="text-[#55d627]"> CodeBuddy</span>?
          </h2>

          <Link href="/chatPage">
            <button className="bg-[#55D627] hover:bg-[#49c11f] text-black font-semibold px-4 md:px-10 py-3 md:py-4 rounded-lg shadow-lg transition text-sm md:text-base cursor-pointer hover:scale-105">
              Start Chatting
            </button>
          </Link>
        </div>
      </section>

    </main>
  );
}