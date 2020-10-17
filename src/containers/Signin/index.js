import React  from 'react'; 
import Layout from "../../components/Layout";
import Input from "../../components/UI/Input"
import {Container,Form,Row,Col,Button} from 'react-bootstrap';
const Signin=(props)=>{
    return(
        
           <Layout>
               <Container>
                 <Row style={{marginTop:"50px"}}>
                     <Col md={{span:6,offset:3}}>
                     <Form>
                     <Input 
                   label="Email" 
                   placeholder="email"
                   value=""
                   type="email"
                   onChange={()=>{}}
                   />

            <Input 
                   label="password" 
                   placeholder="password"
                   value=""
                   type="password"
                   onChange={()=>{}}
                   />
                 <Button variant="primary" type="submit">
                     Submit
                 </Button>
                 
         </Form>
                     </Col>
                 </Row>
                 
                        
               </Container>
           </Layout>
       
    )};


    export default Signin;