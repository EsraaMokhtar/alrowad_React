import * as React from 'react';
import style from './Apply.module.css';
import Navbar from '../FixedNavbar/FixedNavbar';
import SideBar from '../SideBar/SideBar';
import { useState , useEffect } from 'react';
import Swal from "sweetalert2";
import axios from 'axios';
import '../../index.css';
import { useTranslation } from 'react-i18next';
import img from '../../image/imgUpload.png';
import { useParams } from 'react-router-dom';


function Apply(){

  const { t } = useTranslation();
  let { id } = useParams();

  const [name,setName] =  useState('');
  const [email,setEmail] =  useState('');
  const [phone,setPhone] =  useState('');
  const [message,setMessage] =  useState('');
  
  // file

  const [typetitle, setTypetitle] = useState("");
  const [typeName, setTypeName] = useState("");

  const getData = async ()=> {
      await axios.get(`https://php-mail.alrowadit.com/api/work_type/${id}`).then(response => {
        setTypetitle(response.data.title);
        setTypeName(response.data.type);
      }).catch(error => {
          console.log(error);
      });
  }


  useEffect(() => {
      getData();
  },[]);


  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);

    var a = document.getElementById('pdfFile');
    var fileLabel = document.getElementById('fileLabel');
    if(a.value == ""){
        fileLabel.innerHTML = "Choose file";
    }else{
        var theSplit = a.value.split('\\');
        fileLabel.innerHTML = theSplit[theSplit.length-1];
    }
   
  };


  // end file
  function showAlert(message,icon){
    Swal.fire({
        title: message,
        icon: icon,
        showConfirmButton: false,
        timer: 2000
      });
  } 

  async function sendData(e){
    e.preventDefault();

    const formData = new FormData();
    
    formData.append('file', selectedFile);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('description', message);
    formData.append('type_id', id);

    if(name != ""&& email != ""&& message != ""&& phone != "" , selectedFile != ""){

      console.log(formData);
        await axios.post(`https://php-mail.alrowadit.com/api/work_application`,formData).then(response => {
            showAlert(t("Work_Application_Created_Successfully"),'success'); 
            e.target.reset();
           })
        .catch(error => {
          showAlert(t("too_many"), 'error');
          e.target.reset();
        });

      }else{
        showAlert(t("please_fill"), 'error');
      }
  }


    return(
    <section className={`${style.layout} overflow-auto`}>
       <Navbar />
        <SideBar />
        <div className={`${style.inner} container mt-5 `}>
          <div className=" d-flex justify-content-center align-items-center text-center  ">
            <div className= {`${style.caption} mt-5`}>
                <h2 className=" m-0 text-capitalize mt-5">{t(`${typetitle}`)}</h2>
                <p className='text-white text-capitalize mt-2'>{t(`${typeName}`)}</p>

                  <form onSubmit={sendData}>
                    <div className={`${style.one} form-row`}>
                      <div className="col">
                        <input type="text" placeholder={t("Name")}  onChange={(e)=> { setName(e.target.value)}}/>
                      </div>
                      <div className="col">
                        <input type="email" placeholder={t("E-mail")}onChange={(e)=> { setEmail(e.target.value)}}/>
                      </div>

                      <div className="col">
                        <input type="text" placeholder={t("phone")}  onChange={(e)=> { setPhone(e.target.value)}}/>
                      </div>

                      <div className="col position-relative">
                        <input className='d-none' type="file" id="pdfFile" onChange={handleFileInputChange} />
                        <label className={`${style.insteadFile}`} htmlFor="pdfFile">
                          <span className='cursor-pointer' id="fileLabel">{t("Submit_your_CV")}</span>
                          <img className={`${style.upload}`} onChange={handleFileInputChange} src={img} width="35px" alt="" />
                        </label>
                      </div>

                      <div className="col">
                        <input type="text" placeholder={t("Why_do_you_want")}  onChange={(e)=> { setMessage(e.target.value)}} />
                      </div>

                    </div>

                    <div className='d-flex justify-content-center mt-5'>
                      <button  className={` btn mb-5 ${style.submit}`} type="submit">{t("send")}</button>
                    </div>

                </form>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Apply;
