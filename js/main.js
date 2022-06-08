let spans = document.querySelectorAll( '.span' );
let result = document.getElementById( 'resultText' );
let button = document.getElementById( 'button' );
let card = document.getElementById( 'card' );
// let main = document.getElementsByClassName( 'main' );

document.getElementById( 'form' ).addEventListener( 'click', (event) => {
    event.preventDefault();
} );

button.disabled = true;

spans.forEach( ( span, i ) => {

    spans[ i ].addEventListener( 'click', () => {

        spans.forEach( ( cadaSpan, i ) => {
            spans[ i ].classList.remove( 'numbers__number--selected' );
        } );
        span = [ ...spans[ i ].innerHTML ];
        result.innerHTML = `You selected ${span} out of 5`;
        spans[ i ].classList.add( 'numbers__number--selected' );

        button.disabled = false;
    });
});

button.addEventListener( 'click', () => {
        setTimeout(() => {
            card.style.opacity = 1;
            card.style.zIndex = 1;
        }, 500);
});




