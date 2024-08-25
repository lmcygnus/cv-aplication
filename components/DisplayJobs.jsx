export default function DisplayExperience({ submittedData, setSubmittedData }) {
    return (
      <div className="cv">
        <h5>Practical Experience</h5>
        {submittedData.map((entry) => (
          <div key={entry.id}>
            <ul>
              <li>Company Name: {entry.companyName}</li>
              <p>Position: {entry.position}</p>
              <p>Main Responsibilities: {entry.responsibilities}</p>
              <p>Date: {entry.date}</p>
            </ul>
          </div>
        ))}
      </div>
    );
  }
  