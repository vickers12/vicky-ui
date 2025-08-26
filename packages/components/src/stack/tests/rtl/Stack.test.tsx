import { render, screen } from "@vicky-ui/test-utils";
import { createRef } from "react";

import { Stack, StackContext } from "../../src";

describe("<Stack />", () => {
    it("renders with default props", () => {
        render(<Stack>Default Stack</Stack>);

        const textElement = screen.getByText("Default Stack");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("DIV"); // default elementType
        expect(textElement).toHaveClass("vui-stack");
    });

    it("should support DOM props", () => {
        render(<Stack data-foo="bar">Test</Stack>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <StackContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Stack slot="test">Test</Stack>
            </StackContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Stack ref={ref}>Test</Stack>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("forwards custom className prop", () => {
        render(<Stack className="custom-class">Custom Class Stack</Stack>);

        const textElement = screen.getByText("Custom Class Stack");
        expect(textElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(<Stack style={{ color: "red" }}>Styled Stack</Stack>);

        const textElement = screen.getByText("Styled Stack");
        expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });
});
