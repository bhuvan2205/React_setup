import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../components/RestaurantCard";
import { restaurants } from "../utils/mockData";
import { BrowserRouter } from "react-router-dom";

describe("Restaurant Card", () => {
  it("Should render the RestaurantCard Component", () => {
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <RestaurantCard restaurant={restaurants?.at(0)} />
      </BrowserRouter>,
    );
    const cardTitle = screen.getByRole("heading");
    expect(cardTitle).toBeInTheDocument();
  });
});
