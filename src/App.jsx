import { useState } from "react";
import { inputOptions } from "./config"; // Import from config.js

export default function App() {
  // State for dynamically added inputs
  const [formFields, setFormFields] = useState([]);
  // State for form data
  const [formData, setFormData] = useState({});
  // State for the generated link
  const [generatedLink, setGeneratedLink] = useState(null);
  // State for button text
  const [buttonText, setButtonText] = useState("Copy");
  // State for error handling
  const [errorMessage, setErrorMessage] = useState("");

  const baseUrl = import.meta.env.VITE_VCARD_GENERATOR_URL;

  // Handle the selection of inputs to add
  const handleSelectInput = (e) => {
    const selectedId = e.target.value;
    const selectedOption = inputOptions.find(
      (option) => option.id === selectedId,
    );

    if (
      selectedOption &&
      !formFields.some((field) => field.id === selectedId)
    ) {
      setFormFields([...formFields, selectedOption]);
    }
  };

  // Handle form input changes
  const handleInputChange = (e, inputType) => {
    setFormData({
      ...formData,
      [inputType]: e.target.value,
    });
  };

  // Handle removing an input
  const handleRemoveInput = (inputType) => {
    setFormFields(formFields.filter((field) => field.id !== inputType));
    const newFormData = { ...formData };
    delete newFormData[inputType];
    setFormData(newFormData);
  };

  // Handle form submission with sorting by the original order
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(import.meta.env.VITE_VCARD_GENERATOR_URL);
    // Check if there are any filled fields in formData
    const hasFilledFields = Object.values(formData).some(
      (value) => value !== "",
    );

    if (!hasFilledFields) {
      setErrorMessage("Please fill in at least one field.");
      return; // Exit early without generating the link
    }

    setErrorMessage(""); // Clear any previous error messages

    // Filter out any empty fields from formData
    const filteredData = Object.entries(formData)
      .filter(([key, value]) => value !== "" && value !== null)
      .reduce((acc, [key, value]) => {
        acc[key] = value;
        return acc;
      }, {});

    // Sort the filtered data by the original order of inputOptions
    const sortedData = {};
    inputOptions.forEach((option) => {
      if (filteredData[option.id]) {
        sortedData[option.id] = filteredData[option.id];
      }
    });

    // Create query string from sorted data
    const queryParams = new URLSearchParams(sortedData).toString();
    const generatedUrl = `${baseUrl}?${queryParams}`;

    setGeneratedLink(generatedUrl);
    setButtonText("Copy"); // Reset button text when generating a new link
  };

  // Function to copy the generated link to clipboard
  const copyToClipboard = () => {
    if (generatedLink) {
      navigator.clipboard
        .writeText(generatedLink)
        .then(() => {
          setButtonText("Copied!"); // Change button text to "Copied!"
          setTimeout(() => setButtonText("Copy"), 2000); // Reset button text after 2 seconds
        })
        .catch((err) => console.error("Failed to copy: ", err));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Dynamic VCF Form</h2>

        {/* Select Dropdown */}
        <div className="mb-4">
          <label className="block mb-2">Add Field</label>
          <select
            onChange={handleSelectInput}
            className="w-full p-2 border border-gray-300 rounded-lg"
            value=""
          >
            <option value="" disabled>
              Select a field
            </option>
            {inputOptions
              .filter(
                (option) => !formFields.some((field) => field.id === option.id),
              ) // Filter out already selected inputs
              .map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>

        {/* Dynamic Form Inputs */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map((field) => {
            const InputComponent = field.component;
            return (
              <InputComponent
                key={field.id}
                label={field.label} // Pass the label to the component
                value={formData[field.id]}
                onChange={(e) => handleInputChange(e, field.id)}
                onRemove={() => handleRemoveInput(field.id)}
              />
            );
          })}

          {/* Error Message */}
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          {/* Submit Button */}
          {formFields.length > 0 && (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          )}
        </form>

        {/* Generated Link Display */}
        {generatedLink && (
          <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner flex items-center space-x-2">
            <div
              className="text-gray-700 break-all cursor-pointer"
              onClick={copyToClipboard} // Copy on click
            >
              {generatedLink}
            </div>
            <button
              onClick={copyToClipboard}
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
