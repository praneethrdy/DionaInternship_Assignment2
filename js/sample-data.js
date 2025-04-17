
const sampleScenarios = {
    // Scenario 1: Minimal Data
    minimal: {
        claimNumber: "WCB123456",
        workerName: "John Smith",
        returnToWork: {
            noMissedTime: true,
            notReturned: false,
            returned: false,
            returnDate: null
        },
        workingStatus: {
            fullDutiesRegular: true,
            fullDutiesReduced: false,
            modifiedDutiesRegular: false,
            modifiedDutiesReduced: false,
            other: false,
            otherText: ""
        },
        returnProgress: "Progress is going well with no issues.",
        expectedReturnDate: null,
        concerns: "",
        employerContact: "Jane Supervisor",
        contactDate: "2024-03-19",
        recoveryStatus: {
            notFullyRecovered: false,
            fullyRecovered: true
        },
        painLevel: 1,
        exercises: []
    },

    // Scenario 2: Complex Case
    complex: {
        claimNumber: "WCB789012",
        workerName: "Sarah Johnson",
        returnToWork: {
            noMissedTime: false,
            notReturned: false,
            returned: true,
            returnDate: "2024-03-15"
        },
        workingStatus: {
            fullDutiesRegular: false,
            fullDutiesReduced: false,
            modifiedDutiesRegular: false,
            modifiedDutiesReduced: true,
            other: true,
            otherText: "Gradual return to work program"
        },
        returnProgress: "Experiencing some difficulty with extended standing. Need frequent breaks.",
        expectedReturnDate: "2024-04-15",
        concerns: "Concerned about maintaining proper posture during long shifts.",
        employerContact: "Mike Manager",
        contactDate: "2024-03-18",
        recoveryStatus: {
            notFullyRecovered: true,
            fullyRecovered: false
        },
        painLevel: 6,
        exercises: [
            {
                name: "Lower Back Stretches",
                frequency: "3 times daily",
                duration: "15 minutes"
            },
            {
                name: "Walking",
                frequency: "Twice daily",
                duration: "20 minutes"
            },
            {
                name: "Core Strengthening",
                frequency: "Once daily",
                duration: "10 minutes"
            }
        ],
        medicalTreatment: {
            receiving: true,
            providerType: "Physiotherapist",
            lastTreatment: {
                date: "2024-03-17",
                provider: "Dr. Smith"
            },
            nextTreatment: {
                date: "2024-03-24",
                provider: "Dr. Smith"
            }
        },
        chiropractor: {
            frequency: "Twice weekly"
        },
        medication: {
            taking: true,
            name: "Ibuprofen 400mg"
        }
    },

    // Scenario 3: Partial Recovery
    partial: {
        claimNumber: "WCB345678",
        workerName: "Michael Brown",
        returnToWork: {
            noMissedTime: false,
            notReturned: true,
            returned: false,
            returnDate: null
        },
        workingStatus: {
            fullDutiesRegular: false,
            fullDutiesReduced: false,
            modifiedDutiesRegular: false,
            modifiedDutiesReduced: false,
            other: true,
            otherText: "Awaiting medical clearance"
        },
        returnProgress: "Waiting for doctor's approval to return.",
        expectedReturnDate: "2024-05-01",
        concerns: "Need to ensure workstation is properly set up for ergonomic requirements.",
        employerContact: "HR Department",
        contactDate: "2024-03-20",
        recoveryStatus: {
            notFullyRecovered: true,
            fullyRecovered: false
        },
        painLevel: 4,
        exercises: [
            {
                name: "Shoulder Mobility",
                frequency: "Daily",
                duration: "10 minutes"
            }
        ],
        medicalTreatment: {
            receiving: true,
            providerType: "Occupational Therapist",
            lastTreatment: {
                date: "2024-03-16",
                provider: "Dr. Johnson"
            },
            nextTreatment: {
                date: "2024-03-30",
                provider: "Dr. Johnson"
            }
        },
        chiropractor: {
            frequency: "Weekly"
        },
        medication: {
            taking: false,
            name: ""
        }
    }
};

