const skillStyle = {
  padding: '12px 25px',
  background: 'white',
  borderRadius: '30px',
  border: '1px solid #ffdae0',
  display: 'inline-block',
  margin: '10px'



  
};

export default function Skills() {
  const mySkills = ['HTML', 'CSS', 'JavaScript', 'React','NodeJs','Git & Github', 'NextJs','Tailwind','TypeScript'];
  return (
    <section id="skills">
      <h2>Curated Skills</h2>
      <br/>
      <div >
        {mySkills.map(skill => <span key={skill} style={skillStyle} id="skill">{skill}</span>)}
      </div>
    </section>
  );
}
