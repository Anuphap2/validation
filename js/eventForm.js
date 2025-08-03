const eventForm = document.getElementById("eventForm");
// Form
const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");
const telInput = document.getElementById("tel");
const typeTicketInput = document.getElementById("type_ticket");
const qtyInput = document.getElementById("qty");


// Error
const fnameError = document.getElementById("fnameError");
const lnameError = document.getElementById("lnameError");
const telError = document.getElementById("telError");
const ticketError = document.getElementById("ticketError");
const qtyError = document.getElementById("qtyError");

// modal
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const successMessage = document.getElementById('successMessage');

// ฟังก์ชันแสดง modal พร้อมส่งข้อความจำนวนและประเภท
function showmodal(qty, type_ticket) {
    successModal.classList.remove('hidden');
    if (type_ticket == "1") {
        type_ticket = "ปกติ";
    } else if (type_ticket == "2") {
        type_ticket = "VIP";
    } else if (type_ticket == "3") {
        type_ticket = "Premium";
    }
    successMessage.textContent = `จำนวน : ${qty} ใบ ประเภท : ${type_ticket}`;
}

// ปิด modal
closeModalBtn.addEventListener('click', () => {
    successModal.classList.add('hidden');
});


// Clear Error

fnameInput.addEventListener("input", () => {
    fnameError.textContent = "";
});
lnameInput.addEventListener("input", () => {
    lnameError.textContent = "";
});
telInput.addEventListener("input", () => {
    telError.textContent = "";
});
typeTicketInput.addEventListener("input", () => {
    ticketError.textContent = "";
});
qtyInput.addEventListener("input", () => {
    qtyError.textContent = "";
});

eventForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // ดึงค่าล่าสุดตอน submit
    const fname = fnameInput.value.trim();
    const lname = lnameInput.value.trim();
    const tel = telInput.value.trim();
    const type_ticket = typeTicketInput.value;
    const qty = qtyInput.value;

    // ล้างข้อความ error ก่อนเริ่มเช็คใหม่
    fnameError.textContent = "";
    lnameError.textContent = "";
    telError.textContent = "";
    ticketError.textContent = "";
    qtyError.textContent = "";

    // ตรวจสอบชื่อจริง
    if (fname === "") {
        fnameError.textContent = "กรุณากรอกชื่อจริง";
        return;
    }
    if (fname.length < 2) {
        fnameError.textContent = "กรุณากรอกชื่อจริงอย่างน้อย 2 ตัวอักษร";
        return;
    }

    // ตรวจสอบนามสกุล
    if (lname === "") {
        lnameError.textContent = "กรุณากรอกนามสกุล";
        return;
    }
    if (lname.length < 2) {
        lnameError.textContent = "กรุณากรอกนามสกุลอย่างน้อย 2 ตัวอักษร";
        return;
    }

    // ตรวจสอบเบอร์โทร
    if (tel === "") {
        telError.textContent = "กรุณากรอกเบอร์โทรศัพท์";
        return;
    }
    const telPattern = /^(06|08|09)\d{8}$/;
    if (!telPattern.test(tel)) {
        telError.textContent = "กรุณากรอกเบอร์โทรศัพท์ให้ถูกต้อง เช่น 0612345678";
        return;
    }

    // ตรวจสอบประเภทตั๋ว
    if (type_ticket === "") {
        ticketError.textContent = "กรุณาเลือกประเภทตั๋ว";
        return;
    }

    // ตรวจสอบจำนวนตั๋ว
    if (qty === "") {
        qtyError.textContent = "กรุณากรอกจำนวน";
        return;
    }

    const qtyNumber = Number(qty);
    if (isNaN(qtyNumber)) {
        qtyError.textContent = "จำนวนต้องเป็นตัวเลข";
        return;
    }
    if (qtyNumber < 1 || qtyNumber > 5) {
        qtyError.textContent = "จำนวนต้องอยู่ระหว่าง 1 ถึง 5";
        return;
    }
    if ((type_ticket == "2" || type_ticket == "3") && qtyNumber >= 2) {
        qtyError.textContent = "จำนวนตั๋วประเภท VIP หรือ Premium ไม่เกิน 2 ใบ";
        return;
    }



    // แสดง modal success
    showmodal(qtyNumber, type_ticket);
    eventForm.reset();
});

