import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import LoadPage from "../components/LoadPage";
import { sendAlert } from "../components/shared/Alerts";
import { Wrapper } from "../components/shared/Styles";
import SubBanner from "../components/SubBanner";
import SublessBanner from "../components/SublessBanner";
import UserContext from "../contexts/UserContext";
import { getSubscription } from "../services/service";

export default function Home() {
    const [sub, setSub] = useState({});
    const {user} = useContext(UserContext);
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!user.token) return history.push('/');
        getSubscription(user.token)
        .then(res => {
            setIsLoading(false);
            if (res.status === 204) {
                return
            }
            setSub(res.data);
        })
        .catch(err => {
            setIsLoading(false);
            sendAlert('error', '', 'Houve um erro inesperado ao carregar sua inscrição, tente novamente mais tarde.')
        })
    }, [history, user.token]);

    if (isLoading) {
        return (
            <LoadPage />
        );
    }
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