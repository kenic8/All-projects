export default class PostService {
  constructor() {
    this.postprojekt1();
  }

  postprojekt1() {
    const url =
      "https://kevinnicholas.eu/wordpress/wp-json/wp/v2/posts?categories=3";
    fetch(url)
      .then((Response) => {
        return Response.json();
      })
      .then(function (json) {
        appendPosts(json);
      });
  }



  
    // set default page or given page by the hash url
    // function is called 'onhashchange'


    mouseoverevent(e) {
      // let u = document.getElementsByClassName("Hbox").find(e.target);
      if (e.target != document.getElementById("magridwrap")) {
        if (e != "leave") {
        e.target.childNodes[0].style.opacity = 1
        if (lasthover != null) {
          lasthover.childNodes[0].style.opacity = 0
        }
        lasthover = e.target
      } else {
        lasthover.childNodes[0].style.opacity = 0
        lasthover = null;
      }
      }
  }

  mouseoverevent2(e) {
    // let u = document.getElementsByClassName("Hbox").find(e.target);
    if (e.target != document.querySelector(".hist-container")) {
      if (e != "leave") {
      e.target.childNodes[1].style.opacity = 1
      if (lasthover2 != null) {
        lasthover2.childNodes[1].style.opacity = 0
      }
      lasthover2 = e.target
    } else {
      lasthover2.childNodes[1].style.opacity = 0
      lasthover2 = null;
    }
    }
}


  
  OpenOpslag(e) {
    const url = "https://kevinnicholas.eu/wordpress/wp-json/wp/v2/posts?categories=3";
    fetch(url).then((Response) => {
        return Response.json();
      })
      .then(function (json) {
          window.open(json[e.target.id].link,"_self")
      });
  }
  }
  // 



  function appendPosts(posts) {
    let HTMLTemplate = "";
    for (let i=0; i<posts.length; i++) {
      HTMLTemplate += `
      <div class="histoption" id="${i}" onclick="openOpslag()" style="background: url(${posts[i].acf.billedehent.url})">
      <div class="HboxOlaywrap"><p class="Otexthis">${posts[i].title.rendered}</p></div>
      </div>
      `;
      /// DU TILGåR billeders url via denne path, så får du string med urlen
    }
    /// tilgår html via dommen - markup
    document.querySelector(".hist-container").innerHTML = HTMLTemplate;
  }


let lasthover;
let lasthover2;
// const postService = new PostService();
// export default postService;