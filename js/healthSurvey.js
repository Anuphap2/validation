const eventForm = document.getElementById("healthForm");
// Input
const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const genderInput = document.querySelectorAll('input[name="gender"]');

const diseaseInput = document.getElementById("disease");
const diseaseDetails = document.getElementById("diseaseDetails");
const diseaseTextInput = document.getElementById("diseaseText");
// Error
const ageError = document.getElementById("ageError");
const weightError = document.getElementById("weightError");
const heightError = document.getElementById("heightError");
const genderError = document.getElementById("genderError");

// modal
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const successMessage = document.getElementById('successMessage');
const bmiValue = document.getElementById('bmiValue');
const bmiCategory = document.getElementById('bmiCategory');

// ฟังก์ชันแสดง modal พร้อมส่งข้อความจำนวนและประเภท
function showmodal(messageBMI, bmi) {
    successModal.classList.remove('hidden');
    bmiValue.textContent = ` ${bmi.toFixed(2)}`;
    bmiCategory.textContent = messageBMI;
}

// ปิด modal
closeModalBtn.addEventListener('click', () => {
    successModal.classList.add('hidden');
});


// Clear Error
ageInput.addEventListener("input", () => {
    ageError.textContent = "";
});
weightInput.addEventListener("input", () => {
    weightError.textContent = "";
});
heightInput.addEventListener("input", () => {
    heightError.textContent = "";
});

genderInput.forEach(input => {
    input.addEventListener("change", () => {
        genderError.textContent = "";
    });
});

diseaseInput.addEventListener("change", () => {
    if (diseaseInput.checked) {
        diseaseDetails.classList.remove("hidden");
    } else {
        diseaseDetails.classList.add("hidden");
    }
});

eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const age = ageInput.value.trim();
    const weight = weightInput.value.trim();
    const height = heightInput.value.trim();
    const selectedGender = document.querySelector('input[name="gender"]:checked');

    const disease = diseaseInput.checked;
    const diseaseText = diseaseTextInput.value.trim();



    // ล้างข้อความ error ก่อนเริ่มเช็คใหม่
    ageError.textContent = "";
    weightError.textContent = "";
    heightError.textContent = "";
    genderError.textContent = "";

    // ตรวจสอบอายุ
    if (age === "") {
        ageError.textContent = "กรุณากรอกอายุ";
        return;
    }

    if (age < 0) {
        ageError.textContent = "อายุต้องไม่ติดลบ";
        return;
    }

    if (age < 15 || age > 60) {
        ageError.textContent = "อายุต้องอยู่ระหว่าง 15 ถึง 60 ปี";
        return;
    }

    // ตรวจสอบน้ำหนัก
    if (weight === "") {
        weightError.textContent = "กรุณากรอกน้ำหนัก";
        return;
    }
    if (weight < 0) {
        weightError.textContent = "น้ำหนักต้องไม่ติดลบ";
        return;
    }

    if (height < 0) {
        heightError.textContent = "ส่วนสูงต้องไม่ติดลบ";
        return;
    }

    // ตรวจสอบส่วนสูง
    if (height === "") {
        heightError.textContent = "กรุณากรอกส่วนสูง";
        return;
    }

    // ตรวจสอบเพศ
    if (!selectedGender) {
        genderError.textContent = "กรุณาเลือกเพศ";
        return;
    }

    // ตรวจสอบโรค
    if (disease && diseaseText === "") {
        diseaseError.textContent = "กรุณากรอกรายละเอียดโรค";
        return;
    }

    const bmi = weight / (height / 100) ** 2
    let messageBMI = "";

    if (bmi < 18.5) {
        messageBMI = "น้ำหนักน้อย";
    } else if (bmi < 23) {
        messageBMI = "ปกติ";
    } else if (bmi < 25) {
        messageBMI = "น้ำหนักเกิน";
    } else if (bmi < 30) {
        messageBMI = "อ้วน";
    } else {
        messageBMI = "อ้วนมาก";
    }

    showmodal(messageBMI, bmi);
    eventForm.reset();

});