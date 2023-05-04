import { getHistoryList } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { HistoryContainer, SectionTitle, Text } from "./AverageRatingSection.styled";
import { ProgressBar } from "../ProgressBar/ProgressBar";

export const AverageRatingSection = () => {
    const historyList = useSelector(getHistoryList);

    return (
        <HistoryContainer>
            <SectionTitle>Середня успішность</SectionTitle>
            {historyList.length > 0
                ? <ProgressBar historyArr={historyList} />
                : <Text>Пройдіть перевірку, щоб побачити результат.</Text>
            }
        </HistoryContainer>
    )
}