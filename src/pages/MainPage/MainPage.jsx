

import { MainSection, BottomSection } from "./MainPage.styled";
import { WordsSection } from "../../components/WordsSection/WordsSection";
import { HistorySection } from "../../components/HistorySection/HistoruSection";
import { AverageRatingSection } from "../../components/AverageRatingSection/AverageRatingSection";

export const MainPage = () => {

    return (
        <MainSection>
            <WordsSection />
            <BottomSection>
                <HistorySection />
                <AverageRatingSection />
            </BottomSection>
        </MainSection>
    )
}