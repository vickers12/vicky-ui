type Modifiers = Record<string, boolean>;

// Extract block names
type BlockName<T extends Record<string, string>> = Extract<
    {
        [K in keyof T]: K extends `${infer B}__${string}`
            ? B
            : K extends `${infer B}--${string}`
                ? B
                : K;
    }[keyof T],
    string
>;

// Extract elements for a given block
type ElementsForBlock<T extends Record<string, string>, B extends string> = {
    [K in keyof T]: K extends `${B}__${infer E}` ? E : never;
}[keyof T];

// Extract modifiers for block or element
type ModifiersFor<T extends Record<string, string>, Prefix extends string> = {
    [K in keyof T]: K extends `${Prefix}--${infer M}` ? M : never;
}[keyof T];

export function bemHelper<T extends Record<string, string>>(styles: T) {
    type Block = BlockName<T>;

    return new Proxy(
        {} as Record<
            Block,
            {
                (): string;
                (mods: Partial<Record<ModifiersFor<T, Block>, boolean>>): string;
                <E extends ElementsForBlock<T, Block>>(
                    element: E,
                    mods?: Partial<Record<ModifiersFor<T, `${Block}__${E}`>, boolean>>
                ): string;
            }
        >,
        {
            get(_, block: string) {
                return (elementOrMods?: string | Modifiers, maybeMods?: Modifiers): string => {
                    const isElement = typeof elementOrMods === "string";
                    const element = isElement ? elementOrMods : undefined;
                    const modifiers = isElement ? maybeMods : elementOrMods;

                    const baseKey = element ? `${block}__${element}` : block;
                    const baseClass = styles[baseKey];

                    const modKeys = modifiers
                        ? Object.entries(modifiers)
                            .filter(([, v]) => v)
                            .map(
                                ([mod]) =>
                                    styles[
                                        element
                                            ? `${block}__${element}--${mod}`
                                            : `${block}--${mod}`
                                    ]
                            )
                            .filter(Boolean)
                        : [];

                    return [baseClass, ...modKeys].join(" ");
                };
            }
        }
    );
}
