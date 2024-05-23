// Define chart options
const chartOptions = {
    chart : {
        type : 'area',
        height : 180,
        toolbar : { show : false }, //Hide chart toolbar
        zoom : { enabled : false }, //Diasable chart zooming
    },
    colors : ['#3498db'], //Set chart color
    series : [{ name : 'Views', data : [18, 50, 42, 94, 41, 65]}], // Set chart data
    dataLabels : { enabled : false }, //Hide chart data labels
    stroke : { width : 3, curve : 'smooth' }, //Set chart stroke propeties
    fill : {
        
    }
}