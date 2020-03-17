<script type="text/javascript">
  $('.navbar-burger').click(function() {
    $('#navbarMenuHeroA, .navbar-burger').toggleClass('is-active');
  });
</script>


<script>
  var ctx = document.getElementById('authorBar');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [
        ['Robert', 'Jordan'],
        ['Steven', 'Erikson'],
        ['George', 'R. R. Martin'],
        ['Brandon', 'Sanderson'],
        ['Stephen', 'King'],
        ['J. K.', 'Rowling'],
        ['Tad', 'Williams'],
        ['Stephen', 'R. Lawhead'],
        ['Patrick', 'Rothfuss'],
        ['J. R. R.', 'Tolkien'],
        ['Christopher', 'Paolini'],
        ['Joe', 'Abercrombie'],
        ['David', 'Eddings'],
        ['Scott', 'Bakker'],
        ['Gene', 'Wolfe'],
        ['Guy', 'Gavriel Kay'],
        ['Garth', 'Nix'],
        ['C. S.', 'Lewis'],
        ['Ursula', 'K Le Guin'],
        ['Fred', 'Saberhagen']
      ],
      datasets: [{
        label: '# of Votes',
        data: [4074024, 3263937, 1745214, 1384299, 1342947,
          1104023, 1073825, 936893, 653713, 636241, 629820,
          619176, 528051, 510086, 388113, 373211, 330083,
          319105, 242246, 173849
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
</script>


<!-- Max Wolfe's custom JS for form controls -->
<script type="text/javascript">
  $(function() {
    $('#gen-form').submit(function(e) {
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "https://gpt2-wpmqib3yta-uc.a.run.app",
        dataType: "json",
        data: JSON.stringify(getInputValues()),
        beforeSend: function(data) {
          $('#generate-text').addClass("is-loading");
          $('#generate-text').prop("disabled", true);
        },
        success: function(data) {
          $('#generate-text').removeClass("is-loading");
          $('#generate-text').prop("disabled", false);
          $('#tutorial').remove();
          var gentext = data.text;
          if ($("#prefix").length & $("#prefix").val() != '') {
            var pattern = new RegExp('^' + $("#prefix").val(), 'g');
            var gentext = gentext.replace(pattern, '<strong>' + $("#prefix").val() + '</strong>');
          }

          var gentext = gentext.replace(/\n\n/g, "<div><br></div>").replace(/\n/g, "<div></div>");
          var html = '<div class=\"gen-box\">' + gentext + '</div><div class="gen-border"></div>';
          $(html).appendTo('#model-output').hide().fadeIn("slow");
        },
        error: function(jqXHR, textStatus, errorThrown) {
          $('#generate-text').removeClass("is-loading");
          $('#generate-text').prop("disabled", false);
          $('#tutorial').remove();
          var html = '<div class="gen-box warning">There was an error generating the text! Please try again!</div><div class="gen-border"></div>';
          $(html).appendTo('#model-output').hide().fadeIn("slow");
        }
      });
    });
  });

  function getInputValues() {
    var inputs = {};
    $("textarea, input").each(function() {
      inputs[$(this).attr('id')] = $(this).val();
    });
    return inputs;
  }
</script>

<!-- Custom Javascript for generating line by line text + typewriting -->

<script type="text/javascript">
  // set up text to print, each item in array is new line
  var aText = new Array(
    //"                                     ",
    "Fantasy is a text generator based on OpenAI's small GPT2 model and is further trained and finetuned on the text of fantasy novels. Change the parameters on the right to generate interesting text."
  );
  var iSpeed = 17; // time delay of print out
  var iIndex = 0; // start printing array at this posision
  var iArrLength = aText[0].length; // the length of the text array
  var iScrollAt = 20; // start scrolling up at this many lines

  var iTextPos = 0; // initialise text position
  var sContents = ''; // initialise contents variable
  var iRow; // initialise current row

  function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "|";
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
      if (iIndex != aText.length) {
        iArrLength = aText[iIndex].length;
        setTimeout("typewriter()", 500);
      }
    } else {
      setTimeout("typewriter()", iSpeed);
    }
  }


  typewriter();
</script>

<script>
  var ctx = document.getElementById('myChart');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
</script>


