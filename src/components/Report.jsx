


    
function Report() {
    const reportData = getDummyData();

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Sr.no</th>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>DOB</th>
                        <th>Email</th>
                        <th>CurrentAddress</th>
                        <th>HighestEducation</th>
                        <th>YearOfPassing</th>


                    </tr>
                </thead>
            </table>

        </>
    );
}

const getDummyData = () => [
    { name: "Vikky", gender: "M", dob: new Date().toISOString().split("T")[0], email: "emailVikky@gmail.com", currentAddress: "C Block", highestEducation: "MA", yearOfPassing: "2022", skills: "Good" },
    { name: "Vishal", gender: "M", dob: new Date().toISOString().split("T")[0], email: "email@gmail.com", currentAddress: "C Block", highestEducation: "MCA", yearOfPassing: "2024", skills: "Ok" }
]



export default Report;
