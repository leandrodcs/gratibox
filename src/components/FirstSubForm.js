import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { handleCheckBox } from "../Utils/utils";
import { AiOutlineArrowDown, AiOutlineCheck } from "react-icons/ai";
import styled from "styled-components";
import { sendAlert } from './shared/Alerts';
import { SubButton } from './shared/Styles';

export default function FirstSubForm({plan, setPlan, deliveryDate, setDeliveryDate, products, setProducts, setChangePage}) {
    function firstFormHandler(e) {
        e.preventDefault();
        if (plan !== "Semanal" && plan !== "Mensal") {
            return sendAlert('error', '', 'Você precisa escolher seu plano.')
        }
        if (deliveryDate === "") {
            return sendAlert('error', '', 'Você precisa escolher uma data de entrega.')
        }
        if (!products.length) {
            return sendAlert('error', '', 'Você precisa escolher ao menos um produto.')
        }
        setChangePage(true);
    }

    function changePlanHandler(e) {
        setDeliveryDate("");
        setPlan(e.target.value);
    }


    return (
        <Form onSubmit={firstFormHandler}>
            <FormControl>
                <InputLabel className="label" id="plan-selection">Plano</InputLabel>
                <Select 
                    labelId="plan-selection"
                    IconComponent={AiOutlineArrowDown}
                    value={plan}
                    className="drop-down"
                    label="Plano"
                    onChange={(e) => changePlanHandler(e)}
                >
                    <MenuItem value="Mensal">Mensal</MenuItem>
                    <MenuItem value="Semanal">Semanal</MenuItem>
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel className="label" id="day-selection">{plan !== "" ? "Entrega" : "Escolha um plano..."}</InputLabel>
                <Select 
                    IconComponent={AiOutlineArrowDown}
                    value={deliveryDate}
                    className="drop-down"
                    label={plan !== "" ? "Entrega" : "Escolha um plano..."}
                    onChange={(e) => setDeliveryDate(e.target.value)}
                >
                    {plan === "Mensal" ? 
                        ["1", "10", "20"].map((day, i) => <MenuItem key={i} value={day}>Dia {day}</MenuItem>)
                        :
                        plan === "Semanal" ? 
                        ["Segunda", "Quarta", "Sexta"].map((day, i) => <MenuItem  key={i} value={day}>{day}-feira</MenuItem>)
                        :
                        ""
                    }
                </Select>
            </FormControl>
            <Checks>
                <p>Quero receber</p>
                <Items>
                    <Item>
                        <Check onClick={(e) => handleCheckBox(e, 1, products, setProducts)}>
                            {products.includes(1)?<AiOutlineCheck />: ""}
                        </Check>
                        <p>Chás</p>
                    </Item>
                    <Item>
                        <Check onClick={(e) => handleCheckBox(e, 2, products, setProducts)}>
                            {products.includes(2)?<AiOutlineCheck />: ""}
                        </Check>
                        <p>Incensos</p>
                    </Item>
                    <Item>
                        <Check onClick={(e) => handleCheckBox(e, 3, products, setProducts)}>
                            {products.includes(3)?<AiOutlineCheck />: ""}
                        </Check>
                        <p>Produtos Orgânicos</p>
                    </Item>
                </Items>
            </Checks>
            <SubButton type="submit">Próximo</SubButton>
        </Form>
    );
}

const Items = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-weight: 400;
    column-gap: 60px;
    row-gap: 20px;
    margin-bottom: 10px;
`;

const Item = styled.div`
    display: flex;
    gap: 6px;
`;

const Check = styled.button`
    width: 20px;
    height: 20px;
    background: #FFFFFF;
    border: none;
    display: flex;
    svg {
        color: #4D65A8;
        width: 100%;
        height: 100%;
    }
`;

const Checks = styled.div`
    background: rgba(224, 209, 237, 0.62);
    width: 100%;
    height: 100%;
    border-radius: 5px;
    font-size: 18px;
    line-height: 21px;
    padding: 2px 12px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Form = styled.form`
    color: #4D65A8;
    display: flex;
    flex-direction: column;
    gap: 7px;
    position: relative;
    margin-bottom: 12px;
    .drop-down {
        width: 100%;
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
`;