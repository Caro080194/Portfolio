
const handleClick = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({behavior: "smooth", block: "start"});
    }
    console.log("clicked", id);
  };

  export default handleClick;