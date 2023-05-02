import { getWordsList } from "../../redux/selectors";
import { useSelector } from "react-redux";

import { ListContainer, SectionTitle } from "./WordsSection.styled";
import { WordsList } from "../WordsList/WordsList";

export const WordsSection = () => {
    const wordsList = useSelector(getWordsList);

    return (
        <ListContainer>
            <SectionTitle>Список вивчених слів</SectionTitle>
            <WordsList wordsArr={wordsList} />
        </ListContainer>
    )
}