import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import FishList from "./SWFishList";

it("matches snapshot", function () {
  const { asFragment } = render(<FishList handle = "Achilles-tang"/>);
  expect(asFragment()).toMatchSnapshot();
});
