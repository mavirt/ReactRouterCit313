import {useParams} from "react-router-dom";

function Block(){
    const params = useParams();

    let blockStyle ={
        backgroundColor: params.id,
        height: "1200px",
        width: "100%",

    }

    return(
        <div style = {blockStyle}> </div>
    )

}


export default Block;