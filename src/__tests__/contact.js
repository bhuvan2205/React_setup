import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

test("contact form", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("name label", () => {
  render(<Contact />);

  const nameLabel = screen.getByRole("label", { name: "Name" });
  expect(nameLabel).toBeInTheDocument();
});

test("email label", () => {
  render(<Contact />);

  const emailLabel = screen.getByRole("label", { name: "Email" });
  expect(emailLabel).toBeInTheDocument();
});
