// Sample data structure
const sampleData = {
    workerName: 'Madeleine Willson',
    claimNumber: '20042047',
    workerId: '712041',
    returnToWork: {
        noMissedTime: false,
        notReturned: false,
        returned: true,
        returnDate: '2024-03-15'
    },
    workingStatus: {
        fullDutiesRegular: false,
        fullDutiesReduced: false,
        modifiedDutiesRegular: false,
        modifiedDutiesReduced: true,
        other: false,
        otherText: ''
    },
    returnProgress: 'Terrible. Testing Testing',
    expectedReturnDate: '',
    concerns: '',
    contactDetails: {
        employerContact: '',
        contactDate: ''
    },
    recovery: {
        fullyRecovered: true,
        notFullyRecovered: false,
        painLevel: 0,
        receivingTreatment: false,
        notReceivingTreatment: true,
        medicalProviderType: '',
        lastTreatment: {
            date: '',
            provider: ''
        },
        nextTreatment: {
            date: '',
            provider: ''
        },
        chiropractorFrequency: '',
        takingMedication: false,
        notTakingMedication: true,
        medicationName: '',
        doingExercises: false,
        notDoingExercises: true,
        exercises: ''
    },
    additionalInfo: 'No info Testing Testing',
    certification: {
        certifyInformation: false,
        privacyNotice: false
    },
    submissionDate: '2024-03-19 19:21'
};


function loadFormData(data) {

    document.querySelectorAll('#workerName, #workerName2, #workerName3').forEach(el => {
        if (el) el.textContent = data.workerName;
    });
    document.querySelectorAll('#claimNumber, #claimNumber2, #claimNumber3').forEach(el => {
        if (el) el.value = data.claimNumber;
    });
    document.querySelectorAll('#workerId, #workerId2, #workerId3').forEach(el => {
        if (el) el.textContent = data.workerId;
    });

  
    document.getElementById('noMissedTime').checked = data.returnToWork.noMissedTime;
    document.getElementById('notReturned').checked = data.returnToWork.notReturned;
    document.getElementById('returned').checked = data.returnToWork.returned;
    document.getElementById('returnDate').value = data.returnToWork.returnDate;


    document.getElementById('fullDutiesRegular').checked = data.workingStatus.fullDutiesRegular;
    document.getElementById('fullDutiesReduced').checked = data.workingStatus.fullDutiesReduced;
    document.getElementById('modifiedDutiesRegular').checked = data.workingStatus.modifiedDutiesRegular;
    document.getElementById('modifiedDutiesReduced').checked = data.workingStatus.modifiedDutiesReduced;
    document.getElementById('other').checked = data.workingStatus.other;
    document.getElementById('otherText').value = data.workingStatus.otherText;


    document.getElementById('returnProgress').value = data.returnProgress;
    document.getElementById('expectedReturnDate').value = data.expectedReturnDate;
    document.getElementById('concerns').value = data.concerns;


    document.getElementById('employerContact').value = data.contactDetails.employerContact;
    document.getElementById('contactDate').value = data.contactDetails.contactDate;

    document.getElementById('fullyRecovered').checked = data.recovery.fullyRecovered;
    document.getElementById('notFullyRecovered').checked = data.recovery.notFullyRecovered;


    const painLevel = document.querySelector(`input[name="painLevel"][value="${data.recovery.painLevel}"]`);
    if (painLevel) painLevel.checked = true;

 
    document.getElementById('receivingTreatment').checked = data.recovery.receivingTreatment;
    document.getElementById('notReceivingTreatment').checked = data.recovery.notReceivingTreatment;
    document.getElementById('medicalProviderType').value = data.recovery.medicalProviderType;

    document.getElementById('lastTreatmentDate').value = data.recovery.lastTreatment.date;
    document.getElementById('lastTreatmentProvider').value = data.recovery.lastTreatment.provider;
    document.getElementById('nextTreatmentDate').value = data.recovery.nextTreatment.date;
    document.getElementById('nextTreatmentProvider').value = data.recovery.nextTreatment.provider;
    document.getElementById('chiropractorFrequency').value = data.recovery.chiropractorFrequency;

    document.getElementById('takingMedication').checked = data.recovery.takingMedication;
    document.getElementById('notTakingMedication').checked = data.recovery.notTakingMedication;
    document.getElementById('medicationName').value = data.recovery.medicationName;

  
    document.getElementById('doingExercises').checked = data.recovery.doingExercises;
    document.getElementById('notDoingExercises').checked = data.recovery.notDoingExercises;
    document.getElementById('exercisesList').value = data.recovery.exercises;

    document.getElementById('additionalInfo').value = data.additionalInfo;

    document.getElementById('certifyInformation').checked = data.certification.certifyInformation;
    document.getElementById('privacyNotice').checked = data.certification.privacyNotice;
}


function getFormData() {
    const data = {
        workerName: document.getElementById('workerName').textContent,
        claimNumber: document.getElementById('claimNumber').value,
        workerId: document.getElementById('workerId').textContent,
        returnToWork: {
            noMissedTime: document.getElementById('noMissedTime').checked,
            notReturned: document.getElementById('notReturned').checked,
            returned: document.getElementById('returned').checked,
            returnDate: document.getElementById('returnDate').value
        },
        workingStatus: {
            fullDutiesRegular: document.getElementById('fullDutiesRegular').checked,
            fullDutiesReduced: document.getElementById('fullDutiesReduced').checked,
            modifiedDutiesRegular: document.getElementById('modifiedDutiesRegular').checked,
            modifiedDutiesReduced: document.getElementById('modifiedDutiesReduced').checked,
            other: document.getElementById('other').checked,
            otherText: document.getElementById('otherText').value
        },
        returnProgress: document.getElementById('returnProgress').value,
        expectedReturnDate: document.getElementById('expectedReturnDate').value,
        concerns: document.getElementById('concerns').value,
        contactDetails: {
            employerContact: document.getElementById('employerContact').value,
            contactDate: document.getElementById('contactDate').value
        },
        recovery: {
            fullyRecovered: document.getElementById('fullyRecovered').checked,
            notFullyRecovered: document.getElementById('notFullyRecovered').checked,
            painLevel: parseInt(document.querySelector('input[name="painLevel"]:checked')?.value || '0'),
            receivingTreatment: document.getElementById('receivingTreatment').checked,
            notReceivingTreatment: document.getElementById('notReceivingTreatment').checked,
            medicalProviderType: document.getElementById('medicalProviderType').value,
            lastTreatment: {
                date: document.getElementById('lastTreatmentDate').value,
                provider: document.getElementById('lastTreatmentProvider').value
            },
            nextTreatment: {
                date: document.getElementById('nextTreatmentDate').value,
                provider: document.getElementById('nextTreatmentProvider').value
            },
            chiropractorFrequency: document.getElementById('chiropractorFrequency').value,
            takingMedication: document.getElementById('takingMedication').checked,
            notTakingMedication: document.getElementById('notTakingMedication').checked,
            medicationName: document.getElementById('medicationName').value,
            doingExercises: document.getElementById('doingExercises').checked,
            notDoingExercises: document.getElementById('notDoingExercises').checked,
            exercises: document.getElementById('exercisesList').value
        },
        additionalInfo: document.getElementById('additionalInfo').value,
        certification: {
            certifyInformation: document.getElementById('certifyInformation').checked,
            privacyNotice: document.getElementById('privacyNotice').checked
        }
    };
    return data;
} 