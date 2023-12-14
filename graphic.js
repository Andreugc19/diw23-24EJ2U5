let canvas = document.getElementById("canvas");
let context;
context = canvas.getContext('2d');

context.font = "bold 22px Arial";
context.fillText("Units", 25, 260);
context.fillText("Product", 325, 515);
context.fillText("Basketballs", 130, 480);
context.fillText("Baseballs", 265, 480);
context.fillText("Footballs", 410, 480);

context.beginPath();
context.moveTo(115, 10);
context.lineTo(108, 18);
context.stroke();

context.beginPath();
context.moveTo(115, 10);
context.lineTo(122, 18);
context.stroke();

context.beginPath();
context.moveTo(115, 10);
context.lineTo(115, 450);
context.stroke();

context.beginPath();
context.moveTo(625, 450);
context.lineTo(618, 457);
context.stroke();

context.beginPath();
context.moveTo(625, 450);
context.lineTo(618, 443);
context.stroke();

context.beginPath();
context.moveTo(625, 450);
context.lineTo(115, 450);
context.stroke();

var sales = [{
    product: "Basketballs",
    units: 150
    }, {
    product: "Baseballs",
    units: 125
    }, {
    product: "Footballs",
    units: 300
    }];

    function drawColumn(x, y, width, height, color) {
        let gradient = context.createLinearGradient(x, y, x + width, y);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, '#ededed');
    
        context.fillStyle = gradient;
        context.fillRect(x, y, width, height);
    }
    
    for (let i = 0; i < sales.length; i++) {
        let units = sales[i].units;
    
        drawColumn(170 + i * 135 - 25, 449 - units, 70, units, i === 0 ? '#f5a516' : (i === 1 ? '#11a2cf' : '#f0804f'));
    }