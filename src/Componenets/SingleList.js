import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./CourseListPage.css";

function SingleList(props) {
  return (
    <div className="course">
      <ul>
        <li key={props.id}>
          <div>
            <Link to={`/details/${props.id}`}>
              <img src={props.image} className="image"></img>
            </Link>
          </div>
          <div className="name">{props.name}</div>
          <div>{props.instructor}</div>
        </li>
      </ul>
    </div>
  );
}
export default SingleList;
