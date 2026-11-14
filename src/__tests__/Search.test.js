import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import { restaurants } from "../utils/mockData";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve({
        data: {
          data: {
            cards: [
              {},
              {
                card: {
                  card: {
                    gridElements: {
                      infoWithStyle: {
                        restaurants,
                      },
                    },
                  },
                },
              },
            ],
          },
        },
      });
    },
  });
});

describe("Body Component", () => {
  it("Search Feature Functionality", async () => {
    await act(async () => {
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Body />
        </BrowserRouter>,
      );
    });

    let cards = screen.getAllByTestId("restaurantCard");
    expect(cards.length).toBe(9);

    const searchInput = screen.getByTestId("searchInput");
    expect(searchInput).toBeInTheDocument();

    const searchButton = screen.getByTestId("searchButton");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchButton);

    cards = screen.getAllByTestId("restaurantCard");
    expect(cards.length).toBe(1);
  });

  it("Should Filter Top Rated Restaurant", async () => {
    await act(() =>
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Body />
        </BrowserRouter>,
      ),
    );

    const topRatedFilterButton = screen.getByRole("button", {
      name: "Top Rated",
    });

    fireEvent.click(topRatedFilterButton);

    const cards = screen.getAllByTestId("restaurantCard");
    expect(cards.length).toBe(3);
  });
});
