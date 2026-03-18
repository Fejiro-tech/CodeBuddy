import Link from "next/link";
import Navbar from './components/Navbar'

export default function LandingPage() {
  return (
    <main className="min-h-screen text-white bg-[#0A0A0A]">

      <section className="relative h-screen bg-[url('/hero3.webp')] bg-cover bg-center bg-no-repeat px-8 md:px-10">
      <div className="absolute inset-0 bg-linear-to-r from-[#0A0A0A] to-[#0A0A0A]/70"></div>

      <Navbar />
      
      <div className="flex items-center h-[80vh]">

         <div className="relative z-20 w-full">
          <div className="max-w-6xl mx-auto text-left ">
            
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">

              <span className="text-[#55d627]">CodeBuddy: </span>  
              <br className="hidden md:block" />
              Your AI Coding Assistant
            </h1>

            <p className="text-sm md:text-lg lg:text-xl mb-8 text-gray-300">
              Ask questions, explore coding suggestions, and get instant AI-powered
              answers - all in one place.
            </p>

            <Link href="/chatPage">
              <button className="bg-[#55D627] hover:bg-[#49c11f] text-sm md:text-base text-black font-semibold px-4 md:px-8 py-3 rounded-lg shadow-lg transition cursor-pointer">
                Try CodeBuddy
              </button>
            </Link>

          </div>
        </div>

      </div>
       
      </section>

      <section id="features" className="max-w-6xl mx-auto px-8 py-24 ">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
          What You Can Do
        </h2>

        <div className="grid gap-8 md:gap-10 grid-cols-1 lg:grid-cols-3 px-8 justify-items-center">
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-12 px-6 text-center hover:scale-105 transition w-80 md:w-100 lg:w-auto">
            <h3 className="text-xl font-semibold mb-4 text-[#55d627]">
              Instant Answers
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Get real-time answers to coding questions with AI suggestions
              and clear explanations.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-12 px-6 text-center hover:scale-105 transition  w-80 md:w-100 lg:w-auto">
            <h3 className="text-xl font-semibold mb-4 text-[#55d627]">
              Suggested Challenges
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Improve your skills with curated coding challenges tailored
              to your level.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl py-12 px-6 text-center hover:scale-105 transition  w-80 md:w-100 lg:w-auto">
            <h3 className="text-xl font-semibold mb-4 text-[#55d627]">
              Interactive Chat
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Ask follow-up questions, clarify doubts, and interact naturally
              with AI.
            </p>
          </div>

        </div>
      </section>

      <section className="bg-[#111111] py-24">
        <div className="max-w-6xl mx-auto text-center px-8">
          
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Ready to Boost Your Coding Skills with 
            <span className="text-[#55d627]"> CodeBuddy</span>?
          </h2>

          <Link href="/chatPage">
            <button className="bg-[#55D627] hover:bg-[#49c11f] text-black font-semibold px-4 md:px-10 py-3 md:py-4 rounded-lg shadow-lg transition text-sm md:text-base cursor-pointer">
              Start Chatting
            </button>
          </Link>

        </div>
      </section>

    </main>
  );
}