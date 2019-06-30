import React, { useState } from "react";
import Image from "src/components/atoms/Image";
import styled from "styled-components";

export interface ImageInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    defaultImageUrl?: string;
    hintText?: string;
    labelText?: string;
    onImageLoad?: (event: React.SyntheticEvent<HTMLImageElement>) => void;
}

export default (
    {
        className,
        defaultImageUrl,
        disabled = false,
        height = "",
        hintText = "",
        labelText,
        name = String(Math.random()),
        onBlur = () => undefined,
        onChange = () => undefined,
        onFocus = () => undefined,
        onSubmit = () => undefined,
        width = "",
        onImageLoad,
        ...props
    }: ImageInputProps
) => {
    const [focused, setFocused] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [invalid, setInvalid] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e);
        if (imageUrl) {
            URL.revokeObjectURL(imageUrl);
        }
        const file = e.target.files![0];
        setImageUrl(file && URL.createObjectURL(file));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        onBlur && onBlur(e);
        setFocused(false);
        setInvalid(!e.target.validity.valid);
    };

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        onFocus && onFocus(e);
        setFocused(true);
    };

    const id = props.id ? props.id : name;

    return (
        <Host
            className={className}
        >
            <StyledLabel
                htmlFor={id}
            >
                {labelText &&
                    <LabelText
                        invalid={invalid}
                        focused={focused}
                        disabled={disabled}
                    >
                        {labelText}
                    </LabelText>
                }
                <StyledImage
                    alt={hintText}
                    height={height}
                    onLoad={onImageLoad}
                    src={imageUrl || defaultImageUrl}
                    width={width}
                />
            </StyledLabel>
            <StyledInput
                accept="image/*"
                disabled={disabled}
                id={id}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                type="file"
                {...props}
                unselectable={undefined}
            />
        </Host>
    );
};

const Host = styled.div`
    margin: 16px 0 8px 0;
    display: flex;
`;

const StyledImage = styled(Image as React.SFC<React.ImgHTMLAttributes<HTMLImageElement>>)`
    border: 1px solid #DDD;
    height: calc(100% - 1.1rem);
`;

const StyledLabel = styled.label`
    flex-grow     : 1;
    flex-direction: column;
    display       : flex;
    height        : inherit;
    width         : inherit;
    cursor        : pointer;
`;

interface LabelTextProps {
    invalid: boolean;
    focused: boolean;
    disabled: boolean;
}

const LabelText = styled("span")`
    :not(:empty) {
        display      : inline-block;
        margin-bottom: 8px;
        font-size    : .75rem;
        transition   : all .3s ease-out;
        color        : ${(props: LabelTextProps) => (
                             props.invalid  ? "#F40"
                           : props.focused  ? "#2196F3"
                           : props.disabled ? "#DDD"
                           :                  "#777"
                        )};
    }
`;

const StyledInput = styled.input`
    display: none;
`;
