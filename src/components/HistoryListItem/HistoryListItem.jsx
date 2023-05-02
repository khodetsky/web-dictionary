import { ListItem } from "./HistoryListItem.styled";

export const HistoryListItem = ({historyObj}) => {

    return (
        <ListItem>
            <p>{historyObj.date.toLocaleString()}</p>
            <p style={{marginLeft: 10}}>{historyObj.result} %</p>
        </ListItem>
    )
}