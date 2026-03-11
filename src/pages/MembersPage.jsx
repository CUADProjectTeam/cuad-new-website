// MembersPage.js
import React from 'react';
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
  const members = [
    { image: './images/Members/CUAD_Rilo.jpeg', name: 'Rilo Oberg', team: 'Full Team Lead' },
    { image: './images/Members/CUAD_John.JPG', name: 'John Apessos', team: 'Full Team  Lead' },
    { image: './images/Members/CUAD_Lulu.JPG', name: 'Lujine Abdelfattah', team: 'Full Team Lead' }, //no pic
    { image: './images/Members/CUAD_AllieLin.jpeg', name: 'Allie Lin', team: 'Business Lead' },
    { image: './images/Members/CUAD_Jason.jpeg', name: 'Jason Peskin', team: 'Electrical Lead' },
    { image: './images/Members/CUAD_Abigail.jpeg', name: 'Abigail Gabalski', team: 'Electrical Lead' },
    { image: './images/Members/CUAD_Angus.JPG', name: 'Angus Chang', team: 'Mechanical Lead' },
    { image: './images/Members/CUAD_Alex.JPG', name: 'Alexander Barry', team: 'Mechanical Lead' },
    { image: './images/Members/CUAD_Etienne.jpeg', name: 'Etienne Sasenarine', team: 'Computer Science Lead' },
    { image: './images/Members/CUAD_Narayan.jpeg', name: 'Narayan Topalli', team: 'Computer Science Lead' },
    { image: './images/Members/CUAD_Alan.jpeg', name: 'Alan Munschy', team: 'Mechanical' },
    { image: './images/Members/CUAD_Alexis.JPG', name: 'Alexis Favre', team: 'Mechanical' },
    { image: './images/Members/CUAD_AndrewJ.jpg', name: 'Andrew Jiang', team: 'Electrical' },
    { image: './images/Members/CUAD_Ashlyn.JPG', name: 'Ashlyn Kang', team: 'Electrical' },
    { image: './images/Members/CUAD_Benny.JPG', name: 'Benny Zhu', team: 'Electrical' },
    { image: './images/Members/CUAD_Bojro.JPG', name: 'Bojro Das', team: 'Computer Science' },
    { image: './images/Members/CUAD_Catherine.JPG', name: 'Catherine  Cheng', team: 'Electrical' },
    { image: './images/Members/CUAD_David.JPG', name: 'David Diao', team: 'Business' },
    { image: './images/Members/CUAD_Emory.JPG', name: 'Emory Vazquez', team: 'Computer Science' },
    { image: './images/Members/CUAD_Frances.JPG', name: 'Frances Hodson', team: 'Mechanical' },
    { image: './images/Members/CUAD_Geneustace.jpeg', name: 'Geneustace Wickasono', team: 'Electrical' },
    { image: './images/Members/CUAD_JessicaAn.jpeg', name: 'Jessica An', team: 'Mechanical' },
    { image: './images/Members/CUAD_Jiya.JPG', name: 'Jiya Choudhary', team: 'Computer Science' },
    { image: './images/Members/CUAD_Jason.JPG', name: 'Jason Chen', team: 'Computer Science' },
    { image: './images/Members/CUAD_Katelyn.JPG', name: 'Katelyn Zhou', team: 'Mechanical' },
    { image: './images/Members/CUAD_Khushi.JPG', name: 'Khushi Thapar', team: 'Business' },
    { image: './images/Members/CUAD_MarcoXerri.jpeg', name: 'Marco Xerri', team: 'Mechanical' },
    { image: './images/Members/CUAD_MarcosMartinez.jpeg', name: 'Marcos Martinez', team: 'Mechanical' },
    { image: './images/Members/CUAD_Nando.JPG', name: 'Nandiniy Velayudhan-Dhamrait', team: 'Business' },
    { image: './images/Members/CUAD_Nathan.jpeg', name: 'Nathan Sheng', team: 'Mechanical' },
    { image: './images/Members/CUAD_Pavithra.jpeg', name: 'Pavithra Kamatchi Soundaram', team: 'Computer Science' },
    { image: './images/Members/CUAD_Pragya.JPG', name: 'Pragya Agarwal', team: 'Electrical' },
    { image: './images/Members/CUAD_Rohan.JPG', name: 'Rohan Shankar', team: 'Computer Science' },
    { image: './images/Members/CUAD_Rumman.JPG', name: 'Rumman Jan', team: 'Electrical' },
    { image: './images/Members/CUAD_Sahasra.JPG', name: 'Sahasra Kalwala', team: 'Business' },
    { image: './images/Members/CUAD_Trishia.JPG', name: 'Trishia Khandelwal', team: 'Computer Science' },
    { image: './images/Members/CUAD_Thomas.jpeg', name: 'Thomas Meyer', team: 'Mechanical' },
    { image: './images/Members/CUAD_Toby.JPG', name: 'Toby Huynh', team: 'Electrical' },
    { image: './images/Members/CUAD_WeiYi.jpeg', name: 'Weiyi Huang', team: 'Electrical' },

  
  ];

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
        subtitle="A diverse group of talented individuals from various fields of study at Cornell University, united in innovation and collaboration."
        backgroundImage="./images/team-photo.webp"
      />
      <h1 className="members-title">Meet Our Team</h1>

      {/* Leads Section */}
      <div className="leads-section">
        <h2 className="section-title">Team Leads</h2>
        <div className="members-grid">
          {leads.map((lead, index) => (
            <div key={index} className="member-card">
              <img src={lead.image} alt={lead.name} className="member-image" loading="lazy" />
              <h3 className="member-name">{lead.name}</h3>
              <p className="member-role">{lead.team}</p>
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
              <div key={index} className="member-card">
                <img src={member.image} alt={member.name} className="member-image" loading="lazy" />
                <h3 className="member-name">{member.name}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MembersPage;