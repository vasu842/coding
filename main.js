const STORAGE_KEY =
  "KPL_PREMIER_TOURNAMENT_REGISTRATIONS";


let registrations =
  JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  ) || [];


const form =
  document.getElementById(
    "registrationForm"
  );


const table =
  document.getElementById(
    "playerTable"
  );


const message =
  document.getElementById(
    "message"
  );


/* SAVE */

function saveData() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(registrations)
  );

}


/* MONEY */

function money(amount) {

  return "₹" +
    Number(amount || 0)
      .toLocaleString("en-IN");

}


/* ESCAPE HTML */

function safe(value) {

  return String(value || "")
    .replace(/[&<>"']/g, function (char) {

      const map = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;"
      };

      return map[char];

    });

}


/* DISPLAY */

function displayRegistrations() {

  const search =
    document
      .getElementById("search")
      .value
      .toLowerCase()
      .trim();


  const filtered =
    registrations.filter(function (player) {

      return (

        player.name
          .toLowerCase()
          .includes(search)

        ||

        player.mobile
          .includes(search)

        ||

        player.team
          .toLowerCase()
          .includes(search)

        ||

        player.village
          .toLowerCase()
          .includes(search)

        ||

        player.utr
          .toLowerCase()
          .includes(search)

      );

    });


  table.innerHTML = "";


  filtered.forEach(function (player, index) {

    const row =
      document.createElement("tr");


    row.innerHTML = `

      <td>${index + 1}</td>

      <td>
        <strong>
          ${safe(player.name)}
        </strong>
      </td>

      <td>
        ${safe(player.mobile)}
      </td>

      <td>
        ${safe(player.team) || "-"}
      </td>

      <td>
        ${safe(player.village) || "-"}
      </td>

      <td>
        <strong>
          ${money(player.amount)}
        </strong>
      </td>

      <td>
        ${safe(player.utr)}
      </td>

      <td>
        ${player.date}
      </td>

      <td>
        <button
          class="delete"
          onclick="deletePlayer('${player.id}')"
        >
          Delete
        </button>
      </td>

    `;

    table.appendChild(row);

  });


  document.getElementById("empty")
    .style.display =
      filtered.length === 0
        ? "block"
        : "none";


  updateStatistics();

}


/* STATISTICS */

function updateStatistics() {

  document.getElementById(
    "playerCount"
  ).textContent =
    registrations.length;


  const total =
    registrations.reduce(
      function (sum, player) {

        return sum +
          Number(player.amount || 0);

      },
      0
    );


  document.getElementById(
    "totalAmount"
  ).textContent =
    money(total);


  const today =
    new Date()
      .toLocaleDateString("en-IN");


  const todayPlayers =
    registrations.filter(function (player) {

      return player.date === today;

    });


  document.getElementById(
    "todayCount"
  ).textContent =
    todayPlayers.length;

}


/* REGISTER */

form.addEventListener(
  "submit",
  function (event) {

    event.preventDefault();


    const name =
      document.getElementById(
        "name"
      ).value.trim();


    const mobile =
      document.getElementById(
        "mobile"
      ).value.trim();


    const village =
      document.getElementById(
        "village"
      ).value.trim();


    const team =
      document.getElementById(
        "team"
      ).value.trim();


    const age =
      document.getElementById(
        "age"
      ).value;


    const jersey =
      document.getElementById(
        "jersey"
      ).value;


    const amount =
      document.getElementById(
        "amount"
      ).value;


    const phonepeName =
      document.getElementById(
        "phonepeName"
      ).value.trim();


    const utr =
      document.getElementById(
        "utr"
      ).value.trim();


    /* MOBILE VALIDATION */

    if (!/^[6-9][0-9]{9}$/.test(mobile)) {

      showMessage(
        "Please enter a valid 10-digit mobile number.",
        true
      );

      return;

    }


    /* UTR VALIDATION */

    if (utr.length < 6) {

      showMessage(
        "Please enter a valid PhonePe UTR.",
        true
      );

      return;

    }


    /* DUPLICATE UTR */

    const duplicate =
      registrations.some(
        function (player) {

          return player.utr
            .toLowerCase() ===
            utr.toLowerCase();

        }
      );


    if (duplicate) {

      showMessage(
        "This PhonePe UTR is already registered.",
        true
      );

      return;

    }


    /* PLAYER */

    const player = {

      id:
        Date.now().toString(),

      name,

      mobile,

      village,

      team,

      age,

      jersey,

      amount,

      phonepeName,

      utr,

      date:
        new Date()
          .toLocaleDateString("en-IN")

    };


    registrations.unshift(player);


    saveData();


    form.reset();


    showMessage(
      "✅ Registration successful!",
      false
    );


    displayRegistrations();

  }
);


/* MESSAGE */

function showMessage(
  text,
  error
) {

  message.textContent =
    text;

  message.style.color =
    error
      ? "#dc2626"
      : "#16a34a";

}


/* DELETE */

function deletePlayer(id) {

  const confirmDelete =
    confirm(
      "Delete this registration?"
    );


  if (!confirmDelete) {
    return;
  }


  registrations =
    registrations.filter(
      function (player) {

        return player.id !== id;

      }
    );


  saveData();


  displayRegistrations();

}


/* SEARCH */

document
  .getElementById("search")
  .addEventListener(
    "input",
    displayRegistrations
  );


/* CLEAR */

document
  .getElementById("clearBtn")
  .addEventListener(
    "click",
    function () {

      if (
        registrations.length === 0
      ) {

        alert(
          "No registrations available."
        );

        return;

      }


      if (
        confirm(
          "Delete ALL registrations?"
        )
      ) {

        registrations = [];

        saveData();

        displayRegistrations();

      }

    }
  );


/* EXPORT CSV */

document
  .getElementById("exportBtn")
  .addEventListener(
    "click",
    function () {

      if (
        registrations.length === 0
      ) {

        alert(
          "No registrations to export."
        );

        return;

      }


      const headers = [

        "Name",
        "Mobile",
        "Village",
        "Team",
        "Age",
        "Jersey",
        "Amount",
        "PhonePe Name",
        "UTR",
        "Date"

      ];


      const rows =
        registrations.map(
          function (player) {

            return [

              player.name,
              player.mobile,
              player.village,
              player.team,
              player.age,
              player.jersey,
              player.amount,
              player.phonepeName,
              player.utr,
              player.date

            ];

          }
        );


      const csv = [

        headers,
        ...rows

      ]
        .map(function (row) {

          return row
            .map(function (value) {

              return `"${String(value || "")
                .replace(/"/g, '""')}"`;

            })
            .join(",");

        })
        .join("\n");


      const blob =
        new Blob(
          ["\ufeff" + csv],
          {
            type:
              "text/csv;charset=utf-8;"
          }
        );


      const link =
        document.createElement("a");


      link.href =
        URL.createObjectURL(blob);


      link.download =
        "KPL_Registrations.csv";


      link.click();


      URL.revokeObjectURL(
        link.href
      );

    }
  );


/* INITIAL LOAD */

displayRegistrations();