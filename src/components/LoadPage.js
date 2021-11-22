import styled from "styled-components";
import Loader from "react-loader-spinner";

export default function LoadPage() {
    return (
        <Wrapper>
            <Loader type="TailSpin" color="#FFFFFF" width="200px" height="200px"/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;