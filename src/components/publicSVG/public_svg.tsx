import React from "react";
import "./public_svg.css";

type Props = {
    svg_tag: string;
    classStyle: string;
};

const Public_svg = ({ svg_tag, classStyle }: Props) => {
    return (
        <div>
            <span
                className={classStyle ? classStyle : ""}
                dangerouslySetInnerHTML={{ __html: svg_tag }}
            ></span>
        </div>
    );
};

export default Public_svg;
