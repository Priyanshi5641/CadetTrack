//alert("Welcome!");
/*function markAttendance() {
  alert("Attendance Marking Started");
}*/
function Present(number) {

  if(status[number] == "Present") {
    return;
  }
  if(status[number] == "Absent") {
    absentCount--;
  }
  status[number] = "Present";
  presentCount=presentCount+1;
  document.getElementById("status" + number).innerHTML = "Present";
  document.getElementById("presentCount").innerHTML = presentCount;
  document.getElementById("absentCount").innerHTML = absentCount;
}

function Absent(number) {
  if(status[number]== "Absent") {
    return;
  }
  if(status[number]=="Present"){
    presentCount--;
  }
  status[number]= "Absent";
  absentCount++;
  document.getElementById("status"+ number).innerHTML = "Absent";
  document.getElementById("absentCount").innerHTML = absentCount;
  document.getElementById("presentCount").innerHTML = presentCount;
}

let cadets = [
  {
    name: "Priyanshi",
    Regimental_no: "UP2025SWIA7720189"
  },
  
  {
    name: "Kritika",
    Regimental_no: "UP2025SWIA7720190"
  },
  
 {
    name: "Pragya",
    Regimental_no: "UP2025SWIA7720184"
  },
  {
    name: "Priyanshu",
    Regimental_no: "UP2025SWIA7720155"
  },
  ];
console.log(cadets);

let presentCount = 0;
let absentCount = 0;

let status = [];
for(let i=0; i< cadets.length; i++){
  status[i] = "Not Marked";
}

let list = document.getElementById("CadetList");

for(let i =0; i< cadets.length; i++) {
  list.innerHTML += "<p>" +(i+1) + ". " + cadets[i].name +" "+ cadets[i].Regimental_no + "</p>" + "<p id='status"+ i +"'>Not Marked</p>"+ "<button onclick='Present("+i+")'>Present</button>" + "<button onclick='Absent("+i+")'>Absent</button>";
}

document.getElementById("total").innerHTML = cadets.length;
 function getDate() {
   let date = document.getElementById("attendanceDate").value;

   if(date == ""){
     alert("Pahile Date select kar lijiye");
     return;
   }
   document.getElementById("selectedDate").innerHTML = date;
   //console.log(date);
 }