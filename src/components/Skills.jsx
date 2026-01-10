const skillStyle = {
  padding: '12px 25px',
  background: 'white',
  borderRadius: '30px',
  border: '1px solid #ffdae0',
  display: 'inline-block',
  margin: '10px'



  
};

export default function Skills() {
  const mySkills = ['HTML', 'CSS', 'JavaScript', 'React','Git & Github'];
  return (
    <section id="skills">
      <h2>Curated Skills</h2>
      <div >
        {mySkills.map(skill => <span key={skill} style={skillStyle} id="skill">{skill}</span>)}
      </div>
    </section>
  );
}