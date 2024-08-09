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
        suggestion: {
          plan_options:
            "Since you're interested in the Yanshui Beehive Fireworks Festival, which is in Tainan, here are some snack and attraction recommendations nearby:\n\n**Snacks:**\n\n* **Danzai Noodles:** Tainan is famous for its Danzai Noodles, a flavorful dish with pork, shrimp, and a unique sauce.\n* **Tainan Snacks:** Explore the many street food stalls in Tainan's old city, where you can find local specialties like '棺材板' (Coffin Bread), '蝦仁羹' (Shrimp Soup), and '碗粿' (Rice Cakes).\n\n**Attractions:**\n\n* **Anping Old Fort:** A historical fort with Dutch colonial architecture, offering scenic views and insights into Tainan's past.\n* **Hayashi Department Store:** A beautifully preserved historical department store, now a museum showcasing Tainan's cultural heritage.\n\nThese suggestions are close to the festival and offer a taste of Tainan's unique culture and cuisine.",
          video_info: [
            {
              video_title: "⛩️ Day Trip to Tainan (On a Budget)",
              video_id: "68ICkEE6KTo",
            },
            {
              video_title: "Saatnya Berkunjung ke Taiwan Season2 Episode8",
              video_id: "fJFVfEFO_7M",
            },
          ],
          location_info: [
            {
              place_id: "ChIJE_4_lcx8bjQRTnbcpapMf9Q",
              place_name: "Tainan City",
              place_address: "Tainan City, Taiwan",
              place_coordinates: {
                latitude: 22.9998999,
                longitude: 120.22687579999999,
              },
              photo_url:
                "https://lh3.googleusercontent.com/places/ANXAkqHIGpzb57RfHtEFzU1ZM-Dw_uuJP0_NGGdQ_6bY_qp9QderAnn9t7A0BG_ItY2WS72cs0NkGcIfbuD2njhx2rwfK5ia73zuGUQ=s4800-w400-h400",
            },
            {
              place_id: "ChIJZ-TjeHN2bjQR8a3Jat0VHps",
              place_name: "Anping Old Fort",
              place_address:
                "No. 82, Guosheng Rd, Anping District, Tainan City, Taiwan 708",
              place_coordinates: {
                latitude: 23.001509300000002,
                longitude: 120.1606244,
              },
              photo_url:
                "https://lh3.googleusercontent.com/places/ANXAkqGggAO2os3mmdvN-njYyjiUjP2GTpheyV7LKh8-Q4ufbZc1T35sYpyxh5U4A8IaRbIQ6dEH3dxn8CmDgXk13HoIo4bkfVYckWI=s4800-w400-h400",
            },
            {
              place_id: "ChIJrZJc4GJ2bjQRa3BRyIgtRcM",
              place_name: "Hayashi Department Store",
              place_address:
                "No. 63號, Section 2, Zhongyi Rd, West Central District, Tainan City, Taiwan 700",
              place_coordinates: {
                latitude: 22.9917925,
                longitude: 120.2025232,
              },
              photo_url:
                "https://lh3.googleusercontent.com/places/ANXAkqFyc8k2vEH2pmgbqu1ctnzIIHMQO0Z0ccevRjIx43rUnC10yn4hLCYQQENe7QedGr_hJsDALi2fx2wgT997hnWSX3JCvD1bGfs=s4800-w400-h400",
            },
          ],
        },
      });
      console.log(state.history);
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
