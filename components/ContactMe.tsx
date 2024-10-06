// The "use client" directive in Next.js indicates that the component or module should be rendered on the client-side only, rather than on the server. This directive is used to ensure that React components relying on client-specific features, like browser APIs or local state, do not get executed on the server during server-side rendering.
"use client";

import { useState } from "react"; // Importing useState hook from React for managing local state.
import AnimatedSection from "./AnimatedSection"; // Importing the AnimatedSection component for visual effects and layout.

/**
 * ContactMe component renders a contact form that allows users to send messages.
 * It manages form data, validation, error messages, and success messages.
 *
 * @returns {JSX.Element} The rendered ContactMe component containing the contact form.
 */
const ContactMe: React.FC = (): JSX.Element => {
    // State to hold form data with name, email, and message fields, initialized as empty strings.
    const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
        name: '',
        email: '',
        message: '',
    });

    // State to track validation errors for each field and the form as a whole, initialized to empty strings.
    const [errors, setErrors] = useState<{ name: string; email: string; message: string; form: string }>({
        name: '',
        email: '',
        message: '',
        form: '',
    });

    // State to hold success message when the form is submitted successfully.
    const [successMessage, setSuccessMessage] = useState<string>('');

    /**
     * Handle changes in form inputs.
     * Updates formData state with the new value and clears corresponding error messages.
     *
     * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event from input elements.
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; // Destructure name and value from the event target.
        setFormData({ ...formData, [name]: value }); // Update formData state with the new value.
        setErrors({ ...errors, [name]: '' }); // Clear error for the changed field.
        setSuccessMessage(''); // Clear success message on input change.
    };

    /**
     * Validate a single field based on its name and value.
     * Returns an error message if validation fails, or an empty string if it passes.
     *
     * @param {string} name - The name of the field to validate.
     * @param {string} value - The value of the field to validate.
     * 
     * @returns {string} An error message or an empty string if validation passes.
     */
    const validateField = (name: string, value: string): string => {
        switch (name) {
            case 'name':
                return value ? '' : 'Name is required.'; // Check if name is provided.
            case 'email':
                // Validate email format using a regular expression.
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
                    ? ''
                    : 'Email is invalid.';
            case 'message':
                // Check if message has at least 10 characters.
                return value.length >= 10 ? '' : 'Message must be at least 10 characters.';
            default:
                return ''; // Return empty string for unrecognized fields.
        }
    };

    /**
     * Handle blur event on input fields.
     * Validates the field when it loses focus and updates error messages accordingly.
     *
     * @param {React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>} e - The focus event from input elements.
     */
    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target; // Destructure name and value from the event target.
        const error = validateField(name, value); // Validate the field.
        setErrors((prev) => ({ ...prev, [name]: error })); // Update errors state with the validation result.
        setSuccessMessage(''); // Clear success message on input blur.
    };

    /**
     * Validate all form fields.
     * Sets error messages for fields that fail validation and returns a boolean indicating overall validity.
     *
     * @returns {boolean} True if all fields are valid, false otherwise.
     */
    const validate = (): boolean => {
        let valid = true; // Track overall validity of the form.
        const newErrors = { name: '', email: '', message: '', form: '' }; // Initialize a new errors object.

        // Validate all fields and update newErrors.
        Object.keys(formData).forEach((key) => {
            // Validate each field. 
            // The 'key' variable is a string that represents the name of the current field being validated.
            // We use 'keyof typeof formData' to ensure TypeScript recognizes 'key' as one of the valid keys of the formData object.
            const error = validateField(key, formData[key as keyof typeof formData]);

            // Assign the error message to the corresponding field in the newErrors object.
            // Here, 'keyof typeof newErrors' allows TypeScript to ensure that 'key' is also a valid key in the newErrors object.
            newErrors[key as keyof typeof newErrors] = error;

            // If any field has an error, set valid to false.
            // This checks whether the validation returned an error message, indicating that the field is not valid.
            if (error) valid = false;
        });

        setErrors(newErrors); // Update errors state with the new errors object.
        return valid; // Return overall validity.
    };

    /**
     * Handle form submission.
     * Validates the form, sends data to the server if valid, and manages success/error messages.
     *
     * @param {React.FormEvent} e - The form submission event.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior.
        setSuccessMessage(''); // Clear previous success message.
        setErrors({ ...errors, form: '' }); // Clear form error message.

        // Validate the form before proceeding.
        if (!validate()) {
            return; // If validation fails, do not proceed with submission.
        }

        try {
            // Make an API call to send the form data.
            const res = await fetch('/api/sendForm', {
                method: 'POST', // Set request method to POST.
                headers: {
                    'Content-Type': 'application/json', // Set the content type to JSON.
                },
                body: JSON.stringify(formData), // Convert formData to JSON string.
            });

            // Check if the response is not ok (e.g., 404 error).
            if (!res.ok) {
                const { error } = await res.json(); // Parse the JSON response to get the error message.
                throw new Error(error || 'Something went wrong'); // Throw error if response is not ok.
            }

            setSuccessMessage('Message sent successfully!'); // Update success message on successful submission.
            setFormData({ name: '', email: '', message: '' }); // Reset form data to empty strings after submission.
        } catch (error) {
            console.error(error); // Log any errors encountered during the fetch.
            setErrors({ ...errors, form: error as string }); // Update errors state with the error message.
        }
    };

    // CSS classes for input elements, including styling for layout, colors, and borders.
    const inputCSSClasses: string = `flex w-full text-base text-white bg-[#130f2a] rounded-lg border border-solid border-[#6751b9] p-4`;

    return (
        <AnimatedSection id="contact" title="Contact Me">
            {/* Container for the contact form, using flexbox for layout. */}
            <div className="flex flex-1 flex-col items-center justify-center p-4 gap-8">
                <div className="text-xl font-medium max-md:text-lg">
                    Please contact me through the form below:
                </div>
                {/* Display form error if it exists. */}
                {errors.form && <p className="text-red-500">{errors.form}</p>}
                {/* Display success message if form submission is successful. */}
                {successMessage && <p className="text-green-500">{successMessage}</p>}
                {/* Form element for submitting user information. */}
                <form onSubmit={handleSubmit} className="contact-form-content flex gap-12 justify-center w-full max-w-screen-sm">
                    <div className="flex-1 flex flex-col gap-4">
                        {/* Input for name with validation error message if any. */}
                        <input
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange} // Handle input changes.
                            onBlur={handleBlur} // Handle input blur for validation.
                            className={`${inputCSSClasses} ${errors.name ? 'border-red-500' : ''}`}
                        />
                        {/* Name error message if any. */}
                        {errors.name && <p className="text-red-500">{errors.name}</p>}

                        {/* Input for email with validation error message if any. */}
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange} // Handle input changes.
                            onBlur={handleBlur} // Handle input blur for validation.
                            className={`${inputCSSClasses} ${errors.email ? 'border-red-500' : ''}`}
                        />
                        {/* Email error message if any. */}
                        {errors.email && <p className="text-red-500">{errors.email}</p>}

                        {/* Textarea for message input with validation error message if any. */}
                        <textarea
                            placeholder="Message"
                            name="message"
                            rows={3}
                            value={formData.message}
                            onChange={handleChange} // Handle input changes.
                            onBlur={handleBlur} // Handle input blur for validation.
                            className={`${inputCSSClasses} ${errors.message ? 'border-red-500' : ''}`}
                        />
                        {/* Message error message if any. */}
                        {errors.message && <p className="text-red-500">{errors.message}</p>}

                        {/* Submit button for sending the form data. */}
                        <button
                            type="submit"
                            className="text-base bg-[#6751b9] rounded-xl border border-solid border-transparent p-4 text-white cursor-pointer transition-all duration-300 ease-linear hover:bg-transparent hover:text-[#a892fe] hover:border-[#a892fe]"
                        >
                            SEND
                        </button>
                    </div>
                </form>
            </div>
        </AnimatedSection>
    );
};

export default ContactMe;
