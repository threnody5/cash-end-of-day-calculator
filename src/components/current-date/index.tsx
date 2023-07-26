import './styles.css';

const CurrentDate = () => {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const months: { [key: number]: string } = {
    0: 'January',
    1: 'February',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };

  const currentMonth = months[month];

  return (
    <main>
      <div>
        <h2 className='date-output'>
          {currentMonth}, {day}, {year}
        </h2>
      </div>
    </main>
  );
};

export default CurrentDate;
