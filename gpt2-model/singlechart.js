var ctx = document.getElementById('ass').getContext('2d');

var myChart = new Chart(ctx, {

  type: 'bubble',
      data: {
          labels: ['', 'blood', 'shoulder', 'moon', 'beam', ''],
          datasets: [{
            datalabels: {
              display: true
            },
              data: [{
                "x": 400,
                "y": 0,
                "r": 0
              }, {
                "x": 500,
                "y": 3,
                "r": 15
              }, {
                "x": 678,
                "y": 4,
                "r": 20
              }, {
                "x": 789,
                "y": 5,
                "r": 29
              }, {
                "x": 890,
                "y": 6,
                "r": 35
              }, {
                "x": 1000,
                "y": 10,
                "r": 0
              }]
          }]
      },
      options: {
          plugins: {
              datalabels: {
                  align: 'center',
                  font: {
                    weight: 'bold'
                  },
                  formatter: function(value, context) {
                      return context.chart.data.labels[context.dataIndex];
                  },
              }
          }
      }
  });

  //works but has the [object, object] error

  var ctx = document.getElementById('null').getContext('2d');

  var myChart = new Chart(ctx, {

    type: 'bubble',
    data: {
      labels: ['', 'ass', 'shoulder', 'moon', 'beam', ''],
      datasets: [{
        data: [{
          "x": 400,
          "y": 0,
          "r": 0
        }, {
          "x": 500,
          "y": 3,
          "r": 15
        }, {
          "x": 678,
          "y": 4,
          "r": 20
        }, {
          "x": 789,
          "y": 5,
          "r": 29
        }, {
          "x": 890,
          "y": 6,
          "r": 35
        }, {
          "x": 1000,
          "y": 10,
          "r": 0
        }]
      }]
    },
    options: {
      plugins: {
        datalabels: {
          display: true,
          align: 'top',
          font: {
            weight: 'bold'
          },
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex];
          },
        }
      }
    }
  });

//six letters
  {
    "x": 8500,
    "y": 0,
    "r": 0
  }, {
    "x": 9100,
    "y": 3,
    "r": 15
  }, {
    "x": 9271,
    "y": 8,
    "r": 15
  }, {
    "x": 10094,
    "y": 11,
    "r": 17
  }, {
    "x": 10247,
    "y": 13,
    "r": 17
  }, {
    "x": 10409,
    "y": 15,
    "r": 17
  }, {
    "x": 10990,
    "y": 21,
    "r": 18
  }, {
    "x": 12620,
    "y": 24,
    "r": 21
  }, {
    "x": 12692,
    "y": 27,
    "r": 21
  }, {
    "x": 12883,
    "y": 30,
    "r": 21
  },
//six letters
