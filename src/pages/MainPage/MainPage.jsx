import { useState } from "react";

import { MainSection, BottomSection } from "./MainPage.styled";
import { WordsSection } from "../../components/WordsSection/WordsSection";
import { HistorySection } from "../../components/HistorySection/HistoruSection";
import { AverageRatingSection } from "../../components/AverageRatingSection/AverageRatingSection";
import { Modal } from "../../components/Modal/Modal";

export const MainPage = () => {
    const [showModal, setShowModal] = useState(false);
    const [historyRecordData, setHistoryRecordData] = useState(null);

    const toggleModal = () => {
        setShowModal(prevState => (!prevState))
    }

    function handleModalOpen(dataObj) {
        setHistoryRecordData(dataObj)
        toggleModal();
    }

    return (
        <>
            <MainSection>
                <WordsSection />
                <BottomSection>
                    <HistorySection handleModalOpen={handleModalOpen} />
                    <AverageRatingSection />
                </BottomSection>
            </MainSection>
            {showModal && (
              <Modal data={historyRecordData} onClose={toggleModal}></Modal>
            )}
        </>
    )
}