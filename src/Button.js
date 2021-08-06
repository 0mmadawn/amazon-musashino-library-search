import React from 'react';

const Button = (props) => {
    const url = `https://www.library.musashino.tokyo.jp/detailresult?target1=1&isbn=${props.isbn10_value}`;
    
    const handleClick = (e) => {
        e.preventDefault();
        window.open(url, "_blank", "noreferrer");
    }
    return (
        <div style={{marginTop: '1rem'}}>
            <button onClick={(handleClick)}>武蔵野市図書館で蔵書検索</button>
        </div>
    );
}
export default Button;
