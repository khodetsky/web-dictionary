import { ListStyled } from "./HistoryList.styled";
import { HistoryListItem } from "../HistoryListItem/HistoryListItem";

export const HistoryList = ({historyArr}) => {

    return (
        <ListStyled>
            {historyArr.map((elem, index) => (
                <HistoryListItem key={index} historyObj={elem} />
            ))}
        </ListStyled>
    )
}