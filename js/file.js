//External JS File
function callPopUp() {
  var word = document.getElementById("word_input").value;
  var wordNullCheck = 0;
  console.log(word);
  if (word === "") {
    alert("The field is empty! please enter a word.");
    wordNullCheck = 1;
  }
  if (wordNullCheck == 0) {
    document.getElementById("firstCheckBox").checked = true;
    var elements = document.getElementsByClassName("algorithm");
    if (elements.length > 0) {
      elements[0].style.transition = "0.2s";
      elements[0].style.zIndex = "2";
      elements[0].style.display = "block";
      elements[0].style.top = "180px";
      elements[0].style.boxShadow =
        "0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)";
    }

    var elements_base_blur = document.getElementsByClassName("top");
    if (elements_base_blur.length > 0) {
      elements_base_blur[0].style.filter = "blur(5px)";
      elements_base_blur[0].style.zIndex = "-1";
      elements_base_blur[0].style.display = "block";
      elements_base_blur[0].style.transition = "0.5s";
    }
    var elements_base_blur = document.getElementsByClassName("middle");
    if (elements_base_blur.length > 0) {
      elements_base_blur[0].style.filter = "blur(5px)";
      elements_base_blur[0].style.zIndex = "-1";
      elements_base_blur[0].style.display = "block";
      elements_base_blur[0].style.transition = "0.5s";
    }
    var elements_base_blur = document.getElementsByClassName("bottom");
    if (elements_base_blur.length > 0) {
      elements_base_blur[0].style.filter = "blur(5px)";
      elements_base_blur[0].style.zIndex = "-1";
      elements_base_blur[0].style.display = "block";
      elements_base_blur[0].style.transition = "0.5s";
    }
    document.getElementsByClassName("sticky_search_circle")[0].style.display = "none";
  
  }
}

function hideCheck() {
  document.getElementById("firstCheckBox").checked = false;
}
function changeText() {
  document.getElementById("texto").innerHTML = "New text!";
}
function hide_loading(){
  var elements = document.getElementsByClassName("load_div");
    if (elements.length > 0) {
      elements[0].style.zIndex = "-1";
      elements[0].style.opacity = "0.8";
      elements[0].style.transition = "3s";
    }
}
function hide_loading2(){
  var elements = document.getElementsByClassName("load_div");
    if (elements.length > 0) {
      elements[0].style.zIndex = "-1";
      elements[0].style.transition = "1.55s";
    }
}

function domWorks(data){
  document.getElementById('displayword').innerHTML = data[0];
  document.getElementById('exectime').innerHTML = data[1] +" ms";
  document.getElementById('meaning').innerHTML = data[2];
  document.getElementById('t1').innerHTML = data[1] +" ms";
  document.getElementById('t2').innerHTML = data[3] +" ms";
  document.getElementById('t3').innerHTML = data[4] +" ms";
  document.getElementById('t4').innerHTML = data[5] +" ms";
  console.log(data)


  new Chart(document.getElementById("chartjs-2").getContext('2d'), {
    type: "bar",
    data: {
    labels: ["Linear", "Binary", "Interpolation", "Jump"],
      datasets: [
        {
          label: "Time comparison",
        
          data: [data[1] , data[3], data[4], data[5]],
          fill: false,
          backgroundColor: [
            "rgb(64, 81, 78, 0.2)",
            "rgb(64, 81, 78, 0.2)",
            "rgb(64, 81, 78, 0.2)",
            "rgb(64, 81, 78, 0.2)"
          ],
          borderColor: [
            "rgb(64, 81, 78)",
            "rgb(64, 81, 78)",
            "rgb(64, 81, 78)",
            "rgb(64, 81, 78)"
          ],
          borderWidth: 1,
        },
      ],
    },
    options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } },
  });
  new Chart(document.getElementById("chartjs-1").getContext('2d'), {
    type: "line",
    data: {
    labels: ["Linear", "Binary", "Interpolation", "Jump"],
      datasets: [
        {
          label: "Time comparison",
        
          data: [data[1] , data[3], data[4], data[5]],
          fill: false,
          backgroundColor: [
            "rgb(64, 81, 78, 0.1)",
            "rgb(64, 81, 78, 0.1)",
            "rgb(64, 81, 78, 0.1)",
            "rgb(64, 81, 78, 0.1)"
          ],
          borderColor: [
            "rgb(64, 81, 78)",
            "rgb(64, 81, 78)",
            "rgb(64, 81, 78)",
            "rgb(64, 81, 78)"
          ],
          borderWidth: 5,
        },
      ],
    },
    options: { scales: { yAxes: [{ ticks: { beginAtZero: true } }] } },
  });
}