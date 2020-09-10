const moviesMocks = [{
    "id": "d350bf09-54e6-4366-a0f1-0579dfc1787c",
    "title": "Star Is Born, A",
    "year": 2006,
    "cover": "http://dummyimage.com/196x153.png/ff4444/ffffff",
    "description": "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    "duration": 2058,
    "contentRating": "PG-13",
    "source": "https://businesswire.com/elementum/eu.jsp",
    "tags": [
        "Drama",
        "Comedy|Drama|Romance",
        "Documentary"
    ]
}, {
    "id": "c5650592-eaaf-414b-959c-3ff75ca50865",
    "title": "Norm MacDonald: Me Doing Standup",
    "year": 2007,
    "cover": "http://dummyimage.com/239x219.png/cc0000/ffffff",
    "description": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    "duration": 2008,
    "contentRating": "NC-17",
    "source": "http://tripod.com/aenean/lectus/pellentesque/eget/nunc/donec.js",
    "tags": [
        "Horror"
    ]
}, {
    "id": "98d4af62-ea04-4fd0-baef-647c532a25d1",
    "title": "Oversimplification of Her Beauty, An",
    "year": 2006,
    "cover": "http://dummyimage.com/112x101.jpg/ff4444/ffffff",
    "description": "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    "duration": 1939,
    "contentRating": "G",
    "source": "http://blogtalkradio.com/mauris/ullamcorper/purus/sit.xml",
    "tags": [
        "Comedy"
    ]
}, {
    "id": "62c5a967-4e83-4e12-a961-dccfe2cd9a53",
    "title": "Every Stewardess Goes to Heaven (Todas las azafatas van al cielo)",
    "year": 2004,
    "cover": "http://dummyimage.com/236x208.jpg/dddddd/000000",
    "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    "duration": 1909,
    "contentRating": "G",
    "source": "https://myspace.com/sed/accumsan/felis/ut/at.json",
    "tags": [
        "Action|Sci-Fi|Thriller",
        "Comedy|Crime|Drama",
        "Documentary",
        "Comedy|Crime|Drama|Thriller"
    ]
}, {
    "id": "e126d06e-3739-4aad-9a4e-8ce95d39a7a7",
    "title": "See You in the Morning",
    "year": 1997,
    "cover": "http://dummyimage.com/186x147.bmp/cc0000/ffffff",
    "description": "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    "duration": 1996,
    "contentRating": "PG-13",
    "source": "http://cnn.com/nulla/justo/aliquam/quis.json",
    "tags": [
        "Documentary",
        "Action|Adventure",
        "Action|Drama|Thriller",
        "Crime|Drama"
    ]
}, {
    "id": "3af079c6-90ec-421e-8fc6-58df6cc3709c",
    "title": "Dead of Night",
    "year": 2011,
    "cover": "http://dummyimage.com/165x236.jpg/dddddd/000000",
    "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    "duration": 1917,
    "contentRating": "PG-13",
    "source": "https://netlog.com/proin/risus/praesent/lectus/vestibulum/quam.json",
    "tags": [
        "Documentary",
        "(no genres listed)",
        "Comedy"
    ]
}, {
    "id": "ea4ab27d-a779-404d-9f4f-db9c2f51e0f4",
    "title": "George Carlin: Life Is Worth Losing",
    "year": 2002,
    "cover": "http://dummyimage.com/134x161.bmp/ff4444/ffffff",
    "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    "duration": 2060,
    "contentRating": "PG",
    "source": "https://mlb.com/eu/felis/fusce/posuere/felis/sed/lacus.jsp",
    "tags": [
        "Drama|Horror|Thriller"
    ]
}, {
    "id": "b8649109-69bd-4d0a-af56-665b47d44a08",
    "title": "Eerie Tales (Unheimliche Geschichten)",
    "year": 2006,
    "cover": "http://dummyimage.com/214x188.png/ff4444/ffffff",
    "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.",
    "duration": 1979,
    "contentRating": "G",
    "source": "https://scientificamerican.com/pellentesque/at/nulla/suspendisse/potenti/cras.json",
    "tags": [
        "Adventure|Children"
    ]
}, {
    "id": "de923d5d-55fe-47a0-b935-30af4b24537e",
    "title": "Long Voyage Home, The",
    "year": 1991,
    "cover": "http://dummyimage.com/211x224.bmp/5fa2dd/ffffff",
    "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    "duration": 1922,
    "contentRating": "NC-17",
    "source": "https://histats.com/vestibulum/proin/eu/mi.aspx",
    "tags": [
        "Action|Crime|Thriller"
    ]
}, {
    "id": "9b682769-a6cc-4e66-b618-c96b711cff76",
    "title": "Futureworld",
    "year": 2006,
    "cover": "http://dummyimage.com/123x110.jpg/5fa2dd/ffffff",
    "description": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    "duration": 2016,
    "contentRating": "NC-17",
    "source": "http://imageshack.us/iaculis/justo/in/hac/habitasse.jpg",
    "tags": [
        "Comedy|Horror"
    ]
}];

module.exports = {
    moviesMocks
};