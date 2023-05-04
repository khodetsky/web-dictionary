import { ListItem, DataContainer, IconContainer, Icon } from "./WordContainer.styled";
import svgSprite from "../../images/sprite.svg";

export const WordContainer = ({wordObj, children}) => {

    return (
        <ListItem>
            <DataContainer>
                <p>{wordObj.word}</p>
                <IconContainer >
                    <Icon href={svgSprite + '#arrow'}></Icon>
                </IconContainer>
                <p style={{ marginLeft: 7 }}>{wordObj.translation}</p>
            </DataContainer>
            {children && children}
        </ListItem>
    )
}