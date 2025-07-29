const eventForm = document.getElementById('transferForm');
const dateInput = document.getElementById('date');
const titleInput = document.getElementById('title');
const fullnameInput = document.getElementById('fullname');
const studentIdInput = document.getElementById('studentId');
const phoneInput = document.getElementById('phone');

const programInput = document.getElementById('program');
const sectionInput = document.getElementById('section');

const oldFacultyInput = document.getElementById('oldFaculty');
const oldMajorInput = document.getElementById('oldMajor');
const newFacultyInput = document.getElementById('newFaculty');
const newMajorInput = document.getElementById('newMajor');
const reason = document.getElementById('reason');

const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const successMessage = document.getElementById('successMessage');

const dateError = document.getElementById('dateError');
const titleError = document.getElementById('titleError');
const fullnameError = document.getElementById('fullnameError');
const studentIdError = document.getElementById('studentIdError');
const phoneError = document.getElementById('phoneError');

const programError = document.getElementById('programError');
const sectionError = document.getElementById('sectionError');

const oldFacultyError = document.getElementById('oldFacultyError');
const oldMajorError = document.getElementById('oldMajorError');
const newFacultyError = document.getElementById('newFacultyError');
const newMajorError = document.getElementById('newMajorError');

const reasonError = document.getElementById('reasonError');

function showmodal() {
    successModal.classList.remove('hidden');

}

// ปิด modal
closeModalBtn.addEventListener('click', () => {
    successModal.classList.add('hidden');
});


dateInput.addEventListener("input", () => {
    dateError.textContent = "";
});

titleInput.addEventListener("input", () => {
    titleError.textContent = "";
});

fullnameInput.addEventListener("input", () => {
    fullnameError.textContent = "";
});

studentIdInput.addEventListener("input", () => {
    studentIdError.textContent = "";
});

phoneInput.addEventListener("input", () => {
    phoneError.textContent = "";
});

programInput.addEventListener("change", () => {
    programError.textContent = "";
});

sectionInput.addEventListener("change", () => {
    sectionError.textContent = "";
});

oldFacultyInput.addEventListener("input", () => {
    oldFacultyError.textContent = "";
});

oldMajorInput.addEventListener("input", () => {
    oldMajorError.textContent = "";
});

newFacultyInput.addEventListener("input", () => {
    newFacultyError.textContent = "";
});

newMajorInput.addEventListener("input", () => {
    newMajorError.textContent = "";
});

reason.addEventListener("input", () => {
    reasonError.textContent = "";
});

eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const date = dateInput.value.trim();
    const title = titleInput.value.trim();
    const fullname = fullnameInput.value.trim();
    const studentId = studentIdInput.value.trim();
    const phone = phoneInput.value.trim();

    const program = programInput.value.trim();
    const section = sectionInput.value.trim();

    const oldFaculty = oldFacultyInput.value.trim();
    const oldMajor = oldMajorInput.value.trim();
    const newFaculty = newFacultyInput.value.trim();
    const newMajor = newMajorInput.value.trim();

    const reasonValue = reason.value;

    // ล้างข้อความ error ก่อนเริ่มเช็คใหม่
    dateError.textContent = "";
    titleError.textContent = "";
    fullnameError.textContent = "";
    studentIdError.textContent = "";
    phoneError.textContent = "";

    programError.textContent = "";
    sectionError.textContent = "";

    oldFacultyError.textContent = "";
    oldMajorError.textContent = "";
    newFacultyError.textContent = "";
    newMajorError.textContent = "";

    reasonError.textContent = "";

    if (date === "") {
        dateError.textContent = "กรุณากรอกวันที่";
        dateInput.focus();
        return;
    }

    if (title === "") {
        titleError.textContent = "กรุณากรอกคํานําหน้า";
        titleInput.focus();
        return;
    }

    if (fullname === "") {
        fullnameError.textContent = "กรุณากรอกชื่อ-นามสกุล";
        fullnameInput.focus();
        return;
    }

    if (studentId === "") {
        studentIdError.textContent = "กรุณากรอกรหัสนักศึกษา";
        studentIdInput.focus();
        return;
    }



    if (phone === "") {
        phoneError.textContent = "กรุณากรอกเบอร์โทรศัพท์";
        phoneInput.focus();
        return;
    }

    const telPattern = /^(06|08|09)\d{8}$/;
    if (!telPattern.test(phone)) {
        phoneError.textContent = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง เช่น 0612345678";
        phoneInput.focus();
        return;
    }

    if (program === "") {
        programError.textContent = "กรุณาเลือกหลักสูตร";
        programInput.focus();
        return;
    }

    if (section === "") {
        sectionError.textContent = "กรุณาเลือกภาค";
        sectionInput.focus();
        return;
    }

    if (oldFaculty === "") {
        oldFacultyError.textContent = "กรุณาเลือกคณะเดิม";
        oldFacultyInput.focus();
        return;
    }

    if (oldMajor === "") {
        oldMajorError.textContent = "กรุณาเลือกสาขาวิชาเดิม";
        oldMajorInput.focus();
        return;
    }

    if (newFaculty === "") {
        newFacultyError.textContent = "กรุณาเลือกคณะใหม่";
        newFacultyInput.focus();
        return;
    }

    if (newMajor === "") {
        newMajorError.textContent = "กรุณาเลือกสาขาวิชาใหม่";
        newMajorInput.focus();
        return;
    }

    if (reasonValue === "") {
        reasonError.textContent = "กรุณากรอกรายละเอียด";
        reason.focus();
        return;
    }

    showmodal();
    eventForm.reset();
});
