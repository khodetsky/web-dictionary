import { ListItem } from "./HistoryListItem.styled";

export const HistoryListItem = ({handleModalOpen, historyObj}) => {

    return (
        <ListItem onClick={() => handleModalOpen(historyObj)}>
            <p>{historyObj.date.toLocaleString()}</p>
            <p style={{marginLeft: 10}}>{historyObj.result} %</p>
        </ListItem>
    )
}