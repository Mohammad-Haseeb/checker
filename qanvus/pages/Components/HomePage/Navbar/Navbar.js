// import styles from './index.module.css';
import { useState } from 'react';
import "antd/dist/antd.css";
import { MenuOutlined } from '@ant-design/icons';

// import "./index.css";
import { Drawer, Button, Space, Radio } from "antd";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setVisible(true);
  };

  const onChange = (e) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Space>
        
        <MenuOutlined  style={{ fontSize: '35px', color: 'black', fontWeight: 'bold' }}  onClick={showDrawer} />
    
      </Space>
      <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={300}
        onClose={onClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel </Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};


export default Navbar;

//  const Navbar = ()=>{
//     return(
//         <>
//      <div className="nav">
//            <input type="checkbox" id="nav-check"/>
//   <div className="nav-header">
//     <div className="nav-title">
//       JoGeek
//     </div>
   
//   </div>
//    <div className="nav-btn">
//     <label htmlFor="nav-check">
//       <span></span>
//       <span></span>
//       <span></span>
//     </label>
//   </div>
  

  
//   <div className="nav-links">
//     <a href="//github.io/jo_geek" target="_blank">Github</a>
//     <a href="http://stackoverflow.com/users/4084003/" target="_blank">Stackoverflow</a>
//     <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">LinkedIn</a>
//     <a href="https://codepen.io/jo_Geek/" target="_blank">Codepen</a>
//     <a href="https://jsfiddle.net/user/jo_Geek/" target="_blank">JsFiddle</a>
//   </div>
// </div>  
// <style jsx>{`

// body {
//   margin: 0px;
//   font-family: 'segoe ui';
// }

// .nav {
//   height: 50px;
//   width: 100%;
//   background-color: white;
//   position: relative;
// }

// .nav > .nav-header {
//   display: inline;
// }

// .nav > .nav-header > .nav-title {
//   display: inline-block;
//   font-size: 22px;
//   color: black;
//   padding: 10px 10px 10px 10px;
// }

// .nav > .nav-btn {
//   display: none;
// }

// .nav > .nav-links {
//   display: inline;
//   float: right;
//   font-size: 18px;
// }

// .nav > .nav-links > a {
//   display: inline-block;
//   padding: 13px 10px 13px 10px;
//   text-decoration: none;
//   color: black;
// }

// .nav > .nav-links > a:hover {
//   background-color: rgba(0, 0, 0, 0.3);
// }

// .nav > #nav-check {
//   display: none;
// }

// @media (max-width:600px) {
//     .nav-header{
//         display:flex;
//         // flex-direction:row-reverse;
//     }
//   .nav > .nav-btn {
//     display: inline-block;
//     position: absolute;
//     right: 0px;
//     top: 0px;
//   }
//   .nav > .nav-btn > label {
//     display: inline-block;
//     width: 50px;
//     height: 50px;
//     padding: 13px;
//   }
//   .nav > .nav-btn > label:hover,.nav  #nav-check:checked ~ .nav-btn > label {
//     background-color: rgba(0, 0, 0, 0.3);
//   }
//   .nav > .nav-btn > label > span {
//     display: block;
//     width: 25px;
//     height: 10px;
//     border-top: 2px solid #eee;
//   }
//   .nav > .nav-links {
//     position: absolute;
//     display: block;
//     width: 100%;
//     background-color: #333;
//     height: 0px;
//     transition: all 0.3s ease-in;
//     overflow-y: hidden;
//     top: 50px;
//     left: 0px;
//   }
//   .nav > .nav-links > a {
//     display: block;
//     width: 100%;
//   }
//   .nav > #nav-check:not(:checked) ~ .nav-links {
//     height: 0px;
//   }
//   .nav > #nav-check:checked ~ .nav-links {
//     height: calc(100vh - 50px);
//     overflow-y: auto;
//   }
  
// }
// `}</style> 

//         </>
//     )
// }

// export default Navbar;


