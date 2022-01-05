import { render, screen } from "@testing-library/react";
import React from "react";
import { ReactLocation } from "react-location";
import App from "./App";

test("renders learn react link", () => {
  render(<App location={new ReactLocation()} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
