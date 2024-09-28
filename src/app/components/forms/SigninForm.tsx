"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, Mail, Lock } from "lucide-react";

export function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard");
    } catch (err) {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-blue-600 text-white p-8 rounded-l-lg">
            <h2 className="text-3xl font-bold mb-4">Welcome Back to BitBots Academy</h2>
            <p className="mb-4">Continue your child's coding adventure and unlock new skills!</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access personalized learning paths</li>
              <li>Track progress and achievements</li>
              <li>Explore new coding challenges</li>
              <li>Connect with our community of young coders</li>
            </ul>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 p-8">
            <CardHeader className="p-0 mb-6">
              <CardTitle className="text-2xl font-bold text-blue-600">Sign In</CardTitle>
              <CardDescription>Access your BitBots Academy account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-600 font-semibold">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="pl-10"
                  />
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-600 font-semibold">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pl-10"
                  />
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                </div>
              </div>
              {error && (
                <div className="text-red-500 text-center mt-2 bg-red-100 p-2 rounded">
                  {error}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 p-0 mt-6">
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Sign In
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <div className="text-center text-sm text-gray-600">
                Don't have an account?
                <Link className="text-blue-600 hover:underline ml-1 font-medium" href="/signup">
                  Sign Up
                </Link>
              </div>
            </CardFooter>
          </form>
        </div>
      </Card>
    </div>
  );
}