"use client";
import React, { useState } from 'react';
import { BookOpen, Play, Code, CheckCircle, ChevronLeft, ChevronRight, Terminal } from 'lucide-react';

const Courses = () => {
  const [activeTab, setActiveTab] = useState('lesson');
  const [code, setCode] = useState('# Your first Python code\nprint("Hello, World!")');
  const [output, setOutput] = useState('');

  const runCode = () => {
    console.log('test');
  };

  return (
    <div className="ml-0 mt-0 h-[calc(100vh-4rem)] w-[calc(100vw-16rem)] bg-white overflow-auto">
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200">
        <div className="flex justify-between items-center p-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-600">🚀 Week 1: Welcome to Python&apos;s Playground</h1>
            <div className="flex items-center space-x-2 text-gray-500">
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Beginner</span>
              <span>•</span>
              <span>Lesson 1 of 3</span>
            </div>
          </div>
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>
            <button className="flex items-center px-3 py-2 bg-blue-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-blue-700">
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
        
        <div className="flex border-b border-gray-200">
          <button
            className={`py-4 px-6 text-sm font-medium flex items-center ${
              activeTab === 'lesson' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('lesson')}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Lesson
          </button>
          <button
            className={`py-4 px-6 text-sm font-medium flex items-center ${
              activeTab === 'exercise' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('exercise')}
          >
            <Code className="h-4 w-4 mr-2" />
            Exercise
          </button>
        </div>
      </div>
      
      <div className="p-6">
        {activeTab === 'lesson' ? (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">✨Discover the magic of programming with Python</h2>
              
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <div className="bg-gray-200 rounded-lg w-full h-64 flex items-center justify-center">
                  {/* FILL UP THIS WITH AN ACTUAL YOUTUBE VIDEO LINK */}
                  <Play className="h-12 w-12 text-gray-400" />
                  <span className="ml-2 text-gray-500">Intro to Python: Filler</span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  Welcome to your first step into the exciting world of programming! Today, we&apos;re going to explore 
                  Python, one of the most popular and beginner-friendly programming languages in the world.
                </p>
                
                <h3 className="font-bold text-lg mt-6 mb-3">What is Programming?</h3>
                <p className="text-gray-700">
                  Programming is like giving instructions to a computer to perform specific tasks. Think of it as writing a 
                  recipe for the computer to follow. The computer will do exactly what you tell it to do - no more, no less!
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 my-4">
                  <p className="text-blue-700 font-medium">Fun Fact:</p>
                  <p className="text-blue-600">
                    Python was named after the British comedy group Monty Python, not the snake! The creator, 
                    Guido van Rossum, wanted a short, unique, and slightly mysterious name.
                  </p>
                </div>
                
                <h3 className="font-bold text-lg mt-6 mb-3">Why Python?</h3>
                <p className="text-gray-700">
                  Python is an excellent first language to learn because:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li>It has simple, readable syntax that&apos;s close to English</li>
                  <li>It&apos;s widely used in many fields like web development, data science, AI, and more</li>
                  <li>It has a friendly and supportive community</li>
                  <li>You can create cool projects quickly, which keeps learning fun!</li>
                </ul>
                
                <h3 className="font-bold text-lg mt-6 mb-3">What is an IDE?</h3>
                <p className="text-gray-700">
                  IDE stands for &quot;Integrated Development Environment.&quot; Think of it as your piece of paper to draw instructions for the computer!
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li>A text editor where you write your code</li>
                  <li>A way to run your code and see the results</li>
                  <li>Helpful features like error checking and code completion</li>
                  <li>Tools to help organize and manage your projects</li>
                </ul>
                
                <p className="text-gray-700 mt-4">
                  In this course, we&apos;re using a built-in IDE right in your browser, so you don&apos;t need to install anything!
                </p>
                
                <h3 className="font-bold text-lg mt-6 mb-3">Your First Python Program</h3>
                <p className="text-gray-700">
                  Let&apos;s write the traditional first program that every programmer starts with: printing &quot;Hello, World!&quot; to the screen.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-4 font-mono">
                  print(&quot;Hello, World!&quot;)
                </div>
                
                <p className="text-gray-700 mt-4">
                  This simple line tells Python to display the text &quot;Hello, World!&quot; on the screen. You&apos;ll get to try this yourself in the Exercise tab!
                </p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">🛠️Set up your very own Python coding space</h2>
              <div className="prose max-w-none">
                <p className="text-gray-700">
                  Good news! Your coding space is already set up right here in BitBots. In the Exercise tab, you&apos;ll find a coding 
                  environment where you can write Python code and run it to see the results immediately.
                </p>
                
                <h3 className="font-bold text-lg mt-6 mb-3">Understanding Your Coding Environment</h3>
                <p className="text-gray-700">
                  In the coding environment, you&apos;ll see:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mt-2">
                  <li><strong>Code Editor</strong>: Where you write your Python code</li>
                  <li><strong>Run Button</strong>: Click this to execute your code</li>
                  <li><strong>Output Window</strong>: Where you see the results of your code</li>
                  <li><strong>Instructions</strong>: Guidelines for what to do in each exercise</li>
                </ul>
                
                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
                  <p className="text-yellow-800 font-medium">Tip:</p>
                  <p className="text-yellow-700">
                    Don&apos;t worry about making mistakes! Coding is all about trial and error. If something doesn&apos;t work, 
                    you can always try again. The error messages will help you understand what went wrong.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h3 className="font-bold text-lg text-gray-800">Key Takeaways</h3>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Programming is giving instructions to a computer</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Python is a beginner-friendly language with simple syntax</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">An IDE is your coding workshop with tools to write and run code</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Your first Python command: print(&quot;Hello, World!&quot;)</span>
                </li>
              </ul>
              
              <div className="mt-6 flex justify-end">
                <button 
                  className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => setActiveTab('exercise')}
                >
                  Go to Exercise
                  <ChevronRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Exercise: Your First Python Program</h2>
                <div className="prose max-w-none">
                  <p className="text-gray-700">
                    It&apos;s time to write your very first Python program! In this exercise, you&apos;ll use the <code>print()</code> function 
                    to display a message on the screen.
                  </p>
                  
                  <h3 className="font-medium text-base mt-4 mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-6 text-gray-700 space-y-2">
                    <li>In the code editor on the right, you&apos;ll see a line that prints &quot;Hello, World!&quot;</li>
                    <li>Run the code by clicking the &quot;Run Code&quot; button</li>
                    <li>See your message appear in the output window below</li>
                    <li>Try changing the message inside the quotes to say something else, like your name</li>
                    <li>Run the code again to see your new message</li>
                  </ol>
                  
                  <div className="bg-blue-50 p-4 rounded-lg my-4">
                    <h4 className="font-medium text-blue-700">How it works:</h4>
                    <p className="text-blue-600 mt-1">
                      <code>print()</code> is a Python function that displays information to the screen. 
                      Whatever you put inside the parentheses (and quotes) will be shown in the output.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg my-4">
                    <h4 className="font-medium text-green-700">Challenge:</h4>
                    <p className="text-green-600 mt-1">
                      Try adding a second <code>print()</code> statement on a new line to display another message!
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4 text-white font-mono">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-semibold">Code Editor</h3>
                    <button 
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                      onClick={runCode}
                    >
                      Run Code
                    </button>
                  </div>
                  <textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="w-full h-48 bg-gray-900 text-gray-100 p-3 rounded font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                
                <div className="bg-black rounded-lg p-4 text-white font-mono">
                  <div className="flex items-center mb-2">
                    <Terminal className="h-4 w-4 mr-2" />
                    <h3 className="text-sm font-semibold">Output</h3>
                  </div>
                  <div className="bg-gray-900 p-3 rounded text-gray-100 font-mono text-sm min-h-24">
                    {output || 'Click "Run Code" to see the output here'}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-between">
              <button 
                className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                onClick={() => setActiveTab('lesson')}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Back to Lesson
              </button>
              
              <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Complete &amp; Continue
                <ChevronRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
