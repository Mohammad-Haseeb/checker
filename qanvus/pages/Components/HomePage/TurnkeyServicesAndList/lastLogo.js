import logo from './../../../../public/logo.png'
import { Col, Row } from 'antd';
const LastLogo = () => {
    return (
        <>
            <Row justify="center">
                <Col align="center" span="24" style={{ marginTop: "100px", marginBottom: "100px" }}>
                    <img src={logo.src} alt="logo" />
                </Col>
                <Col>      
                    <p>© Copyright Qanvus. All Rights Reserved</p>
                    
                </Col>
            </Row>
        </>
    )
}
export default LastLogo;