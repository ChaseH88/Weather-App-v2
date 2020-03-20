import React, { FC } from "react";
import "../../styles/loading.scss";

const Loading: FC = (): JSX.Element => (
    <div id="loader">
        <div className="icon" id="icon"></div>
    </div>
);

export default Loading;