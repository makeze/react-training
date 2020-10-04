console.clear();

// Actions (forms)

const createPolicy = (name, depositAmount) => {
    return {
        type: 'CREATE_POLICY',
        payload: {
            name, depositAmount
        }
    }
}

const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name
        }
    }
}

const createClaim = (name, withdrawAmount) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name, withdrawAmount
        }
    }
}

// Reducers (Departments)

const claimsHistory = (oldListOfClaims = [], action) => {
    if(action.type === 'CREATE_CLAIM') {
        return [...oldListOfClaims, action.payload]
    }
    return oldListOfClaims;
}

const accounting = (bagOfMoney = 100, action) => {
    if(action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.withdrawAmount
    } else if (action.type === 'CREATE_POLICY'){
        return bagOfMoney + action.payload.depositAmount
    }
    return bagOfMoney;
}

const policies = (listOfPolicies = [], action) => {
    if(action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    } else if(action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter((policy) => {
            policy.name !== action.payload.name
        })
    }
    return listOfPolicies;
}

const {createStore, combineReducers} = Redux;

const ourDepartments = combineReducers({
    accounting: accounting,
    claimsHistory: claimsHistory,
    policies: policies
});

const store = createStore(ourDepartments);

const action = createPolicy('Alex', 20);

store.dispatch(action);
console.log(store.getState());