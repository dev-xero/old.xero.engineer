export function setTheme() {
  const documentBody = document.querySelector("body") as HTMLElement;
  const navigationBar = document.querySelector("#nav-icon") as HTMLElement;

  if (!documentBody.classList.contains("dark-theme")) {
    documentBody.classList.add("dark-theme");
    navigationBar.setAttribute("src", "/favicon-light.svg");

    localStorage.setItem("theme", "dark");
  } else {
    documentBody.classList.remove("dark-theme");
    navigationBar.setAttribute("src", "/favicon-dark.svg");

    localStorage.setItem("theme", "light");
  }
}

export function persistTheme() {
  let savedTheme = localStorage.getItem("theme") ?? "light";

  const documentBody = document.querySelector("body") as HTMLElement;
  const navigationBarIcon = document.querySelector("#nav-icon") as HTMLElement;

  if (savedTheme == "light") {
    documentBody.classList.remove("dark-theme");
    navigationBarIcon.setAttribute("src", "/favicon-light.svg");
  } else {
    documentBody.classList.add("dark-theme");
    navigationBarIcon.setAttribute("src", "/favicon-dark.svg");
  }
}
