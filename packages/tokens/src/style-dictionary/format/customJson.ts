import { type Dictionary } from 'style-dictionary';

interface TokenGroup {
  [key: string]: string | number | boolean | null | TokenGroup;
}

export const customJson = async ({ dictionary }: { dictionary: Dictionary }) => {

    const grouped: { core: TokenGroup; semantic: TokenGroup } = {
      core: {},
      semantic: {}
    };

    const setNestedValue = (
      group: TokenGroup,
      path: string[],
      value: string | number | boolean | null | TokenGroup
    ) => {
      let ref = group;
      for (let i = 0; i < path.length - 1; i++) {
        ref[path[i]] ??= {};
        ref = ref[path[i]] as TokenGroup;
      }
      ref[path[path.length - 1]] = value;
    };
    dictionary.allTokens.forEach(token => {
      if (token.filePath.includes('/core/')) {
        setNestedValue(grouped.core, token.path, token.value as string | number | boolean | null | TokenGroup);
      } else if (token.filePath.includes('/semantic/')) {
        setNestedValue(grouped.semantic, token.path, token.value as string | number | boolean | null | TokenGroup);
      }
    });

    return JSON.stringify(grouped, null, 2);
};
