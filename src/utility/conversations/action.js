export default {
  updateSelectedPlaces(context, selectedPlaces) {
    context.commit("setSelectedPlace", selectedPlaces);
  },

  async initChat(context, chat) {
    try {
      const response = await fetch(
        "https://langraphagent-production.up.railway.app/api/v1/llm/chat/init",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            thread_id: String(context.state.thread_id),
            lang: "en",
            locations: [],
            user_interaction: chat,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      context.commit("sendChat", { user: chat, suggestion: data });
    } catch (error) {
      console.error("Error:", error);
    }
  },

  async startPlan(context, chat) {
    try {
      const response = await fetch(
        "https://langraphagent-production.up.railway.app/api/v1/llm/chat/planning",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            thread_id: String(context.state.thread_id),
            lang: "en",
            location_basic_info: [],
            user_interaction: chat,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      context.commit("sendChat", { user: chat, plan: data });
    } catch (error) {
      console.error("Error:", error);
    }
  },

  async sendChat(context, chat) {
    try {
      const response = await fetch(
        "https://langraphagent-production.up.railway.app/api/v1/llm/chat/continue",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            thread_id: String(context.state.thread_id),
            lang: "en",
            location_basic_info: [],
            user_interaction: chat,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      context.commit("sendChat", { user: chat, suggestion: data });
    } catch (error) {
      console.error("Error:", error);
    }
  },

  setMap(context, map) {
    context.commit("setMap", map);
  },

  setMarker(context, marker) {
    context.commit("setMarker", marker);
  },

  setNewMapCenter(context, center) {
    context.commit("setNewMapCenter", center);
  },
};