<section id="main" class="section">
  <div class="container">
    <div class="columns is-variable is-5">
      <div class="column is-narrow" style="width: 250px;">
        <form id="gen-form">
          <div class="field">
            <label class="label">Text Prompt</label>
            <div class="control">
              <textarea id="prefix" class="textarea" type="text" placeholder="Donald Trump" rows="1"></textarea>
            </div>
            <p class="help">Starts the generated text with the specified text. <em>(Optional: max 500 characters)</em></p>
          </div>
          <div class="field">
            <label class="label">Generated Text Length</label>
            <div class="control">
              <input id="length" class="input" type="text" placeholder="Text input" value="100">
            </div>
            <p class="help">Length of the text in tokens to generate. <em>(max: 1023)</em></p>
          </div>

          <div class="field">
            <label class="label">Temperature</label>
            <div class="control">
              <input id="temperature" class="input" type="text" placeholder="0.7" value="0.7">
            </div>
            <p class="help">Controls the generated text "creativity." <em>(the higher the temperature, the more
                creative)</em></p>
          </div>
          <div class="field">
            <label class="label">Top <em>k</em></label>
            <div class="control">
              <input id="top_k" class="input" type="text" placeholder="40" value="40">
            </div>
            <p class="help">Constrains the generated text tokens to the top <em>k</em> possibilities. <em>(set to 0 to
                disable)</em></p>
          </div>
          <div class="buttons">
            <span class="control">
              <button type="submit" name="submit" id="generate-text" class="button is-link">
                <span class="icon">
                  <i class="fas fa-md fa-pen"></i>
                </span><span>Generate Text!</span></button>
            </span>

          </div>
        </form>
        <div id="extra-buttons" class="buttons">
          <span class="control">
            <button id="save-image" class="button is-success">
              <span class="icon">
                <i class="fas fa-md fa-save"></i>
              </span><span>Save Image</span></button>
          </span>
          <span class="control">
            <button id="clear-text" class="button is-danger">
              <span class="icon">
                <i class="fas fa-md fa-trash-alt"></i>
              </span><span>Clear Texts</span> </button> </span> </div> </div> <div id="model-output" class="column">
                <p id="tutorial" class="subtitle"><em>Generated text will appear here!
                    Use the form to configure GPT-2 and press <strong>Generate Text</strong>
                    to get your own text!
                  </em></p>
        </div>
      </div>
    </div>


</section>



<section class="is-fullheight">
  <div class="wave-container svg-bg" style="height:100%; width:100%">
    <h1> &nbsp; </h1>
    <p class="wt-title">generate text <i class="em-svg em-lower_left_ballpoint_pen" aria-role="presentation" aria-label=""></i></p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 310">
      <path fill="white" fill-opacity="1"
        d="M0,32L30,53.3C60,75,120,117,180,144C240,171,300,181,360,186.7C420,192,480,192,540,208C600,224,660,256,720,229.3C780,203,840,117,900,106.7C960,96,1020,160,1080,208C1140,256,1200,288,1260,298.7C1320,309,1380,299,1410,293.3L1440,288L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z">
      </path>
    </svg>
  </div>

