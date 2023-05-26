import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { updateUserAction } from "../Config/actions";

function UpdateUser() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const user = useSelector(data=>data.users.find((u)=>u.id===parseInt(id)));
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const navigate = useNavigate();
    const handleClick = () => {
        dispatch(updateUserAction({
            id: id,
            name: name,
            email: email
        }))
        navigate('/');
    }

    return(
        <div>
            <form>
                <label>Name </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
                <label>Email </label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <button onClick={handleClick}>Register</button>
            </form>
        </div>
    )
}

export default UpdateUser;