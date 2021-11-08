import {Row, Col} from 'antd';
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TurkeyServicesAndListItems=()=>{
  return (
      <>
      <div style={{ background:'#00afab', paddingTop:"60px",paddingBottom:"10px"}}>
          <Row justify="center">
              <Col span="9">
                  <ul>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Managed Services</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>BPI / BPO (Business Process<br/>

<span style={{marginLeft:"30px"}}>Insourcing and Outsourcing)</span></li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Audit and Control
</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Facility Design & Optimization
</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Construction Oversight
</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Advisory</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Clinical Trials
</li>


<li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Commercial and Industrial
Formulations</li>
<li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Genetics</li>
<li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Brand Licensing & Management
</li>
                      </ul> 
                  
              </Col>
              <Col span="9">
              <ul>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Product Development
</li>
                    <li><span className="TurnKeyListIcons"
                    ><FontAwesomeIcon icon={faCircle} color="white" ></FontAwesomeIcon></span>Packaging</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>R&D</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>M&A</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Data and Analytics
</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Risk & Regulatory
</li>
                    <li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Strategic Consulting
</li>
<li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Operation</li>
<li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>ERP</li>
<li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>Alliances and Ecosystem
</li>
<li><span className="TurnKeyListIcons"><FontAwesomeIcon icon={faCircle} color="white"></FontAwesomeIcon></span>SaaMS (Software as a
Managed Services)</li>


                      </ul> 
              </Col>

          </Row >

      </div>
      <style jsx>{`
      ul{
             list-style: none;
             padding-left:6%;
    }
    li{
        padding-top:10px;
        font-size:25px;
        text-align: left;
    }
    .TurnKeyListIcons{
        font-size:10px;
        padding-right:3%;
    }
      
      `}</style>
      </>
  )

}

export default TurkeyServicesAndListItems;