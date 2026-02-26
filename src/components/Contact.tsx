import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { FiSend } from "react-icons/fi";
import { SectionWrapper } from "./SectionWrapper";

interface FormState {
  status: "idle" | "success" | "error";
  message: string;
}

const initialState: FormState = { status: "idle", message: "" };

async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const name = (formData.get("name") as string).trim();
  const email = (formData.get("email") as string).trim();
  const message = (formData.get("message") as string).trim();

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all fields." };
  }

  const subject = encodeURIComponent(`Contact from ${name}`);
  const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
  window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;

  return { status: "success", message: "Opening your email client\u2026" };
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center gap-2 self-start rounded-lg bg-accent-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-700 disabled:opacity-60"
    >
      <FiSend size={16} />
      {pending ? "Sending\u2026" : "Send Message"}
    </button>
  );
}

export function Contact() {
  const [state, formAction] = useActionState(submitContact, initialState);

  return (
    <SectionWrapper id="contact" className="bg-gray-50/60">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl">
        Get in Touch
      </h2>
      <p className="mb-8 text-gray-500">
        Have a question or want to work together? Drop me a message.
      </p>

      <form action={formAction} className="flex max-w-lg flex-col gap-5">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-gray-700">Name</span>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-100"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-gray-700">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-100"
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-gray-700">Message</span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Your message..."
            className="resize-y rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-accent-400 focus:ring-2 focus:ring-accent-100"
          />
        </label>

        {state.status === "error" && (
          <p className="text-sm text-red-600" role="alert">{state.message}</p>
        )}
        {state.status === "success" && (
          <p className="text-sm text-green-600" role="status">{state.message}</p>
        )}

        <SubmitButton />
      </form>
    </SectionWrapper>
  );
}
