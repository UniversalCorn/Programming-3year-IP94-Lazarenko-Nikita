INSERT INTO users(id, login, pass)
    Values(1, 'login1', 'pass1');

INSERT INTO users(id, login, pass)
    Values(2, 'login2', 'pass2');

INSERT INTO products(id, name, img_src, price, category_id)
    Values(1, 'Фільм1', './frontend/img/horror/2.webp', '30 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(2, 'Фільм2', './frontend/img/horror/1.webp', '20 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(3, 'Фільм3', './frontend/img/horror/3.webp', '25 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(4, 'Фільм4', './frontend/img/horror/4.webp', '42 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(5, 'Фільм5', './frontend/img/horror/5.webp', '33 грн', 1);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(6, 'Фільм6', './frontend/img/series/1.webp', '8 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(7, 'Фільм7', './frontend/img/series/2.webp', '10 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(8, 'Фільм8', './frontend/img/series/3.webp', '15 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(9, 'Фільм9', './frontend/img/series/5.webp', '18 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(10, 'Фільм10', './frontend/img/series/4.webp', '13 грн', 2);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(11, 'Фільм11', './frontend/img/comedy/3.webp', '90 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(12, 'Фільм12', './frontend/img/comedy/5.webp', '55 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(13, 'Фільм13', './frontend/img/comedy/2.webp', '3 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(14, 'Фільм14', './frontend/img/comedy/1.webp', '120 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(15, 'Фільм15', './frontend/img/comedy/4.webp', '80 грн', 3);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(16, 'Фільм16', './frontend/img/fantasy/3.webp', '70 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(17, 'Фільм17', './frontend/img/fantasy/1.webp', '90 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(18, 'Фільм18', './frontend/img/fantasy/5.webp', '85 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(19, 'Фільм19', './frontend/img/fantasy/4.webp', '75 грн', 4);

INSERT INTO products(id, name, img_src, price, category_id)
    Values(20, 'Фільм20', './frontend/img/fantasy/2.webp', '100 грн', 4);

INSERT INTO category(id, name)
    Values(1, 'horrors');

INSERT INTO category(id, name)
    Values(2, 'series');

INSERT INTO category(id, name)
    Values(3, 'comedy');

INSERT INTO category(id, name)
    Values(4, 'fantasy');

INSERT INTO watchlist(id, user_id, product_id)
    Values(1, '1', '2');

INSERT INTO watchlist(id, user_id, product_id)
    Values(2, '1', '3');

INSERT INTO watchlist(id, user_id, product_id)
    Values(3, '1', '4');

INSERT INTO watchlist(id, user_id, product_id)
    Values(4, '2', '5');

INSERT INTO watchlist(id, user_id, product_id)
    Values(5, '2', '6');
