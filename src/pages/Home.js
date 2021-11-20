import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import SubBanner from "../components/SubBanner";
import SublessBanner from "../components/SublessBanner";
import UserContext from "../contexts/UserContext";
import { getSubscription } from "../services/service";

export default function Home() {
    const [sub, setSub] = useState({});
    const {user} = useContext(UserContext);
    const history = useHistory();
    console.log(user);

    useEffect(() => {
        if (!user.token) return history.push('/');

        getSubscription(user.token)
        .then(res => {
            if (res.status === 204) {
                console.log("vazio")
                return
            }
            setSub(res.data);
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, [history, user.token]);
    return (
        <Wrapper>
        {false
        ? 
            <SubBanner />
        : 
            <SublessBanner />
        }
        </Wrapper>
    );
}

const Wrapper = styled.main`
    /* display: flex;
    flex-direction: column;
    align-items: center; */
    padding: 0 10px;
    color: #FFFFFF;
`;