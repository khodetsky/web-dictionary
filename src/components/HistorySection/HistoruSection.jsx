import { getHistoryList } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { HistoryContainer, SectionTitle } from "./HistorySection.styled";
import { HistoryList } from "../HistoryList/HistoryList";

export const HistorySection = () => {
    const historyList = useSelector(getHistoryList);

    return (
        <HistoryContainer>
            <SectionTitle>Історія превірок</SectionTitle>
            <HistoryList historyArr={historyList} />
        </HistoryContainer>
    )
}