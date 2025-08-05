import { render, screen } from "@vicky-ui/test-utils";
import { createRef } from "react";
import { Inline, InlineContext } from "../../src";

describe("<Inline />", () => {
    it("renders with default props", () => {
        render(<Inline>Default Inline</Inline>);

        const textElement = screen.getByText("Default Inline");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("DIV"); // default elementType
        expect(textElement).toHaveClass("vui-inline");
    });

    it("should support DOM props", () => {
        render(<Inline data-foo="bar">Test</Inline>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <InlineContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Inline slot="test">Test</Inline>
            </InlineContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Inline ref={ref}>Test</Inline>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("forwards custom className prop", () => {
        render(<Inline className="custom-class">Custom Class Inline</Inline>);

        const textElement = screen.getByText("Custom Class Inline");
        expect(textElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(<Inline style={{ color: "red" }}>Styled Inline</Inline>);

        const textElement = screen.getByText("Styled Inline");
        expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });
});
