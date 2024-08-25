export default function DisplayEducation({ submittedData, setSubmittedData }) {
    return (
      <div className="cv">
        <h5>Education</h5>
        {submittedData.map((entry) => (
          <div key={entry.id}>
            <ul className="education">
              <li>School Name: {entry.schoolName}</li>
              <p>Title: {entry.title}</p>
              <p> Date of Study {entry.date}</p>
            </ul>
          </div>
        ))}
      </div>
    );
  }
  