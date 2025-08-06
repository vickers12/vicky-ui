import { render, screen } from "@vicky-ui/test-utils";
import { createRef } from "react";
import { Button, ButtonContext } from "../../src";

describe("<Button />", () => {
    it("renders with default props", () => {
        render(<Button>Default Button</Button>);

        const textElement = screen.getByText("Default Button");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("BUTTON"); // default elementType
        expect(textElement).toHaveClass("vui-button");
    });

    it("should support DOM props", () => {
        render(<Button data-foo="bar">Test</Button>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <ButtonContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Button slot="test">Test</Button>
            </ButtonContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLButtonElement>();
        render(<Button ref={ref}>Test</Button>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLButtonElement).toBeTruthy();
    });

    it("forwards custom className prop", () => {
        render(<Button className="custom-class">Custom Class Button</Button>);

        const textElement = screen.getByText("Custom Class Button");
        expect(textElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(<Button style={{ color: "red" }}>Styled Button</Button>);

        const textElement = screen.getByText("Styled Button");
        expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });
});
