import $ from '../core';

$.prototype.get = async (url, answerDataType = 'json') => {
    let res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    switch(answerDataType) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};

$.prototype.post = async (url, data, answerDataType = 'text') => {
    let res = await fetch(url, {
        method: 'POST',
        body: data
    });

    switch(answerDataType) {
        case 'json':
            return await res.json();
        case 'text':
            return await res.text();
        case 'blob':
            return await res.blob();
    }
};