import { useParams } from 'react-router-dom';

function UpdateUser() {
    const id = useParams()
    return(
        <div>UpdateUser {id}</div>
    )
}

export default UpdateUser;