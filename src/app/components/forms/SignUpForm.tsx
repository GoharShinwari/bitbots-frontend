"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { ArrowRight, User, Mail, Phone, Baby, Calendar, Lock } from "lucide-react"; // Ensure lucide-react is imported for icons

export function SignupForm() {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [childName, setChildName] = useState("");
  const [childAge, setChildAge] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: parentName,
      });

      await setDoc(doc(db, "users", user.uid), {
        parentName,
        phoneNumber,
        childName,
        childAge,
        uid: user.uid,
        coursesStarted: 0,
        challengesAttempted: 0,
        challengesSolved: 0,
        overallMinutesPracticed: 0,
        achievements: 0,
        averageScore: 0,
        currentStreak: 0,
        goalsMet: 0,
        projectsMade: 0,
        quizzesCompleted: 0,
        quizzesMinutes: 0,
        correctAnswers: 0,
        resourcesViewed: 0,
        topicsCovered: 0,
        learningMinutes: 0,
      });

      router.push("/dashboard");
    } catch (err) {
      setError("Failed to create an account. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <Card className="shadow-xl">
            <CardHeader className="space-y-1 bg-blue-600 text-white rounded-t-lg">
              <CardTitle className="text-3xl font-bold">Join BitBots Academy</CardTitle>
              <CardDescription className="text-blue-100">
                Start your child's coding adventure today!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="parentname" className="text-blue-600 font-semibold">Parent's Name</Label>
                <div className="relative">
                  <Input
                    id="parentname"
                    name="parentname"
                    type="text"
                    placeholder="Ex. John Doe"
                    value={parentName}
                    onChange={(e) => setParentName(e.target.value)}
                    required
                    className="pl-10"
                  />
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                </div>
              </div>
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
                <Label htmlFor="phonenumber" className="text-blue-600 font-semibold">Phone Number</Label>
                <div className="relative">
                  <Input
                    id="phonenumber"
                    name="phonenumber"
                    type="tel"
                    placeholder="Ex. (123)-456-7891"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="pl-10"
                  />
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="childname" className="text-blue-600 font-semibold">Child's Name</Label>
                <div className="relative">
                  <Input
                    id="childname"
                    name="childname"
                    type="text"
                    placeholder="Ex. Jane Doe"
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                    required
                    className="pl-10"
                  />
                  <Baby className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="childage" className="text-blue-600 font-semibold">Child's Age</Label>
                <div className="relative">
                  <Input
                    id="childage"
                    name="childage"
                    type="number"
                    placeholder="Ex. 12"
                    value={childAge}
                    onChange={(e) => setChildAge(e.target.value)}
                    required
                    className="pl-10"
                  />
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" size={18} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-600 font-semibold">Password</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a strong password"
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
            <CardFooter className="flex flex-col space-y-4">
              <button 
                type="submit" 
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Sign Up
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </CardFooter>
          </Card>
        </form>
        <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="text-blue-600 hover:underline ml-2 font-medium" href="/signin">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
