import React from "react";
import "../education/education.css";
import certificateImage from "../../images/I.T-molosiwas-certificate.jpg";  // Import the certificate image
import Downloadbtn from "../../downloadbtn/downloadbtn";

export default function Education() {
  //to download udemy cert
  const handleDownload = () => {
    // Create a link element
    const downloadLink = document.createElement("a");

    // Set the href attribute to the certificate image URL
    downloadLink.href = certificateImage;

    // Set the download attribute with the desired file name
    downloadLink.download = "I.T-molosiwas-certificate.jpg";

    // Append the link to the body
    document.body.appendChild(downloadLink);

    // Trigger a click on the link to start the download
    downloadLink.click();

    // Remove the link from the body
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="Edu">
      <h1>EDUCATION</h1>
      <div>
        <p>
          I matriculated from Boikagong Secondary School in the year 2014, where
          I laid the foundation for my academic journey. During my time at
          Boikagong Secondary School, I gained valuable knowledge and developed
          important skills that would later contribute to my academic and
          personal growth.
        </p>
        <p>
          After completing my secondary education, I pursued further learning at
          CodeSpace Academy, where I graduated in December 2023. CodeSpace
          Academy provided me with a cutting-edge education in technology and
          coding, equipping me with the skills necessary to thrive in the
          rapidly evolving world of software development.
        </p>
        <p>
          Additionally, I have successfully completed an advanced Next.js course
          on Udemy, further enriching my skills in web development. This
          comprehensive training has equipped me with the knowledge and
          expertise to create dynamic and efficient web applications using
          Next.js. I am excited to leverage this combined educational background
          in contributing effectively to future projects and challenges in the
          field of web development.
        </p>
      </div>
      <div>
        <p>Download my Certificates below.</p>

        <div>
          
         <div>

        <h3>Udemy Certificate</h3> <Downloadbtn onDownload={handleDownload} />
         </div>
        </div>
      </div>
    </div>
  );
}
