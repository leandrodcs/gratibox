import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from "styled-components";
import { SubButton } from "./shared/Styles";
import { getStates } from "../Utils/utils";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useState } from "react";
import Loader from "react-loader-spinner";

export default function SecondSubForm({fullName, setFullName, address, setAddress, zipCode, setZipCode, city, setCity, stateId, setStateId, submitHandler}) {
    const [isLoading, setIsLoading] = useState(false);
    function secondFormHandler(e) {
        setIsLoading(true);
        e.preventDefault();
        submitHandler(setIsLoading)
    }

    function zipCodeHandler(e) {
        if(e.target.value.length === 5) {
            if (!zipCode.includes('-')) {
                return setZipCode(e.target.value + '-');
            }
            else {
                return setZipCode(e.target.value.replace('-',''));
            }
        } 
        if(e.target.value.length>9) return;
        setZipCode(e.target.value);
    }
    return (
        <Form onSubmit={secondFormHandler} isLoading={isLoading} >
            <TextField inputProps={{ maxLength: 35 }} required value={fullName} onChange={(e) => setFullName(e.target.value)} label="Nome completo"/>
            <TextField inputProps={{ maxLength: 35 }} required value={address} onChange={(e) => setAddress(e.target.value)} label="Endereço, Ex: Rua Primavera 300"/>
            <TextField required value={zipCode} onChange={zipCodeHandler} label="CEP, Ex: XXXXX-XXX"/>
            <LastRow>
                <TextField required className="city" value={city} onChange={(e) => setCity(e.target.value)} label="Cidade"/>
                <FormControl required className="state">
                    <InputLabel className="label" id="state-selection">Estado</InputLabel>
                    <Select 
                        labelId="state-selection"
                        IconComponent={AiOutlineArrowDown}
                        value={stateId}
                        className="drop-down"
                        label="Estado"
                        onChange={(e) => setStateId(e.target.value)}
                        autoWidth={true}
                    >
                        {getStates().map((state, i) => <MenuItem key={i + 1} value={i + 1}>{state}</MenuItem>)}
                    </Select>
                </FormControl>
            </LastRow>
            <SubButton type="submit">{isLoading ? <Loader type="ThreeDots" color="#FFFFFF" height={13} /> : `Finalizar`}</SubButton>
        </Form>
    );
}

const LastRow = styled.div`
    width: 100%;
    display: flex;
    gap: 7px;
    .state {
        width: 40%;
    }
    .city {
        width: 60%;
    }
`;

const Form = styled.form`
    pointer-events: ${({isLoading}) => isLoading?'none':'initial'};
    width: 100%;
    color: #4D65A8;
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    margin-bottom: 12px;
    .drop-down {
        width: auto;
        height: 50px;
        color: #4D65A8;
        background: rgba(224, 209, 237, 0.62);
        font-weight: 700;
        font-size: 18px;
        svg {
            color: #4D65A8;
        }
    }
    .label {
        color: #4D65A8;
        font-weight: 700;
        font-size: 18px;
    }
    input {
        width: 100%;
        height: 50px;
        border: none;
        outline: none;
        background: rgba(224, 209, 237, 0.62);
        border-radius: 5px;
        padding: 0 12px;
        font-size: 18px;
        line-height: 21px;
        color: #4D65A8;
    }
`;