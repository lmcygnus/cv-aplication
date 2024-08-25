export default function DisplaySkills({ submittedData, setSubmittedData }) {
    return (
      <div className="cv">
        <h5>Skills</h5>
        {submittedData.map((entry) => (
          <div key={entry.id}>
            <ul>
              <li>Skill: {entry.skill}</li>
              <p>Level: {entry.level}</p>
            </ul>
          </div>
        ))}
      </div>
    );
  }