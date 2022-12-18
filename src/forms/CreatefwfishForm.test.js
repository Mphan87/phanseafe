import React from "react";
import { render } from "@testing-library/react";
import CreatefwfishForm from "./CreateswfishForm";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CreatefwfishForm />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
