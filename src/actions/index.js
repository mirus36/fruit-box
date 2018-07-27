
export const REPLACE_BOX = "REPLACE_BOX";
export function createReplaceBox(from, to) {
    return {
        type: REPLACE_BOX,
        from,
        to
    }
}