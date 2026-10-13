export function insertAtMouseSelection(componentName: string) {
  const select = getSelection();

  if (select === null) return;

  const component = document.createElement(componentName);

  //Ignoring multi-selects for the moment
  const range = select.getRangeAt(0);
  range.surroundContents(component);
}
