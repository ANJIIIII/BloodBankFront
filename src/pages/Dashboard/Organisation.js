import React,{useEffect, useState} from 'react'
import {useSelector} from "react-redux"
import Layout from '../../components/shared/Layout/Layout'
import Api from '../../services/Api';
import moment from 'moment';

const Organisation = () => {
    // get current user
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find org records
    const getOrg = async () => {
      try {
        if (user?.role === "donar") {
          const { data } = await Api.get("/invent/get-orgnaisation");
          //   console.log(data);
          if (data?.success) {
            setData(data?.organisations);
          }
        }
        if (user?.role === "hospital") {
          const { data } = await Api.get(
            "/invent/get-orgnaisation-for-hospital"
          );
          //   console.log(data);
          if (data?.success) {
            setData(data?.organisations);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      getOrg();
    }, [user]);
  
    return (
      <Layout>
        <table className="table "  style={{ fontFamily: '"Times New Roman", Times, serif' }}>
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((record) => (
              <tr key={record._id}>
                <td>{record.organisationName}</td>
                <td>{record.email}</td>
                <td>{record.phone}</td>
                <td>{record.address}</td>
                <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    );
  };
  
  export default Organisation;
