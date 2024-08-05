export default {
  sendChat(state, chat) {
    if (chat == "schedule") {
      state.history.push({ user: chat });
      state.history.push({
        scheduled: {
          description: "lorem ipsum dolor sit ame",
          coordinate: [
            {
              lat: 25.0374865, // 經度
              lng: 121.5647688, // 緯度
            },
          ],
        },
      });
    } else if (chat == "suggestion") {
      state.history.push({ user: chat });
      state.history.push({
        suggestion: [
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
      });
    } else {
      state.history.push({ user: chat });
      state.history.push({ system: "aaa" });
    }
  },

  setSelectedPlace(state, place) {
    const index = state.selectedPlace.indexOf(place);
    if (index === -1) {
      state.selectedPlace.push(place);
    } else {
      state.selectedPlace.splice(index, 1);
    }
  },
};
