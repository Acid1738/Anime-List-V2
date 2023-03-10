function Characters() {
  return (
    <>
      <div className="people">
        <img className="potrait" />
        <p className="name"></p>
      </div>
    </>
  );
}

function CharactersBack() {
  let position = document.getElementById("identify").innerText;
  let Characters = JSON.parse(localStorage.getItem("Characters"));
  let Char = Characters[position];
  let lenth = Char.length;
  let image = document.getElementsByClassName("potrait");
  let chara = document.getElementsByClassName("name");

  for (let i = 0; i < lenth; i++) {
    image[i].src = Char[i].image;
    chara[i].innerText = Char[i].name;

    if (chara[lenth] !== null) {
      document.getElementById("stem").style.display = "block";
      document.getElementById("dot-wave").style.display = "none";
    }
  }
}

export { Characters, CharactersBack };
