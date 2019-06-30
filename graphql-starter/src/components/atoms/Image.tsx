import React from "react";
import styled from "styled-components";

export default (
    {
        alt,
        crossOrigin,
        height,
        onLoad,
        sizes,
        src,
        srcSet,
        style,
        width,
        ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>
) => (
    <Host
        style={{
            // tslint:disable-next-line:prefer-template
            backgroundImage: (src ? `url(${src}),` : "")
                           + "linear-gradient(45deg, #fcfcfc 25%, transparent 25%, transparent 75%, #fcfcfc 75%, #fcfcfc),"
                           + "linear-gradient(45deg, #fcfcfc 25%, transparent 25%, transparent 75%, #fcfcfc 75%, #fcfcfc)",
            // tslint:disable-next-line:prefer-template
            backgroundPosition: (src ? "center," : "")
                              + "0 0,"
                              + "6.25px 6.25px",
            // tslint:disable-next-line:prefer-template
            backgroundRepeat: (src ? "no-repeat," : "")
                            + "repeat,"
                            + "repeat",
            // tslint:disable-next-line:prefer-template
            backgroundSize: (src ? "contain," : "")
                          + "12.5px 12.5px,"
                          + "12.5px 12.5px",
            height: height !== undefined ? `${height}px`
                  :                        undefined,
            width: width !== undefined ? `${width}px`
                 :                       undefined,
            ...style
        }}
    >
        <img
            alt={alt}
            crossOrigin={crossOrigin}
            height={height}
            onLoad={onLoad}
            sizes={sizes}
            src={src}
            srcSet={srcSet}
            width={width}
            {...props}
            unselectable={undefined}
        />
    </Host>
);

const Host = styled.span`
    display         : inline-block;
    width           : 100%;
    height          : 100%;
    background-clip : padding-box;
    background-color: #eee;
    font-size       : 1.5rem;
    > img {
        width         : 100%;
        height        : 100%;
        vertical-align: bottom;
        opacity       : 0;
        object-fit    : cover;
    }
`;
