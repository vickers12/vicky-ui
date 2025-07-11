import type { ComponentProps } from "react";
import styles from "./List.module.css";

export interface Style {
    name: string;
    value: string;
}
export type TokenType = "core" | "background" | "border" | "text";

export interface ListProps {
    listStyles: Style[];
    tokenType: TokenType;
}

export const List = ({ listStyles, tokenType }: ListProps) => {
    const listItems = listStyles.map((style) => {
        return (
            <li className={styles["list__item"]} key={style.name}>
                <DisplayComponent
                    className={styles["list__color"]}
                    value={style.value}
                    tokenType={tokenType}
                />
                <span className={styles["list__value"]}>{style.value}</span>
                <span className={styles["list__name"]}>{style.name}</span>
            </li>
        );
    });

    return <ul className={styles["list"]}>{listItems}</ul>;
};

interface DisplayComponentProps extends ComponentProps<"div"> {
    value: Style["value"];
    tokenType: TokenType;
}

function DisplayComponent({ value, tokenType, style, ...rest }: DisplayComponentProps) {
    switch (tokenType) {
        case "core":
        case "background":
            return <div style={{ backgroundColor: value, ...style }} {...rest}></div>;
        case "border":
            return (
                <div
                    {...rest}
                    style={{
                        border: `1px solid ${value}`,
                        backgroundColor: value === "#ffffff" ? "black" : undefined,
                        ...style
                    }}
                ></div>
            );
        case "text":
            return (
                <div
                    {...rest}
                    style={{
                        color: value,
                        backgroundColor: value === "#ffffff" ? "black" : undefined,
                        ...style
                    }}
                >
                    Aa
                </div>
            );
    }
}
