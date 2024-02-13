import React, { useState } from "react";
import {calculateInvestmentResults, formatter} from "../util/investment.js"

const UserInput = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1200,
    annualInvestment: 1500,
    expectedReturn: 6,
    duration: 10,
  });

  const isDurationValid = userInput.duration >= 1;

//   const [displayUserValue, setDisplayUserValue] = useState();

  const handleInput = (e) => {
    console.log(e.target.value);
    setUserInput({ ...userInput, [e.target.name]: +e.target.value });
  };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // setDisplayUserValue(userInput);
//     // setUserInput({
//     //   initialInvestment: "",
//     //   annualInvestment: "",
//     //   expectedReturn: "",
//     //   duration: "",
//     // });

//     console.log("hi");
//   };

  // results

  const resultData = calculateInvestmentResults(userInput);
  console.log(userInput);
  console.log(resultData);

  return (
    <>
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor=""> Initial Investment</label>
          <input
            type="number"
            required
            onChange={handleInput}
            name="initialInvestment"
            value={userInput.initialInvestment}
          />
        </p>

        <p>
          <label htmlFor=""> Annual Investment</label>
          <input
            type="number"
            required
            onChange={handleInput}
            name="annualInvestment"
            value={userInput.annualInvestment}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="">Expected Return</label>
          <input
            type="number"
            required
            onChange={handleInput}
            name="expectedReturn"
            value={userInput.expectedReturn}
          />
        </p>

        <p>
          <label htmlFor=""> Duration</label>
          <input
            type="number"
            required
            onChange={handleInput}
            name="duration"
            value={userInput.duration}
          />
        </p>
      </div>
      {/* <button onClick={handleSubmit}>submit</button> */}
    </section>


          {/* <p>{displayUserValue && displayUserValue.initialInvestment}</p>
          <p>hjvmhgvhgvhgvchngv</p> */}

       
            
            {
                !isDurationValid && <p className="center">Please enter duration grater than 0</p>
            }

            {
                isDurationValid && 
                <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>

                <tbody>
                {
                    resultData.map((ele, index) => {

                        const totalInterest = (ele.valueEndOfYear - ele.annualInvestment * ele.year) - userInput.initialInvestment

                        const totalAmountInvested = ele.valueEndOfYear - totalInterest

                        return <tr key={index}>
                            <td>{ele.year}</td>
                            <td>{formatter.format(ele.valueEndOfYear)}</td>
                            <td>{formatter.format(ele.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    })
                }
            </tbody>
            </table>
            }

           
          
</>
  );
};

export default UserInput;
