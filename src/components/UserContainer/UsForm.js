import React from 'react';
import {useForm} from "react-hook-form";

const UsForm = () => {

    const {register, handleSubmit} = useForm();

    const save = async (user) =>{

    }
    return (
       <form onSubmit={handleSubmit(save)}>
<input type="text" placeholder={''} {...register()}/>
       </form>

    );
};

export default UsForm;