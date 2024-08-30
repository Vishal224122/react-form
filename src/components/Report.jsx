import { useEffect, useState } from "react";
import axios from "axios";
function Report() {
    const url = "http://localhost:5000/report"
    const [report, setReport] = useState([])
    let srNo = 1;
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
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            if (response != null)
                setReport(response.data)
            else
                alert("error when loading tha data")
        } catch (error) { }
    }

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Mobile no.</th>
                        <th>Email iD</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Dtae of submission</th>
                        <th>Profile ID</th>
                        <th> Education</th>
                        <th>Year Of Passing</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                {
                    report.map((e, index) => {
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
