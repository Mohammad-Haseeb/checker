// @@ -0,0 +1,218 @@s
import { Row, Col, Divider, Image, Button } from "antd";
import humanWithTable from "./../../../../public/humanWithTablet.jpeg";
const FirstBox = () => {
    console.log("OH", humanWithTable.src);
    return (
        <>
            <div className="mainContainer">
                <div className="ImagesBox">
                    <img className="imageSettting" src={humanWithTable.src} />
                </div>
                <div className="secondBox">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <p className="firstHeading">
                                The ever-changing regulatory demands on the Cannabis industry
                                can make or break businesses.
                            </p>
                        </div>
                        <div>
                            <p className="secondHeading">
                                Qanvus provides tailored regulatory, operational, and
                                technological strategic solutions to help your business stay
                                ahead of the curve and achieve long-term viability
                            </p>
                        </div>
                        <div className="btn">
                            <Button
                                size="large"
                                style={{
                                    width: "170px",
                                    height: "50px",
                                    border: "2px solid black",
                                    color: "black",
                                }}
                                shape="round"
                            >
                                Default
                            </Button>
                        </div>
                    </div>
                    <div className="lineHeight">
                        <div
                            style={{ width: "15px", height: "90%", backgroundColor: "green" }}
                        ></div>
                    </div>
                </div>
            </div>

            <div className="mainContainer">
                <div className="secondBox">
                    <div className="lineHeight">
                        <div
                            style={{ width: "15px", height: "90%", backgroundColor: "green" }}
                        ></div>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <div>
                            <p className="firstHeading">
                                The ever-changing regulatory demands on the Cannabis industry
                                can make or break businesses.
                            </p>
                        </div>
                        <div>
                            <p className="secondHeading">
                                Qanvus provides tailored regulatory, operational, and
                                technological strategic solutions to help your business stay
                                ahead of the curve and achieve long-term viability
                            </p>
                        </div>
                        <div className="btn">
                            <Button
                                size="large"
                                style={{
                                    width: "170px",
                                    height: "50px",
                                    border: "2px solid black",
                                    color: "black",
                                }}
                                shape="round"
                            >
                                Default
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="ImagesBox">
                    <img className="imageSettting" src={humanWithTable.src} />
                </div>
            </div>

            <style jsx>{`
        .mainContainer {
          margin-top: 50px;
          display: flex;
        //   flex-wrap: wrap;
        }
        .ImagesBox {
          flex-basis: 50%;
          height:100%;
          background-color:white;
        }
        .secondBox {
            flex-basis: 50%;
          display: flex;
          justify-content:space-around;
          padding:30px;
        }
        .imageSettting{
            width:100%;
            object-fit:fill;
        }
        .firstHeading{
             margin-left:70px;
             margin-right:40px;
             text-weight: bold;
             font-size:45px;
             font-weight: bolder;
        }
        .secondHeading{
            margin-left:70px;
            margin-right:10px !important;
            // text-weight: bold;
            font-size:30px;
            // font-weight: bolder;
        }
        .btn{
            margin-left:70px;
        }
        .lineHeight{
            margin-top:10px;
            margin-right:40px;
        }
        @media only screen and (max-width: 767px) {
            .mainContainer {
                margin-top: 0px;
                display: flex;
              flex-direction: column;
              }
              .ImagesBox {
                flex-basis: 50%;
                height:300px;
              }
              .secondBox {
                  flex-basis: 50%;
                display: flex;
                justify-content:space-around;
                padding:10px;
              }
              .firstHeading{
                   margin-left:10px;
                   margin-right:5px;
                   font-size:20px;
                   font-weight: bold;
              }
              .secondHeading{
                  margin-left:05px;
                  margin-right:10px !important;
                  // text-weight: bold;
                  font-size:20px;
                  // font-weight: bolder;
              }
              .btn{
                  margin-left:10px;
              }
              .lineHeight{
                  margin-top:10px;
                  margin-right:0px;

              }
              .imageSettting{
                width:100%;
                height:400px !important;
                object-fit:fill;

              }
             

        }
        @media only screen and  (max-width: 1800px) and (min-width: 768px)  {
            .firstHeading{
                margin-left:10px;
                margin-right:20px;
                text-weight: bold;
                font-size:30px;
                font-weight: bolder;
                line-height: normal;
            }
           .secondHeading{
               margin-left:10px;
               margin-right:10px !important;
               // text-weight: bold;
               font-size:20px;
               // font-weight: bolder;
               line-height: normal;

           }
           .ImagesBox{
            height:700px !important;

           }
           .imageSettting{
                width:100%;
                height: 700px;
                object-fit:fill;
                object-position:center;

              }
           .btn{
               margin-left:10px;
           }
         
        }
      `}</style>
        </>
    );
};

export default FirstBox;