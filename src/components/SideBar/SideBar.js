import * as React from 'react';
import style from './SideBar.module.css';



function SideBar(){
    return(

        <div className={`${style.sideBar}`}>
            <ul className='list-unstyled d-flex justify-content-around flex-column'>
                <li>
                  <a className={`${style.facebook}  fa-brands fa-facebook text-decoration-none fs-3`} target="_blank" href= "https://www.facebook.com/IAitsp" ></a>
                </li>
                <li>
                  <a className={`${style.twitter}  text-decoration-none fa-brands fa-twitter fs-3`} target="_blank" href="https://twitter.com/IAitsp"></a>
                </li>
                <li>
                  <a className={`${style.instgram}  text-decoration-none  fa-brands fa-instagram fs-3`} target="_blank" href="https://www.instagram.com/alrowadit/"></a>
                </li>
                <li>
                  <a className={`${style.linked} text-decoration-none  fa-brands fa-linkedin fs-3`} target="_blank" href="https://www.linkedin.com/company/alrowadit/"></a>
                </li>
                <li>
                  <a className={`${style.whats} text-decoration-none fa-brands fa-whatsapp fs-3`} target="_blank" href="https://wa.me/+201000290936"></a>
                </li>
            </ul>
        </div>

    )
}


export default SideBar;