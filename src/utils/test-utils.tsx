import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { createSerializer, matchers } from "@emotion/jest";
import { useStore } from "@/configs/store";
import { Provider } from "react-redux";
import mockBeerItems from "./mock-beer-items";
// @ts-ignore
expect.addSnapshotSerializer(createSerializer());
// @ts-ignore
expect.extend(matchers);

const initialStoreValues = {
  getBeerById: {
    data: mockBeerItems[0],
    isLoading: false,
    errors: [],
  },
};

const AllTheProviders: FC = ({ children }) => {
  const store = useStore(initialStoreValues);
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>{children}</Provider>
    </ChakraProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
