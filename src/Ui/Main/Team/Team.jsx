import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      name: "Aziz Karimov",
      position: "Bosh Mexanik",
      image: "team1.jpg",
      experience: "12 yillik tajriba",
      specialization: "Dvigatel tizimi bo'yicha mutaxassis",
      certifications: ["Oliy toifali mutaxassis", "BMW bo'yicha mutaxassis"]
    },
    {
      name: "Jamshid Rahimov",
      position: "Kuzov Ustasi",
      image: "team2.jpg",
      experience: "8 yillik tajriba",
      specialization: "Kuzov ta'mirlash va bo'yash ishlari",
      certifications: ["3M sertifikati", "PPG sertifikati"]
    },
    {
      name: "Sardor Umarov",
      position: "Elektrik Mutaxassis",
      image: "team3.jpg",
      experience: "10 yillik tajriba",
      specialization: "Elektr tizimlari diagnostikasi",
      certifications: ["Bosch sertifikati", "Launch Tech mutaxassisi"]
    },
    {
      name: "Dilshod Ahmedov",
      position: "Diagnostika Mutaxassisi",
      image: "team4.jpg",
      experience: "7 yillik tajriba",
      specialization: "Kompyuter diagnostikasi",
      certifications: ["OBD mutaxassisi", "Scanner Pro sertifikati"]
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-header">
          <span className="section-subtitle">Bizning Jamoa</span>
          <h2 className="section-title">Tajribali Mutaxassislar</h2>
          <p className="section-description">
            Professional va tajribali mutaxassislarimiz avtomobilingizga eng yaxshi xizmatni ko'rsatishga tayyor
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card fade-in">
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <p className="member-position">{member.position}</p>
                <p className="member-experience">{member.experience}</p>
                <p className="member-specialization">{member.specialization}</p>
                <div className="member-certifications">
                  {member.certifications.map((cert, idx) => (
                    <span key={idx} className="certification-badge">{cert}</span>
                  ))}
                </div>
              </div>
              <img 
                src={require(`../../../assets/Images/${member.image}`)} 
                alt={member.name}
                className="member-image"
              />
            </div>
          ))}
        </div>

        <div className="team-cta">
          <div className="cta-content">
            <h3>Tajribali Mutaxassislar</h3>
            <p>Bizning tajribali mutaxassislarimiz avtomobilingizga eng yaxshi xizmatni ko'rsatishga tayyor</p>
          </div>
          <a href="#contact" className="button-6">Biz bilan bog'laning</a>
        </div>
      </div>
    </section>
  );
};

export default Team; 