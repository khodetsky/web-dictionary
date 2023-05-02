import { getHistoryList } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { HistoryContainer, SectionTitle } from "./AverageRatingSection.styled";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const AverageRatingSection = () => {
    const historyList = useSelector(getHistoryList);

    return (
        <HistoryContainer>
            <SectionTitle>Середня успішность</SectionTitle>
            <ProgressBar historyArr={historyList} />
        </HistoryContainer>
    )
}