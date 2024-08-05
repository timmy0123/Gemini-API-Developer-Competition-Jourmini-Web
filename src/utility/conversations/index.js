import conversationGetter from "./getter.js";
import conversationAction from "./action.js";
import conversationMutation from "./mutation.js";

export default {
  namespaced: true,
  state() {
    return {
      history: [
        {
          user: "Give me some suggestion",
        },
        {
          system: "lorem ipsum dolor sit amet",
        },
        // {
        //   suggestion: [
        //     {
        //       name: "Train Station",
        //       description: "lorem ipsum dolor sit amet",
        //       youtube:
        //         "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp;start=1000",
        //       image:
        //         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        //     },
        //     {
        //       name: "Train Station 02",
        //       description: "lorem ipsum dolor sit amet",
        //       youtube:
        //         "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
        //       image:
        //         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        //     },
        //     {
        //       name: "Train Station 03",
        //       description:
        //         "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
        //       youtube:
        //         "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
        //       image:
        //         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        //     },
        //     {
        //       name: "Train Station 04",
        //       description:
        //         "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
        //       youtube:
        //         "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
        //       image:
        //         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        //     },
        //     {
        //       name: "Train Station 05",
        //       description:
        //         "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
        //       youtube:
        //         "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
        //       image:
        //         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        //     },
        //     {
        //       name: "Train Station 06",
        //       description:
        //         "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
        //       youtube:
        //         "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
        //       image:
        //         "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        //     },
        //   ],
        // },
        // {
        //   scheduled: {
        //     description: "lorem ipsum dolor sit ame",
        //     coordinate: [
        //       {
        //         lat: 25.0374865, // 經度
        //         lng: 121.5647688, // 緯度
        //       },
        //     ],
        //   },
        // },
      ],
      explorePlace: [
        {
          name: "Train Station",
          description: "lorem ipsum dolor sit amet",
          youtube:
            "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp;start=1000",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        },
        {
          name: "Train Station 02",
          description: "lorem ipsum dolor sit amet",
          youtube:
            "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        },
        {
          name: "Train Station 03",
          description:
            "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
          youtube:
            "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        },
        {
          name: "Train Station 04",
          description:
            "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
          youtube:
            "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        },
        {
          name: "Train Station 05",
          description:
            "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
          youtube:
            "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        },
        {
          name: "Train Station 06",
          description:
            "lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet",
          youtube:
            "https://www.youtube.com/embed/1m1S0RYKozE?si=qHWGcNg98O7flZE1&amp",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg/600px-TRA_Taipei_Station_and_Zhongxiao_West_Road_at_night_20210115.jpg",
        },
      ],
      selectedPlace: [],
      reply: {
        suggestion: [],
        ask: "lorem ipsum dolor sit amet",
        scheduled: "lorem ipsum dolor sit amet",
      },
    };
  },
  getters: conversationGetter,
  actions: conversationAction,
  mutations: conversationMutation,
};
