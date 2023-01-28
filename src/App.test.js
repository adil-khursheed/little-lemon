import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';


test('renders learn react link', () => {

  render(<BrowserRouter><App /></BrowserRouter>);
    const headingElement = screen.getByText("Reserve Your Table");
    expect(headingElement).toBeInTheDocument();

    const reserveButton = screen.getByRole("button");
    fireEvent.click(reserveButton);

    const headingElementNew = screen.getByText("Choose Date");
    expect(headingElementNew).toBeInTheDocument();
})

  test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);

  const testTime = "17:00"
  userEvent.selectOptions(screen.getByLabelText("Choose Time"),screen.getByRole('option', { name: testTime}))
  expect(screen.getByRole('option', { name: testTime}).selected).toBe(true);

});