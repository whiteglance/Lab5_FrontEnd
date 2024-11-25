// Номер варіанта
const variantNumber = 8;

// Отримуємо елементи форми
const fullName = document.getElementById('fullName');
const phone = document.getElementById('phone');
const idCard = document.getElementById('idCard');
const faculty = document.getElementById('faculty');
const birthDate = document.getElementById('birthDate');
const colorPicker = document.getElementById('colorPicker');
const table = document.getElementById('myTable');

// Регулярні вирази
const fullNameRegex = /^[А-ЯІЇЄҐа-яіїєґ]{2,}\s[А-ЯІЇЄҐа-яіїєґ]\.[А-ЯІЇЄҐа-яіїєґ]\.$/;
const phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
const idCardRegex = /^[A-ZА-Я]{2}\s№\d{5}$/;
const facultyRegex = /^[A-ZА-ЯІЇЄҐa-zа-яіїєґ]{3,}$/;
const birthDateRegex = /^\d{2}\.\d{2}\.\d{4}$/;

// Перевірка форми
function validateForm() {
    let isValid = true;

    function checkInput(input, regex) {
        if (!regex.test(input.value)) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    }

    checkInput(fullName, fullNameRegex);
    checkInput(phone, phoneRegex);
    checkInput(idCard, idCardRegex);
    checkInput(faculty, facultyRegex);
    checkInput(birthDate, birthDateRegex);

    if (isValid) {
        alert(`ПІБ: ${fullName.value}\nТелефон: ${phone.value}\nID-картка: ${idCard.value}\nФакультет: ${faculty.value}\nДата народження: ${birthDate.value}`);
    } else {
        alert("Будь ласка, виправте помилки у формі.");
    }
}

// Створення таблиці 6x6
function createTable() {
    let counter = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 6; j++) {
            const cell = document.createElement('td');
            cell.textContent = counter;
            cell.dataset.number = counter;
            cell.addEventListener('mouseover', handleMouseOver);
            cell.addEventListener('click', handleClick);
            cell.addEventListener('dblclick', handleDoubleClick);
            row.appendChild(cell);
            counter++;
        }
        table.appendChild(row);
    }
}

// Зміна кольору при наведенні
function handleMouseOver(event) {
    const cellNumber = parseInt(event.target.dataset.number, 10);
    if (cellNumber === variantNumber) {
        event.target.style.backgroundColor = getRandomColor();
    }
}

// Зміна кольору при кліку
function handleClick(event) {
    event.target.style.backgroundColor = colorPicker.value;
}

// Зміна кольору стовпців при подвійній кліку
function handleDoubleClick(event) {
    const columnIndex = event.target.cellIndex;
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
        for (let j = columnIndex; j < rows[i].cells.length; j += 2) {
            rows[i].cells[j].style.backgroundColor = getRandomColor();
        }
    }
}

// Генерація випадкового кольору
function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Ініціалізація таблиці
createTable();
