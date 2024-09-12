"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';

interface Week {
  title: string;
  content: string[];
  emoji: string;
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [openWeek, setOpenWeek] = useState<number | null>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      setIsAtBottom(scrollTop + clientHeight >= scrollHeight - 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const toggleWeek = (weekIndex: number) => {
    setOpenWeek(openWeek === weekIndex ? null : weekIndex);
  };

  const weeks: Week[] = [
    {
      title: "Week 1: Welcome to Python's Playground",
      emoji: "🚀",
      content: [
        "Discover the magic of programming with Python",
        "Set up your very own Python coding space",
        "Learn about variables, Python's storage boxes",
        "Write your first Python program and watch it run",
        "Play with numbers and make Python do math for you"
      ]
    },
    {
      title: "Week 2: Teaching Python to Think and Repeat",
      emoji: "🔁",
      content: [
        "Use if statements to help Python make choices",
        "Create loops to make Python repeat cool stuff",
        "Learn to fix coding oopsies and become a bug hunter",
        "Build a fun quiz game to challenge your friends"
      ]
    },
    {
      title: "Week 3: Python's Data Circus",
      emoji: "🎪",
      content: [
        "Juggle multiple items with Python lists",
        "Organize information in Python dictionaries",
        "Play with text and make Python speak your language",
        "Learn to save your work in files and load it back"
      ]
    },
    {
      title: "Week 4: Unlocking Python's Toolbox",
      emoji: "🧰",
      content: [
        "Make your own Python tools called functions",
        "Send information to your functions and get answers back",
        "Discover Python modules, pre-made toolkits for coders",
        "Explore awesome Python libraries and their superpowers"
      ]
    },
    {
      title: "Week 5: Building Your Own Python Creations",
      emoji: "🏗️",
      content: [
        "Create your own digital objects with classes",
        "Give your objects cool abilities with methods",
        "Learn about inheritance, the family tree of objects",
        "Design a text adventure game with your new skills"
      ]
    },
  ];
  
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-blue-600 text-white p-4 z-10">
        <div className="max-w-6xl mx-auto flex h-full">
        <div className="flex justify-between items-center w-full">
          <a 
            href="#"
            className="text-xl hover:text-blue-200 transition duration-300"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            onClick={(e) => {
              e.preventDefault(); 
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            BitBot Academy
          </a>

          <div className="flex space-x-4 items-center">
              <a 
                href="#"
                className="text-xl font-medium hover:text-blue-200 transition duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                About
              </a>

              <a 
                href="#"
                className="text-xl font-medium hover:text-blue-200 transition duration-300"
                style={{ fontFamily: 'Poppins, sans-serif' }}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('curriculum');
                }}
              >
                Curriculum
              </a>

              <Link 
                  href="/signup"
                  className="text-l bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition duration-300"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  Enroll Now
                </Link>

          </div>
        </div>
        </div>
      </header>

      <main className={`flex-grow pt-24 pb-20 px-8 bg-gradient-to-b from-blue-100 to-purple-100 transition-opacity duration-1000`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}">
          <h1 className="text-5xl font-bold mb-4 text-blue-800" style={{ fontFamily: 'Poppins, sans-serif' }}>Welcome to BitBots Academy!</h1>   
          <p className="text-xl mb-8 text-gray-600">Empowering kids aged 6-17 with AI-powered coding education</p>
          <Link href="/signup" className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-600 transition duration-300">
        Start Your Coding Journey
      </Link>

      <div className="mt-6">
        <Link href="/signin" className="text-blue-500 hover:underline text-lg">
          Already have an account? Sign In
        </Link>
      </div>
      </div>
      

          <section id="about" className={`mb-16 text-center transform transition-all duration-1000 delay-900 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <h2 className="text-3xl font-semibold mb-4 text-blue-700"             style={{ fontFamily: 'Poppins, sans-serif' }}
            >Why Choose BitBots Academy?</h2>
            <p className="text-lg mb-6 text-gray-700">
              In a future increasingly driven by AI and programming, BitBots Academy equips your child with the skills needed to excel. 
              Our comprehensive 8-week course integrates advanced AI technology with interactive lessons, making coding both enjoyable and accessible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                AI-Powered Learning
              </h3>
              <p className="text-gray-600">Personalized instruction adapts to your child&apos;s pace and style</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Age-Appropriate Content
              </h3>
              <p className="text-gray-600">Tailored lessons for ages 6-17, ensuring the right challenge level</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2 text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Real-World Projects
              </h3>
              <p className="text-gray-600">Apply coding skills to exciting, practical projects</p>
            </div>
          </div>
          </section>

          <section id="curriculum" className={`mb-16 text-center transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h2 className="text-3xl font-semibold mb-6 text-blue-700" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Your 5-Week Python Adventure
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Join us on an exciting journey from coding basics to creating your own digital world, perfect for ages 6-17!
        </p>
        <div className="space-y-4">
          {weeks.map((week, index) => (
            <div key={index} className="border border-blue-300 rounded-lg shadow-lg overflow-hidden">
              <button
                className="w-full text-left px-6 py-4 bg-blue-50 hover:bg-blue-100 transition-colors duration-300 flex justify-between items-center"
                onClick={() => toggleWeek(index)}
              >
                <span className="text-lg font-semibold text-blue-600" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {week.emoji} {week.title}
                </span>
                <span className="text-blue-500 text-xl">{openWeek === index ? '▲' : '▼'}</span>
              </button>
              {openWeek === index && (
                <div className="bg-white p-6 border-t border-blue-200">
                  <ul className="list-disc list-inside text-gray-700 text-left space-y-2">
                    {week.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-lg">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-lg mt-8 text-gray-600">
          Every week is packed with fun projects, coding challenges, and interactive lessons to boost your skills and spark your imagination!
        </p>
      </section>
        </div>
      </main>

      <footer className={`fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 text-center transition-opacity duration-300 ${isAtBottom ? 'opacity-100' : 'opacity-0'}`}>
        <p>&copy; 2024 BitBots Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}