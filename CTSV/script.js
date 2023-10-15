function showTab(tabName) {
  var i;
  var tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

window.onload = function() {
  showTab('lylich');
};

var ki_hoc = ["2021.1", "2021.2", "2022.1", "2022.2", "2023.1"];
var cpaData = [3.5, 3.7, 3.6, 3.8, 3.9];
var gpaData = [3.2, 3.4, 3.5, 3.6, 3.7];
var tcNoData = [0, 0, 2, 0, 1];
var tcTichLuyData = [20, 35, 50, 65, 80];

var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ki_hoc,
    datasets: [
      {
        label: 'CPA',
        data: cpaData,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      },
      {
        label: 'GPA',
        data: gpaData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      },
      {
        label: 'TC Nợ',
        data: tcNoData,
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1
      },
      {
        label: 'TC Tích Lũy',
        data: tcTichLuyData,
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

var ki_hoc_renluyen = ["2021.1", "2021.2", "2022.1", "2022.2", "2023.1"];
var diem_renluyen = [20, 40, 70, 80, 65];

var ctxRenLuyen = document.getElementById('myChartRenLuyen').getContext('2d');

var myChartRenLuyen = new Chart(ctxRenLuyen, {
  type: 'line',
  data: {
    labels: ki_hoc_renluyen,
    datasets: [{
      label: 'Kết quả rèn luyện học tập',
      data: diem_renluyen,
      fill: false,
      borderColor: 'blue',
      borderWidth: 2,
      pointBackgroundColor: 'blue',
      pointRadius: 5,
      pointHoverRadius: 8
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }
});
