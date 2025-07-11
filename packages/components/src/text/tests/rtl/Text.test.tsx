import { render, screen } from "@vicky-ui/test-utils";
import { Text } from "../../index.ts";
import styles from "../../src/Text.module.css";

describe("<Text />", () => {
    it("renders with default props", () => {
        render(<Text>Default Text</Text>);

        const textElement = screen.getByText("Default Text");
        expect(textElement).toBeInTheDocument();
        expect(textElement.tagName).toBe("SPAN"); // default elementType
        expect(textElement).toHaveClass("hop-Text");
        expect(textElement.className).toContain(styles.text); // base BEM class
    });

    it("renders with a custom elementType", () => {
        render(<Text elementType="p">Paragraph Text</Text>);

        const textElement = screen.getByText("Paragraph Text");
        expect(textElement.tagName).toBe("P");
    });

    it("applies the correct BEM modifier class for size", () => {
        render(<Text size="xl">XL Text</Text>);

        const textElement = screen.getByText("XL Text");

        const baseClass = styles.text;
        const modifierClass = styles["text--xl"];
        expect(textElement.className).toContain(baseClass);
        expect(textElement.className).toContain(modifierClass);
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
