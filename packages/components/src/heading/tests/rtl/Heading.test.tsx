import { render, screen } from "@vicky-ui/test-utils";
import { H1, Heading, HeadingContext } from "../../index";
import { createRef } from "react";

import styles from "../../src/Heading.module.scss";

describe("<Heading />", () => {
    it("renders with default props", () => {
        render(<Heading>Default Heading</Heading>);

        const HeadingElement = screen.getByText("Default Heading");
        expect(HeadingElement).toBeInTheDocument();
        expect(HeadingElement.tagName).toBe("H3"); // default elementType

        expect(HeadingElement).toHaveClass("vui-heading");
        expect(HeadingElement).toHaveClass(styles["vui-heading"]);
    });

    it("should support slots", () => {
        render(
            <HeadingContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Heading slot="test">Test</Heading>
            </HeadingContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLHeadingElement>();
        render(<Heading ref={ref}>Test</Heading>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLHeadingElement).toBeTruthy();
    });

    it("applies the correct BEM modifier class for size", () => {
        render(<Heading size="xl">XL Heading</Heading>);

        const HeadingElement = screen.getByText("XL Heading");
        const baseClass = "vui-heading";
        const modifierClass = "vui-heading--xl";
        expect(HeadingElement).toHaveClass(styles[baseClass]);
        expect(HeadingElement).toHaveClass(styles[modifierClass]);
    });

    it("forwards custom className prop", () => {
        render(<Heading className="custom-class">Custom Class Heading</Heading>);

        const HeadingElement = screen.getByText("Custom Class Heading");
        expect(HeadingElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(<Heading style={{ color: "red" }}>Styled Heading</Heading>);

        const HeadingElement = screen.getByText("Styled Heading");
        expect(HeadingElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });

    it("should support level", () => {
        render(<Heading level={1}>Test</Heading>);

        const element = screen.getByText("Test");
        expect(element.tagName).toBe("H1");
    });

    it("should support level by component name", () => {
        render(<H1 level={1}>Test</H1>);

        const element = screen.getByText("Test");
        expect(element.tagName).toBe("H1");
    });
});
