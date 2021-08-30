const maxPage = 7;
let currentPage = 0;

let a = 2;

const movePrev = () => {
    // currentPage = Number(document.getElementById('currentPage').innerText);

    if(currentPage > 0) {
        currentPage = currentPage - 1;

        document.getElementById('currentPage').innerText = currentPage;
        pageMove(currentPage);
    } 
}

const moveNext = () => {
    // currentPage = Number(document.getElementById('currentPage').innerText);

    if(currentPage < maxPage) {
        currentPage = currentPage + 1;

        document.getElementById('currentPage').innerText = currentPage;
        pageMove(currentPage);
    }
}

const pageMove = ( page ) => {
    const frame = document.getElementById('condition_contents_frame');
    frame.src = `./page/index_${page}.html`;
}

const selectFunction = ( number ) => {
    if(a !== number) {
        document.getElementsByClassName('select')[0].classList.remove('select');
        document.getElementById('select_' + number).classList.add('select');
        
        a = number;
    }
}