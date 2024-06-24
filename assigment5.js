console.log("--- Page 5 ---");

//let old = 7
//let young = 4
let oldCount = 0;
let youngCount = 0;


fetch("/persons")
    .then(response => response.json())
    .then(data => number(data));




function number(data) {
    for (let i = 0; i < data.length; i++) {
        const one = data[i];
        console.log(one);
        if (one.age >= 18) {
            oldCount++;
           }
    }
    console.log(oldCount);
    for (let i = 0; i < data.length; i++) {
        const one = data[i];
        console.log(one);
        if (one.age <= 18) {
            youngCount++;
           }
    }
    console.log(youngCount);




    const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Old', 'Young'],
    datasets: [{
      label: '# Old people',
      data: [oldCount, youngCount],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
}