import { BasePageObject } from "../../testutils/BasePageObject";
import { waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export class ExamplePageObject extends BasePageObject {
  async getCountText(): Promise<string> {
    const countElement = this.getBySelector(ExamplePageObject.CSS_SELECTORS.countDisplay);
    return countElement.textContent || "";
  }

  async getCurrentCount(): Promise<number> {
    const countText = await this.getCountText();
    const match = countText.match(/Current count: (\d+)/);
    if (!match) {
      throw new Error(`Could not extract count from text: ${countText}`);
    }
    return parseInt(match[1], 10);
  }

  async clickIncrementButton(): Promise<void> {
    const button = this.getBySelector(ExamplePageObject.CSS_SELECTORS.incrementButton);
    await userEvent.click(button);
  }

  async clickDecrementButton(): Promise<void> {
    const button = this.getBySelector(ExamplePageObject.CSS_SELECTORS.decrementButton);
    await userEvent.click(button);
  }

  async clickResetButton(): Promise<void> {
    const button = this.getBySelector(ExamplePageObject.CSS_SELECTORS.resetButton);
    await userEvent.click(button);
  }

  async assertCount(expectedCount: number): Promise<void> {
    await waitFor(async () => {
      const currentCount = await this.getCurrentCount();
      expect(currentCount).toBe(expectedCount);
    });
  }

  static CSS_SELECTORS = {
    countDisplay: ".count-display",
    incrementButton: ".increment-button",
    decrementButton: ".decrement-button",
    resetButton: ".reset-button"
  };
}
