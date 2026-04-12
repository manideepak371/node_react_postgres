import React from "react";
import { useSelector } from "react-redux";

const ViewName = () => {
    const name = useSelector((state) => state?.name)
    return (
        <>{name}</>
    )
}

export default ViewName;