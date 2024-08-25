export default function DisplayGeneral({ submittedData, setSubmittedData }) {
    return (
      <div className="general">
            <h2 className="name">{submittedData.name}</h2>
            <div className="contact">
              <p className="mail"><img src="../icons/icons8-letter-30.png"></img><p>{submittedData.email}</p></p>
              <p className="phone"><img src="../icons/icons8-phone-30.png"></img><p>{submittedData.phone}</p></p>
          </div>
      </div>
    );
  }
  