// import React, { useState } from 'react';
// import './styles/complaintinput.css';
// import Header from './Header';
// import Footer from './footer';
// import axios from 'axios';
// import { useNavigate } from 'react-router';

// const Complaintinput = () => {
//   const navigate = useNavigate();
//   const [complaintData, setComplaintData] = useState({
//     issueDescription: "",
//     images: [],
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setComplaintData(prevState => ({
//       ...prevState,
//       [name]: value
//     }));
//   };

//   const handleImageChange = e => {
//     const files = Array.from(e.target.files);
//     setComplaintData(prevState => ({
//       ...prevState,
//       images: files
//     }));
//   };

//   const sendComplaint = () => {
//     const formData = new FormData();
//     formData.append('issueDescription', complaintData.issueDescription);
//     complaintData.images.forEach((image, index) => {
//       formData.append(`image${index + 1}`, image);
//     });

//     axios.post('http://localhost:9005/dikat', formData)
//       .then((res) => {
//         if (res.data.success) {
//           console.log('Mail sent to admin');
//           navigate('/complaint');
//         } else {
//           console.log('Mail not sent, error');
//         }
//       })
//       .catch(error => {
//         console.error('Error uploading images:', error);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <div className='outside'>
//         <div className="mb-3 inpdivcp">
//           <div>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWLrGRvRBwRryj9aoufIrOG_51l4eb3anp3oRG_Dc4A&s" alt="Image" />
//           </div>
//           <div className='right'>
//             <div className="form-container">
//               <label htmlFor="issueDescription" className="form-label">
//                 Write your Issue Here
//               </label>
//               <textarea className="form-control" id="issueDescription" rows="3" name='issueDescription' value={complaintData.issueDescription} onChange={handleChange} ></textarea>
//               <label htmlFor="imageUpload" className="form-label">
//                 Upload Images
//               </label>
//               <input type="file" id="imageUpload" accept="image/*" multiple onChange={handleImageChange} />
//               <button className="mt-3 subinpcom" onClick={sendComplaint}>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Complaintinput;


// import React, { useState } from 'react';
// import './styles/complaintinput.css';
// import Header from './Header';
// import Footer from './footer';
// import axios from 'axios';
// import { useNavigate } from 'react-router';

// const Complaintinput = () => {

//   const [compl,setCompl]=useState('')

// const handleChange=(e)=>{
//   const query=e.target;
//   const vali=query.value;
//   setCompl(vali)
// }

//   const sendComplaint = () => {
//     const cred={compl,image}
//     axios.post('http://localhost:9005/dikat',cred)
//       .then((res) => {
//         if (res.data.success) {
//           console.log('Mail sent to admin');
//           navigate('/complaint');
//         } else {
//           console.log('Mail not sent, error');
//         }
//       })
//       .catch(error => {
//         console.error('Error uploading images:', error);
//       });
//   };

//   return (
//     <>
//       <Header />
//       <div className='outside'>
//         <div className="mb-3 inpdivcp">
//           <div>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWLrGRvRBwRryj9aoufIrOG_51l4eb3anp3oRG_Dc4A&s" alt="Complaint Image" />
//           </div>
//           <div className='right'>
//             <div className="form-container">
//               <label htmlFor="issueDescription" className="form-label">
//                 Write your Issue Here
//               </label>
//               <textarea className="form-control" id="issue" rows="3" name='issue' onChange={handleChange} ></textarea>
              
//               <button className="mt-3 subinpcom" onClick={sendComplaint}>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default Complaintinput;





import React, { useState } from 'react';
import './styles/complaintinput.css';
import Header from './Header';
import Footer from './footer';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Complaintinput = () => {




  const navigate= useNavigate();
  const [imageLink,setImageLink]=useState('')
  const [bhjna, setbhjna] = useState({
    likha: "",
  })
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
    
  const handleImage=(e)=>{

    const inplink= e.target.value
    setImageLink(inplink);
  }

  const handlechange = e => {
    const { name, value } = e.target
    setbhjna({
       [name]: value
    })
  }
  const problem= bhjna.likha;
  const senddikat =(e)=>{
    const crede={problem,imageLink,selectedOption}
axios.post('http://localhost:9005/dikat',crede)
.then((res)=>{
  if(res.data.find===true){
    console.log('mail sent to admin')
    navigate('/thank')
  }
  else{
    console.log('mail not send error')
  }
})
  }
// console.log(bhjna)
// console.log(bhjna)
// console.log(selectedOption);


  return (
    <>
      <Header />
      <div className='outside'>
      <div className="mb-3 inpdivcp">
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhWLrGRvRBwRryj9aoufIrOG_51l4eb3anp3oRG_Dc4A&s" alt="Image" />
        </div>
        <div className='right'>
        <div className="form-container">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Write your Issue Here
          </label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='likha' value={bhjna.likha} onChange={handlechange} ></textarea>
          <label htmlFor="imageUpload" className="form-label">
                Paste Image Link 
              </label>
              <br />
              <input type="text" name='imagelink' onChange={handleImage} />
              <br />
              <br />
              <div>
      <label htmlFor="dropdown">Select Deprtment:</label>
      <select id="dropdown" value={selectedOption} onChange={handleChange}>
        <option value="">Select...</option>
        <option value="rashmi_chaudhary@fosteringlinux.com">Rashmi Ma'am</option>
        <option value="deepak.x.kumar@fosteringlinux.com">HR</option>
        <option value="option3">Option 3</option>
      </select>
      {selectedOption && (
        <p>You selected: {selectedOption}</p>
      )}
    </div>
<br />
          <button className="mt-3 subinpcom" onClick={senddikat}>Submit</button>


         
        </div>
        </div>
      </div>
      </div>
      <Footer/>
    </>
  );
};

export default Complaintinput;

