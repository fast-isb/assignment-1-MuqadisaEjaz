import { render, screen } from '@testing-library/react';
import App from './App';
import Navbar from './components/NavBar'
import CreateComplaints from './components/Complaints/CreateComplaints'
import CancelComplaints from './components/Complaints/CancelComplaints';
import ComplaintStatus from './components/Complaints/ViewComplaints'


test('Testcase1', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId('Header');
  expect(linkElement).toHaveTextContent(/Home Page/);
});


test('Testcase2', () => {
  render(<Navbar />);
  const linkElement = screen.getByTestId('Header');
  expect(linkElement).toHaveTextContent(/Manage Property/);
});

test('Testcase3', () => {
  render(<CreateComplaints />);
  const linkElement = screen.getByTestId('complaints');
  expect(linkElement).toBeInTheDocument();
});

test('Testcase4', () => {
  render(<CancelComplaints />);
  const divElement = screen.getByTestId('cancelcomplaints');
  expect(divElement).toBeInTheDocument();
});
test('Testcase5', () => {
  render(<ComplaintStatus />);
  const linkElement = screen.getByTestId("ComplaintStatus");
  expect(linkElement).toBeInTheDocument();
});



test('Tetcase6', () => {
  render(<Navbar />);
  const linkElement = screen.getByRole("link",{name:/Home Page/});
  expect(linkElement).toBeInTheDocument();
});


test('Test7', () => {
  render(<Navbar />);
  const linkElement = screen.getByText("Complaint Status");
  expect(linkElement).toHaveAttribute('href', "#/ComplaintStatus");
});

test('Test8', () => {
  render(<Navbar />);
  const linkElement = screen.getByText("Add Complaint");
  expect(linkElement).toHaveAttribute('href', "#/CreateComplaints");
});

test('Test9', () => {
  render(<Navbar />);
  const linkElement = screen.getByText("Cancel Complaint");
  expect(linkElement).toHaveAttribute('href', "#/CancelComplaints");
});


