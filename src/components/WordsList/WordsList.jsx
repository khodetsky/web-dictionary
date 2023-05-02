import { ListStyled } from "./WordsList.styled";
import { WordContainer } from "../WordContainer/WordContainer";

export const WordsList = ({wordsArr}) => {

    return (
        <ListStyled>
            {wordsArr.map((word, index) => (
                <WordContainer key={index} wordObj={word} />
            ))}
        </ListStyled>
    )
}