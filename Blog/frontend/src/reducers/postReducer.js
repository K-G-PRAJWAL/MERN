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

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
