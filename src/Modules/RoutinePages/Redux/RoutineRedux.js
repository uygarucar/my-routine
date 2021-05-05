
/* ------------- Initial State ------------- */

const INITIAL_STATE = {
    addMode: true,
};


/* ------------- Selectors ------------- */

export const useAddEditSelectors = state => state.addEdit.addMode;

/* -------------  Action Types ------------- */

const CHANGE_ADDMODE = 'addMode/change_addMode';

/* -------------  Action Creators ------------- */
export const changeMode = (addMode) => {
    
    return {
        type:CHANGE_ADDMODE,
        payload:{
            addMode,
        }
    };
};

/* ------------- Reducers ------------- */

export const AddEditReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_ADDMODE:
            let newMode = action.payload.addMode
            return {
                addMode:newMode,
            };
        default:
            return state;
    }
};
