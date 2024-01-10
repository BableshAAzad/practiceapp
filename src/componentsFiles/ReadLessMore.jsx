import React, { useState } from 'react'

function ReadLessMore() {
    let [demo, setdemo] = useState(false);
    let [demo1, setdemo1] = useState(false);
    let [demo2, setdemo2] = useState(false);
    let [demo3, setdemo3] = useState(false);
    let [demo4, setdemo4] = useState(false);
    let expand = (e) => {
        setdemo(e);
    }
    let expand1 = (e) => {
        setdemo1(e);
    }
    let expand2 = (e) => {
        setdemo2(e);
    }
    let expand3 = (e) => {
        setdemo3(e);
    }
    let expand4 = (e) => {
        setdemo4(e);
    }
    return (
        <div id="mainDivP">
            <div id='paraDiv'>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quam distinctio voluptates repudiandae eaque.</p>
                {demo && <p> AAzadNon sunt iste at dolorum minus cupiditate aliquam repellendus reiciendis, natus fugit! Incidunt ratione neque cupiditate, ea impedit vero sed ad.</p>}
                {demo && <input type="submit" value="ReadLess" onClick={() => { expand(false) }} />}
                {demo || <input type='submit' value="ReadMore" onClick={() => { expand(true) }} />}


                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quam distinctio voluptates repudiandae eaque.</p>
                {demo1 && <p> AAzadNon sunt iste at dolorum minus cupiditate aliquam repellendus reiciendis, natus fugit! Incidunt ratione neque cupiditate, ea impedit vero sed ad.</p>}
                {demo1 && <input type="submit" value="ReadLess" onClick={() => { expand1(false) }} />}
                {demo1 || <input type='submit' value="ReadMore" onClick={() => { expand1(true) }} />}


                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quam distinctio voluptates repudiandae eaque.</p>
                {demo2 && <p> AAzadNon sunt iste at dolorum minus cupiditate aliquam repellendus reiciendis, natus fugit! Incidunt ratione neque cupiditate, ea impedit vero sed ad.</p>}
                {demo2 && <input type="submit" value="ReadLess" onClick={() => { expand2(false) }} />}
                {demo2 || <input type='submit' value="ReadMore" onClick={() => { expand2(true) }} />}


                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quam distinctio voluptates repudiandae eaque.</p>
                {demo3 && <p> AAzadNon sunt iste at dolorum minus cupiditate aliquam repellendus reiciendis, natus fugit! Incidunt ratione neque cupiditate, ea impedit vero sed ad.</p>}
                {demo3 && <input type="submit" value="ReadLess" onClick={() => { expand3(false) }} />}
                {demo3 || <input type='submit' value="ReadMore" onClick={() => { expand3(true) }} />}

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo quam distinctio voluptates repudiandae eaque.</p>
                {demo4 && <p> AAzadNon sunt iste at dolorum minus cupiditate aliquam repellendus reiciendis, natus fugit! Incidunt ratione neque cupiditate, ea impedit vero sed ad.</p>}
                {demo4 && <input type="submit" value="ReadLess" onClick={() => { expand4(false) }} />}
                {demo4 || <input type='submit' value="ReadMore" onClick={() => { expand4(true) }} />}
            </div>
        </div>
    )
}

export default ReadLessMore
