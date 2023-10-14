import * as React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';

const ModalParcel = () => {
    return (
        <div style={{position: 'absolute'}}>I'm a modal</div>
    )
}

export const {bootstrap, mount, unmount} = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: ModalParcel
})
