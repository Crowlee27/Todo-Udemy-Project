import React from "react";

export interface ITaskFooter {
    onStatusChange?: (
        e: React.ChangeEvent<HTMLSelectElement>,
    ) => void;
    onClick?: (
        e: React.MouseEvent<HTMLButtonElement>
        | React.MouseEvent<HTMLAnchorElement>,
    ) => void;
}