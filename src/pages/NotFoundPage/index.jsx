import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <h1>Not Found Page</h1>
      <button onClick={onNavigate}>Go to home page</button>
    </>
  );
};