import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="section-border border-b pb-4">
      <h1 className="my-20 text-center text-4xl">
        Experience
      </h1>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="muted-text mb-2 text-sm">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4 ">
              <h6 className="mb-2 font-semibold">
                {experience.role}-{" "}
                <span className="accent-text text-sm">
                  {experience.company}
                </span>
              </h6>
              <p className="muted-text mb-4">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="tech-chip mr-2 mt-4 rounded px-2 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
