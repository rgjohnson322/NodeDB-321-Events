import React from "react";
import Axios from "axios";

export default function DeleteButton(props) {
    const { path, index, updateFunction } = props
    function deleteItem() {
console.log("hello")
        Axios.delete(`/api/${path}/${index}`)
            .then(response => {
                updateFunction(response.data);
            })
    }
    return (
        <div className="delete">
        <button onClick={deleteItem}>Delete</button>
        </div>
    )
}
