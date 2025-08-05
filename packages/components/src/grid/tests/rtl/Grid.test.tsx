import { render, screen } from "@vicky-ui/test-utils";
import { createRef } from "react";
import { Grid, GridContext } from "../../src";

describe("<Grid />", () => {
    it("renders with default props", () => {
        render(<Grid>Default Grid</Grid>);

        const textElement = screen.getByText("Default Grid");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("DIV"); // default elementType
        expect(textElement).toHaveClass("vui-grid");
    });

    it("should support DOM props", () => {
        render(<Grid data-foo="bar">Test</Grid>);

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("data-foo", "bar");
    });

    it("should support slots", () => {
        render(
            <GridContext.Provider value={{ slots: { test: { "aria-label": "test" } } }}>
                <Grid slot="test">Test</Grid>
            </GridContext.Provider>
        );

        const element = screen.getByText("Test");
        expect(element).toHaveAttribute("slot", "test");
        expect(element).toHaveAttribute("aria-label", "test");
    });

    it("should support refs", () => {
        const ref = createRef<HTMLDivElement>();
        render(<Grid ref={ref}>Test</Grid>);

        expect(ref.current).not.toBeNull();
        expect(ref.current instanceof HTMLDivElement).toBeTruthy();
    });

    it("forwards custom className prop", () => {
        render(<Grid className="custom-class">Custom Class Grid</Grid>);

        const textElement = screen.getByText("Custom Class Grid");
        expect(textElement).toHaveClass("custom-class");
    });

    it("applies custom inline styles", () => {
        render(<Grid style={{ color: "red" }}>Styled Grid</Grid>);

        const textElement = screen.getByText("Styled Grid");
        expect(textElement).toHaveStyle({ color: "rgb(255, 0, 0)" });
    });
});
