const setNextThemeColor = (dark: boolean) => {
  const documentBody = document.querySelector("body") as HTMLElement;
  const navigationBar = document.querySelector("#nav-icon") as HTMLElement;

  console.log("[log]: Dark theme on:", dark);

  if (dark) {
    documentBody.classList.add("dark-theme");
    navigationBar.setAttribute("src", "/favicon-light.svg");

    localStorage.setItem("theme", "dark");
  } else {
    documentBody.classList.remove("dark-theme");
    navigationBar.setAttribute("src", "/favicon-dark.svg");

    localStorage.setItem("theme", "light");
  }
};

export function setTheme() {
  const body = document.querySelector("body") as HTMLElement;
  setNextThemeColor(
    !body.classList.contains("dark-theme") || false,
  );
}

export function persistTheme() {
  let savedTheme = localStorage.getItem("theme") ?? "light";
  setNextThemeColor(savedTheme != "light");
}
