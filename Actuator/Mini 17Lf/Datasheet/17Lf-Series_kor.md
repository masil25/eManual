<div>
  <label for="lang">Stroke</label>
  <select name="stroke" id="stroke">
    <option value="27">27mm</option>
    <option value="37">37mm</option>
    <option value="50">50mm</option>
    <option value="87">87mm</option>
  </select>
  <div id='datasheet-data'>  

  </div>
</div>

[[17Lf-xxF-27_kor]]

<script>
function hexText() {
  for(let i = 0; i <= 100; i++) {
    let num = Math.round(255/100*i);
    let hexNum = decimalToHex(num, 2);
    document.getElementsByClassName(`hex${i}`)[0].innerHTML = `HEX<br>${hexNum}`;
  }
}
</script>