// Function to load a scenario
function loadScenario(scenarioName) {
    const scenario = sampleScenarios[scenarioName];
    if (!scenario) {
        console.error('Scenario not found:', scenarioName);
        return;
    }

    // Populate form fields with scenario data
    document.getElementById('claimNumber').value = scenario.claimNumber;
    document.getElementById('workerName').textContent = scenario.workerName;

    // Return to Work section
    document.getElementById('noMissedTime').checked = scenario.returnToWork.noMissedTime;
    document.getElementById('notReturned').checked = scenario.returnToWork.notReturned;
    document.getElementById('returned').checked = scenario.returnToWork.returned;
    document.getElementById('returnDate').value = scenario.returnToWork.returnDate || '';

    // Working Status section
    document.getElementById('fullDutiesRegular').checked = scenario.workingStatus.fullDutiesRegular;
    document.getElementById('fullDutiesReduced').checked = scenario.workingStatus.fullDutiesReduced;
    document.getElementById('modifiedDutiesRegular').checked = scenario.workingStatus.modifiedDutiesRegular;
    document.getElementById('modifiedDutiesReduced').checked = scenario.workingStatus.modifiedDutiesReduced;
    document.getElementById('other').checked = scenario.workingStatus.other;
    document.getElementById('otherText').value = scenario.workingStatus.otherText;

    // Progress and Concerns
    document.getElementById('returnProgress').value = scenario.returnProgress;
    document.getElementById('expectedReturnDate').value = scenario.expectedReturnDate || '';
    document.getElementById('concerns').value = scenario.concerns;

    // Contact Details
    document.getElementById('employerContact').value = scenario.employerContact;
    document.getElementById('contactDate').value = scenario.contactDate;

    // Recovery Status
    document.getElementById('notFullyRecovered1').checked = scenario.recoveryStatus.notFullyRecovered;
    document.getElementById('fullyRecovered1').checked = scenario.recoveryStatus.fullyRecovered;

    // Pain Level
    const painRadio = document.getElementById(`pain${scenario.painLevel}`);
    if (painRadio) painRadio.checked = true;

    // Exercises
    if (scenario.exercises && scenario.exercises.length > 0) {
        document.getElementById('doingExercises').checked = true;
        document.getElementById('notDoingExercises').checked = false;
        document.getElementById('exercisesList').value = scenario.exercises
            .map(ex => `${ex.name} - ${ex.frequency} - ${ex.duration}`)
            .join('\n');
    } else {
        document.getElementById('doingExercises').checked = false;
        document.getElementById('notDoingExercises').checked = true;
        document.getElementById('exercisesList').value = '';
    }

    // Medical Treatment
    if (scenario.medicalTreatment) {
        document.getElementById('receivingTreatment').checked = scenario.medicalTreatment.receiving;
        document.getElementById('notReceivingTreatment').checked = !scenario.medicalTreatment.receiving;
        document.getElementById('medicalProviderType').value = scenario.medicalTreatment.providerType || '';

        if (scenario.medicalTreatment.lastTreatment) {
            document.getElementById('lastTreatmentDate').value = scenario.medicalTreatment.lastTreatment.date;
            document.getElementById('lastTreatmentProvider').value = scenario.medicalTreatment.lastTreatment.provider;
        }

        if (scenario.medicalTreatment.nextTreatment) {
            document.getElementById('nextTreatmentDate').value = scenario.medicalTreatment.nextTreatment.date;
            document.getElementById('nextTreatmentProvider').value = scenario.medicalTreatment.nextTreatment.provider;
        }
    }

    // Chiropractor
    if (scenario.chiropractor) {
        document.getElementById('chiropractorFrequency').value = scenario.chiropractor.frequency;
    }

    // Medication
    if (scenario.medication) {
        document.getElementById('takingMedication').checked = scenario.medication.taking;
        document.getElementById('notTakingMedication').checked = !scenario.medication.taking;
        document.getElementById('medicationName').value = scenario.medication.name;
    }
}

// Add scenario controls to the page
function addScenarioControls() {
    const controlsDiv = document.createElement('div');
    controlsDiv.style.position = 'fixed';
    controlsDiv.style.top = '10px';
    controlsDiv.style.right = '10px';
    controlsDiv.style.zIndex = '1000';
    controlsDiv.style.backgroundColor = '#fff';
    controlsDiv.style.padding = '10px';
    controlsDiv.style.border = '1px solid #ccc';
    controlsDiv.style.borderRadius = '5px';
    controlsDiv.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';

    const heading = document.createElement('h3');
    heading.textContent = 'Demo Scenarios';
    heading.style.margin = '0 0 10px 0';
    controlsDiv.appendChild(heading);

    Object.keys(sampleScenarios).forEach(scenario => {
        const button = document.createElement('button');
        button.textContent = scenario.charAt(0).toUpperCase() + scenario.slice(1);
        button.style.display = 'block';
        button.style.width = '100%';
        button.style.marginBottom = '5px';
        button.style.padding = '5px 10px';
        button.onclick = () => loadScenario(scenario);
        controlsDiv.appendChild(button);
    });

    document.body.appendChild(controlsDiv);
}

// Initialize controls when the page loads
window.addEventListener('load', addScenarioControls); 