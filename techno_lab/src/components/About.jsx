import React from 'react';
import machine1 from '../assets/images/machine1.jpg';
import isoImg from '../assets/images/iso.jpg';
import nablImg from '../assets/images/nabl.jpg';

function About() {
  return (
    <section id="about" className="py-5" style={{ backgroundColor: '#c5dbf2ff' }}>
      <div className="container" >
        <div className="row justify-content-center text-center" >

          {/* Column 1 */}
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center mb-4">
            <img
              src={machine1}
              alt="Techno Lab"
              className="img-fluid shadow-sm rounded mb-3"
              style={{
                maxHeight: '200px',
                objectFit: 'contain',
                width: '100%',
                backgroundColor: '#f9f9f9',
              }}
            />
            <h5>TechnoPower Tech Solutions</h5>
            <p className="px-3">
              NABL accredited lab recognized by the Department of Science & Technology, Govt. of India.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center mb-4">
            <img
              src={isoImg}
              alt="ISO Certified"
              className="img-fluid shadow-sm rounded mb-3"
              style={{
                maxHeight: '200px',
                objectFit: 'contain',
                width: '100%',
                backgroundColor: '#f9f9f9',
              }}
            />
            <h5>ISO Certified Facility</h5>
            <p className="px-3">
              We follow strict ISO standards to ensure precision and quality in our testing services.
            </p>
          </div>

          {/* Column 3 */}
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column align-items-center mb-4">
            <img
              src={nablImg}
              alt="NABL Accredited"
              className="img-fluid shadow-sm rounded mb-3"
              style={{
                maxHeight: '200px',
                objectFit: 'contain',
                width: '100%',
                backgroundColor: '#f9f9f9',
              }}
            />
            <h5>NABL Accredited</h5>
            <p className="px-3">
              Our lab maintains internationally recognized quality standards in testing and calibration.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;


// import React from 'react';
// import machine1 from '../assets/images/machine1.jpg';
// import isoImg from '../assets/images/iso.jpg';
// import nablImg from '../assets/images/nabl.jpg';


// function About() {
//   return (
//     <section id="about" className="py-5" style={{ backgroundColor: '#c5dbf2ff' }}>
//       <div className="container">

//         {/* Row 1 */}
//         <div className="row align-items-center mb-5">
//           <div className="col-lg-6">
//             <img
//               src={machine1}
//               alt="Techno Lab"
//               className="img-fluid"
//               style={{ maxHeight: '250px', width: '100%', objectFit: 'contain' }}
//             />
//           </div>
//           <div className="col-lg-6">
//             <h2>
//               TechnoPower Tech Solutions
//             </h2>
//             <p>
//               Techno Lab Testing Laboratory is accredited by NABL, an autonomous body
//               under the Department of Science & Technology, Government of India.
//             </p>
//           </div>
//         </div>

//         {/* Row 2 */}
//         <div className="row align-items-center mb-5">
//           <div className="col-lg-6">
//             <img
//               src={isoImg}
//               alt="ISO Certification"
//               className="img-fluid"
//               style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
//             />
//           </div>
//           <div className="col-lg-6">
//             <h2>
//               ISO Certified Facility
//             </h2>
//             <p>
//               We follow rigorous ISO standards to ensure accuracy and reliability in all tests.
//             </p>
//           </div>
//         </div>

//         {/* Row 3 */}
//         <div className="row align-items-center">
//           <div className="col-lg-6">
//             <img
//               src={nablImg}
//               alt="NABL Accreditation"
//               className="img-fluid"
//               style={{ maxHeight: '150px', width: '100%', objectFit: 'contain' }}
//             />
//           </div>
//           <div className="col-lg-6">
//             <h2>
//               NABL Accredited
//             </h2>
//             <p>
//               Our lab is recognized by NABL, maintaining high standards of testing and calibration.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default About; 