addEventListener('load', () => {
    let nav = document.querySelector('nav');
    window.scrollY > 0 ? nav.classList.add('nav--scrolled') : nav.classList.remove('nav--scrolled');

    let clothes = [
        {
            title: 'Half Running Set',
            tag: 'Sale',
            price: '$59.99',
            rating: 4,
        },
        {
            title: 'Formal Men Lowers',
            tag: 'New',
            price: '$85',
            rating: 3.5,
        },
        {
            title: 'Half Running Suit',
            tag: '',
            price: '$50',
            rating: 5,
        },
        {
            title: 'Half Fancy Lady Dress',
            tag: 'Hot',
            price: '$119.99',
            rating: 1.5,
        },
        {
            title: 'Flix Flox Jeans',
            tag: '',
            price: '$67',
            rating: 3,
        },
        {
            title: 'Half Fancy Lady Dress',
            tag: 'Hot',
            price: '$99.99',
            rating: 4.5,
        },
        {
            title: 'Printed Straight Kurta',
            tag: 'Sale',
            price: '$110',
            rating: 2,
        },
        {
            title: 'Collot Full Dress',
            tag: 'Sale',
            price: '$75',
            rating: 4,
        }
    ]

    let reviews = [
        {
            name: 'Mark Jevenue',
            info: 'Fashion expert',
            comment: `Very nice jeans, very comfortable with the stretch element and look good too. 
            Very pleased with longer length as being 5ft 10″, sometimes have trouble getting jeans that don't flap
            round my ankles but these are perfect and look equally as good with sandals or boots. Would definitel 
            recommend.`
        },
        {
            name: 'Emily Scott',
            info: 'Influencer',
            comment: `These are the best pants ever!! I have several pairs in different colors & LOVE them!! They're
            super soft & the colored “jeans” do not look like jeans at all. Very figure flattering with just the right
            amount of stretch.`
        },
        {
            name: 'Jack Miller',
            info: 'Occasional buyer',
            comment: `This is super comfy! It is warm, fits well also over broad shoulders, and breathes somewhat.
            It can go in the washer repeatedly without fading or without it losing any of its softness. You can do yard
            work in it but I wouldn’t recommend going for a jog with this on.`
        }
    ]

    clothes.forEach((item, i) => {
        let div = document.createElement('div');
        div.classList.add('product');

        document.querySelector('.products-box').appendChild(div);
        div.innerHTML = `
        <div class="product__image">
            <img src="./img/${i + 1}.jpg" alt="Product ${i++}">
        </div>
        <div class="product__info">
            <div class="rating"></div>
            <h3>${item.title}</h3>
            <p>${item.price}</p>
            <div class="product__like">
                <ion-icon name="heart">
                    <div class='red-bg'></div>
                </ion-icon>
            </div>
        </div>`;

        let span = document.createElement('span');
        span.innerHTML = `<span class="tag">${item.tag}</span>`;
        if (item.tag != '') (div.children[0]).appendChild(span);

        let rating = ['star-outline', 'star-outline', 'star-outline', 'star-outline', 'star-outline'];
        let decimalRating = (item.rating).toString().split('.')[1];

        rating.forEach((str, index) => {
            if (item.rating >= (index + 1))
                rating[index] = 'star';
            else if (decimalRating == '5' && (item.rating + 1) > index + 1)
                rating[index] = 'star-half-outline';
        })

        div.children[1].children[0].innerHTML = `
            <ion-icon name="${rating[0]}"></ion-icon>
            <ion-icon name="${rating[1]}"></ion-icon>
            <ion-icon name="${rating[2]}"></ion-icon>
            <ion-icon name="${rating[3]}"></ion-icon>
            <ion-icon name="${rating[4]}"></ion-icon>
        `;
    })

    reviews.forEach((item, i) => {
        let div = document.createElement('div');
        div.classList.add('review');

        document.querySelector('.reviews-box').appendChild(div);
        div.innerHTML = `
            <div class="review-quote">
                <box-icon type='solid' name='quote-right'></box-icon>
            </div>
            <div class="review__profile">
                <img src="./img/profile-${i+1}.jpg" alt="Profile image">
                <div class="review__info">
                    <h3>${item.name}</h3>
                    <h4>${item.info}</h4>
                </div>
            </div>
            <p class="review__content">${item.comment}</p>
            <div class="review__buttons">
                <button style="--btnColor: #19b45f;">
                    <box-icon name='comment-dots'></box-icon>
                    <p>Reply</p>
                </button>
                <button style="--btnColor: #1c4dee;">
                    <box-icon name='like'></box-icon>
                    <p>Like</p>
                </button>
                <button class="shareReview" style="--btnColor: #ee1c2e;">
                    <box-icon name='upload'></box-icon>
                    <p>Share</p>
                </button>
                <div class="share-modal">
                    <div class="share__item">
                        <img src="./img/whatsapp.png" alt="Whatsapp Logo">
                        <p>WhatsApp</p>
                    </div>
                    <div class="share__item">
                        <img src="./img/Twitter.png" alt="Twitter Logo">
                        <p>Twitter</p>
                    </div>
                    <div class="share__item">
                        <img src="./img/facebook.png" alt="Facebook Logo">
                        <p>Facebook</p>
                    </div>
                    <div class="share__item">
                        <img src="./img/reddit.png" alt="Reddit Logo">
                        <p>Reddit</p>
                    </div>
                </div>
            </div>
        `;
    })

    addEventListener('scroll', () => {
        window.scrollY > 0 ? nav.classList.add('nav--scrolled') : nav.classList.remove('nav--scrolled');
    })

    document.querySelectorAll('.product__like').forEach(like => {
        like.addEventListener('click', () => {
            like.parentNode.parentNode.classList.toggle('product--liked');
        })
    })

    document.querySelectorAll('.review__buttons button:not(.shareReview)').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('review--active');
        })
    })

    document.querySelectorAll('.shareReview').forEach(share => {
        share.addEventListener('click', () => {
            let shareModal = share.nextElementSibling;
            if (shareModal.classList.contains('share-modal--show')) {
                shareModal.classList.remove('share-modal--show');
            } else {
                document.querySelectorAll('.share-modal--show').forEach(i => i.classList.remove('share-modal--show'));
                shareModal.classList.add('share-modal--show');
            }
        })
    })

    document.querySelector('.nav-menu').addEventListener('click', () => {
        document.querySelector('.nav__center').classList.toggle('nav__center--show');
    })
})