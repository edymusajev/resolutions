import Image from "next/image";

const user = {
  id: 1,
  name: "John Doe",
  habits: [1],
};

const habit = {
  id: 1,
  title: "go to the gym",
  completed: [
    {
      date: "2021-01-01",
    },
    {
      date: "2021-01-02",
    },
  ],
};

export default function Home() {
  return (
    <main className="p-24">
      <nav className="flex space-x-2">
        <button>previous</button>
        <span>December</span>
        <button>next</button>
      </nav>

      <table>
        <thead>
          {/* days in a week */}
          <tr>
            <th></th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Go to the gym</td>
            <td>✓</td>
            <td>x</td>
            <td>✓</td>
            <td>x</td>
            <td>✓</td>
            <td>x</td>
            <td>x</td>
          </tr>
          <tr>
            <td>Read a book</td>
            <td>x</td>
            <td>✓</td>
            <td>x</td>
            <td>✓</td>
            <td>x</td>
            <td>✓</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
      <button>Add new habit</button>
    </main>
  );
}
