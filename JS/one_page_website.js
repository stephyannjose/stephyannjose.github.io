<!-- Images used to open the lightbox -->
<div class="row">
  <div class="column">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/008/916/488/small/cartoon-happy-family-on-white-background-vector.jpg" onclick="openModal();currentSlide(1)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="https://img.freepik.com/free-vector/couple-children-cartoon-character_1308-69300.jpg" onclick="openModal();currentSlide(2)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="https://www.shutterstock.com/image-vector/family-together-group-people-standing-260nw-590327120.jpg" onclick="openModal();currentSlide(3)" class="hover-shadow">
  </div>
  <div class="column">
    <img src="https://www.shutterstock.com/image-vector/happy-family-father-mother-son-600w-420500284.jpg" onclick="openModal();currentSlide(4)" class="hover-shadow">
  </div>
</div>

<!-- The Modal/Lightbox -->
<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 4</div>
      <img src="https://static.vecteezy.com/system/resources/thumbnails/008/916/488/small/cartoon-happy-family-on-white-background-vector.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 4</div>
      <img src="https://img.freepik.com/free-vector/couple-children-cartoon-character_1308-69300.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img src="https://www.shutterstock.com/image-vector/family-together-group-people-standing-260nw-590327120.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">4 / 4</div>
      <img src="https://www.shutterstock.com/image-vector/happy-family-father-mother-son-600w-420500284.jpg" style="width:100%">
    </div>

    <!-- Next/previous controls -->
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <!-- Caption text -->
    <div class="caption-container">
      <p id="caption"></p>
    </div>

    <!-- Thumbnail image controls -->
    <div class="column">
      <img class="demo" src="https://static.vecteezy.com/system/resources/thumbnails/008/916/488/small/cartoon-happy-family-on-white-background-vector.jpg" onclick="currentSlide(1)" alt="Nature">
    </div>

    <div class="column">
      <img class="demo" src="https://img.freepik.com/free-vector/couple-children-cartoon-character_1308-69300.jpg" onclick="currentSlide(2)" alt="Snow">
    </div>

    <div class="column">
      <img class="demo" src="https://www.shutterstock.com/image-vector/family-together-group-people-standing-260nw-590327120.jpg" onclick="currentSlide(3)" alt="Mountains">
    </div>

    <div class="column">
      <img class="demo" src="https://www.shutterstock.com/image-vector/happy-family-father-mother-son-600w-420500284.jpg" onclick="currentSlide(4)" alt="Lights">
    </div>
  </div>
</div>