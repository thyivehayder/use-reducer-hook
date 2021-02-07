export const patientInitialState ={
    patients:[]
}
export const patientReducer=(state,action) =>{
    switch(action.type){
        case 'ADD_PATIENT':
            const newPatients ={
                id: action.id,
                name: action.name
            }
            const allPatients =[...state.patients,newPatients]
            return {patients: allPatients}
        case 'REMOVE_PATIENT':
            const remainingPatients=state.patients.filter(patient =>patient.id!==action.id)
            return {patients: remainingPatients};
        default :
            return state;
    }
}