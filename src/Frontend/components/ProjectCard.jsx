import { Route, Link } from 'react-router-dom';

import './ProjectCard.css';

const ProjectCard = ({ match, subRoute }) => {
  return (
    <>
      {match.isExact && (
        <div className="project-card">
          <Link to={`${match.url}/${subRoute.name}`}>
            <div
              class="card-image"
              style={{
                backgroundImage:
                  `url(${subRoute.thumbnail})`,
              }}
            ></div>
            <div className="container">
              <h4>
                <b>{subRoute.title}</b>
              </h4>
              <p>{subRoute.desc}</p>
            </div>
          </Link>
        </div>
      )}
      <Route
        path={`${match.path}/${subRoute.name}`}
        component={subRoute.component}
      />
    </>
  );
};

export default ProjectCard;
