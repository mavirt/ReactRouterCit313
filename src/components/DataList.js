import {Link} from "react-router-dom";

function DataList(){
    const list = [
        {
            name: 'Sarah',
            age: 21,
            color:'purple',
            id: 1
        },
        {
            name: 'Joseph',
            age: 42,
            color:'orange',
            id: 2
        },
        {
            name: 'Kevin',
            age: 35,
            color: 'brown',
            id: 3
        }
    ];

    let listEles = list.map((object,id)=>
        <Link to={`/data/${id}`}>
            <li key={id}>{object}</li>
        </Link>

    )


    return(
        <div>
            {listEles}
        </div>
    )


}

export default DataList();