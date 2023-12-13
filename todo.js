// Создайте компоненту для портфолио, представляющую собой анимированную карусель, отображающую ваши проекты. Карусель должна быть высокой сложности и включать в себя следующие элементы:

// Хедер карусели:

// Заголовок "Мои Проекты".
// Кнопки "Предыдущий" и "Следующий" для навигации между проектами.
// Слайды проектов:

// Для каждого проекта создайте слайд с изображением проекта и кратким описанием.
// Возможность добавления нескольких слайдов для каждого проекта.
// Анимации:

// Плавные анимации при переключении между слайдами и проектами.
// Анимация перехода при нажатии на кнопки "Предыдущий" и "Следующий".
// Адаптивность:
// Под телефоны, ноуты и пк
// Карусель должна быть адаптивной и хорошо выглядеть на различных устройствах.
// Отзывчивый дизайн для мобильных устройств.
// Опции:

// Добавьте опции для настройки скорости анимации и других параметров.
// Страница с примером:

// Создайте HTML-страницу, где будет использоваться ваша компонента. Эта страница должна содержать несколько проектов в карусели.
// Примечание:
// Эта задача требует использования HTML, CSS и JavaScript для создания сложной анимированной компоненты. Важно сделать карусель интуитивно понятной, красивой и приятной в использовании. Анимации должны быть плавными, а компонента должна быть легко настраиваемой для интеграции в различные портфолио.


const slides = document.querySelectorAll('.slide');
const sliderContainer = document.querySelector('.slider-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let count = 0;
let width;

function init() {
    width = document.querySelector('.slider').offsetWidth;
    sliderContainer.style.width = width * slides.length + 'px';
    slides.forEach(item => {
        item.style.width = width + 'px';
    });

    rollSlider();
}

init();
window.addEventListener('resize', init);


function disableButton(){
    nextBtn.disabled = true;
    prevBtn.disabled = true;

    setTimeout(() => {
        nextBtn.disabled = false;
        prevBtn.disabled = false;
    }, 1100)
}


nextBtn.addEventListener('click', function () {
    count++;
    if (count >= slides.length) {
        count = 0;
    }
    rollSlider();
    disableButton()
});

prevBtn.addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = slides.length - 1;
    }
    rollSlider();
    disableButton()
});

function rollSlider() {
    sliderContainer.style.transform = 'translate(-' + count * width + 'px)';
}
