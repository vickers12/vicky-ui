import { render, screen } from "@vicky-ui/test-utils";
import { createRef } from "react";
import { Flex, FlexContext } from "../../src";

describe("<Flex />", () => {
    it("renders with default props", () => {
        render(<Flex>Default Flex</Flex>);

        const textElement = screen.getByText("Default Flex");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("DIV"); // default elementType
        expect(textElement).toHaveClass("vui-flex");
    });

    it("should support DOM props", () => {
        render(<Flex data-foo="bar">Test</Flex>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <FlexContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Flex slot="test">Test</Flex>
            </FlexContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Flex ref={ref}>Test</Flex>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("forwards custom className prop", () => {
        render(<Flex className="custom-class">Custom Class Flex</Flex>);

        const textElement = screen.getByText("Custom Class Flex");
        expect(textElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(<Flex style={{ color: "red" }}>Styled Flex</Flex>);

        const textElement = screen.getByText("Styled Flex");
        expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });
});
