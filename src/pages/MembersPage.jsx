// MembersPage.js
import React from 'react';
import MemberCard from '../components/MemberCard';
import './MembersPage.css'
import Stats from "../components/Stats"

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
    { image: './images/Members/CUAD_Abigail.jpeg', name: 'Abigail Gabalski', team: 'Electrical' },
    { image: './images/Members/CUAD_Alan.jpeg', name: 'Alan Munschy', team: 'Mechanical' },
    { image: './images/Members/CUAD_AlexMorozov.jpeg', name: 'Alex Morozov', team: 'Electrical Lead' },
    { image: './images/Members/CUAD_AllieLin.jpeg', name: 'Allie Lin', team: 'Business' },
    { image: './images/Members/CUAD_Anders.jpeg', name: 'Anders Kjellerup Skovborg', team: 'Electrical' },
    { image: './images/Members/CUAD_AndrewJ.jpg', name: 'Andrew Jiang', team: 'Electrical' },
    { image: './images/Members/CUAD_AndrewK.jpeg', name: 'Andrew Kim', team: 'Computer Science' },
    { image: './images/Members/CUAD_August.jpeg', name: 'August Hassard', team: 'Mechanical' },
    { image: './images/Members/CUAD_Benjamin.jpeg', name: 'Benjamin Reyes', team: 'Electrical' },
    { image: './images/Members/CUAD_Brandon.jpeg', name: 'Brandon Campagna', team: 'Electrical' },
    //{ image: './images/Members/CUAD_WhiteImage.jpeg', name: 'Carina Lau', team: 'Business' }, //no pic
    { image: './images/Members/CUAD_Frederick.jpeg', name: 'Carl Frederik Himmer', team: 'Mechanical' },
    { image: './images/Members/CUAD_Cindy.jpeg', name: 'Cindy Wang', team: 'Business' },
    { image: './images/Members/CUAD_Delaney.jpeg', name: 'Delaney Lopez', team: 'Full Team Lead' },
    { image: './images/Members/CUAD_Elizabath.jpeg', name: 'Elizabeth Chen', team: 'Computer Science' },
    { image: './images/Members/CUAD_Etienne.jpeg', name: 'Etienne Sasenarine', team: 'Computer Science' },
    { image: './images/Members/CUAD_Geneustace.jpeg', name: 'Geneustace Wickasono', team: 'Electrical' },
    { image: './images/Members/CUAD_Hannah.jpeg', name: 'Hannah Wang', team: 'Business Lead' },
    { image: './images/Members/CUAD_HelenNi.jpeg', name: 'Helen Ni', team: 'Electrical Lead' },
    { image: './images/Members/CUAD_Jason.jpeg', name: 'Jason Peskin', team: 'Electrical' },
    { image: './images/Members/CUAD_JessicaAn.jpeg', name: 'Jessica An', team: 'Mechanical' },
    { image: './images/Members/CUAD_John.jpeg', name: 'John Apessos', team: 'Mechanical Lead' },
    { image: './images/Members/CUAD_JT.jpeg', name: 'JT Klenke', team: 'Computer Science Lead' },
    { image: './images/Members/CUAD_Kevin.jpeg', name: 'Kevin Lee', team: 'Electrical' },
    //{ image: './images/Members/CUAD_WhiteImage.jpeg', name: 'Kimari Jackson', team: 'Mechanical' }, //no pic
    { image: './images/Members/CUAD_Laura.jpg', name: 'Laura Ren', team: 'Mechanical' },
    //{ image: './images/Members/CUAD_WhiteImage.jpeg', name: 'Lujine Abdelfattah', team: 'Business' }, //no pic
    { image: './images/Members/CUAD_Maddox.jpeg', name: 'Maddox Nesterczuk', team: 'Mechanical' },
    { image: './images/Members/CUAD_MarcoXerri.jpeg', name: 'Marco Xerri', team: 'Mechanical' },
    { image: './images/Members/CUAD_MarcosMartinez.jpeg', name: 'Marcos Martinez', team: 'Mechanical' },
    { image: './images/Members/CUAD_Michelle.jpeg', name: 'Michelle Dong', team: 'Electrical' },
    { image: './images/Members/CUAD_Narayan.jpeg', name: 'Narayan Topalli', team: 'Computer Science' },
    { image: './images/Members/CUAD_Nathan.jpeg', name: 'Nathan Sheng', team: 'Mechanical' },
    { image: './images/Members/CUAD_Pavithra.jpeg', name: 'Pavithra Kamatchi Soundaram', team: 'Computer Science' },
    { image: './images/Members/CUAD_Beam.jpeg', name: 'Phawat Leechasan (Beam)', team: 'Electrical' },
    { image: './images/Members/CUAD_Piyali.jpeg', name: 'Piyali Mittal', team: 'Computer Science' },
    { image: './images/Members/CUAD_Rilo.jpeg', name: 'Rilo Oberg', team: 'Mechanical Lead' },
    { image: './images/Members/CUAD_Ronald.jpeg', name: 'Ronald Qu', team: 'Electrical' },
    { image: './images/Members/CUAD_RyanEllis.jpeg', name: 'Ryan Ellis', team: 'Full Team Lead' },
    { image: './images/Members/CUAD_RyanFujii.jpeg', name: 'Ryan Fujii', team: 'Computer Science' },
    { image: './images/Members/CUAD_Santiago.jpeg', name: 'Santiago Blaumann', team: 'Business/Full Team Lead' },
    { image: './images/Members/CUAD_Selena.jpeg', name: 'Selena Zhang', team: 'Electrical' },
    { image: './images/Members/CUAD_Surabhi.jpeg', name: 'Surabhi Bachhav', team: 'Computer Science' },
    { image: './images/Members/CUAD_Tailai.jpeg', name: 'Tailai Ying', team: 'Computer Science' },
    { image: './images/Members/CUAD_Thomas.jpeg', name: 'Thomas Meyer', team: 'Mechanical' },
    { image: './images/Members/CUAD_Victor.jpeg', name: 'Victor Liu', team: 'Electrical' },
    { image: './images/Members/CUAD_WeiYi.jpeg', name: 'Weiyi Huang', team: 'Electrical' },
    { image: './images/Members/CUAD_Will.jpeg', name: 'Will Howes', team: 'Computer Science Lead' },
    { image: './images/Members/CUAD_Winston.jpeg', name: 'Winston Ni', team: 'Computer Science' },
    { image: './images/Members/CUAD_Yating.jpeg', name: 'Yating Chen', team: 'Electrical' },
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
      <section className="unique-team-banner">
        <div className='unique-images'>
          <img src="./images/team-photo.webp" alt="Team" />
        </div>
        <div className="unique-description">
          <h1 className="unique-num">51</h1>
          <h1 className="unique-members">Members</h1>
          <p className="unique-caption">
            At Cornell University Auto Drone, we're proud to have a diverse group of talented individuals from various fields of study at Cornell University. Our team members bring a mix of skills and passions to the table, making our project a hub of innovation and expertise.
          </p>
        </div>
      </section>
      <h1 className="members-title">Meet Our Team</h1>

      {/* Leads Section */}
      <div className="leads-section">
        <h2 className="section-title">Team Leads</h2>
        <div className="members-grid">
          {leads.map((lead, index) => (
            <div key={index} className="member-card">
              <img src={lead.image} alt={lead.name} className="member-image" />
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
                <img src={member.image} alt={member.name} className="member-image" />
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
