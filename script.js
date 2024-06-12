const windowHeight = window.innerHeight;

const animateOnScrollElements1 = document.querySelectorAll('.hidden1');
const animateOnScrollElements2 = document.querySelectorAll('.hidden2');
const animateOnScrollElements3 = document.querySelectorAll('.hidden3');
const animateOnScrollElements4 = document.querySelectorAll('.hidden4');

window.addEventListener('scroll', scrollAnimation);

function scrollAnimation(){
    animateOnScrollElements1.forEach(
        (el) => {
            var top = el.getBoundingClientRect().top;

            if (top < windowHeight / 2) {
                el.classList.add('scrollAnimationMoveLeft1');
            } else {
                el.classList.remove('scrollAnimationMoveLeft1');
            }
        }
    );

    animateOnScrollElements2.forEach(
        (el) => {
            var top = el.getBoundingClientRect().top;

            if (top < windowHeight / 2) {
                el.classList.add('scrollAnimationMoveRight2');
            } else {
                el.classList.remove('scrollAnimationMoveRight2');
            }
        }
    );

    animateOnScrollElements3.forEach(
        (el) => {
            var top = el.getBoundingClientRect().top;

            if (top < windowHeight / 2) {
                el.classList.add('scrollAnimationMoveLeft2');
            } else {
                el.classList.remove('scrollAnimationMoveLeft2');
            }
        }
    );

    animateOnScrollElements4.forEach(
        (el) => {
            var top = el.getBoundingClientRect().top;

            if (top < 2 * windowHeight / 3) {
                el.classList.add('scrollAnimationScale');
            } else {
                el.classList.remove('scrollAnimationScale');
            }
        }
    );
}