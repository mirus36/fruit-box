
export const REPLACE_BOX = "REPLACE_BOX";
export function createReplaceBox(from, to) {
    return {
        type: REPLACE_BOX,
        from,
        to
    }
}

export const REPLACE_FRUIT = "REPLACE_FRUIT";
export function createReplaceFruit(fromBox, toBox, from, to) {
    return {
        type: REPLACE_FRUIT,
        fromBox,
        toBox,
        from,
        to
    }
}