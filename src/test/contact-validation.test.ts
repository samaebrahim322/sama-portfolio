import { describe, expect, it } from "vitest";
import { validateContact } from "@/components/portfolio/Contact";
const ok = { name: "A", email: "a@b.com", subject: "Hi", message: "Hello" };
describe("contact form validation", () => {
  it("accepts a complete form", () => expect(validateContact(ok)).toEqual({}));
  it("requires every field", () => expect(Object.keys(validateContact({ name: "", email: "", subject: "", message: "" }))).toHaveLength(4));
  it("rejects invalid email", () => expect(validateContact({ ...ok, email: "nope" }).email).toBeTruthy());
});
