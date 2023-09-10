import React, { useState } from "react";

const StepperForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    companyName: "",
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const steps = [
    { label: "Step 1", fields: ["name", "email", "phone"] },
    { label: "Step 2", fields: ["address"] },
    { label: "Step 3", fields: ["companyName"] },
  ];

  return (
    <div>
      <h2>{steps[step - 1].label}</h2>
      <progress value={step} max={steps.length}></progress>

      <div>
        {steps[step - 1].fields.map((field) => (
          <div key={field}>
            <label htmlFor={field}>{field}:</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
            />
          </div>
        ))}

        <div>
          {step > 1 && <button onClick={handlePrev}>Previous</button>}
          {step < steps.length ? (
            <button onClick={handleNext}>Next</button>
          ) : (
            <button onClick={handleSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepperForm;
