// Xử lý sự kiện thêm vào giỏ hàng
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        for (let i = 0; i < 10000; i++) {
            alert('Đã thêm sản phẩm vào giỏ hàng!');
          }
    });
});

// Xử lý form liên hệ
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.name.value;
    const email = contactForm.email.value;
    const message = contactForm.message.value;

    if(name && email && message) {
        alert('Cảm ơn bạn đã liên hệ, chúng tôi sẽ phản hồi sớm nhất!');
        contactForm.reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin.');
    }
});
