import React from 'react';
import Card from './Card';
import './Initiatives.css';

const initiativesData = [
  {
    id: 1,
    title: 'UDGAM',
    imageUrl : 'https://media.licdn.com/dms/image/v2/C4E0BAQEYdVOC87YQpg/company-logo_200_200/company-logo_200_200/0/1631358137751?e=2147483647&v=beta&t=xIuK1J2rEDtppXj42hJX6fCWbmBIeKt_-VDkZL6FDOE'
  },
  {
    id: 2,
    title: 'UDGAM',
    imageUrl : 'https://media.licdn.com/dms/image/v2/C4E0BAQEYdVOC87YQpg/company-logo_200_200/company-logo_200_200/0/1631358137751?e=2147483647&v=beta&t=xIuK1J2rEDtppXj42hJX6fCWbmBIeKt_-VDkZL6FDOE'
  },
  {
    id: 3,
    title: 'UDGAM',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQEYdVOC87YQpg/company-logo_200_200/company-logo_200_200/0/1631358137751?e=2147483647&v=beta&t=xIuK1J2rEDtppXj42hJX6fCWbmBIeKt_-VDkZL6FDOE'
  },
  {
    id: 4,
    title: 'UDGAM',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQEYdVOC87YQpg/company-logo_200_200/company-logo_200_200/0/1631358137751?e=2147483647&v=beta&t=xIuK1J2rEDtppXj42hJX6fCWbmBIeKt_-VDkZL6FDOE'
  },
  {
    id: 5,
    title: 'UDGAM',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQEYdVOC87YQpg/company-logo_200_200/company-logo_200_200/0/1631358137751?e=2147483647&v=beta&t=xIuK1J2rEDtppXj42hJX6fCWbmBIeKt_-VDkZL6FDOE'
  },
  {
    id: 6,
    title: 'UDGAM',
    imageUrl: 'https://media.licdn.com/dms/image/v2/C4E0BAQEYdVOC87YQpg/company-logo_200_200/company-logo_200_200/0/1631358137751?e=2147483647&v=beta&t=xIuK1J2rEDtppXj42hJX6fCWbmBIeKt_-VDkZL6FDOE'
  },
];

const Initiatives = () => {
  return (
    <section className="initiatives-section">
      <div className="initiatives-header">
        <h2>INITIATIVES</h2>
        <p className="subtitle">
          ESCAPING <span></span> THE <br></br> WHITEBOARD
        </p>
      </div>
      <div className="initiatives-grid">
        {initiativesData.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            imageUrl={item.imageUrl} 
          />
        ))}
      </div>
      <button className="main-know-more-button">KNOW MORE</button>
    </section>
  );
};

export default Initiatives;