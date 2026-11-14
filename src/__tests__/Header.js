import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import appStore from "../store/appStore";

describe("Header", () => {
  it("should render the header component", () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const logo = screen.getByRole("img", { name: "logo" });
    expect(logo).toBeInTheDocument();
  });
  it("should render the header component with login button", () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    const loginButton = screen.getByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
});
