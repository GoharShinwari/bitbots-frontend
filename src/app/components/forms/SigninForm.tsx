"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { auth } from "@/app/firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
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

export function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null); 
  const router = useRouter();

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/dashboard"); 
    } catch (err) {
      setError("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign In</CardTitle>
            <CardDescription>
              Enter your details to sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          <button className="w-full">Sign In</button>
          </CardFooter>
        </Card>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?
          <Link className="underline ml-2" href="/signup">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
