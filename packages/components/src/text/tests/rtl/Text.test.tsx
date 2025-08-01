import { render, screen } from "@vicky-ui/test-utils";
import { Text, TextContext } from "../../index.ts";
import { createRef } from "react";

import styles from "../../src/Text.module.scss";

describe("<Text />", () => {
    it("renders with default props", () => {
        render(<Text>Default Text</Text>);

        const textElement = screen.getByText("Default Text");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("SPAN"); // default elementType
        expect(textElement).toHaveClass("vui-text");
        expect(textElement).toHaveClass(styles["vui-text"]);
    });

    it("should support DOM props", () => {
        render(<Text data-foo="bar">Test</Text>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <TextContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Text slot="test">Test</Text>
            </TextContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLSpanElement>();
        render(<Text ref={ref}>Test</Text>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLSpanElement).toBeTruthy();
    });

    it("renders with a custom elementType", () => {
        render(<Text elementType="p">Paragraph Text</Text>);

        const textElement = screen.getByText("Paragraph Text");
        expect(textElement.tagName).toBe("P");
    });

    it("applies the correct BEM modifier class for size", () => {
        render(<Text size="xl">XL Text</Text>);

        const textElement = screen.getByText("XL Text");

        const baseClass = "vui-text";
        const modifierClass = "vui-text--xl";
        expect(textElement).toHaveClass(styles[baseClass]);
        expect(textElement).toHaveClass(styles[modifierClass]);
    });

    it("forwards custom className prop", () => {
        render(<Text className="custom-class">Custom Class Text</Text>);

        const textElement = screen.getByText("Custom Class Text");
        expect(textElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(<Text style={{ color: "red" }}>Styled Text</Text>);

        const textElement = screen.getByText("Styled Text");
        expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });
});
