const tabs = (headerSelector, tabSelector, contentSelector, active) => {

    const header = document.querySelector(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);


    function hideTabContent() {
        content.forEach((item) => {
            item.style.display = "none";
        });

        tab.forEach(item => {
            item.classList.remove(active);
        });
    }

    function showTabContent(i = 0) {
        content[i].style.display = "block";
        tab[i].classList.add(active);
    }

    hideTabContent();
    showTabContent();

    header.addEventListener('click', (e) => {
        const target = e.target;
        // если кликнули куда надо
        if (target.classList.contains(tabSelector.replace(/\./, '')) ||
            target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
            tab.forEach((item, i) => {
                if(target == item || target.parentNode == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

};

export default tabs;