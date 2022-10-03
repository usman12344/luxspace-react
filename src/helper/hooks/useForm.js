import {useState} from 'react';

export default function useForm(initialState) {
    const [first, setfirst] = useState(initialState);

    function fnUpdateState(event) {
        setfirst((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }));
    }
    return {first, fnUpdateState}
}
