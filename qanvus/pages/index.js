import "antd/dist/antd.css";
import Image from "next/image";
import { Button, Space, DatePicker, Card, Row, Col } from "antd";
import { CiCircleFilled } from "@ant-design/icons";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import logo from "../public/logo.png";
import Navbar from "./Components/HomePage/Navbar/Navbar.js";
import { SearchOutlined } from "@ant-design/icons";
import ColorLine from "./Components/HomePage/ColorLines/index";
import FirstImageWIthOverlayText from "./Components/HomePage/firstImage/index";
import TextInfo from "./Components/HomePage/TextInfo/index";
import FirstBox from "./Components/HomePage/FirstBox/index";
import CardsMainComponent from './Components/HomePage/IconAndInfo/index'; 
import ImagesBox  from  './Components/HomePage/ImgesBox/index';
import TurkeyServicesAndList from './Components/HomePage/TurnkeyServicesAndList/index';
export default function Home() {
  // console.log("Message : ", props.messages)
  const onChange = () => { };

  return (
    <>
      <div className="mainComponent">
        <div className="drawer">
          <Navbar />
        </div>
        <div className="logo">
          <Image className="imageName" src={logo} alt="logo" />
        </div>
        <div className="links">
          <p>Solutions</p>
          <p>Industries</p>
          <p>Insights</p>
          <p>Career</p>
          <p>About</p>
          <p>Schedule</p>
        </div>
        <div className="searchIcon">
          <SearchOutlined
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              marginBottom: "10px",
            }}
          />
        </div>
      </div>
      <ColorLine />
      <FirstImageWIthOverlayText />
      <TextInfo />
      <FirstBox />
     <CardsMainComponent/>
     <ImagesBox/>
     <TurkeyServicesAndList/>

      <style jsx>{`

    .mainComponent{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-around;
      box-shadow: 0 1px 4px rgb(1 1 7 / 15%);
      width:100%;
      padding:0px 10px;
      //  gap:4%
    }
    .drawer{ 
      padding-top:40px;

    }
    .logo{
      width : 200px;
      height: 0px;
      padding-top:20px
    }
  
    .logo Image{
      height:10px
    }
    .links{
      display:flex;
      flex-basis:60%;
      justify-content:space-around;
      padding:40px;
      // border:2px solid blue;
    }
    .links p{
      font-size:20px;
      color:black;
    }
    .searchIcon{
      padding-top 20px
    }
    
    @media only screen and (max-width: 767px) {
      
      .mainComponent{
        display:flex;
        // flex-wrap:wrap;
        justify-content:space-around;
        box-shadow: 0 1px 4px rgb(1 1 7 / 15%);
        width:100%;
        // padding-top:50px;
        padding-bottom:10px;
        //  gap:4%
      }
      .drawer{ 
        padding-top:30px;

      }
      .searchIcon{
        padding-top 30px
      }
      .links{
        display:none;
      }
      .logo {
        // order :2;
        padding-top:70px;
        padding-bottom:70px;
        width:100px;

        height:5px
        
      }
    }
    @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
      .drawer{ 
        padding-top:30px;

      }
      .mainComponent{
          flex-direction:column;
          
          
      }
      .links{
        
        display:flex;
        //  width : 200px;
        margin-left:20%;
        // margin-right:0%;
        padding:2px;
        border:0px solid blue;
          order:2;

      }
      .links p{
        font-size:15px;
        color:black;
        
      }
      .searchIcon{
        display:none;
      }
      
      .logo{
        // display:none;
        margin-left:10px;
        margin-bottom:10px;
          order:2;
          width:130px;


      }
      .imageName{
        height:40px
      }
    }

    
    
  `}</style>
    </>
  );
}

// ( async ()=>{

//   const api = await fetch('http://localhost:1337/sample-blogs');
//     console.log("Message : ", await  api.json())

// })()

// export async function  getStaticProps(){
//   // const res = new ApolloClient({
//   //   uri:`http://localhost:1337/graphql`,
//   //   cache: new InMemoryCache()
//   // }
//   // );
//   // const {data  } = await client.query({
//   //   query:`query{
//   //     myBlogs{
//   //       Name
//   //     }
//   //   }
//   //   `
//   // })
//    const api = await fetch('http://localhost:1337/my-blogs');
//   return {
//     props: {
//       messages:api.json
//     }
//   }
// }