<div class="section">
  <div class="columns is-centered">
    <div class="container">

      <!--=============== FORM COLUMN 1 ===============-->
      <!--INFO TEXT -->
      <div class="column">
        <!--<div class="box">-->
        <div class="columns is-centered">
          <div class="column">
            <div class="container has-text-justified">
              <label class="label">Text Prompt</label>
              <h3 class="subtitle is-6"> A text prompt acts as a seed for the modified GPT2 model. This model computes the probability of the next word given the contents of the prompt. This is a simple probability distribution over a sequence of
                words.</h3>
            </div>
          </div>
          <!--INPUT FORM -->
          <div class="column">
            <form id="gen-form">
              <div class="field">
                <label class="label">Text prompt</label>
                <div class="control">
                  <textarea id="prefix" class="textarea" type="text" placeholder="Donald Trump" rows="1"></textarea>
                </div>
                <!-- optional box subtext <p class="subtitle is-6"> Optional: max 500 characters </p> -->
              </div>
            </form>
          </div>
        </div>
      </div>

      <!--=============== FORM COLUMN 2 ===============-->
      <!--INFO TEXT -->
      <div class="column">
        <div class="columns is-centered">
          <div class="column">
            <div class="container has-text-justified">
              <label class="label">Generated length</label>
              <h3 class="subtitle is-6"> This is the length of the generated text and can generate a max of 1023 words. The maximum length generation can take up to two minutes. </h3>
            </div>
          </div>
          <!--INPUT FORM -->
          <div class="column">
            <form id="gen-form">
              <div class="field">
                <label class="label">Generated length</label>
                <div class="control">
                  <input id="length" class="input" type="text" placeholder="Text input" value="100">
                </div>
                <!-- <p class="subtitle is-6"> max: 1023 </p> -->
              </div>
            </form>
          </div>
        </div>
      </div>

      <!--=============== FORM COLUMN 3 ===============-->
      <!--INFO TEXT -->
      <div class="column">
        <div class="columns is-centered">
          <div class="column">
            <div class="container has-text-justified">
              <label class="label">Temperature</label>
              <!-- https://cs.stackexchange.com/questions/79241/what-is-temperature-in-lstm-and-neural-networks-generally -->
              <h3 class="subtitle is-6"> Temperature is used to control the randomness of predictions. When the temperature approaches 1, predictions become less confident and more "creative".
                Temperature therefore increases the sensitivity to low probability candidates.</h3>
            </div>
          </div>
          <!--INPUT FORM -->
          <div class="column">
            <form id="gen-form">
              <div class="field">
                <label class="label">Temperature</label>
                <div class="control">
                  <input id="temperature" class="input" type="text" placeholder="0.7" value="0.7">
                </div>
                <!-- <p class="subtitle is-6">0 - 1.0 </p> -->
              </div>
            </form>
          </div>
        </div>
      </div>

      <!--=============== FORM COLUMN 4 ===============-->
      <!--INFO TEXT -->
      <div class="column">
        <div class="columns is-centered">
          <div class="column">
            <div class="container">
              <label class="label">Top k</label>
              <h3 class="subtitle is-6"> Constrains the generated text tokens to the top k possibilities. (set to 0 to disable) </h3>
            </div>
          </div>
          <!--INPUT FORM -->
          <div class="column">
            <form id="gen-form">
              <div class="field">
                <label class="label">Top k</label>
                <div class="control">
                  <input id="top_k" class="input" type="text" placeholder="40" value="40">
                </div>
                <!-- <p class="subtitle is-6">set to 0 to disable </p> -->
              </div>
            </form>
          </div>
        </div>
      </div>

      <!--=============== FORM CONTROLS ===============-->

    </div>
  </div>
  <form id="gen-form">
  <div class="columns is-centered">
    <div class="column is-half field">
      <div class="buttons">
        <span class="control">
          <button type="submit" name="submit" id="generate-text" class="button is-link">
            <span class="icon">
              <i class="fas fa-md fa-pen"></i>
            </span><span>Generate Text!</span></button>
        </span>
      </div>
    </div>
  </div>
  </form>
</div>
<div class="columns" style="padding-top: 1.5rem;">
  <div class="column is-6 is-offset-3">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          Generated text
        </p>
      </header>
      <div class="card-content">
        <div id="model-output" class="column">
          <p id="tutorial" class="subtitle"><em>Generated text will appear here!
              Use the form to configure GPT-2 and press <strong>Generate Text</strong>
              to get your own text!
            </em></p>
        </div>
      </div>
      <footer class="card-footer">
        <a class="card-footer-item">Save</a>
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item">Delete</a>
      </footer>
    </div>
  </div>
</div>
<div class="wave-container-coral svg-bg2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 330">
    <path fill="#ffffff" fill-opacity="1"
      d="M0,96L21.8,133.3C43.6,171,87,245,131,282.7C174.5,320,218,320,262,272C305.5,224,349,128,393,106.7C436.4,85,480,139,524,154.7C567.3,171,611,149,655,160C698.2,171,742,213,785,218.7C829.1,224,873,192,916,202.7C960,213,1004,267,1047,272C1090.9,277,1135,235,1178,218.7C1221.8,203,1265,213,1309,218.7C1352.7,224,1396,224,1418,224L1440,224L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z">
    </path>
  </svg>
</div>
</section>
