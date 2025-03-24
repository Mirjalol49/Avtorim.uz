import React from 'react';
import './Team.css';
import { useLanguage } from '../../../hooks/useLanguage';

import team1 from '../../../assets/Images/emp1.png';
import team2 from '../../../assets/Images/emp2.png';
import team3 from '../../../assets/Images/emp3.png';
import team4 from '../../../assets/Images/emp4.png';
import team5 from '../../../assets/Images/emp5.png';
import team6 from '../../../assets/Images/emp6.png';
import team7 from '../../../assets/Images/emp7.png';
import team8 from '../../../assets/Images/emp8.png';


const Team = () => {
  const { language } = useLanguage();

  const translations = {
    badge: {
      en: "Professional Team",
      ru: "Профессиональная Команда",
      uz: "Professional Jamoa"
    },
    title: {
      en: "Our Specialists",
      ru: "Наши Специалисты",
      uz: "Bizning Mutaxassislar"
    },
    subtitle: {
      en: "Trust your vehicle to a team of skilled specialists with 15 years of experience",
      ru: "Доверьте свой автомобиль команде опытных специалистов с 15-летним опытом",
      uz: "15 yillik tajriba va malakali mutaxassislar jamoasi bilan avtomobilingizni ishonchli qo'llarga topshiring"
    },
    team: [
      {
        name: "Nodirbek Abdurahmonov",
        position: {
          en: "Engine Mechanic",
          ru: "Механик двигателя",
          uz: "Dvigatel mexanigi"
        },
        specialty: {
          en: "Master Technician",
          ru: "Мастер-техник",
          uz: "Usta-texnik"
        }
      },
      {
        name: "Mirzaolim G'oziyev",
       
        specialty: {
          en: "Auto Parts Manager",
          ru: "Диспетчер автозапчастей",
          uz: "Avtomobil qismlari menejeri"
        }
      },
      {
        name: "Vang Hui",
        position: {
          en: "Engine Mechanic",
          ru: "Механик двигателя",
          uz: "Dvigatel mexanigi"
        },
        specialty: {
          en: "Engine Mechanic",
          ru: "Механик двигателя",
          uz: "Dvigatel mexanigi" 
        }
      },
      {
        name: "Asqarali Abduraximov",
        position: {
          en: "Diagnostics Specialist",
          ru: "Специалист по Диагностике",
          uz: "Diagnostika Mutaxassisi"
        },
        specialty: {
          en: "Car Painter",
          ru: "Маляр",
          uz: "Malyarchik"
        }
      },
      {
        name: "Shoxrux Hamroyev",
        position: {
          en: "Suspension Expert",
          ru: "Эксперт по Подвеске",
          uz: "Osilib turish tizimi bo'yicha Mutaxassis"
        },
        specialty: {
          en: "General Salesperson",
          ru: "Главный продавец",
          uz: "Bosh Sotuvchi"
        }
      },
      {
        name: "Gao Zhimeng",
        position: {
          en: "Transmission Specialist",
          ru: "Специалист по Трансмиссии",
          uz: "Transmissiya Mutaxassisi"
        },
        specialty: {
          en: "Vehicle Damage Assessor",
          ru: "Автомобильный оценщик",
          uz: "Avtomobil baholovchisi"
        }
      },
      {
        name: "Sohibjon Ermatov",
        position: {
          en: "Car Painter",
          ru: "Маляр",
          uz: "Malyarchik"
        },
        specialty: {
          en: "Car Painter",
          ru: "Маляр",
          uz: "Malyarchik"
        }
      },
      {
        name: "Javohir Raxmatullayev",
        position: {
          en: "Brake Systems Specialist",
          ru: "Специалист по Тормозным Системам",
          uz: "Tormoz Tizimlari Mutaxassisi"
        },
        specialty: {
          en: "Internet expert",
          ru: "Интернет-специалист",
          uz: "Internet mutaxasisi"
        }
      }
    ]
  };

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="team-header">
          <span className="team-badge">{translations.badge[language]}</span>
          <h2 className="team-title">{translations.title[language]}</h2>
          <p className="team-subtitle">
            {translations.subtitle[language]}
          </p>
        </div>

        <div className="team-grid">
          {translations.team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image-wrapper">
                <img 
                  src={[team1, team2, team3, team4, team5, team6, team7, team8][index]}
                  alt={member.name} 
                  className="member-image"
                />
              </div>
              <div className="member-info">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-specialty">
                  <span className="specialty-tag">{member.specialty[language]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team; 