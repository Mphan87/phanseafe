import React, { useState, useEffect } from "react";
import { render } from "@testing-library/react";
import FishList from "./SWFishList";
import PhanSeaApi from "./Api";
import axios from 'axios';



it("matches snapshot", function () {


  const { asFragment } = render(<FishList handle = "Achilles-tang"/>);
  expect(asFragment()).toMatchSnapshot();
});
