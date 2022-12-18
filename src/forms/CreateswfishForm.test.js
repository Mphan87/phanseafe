import React from "react";
import { render } from "@testing-library/react";
import CreateswfishForm from "./CreateswfishForm";
import { MemoryRouter } from "react-router";

it("matches snapshot", function () {
  const { asFragment } = render(
      <MemoryRouter>
        <CreateswfishForm />
      </MemoryRouter>,
  );
  expect(asFragment()).toMatchSnapshot();
});
