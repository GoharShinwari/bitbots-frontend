"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user profile with additional information
      await updateProfile(user, {
        displayName: parentName,
        // Note: phoneNumber can't be set directly here, you might need to store it separately
      });

      // Here you would typically save additional user data (child info, phone) to your database
      // For example: await saveAdditionalUserData(user.uid, { phoneNumber, childName, childAge });

      router.push("/dashboard");
    } catch (err) {
      setError("Failed to create an account. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="parentname">Parent's Name</Label>
              <Input
                id="parentname"
                name="parentname"
                type="text"
                placeholder="Ex. John"
                value={parentName}
                onChange={(e) => setParentName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phonenumber">Phone Number</Label>
              <Input
                id="phonenumber"
                name="phonenumber"
                type="tel"
                placeholder="Ex. (123)-456-7891"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childname">Child's Name</Label>
              <Input
                id="childname"
                name="childname"
                type="text"
                placeholder="Ex. John Jr."
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="childage">Child's Age</Label>
              <Input
                id="childage"
                name="childage"
                type="number"
                placeholder="Ex. 12"
                value={childAge}
                onChange={(e) => setChildAge(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div className="text-red-500 text-center mt-2">
                {error}
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col">
            <button type="submit" className="w-full">Sign Up</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Have an account?
          <Link className="underline ml-2" href="/signin">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}