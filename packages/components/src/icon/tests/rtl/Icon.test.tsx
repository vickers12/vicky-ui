import { render, screen } from "@vicky-ui/test-utils";
import { User } from "lucide-react";
import { createRef } from "react";

import { Icon, IconContext } from "../../src";

describe("<Icon />", () => {
    it("renders with default props", () => {
        render(<Icon icon={User}>Default Icon</Icon>);

        const textElement = screen.getByText("Default Icon");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("SVG"); // default elementType
        expect(textElement).toHaveClass("vui-inline");
    });

    it("should support DOM props", () => {
        render(
            <Icon icon={User} data-foo="bar">
                Test
            </Icon>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <IconContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Icon icon={User} slot="test">
                    Test
                </Icon>
            </IconContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<SVGSVGElement>();
        render(
            <Icon icon={User} ref={ref}>
                Test
            </Icon>
        );

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof SVGSVGElement).toBeTruthy();
    });

    it("forwards custom className prop", () => {
        render(
            <Icon icon={User} className="custom-class">
                Custom Class Icon
            </Icon>
        );

        const textElement = screen.getByText("Custom Class Icon");
        expect(textElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(
            <Icon icon={User} style={{ color: "red" }}>
                Styled Icon
            </Icon>
        );

        const textElement = screen.getByText("Styled Icon");
        expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });
});
