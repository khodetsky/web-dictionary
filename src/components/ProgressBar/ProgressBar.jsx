import { useState, useEffect } from "react";

import { Progressbar, LeftTopPart, LeftBottomPart, RightTopPart, RightBottomPart, Fragment, Text } from "./ProgressBar.styled";

export const ProgressBar = ({ historyArr }) => {
    const [avarageRating, setAvarageRating] = useState(0);

    useEffect(() => {
        if (historyArr && historyArr.length !== 0) {
            const totalRating = historyArr.reduce((sum, historyArr) => {
                return sum += historyArr.result
            }, 0);
            setAvarageRating(+(totalRating / historyArr.length).toFixed(1))
        }
    }, [historyArr]);

    console.log(avarageRating)
    return (
        <Progressbar>
            <LeftTopPart rating={avarageRating}></LeftTopPart>
            <LeftBottomPart rating={avarageRating}></LeftBottomPart>
            <RightTopPart rating={avarageRating}></RightTopPart>
            <RightBottomPart rating={avarageRating}></RightBottomPart>
            <Fragment rating={avarageRating}></Fragment>
            <Text>{avarageRating}%</Text>
        </Progressbar>
    )
}