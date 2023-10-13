import { useParams } from "react-router-dom";

export const Country = () => {
  const { name } = useParams();

  return (
    <div>
      feel the atmosphere of {name}
    </div>
  );
};