import React from 'react';
import { readMoreCon } from "./ContentFile";
import ReadMoreAndLess from './ReadMoreAndLess';

function ReadMoreParent() {
    // console.log(readMoreCon)
    return (
        <div>
            {readMoreCon.map(({ id, content }) => {
                return <ReadMoreAndLess key={id} content={content} />
            })}
        </div>
    )
}

export default ReadMoreParent
