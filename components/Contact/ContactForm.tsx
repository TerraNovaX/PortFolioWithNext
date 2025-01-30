"use client";

import { useActionState } from "react";
import { createContact } from "@/app/api/route";

export type ContactFormState = {
  firstName: { value: string; errors?: string[] };
  lastName: { value: string; errors?: string[] };
  email: { value: string; errors?: string[] };
  phone: { value: string; errors?: string[] };
  message: { value: string; errors?: string[] };
};

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState<
    ContactFormState,
    FormData
  >(createContact, {
    firstName: { value: "" },
    lastName: { value: "" },
    email: { value: "" },
    phone: { value: "" },
    message: { value: "" },
  });

  return (
    <div className="bg-white rounded-lg p-4 text-[#0e16ff]">
      <h1 className="text-3xl text-[#0e16ff] font-bold">
        Let&apos;s Work Together!
      </h1>

      <form action={formAction} className="mt-8">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              defaultValue={state.firstName.value}
              className="w-full bg-blue-100 px-4 py-2 rounded-md"
            />
            {state.firstName.errors?.map((error, index) => (
              <p key={index} className="text-red-500">
                {error}
              </p>
            ))}
          </div>

          <div className="flex-1">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              defaultValue={state.lastName.value}
              className="w-full bg-blue-100 px-4 py-2 rounded-md"
            />
            {state.lastName.errors?.map((error, index) => (
              <p key={index} className="text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex-1">
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={state.email.value}
              className="w-full bg-blue-100 px-4 py-2 rounded-md"
            />
            {state.email.errors?.map((error, index) => (
              <p key={index} className="text-red-500">
                {error}
              </p>
            ))}
          </div>

          <div className="flex-1">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              defaultValue={state.phone.value}
              className="w-full bg-blue-100 px-4 py-2 rounded-md"
            />
            {state.phone.errors?.map((error, index) => (
              <p key={index} className="text-red-500">
                {error}
              </p>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <textarea
            name="message"
            placeholder="Message"
            defaultValue={state.message.value}
            className="w-full bg-blue-100 px-4 py-2 rounded-md"
            rows={4}
          />
          {state.message.errors?.map((error, index) => (
            <p key={index} className="text-red-500">
              {error}
            </p>
          ))}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full mt-4 px-4 py-2 text-white bg-[#0e16ff] rounded-md">
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
