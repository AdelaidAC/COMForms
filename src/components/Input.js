import { useState, useRef, useEffect } from 'react';

const Input = (props) => {
    const [content, setContent] = useState('');
    const [width, setWidth] = useState(0);
    const span = useRef();

    useEffect(() => {
        setWidth(span.current.offsetWidth);
    }, [content]);

    const changeHandler = evt => {
        setContent(evt.target.value);
    };

    return (
        <wrapper is="custom">
            <span id="hide" ref={span}>{content}</span>
            <input 
                type="text"
                className={props.className}
                style={{ width: props.width, backgroundColor: props.bColor}} 
                name={props.name} 
                autoFocus onChange={changeHandler} 
                placeholder={props.placeholder}
                value = {props.value}
                maxlength = {props.maxlength}
                disabled = {props.disabled}
                />
        </wrapper>
    );
};

Input.defaultProps = {
    width: "40px", // Propiedad interna
};

export default Input