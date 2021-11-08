import {Row, Col, Button} from 'antd';
const CallScheduleBox = ()=>{
  return(
      <>
      <div style={{marginTop:"100px"}}>
     <Row>
    <Col span="11">
    <div className="vlSecond">
<p className="headingSecond">Turnkey Services at
Every Stage.</p>
<p className="TurnkeyContentSecond">We get to know your business from the inside out, keeping in mind the
ever-changing regulatory and operational landscape today and in the future.
We build your vision one step at a time with personalized services at
every stage, including: </p>
</div>
    </Col>
    <Col span="12" align="center">
    <Button
                                size="large"
                                style={{
                                    width: "250px",
                                    height: "70px",
                                    border: "2px solid black",
                                    marginTop:"25%",
                                    color: "black",
                                    fontWeight:"bold",
                                    backgroundColor: "White"
                                }}
                                shape="round"
                            >
                                Schedule a Call
                            </Button>    </Col>
     </Row>
      </div>
      <style jsx>{`
       .vlSecond {
        border-left: 6px solid green;
        // padding-bottom:2px;
        margin-left:80px;
        margin-bottom:60px;
       
      }
      .headingSecond{
         padding-top:10px;
         padding-left:3%;
         font-weight:bold;
         font-size:40px;
         padding-right:40%;

       }
       .TurnkeyContentSecond { 
        //    background-color:green;
           font-size:25px;
           padding-right:0%;
           padding-left:3%;
           padding-bottom:50px !important;
           


       }

      `}</style>

      </>
      
  )


}

export default CallScheduleBox;