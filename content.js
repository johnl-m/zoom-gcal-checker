const eventListenersAdded = new Map();

function content() {
  console.log("Triggered Zoom link checker.");
  // Google Calendar class and id values are obfuscated, so we have to search by text.
  const saveButton = document.evaluate('//span[text()="Save"]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  if (saveButton && !eventListenersAdded.has(saveButton)) {
    console.log("Adding save button listener")
    saveButton.addEventListener('click', function(event) {
      console.log("Handling save button click event");
      const zoomPresent = document.querySelector("#xDetDlgVideo");
      if (zoomPresent) {
        console.log("Zoom link found.");
      } else {
        event.preventDefault();
        alert("No Zoom link detected. Did you forget to add one?");
      }
    });
    eventListenersAdded.set(saveButton, true);
  }
  else {
    console.log(saveButton ? "Save button listener already added." : "No save button found.");
  }
}

document.addEventListener('click', () => setTimeout(content, 50));
