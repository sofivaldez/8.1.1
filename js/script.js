const DATA_URL = "json/data.json";

const container = document.getElementById("container");


function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`;
  } 
}
const studentsFetch = async() => {
  try {
    const response = await fetch(DATA_URL);
    const data = await response.json();
    const students = data.students;
    showData(students)
  } catch (error) {
    console.log('Error al hacer fetch', error)
  }

}


studentsFetch()