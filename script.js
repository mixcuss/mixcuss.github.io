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

function screenShotsNavigatorTab(newId) {
    // Get the element
    const collection = document.getElementsByClassName("selected");

    // Get the old id
    const oldId = parseInt(collection[0].id.slice(-1), 10);

    // Remove class
    collection[0].classList.remove("selected");

    // Add class
    document.getElementById("screenShotsNavigatorTab" + newId).classList.add("selected");

    // Rotate screenshots
    rotateScreenShots(oldId, newId);
}

async function rotateScreenShots(oldId, newId) {
    if (oldId > newId) {
        for (var i = 0; i < (oldId - newId); i++) {
            await rotateScreenShotsClockwise();
        }
    }

    if (newId > oldId) {
        for (var i = 0; i < (newId - oldId); i++) {
            await rotateScreenShotsAntiClockwise();
        }
    }
}

async function rotateScreenShotsClockwise() {
    // Move screenShot class 5, 4, 3 forward
    for (var i = 0; i < 3; i++) {
        await moveScreenShotForward(5 - i);
    }

    await delay(100);

    // Move screenShot class 2, 1, 6 forward
    for (var i = 3; i > 0; i--) {
        await moveScreenShotForward(applyPeriodicBoundaryCondition(i - 1));
    }
}

async function rotateScreenShotsAntiClockwise() {
    // Move screenShot class 1, 2, 3 backward
    for (var i = 1; i < 4; i++) {
        await moveScreenShotBackward(i);
    }

    await delay(100);
    
    // Move screenShot class 4, 5, 6 backward
    for (var i = 0; i < 3; i++) {
        await moveScreenShotBackward(4 + i);
    }
}

async function moveScreenShotForward(classId) {
    // The input is for current classId
    // Construct class name
    var className = "screenShot" + classId;

    // Find element id by class name
    const id = document.getElementsByClassName(className)[0].id;

    // Remove old class
    document.getElementById(id).classList.remove(className);

    // Construct new class name after increment
    className = "screenShot" + applyPeriodicBoundaryCondition(classId + 1);

    // Add new class
    document.getElementById(id).classList.add(className);

    // Delay
    await delay(100);

    // Return
    return;
}

async function moveScreenShotBackward(classId) {
    // The input is for current classId
    // Construct class name
    var className = "screenShot" + classId;

    // Find element id by class name
    const id = document.getElementsByClassName(className)[0].id;

    // Remove old class
    document.getElementById(id).classList.remove(className);

    // Construct new class name after decrement
    className = "screenShot" + applyPeriodicBoundaryCondition(classId - 1);

    // Add new class
    document.getElementById(id).classList.add(className);

    // Delay
    await delay(100);

    // Return
    return;
}

function applyPeriodicBoundaryCondition(i) {
    if (i >= 1 && i <= 6) {
        return i;
    }

    if (i > 6) {
        return i - 6;
    }

    if (i < 1) {
        return i + 6;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}