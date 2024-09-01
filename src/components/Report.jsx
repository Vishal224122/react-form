import { useEffect, useState } from "react";
import axios from "axios";
function Report() {
    const url = "http://localhost:5000/report"
    const [report, setReport] = useState([])
    const data = [{
        "id": 16,
        "name": "ABC XYZ",
        "gender": "M",
        "dob": "2000-12-24T18:30:00.000Z",
        "mobile": "9876543210",
        "email": "newid@gmail.com",
        "current_address": "Noida, UP, India",
        "highest_education": "PHD",
        "year_of_passing": 2005,
        "skills": "Web Development, App Dev.",
        "submission_date": "2024-08-30T08:36:53.283Z"
    },
    {
        "id": 17,
        "name": "Vishal",
        "gender": "M",
        "dob": "2000-12-24T18:30:00.000Z",
        "mobile": "9876543210",
        "email": "vishal@gmail.com",
        "current_address": "Noida, UP, India",
        "highest_education": "PHD",
        "year_of_passing": 2005,
        "skills": "Web Development, App Dev.",
        "submission_date": "2024-08-30T08:37:14.153Z"
    }
    ];
    
    useEffect(() => {
        const fetchData = async () => {
        
          try {
            const result = await axios.get(url);
            if(result!=null)
                setReport(result.data)
            else
            alert("error in fetching data")
          } catch (error) {
           console.log(error);
           
          }
        };
      
        fetchData();

      }, []);

    return (
        <>
            <table border={1} className="table">
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Mobile no.</th>
                        <th>Email iD</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Date of submission</th>
                        <th>Profile ID</th>
                        <th> Education</th>
                        <th>Year Of Passing</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                {
                    data.map((e, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{e.name}</td>
                                <td>{e.mobile}</td>
                                <td>{e.email}</td>
                                <td>{e.gender}</td>
                                <td>{e.current_address}</td>
                                <td>{e.submission_date}</td>
                                <td>{e.id}</td>
                                <td>{e.highest_education}</td>
                                <td>{e.year_of_passing}</td>
                                <td>{e.skills}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </>
    );
}

export default Report;
