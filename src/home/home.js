const homeContentDiv = document.createElement('div');
homeContentDiv.classList.add('home-content');

const titleHeading = document.createElement('h1');
titleHeading.textContent = 'Odin Restaurant';
homeContentDiv.appendChild(titleHeading);

const blurbPara = document.createElement('p');
blurbPara.textContent = 'Welcome to the world of chocolatey goodness!';
homeContentDiv.appendChild(blurbPara);

const openHoursHeading = document.createElement('h2');
openHoursHeading.textContent = 'Open Hours';
homeContentDiv.appendChild(openHoursHeading);

function createOpenHoursTable() {
  const headings = [
    'Day of the Week',
    'From',
    'To',
  ];

  const openHours = [
    {
      day: 'Saturday',
      from: '10:00 am',
      to: '4:00 pm',
    },
    {
      day: 'Sunday',
      from: '10:00 am',
      to: '6:00 pm',
    },
    {
      day: 'Monday',
      from: '10:00 am',
      to: '6:00 pm',
    },
    {
      day: 'Tuesday',
      from: '10:00 am',
      to: '6:00 pm',
    },
    {
      day: 'Wednesday',
      from: '10:00 am',
      to: '6:00 pm',
    },
    {
      day: 'Thursday',
      from: '10:00 am',
      to: '6:00 pm',
    },
    {
      day: 'Friday',
      from: null,
      to: null,
    },
  ];

  const timeFields = [
    'from',
    'to',
  ];

  const table = document.createElement('table');

  const thead = document.createElement('thead');
  const theadRow = document.createElement('tr');
  for (let i = 0; i < headings.length; ++i) {
    const th = document.createElement('th');
    th.textContent = headings[i];
    th.scope = 'col';
    theadRow.appendChild(th);
  }
  thead.appendChild(theadRow);
  table.appendChild(thead);

  const tbody = document.createElement('tbody');
  for (let i = 0; i < openHours.length; ++i) {
    const tr = document.createElement('tr');

    const th = document.createElement('th');
    th.textContent = openHours[i].day;
    th.scope = 'row';
    tr.appendChild(th);

    for (const timeField of timeFields) {
      const td = document.createElement('td');

      if (openHours[i][timeField] == null) {
        td.textContent = '—';
        td.classList.add('null');
      } else {
        td.textContent = openHours[i][timeField];
      }

      tr.appendChild(td);
    }

    tbody.appendChild(tr);
  }
  table.appendChild(tbody);

  return table;
}

homeContentDiv.appendChild(createOpenHoursTable());

const addressHeading = document.createElement('h2');
addressHeading.textContent = 'Address';
homeContentDiv.appendChild(addressHeading);

const addressPara = document.createElement('p');
addressPara.textContent = 'House 2 Rd 24, Dhaka 1212';
homeContentDiv.appendChild(addressPara);

export function getHomeContent() {
  return homeContentDiv;
}
