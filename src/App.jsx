import GeneralInfo from '../components/GeneralInfo';
import EducationalExperience from '../components/Education';
import PracticalExperience from '../components/Jobs';
import Skills from '../components/Skills'
import DisplayExperience from '../components/DisplayJobs';
import DisplaySkills from '../components/DisplaySkills';
import DisplayEducation from '../components/DisplayEducation';
import DisplayGeneral from '../components/DisplayGeneral';
import PdfButton from '../components/PdfButton';
import './App.css'
import '../styles/toggle.css'
import'../styles/trash.css'
import '../styles/cv.css'
import '../styles/edit.css'
import { useState } from 'react';

function App() {
  const [generalInfoData, setGeneralInfoData] = useState([]); 
  const [educationData, setEducationData] = useState([]); 
  const [practicalExperienceData, setPracticalExperienceData] = useState([]); 
  const [skillsData, setSkillsData] = useState([]);
  return (
    <>
      <h1>CV Aplication</h1>
      <PdfButton></PdfButton>
      <div className='body'>
        <div className="forms">
          <GeneralInfo submittedData={generalInfoData} setSubmittedData={setGeneralInfoData}/>
          <EducationalExperience submittedData={educationData} setSubmittedData={setEducationData}/>
          <PracticalExperience submittedData={practicalExperienceData} setSubmittedData={setPracticalExperienceData} />
          <Skills submittedData={skillsData} setSubmittedData={setSkillsData} />
        </div>
        <div className="cvs">
          <DisplayGeneral submittedData={generalInfoData} setSubmittedData={setGeneralInfoData} />
          <DisplayEducation submittedData={educationData} setSubmittedData={setEducationData} />
          <DisplayExperience submittedData={practicalExperienceData} setSubmittedData={setPracticalExperienceData} />
          <DisplaySkills submittedData={skillsData} setSubmittedData={setSkillsData} />
        </div>
      </div>
    </>
  )
}

export default App
