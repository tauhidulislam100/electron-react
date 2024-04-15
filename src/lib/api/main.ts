import { fileSystem } from "./../fileSystem";
import { ApiBridge } from ".";
import { createMain } from "..";

const main = createMain<ApiBridge>();
main.on("writeText", (_, value) => fileSystem.appendText("data", "test.txt", `${value} - ${Math.random()}`));