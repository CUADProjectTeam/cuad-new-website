// MembersPage.js
import React, { useState } from 'react';
import MemberCard from '../components/MemberCard';
import './MembersPage.css'
import Stats from "../components/Stats"
import PageHeader from '../components/PageHeader'

// const MembersPage = () => {
//   const stats = [
//     { value: 30, label: 'MEMBERS' },
//   ];
//   const members = [
//   { image: './images/Members/CUAD_Abigail.jpeg', name: 'Abigail Gabalski', team: 'Business' }
//   // { image: 'member2.jpg', name: 'Jane Smith', team: 'Business' },
//   // { image: 'member3.jpg', name: 'Bob Johnson', team: 'Computer Science' },
//   // { image: 'member4.jpg', name: 'Sarah Lee', team: 'Computer Science' },
//   // { image: 'member5.jpg', name: 'Michael Chen', team: 'Electrical' },
//   // { image: 'member6.jpg', name: 'Emily Davis', team: 'Electrical' },
//   // { image: 'member7.jpg', name: 'David Kim', team: 'Mechanical' },
//   // { image: 'member8.jpg', name: 'Samantha Wong', team: 'Mechanical' },
//   // { image: 'member9.jpg', name: 'Alex Patel', team: 'Business' },
//   // { image: 'member10.jpg', name: 'Olivia Fernandez', team: 'Computer Science' },
// ];

//   // Group members by team
//   const membersByTeam = members.reduce((acc, member) => {
//     if (!acc[member.team]) {
//       acc[member.team] = [];
//     }
//     acc[member.team].push(member);
//     return acc;
//   }, {});

//   return (
//     <div className="members-page">
// <section className="unique-team-banner">
//     <div className='unique-images'>
//       <img src="./images/team-photo.webp" alt="Team" />
//     </div>
//     <div className="unique-description">
//       <h1 className="unique-num">30</h1>
//       <h1 className="unique-members">Members</h1>
//       <p className="unique-caption">
//         At CUAutoDrone, we're proud to have a diverse group of talented individuals from various fields of study at Cornell University. Our team members bring a mix of skills and passions to the table, making our project a hub of innovation and expertise.
//       </p>
//     </div>
{/* </section>
//       {Object.keys(membersByTeam).map((team) => (
//         <div key={team} className="subteam">
//           <h2 className="subteam-title">{team}</h2>
//           <div className="members-grid">
//             {membersByTeam[team].map((member, index) => (
//               <MemberCard
//                 key={index}
//                 image={member.image}
//                 name={member.name}
//                 team={member.team}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>

//   );
// };

// // export default MembersPage; */}
// import React from 'react';
// import './MembersPage.css';
// import Stats from "../components/Stats"

// const MembersPage = () => {
//   const stats = [
//     { value: 30, label: 'MEMBERS' },
//   ];

//   return (<section className="unique-team-banner">
//     <div className='unique-images'>
//       <img src="./images/team-photo.webp" alt="Team" />
//     </div>
//     <div className="unique-description">
//       <h1 className="unique-num">30</h1>
//       <h1 className="unique-members">Members</h1>
//       <p className="unique-caption">
//         At CUAutoDrone, we're proud to have a diverse group of talented individuals from various fields of study at Cornell University. Our team members bring a mix of skills and passions to the table, making our project a hub of innovation and expertise.
//       </p>
//     </div>
//   </section>




//   );
// };
// export default MembersPage;

const MembersPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const members = [
    { image: './images/Members/CUAD_John.jpg', name: 'John Apessos', team: 'Full Team  Lead', major: 'Mechanical Engineering', year: '2027', hometown: 'Scarsdale, New York', bio: 'He enjoys fishing, hunting and spending time outdoors. ' },
    { image: './images/Members/CUAD_Lulu.jpg', name: 'Lujine Abdelfattah', team: 'Full Team Lead', major: 'Computer Science', year:'2027', hometown: 'Garfield, New Jersey', bio: 'She is pursuing computer science and growing as a developer. She enjoys reading, watching movies, swimming, and traveling with friends.' }, //no pic
    { image: './images/Members/CUAD_AllieLin.jpeg', name: 'Allie Lin', team: 'Business Lead' , major: 'Applied Economics and Management', year: '2027'},
    { image: './images/Members/CUAD_JasonP.jpg', name: 'Jason Peskin', team: 'Electrical Lead', major: 'Electrical and Computer Engineering', year: '2027', hometown: 'New York, New York', bio: 'He enjoys playing the guitar and piano, going to Cornell hockey games, and educating the public at the Fuertes Observatory.' },
    { image: './images/Members/CUAD_Abigail.jpg', name: 'Abigail Gabalski', team: 'Electrical Lead', major: 'Electrical and Computer Engineering', year: '2028', hometown: 'Mannassas, Virginia', bio: 'She enjoys playing the violin, cello, and guitar, and singing in choir.' },
    { image: './images/Members/CUAD_Angus.jpg', name: 'Angus Chang', team: 'Mechanical Lead', major: 'Mechanical Engineering', year: '2027', hometown: 'Taiwan', bio: 'He enjoys flying FPV drones.' },
    { image: './images/Members/CUAD_Alex.jpg', name: 'Alexander Barry', team: 'Mechanical Lead', major: 'Mechanical Engineering', year: '2027', hometown: 'Newark, Delaware', bio: 'He enjoys playing tennis.'},
    { image: './images/Members/CUAD_Etienne.jpg', name: 'Etienne Sasenarine', team: 'Computer Science Lead', year: '2028', major: 'Computer Science', hometown: 'Long Island, New York', bio: 'He is interested interested in the intersection of Robotics and Artificial Intelligence to develop innovative autonomous systems.' },
    { image: './images/Members/CUAD_Narayan.jpg', name: 'Narayan Topalli', team: 'Computer Science Lead', year: '2028', major: 'Computer Science', hometown: 'Manhattan, New York', bio: 'He enjoys motorsports, playing golf and tennis, and going to the gym' },
    { image: './images/Members/CUAD_Alan.jpg', name: 'Alan Munschy', team: 'Mechanical', major: 'Mechanical Engineering', year: '2027', hometown: 'Miami, Florida' },
    { image: './images/Members/CUAD_Alexis.JPG', name: 'Alexis Favre', team: 'Mechanical', major: 'Mechanical Engineering', year: '2028', hometown: 'Mamaroneck, New York' },
    { image: './images/Members/CUAD_Andrew.jpg', name: 'Andrew Jiang', team: 'Electrical', major: 'Computer Science', year: '2028', hometown: 'Charlotte, North Carolina' },
    { image: './images/Members/CUAD_Ashlyn.jpg', name: 'Ashlyn Kang', team: 'Electrical', major: 'Electrical and Computer Engineering', year: '2029', hometown: 'Paramus, New Jersey' },
    { image: './images/Members/CUAD_Benny.jpg', name: 'Benny Zhu', team: 'Electrical', major: 'Electrical and Computer Engineering', year: '2028', hometown: 'Tunkhannock, Pennsylvania' },
    { image: './images/Members/CUAD_Bojro.jpg', name: 'Bojro Das', team: 'Computer Science', major: 'Mathematics', year: '2029', hometown: 'Lexington, Massachusetts' },
    { image: './images/Members/CUAD_Catherine.jpg', name: 'Catherine Cheng', team: 'Electrical', major: 'Electrical and Computer Engineering', year: '2028', hometown: 'Scottsdale, Arizona' },
    { image: './images/Members/CUAD_David.JPG', name: 'David Diao', team: 'Business', major: 'Public Policy', year: '2027', hometown: 'Scarsdale, New York' },
    { image: './images/Members/CUAD_Emory.jpg', name: 'Emory Vazquez', team: 'Computer Science', major: 'Computer Science', year: '2029', hometown: 'Houston, Texas' },
    { image: './images/Members/CUAD_Frances.jpg', name: 'Frances Hodson', team: 'Mechanical', major: 'Mechanical Engineering', year: '2029', hometown: 'Salt Lake City, Utah' },
    { image: './images/Members/CUAD_Geneustace.jpeg', name: 'Geneustace Wickasono', team: 'Electrical', major: 'Electrical and Computer Engineering', year: '2027', hometown: 'Ithaca, New York' },
    { image: './images/Members/CUAD_Helen.jpg', name: 'Helen Zheng', team: 'Business', major: 'ORIE', year: '2029', hometown: 'Syosset, New York' },
    { image: './images/Members/CUAD_Jessica.jpg', name: 'Jessica An', team: 'Mechanical', major: 'ORIE', year: '2028', hometown: 'Northbrook, Illinois' },
    { image: './images/Members/CUAD_Jiya.jpg', name: 'Jiya Choudhary', team: 'Computer Science', major: 'Computer Science', year: '2029', hometown: 'Kolkata, India' },
    { image: './images/Members/CUAD_JasonC.jpg', name: 'Jason Chen', team: 'Computer Science', major: 'Computer Science', year: '2028', hometown: 'Auckland, New Zealand' },
    { image: './images/Members/CUAD_Katelyn.jpg', name: 'Katelyn Zhou', team: 'Mechanical', major: 'Mechanical Engineering', year: '2029', hometown: 'Queens, New York' },
    { image: './images/Members/CUAD_Khushi.jpg', name: 'Khushi Thapar', team: 'Business', major: 'Economics & Psychology', year: '2029', hometown: 'Mumbai, India' },
    { image: './images/Members/CUAD_Marco.jpg', name: 'Marco Xerri', team: 'Mechanical', major: 'Mechanical Engineering', year: '2026', hometown: 'Mount Sinai, New York' },
    { image: './images/Members/CUAD_MarcosMartinez.jpeg', name: 'Marcos Martinez', team: 'Mechanical', major: 'Mechanical Engineering', year: '2028', hometown: 'Bethpage, New York' },
    { image: './images/Members/CUAD_Nandiniy.jpg', name: 'Nandiniy Velayudhan-Dhamrait', team: 'Business', major: 'Biological Sciences', year: '2028', hometown: 'Seattle, Washington' },
    { image: './images/Members/CUAD_Nathan.jpeg', name: 'Nathan Sheng', team: 'Mechanical', major: 'Mechanical Engineering', year: '2027', hometown: 'Painted Post, New York' },
    { image: './images/Members/CUAD_Pavithra.jpg', name: 'Pavithra Kamatchi Soundaram', team: 'Computer Science' , major: 'Computer Science', year: '2027', hometown: 'Dublin, California' },
    { image: './images/Members/CUAD_Pragya.jpg', name: 'Pragya Agarwal', team: 'Electrical', major: 'Electrical and Computer Engineering', year: '2029', hometown: 'Simi Valley, California' },
    { image: './images/Members/CUAD_Rohan.JPG', name: 'Rohan Shankar', team: 'Computer Science', major: 'Computer Science', year: '2028', hometown: 'Los Altos, California' },
    { image: './images/Members/CUAD_Rumman.jpg', name: 'Rumman Jan', team: 'Electrical', major: 'Electrical and Computer Engineering', year: '2028', hometown: 'Kashmir' },
    { image: './images/Members/CUAD_Sahasra.jpg', name: 'Sahasra Kalwala', team: 'Business', major: 'Economics & Information Science', year: '2029', hometown: 'Aldie, Virginia' },
    { image: './images/Members/CUAD_Trishia.jpg', name: 'Trishia Khandelwal', team: 'Computer Science', major: 'Computer Science', year: '2029', hometown: 'Cupertino, California' },
    { image: './images/Members/CUAD_Thomas.jpg', name: 'Thomas Meyer', team: 'Mechanical', major: 'Mechanical Engineering', year: '2027', hometown: 'Athens, Georgia' },
    { image: './images/Members/CUAD_Toby.JPG', name: 'Toby Huynh', team: 'Electrical', major: 'Mechanical Engineering', year: '2027', hometown: 'Bayside, New York' },
    { image: './images/Members/CUAD_WeiYi.jpeg', name: 'Weiyi Huang', team: 'Electrical', major: 'Electrical and Computer Engineering & Aerospace Engineering', year: '2027', hometown: 'Austin, Texas' }

  
  ];

  const handleCardClick = (member) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  // Separate leads from other members
  const leads = members.filter((member) => member.team.includes('Lead'));
  const nonLeads = members.filter((member) => !member.team.includes('Lead'));

  // Group non-leads by their teams
  const membersByTeam = nonLeads.reduce((acc, member) => {
    if (!acc[member.team]) {
      acc[member.team] = [];
    }
    acc[member.team].push(member);
    return acc;
  }, {});

  return (
    <div className="members-page">
      <PageHeader 
        title="Our Members"
        subtitle="At CUAutoDrone, we're proud to have a diverse group of talented individuals from various fields of study at Cornell University. Our team members bring a mix of skills and passions to the table, making our project a hub of innovation and expertise."
      />
      <div className="members-header-image">
        <img src="./images/teamphoto.jpg" alt="CUAD team" />
      </div>
      <h1 className="members-title">Meet Our Team</h1>

      {/* Leads Section */}
      <div className="leads-section">
        <h2 className="section-title">Team Leads</h2>
        <div className="members-grid">
          {leads.map((lead, index) => (
            <div
              key={index}
              className="member-card"
              role="button"
              tabIndex={0}
              onClick={() => handleCardClick(lead)}
              onKeyDown={(e) => e.key === 'Enter' && handleCardClick(lead)}
            >
              <img src={lead.image} alt={lead.name} className="member-image" loading="lazy" />
              <div className="member-card-info">
                <h3 className="member-name">{lead.name}</h3>
                <p className="member-role">{lead.team}</p>
                {(lead.year || lead.major) && (
                  <p className="member-meta">
                    {lead.year && `${lead.year}`}
                    {lead.year && lead.major && ' · '}
                    {lead.major}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Non-leads Section */}
      {Object.keys(membersByTeam).map((team) => (
        <div key={team} className="subteam">
          <h2 className="subteam-title">{team}</h2>
          <div className="members-grid">
            {membersByTeam[team].map((member, index) => (
              <div
                key={index}
                className="member-card"
                role="button"
                tabIndex={0}
                onClick={() => handleCardClick(member)}
                onKeyDown={(e) => e.key === 'Enter' && handleCardClick(member)}
              >
                <img src={member.image} alt={member.name} className="member-image" loading="lazy" />
                <div className="member-card-info">
                  <h3 className="member-name">{member.name}</h3>
                  {(member.year || member.major) && (
                    <p className="member-meta">
                      {member.year && `${member.year}`}
                      {member.year && member.major && ' · '}
                      {member.major}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {selectedMember && (
        <div className="member-modal" onClick={closeModal}>
          <div className="member-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal} aria-label="Close member details">
              ×
            </button>
            <div className="modal-body">
              <img src={selectedMember.image} alt={selectedMember.name} className="modal-image" />
              <div className="modal-detail-content">
                <h2 className="modal-name">{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.team}</p>
                {(selectedMember.year || selectedMember.major) && (
                  <p className="modal-meta">
                    {selectedMember.year ? `${selectedMember.year}` : ''}
                    {selectedMember.year && selectedMember.major ? ' · ' : ''}
                    {selectedMember.major || ''}
                  </p>
                )}
                {selectedMember.hometown && (
                  <p className="modal-hometown">Hometown: {selectedMember.hometown}</p>
                )}
                {selectedMember.bio && (
                  <p className="modal-bio">{selectedMember.bio}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MembersPage;