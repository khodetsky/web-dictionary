import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch } from "react-redux";

import { MainSection, SectionTitle, SignInFormStyled, InputContainer, InputStyled, LabelStyled, ErrorMessage, SignInBtn } from "./AddWordPage.styled";
import { addWord } from "../../redux/wordsListSlice";

export const AddWordPage = () => {
    const dispatch = useDispatch();

    const initialValues = {
        word: '',
        translation: '',
    }

    const initNotifixParams = {
        position: 'center-top',
        distance: '70px',
        timeout: 3000,
        fontSize: '15px',
        width: '350px',
        pauseOnHover: true,
    };

    function validateFeild(value) {
        let error;
       if (!value) {
         error = 'Обов\'язкове поле*';
       }
        return error;
    };

    function onFormSubmit({ word, translation }, { resetForm, validate }) {
        dispatch(addWord({ word, translation }));

        Notify.success('Слово успішно додано до словника', initNotifixParams);
        resetForm();
    }

    return (
        <MainSection>
            <SectionTitle>Додайте слово до словника</SectionTitle>

            <Formik
                initialValues={initialValues}
                onSubmit={onFormSubmit}
                validateOnBlur={false}
                validateOnChange={false}
            >
                      {({ errors, touched }) => (
                          <>
                              <SignInFormStyled>
                                  <InputContainer>
                                      <InputStyled
                                        id="word"
                                        type="text"
                                        name="word"
                                        autoComplete="off"
                                        placeholder=" "
                                        validate={validateFeild}
                                      />
                                      <LabelStyled htmlFor="word">Слово англійською</LabelStyled>
                                      {errors.word && touched.word && <ErrorMessage>{errors.word}</ErrorMessage>}
                                  </InputContainer>

                                  <InputContainer>
                                      <InputStyled
                                        id="translation"
                                        type="text"
                                        name="translation"
                                        autoComplete="off"
                                        placeholder=" "
                                        validate={validateFeild}
                                      />
                                      <LabelStyled htmlFor="translation">Переклад українською</LabelStyled>
                                      {errors.translation && touched.translation && <ErrorMessage>{errors.translation}</ErrorMessage>}
                                  </InputContainer>
                      
                                  <SignInBtn type="submit">Додати слово</SignInBtn>
                              </SignInFormStyled>
                          </>
                      )}
                  </Formik>
        </MainSection>
    )
}