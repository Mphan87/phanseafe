import React from "react";
import { render } from "@testing-library/react";
import CreatecoralForm from "./CreatecoralForm";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CreatecoralForm />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
