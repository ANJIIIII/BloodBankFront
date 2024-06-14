import React ,{useEffect, useState} from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Api from '../../services/Api'
import moment from 'moment';

const Donar = () => {
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = async () => {
      try {
        const { data } = await Api.get("/invent/get-donar");
        //   console.log(data);
        if (data?.success) {
          setData(data?.donars);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getDonars();
    }, []);
  
    return (
      <Layout>
        <table className="table "  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.name || record.organisationName + " (ORG)"}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    );
  };
  
  export default Donar;