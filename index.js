// selecting all components using Dom Manipulation
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let ampm = document.getElementById("ampm");
let selectMenu = document.querySelectorAll("select");
let setAlarmButton = document.getElementById("setAlarmButton");
let alarmList = document.getElementById("alarmsList");

// Setting the default values of alarm section
for (let i = 0; i <= 12; i++) {
  i = i < 10 ? "0" + i : i;
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  selectMenu[0].appendChild(option);
}

for (let i = 0; i <= 59; i++) {
  i = i < 10 ? "0" + i : i;
  const option = document.createElement("option");
  option.value = i;
  option.textContent = i;
  selectMenu[1].appendChild(option);
}

for (let i = 0; i < 2; i++) {
  let amPm = i == 0 ? "AM" : "PM";
  const option = document.createElement("option");
  option.value = amPm;
  option.textContent = amPm;
  selectMenu[2].appendChild(option);
}

// Clock Face code
setInterval(() => {
  ampm.textContent = "AM";
  let currentTime = new Date();
  let h = currentTime.getHours();
  let m = currentTime.getMinutes();
  let s = currentTime.getSeconds();

  if (h >= 12) {
    h = h - 12;
    ampm.textContent = "PM";
  }

  h = h == 0 ? 12 : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  hrs.textContent = h;
  min.textContent = m;
  sec.textContent = s;
}, 1000);

function resetValues() {
  selectMenu[0].value = "00";
  selectMenu[1].value = "00";
  selectMenu[2].value = "AM";
}

// Adding new alarm in the alarm list and deleting a perticular alarm
setAlarmButton.addEventListener("click", () => {
  if (alarmList.children.length <= 3) {
    let time = `${selectMenu[0].value}:${selectMenu[1].value}:${selectMenu[2].value}`;
    console.log(time);
    let alarmListEle = document.createElement("div");
    alarmListEle.className = "alarmLists";
    let alarmTime = document.createElement("h4");
    alarmTime.className = "alarmTime";
    let deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    alarmTime.textContent = time;
    deleteButton.textContent = "Delete";
    alarmListEle.append(alarmTime, deleteButton);
    alarmList.appendChild(alarmListEle);
    alert(`Alarm set successfully at ${time}`);
    resetValues();
    deleteButton.addEventListener("click", () => {
      alarmList.removeChild(alarmListEle);
      alert(`Alarm deleted successfully`);
    });
  } else {
    alert("Sorry can not add more. Maximum limit reached!!");
    resetValues();
  }
});
