import { Col, Row, Image, Button } from 'antd';
// import { faGoogle } from '@fortawesome/free-brand-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ImagesBox = () => {
    
    return (
        <>
            <Row display="flex" >
                <Col md={{ span: 12 }} xl={{ span: 10 }} sm={{ span: 24 }} xs={{ span: 24 }} >

                    <Row display="flex" justify="space-between">

                        <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} ><ImageDemo /></Col>
                        <Col md={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }} sm={{ span: 11, offset: 1 }} xs={{ span: 11, offset: 1 }}><ImageDemo /></Col>

                        <Col md={{ span: 12 }} xl={{ span: 12 }} sm={{ span: 12 }} xs={{ span: 12 }} ><ImageDemo /></Col>
                        <Col md={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }} sm={{ span: 11, offset: 1 }} xs={{ span: 11, offset: 1 }}><ImageDemo /></Col>



                    </Row>
                    <div className="secondSectionOFGallery" >
                        <Row display="flex" justify="space-between">

                            <Col md={{ span: 12 }} xl={{ span: 12 }}  ><ImageDemo /></Col>
                            <Col md={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }}><ImageDemo /></Col>

                            <Col md={{ span: 12 }} xl={{ span: 12 }}  ><ImageDemo /></Col>
                            <Col md={{ span: 11, offset: 1 }} xl={{ span: 11, offset: 1 }}><ImageDemo /></Col>


                        </Row>
                    </div>
                    {/* xs	
                screen < 576px and also default setting, could be a span value or an object containing above props	number | object	-	
sm	screen ≥ 576px, could be a span value or an object containing above props	number | object	-	
md	screen ≥ 768px, could be a span value or an object containing above props	number | object	-	
lg	screen ≥ 992px, could be a span value or an object containing above props	number | object	-	
xl	screen ≥ 1200px, could be a span value or an object containing above props	number | object	-	
xxl	screen ≥ 1600px, could be a span value or an object containing above props	            */}



                </Col>
                <Col md={{ span: 11, offset: 1 }} xl={{ span: 13, offset: 1 }} sm={{ span: 24 }} xs={{ span: 24 }}     >

                    <Col span="24" style={{ marginTop: "13" }}>
                        <Row justify="space-around">
                            <Col md={{ span: 18 }} xl={{ span: 16 }} sm={{ span: 16 }} xs={{ span: 16 }}>
                                <div className="mainHeadingInImageGallery">   <p>Qanvus Has Done It All <br />
                                    —How We Elevate Your Business.</p>
                                </div>
                                <div className="mainParagraphInImageGallery">
                                    <p>At Qanvus, we’re with you every step
                                        of the way. Whether cultivation or retail,
                                        distribution and beyond —nothing is off
                                        the table, including:</p>
                                </div>

                            </Col>
                            <Col md={{ span: 6 }} xl={{ span: 6 }} sm={{ span: 8 }} xs={{ span: 8 }} align="right" ><div className="lineWrapper"><div className="verticleLine"></div></div> </Col>

                        </Row>
                    </Col>
                    <Col span="24" className="UlElements" style={{ backgroundColor: "MediumSeaGreen" , height:"56%"  ,paddingBottom:"50px", marginTop: "2%"}}  >
                        <div>
                            <p className="solutionTitle">SOLTUTIONS</p>
                            <ul>


                                <li> <span> <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon>  </span><span className="liContent">Technology</span></li>
                                <li> <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon> <span className="liContent">Cultivation</span></li>
                                <li> <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon> <span className="liContent">Processing</span></li>
                                <li> <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon> <span className="liContent">Testing</span></li>
                                <li>   <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon> <span className="liContent">Distribution</span></li>
                                <li> <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon> <span className="liContent">Retail</span></li>
                                <li> <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon> <span className="liContent">Public Sector</span></li>
                                <li> <FontAwesomeIcon icon={faPlay} color="white"></FontAwesomeIcon> <span className="liContent">Soverign Sector</span></li>
                                <li>  <span className="liContent"><Button
                                size="large"
                                style={{
                                    width: "250px",
                                    height: "70px",
                                    border: "2px solid white",
                                    color: "white",
                                    backgroundColor: "MediumSeaGreen"
                                }}
                                shape="round"
                            >
                                Default
                            </Button></span></li>





                            </ul>
                        </div>

                    </Col>


                </Col>


            </Row>
            <style jsx>{`
           
         
       ul{
           list-style:none;
           padding-left:10%;
           padding-bottom:10%;
           

       }
       li{
           padding:4%;
           padding-top:1%
       }
          
         .liContent{
             padding-left:50px;
             color: white;
         } 
         .solutionTitle{
             padding-left:18%;
             padding-top:30px;
             oa
             text-weight: bold;
             font-size:20px;
             color:white;
             
         }
          

        .mainHeadingInImageGallery {
            padding-top:10%;
            padding-left:15%;

            font-size:40px;
            font-weight:bold;


        }

        .mainParagraphInImageGallery{
            padding-top:02%;
            padding-left:15%;

            font-size:31px;
            

        }
        .lineWrapper{
            margin-top:5%;
            height:90%;
            width:10px;
            margin-bottom:5%;
            margin-right:5%;
            background-color:yellow;
        }
       
        @media only screen and (max-width: 767px) {
            .secondSectionOFGallery{
                display:none !important;
            }
            .mainHeadingInImageGallery {
                padding-top:10%;
                padding-left:10%;
    
                font-size:20px;
                font-weight:bold;
    
    
            }
            .mainParagraphInImageGallery{
                padding-top:02%;
                padding-left:10%;
    
                font-size:20px;
                
    
            }
            .lineWrapper{
                margin-top:5%;
                height:90%;
                width:10px;
                margin-bottom:5%;
                margin-right:5%;
                background-color:yellow;
            }
        }
        @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
            
            .secondSectionOFGallery{
                
            }
            .mainHeadingInImageGallery {
                padding-top:10%;
                padding-left:10%;
    
                font-size:20px;
                font-weight:bold;
    
    
            }
            .mainParagraphInImageGallery{
                padding-top:02%;
                padding-left:10%;
    
                font-size:20px;
                
    
            }
            .lineWrapper{
                padding-right:10px;
            }
            
        }
        `}</style>
        </>
    )
}

export default ImagesBox;

function ImageDemo() {
    return (
        <>
            <div className="imageChecker">Heelos</div>
            <style jsx>{`
     .imageChecker{
         height:350px !important;
         background-color:grey;
         width:100% !important;
         margin-top:10px;
        //  margin-left:2px;
     }
   
            @media only screen and  (max-width: 1200px) and (min-width: 768px)  {
                .imageChecker{
                    height:250px !important;
                }
            }
           
           

     `}</style>
        </>

    )
}
        //   fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="



