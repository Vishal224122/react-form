import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
function Form() {
    const data = { name: "", gender: "", dob: new Date(), email: "", currentAddress: "", highestEducation: "", yearOfPassing: "", skills: "", }
    const [inputData, setInputData] = useState(data)
    const [formErrors, setFormErrors] = useState({});

    function handeleData(e) {
        setInputData({ ...inputData, [e.target.name]: e.target.value })
        console.log(inputData)
    }

    function validate() {
        const errors = {};

        if (!inputData.name) {
            errors.name = "Name is required"
        }
        if (!inputData.currentAddress) {
            errors.currentAddress = "Current address is required"
        }
        if (!inputData.highestEducation) {
            errors.highestEducation = "Highest education is required"
        }

        if (!inputData.email) {
            errors.email = "Email is required"
        } else if (!inputData.email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
            errors.email = "Email is not valid"
        }

        setFormErrors(errors);
        console.log("validate", errors)

        return Object.keys(errors).length == 0
    }


    function handleSubmit(e) {
        e.preventDefault();
        if (!validate()) return;


        // axios.post("https://httpbin.org/post", inputData)
        axios.post("/submit", inputData)
            .then((response) => {
                console.log(response);

            })
            .catch((errors) => {
                console.log(errors);
            });


        console.log(inputData)
    }

    return (


        <div>
            <div className="banner">
                <h2 className="banner-text">Become a Member</h2>
            </div>

            <div className="main-container">
                <h1>Create Profile</h1>
            </div>
            <form className="container" onSubmit={handleSubmit}>
                <div className="header">
                    <h2>Complete Your Profile</h2>

                    <div className="profile-text">Submit your detail to create profile</div>
                </div>

                <div className="form-control">
                    <div className="input-label">Name</div>
                    <input type="text" placeholder="Enter your Full Name" name="name" value={inputData.name} onChange={handeleData} />
                    <div className="error-msg">{formErrors.name}</div>
                </div>
                <div className="form-control">
                    <div className="input-label">Gender</div>

                    <input type="text" placeholder="- -" name="gender" value={inputData.gender} onChange={handeleData} />
                </div>
                <div className="form-control">
                    <div className="input-label">Date of birth</div>
                    <DatePicker selected={inputData.dob} onChange={(date) => {
                        setInputData({ ...inputData, dob: date.toISOString().split("T")[0] })
                    }}></DatePicker>

                </div>
                <div className="form-control">
                    <div className="input-label">Mobile no.</div>
                    <input type="tel" placeholder="1234567890" name="mobile" value={inputData.mobile} onChange={handeleData}></input>
                </div>
                <div className="form-control">
                    <div className="input-label">Email Id</div>
                    <input type="email" placeholder="abc@gmail.com" name="email" value={inputData.email} onChange={handeleData}></input>
                    <div className="error-msg">{formErrors.email}</div>
                </div>
                <div className="form-control">
                    <div className="input-label">Current address</div>
                    <input type="text" placeholder="abc-12" name="currentAddress" value={inputData.currentAddress} onChange={handeleData} />
                    <div className="error-msg">{formErrors.currentAddress}</div>
                </div>
                <div className="form-control">
                    <div className="input-label">Highest Education</div>

                    <input type="text" placeholder="- -" name="highestEducation" value={inputData.highestEducation} onChange={handeleData}></input>
                    <div className="error-msg">{formErrors.highestEducation}</div>


                </div>
                <div className="form-control">
                    <div className="input-label">Year of Passing</div>

                    <input type="text" placeholder="- -" name="yearOfPassing" value={inputData.yearOfPassing} onChange={handeleData}></input>

                </div>
                <div className="form-control">
                    <div className="input-label">Skills</div>

                    <input id="skills" type="text" placeholder="- -" name="skills" value={inputData.skills} onChange={handeleData}></input>

                </div>

                <div>
                    <button type="submit"
                        onClick={handleSubmit}
                    >Submit</button>
                </div>

            </form >
        </div >

    )
}
export default Form 