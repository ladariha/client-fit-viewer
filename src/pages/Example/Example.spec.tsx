import { render } from "@testing-library/react";
import { Example, ExampleProps } from "./Example";
import { ExamplePageObject } from "./Example.pageObject";

describe("Example component", () => {
  const renderComponent = (props: ExampleProps = {}) => {
    return new ExamplePageObject(render(<Example {...props} />));
  };

  it("should render with default count of 0", async () => {
    const example = renderComponent();
    await example.assertCount(0);
  });

  it("should render with provided initial count", async () => {
    const example = renderComponent({ initialCount: 10 });
    await example.assertCount(10);
  });

  it("should increment count when increment button is clicked", async () => {
    const example = renderComponent({ initialCount: 5 });
    await example.assertCount(5);
    await example.clickIncrementButton();
    await example.assertCount(6);
  });

  it("should decrement count when decrement button is clicked", async () => {
    const example = renderComponent({ initialCount: 5 });
    await example.assertCount(5);
    await example.clickDecrementButton();
    await example.assertCount(4);
  });

  it("should reset count to initial value when reset button is clicked", async () => {
    const example = renderComponent({ initialCount: 5 });
    await example.assertCount(5);
    await example.clickIncrementButton();
    await example.clickIncrementButton();
    await example.assertCount(7);
    await example.clickResetButton();
    await example.assertCount(5);
  });
});
