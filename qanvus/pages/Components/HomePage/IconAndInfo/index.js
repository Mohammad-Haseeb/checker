import {Row, Col} from 'antd';
import CardComponent  from './card';
const CardsMainComponent= ()=>{
    return (
        <>
         <div>
        <Row justify="space-around" >
          <Col className="col" xs={{span : 24}} sm={{ span: 16 }} md={{span:12}} lg={{ span: 9}} xl={{span: 6 }} align="center"  >
            <CardComponent heading="Unparalleled Experience." />
          </Col>
          <Col xs={{span : 24}} sm={{ span: 16 }} md={{span:12}} lg={{ span: 9,  }} xl={{span: 6 }} align='center' >
            <CardComponent heading="Stay Ahead of The Curve." />
          </Col>

        </Row>
        <div className="secondRow">
        <Row justify="space-around" >
          <Col className="col" xs={{span : 24}} sm={{ span: 16 }}  lg={{ span: 9}} xl={{span: 6}} align="center"  >
            <CardComponent heading="Technology & Data at Scale." />
          </Col>
          

        </Row>
        
        </div>
        <div className="secondFullRow">
        <Row justify="space-around" >
          <Col className="col" xs={{span : 24}} sm={{ span: 16 }} md={{span:12}} lg={{ span: 9}} xl={{span: 6 }} align="center"  >
            <CardComponent heading="Avoid Operational Nightmares."/>
          </Col>
          <Col xs={{span : 24}} sm={{ span: 16 }} lg={{ span: 9,  }} md={{span:12}} xl={{span: 6 }} align='center' >
            <CardComponent  heading="Strategic Guidance." />
          </Col>

        </Row>
        </div>
        <div className="finalRow">
        <Row justify="space-around" >
          <Col className="col" sm={{ span: 16 }}  lg={{ span: 9}} xl={{span: 6 }} align="center"  >
            <CardComponent heading="Technology & Data at Scale."/>
          </Col>
          

        </Row>
        
        </div>

                {/*  </div>
                  <div  className="secondRow">
        <Row justify="center" >
          <Col className="col" xs={{ span: 24 }} lg={{ span:9 }} md={{spance: 10}} align="center"  >
            <CardComponent />
          </Col>
          <Col xs={{ span: 24 }} lg={{ span: 9 }} align='center' >
            <CardComponent />
          </Col>
          <div className="lastRowForTablet">
         <Row justify="center" >
          <Col xs={{ span: 24 }}   lg={{ span: 9 }}  align="center"  >
            <CardComponent />
          </Col>
        </Row>
                  </div>
        </Row>
        </div> */}
      </div>

      {/* xs	screen < 576px and also default setting, could be a span value or an object containing above props	number | object	-	
sm	screen ≥ 576px, could be a span value or an object containing above props	number | object	-	
md	screen ≥ 768px, could be a span value or an object containing above props	number | object	-	
lg	screen ≥ 992px, could be a span value or an object containing above props	number | object	-	
xl	screen ≥ 1200px, could be a span value or an object containing above props	number | object	-	
xxl */}



      <style jsx>{`
      .rowDIsplayControllerForLg{
          margin-top:-90px;
      }
      .secondRow{
          margin-top:-100px;
      }
      .secondFullRow{
          margin-top:-110px;
          
      }
      .finalRow{
          display:none;
      }
      @media only screen and (max-width: 767px) {
        .secondRow{
            display:none;
        } 
        .secondFullRow{
            margin-top:30px;
        }
        .finalRow{
            display:unset;
        }
      }
      @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
       .secondRow{
           display:none;
       }
       .secondFullRow{
        margin-top:10px;
    }
    .finalRow{
        display:unset;
    }
    }
      

      `}</style>
      {/* lg={{span:6}} xs={{span:12}} sm={{span:24}} */}
        </>
    )
}

export default CardsMainComponent;