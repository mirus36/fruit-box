import { REPLACE_BOX } from '../actions'

export default function (state, action) {
    switch (action.type) {
        case REPLACE_BOX:
            console.log(action.from, action.to)
            const box = state.cupboard.get(action.from);
            const newState = { cupboard: state.cupboard.set(action.from, null).set(action.to, box) };
            console.log(newState.cupboard.toJS());
            return newState;
        default: return state;
    }
}