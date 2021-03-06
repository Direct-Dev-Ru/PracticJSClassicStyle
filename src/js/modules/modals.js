const modals = () => {

    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);

        trigger.forEach((item) => {
            item.addEventListener('click', (e) => {

                //отмена перезагрузки страницы при нажатии на ссылку
                if (e.target) {
                    e.preventDefault();
                }
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                //document.body.classList.add('modal-open');
    
            });    
        });

        close.addEventListener('click', (e) => {
            modal.style.display = "none";
            document.body.style.overflow = ""; //стандартное поведение
            //document.body.classList.remove('modal-open');
        });

        modal.addEventListener('click', (e) => {
            console.log(e.target);
            if (e.target === modal) {
                modal.style.display = "none";
                document.body.style.overflow = "";
                //document.body.classList.remove('modal-open');
            }
        });
    }
   
    function showModalByTime(selector, time) {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
            document.body.style.overflow = "";
        }, time);
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup',60*60000);
};

export default modals;