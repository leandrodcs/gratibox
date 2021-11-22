import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import styled from "styled-components";
import { SubButton } from "./shared/Styles";
import { getStates } from "../Utils/utils";
import { AiOutlineArrowDown } from "react-icons/ai";

export default function SecondSubForm({fullName, setFullName, address, setAddress, zipCode, setZipCode, city, setCity, stateId, setStateId, submitHandler}) {
    function secondFormHandler(e) {
        e.preventDefault();
        submitHandler();
    }
    return (
        <Form onSubmit={secondFormHandler}>
            <TextField required value={fullName} onChange={(e) => setFullName(e.target.value)} label="Nome completo"/>
            <TextField required value={address} onChange={(e) => setAddress(e.target.value)} label="Endereço, Ex: Rua Primavera 300"/>
            <TextField required value={zipCode} onChange={(e) => setZipCode(e.target.value)} label="CEP"/>
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
                        {getStates().map((state, i) => <MenuItem key={i} value={i}>{state}</MenuItem>)}
                    </Select>
                </FormControl>
            </LastRow>
            <SubButton type="submit">Finalizar</SubButton>
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