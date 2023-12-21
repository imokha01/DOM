// The range slider function
document.getElementById("myinput").oninput = function() {
    var value = (this.value-this.min)/(this.max-this.min)*100
    this.style.background = 'linear-gradient(to right, green 0%, #82CFD0 ' + value + '%, #fff ' + value + '%, white 100%)'
  };

