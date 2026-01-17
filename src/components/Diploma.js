import { useParams, NavLink, Outlet } from "react-router-dom";
import { getDiploma } from "../api";

export default function Diploma() {
  const { diplomaId } = useParams();
  const diploma = getDiploma(diplomaId);

  if (!diploma) {
    return <p>Diploma not found</p>;
  }

  return (
    <>
      <h1>{diploma.name} Diploma</h1>
      
      <ul className="session-list">
        {diploma.modules.map( module => (
          <li className="session" key={module.id}>
            <NavLink 
              className={({ isActive }) => isActive ? "session-active" : null}
              to={module.id}>
              <p className="session-name">{module.code} | {module.name}</p>
            </NavLink>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}