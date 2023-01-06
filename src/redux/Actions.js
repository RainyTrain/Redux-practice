import { INCREMENT, DECREMENT } from "./Types";

export const incrementLikes = () => {
    return {
        type: INCREMENT
    }
}

export const decrementLikes = () => {
    return {
        type: DECREMENT
    }
}