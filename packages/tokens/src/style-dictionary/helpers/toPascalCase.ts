export const toPascalCase = (str: string): string => {
    return str
        .split(/[-_]/g)
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
};
