import "../downloadbtn/dbt.css";
import '../images/I.T-molosiwas-certificate.jpg'

export default function Downloadbtn({onDownload}) {
  return (
    <div>
      
    <button className="buttonDownload" onClick={onDownload}>download</button>
    </div>
  );
}
