import { REPLACE_BOX, REPLACE_FRUIT } from '../actions';

export default function (state, action) {
    switch (action.type) {
        case REPLACE_BOX:
            const box = state.cupboard.get(action.from);
            return { cupboard: state.cupboard.set(action.from, null).set(action.to, box) };
        case REPLACE_FRUIT:
            const fruit = state.cupboard.get(action.fromBox).get('items').get(action.from);
            return {
                cupboard: state.cupboard
                    .update(
                        action.fromBox, box => box.update(
                            'items', items => items.delete(action.from)
                        )
                    ).update(
                        action.toBox, box => box.update(
                            'items', items => items.insert(action.to, fruit)
                        )
                    )
            };

        default: return state;
    }
}