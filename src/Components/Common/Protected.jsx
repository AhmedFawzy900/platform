import React , { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Protected = (props) => {
    let Cmp = props.Cmp ;
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("state") !== "authenticated") {
            navigate("/login");
        }
        }, []);
return (
    <div>
        <Cmp/>
    </div>
)
}

export default Protected