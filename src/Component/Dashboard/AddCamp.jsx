
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const AddCamp = () => {
  // Initial values for the form fields
  const initialValues = {
    campName: "",
    image: "",
    campFees: "",
    dateTime: "",
    location: "",
    healthcareProfessionalName: "",
    participantCount: 0,
    description: ""
  };

  // Validation schema using Yup
  const validationSchema = Yup.object({
    campName: Yup.string().required("Camp Name is required"),
    image: Yup.string().url("Invalid image URL").required("Image URL is required"),
    campFees: Yup.number().typeError("Camp Fees must be a number").required("Camp Fees is required"),
    dateTime: Yup.string().required("Date & Time is required"),
    location: Yup.string().required("Location is required"),
    healthcareProfessionalName: Yup.string().required("Healthcare Professional Name is required"),
    participantCount: Yup.number().required("Participant Count is required").min(0, "Participant Count cannot be negative"),
    description: Yup.string().required("Description is required")
  });

  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Logic to save the form data in the database
    console.log("Submitted values:", values);
    // Reset form after successful submission
    resetForm();
  };

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Add A Camp</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form>
          <div className="mb-4">
            <label className="block text-gray-700">Camp Name:</label>
            <Field type="text" name="campName" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
            <ErrorMessage name="campName" component="div" className="text-red-600" />
          </div>
          {/* Add other form fields similarly */}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddCamp;
