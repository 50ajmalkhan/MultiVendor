import React  from 'react'; 
import { Jumbotron } from 'react-bootstrap';
import Layout from '../../components/Layout';


const Home=(props)=>{
    return(
        <Layout>
            <Jumbotron className="text-center" style={{margin:"5rem",background:"#fff"}}>
               <h1> Welcome to Admin Dashboard </h1>
               <p>Digital dashboards allow managers to monitor the contribution of the various departments in their organization. In addition they enable “rolling up” of information to present a consolidated view across an organisation. To gauge exactly how well an organization is performing overall, digital dashboards allow you to capture and report specific data points from each department within the organization.</p>
               
            </Jumbotron>
        </Layout>
    )};


    export default Home;