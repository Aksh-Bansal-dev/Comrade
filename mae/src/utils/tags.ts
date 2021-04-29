export type tagsType =
  | "firstyear"
  | "secondyear"
  | "thirdyear"
  | "fourthyear"
  | "tech"
  | "event"
  | "other";

export let map: Map<tagsType, string> = new Map();
map.set("firstyear", "#4caf50"); // green
map.set("secondyear", "#ffc107"); // amber(yellow)
map.set("thirdyear", "#009688"); // teal
map.set("fourthyear", "#9c27b0"); // purple
map.set("tech", "#3f51b5"); // blue
map.set("event", "#f44336"); // red
map.set("other", "#a6a6a6"); // grey

type chechboxDataType = {
  label: string;
  name: string;
}[];

export const checkboxData: chechboxDataType = [
  {
    label: "1st Year",
    name: "0",
  },
  {
    label: "2nd Year",
    name: "1",
  },
  {
    label: "3rd Year",
    name: "2",
  },
  {
    label: "4th Year",
    name: "3",
  },
  {
    label: "Tech",
    name: "4",
  },
  {
    label: "Events",
    name: "5",
  },
  {
    label: "Other",
    name: "6",
  },
];

export let nameToTag: Map<string, tagsType> = new Map();
nameToTag.set("0", "firstyear");
nameToTag.set("1", "secondyear");
nameToTag.set("2", "thirdyear");
nameToTag.set("3", "fourthyear");
nameToTag.set("4", "tech");
nameToTag.set("5", "event");
nameToTag.set("6", "other");
