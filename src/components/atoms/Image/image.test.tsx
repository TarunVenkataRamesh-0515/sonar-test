/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import { Image } from ".";

describe("Image component", () => {
  test("renders with a source prop", () => {
    const { getByRole } = render(<Image source="assets/images/search.svg" />);
    expect(getByRole("img")).toHaveAttribute("src", "assets/images/search.svg");
  });

  test("renders with a width prop", () => {
    const { getByRole } = render(<Image source="assets/images/search.svg" width="100" />);
    expect(getByRole("img")).toHaveAttribute("width", "100");
  });
  test("renders with a height prop", () => {
    const { getByRole } = render(<Image source="assets/images/search.svg" height="100" />);
    expect(getByRole("img")).toHaveAttribute("height", "100");
  });
});
