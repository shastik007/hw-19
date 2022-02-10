import React from "react";

 export const modalContext = React.createContext({
    onClose: () => {},
    onShow: () => {},
})