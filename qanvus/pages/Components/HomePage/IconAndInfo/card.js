import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import FirstIcons from './../../../../public/firstIcon.PNG';
const { Meta } = Card;


const CardComponent = ({heading})=>{
    return (
        <>
         <div>
         <img
        alt="example"
        src={FirstIcons.src}
        style={{width:" auto"}}
      />
    <h2>{heading}</h2>
       <p style={{textAlign:"center", padding:"20px"}}>We bring decades of in-the-trenches experience
      with Cannabis & Hemp businesses at every stage.
      From cultivation to manufacturing multi-state and
      global operations —we help you maneuver the maze
      of regulation and state by state compliance to shortcut
      your path to operational excellence.
      Hello, freedom."</p>
  </div>
  <style jsx>{`
        // //    .cardInfoCenter{
        // //       padding:"20px";
        // //       text-align: center;

        // // }
                   
        //            @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
        //         //     .cardInfoCenter{
        //         //         padding:"0px";
        //         //         text-align: center;
          
        //         //   }
        //            }  
  
  `}</style>
        </>
    )
}

export default CardComponent;