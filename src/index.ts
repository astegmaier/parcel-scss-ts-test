//@ts-ignore
import classes from "./styles.module.scss";

const output1 = document.getElementById("output1")!;
output1.innerText =
  "The class name of this block ('style1') was applied from typescript by importing an scss module. Strong typing provided by the typed-scss-modules package.";
output1.className = classes.style1;

const output2 = document.getElementById("output2")!;
output2.innerText =
  "The class name of this block ('style-with-dashes') was applied the same way. Parcel will not transform the name of this class to remove the dashes, so you need to make sure to set up typed-scss-modules to do the same thing (with the '--nameFormat none' option).";
output2.className = classes["style-with-dashes"];
