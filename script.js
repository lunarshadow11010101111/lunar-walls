const gallery = document.querySelector(".gallery");
const buttons = document.querySelectorAll(".filters button");

const wallpapers = [
  { 
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
    cat: "dark"
  },
  { 
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    cat: "nature"
  },
  { 
    src: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
    cat: "minimal"
  },
  { 
    src: "https://github.com/lunarshadow11010101111/lunar-walls/blob/main/06b92f26918e202a6464c25f50b3fe8f.jpg",
    cat: "minimal"
  },
  { 
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    cat: "nature"
  }
];

function loadWalls(category) {
  gallery.innerHTML = "";

  wallpapers
    .filter(w => category === "all" || w.cat === category)
    .forEach(w => {
      const div = document.createElement("div");
      div.className = "wall";

      const img = document.createElement("img");
      img.src = w.src + "?auto=format&fit=crop&w=900&q=80";

      const a = document.createElement("a");
      a.href = img.src;
      a.download = "";
      a.innerText = "↓";
      a.className = "download";

      div.append(img, a);
      gallery.appendChild(div);
    });
}

buttons.forEach(btn => {
  btn.onclick = () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    loadWalls(btn.dataset.cat);
  };
});

loadWalls("all");

