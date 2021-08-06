import React from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

const exec = () => {
    let target_elem = document.getElementById('tmmSwatches');
    if (!target_elem) {
        console.log('this is not product page');
        return;
    }
    
    const isbn10 = (() => {
        const product_info = document.getElementById('rich_product_information');
        if (!product_info) { return ''; }
        const span_elems = product_info.querySelectorAll("span");
    
        const isbn10_label_span = Array.from(span_elems).find(v => v.textContent === 'ISBN-10');
        if (!isbn10_label_span) { return ''; }
        const isbn10_text_span = isbn10_label_span.parentElement.parentElement.lastElementChild;
        const isbn10_value = isbn10_text_span.textContent.replaceAll('\n', '');
        return isbn10_value;
    })();
    if (!isbn10) {
        console.log("this product doesn't have ISBN-10");
        return;
    }
    
    const root = document.createElement('div');
    target_elem.appendChild(root);
    ReactDOM.render(<Button isbn10_value={isbn10} />, root);
}

exec();