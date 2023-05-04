import { ListStyled } from "./HistoryList.styled";
import { HistoryListItem } from "../HistoryListItem/HistoryListItem";

export const HistoryList = ({handleModalOpen, historyArr}) => {

    return (
        <ListStyled>
            {historyArr.map((elem, index) => (
                <HistoryListItem handleModalOpen={handleModalOpen} key={index} historyObj={elem} />
            ))}
        </ListStyled>
    )
}