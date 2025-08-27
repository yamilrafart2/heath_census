/**
 * Definiendo variables
*/
const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');
const patients = [];

/**
 * Creando la función que añade los detalles del paciente
*/
function addPatient() {
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    if (name && gender && age && condition) {
        patients.push({ name, gender: gender.value, age, condition });
        resetForm();
        generateReport();
    }
}

/**
 * Crear una función para restablecer los valores del formulario
*/
function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
}

/**
 * Crea la función que genera el informe
*/
function generateReport() {
    const numPatients = patients.length;
    const conditionsCount = {
        Diabetes: 0,
        Tiroides: 0,
        "Presión Arterial Alta": 0,
    };
    const genderConditionsCount = {
        Male: {
            Diabetes: 0,
            Tiroides: 0,
            "Presión Arterial Alta": 0,
        },
        Female: {
            Diabetes: 0,
            Tiroides: 0,
            "Presión Arterial Alta": 0,
        },
    };

    for (const patient of patients) {
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
    }

    report.innerHTML = `Number of patients: ${numPatients}<br><br>`;
    report.innerHTML += `Conditions Breakdown:<br>`;
    for (const condition in conditionsCount) {
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }

    report.innerHTML += `<br>Gender-Based Conditions:<br>`;
    for (const gender in genderConditionsCount) {
        report.innerHTML += `${gender}:<br>`;
        for (const condition in genderConditionsCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }
    console.log(patients.length);
    console.log(conditionsCount);
    console.log(genderConditionsCount);
    
    
    
}

addPatientButton.addEventListener("click", addPatient);