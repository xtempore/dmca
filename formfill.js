'use strict';

/**
 * Form filler.
 * @param details Object: Property names match field names, values are values to assign
 */
function fillForm(details) {
  // For each detail field set the assigned value
  for (const fld in details) {
    const input = document.getElementsByName(fld)[0] ?? null;
    if (input) {
      input.value = details[fld];
    }
  }
}

function doCheckboxes(checks) {
  // For each check-box check or uncheck as specified
  const boxes = document.querySelectorAll('input[type=checkbox]');
  boxes.forEach(box => {
    const label = box.labels[0].innerText;
    if (checks.hasOwnProperty(label)) {
      box.checked = checks[label];
    }
  });
}
