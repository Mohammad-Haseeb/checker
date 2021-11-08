import TurkeyServicesAndListItems from './list';
import CallScheduleBox from './callScheduleBox';
import EmailSenderBox from './emailSenderBox';
import LastLogo from './lastLogo';
import ColorLine from '../ColorLines/index';
const TurkeyServicesAndList = ()=>{
    return(
        <>
        <div style={{marginTop:"100px"}}>
        <div className="vl">
<p className="heading">Turnkey Services at
Every Stage.</p>
<p className="TurnkeyContent">We get to know your business from the inside out, keeping in mind the
ever-changing regulatory and operational landscape today and in the future.
We build your vision one step at a time with personalized services at
every stage, including: </p>
</div>
        </div>
        <TurkeyServicesAndListItems/>
        <CallScheduleBox/>
        <EmailSenderBox/>
        <LastLogo/>
        <ColorLine/>
        
        <style jsx>{`
        .vl {
            border-left: 6px solid green;
            // padding-bottom:2px;
            margin-left:80px;
            margin-bottom:60px;
           
          }
          .heading{
             padding-top:10px;
             padding-left:3%;
             font-weight:bold;
             font-size:40px;
             padding-right:70%;

           }
           .TurnkeyContent { 
            //    background-color:green;
               font-size:25px;
               padding-right:50%;
               padding-left:3%;
               padding-bottom:50px !important;
               


           }
        `}</style>
        </>
    )
}

export default TurkeyServicesAndList;