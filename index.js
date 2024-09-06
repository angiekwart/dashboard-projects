let name = 'Angelica';

const xArray = ["Fruit", "Vegetables"];
        console.log(xArray);

const yArray = [69, 31];
        console.log(yArray);
        // const barColors = [
        //         rgb(25, 4, 159),
        //         rgb(245, 109, 5),
        // ];

const layout = {title:"Category Percentages"};
        console.log(layout);

const data = [{labels:xArray, values:yArray, type:"pie"}];
        console.log(data);

Plotly.newPlot("myPie", data, layout);
