import { useParams } from "react-router-dom";
import { getModule } from "../api";

export default function Session() {
  const { diplomaId, moduleId } = useParams();

  const { name, desc, lecturer } = getModule({ diplomaId, moduleId });

  return (
    <>
      <h2>Module</h2>
      <h3>{name}</h3>
      <p>{desc}</p>

      <h4>{lecturer.name}</h4>
      <span>
        {lecturer.title}
      </span>
    </>
  );
}