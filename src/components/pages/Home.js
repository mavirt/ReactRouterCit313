import {Link} from "react-router-dom";

function Home(){

    return(
        <div>
            <Link to={"/blocks/red"}>
                <div style = {{height: "100px", width: "100px", background: "red", marginTop:"20px"}}> </div>
            </Link>

            <Link to={"/blocks/blue"}>
                <div style = {{height: "100px", width: "100px", background: "blue", marginTop:"20px"}}> </div>
            </Link>

            <Link to={"/blocks/green"}>
                <div style = {{height: "100px", width: "100px", background: "green", marginTop:"20px"}}> </div>
            </Link>
        </div>

)

}

export default Home;