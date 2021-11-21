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

    useEffect(() => {
        if (!user.token) return history.push('/');

        getSubscription(user.token)
        .then(res => {
            if (res.status === 204) {
                return
            }
            setSub(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }, [history, user.token]);
    return (
        <Wrapper>
        {sub.entryDate
        ? 
            <SubBanner sub={sub}/>
        : 
            <SublessBanner />
        }
        </Wrapper>
    );
}

const Wrapper = styled.main`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    padding: 0 10px;
    color: #FFFFFF;
    margin: 0 auto;
`;