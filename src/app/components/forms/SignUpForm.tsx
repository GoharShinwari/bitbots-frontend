"use client";

import Link from "next/link"
import { useFormState } from "react-dom";
import {registerUserAction}from "@/data/actions/auth-actions";

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
import { ZodErrors } from "@/components/custom/ZodErrors";


const INITIAL_STATE ={
  data: null,
  ZodErrors: null,
  message: null
};

export function SignupForm() {
  const [formState, formAction] = useFormState(registerUserAction, INITIAL_STATE);

  console.log(formState, "client");

  return (
    <div className="w-full max-w-md">
      <form action = {formAction}>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-3xl font-bold">Sign Up</CardTitle>
            <CardDescription>
              Enter your details to create a new account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="parentname">Parent&apos;s Name</Label>
              <Input
                id="parentname"
                name="parentname"
                type="text"
                placeholder="Ex. John"
              />
              <ZodErrors error={formState?.zodErrors?.parentname}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
              />
              <ZodErrors error={formState?.zodErrors?.email}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phonenumber">Phone Number</Label>
              <Input
                id="phonenumber"
                name="phonenumber"
                type="text"
                placeholder="Ex. (123)-456-7891"
              />
              <ZodErrors error={formState?.zodErrors?.phonenumber}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="childname">Child&apos;s Name</Label>
              <Input
                id="childname"
                name="childname"
                type="text"
                placeholder="Ex. John Jr."
              />
              <ZodErrors error={formState?.zodErrors?.childname}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="childage">Child&apos;s Age</Label>
              <Input
                id="childage"
                name="childage"
                type="text"
                placeholder="Ex. 12"
              />
              <ZodErrors error={formState?.zodErrors?.childage}/>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
              <ZodErrors error={formState?.zodErrors?.password}/>
            </div>
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
