import { Row, Col, Input, Button } from 'antd';
const EmailSenderBox = () => {
    return (
        <>
            <div style={{backgroundColor:'#040503',color:'white', marginTop:'30px',paddingTop:'40px', paddingBottom:'40px'}}>
                <Row justify="center">
                    <Col span="24" align="center" >
                        <h1 style={{color:'white'}}>WANT TO STAY </h1>
                        <h2 style={{color:'white',marginTop:"-15px"}}>AHEAD OF THE CURVE</h2>

                        <p style={{marginTop:"50px",fontSize:"30px"}}>Subscribe below for our latest insights and happenings.</p>
                        <p style={{marginTop:"100px",fontSize:"20px"}}>Subscribe</p>

                        <Input
                            size="small"
                            style={{
                                width: "250px", borderRadius: "25px", width: "250px",
                                height: "50px",
                                backgroundColor:"black",
                                paddingLeft:"30px"

                            }}

                            placeholder="Basic usage" />

                        <Button
                            size="large"
                            style={{
                                width: "200px",
                                height: "50px",
                                border: "2px solid black",
                                marginTop: "",
                                color: "black",
                                fontWeight: "bold",
                                backgroundColor: "White",
                                marginLeft:"10px"

                            }}
                            
                            shape="round">
                            Email Send
                        </Button>


                    </Col>
                </Row>

            </div>
        </>
    )
}

export default EmailSenderBox;