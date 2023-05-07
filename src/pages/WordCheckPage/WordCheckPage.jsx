import { useState } from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { MainSection, SectionTitle, ButtonsContainer, Button } from "./WordCheckPage.styled";
import { Test } from "../../components/Test/Test";
import { load } from "../../components/storage";

export const WordCheckPage = () => {
    const [isTestStarted, setIsTestStarted] = useState(false);
    const [newTest, setNewTest] = useState(true);

    const initNotifixParams = {
        position: 'center-top',
        distance: '70px',
        timeout: 3000,
        fontSize: '15px',
        width: '350px',
        pauseOnHover: true,
    };

    function onStartNewTestClick() {
        setIsTestStarted(true);
    }

    function onResumeTest() {
        const storageData = load('testedWords');
        if (!storageData) {
            Notify.failure('У вас немає незакінченого тесту', initNotifixParams);
        } else {
            setNewTest(false);
            setIsTestStarted(true);
        }
    }

    return (
        <MainSection>
            {!isTestStarted
                ? <>
                    <SectionTitle>Перевірте знання збережених слів</SectionTitle>
                    <ButtonsContainer>
                        <Button type="button" onClick={onStartNewTestClick}>Розпочати новий тест</Button>
                        <Button type="button" onClick={onResumeTest}>Продовжити останній тест</Button>
                    </ButtonsContainer>
                  </>
                : <Test newTest={newTest} />
            }
        </MainSection>
    )
}