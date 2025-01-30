"use server";

import { PrismaClient } from "@prisma/client";

export type ContactFormState = {
  firstName: { value: string; errors?: string[] };
  lastName: { value: string; errors?: string[] };
  email: { value: string; errors?: string[] };
  phone: { value: string; errors?: string[] };
  message: { value: string; errors?: string[] };
};

const prisma = new PrismaClient();

export async function createContact(prevState: ContactFormState, formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const message = formData.get("message") as string;

  const errors: ContactFormState = {
    firstName: { value: firstName },
    lastName: { value: lastName },
    email: { value: email },
    phone: { value: phone },
    message: { value: message },
  };


  if (firstName.length < 2) errors.firstName.errors = ["Le prénom doit contenir au moins 2 caractères"];
  if (lastName.length < 2) errors.lastName.errors = ["Le nom doit contenir au moins 2 caractères"];
  if (!email.includes("@")) errors.email.errors = ["L'adresse email est invalide"];
  if (message.length < 10) errors.message.errors = ["Le message doit contenir au moins 10 caractères"];


  if (Object.values(errors).some((field) => field.errors)) return errors;

  try {
    await prisma.contactForm.create({
      data: { firstName, lastName, email, phone, message },
    });


    return {
      firstName: { value: "" },
      lastName: { value: "" },
      email: { value: "" },
      phone: { value: "" },
      message: { value: "" },
    };
  } catch (error) {
    console.error("Erreur lors de l'enregistrement :", error);
    return {
      ...errors,
      message: { value: message, errors: ["Erreur serveur, veuillez réessayer"] },
    };
  }
}

