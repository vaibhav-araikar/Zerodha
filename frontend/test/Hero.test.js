// jo component ko test karna hai uska naam first me then test then js
// Hero.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../src/landing_page/home/Hero.jsx";

// Hero component test
describe("Hero Component", () => {
  test("renders the Hero component with correct content", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Home Hero");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "media/homeHero.png");
  });
});
