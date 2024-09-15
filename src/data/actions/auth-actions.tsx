"use server";
import {z} from "zod";
import { auth } from "@/app/firebase/config";  // Make sure to import your Firebase config
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// Initialize Firestore
const db = getFirestore();

// Zod validation schema
const schemaRegister = z.object({
  parentname: z.string().min(1).max(30, {
    message: "Name must be between 1 and 30 characters",
  }),
  phonenumber: z.string().min(10).max(14, {
    message: "Please enter in form 1234567891",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  childname: z.string().min(1).max(30, {
    message: "Name must be between 1 and 30 characters",
  }),
  childage: z.string().min(1).max(2, {
    message: "Age must be between 6 and 17",
  }),
  password: z.string().min(6).max(100, {
    message: "Password must be between 6 and 100 characters",
  }),
});

export async function registerUserAction(prevState: any, formData: FormData) {
  console.log("Hello From Register User Action");

  // Validate form data using Zod
  const validatedFields = schemaRegister.safeParse({
    parentname: formData.get("parentname"),
    phonenumber: formData.get("phonenumber"),
    email: formData.get("email"),
    childname: formData.get("childname"),
    childage: formData.get("childage"),
    password: formData.get("password"),
  });

  // If validation fails, return error messages
  if (!validatedFields.success) {
    return {
      ...prevState,
      zodErrors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Register",
    };
  }

  // Firebase registration logic
  try {
    const { parentname, phonenumber, email, childname, childage, password } = validatedFields.data;

    // Firebase Authentication: Create a new user with email and password
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Save additional user data in Firestore
    await setDoc(doc(db, "users", user.uid), {
      parentname,
      phonenumber,
      email,
      childname,
      childage,
      uid: user.uid,
    });

    // If registration succeeds, you can do additional things here if needed.

  } catch (error) {
    // Handle Firebase registration errors
    const errorMessage = (error as Error).message;
    return {
      ...prevState,
      message: `Registration failed: ${errorMessage}`,
    };
  }

  // Keep this part of the code unchanged, as requested
  return {
    ...prevState,
    data: "ok",
  };
}