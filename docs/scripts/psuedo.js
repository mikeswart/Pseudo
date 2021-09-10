"use strict";
function ConvertAndUpdate(sourceElement, destinationElement) {
  destinationElement.innerHTML = Pseudo(sourceElement.value);
}
function Pseudo(original) {
  if (original.match("^\\d+$") != null) {
    return original;
  }
  original = original.replace("j", "ĵ");
  original = original.replace("k", "ķ");
  original = original.replace("m", "ӎ");
  original = original.replace("n", "ñ");
  original = original.replace("o", "ø");
  original = original.replace("p", "þ");
  original = original.replace("q", "φ");
  original = original.replace("r", "ř");
  original = original.replace("s", "š");
  original = original.replace("t", "ţ");
  original = original.replace("u", "ü");
  original = original.replace("v", "ѵ");
  original = original.replace("w", "ŵ");
  original = original.replace("x", "χ");
  original = original.replace("y", "ý");
  original = original.replace("z", "ż");
  var startIndex = 0;
  while (startIndex < original.length) {
    original = insert(original, startIndex, "~");
    startIndex += 5;
  }
  original = original.replace("~{", "{");
  original = original.replace("{~", "{");
  original = original.replace("~}", "}");
  original = original.replace("\\~n", "\\n");
  return original;
}
function insert(str, index, value) {
  return str.substr(0, index) + value + str.substr(index);
}
