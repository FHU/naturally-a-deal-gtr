const card_trigger = document.getElementById('trigger_coop_info_card');
const card = document.getElementById('coop_card');
const card_close_x = document.getElementById('coop_card_close')

let card_visible = false;
card.style.visibility = 'hidden';
console.log("successful yay :)")

function show_card() {
    card.style.visibility = 'visible';
    card_visible = true;
}

function hide_card() {
    card.style.visibility = 'hidden';
    card_visible = false;
}

card_trigger.addEventListener('click', (e) => {
    e.preventDefault();
    show_card();
})

card_close_x.addEventListener('click', (e) => {
    hide_card();
})

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        hide_card();
    }
});

document.addEventListener('click', (e) => {
    if (
        !card.contains(e.target) &&
        !card_trigger.contains(e.target)
    ) {
        hide_card();
        console.log('hid card');
    }

});

// document.addEventListener('click', (e) => {
//     console.log('Event:', e.timeStamp);
//     console.log('Target:', e.target);
//     console.log('Inside:', card_trigger.contains(e.target));
// }, true);