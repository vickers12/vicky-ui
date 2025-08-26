/* eslint-disable @typescript-eslint/no-explicit-any */
// build/formatters/token-vars-dynamic.ts
import type { Dictionary } from "style-dictionary";

import { toPascalCase } from "../helpers";

const isIdent = (s: string) => /^[A-Za-z_$][\w$]*$/.test(s);
const prop = (s: string) => (isIdent(s) ? s : `["${s}"]`);
const path = (...ks: string[]) =>
    ks.map(k => (isIdent(k) ? `.${k}` : `[${JSON.stringify(k)}]`)).join("");

const stripRoleAndCategory = (short: string, category?: string, role?: string) => {
    const split = (s?: string) => (s ? s.split(/[-_.\s]+/).filter(Boolean).map(x => x.toLowerCase()) : []);
    const shortParts = short.split(/[-_.\s]+/).filter(Boolean); // preserve original case for output
    const shortLower = shortParts.map(p => p.toLowerCase());

    const seqs: string[][] = [split(category), split(role)].filter(seq => seq.length > 0);

    if (seqs.length === 0) {return short;}

    // remove all occurrences of each sequence
    for (const seq of seqs) {
        if (!seq.length) {continue;}

        for (let i = 0; i <= shortLower.length - seq.length;) {
            let hit = true;
            for (let j = 0; j < seq.length; j++) {
                if (shortLower[i + j] !== seq[j]) { hit = false; break; }
            }
            if (hit) {
                shortLower.splice(i, seq.length);
                shortParts.splice(i, seq.length);
                // don't advance i — there could be back-to-back matches
            } else {
                i++;
            }
        }
    }

    return shortParts.length ? shortParts.join("-") : short;
};

export const tokenVars = ({ dictionary }: { dictionary: Dictionary }) => {
    const byCat: Record<string, any> = {};

    for (const t of dictionary.allTokens) {
        const cat = t.attributes?.category as string ?? "misc";
        const role = t.attributes?.role as string | undefined; // e.g. "surface"|"text"|"border"
        const originalShort =
    (t.original as any)?.short ??
    (t.attributes as any)?.short ??
    t.name;

        const short = stripRoleAndCategory(originalShort, cat, role);

        if (role) {
            byCat[cat] ??= {};
            byCat[cat][role] ??= {};
            byCat[cat][role][short] = `var(--vui-${t.name})`;
        } else {
            byCat[cat] ??= {};
            byCat[cat][short] = `var(--vui-${t.name})`;
        }
    }

    const lines: string[] = [];
    lines.push("/* AUTO-GENERATED. Do not edit. */");
    lines.push(`export const tokens = ${JSON.stringify(byCat, null, 2)} as const;`);

    // ---- Dynamic union types
    for (const cat of Object.keys(byCat)) {
        const val = byCat[cat];
        const first = val && val[Object.keys(val)[0]];
        const nested = typeof first === "object" && first !== null;

        if (nested) {
            const roleTypeNames: string[] = [];
            for (const role of Object.keys(val)) {
                const typeName = `${toPascalCase(cat)}${toPascalCase(role)}Token`;
                const union = Object.keys(val[role]).sort().map(k => `'${k}'`).join(" | ") || "never";
                roleTypeNames.push(typeName);
                lines.push(`export type ${typeName} = ${union};`);
            }
            lines.push(`export type ${toPascalCase(cat)}Token = ${roleTypeNames.join(" | ")};`);
        } else {
            const typeName = `${toPascalCase(cat)}Token`;
            const union = Object.keys(val).sort().map(k => `'${k}'`).join(" | ") || "never";
            lines.push(`export type ${typeName} = ${union};`);
        }
    }

    // ---- cssVar helper (per-category, dynamically emitted)
    lines.push("export const cssVar = {");
    for (const cat of Object.keys(byCat)) {
        const val = byCat[cat];
        const first = val && val[Object.keys(val)[0]];
        const nested = typeof first === "object" && first !== null;

        if (nested) {
            lines.push(`  ${prop(cat)}: {`);
            for (const role of Object.keys(val)) {
                lines.push(
                    `    ${prop(role)}: (t: keyof typeof tokens${path(cat, role)}) => tokens${path(cat, role)}[t],`
                );
            }
            lines.push("  },");
        } else {
            lines.push(
                `  ${prop(cat)}: (t: keyof typeof tokens${path(cat)}) => tokens${path(cat)}[t],`
            );
        }
    }
    lines.push("} as const;");

    return lines.join("\n");
};
