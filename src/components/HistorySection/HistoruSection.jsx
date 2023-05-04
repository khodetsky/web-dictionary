import { getHistoryList } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { HistoryContainer, SectionTitle, Text } from "./HistorySection.styled";
import { HistoryList } from "../HistoryList/HistoryList";

export const HistorySection = ({handleModalOpen}) => {
    const historyList = useSelector(getHistoryList);

    return (
        <HistoryContainer>
            <SectionTitle>Історія превірок</SectionTitle>
            {historyList.length > 0
                ? <HistoryList handleModalOpen={handleModalOpen} historyArr={historyList} />
                : <Text>Ви поки що не проходили перевірку.</Text>
            }
        </HistoryContainer>
    )
}