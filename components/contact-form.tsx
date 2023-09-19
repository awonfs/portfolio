/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const ContactFormSchema = z.object({
  "first-name": z.string().nonempty({ message: "First name is required" }),
  "last-name": z.string().nonempty({ message: "Last name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  message: z.string().nonempty({ message: "Message is required" }),
});

export default function ContactForm() {
  async function sendEmail(e: any) {
    e.preventDefault();

    const formData = {
      "first-name": e.target["first-name"].value,
      "last-name": e.target["last-name"].value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      ContactFormSchema.parse(formData);

      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_KEY!!,
        process.env.NEXT_PUBLIC_TEMPLATE_KEY!!,
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      console.log(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error.issues);
      } else {
        console.log(error);
      }
    }
    e.target.reset();
  }

  return (
    <Card>
      <CardContent>
        <div className="space-y-8 py-6">
          <div className="space-y-2">
            <h2 className="text-3xl font-extralight text-left">Contact</h2>
            <p className="text-zinc-500 dark:text-zinc-400">
              Fill out the form below and i'll get back to you as soon as
              possible.
            </p>
          </div>
          <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 text-left">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  required
                  name="first-name"
                  id="first-name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="space-y-2 text-left">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  required
                  name="last-name"
                  id="last-name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                name="email"
                id="email"
                placeholder="Enter your email"
                type="email"
              />
            </div>
            <div className="space-y-2 text-left">
              <Label htmlFor="message">Message</Label>
              <Textarea
                required
                name="message"
                className="min-h-[100px]"
                id="message"
                placeholder="Enter your message"
              />
            </div>
            <div className="flex w-full justify-start">
              <Button>Send message</Button>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
