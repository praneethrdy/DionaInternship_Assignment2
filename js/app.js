document.addEventListener('DOMContentLoaded', function () {
   
    loadFormData(sampleData);

    // Set up event listeners for form controls
    setupFormValidation();
    setupMutuallyExclusiveCheckboxes();
    setupAutoSave();
});

function setupFormValidation() {
   
    document.getElementById('returned').addEventListener('change', function (e) {
        const returnDateInput = document.getElementById('returnDate');
        if (e.target.checked) {
            returnDateInput.required = true;
        } else {
            returnDateInput.required = false;
            returnDateInput.value = '';
        }
    });

    document.getElementById('other').addEventListener('change', function (e) {
        const otherTextInput = document.getElementById('otherText');
        if (e.target.checked) {
            otherTextInput.required = true;
        } else {
            otherTextInput.required = false;
            otherTextInput.value = '';
        }
    });

   
    document.getElementById('receivingTreatment').addEventListener('change', function (e) {
        const providerInput = document.getElementById('medicalProviderType');
        if (e.target.checked) {
            providerInput.required = true;
        } else {
            providerInput.required = false;
            providerInput.value = '';
        }
    });

  
    document.getElementById('takingMedication').addEventListener('change', function (e) {
        const medicationInput = document.getElementById('medicationName');
        if (e.target.checked) {
            medicationInput.required = true;
        } else {
            medicationInput.required = false;
            medicationInput.value = '';
        }
    });
}

function setupMutuallyExclusiveCheckboxes() {
   
    const returnToWorkCheckboxes = [
        'noMissedTime',
        'notReturned',
        'returned'
    ];

    returnToWorkCheckboxes.forEach(id => {
        document.getElementById(id).addEventListener('change', function (e) {
            if (e.target.checked) {
                returnToWorkCheckboxes.forEach(otherId => {
                    if (otherId !== id) {
                        document.getElementById(otherId).checked = false;
                    }
                });
            }
        });
    });

    // Working status checkboxes
    const workingStatusCheckboxes = [
        'fullDutiesRegular',
        'fullDutiesReduced',
        'modifiedDutiesRegular',
        'modifiedDutiesReduced',
        'other'
    ];

    workingStatusCheckboxes.forEach(id => {
        document.getElementById(id).addEventListener('change', function (e) {
            if (e.target.checked) {
                workingStatusCheckboxes.forEach(otherId => {
                    if (otherId !== id) {
                        document.getElementById(otherId).checked = false;
                    }
                });
            }
        });
    });

    // Recovery status checkboxes
    const recoveryCheckboxes = [
        'fullyRecovered',
        'notFullyRecovered'
    ];

    recoveryCheckboxes.forEach(id => {
        document.getElementById(id).addEventListener('change', function (e) {
            if (e.target.checked) {
                recoveryCheckboxes.forEach(otherId => {
                    if (otherId !== id) {
                        document.getElementById(otherId).checked = false;
                    }
                });
            }
        });
    });

    // Medical treatment checkboxes
    const treatmentCheckboxes = [
        'receivingTreatment',
        'notReceivingTreatment'
    ];

    treatmentCheckboxes.forEach(id => {
        document.getElementById(id).addEventListener('change', function (e) {
            if (e.target.checked) {
                treatmentCheckboxes.forEach(otherId => {
                    if (otherId !== id) {
                        document.getElementById(otherId).checked = false;
                    }
                });
            }
        });
    });

    // Medication checkboxes
    const medicationCheckboxes = [
        'takingMedication',
        'notTakingMedication'
    ];

    medicationCheckboxes.forEach(id => {
        document.getElementById(id).addEventListener('change', function (e) {
            if (e.target.checked) {
                medicationCheckboxes.forEach(otherId => {
                    if (otherId !== id) {
                        document.getElementById(otherId).checked = false;
                    }
                });
            }
        });
    });

    // Exercise checkboxes
    const exerciseCheckboxes = [
        'doingExercises',
        'notDoingExercises'
    ];

    exerciseCheckboxes.forEach(id => {
        document.getElementById(id).addEventListener('change', function (e) {
            if (e.target.checked) {
                exerciseCheckboxes.forEach(otherId => {
                    if (otherId !== id) {
                        document.getElementById(otherId).checked = false;
                    }
                });
            }
        });
    });
}

function setupAutoSave() {
    // Adding change event listeners to all form elements
    const formElements = document.querySelectorAll('input, textarea, select');
    formElements.forEach(element => {
        element.addEventListener('change', function () {
            const formData = getFormData();
           
            localStorage.setItem('formData', JSON.stringify(formData));
            updateLastSaved();
       
            updateClaimNumbers(formData.claimNumber);
           
            updateWorkerIds(formData.workerId);
        });
    });
}

function updateClaimNumbers(claimNumber) {
    document.querySelectorAll('#claimNumber, #claimNumber2, #claimNumber3').forEach(el => {
        if (el) el.value = claimNumber;
    });
}

function updateWorkerIds(workerId) {
    document.querySelectorAll('#workerId, #workerId2, #workerId3').forEach(el => {
        if (el) el.textContent = workerId;
    });
}

function updateLastSaved() {
    const now = new Date();
    const timestamp = now.toLocaleString();
    console.log('Form auto-saved at:', timestamp);
}

// Function to handle form submission
function handleSubmit() {
    const formData = getFormData();

    // Validate required certification checkboxes
    if (!formData.certification.certifyInformation || !formData.certification.privacyNotice) {
        alert('Please accept both the certification and privacy notice to submit the form.');
        return false;
    }

    
    console.log('Form submitted:', formData);
    return false; 
}

// Function to print the form
function printForm() {
    window.print();
}

// Function to clear the form
function clearForm() {
    const confirmClear = confirm('Are you sure you want to clear all form data?');
    if (confirmClear) {
        localStorage.removeItem('formData');
        document.location.reload();
    }
} 