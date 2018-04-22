//action types
const OPEN = "OPEN";

//reducer
export default function(state={"open": false}, action){

    console.log("状态:",state.open);

    switch (action.type) {
        case OPEN:
            let isOpen = state;
            isOpen['open'] = action.open;
            return Object.assign({}, state,isOpen);
        default:
            return Object.assign({}, state,isOpen);
    }

}