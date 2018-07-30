import { REPLACE_BOX } from '../actions';

export default function (state, action) {
    switch (action.type) {
        case REPLACE_BOX:
            const box = state.cupboard.get(action.from);
            const newState = { cupboard: state.cupboard.set(action.from, null).set(action.to, box) };
            return newState;
        default: return state;
    }
}