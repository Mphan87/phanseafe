import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Profile from "./Profile";
import { UserProvider } from "./testUtils";

it("renders without crashing", function () {
  render(
      <MemoryRouter>
        <UserProvider>
          <Profile />
        </UserProvider>
      </MemoryRouter>,
  );
});