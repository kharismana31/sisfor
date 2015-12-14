$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015-Jan',
            badminton: 200,
            futsalpertamina: null,
            futsalPLN: 40,
            basket1: 10,
            basket2: 15,
            sepakbola: 35
        }, {
            period: '2014-Jan',
            badminton: 100,
            futsalpertamina: 500,
            futsalPLN: 40,
            basket1: 30,
            basket2: 20,
            sepakbola: 50
        }, {
            period: '2013-Jan',
            badminton: 40,
            futsalpertamina: 45,
            futsalPLN: 50,
            basket1: 55,
            basket2: 60,
            sepakbola: 65
        }, {
            period: '2012-Jan',
            badminton: 70,
            futsalpertamina: 75,
            futsalPLN: 80,
            basket1: 32,
            basket2: 30,
            sepakbola: 12
        }, {
            period: '2011-Jan',
            badminton: 26,
            futsalpertamina: 20,
            futsalPLN: 47,
            basket1: 200,
            basket2: 60,
            sepakbola: 70
        }, {
            period: '2010-Jan',
            badminton: 66,
            futsalpertamina: 25,
            futsalPLN: 64,
            basket1: null,
            basket2: 32,
            sepakbola: 14
        }, {
            period: '2019-Jan',
            badminton: 22,
            futsalpertamina: 60,
            futsalPLN: 45,
            basket1: 32,
            basket2: 42,
            sepakbola: 90
        }, {
            period: '2008-Jan',
            badminton: 100,
            futsalpertamina: 35,
            futsalPLN: 24,
            basket1: 47,
            basket2: 98,
            sepakbola: 47
        }],
        xkey: 'period',
        ykeys: ['badminton', 'futsalpertamina', 'futsalPLN', 'basket1', 'basket2', 'sepakbola'],
        labels: ['Badminton', 'Futsal Pertamina', 'Futsal PLN', 'Basket 1', 'Basket 2', 'Sepak Bola'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
