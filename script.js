(function () {
        var btn = document.getElementById("menu"),
          nav = document.getElementById("nav");
        document.getElementById("year").textContent = new Date().getFullYear();
        function set(o) {
          nav.classList.toggle("open", o);
          btn.setAttribute("aria-expanded", o);
        }
        btn.addEventListener("click", function () {
          set(!nav.classList.contains("open"));
        });
        nav.addEventListener("click", function (e) {
          if (e.target.tagName === "A") set(false);
        });
      })();