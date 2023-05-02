import { ListItem } from "./WordContainer.styled";

export const WordContainer = ({wordObj}) => {

    return (
        <ListItem>
            <p>{wordObj.word}</p>
            <p style={{marginLeft: 10}}>{wordObj.translation}</p>
        </ListItem>
    )
}