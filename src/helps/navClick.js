
const handleClick = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
    console.log("clicked", id);
  };

const handleMobileClick = (id, toggleMenu) => {
  handleClick(id);
  toggleMenu()
};

export { handleClick, handleMobileClick };
