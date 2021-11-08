import quotation from "./../../../../public/quotation.PNG";
import { Button, Radio } from "antd";

const TextInfo = () => {
    return (
        <>
            <div className="mainTextInfo">
                <p className="mainTextInfoPara">Hear Directly From Our Clients</p>
                <div className="whiteLine">
                    <hr className="new1" />
                </div>
                <div className="internalTextInfo">
                    <div className="internalFirst">
                        <div className="quoteImage">
                            <img src={quotation.src} />
                        </div>
                        <div>
                            <h1 className="message">
                                Lorem ipsum dolor sit amet, consectetuer
                                <br />
                                adipiscing elit, sed diam nonummy nibh
                                <br />
                                euismod tincidunt ut laoreet dolore magna <br />
                                aliquam erat volutpat.{" "}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
          .mainTextInfo {
              background-color: #0d1720;
              width:100%;
            //   height : 400px;
              color:white;
              padding: 30px 0px;
            }
            .mainTextInfoPara{
                text-align: center;
                padding-top:0%;
                font-weight:bolder;
                font-size:40px;
            }
            .whiteLine{
                display:flex;
                justify-content: center;
            }
            hr.new1 {
                // border: 4px solid white;
                width:200px;
              }
              .internalTextInfo{
                //   margin-left : 20%;
                //   border :1px solid blue;
                  width : 100%
              }
              .internalFirst{
                    display:flex;
                    justify-content: center;
                    // padding-left :30px;
              }
              h1.message{
                  padding-top:40px;
                  text-align:center;
                  color:white;
              }
              @media only screen and (max-width: 767px) {
                   
                .internalTextInfo{
                    //   border :1px solid green;
                      width : 100%;
                      display: flex;
                      justify-content:center;
                  }
                  .internalFirst{
                        display:inline-block;
                  }
                  h1.message{
                      padding-top:30px;
                      font-weight:10;
                      line-height:normal;
                      text-align:center;
                      color:white;
                  }
                  .mainTextInfoPara{
                    text-align: center;
                    padding-top:0%;
                    font-size:30px;
                }
              
            }

              @media only screen and  (max-width: 863px) and (min-width: 768px)  {
                .internalFirst{
                    justify-content: start;
                }
                .internalTextInfo{
                    //   margin-left : 20%;
                    //   border :1px solid blue;
                      padding-left:0px; 
                      width : 100%
                  }
                  .quoteImage{
                      margin-left : 60px;
                  }
                

       `}</style>
        </>
    );
};

export default TextInfo;
