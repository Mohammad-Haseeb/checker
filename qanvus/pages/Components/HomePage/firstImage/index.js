import Image from "next/image";
import Ocean from "./../../../../public/Ocean.jpg";
import { Button, Radio } from "antd";

import "antd/dist/antd.css";

const FirstImageWIthOverlayText = () => {
  return (
    <>
      <div className="test2" style={{ backgroundImage: `url(${Ocean.src})` }}>
        <div>
          <div style={{ display: "flex" }}>
            <div className="vl">
              <p className="heading">
                Qanvus Is Your One Stop Shop To Take Your Cannabis Business To
                New Heights.
              </p>
              <Button
                type="default"
                className="btn"
                size="large"
                style={{
                  marginLeft: "20px",
                  marginTop: "30px",
                  width: "200px",
                  height: "60px",
                  border: "3px solid white",
                }}
                shape="round"
                ghost
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .test2 {
          width: 100%;
          height: 600px;
          min-height: 600px;
          max-height: auto;
          background-repeat: no-repeat;
          background-size: cover;
          position: relative;
        }

        .test2 div:first-child {
          // background-color: rgba(0,0,0,0.6);
          color: #fff;
          // display: inline;
          color: #fff;
          // font-family: sans-serif;
          // text-align: center;
          // text-transform:capit:capitalize;
          width: 500px;
          position: absolute;
          top: 10%;
          left: 5%;
          // transform: translate(-50%, -50%);
        }
        .vl {
          border-left: 8px solid red;
          height: 400px;
        }
        p.heading {
          margin-top: 50px;
          margin-left: 20px;
          font-size: 30px;
           width:90%;
          font-weight: bold;
        }
        @media only screen and (max-width: 767px) {
          .test2 div:first-child {
            // background-color: rgba(0,0,0,0.6);
            color: black;
            // display: inline;
            color: #fff;
            // font-family: sans-serif;
            // text-align: center;
            text-transform: uppercase;
            width: 250px;
            position: absolute;
            top: 10%;
            left: 5%;
            // transform: translate(-50%, -50%);
          }
          .vl {
            border-left: 6px solid red;
            height: 500px;
          }
          p.heading {
            margin-top: 70px;
            margin-left: 10px;
            font-size: 25px;
            font-weight: bold;
          }
        }
      `}</style>
    </>
  );
};

export default FirstImageWIthOverlayText;
