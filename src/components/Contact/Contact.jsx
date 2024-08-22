// import React, { useState } from 'react';
import './ContactUs.css';


const Contact = () => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   message: '',
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Here you can handle the form submission, like sending the data to a backend server
  //   console.log('Form data submitted:', formData);
  //   alert('Thank you for reaching out! We will get back to you soon.');
  //   setFormData({ name: '', email: '', message: '' }); // Reset form
  // };

  return (
    <>

<div className="About">
        <div className="container gx-0">
          <div className="row gx-0">
            <div className="col-12">
              <div className="About_col">
                <h1 className="main_head">Contact US</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ***************************** */}
      <div className="contact">
        <div className="container-fluid contact_main gx-0">
          <div className="row gx-0 align-items-center">
            <div className="col-lg-6 text-center">
              <div className="contact_sec1">
                <h4 className="contact_h4">Contact Information</h4>
                <p>
                  Fill the form below or write us .We will help you as soon as
                  possible.
                </p>
                {/* ************************* */}
                <div className="row gx-0">
                  <div className="col-lg-6">
                    <div className="contact_fm_1">
                      <i className="fa-solid fa-phone"></i>
                      <h4>Phone No</h4>
                      <h6>+91 7765 092 460</h6>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="contact_fm_2">
                      <i className="fa-solid fa-envelope"></i>
                      <h4>Email</h4>
                      <h6>shivamkr5646@gmail.com</h6>
                    </div>
                  </div>
                </div>
                {/* ************************* */}
                <div className="row gx-0">
                  <div className="col-lg-12">
                    <div className="contact_fm_3">
                      <i className="fa-solid fa-location-dot"></i>
                      <h4>Address</h4>
                      <h6>Mashrak, Bihar</h6>
                      <iframe
                        src="https://www.google.com/maps/place/Masrakh,+Bihar+841417,+India/@26.1063986,84.7929251,15z/data=!3m1!4b1!4m6!3m5!1s0x3992cfc6d0b607f3:0x9e53a2768a968545!8m2!3d26.1063994!4d84.8032248!16s%2Fm%2F0g55f56?hl=en&entry=ttu"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </div>
                {/* ************************* */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact_sec2">
                <form action="https://formspree.io/f/xjvqvwyo" method="POST">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Name*
                    </label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email*
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Email"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Subject*
                    </label>
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Your Subject Here"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Message*
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      name="textarea"
                      placeholder="Type Your Message Here"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="contact_btn">
                    Send Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    
    {/* <div className="About">
        <div className="container gx-0">
            <div className="row gx-0">
                <div className="col-12">
                    <div className="About_col">
                        <h1 className="main_head">Contact Us</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out using the form below:</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="contact-details">
        <h2>Contact Information</h2>
        <p>Name: Shivam Kumar</p>
        <p>Email: shivamkr5646@example.com</p>
        <p>Feel free to email me directly for any inquiries!</p>
      </div>
    </div> */}


    </>
  );
};

export default Contact
