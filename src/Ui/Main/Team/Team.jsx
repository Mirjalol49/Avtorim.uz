import React from 'react';
import './Team.css';

import team1 from '../../../assets/Images/josh.jpg';
import team2 from '../../../assets/Images/josh.jpg';
import team3 from '../../../assets/Images/josh.jpg';
import team4 from '../../../assets/Images/josh.jpg';

const Team = () => {
  return (
    <section id="team" className="team-section" id="team">
      <div className="container">
        <div className="team-header">
          <span className="team-badge">Professional Jamoa</span>
          <h2 className="team-title">Bizning Mutaxassislar</h2>
          <p className="team-subtitle">
            15 yillik tajriba va malakali mutaxassislar jamoasi bilan avtomobilingizni ishonchli qo'llarga topshiring
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="member-image-wrapper">
              <img 
                src={team1}
                alt="Aziz Karimov" 
                className="member-image"
              />
              <div className="member-social">
                <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Aziz Karimov</h3>
              <p className="member-position">Bosh Mexanik</p>
              <p className="member-experience">12 yillik tajriba</p>
              <div className="member-specialties">
                <span className="specialty-tag">BMW Mutaxassisi</span>
                <span className="specialty-tag">Dvigatel Tizimi</span>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="member-image-wrapper">
              <img 
                  src={team2}
                alt="Jamshid Rahimov" 
                className="member-image"
              />
              <div className="member-social">
                <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Jamshid Rahimov</h3>
              <p className="member-position">Kuzov Ustasi</p>
              <p className="member-experience">8 yillik tajriba</p>
              <div className="member-specialties">
                <span className="specialty-tag">Kuzov Ta'mirlash</span>
                <span className="specialty-tag">Bo'yash Ishlari</span>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="member-image-wrapper">
              <img 
                src={team3}
                alt="Sardor Umarov" 
                className="member-image"
              />
              <div className="member-social">
                <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Sardor Umarov</h3>
              <p className="member-position">Elektrik Mutaxassis</p>
              <p className="member-experience">10 yillik tajriba</p>
              <div className="member-specialties">
                <span className="specialty-tag">Elektr Tizimi</span>
                <span className="specialty-tag">Diagnostika</span>
              </div>
            </div>
          </div>

          <div className="team-card">
            <div className="member-image-wrapper">
              <img 
                src={team4}
                alt="Dilshod Ahmedov" 
                className="member-image"
              />
              <div className="member-social">
                <a href="#" className="social-link"><i className="fab fa-telegram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              </div>
            </div>
            <div className="member-info">
              <h3 className="member-name">Dilshod Ahmedov</h3>
              <p className="member-position">Diagnostika Mutaxassisi</p>
              <p className="member-experience">7 yillik tajriba</p>
              <div className="member-specialties">
                <span className="specialty-tag">Kompyuter Diagnostika</span>
                <span className="specialty-tag">Scanner Pro</span>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default Team; 