import { useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";

export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        navigate={navigate}
        params={params}
        {...props}
        />
    );
  };
  
  return Wrapper;
};