const about = document.querySelector('.about');

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    const active = document.querySelectorAll('.active');
    const article = document.getElementById(id);

    //remove 'active' class from all elements
    if (id) {
        active.forEach((element) => {
            element.classList.remove('active');
        });

        //add 'active' class to (e).target.classList
        e.target.classList.add('active');
        
        //find the article with the matching dataset.id and add 'active' class to it
        article.classList.add('active');
    };
});