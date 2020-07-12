import { createStore } from "redux";
import reducer from "./reducers/index";

const initialState = {
  posts: [
    {
      title: "title",
      description: "description",
      postedBy: "Prajwal",
      category: {
        categoryName: "Tech",
      },
    },
    {
      title: "title2",
      description: "description2",
      postedBy: "Prajwal",
      category: {
        categoryName: "Tech",
      },
    },
    {
      title: "title3",
      description: "description3",
      postedBy: "Prajwal",
      category: {
        categoryName: "Tech",
      },
    },
  ],
};

export const store = createStore(
  reducer,
  initialState,
  window.devToolsExtension && window.devToolsExtension()
);
