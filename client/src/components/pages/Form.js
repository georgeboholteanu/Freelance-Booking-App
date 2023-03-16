import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = { name, message };

        console.log(form);
    }

    return (
        <div className="BookingForm">
            <form onSubmit={handleSubmit}>
                <select required>
                    <option value="Book me">Book me</option>
                </select>
                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                ></input>

                <label>Message:</label>
                <textarea
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button>Submit your request</button>
            </form>
        </div>
    )
}

export default Form;

// find the user (boject.id)
// replace user availability
