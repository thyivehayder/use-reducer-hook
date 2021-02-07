import React, { useReducer, useRef } from 'react';
import { patientInitialState, patientReducer } from '../../reducers/patientReducer';

const PatientManagement = () => {
    const [state, dispatch] = useReducer(patientReducer, patientInitialState)
    const nameRef = useRef();
    const handleSubmit = (e) => {
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length
        })
        console.log(nameRef.current.value)
        nameRef.current.value = '';
        e.preventDefault();
    }
    return (
        <div>
            <h3>This is Patient manager: {state.patients.length}</h3>
            <form onSubmit={handleSubmit} action="">
                <input ref={nameRef} type="text" />
            </form>
            {
                state.patients.map((patient) => <li
                    key={patient.id}
                    onClick={()=>dispatch({type:'REMOVE_PATIENT',id:patient.id})}
                    >
                    {patient.name}
                </li>)
            }
        </div>
    );
};

export default PatientManagement;