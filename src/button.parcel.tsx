import * as React from 'react';
import singleSpaReact from 'single-spa-react';
import ReactDOMClient from 'react-dom/client';

type ButtonParcelProps = {
    onClick?: () => void;
}
const ButtonParcel: React.FC<ButtonParcelProps> = (props) => {
    const {onClick} = props;
    return <button onClick={onClick}>Parcel Button</button>
}

export const {bootstrap, mount, unmount} = singleSpaReact({
    React,
    ReactDOMClient,
    rootComponent: ButtonParcel,
})
