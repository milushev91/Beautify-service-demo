(function () {
        var btn = document.getElementById("menu");
        var nav = document.getElementById("nav");
        var year = document.getElementById("year");

        if (year) {
          year.textContent = new Date().getFullYear();
        }

        if (!btn || !nav) {
          return;
        }

        function set(o) {
          nav.classList.toggle("open", o);
          btn.setAttribute("aria-expanded", String(o));
        }

        btn.addEventListener("click", function () {
          set(!nav.classList.contains("open"));
        });

        nav.addEventListener("click", function (e) {
          var link = e.target && e.target.closest ? e.target.closest("a") : null;

          if (link) {
            set(false);
          }
        });

        document.addEventListener("keydown", function (event) {
          if (event.key === "Escape" && nav.classList.contains("open")) {
            set(false);
          }
        });
      })();