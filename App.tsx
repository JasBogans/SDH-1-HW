import * as React from 'react';
import { useState } from 'react';
import './style.css';

const mockFormSubmissions = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: 'password123',
    gender: 'Male',
    birthdate: '1995-03-23',
    address: '123 Main St',
    phone: '555-555-5555',
    agree: true,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'janesmith@example.com',
    password: 'password456',
    gender: 'Female',
    birthdate: '1988-07-12',
    address: '456 Elm St',
    phone: '555-555-5555',
    agree: true,
  },
];

export default function App() {
  const [data, setData] = useState(mockFormSubmissions);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validation logic goes here
    const newData = {
      firstName,
      lastName,
      email,
      password,
      gender,
      birthdate,
      address,
      phone,
      agree,
    };
    // add data to table logic goes here
    setData([...data, newData]);
  };

  return (
    <div>
      <div className="card-container">
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="gender">Gender:</label>
            <select
              id="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="birthdate">Birthdate:</label>
            <input
              type="date"
              id="birthdate"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="field">
            <label htmlFor="agree">
              <input
                type="checkbox"
                id="agree"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                required
              />
              I agree to the terms and conditions
            </label>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="card-container" style={{
        padding: "20px"
      }}>
        <h2>Submitted</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Birthdate</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Agree</th>
            </tr>
          </thead>
          <tbody>
            {data.map((submission, index) => (
              <tr key={index}>
                <td>{submission.firstName}</td>
                <td>{submission.lastName}</td>
                <td>{submission.email}</td>
                <td>{submission.password}</td>
                <td>{submission.gender}</td>
                <td>{submission.birthdate}</td>
                <td>{submission.address}</td>
                <td>{submission.phone}</td>
                <td>{submission.agree.toString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
