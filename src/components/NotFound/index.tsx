import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div>NotFound <p onClick={()=> navigate('/')}>go home</p></div>
  )
}

export default NotFound