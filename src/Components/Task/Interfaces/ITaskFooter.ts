import React from "react";

export interface ITaskFooter {
  id: string;
  status?: string;
    onStatusChange?: (e: React.ChangeEvent<HTMLSelectElement>,
        id: string
        
    ) => void;
  onClick?: (
      e: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLAnchorElement>,
      id: string
  ) => void;
}
